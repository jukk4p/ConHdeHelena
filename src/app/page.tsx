import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedProductsSection } from "@/components/landing/featured-products-section";
import { AnimatedSection } from "@/components/animated-section";

export default function Home() {
  return (
    <>
      <AnimatedSection key="hero">
        <HeroSection />
      </AnimatedSection>
      <AnimatedSection key="featured-products">
        <FeaturedProductsSection />
      </AnimatedSection>
    </>
  );
}
