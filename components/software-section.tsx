'use client'

import { useRef, useEffect } from 'react'
import { SplitFlapText, SplitFlapAudioProvider } from '@/components/split-flap-text'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function SoftwareSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return
        gsap.from(card, {
          opacity: 0,
          y: 50,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
            markers: false,
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const apps = [
    {
      id: 1,
      title: 'MYSTERY APP 01',
      subtitle: 'Unlock Innovation',
      description: 'Coming Soon',
    },
    {
      id: 2,
      title: 'MYSTERY APP 02',
      subtitle: 'Smart Solutions',
      description: 'Coming Soon',
    },
    {
      id: 3,
      title: 'MYSTERY APP 03',
      subtitle: 'Future Tech',
      description: 'Coming Soon',
    },
  ]

  return (
    <section ref={sectionRef} id="software" className="relative min-h-screen flex items-center justify-center px-6 md:px-28 py-24">
      <div className="w-full max-w-6xl">
        {/* Section Title with Split Flap */}
        <div className="mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-4 block">06 / Innovation</span>
          <SplitFlapAudioProvider>
            <SplitFlapText 
              text="SOFTWARE DEVELOPMENT" 
              speed={40}
              sequenceWords={["TECH", "APPS", "DIGITAL", "SOFTWARE", "DEVELOPMENT"]}
            />
          </SplitFlapAudioProvider>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {apps.map((app, index) => (
            <div
              key={app.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="group relative border border-border/30 overflow-hidden aspect-square hover:border-accent/60 transition-all duration-300"
            >
              {/* Coming Soon Banner */}
              <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm z-20 flex items-center justify-center">
                <div className="text-center">
                  <div className="border border-accent px-4 py-2 mb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent">Coming Soon</span>
                  </div>
                  <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Launch Q3 2025</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-40 group-hover:opacity-20 transition-opacity duration-300">
                <div>
                  <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl text-accent mb-2">{app.title}</h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{app.subtitle}</p>
                </div>
                <p className="font-mono text-xs text-muted-foreground/60">{app.description}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-accent" />
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-20 max-w-2xl mx-auto">
          <p className="font-mono text-sm text-muted-foreground leading-relaxed text-center">
            We&apos;re developing innovative software solutions to revolutionize the locksmith industry. Stay tuned for cutting-edge applications designed to streamline security services and enhance customer experience.
          </p>
        </div>
      </div>
    </section>
  )
}
