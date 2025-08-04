"use client";

import { AnimatedItem } from "@/components/animated-section";
import { PersonalizeForm } from "@/components/personalize-form";

export function PersonalizeFormSection() {
    return (
        <section id="personaliza" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
                    <div className="space-y-4">
                        <AnimatedItem>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Personaliza tu Regalo</h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-muted-foreground">
                                ¿Tienes una idea en mente? ¡Genial! Aquí puedes darle forma. Cada creación es un mundo, y estamos aquí para explorar el tuyo. Utilizamos la precisión de la tecnología Cricut y el cuidado artesanal para que tu regalo sea exactamente como lo imaginas.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                             <p className="text-muted-foreground">
                                Rellena el formulario con los detalles de tu idea. Cuanta más información nos des, más fácil será para nosotros hacerla realidad. Si tienes dudas, no te preocupes, nos pondremos en contacto contigo para pulir todos los detalles.
                            </p>
                        </AnimatedItem>
                    </div>
                    <AnimatedItem>
                        <PersonalizeForm />
                    </AnimatedItem>
                </div>
            </div>
        </section>
    );
}
