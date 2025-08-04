import { AboutSection } from "@/components/landing/about-section";
import { BlogSection } from "@/components/landing/blog-section";
import { ContactSection } from "@/components/landing/contact-section";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
