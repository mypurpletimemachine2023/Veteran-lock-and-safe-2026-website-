'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Call or Request Quote',
    description: 'Reach out via phone or our online form. Tell us what you need help with.',
    icon: '📞',
  },
  {
    number: '02',
    title: 'Confirm Details & ETA',
    description: 'We confirm your location and service needs, then provide an estimated arrival time.',
    icon: '⏱️',
  },
  {
    number: '03',
    title: 'Professional Service',
    description: 'Our licensed technician arrives and resolves your issue with transparent pricing.',
    icon: '🔧',
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean)
    steps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: step,
            start: 'top 85%',
          },
        }
      )
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            HOW IT WORKS
          </h2>
          <p className="font-mono text-muted-foreground max-w-lg">
            Simple, straightforward process from call to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) stepsRef.current[index] = el
              }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-accent to-transparent" />
              )}

              <div className="relative z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <p className="font-[var(--font-bebas)] text-3xl text-accent mb-2">
                    {step.number}
                  </p>
                </div>

                <h3 className="font-[var(--font-bebas)] text-xl tracking-tight text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
