import type React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { IBM_Plex_Sans, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { StickyHeader } from "@/components/sticky-header"
import { FloatingCallButton } from "@/components/floating-call-button"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "24/7 Orlando Locksmith Services | House & Car Lockouts | Veteran Lock & Safe",
  description:
    "Family-owned Orlando locksmith providing 24/7 emergency locksmith services. Expert solutions for house lockouts, car lockouts, residential locks, commercial security, and gun safes. Licensed, insured, and trusted by thousands in Central Florida.",
  keywords: "locksmith Orlando, house lockout, car lockout, emergency locksmith, residential locks, commercial locksmith, gun safe installation, key duplication, Tampa locksmith, Daytona locksmith",
  generator: "v0.app",
  openGraph: {
    title: "24/7 Orlando Locksmith Services | Veteran Lock & Safe",
    description: "Family-owned locksmith providing emergency services in Central Florida. Licensed, insured, fair pricing.",
    url: "https://veteranlockandsafe.com",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Veteran Lock & Safe Inc",
              image: "https://veteranlockandsafe.com/images/veteran-lock-logo.png",
              description: "Family-owned locksmith providing 24/7 emergency services in Central Florida",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Orlando",
                addressRegion: "FL",
                postalCode: "32801",
                addressCountry: "US",
              },
              telephone: "407-860-9524",
              email: "Admin@veteranlockandsafe.com",
              url: "https://veteranlockandsafe.com",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "23:59",
                  description: "24/7 Emergency Service",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Orlando", "@id": "https://en.wikipedia.org/wiki/Orlando,_Florida" },
                { "@type": "City", name: "Winter Park" },
                { "@type": "City", name: "Kissimmee" },
                { "@type": "City", name: "Lake Mary" },
                { "@type": "City", name: "Sanford" },
                { "@type": "City", name: "Oviedo" },
                { "@type": "City", name: "Altamonte Springs" },
                { "@type": "City", name: "Casselberry" },
                { "@type": "City", name: "Tampa" },
                { "@type": "City", name: "Daytona Beach" },
              ],
              serviceType: [
                "House Lockout",
                "Car Lockout",
                "Commercial Locksmith",
                "Residential Locksmith",
                "Safe Installation",
                "Key Duplication",
                "Key Fob Programming",
                "Transponder Key",
                "Lock Rekey",
                "Master Key System",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Locksmith Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Lockout Service" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Car Lockout Service" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Locksmith" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Safe & Vault Services" } },
                ],
              },
              sameAs: [
                "https://www.facebook.com/veteranlockandsafe",
                "https://www.instagram.com/veteranlockandsafe",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} font-sans antialiased overflow-x-hidden`}
      >
        {/* Eagle background */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-5">
          <Image
            src="/images/eagle-background.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Bottom Left Eagle Logo */}
        <div className="fixed bottom-6 left-6 z-30 pointer-events-none hidden sm:block">
          <Image
            src="/images/eagle-v-logo.png"
            alt="Veteran Lock & Safe"
            width={60}
            height={60}
            className="h-14 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
        
        <StickyHeader />
        <FloatingCallButton />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
