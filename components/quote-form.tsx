'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    description: '',
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    gsap.fromTo(
      section,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    )
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section ref={sectionRef} id="quote" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            GET A FREE ESTIMATE
          </h2>
          <p className="font-mono text-muted-foreground max-w-lg">
            Fill out the form below and we&apos;ll provide a transparent quote within 2 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors"
              placeholder="(407) 555-0000"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Service Type *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors"
            >
              <option value="">Select a service...</option>
              <option value="house-lockout">House Lockout</option>
              <option value="car-lockout">Car Lockout</option>
              <option value="commercial">Commercial Lock Services</option>
              <option value="residential">Residential Lock Services</option>
              <option value="safe-install">Safe Installation</option>
              <option value="key-duplication">Key Duplication</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-background border border-border/40 px-4 py-3 font-mono text-sm text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none transition-colors resize-none h-24"
              placeholder="Tell us more about your situation..."
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 px-8 py-3 bg-accent text-background font-mono text-xs uppercase tracking-widest font-bold hover:bg-accent/90 transition-colors"
          >
            Request Free Quote
          </button>
        </form>

        <p className="font-mono text-xs text-muted-foreground mt-6">
          * Required fields. We&apos;ll never share your information.
        </p>
      </div>
    </section>
  )
}
