import { ServicesSection } from "@/components/landing/services-section";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export default function ServiciosPage() {
  return (
    <AnimatedSection>
       <div className="container px-4 md:px-6 py-20 md:py-32 text-center">
            <AnimatedItem>
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">
                    Un Regalo para Cada Ocasión
                </h1>
            </AnimatedItem>
            <AnimatedItem>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
                    En ConhdeHelena, nos especializamos en transformar objetos cotidianos en recuerdos inolvidables. Creemos que cada regalo debe contar una historia, y por eso ponemos nuestra pasión y tecnología de precisión en cada detalle. Desde celebraciones importantes hasta un simple gesto de cariño, tenemos la idea perfecta para ti.
                </p>
            </AnimatedItem>
        </div>
      <ServicesSection />
    </AnimatedSection>
  );
}
