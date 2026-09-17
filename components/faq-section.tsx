'use client'

import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    question: "What areas do you service?",
    answer: "We provide locksmith services throughout Central Florida including Orlando, Tampa, Daytona Beach, and surrounding areas. Call for availability in your specific location.",
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes! We offer 24/7 emergency locksmith services. Call 407-860-9524 anytime for immediate assistance.",
  },
  {
    question: "How much do your services cost?",
    answer: "We offer transparent, flat-fee pricing with no hidden charges. Costs vary by service type. Call or use our quote form for an accurate estimate.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. We are fully licensed, insured, and background-checked. Your security and safety are our top priority.",
  },
  {
    question: "How fast can you arrive?",
    answer: "For emergency lockouts, we typically arrive within 15-30 minutes in the Orlando area. Response times may vary for other service areas.",
  },
  {
    question: "Can you help with car lockouts?",
    answer: "Yes! We specialize in car lockouts for all vehicle makes and models. We use non-destructive methods to get you back inside safely.",
  },
  {
    question: "Do you offer commercial services?",
    answer: "Yes, we provide comprehensive commercial locksmith services including master key systems, access control, and security upgrades.",
  },
  {
    question: "Can you help with safe services?",
    answer: "We are an authorized Hayman Safes provider. We offer gun safe delivery, installation, digital keypad upgrades, and relocation services.",
  },
  {
    question: "Do you offer key duplication?",
    answer: "Yes! We provide precision key cutting and duplication for residential, commercial, and high-security locks.",
  },
  {
    question: "What if I can't pay right away?",
    answer: "We accept all major credit cards and payment methods. Ask about our available payment options when you call.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current) return

    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-border/20">
      <button
        onClick={onToggle}
        className="w-full py-4 px-6 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
      >
        <h3 className="font-mono text-sm font-semibold text-foreground pr-4">
          {question}
        </h3>
        <svg
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <div
        ref={contentRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-6 pb-4 font-mono text-sm text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight text-foreground mb-4">
            FREQUENTLY ASKED
          </h2>
          <p className="font-mono text-muted-foreground">
            Common questions about our locksmith services.
          </p>
        </div>

        <div className="border border-border/20">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 border border-accent/30">
          <p className="font-mono text-sm text-foreground mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <a
            href="tel:4078609524"
            className="inline-flex items-center gap-2 px-6 py-2 bg-accent text-background font-mono text-xs uppercase tracking-widest font-semibold hover:bg-accent/90 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
