"use client"

import websiteData from "@/data/website_data.json"

export function YoutubeVideos() {
  const videos = websiteData?.youtube_videos ?? []
  if (!videos.length) return null

  return (
    <section id="videos" className="py-16 bg-gradient-to-b from-background to-card">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-3">Patient Videos</h2>
        <p className="text-muted-foreground mb-8">Real treatments, real recoveries.</p>

        {/* Grid of videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video: any, i: number) => {
            // Extract video ID (handles both youtu.be and youtube.com)
            let id = ""
            try {
              const url = new URL(video.url)
              if (url.hostname.includes("youtu.be")) {
                id = url.pathname.slice(1)
              } else {
                id = url.searchParams.get("v") || ""
              }
            } catch {
              id = ""
            }

            return (
              <div key={i} className="flex flex-col gap-3">
                <div className="aspect-video w-full overflow-hidden rounded-xl shadow ring-1 ring-border">
                  <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    title={video.title || `YouTube video ${i + 1}`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                {video.title && (
                  <p className="text-sm text-muted-foreground">{video.title}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
