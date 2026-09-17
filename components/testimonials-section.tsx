'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "Locked out of my house at midnight. They arrived in 20 minutes and had me inside in 5. Professional and fair pricing.",
    author: "Sarah M.",
    service: "House Lockout",
    rating: 5,
  },
  {
    quote: "Been using them for our commercial office for 2 years. Reliable, licensed, and they stand behind their work.",
    author: "James T.",
    service: "Commercial Security",
    rating: 5,
  },
  {
    quote: "Called for an emergency car lockout while traveling. They talked me through options and handled everything over the phone.",
    author: "Michael R.",
    service: "Car Lockout",
    rating: 5,
  },
  {
    quote: "Had them install a new safe. The team was professional, on time, and installed it perfectly. Highly recommend.",
    author: "Patricia D.",
    service: "Safe Installation",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            TRUSTED BY THOUSANDS
          </h2>
          <p className="font-mono text-muted-foreground max-w-lg">
            Real customers sharing their experience with Veteran Lock & Safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el
              }}
              className="p-6 border border-border/40 bg-background/50 hover:border-accent/50 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-accent"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="font-mono text-sm text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
