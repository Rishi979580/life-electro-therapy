import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Mail } from "lucide-react"
import websiteData from "@/data/website_data.json"

export function ContactSection() {
  const { contact, contactForm } = websiteData

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to start your healing journey? Contact us today to schedule your consultation and take the first step
            towards pain-free living.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {contact.phones.map((phone, index) => (
                    <p key={index} className="text-lg font-semibold">
                      {phone}
                    </p>
                  ))}
                  <p className="text-sm text-muted-foreground">Call us for appointments and consultations</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">{contact.address.hindi}</p>
                <p className="text-sm text-muted-foreground">{contact.address.english}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold">{contact.workingHours.weekdays}</span>
                  </p>
                  <p>
                    <span className="font-semibold">{contact.workingHours.weekend}</span>
                  </p>
                  <p className="text-sm text-muted-foreground">{contact.workingHours.emergency}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-primary" />
                {contactForm.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {contactForm.fields.name.label}
                    </label>
                    <Input placeholder={contactForm.fields.name.placeholder} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {contactForm.fields.phone.label}
                    </label>
                    <Input placeholder={contactForm.fields.phone.placeholder} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {contactForm.fields.condition.label}
                  </label>
                  <Input placeholder={contactForm.fields.condition.placeholder} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {contactForm.fields.message.label}
                  </label>
                  <Textarea placeholder={contactForm.fields.message.placeholder} rows={4} />
                </div>

                <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                  {contactForm.submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
