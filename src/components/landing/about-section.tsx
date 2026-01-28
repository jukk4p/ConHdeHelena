import { AboutSectionCards } from "./about-section-cards";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export function AboutSection() {
    return (
        <section
            id="sobre-nosotros"
            className="w-full py-20 md:py-32"
        >
            <div className="container px-4 md:px-6">
                {/* // INICIO ANIMACIÓN BLOQUE SOBRE NOSOTROS */}
                <AnimatedSection className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="space-y-6">
                        <AnimatedItem>
                            <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-headline">Nuestra Historia de Pasión y Precisión</h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                ConhdeHelena nació de un sueño: crear conexiones emocionales a través de regalos que cuentan una historia. Combinamos la creatividad manual con la tecnología para dar vida a tus ideas.
                            </p>
                        </AnimatedItem>
                         <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                Nuestra misión es simple: ofrecerte un producto único, de alta calidad y lleno de significado. Creemos que el regalo perfecto es aquel que se hace con el corazón y se perfecciona con la técnica.
                            </p>
                        </AnimatedItem>
                    </div>
                    <AnimatedItem>
                        <AboutSectionCards />
                    </AnimatedItem>
                </AnimatedSection>
                 {/* // FIN ANIMACIÓN BLOQUE SOBRE NOSOTROS */}
            </div>
        </section>
    );
}
