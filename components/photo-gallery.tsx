"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "/images/gallery-happy-customer.jpg",
    alt: "Happy customer after car lockout service – Orlando locksmith",
    caption: "Happy Customers",
  },
  {
    src: "/images/gallery-alejandro.jpg",
    alt: "Alejandro – Founder, Veteran Lock & Safe",
    caption: "Our Founder",
  },
  {
    src: "/images/gallery-lock-install.jpg",
    alt: "Technician installing a door lock knob – residential locksmith Orlando",
    caption: "Door Lock Install",
  },
  {
    src: "/images/gallery-keys.jpg",
    alt: "Do Not Duplicate brass keys – key duplication Orlando",
    caption: "Key Duplication",
  },
  {
    src: "/images/gallery-key-programmer.jpg",
    alt: "Autel key programmer for car key fob programming – Orlando auto locksmith",
    caption: "Key Fob Programming",
  },
]

export function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-rotate through images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Gallery / Our Work</span>
        </div>

        {/* Featured image with animation */}
        <div className="mb-6">
          <div
            className="relative w-full max-w-2xl mx-auto overflow-hidden"
            style={{
              aspectRatio: "16/10",
              border: "2px solid #dc2626",
              boxShadow: "0 0 20px 4px rgba(220,38,38,0.5), 0 0 40px 8px rgba(220,38,38,0.2)",
              borderRadius: "2px",
            }}
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 672px"
                  className="object-cover"
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(220,38,38,0.3) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="font-mono text-xs uppercase tracking-widest text-white">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thumbnail strip - uniform squares */}
        <div className="flex justify-center gap-2 md:gap-3">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden transition-all duration-300 ${
                i === activeIndex ? "ring-2 ring-accent" : "opacity-60 hover:opacity-100"
              }`}
              style={{
                width: "60px",
                height: "60px",
                border: i === activeIndex ? "2px solid #dc2626" : "1px solid #dc2626",
                boxShadow: i === activeIndex ? "0 0 10px 2px rgba(220,38,38,0.5)" : "none",
                borderRadius: "2px",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="60px"
                className="object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
