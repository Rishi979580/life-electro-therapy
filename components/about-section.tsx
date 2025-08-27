import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Clock } from "lucide-react"
import websiteData from "@/data/website_data.json"

const iconMap = {
  Award,
  Users,
  Clock,
  CheckCircle,
}

export function AboutSection() {
  const { about } = websiteData

  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{about.title}</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">{about.description}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {about.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <Card className="p-6">
              <CardContent className="p-0">
                <img
                  src={about.card.image.src || "/placeholder.svg"}
                  alt={about.card.image.alt}
                  className="w-full h-80 object-cover rounded-lg mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{about.card.title}</h3>
                  <p className="text-muted-foreground">{about.card.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
