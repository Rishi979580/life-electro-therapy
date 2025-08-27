import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import websiteData from "@/data/website_data.json"

export function ServicesSection() {
  const { services } = websiteData

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {services.description}
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.list.map((service, index) => {
            const img = service.image?.trim() || "/placeholder-service.jpg"

            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <CardHeader className="p-0">
                  {/* Service Image */}
                  <div className="relative w-full h-48">
                    <Image
                      src={img}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2} // first two images load faster
                    />
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs bg-white/90 dark:bg-card/80">
                      {service.badge}
                    </Badge>
                  </div>

                  <CardTitle className="px-6 pt-6 text-xl">{service.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
