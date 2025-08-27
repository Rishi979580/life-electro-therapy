"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import websiteData from "@/data/website_data.json"
import { Star } from "lucide-react"

type Testimonial = {
  name?: string
  condition?: string
  message?: string
  image?: string
  rating?: number
}

export function Testimonials() {
  const items = (websiteData?.testimonials as Testimonial[]) ?? []
  const total = items.length
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const autoplayRef = useRef<number | null>(null)
  const prefersReducedMotion = useMemo(
    () => typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  )

  // Navigation helpers
  const goTo = (i: number) => setIndex(((i % total) + total) % total)
  const prev = () => goTo(index - 1)
  const next = () => goTo(index + 1)

  // Keyboard nav (Left/Right)
  useEffect(() => {
    if (!total) return
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", keyHandler)
    return () => window.removeEventListener("keydown", keyHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total])

  // Pause when tab hidden
  useEffect(() => {
    const handleVisibility = () => setIsPaused((p) => document.hidden ? true : p)
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [])

  // Autoplay
  useEffect(() => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    if (!total || total < 2) return
    if (isPaused || prefersReducedMotion) return
    autoplayRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 5000)
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current)
    }
  }, [isPaused, total, prefersReducedMotion])

  // Touch swipe (mobile)
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 40
    if (Math.abs(delta) > threshold) delta > 0 ? prev() : next()
    touchStartX.current = null
  }

  if (!total) return null

  const current = items[index] ?? {}
  const avatar =
    current.image?.trim()
      ? current.image
      : `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(current.name ?? "A")}`
  const name = current.name || "Anonymous"
  const condition = current.condition || ""
  const message = current.message || "Patient feedback not available."
  const rating = Math.min(Math.max(current.rating ?? 5, 1), 5)

  return (
    <section
      id="testimonials"
      className="py-16 bg-gradient-to-b from-background to-card"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Patient testimonials"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold tracking-tight mb-2">What Our Patients Say</h2>
        <p className="text-muted-foreground mb-8">
          Real recoveries, real stories — natural healing that works.
        </p>

        <div className="relative">
          {/* Card */}
          <article
            className="bg-white dark:bg-card p-8 rounded-2xl shadow-lg ring-1 ring-border transition hover:shadow-xl"
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${total}`}
          >
            <div className="flex items-start gap-6">
              <img
                src={avatar}
                alt={`${name}'s avatar`}
                className="w-20 h-20 rounded-full object-cover shadow-sm flex-shrink-0 ring-2 ring-muted/30"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{name}</h3>
                    {condition && (
                      <p className="text-sm text-muted-foreground">{condition}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-yellow-400" aria-label={`Rating: ${rating} out of 5`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "" : "opacity-30"}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  <span className="sr-only">Quote:</span>
                  <span className="italic">“{message}”</span>
                </blockquote>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Verified patient</span>
                  <span className="text-xs text-muted-foreground">#{index + 1} of {total}</span>
                </div>
              </div>
            </div>
          </article>

          {/* Controls */}
          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-card/90 hover:bg-white dark:hover:bg-card p-2 rounded-full shadow ring-1 ring-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                type="button"
              >
                <span aria-hidden>‹</span>
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-card/90 hover:bg-white dark:hover:bg-card p-2 rounded-full shadow ring-1 ring-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                type="button"
              >
                <span aria-hidden>›</span>
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {total > 1 && (
          <div className="flex items-center justify-center gap-3 mt-6" role="tablist" aria-label="Select testimonial">
            {items.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-controls={`testimonial-panel-${i}`}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-colors ring-1 ring-border focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  i === index ? "bg-primary" : "bg-border"
                }`}
                type="button"
                title={`Go to ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
