'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function EmergencyStrip() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-12 bg-accent/10 border-y border-border/20 my-16"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight text-foreground mb-2">
              LOCKED OUT RIGHT NOW?
            </h3>
            <p className="font-mono text-sm text-muted-foreground">
              Fast response. Fair pricing. Available 24/7 for emergencies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href="tel:4078609524"
              className="flex-1 md:flex-none px-8 py-4 bg-accent text-background font-mono text-sm uppercase tracking-widest font-bold hover:bg-accent/90 transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              407-860-9524
            </a>
            <p className="font-mono text-xs text-muted-foreground text-center md:text-right">
              Est. Response: <span className="text-accent font-semibold">15-30 min</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
