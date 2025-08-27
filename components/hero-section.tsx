// ...existing code...
"use client"

import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import websiteData from "@/data/website_data.json"

export function HeroSection() {
  const { hero, contact } = websiteData
  const formLink = websiteData?.google_forms?.formLink ?? "https://forms.gle/PE2bdvoBG7q4ssBY8"

  return (
    <section id="home" className="bg-gradient-to-br from-card to-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">{hero.title}</h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-4">{hero.subtitle}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">{hero.description}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90"
                onClick={() => window.open(formLink, "_blank", "noopener,noreferrer")}
              >
                <Phone className="w-5 h-5 mr-2" />
                {hero.buttons.primary}
              </Button>
              <Button variant="outline" size="lg">
                {hero.buttons.secondary}
              </Button>
            </div>

            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              <span>{contact.address.hindi}</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <img
                src={hero.image.src || "/placeholder.svg"}
                alt={hero.image.alt}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{hero.card.title}</h3>
                <p className="text-muted-foreground">{hero.card.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
// ...existing code...