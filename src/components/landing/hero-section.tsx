import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section id="inicio" className="w-full pt-28 md:pt-40 pb-20 md:pb-24 bg-background overflow-hidden">
             {/* INICIO ANIMACIÓN BLOQUE HERO */}
            <AnimatedSection className="container px-4 md:px-6 text-center">
                <AnimatedItem el="div" className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium mb-4 transition-colors hover:bg-primary/20">
                  Taller artesanal en Sevilla
                </AnimatedItem>
                <AnimatedItem el="h1" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
                    Regalos personalizados grabados con láser
                </AnimatedItem>
                <AnimatedItem el="p" className="max-w-[700px] mx-auto mt-6 text-muted-foreground md:text-xl">
                    Taller de diseño y grabado en Sevilla. Creamos piezas únicas para momentos especiales, transformando tus ideas en regalos inolvidables.
                </AnimatedItem>
                <AnimatedItem el="div" className="mt-10">
                    <Button asChild size="lg" className="group">
                        <Link href="#productos-destacados">
                            Ver ideas de regalo <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </AnimatedItem>
            </AnimatedSection>
             {/* FIN ANIMACIÓN BLOQUE HERO */}
        </section>
    );
}
