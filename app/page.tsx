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
