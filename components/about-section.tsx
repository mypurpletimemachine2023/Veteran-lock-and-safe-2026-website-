'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div ref={contentRef}>
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-foreground mb-8">
            OUR STORY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                Veteran Lock & Safe was founded on a simple principle: provide honest, transparent locksmith services to families and businesses in Central Florida. What started as a one-person operation has grown into a trusted team of certified professionals serving thousands of customers.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-6">
                We've built our reputation on integrity, reliability, and fair pricing. No hidden fees. No bait-and-switch tactics. Just straightforward security solutions you can trust.
              </p>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                Whether you're locked out of your home, need commercial security upgrades, or want to secure your valuables in a safe, we treat every customer like family.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background/50 border border-border/40">
                <p className="font-[var(--font-bebas)] text-2xl text-accent mb-2">10+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Years of Service
                </p>
              </div>
              <div className="p-6 bg-background/50 border border-border/40">
                <p className="font-[var(--font-bebas)] text-2xl text-accent mb-2">1000+</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Customers Served
                </p>
              </div>
              <div className="p-6 bg-background/50 border border-border/40">
                <p className="font-[var(--font-bebas)] text-2xl text-accent mb-2">24/7</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Emergency Response
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
