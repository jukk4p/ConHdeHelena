import { FeaturedProductsSection } from "@/components/landing/featured-products-section";
import { ProductListSection } from "@/components/landing/product-list-section";
import { AnimatedSection } from "@/components/animated-section";

export default function ProductosPage() {
  return (
    <>
      <AnimatedSection>
        <FeaturedProductsSection />
      </AnimatedSection>
      <AnimatedSection>
        <ProductListSection />
      </AnimatedSection>
    </>
  );
}
