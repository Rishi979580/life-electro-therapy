// ...existing code...
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import websiteData from "@/data/website_data.json"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // get primary phone from data (fallback to first contact.phone)
  const contactPhones: string[] =
    websiteData?.footer?.contactInfo?.phones ?? websiteData?.contact?.phones ?? []
  const primaryPhone = contactPhones.length ? contactPhones[0] : "7380372792"

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            <img
              src="/PremSagar-Logo.svg"
              alt="Life Electro Acupressure Logo"
              className="h-15 w-auto rounded-md"
            />
           <div>
             <h1 className="text-xl font-bold text-primary">Life Electro Acupressure</h1>
            <p className="text-xs text-muted-foreground">Therapy Health Centre</p>
           </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="https://forms.gle/ycPTupJGJyrWjR3J8" className="text-foreground hover:text-primary transition-colors">
              Patient Reg.
            </a>

            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              title={primaryPhone}                      // shows on hover
              onClick={() => (window.location.href = `tel:${primaryPhone}`)} // click to call
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  title={primaryPhone}
                  onClick={() => (window.location.href = `tel:${primaryPhone}`)}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
//