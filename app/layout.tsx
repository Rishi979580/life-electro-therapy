import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://life-electro-accupressure.web.app"),
  title: "लाईफ इलेक्ट्रो एक्यूप्रेशर थेरेपी हेल्थ सेंटर | Life Electro Acupressure",
  description:
    "घुटनों का दर्द, सर्वाइकल, कमर दर्द, कब्ज, साइटिका और लकवे का प्राकृतिक इलेक्ट्रो-एक्यूप्रेशर उपचार। Kushinagar में विश्वसनीय थैरेपी सेंटर।",
  generator: "Next.js",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Life Electro Acupressure Therapy Health Centre",
    description:
      "Trusted centre for natural pain relief — knee pain, cervical, back pain, constipation, sciatica & paralysis treatment.",
    images: [
      {
        url: "/og-thumbnail.png", // put this file in /public (1200×630)
        width: 1200,
        height: 630,
        alt: "Life Electro Acupressure Therapy Health Centre",
      },
    ],
    locale: "en_IN",
    siteName: "Life Electro Acupressure",
  },

  twitter: {
    card: "summary_large_image",
    title: "Life Electro Acupressure Therapy Health Centre",
    description:
      "Natural pain relief & healing through expert electro-acupressure therapy in Kushinagar.",
    images: ["/og-thumbnail.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
