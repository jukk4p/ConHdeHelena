import { PersonalizeForm } from "@/components/personalize-form";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export function PersonalizeFormSection() {
    return (
        <section
            id="personaliza"
            className="w-full py-20 md:py-32"
        >
            <div className="container px-4 md:px-6">
                 {/* // INICIO ANIMACIÓN BLOQUE PERSONALIZA */}
                <AnimatedSection className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    <div className="space-y-6">
                        <AnimatedItem>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline">Personaliza tu Regalo</h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                ¿Tienes una idea en mente? ¡Genial! Aquí puedes darle forma. Cada creación es un mundo, y estamos aquí para explorar el tuyo. Utilizamos la precisión de la tecnología Cricut y el cuidado artesanal para que tu regalo sea exactamente como lo imaginas.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                Rellena el formulario con los detalles de tu idea. Cuanta más información nos des, más fácil será para nosotros hacerla realidad. Si tienes dudas, no te preocupes, nos pondremos en contacto contigo para pulir todos los detalles.
                            </p>
                        </AnimatedItem>
                    </div>
                    <AnimatedItem>
                        <PersonalizeForm />
                    </AnimatedItem>
                </AnimatedSection>
                {/* // FIN ANIMACIÓN BLOQUE PERSONALIZA */}
            </div>
        </section>
    );
}
