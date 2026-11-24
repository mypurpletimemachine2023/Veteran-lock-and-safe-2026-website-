import { PartnerBanners } from "@/components/partner-banners"
import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ColophonSection } from "@/components/colophon-section"
import { EmergencyStrip } from "@/components/emergency-strip"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorks } from "@/components/how-it-works"
import { LocksmithEthicsBanner } from "@/components/locksmith-ethics-banner"
import { DiscountBanner } from "@/components/discount-banner"
import { PhotoGallery } from "@/components/photo-gallery"
import { TeamSelection } from "@/components/team-selection"
import { FooterContact } from "@/components/footer-contact"
import { SideNav } from "@/components/side-nav"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <SideNav />
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10 pt-20">
        <HeroSection />
        <EmergencyStrip />
        <DiscountBanner />
        <LocksmithEthicsBanner />
        <SignalsSection />
        <PhotoGallery />
        <WorkSection />
        <HowItWorks />
        <nav aria-label="Service details" className="px-6 md:px-28 py-8 flex flex-wrap gap-6">
          <a className="underline" href="/services/commercial-locksmith">Commercial locksmithing</a>
          <a className="underline" href="/services/safe-locksmith">Safe services</a>
          <a className="underline" href="/services/access-control">Access control inquiries</a>
        </nav>
        <QuoteForm />
        <TestimonialsSection />
        <FAQSection />
        <AboutSection />
        <PrinciplesSection />
        <ColophonSection />
        <TeamSelection />
        <FooterContact />
        <PartnerBanners />
      </div>
    </main>
  )
}
