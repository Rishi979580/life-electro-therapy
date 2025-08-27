import { Phone, MapPin, Heart } from "lucide-react"
import websiteData from "@/data/website_data.json"


  
  export function Footer() {
    const footer = websiteData?.footer ?? {}
    const title = footer.title ?? websiteData?.siteInfo?.englishName ?? "Life Electro Acupressure"
    const description =
      footer.description ??
      "Dedicated to providing natural healing solutions through professional electro-acupressure therapy. Your health and wellness is our priority."
    const slogan = footer.slogan ?? "Healing with care since years"
    const quickLinks = footer.quickLinks ?? websiteData?.navigation?.items ?? []
    const contactInfo = footer.contactInfo ?? websiteData?.contact ?? {}
    const phones: string[] = Array.isArray(contactInfo.phones) ? contactInfo.phones : []
    const addressHindi = contactInfo.address?.hindi ?? contactInfo.address?.english ?? ""
  
    return (
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
              <p className="text-muted-foreground mb-4 text-pretty">{description}</p>
              <div className="flex items-center text-muted-foreground">
                <Heart className="w-4 h-4 mr-2 text-secondary" />
                <span className="text-sm">{slogan}</span>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href ?? "#"} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.label ?? "Link"}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Phone className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <div>
                    {phones.length ? (
                      phones.map((p, i) => (
                        <p key={i} className="text-muted-foreground">
                          <a href={`tel:${p}`} className="hover:text-primary">
                            {p}
                          </a>
                        </p>
                      ))
                    ) : (
                      <p className="text-muted-foreground">No phone available</p>
                    )}
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{addressHindi}</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">{footer.copyright ?? "© 2024 Life Electro Acupressure Therapy Health Centre. All rights reserved."}</p>
          </div>
        </div>
      </footer>
    )
  }

