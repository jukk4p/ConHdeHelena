import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedProductsSection } from "@/components/landing/featured-products-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ContactSection } from "@/components/landing/contact-section";
import { StatsSection } from "@/components/landing/stats-section";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProductsSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
