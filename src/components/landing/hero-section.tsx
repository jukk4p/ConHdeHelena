import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section id="inicio" className="w-full pt-28 md:pt-40 pb-20 md:pb-24 bg-background overflow-hidden">
             {/* INICIO ANIMACIÓN BLOQUE HERO */}
            <AnimatedSection className="container px-4 md:px-6 text-center">
                <AnimatedItem el="div" className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-muted-foreground font-medium mb-4 transition-colors hover:text-primary">Regalos con Alma</AnimatedItem>
                <AnimatedItem el="h1" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-foreground">
                    ConhdeHelena: Arte en Cada Detalle
                </AnimatedItem>
                <AnimatedItem el="p" className="max-w-[700px] mx-auto mt-6 text-muted-foreground md:text-xl">
                    Transformamos tus ideas en regalos inolvidables. Cada pieza es diseñada con pasión y precisión, utilizando herramientas profesionales para un acabado perfecto.
                </AnimatedItem>
                <AnimatedItem el="div" className="mt-10">
                    <Button asChild size="lg" className="group">
                        <Link href="/contacto">
                            Contacta con Nosotros <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </AnimatedItem>
            </AnimatedSection>
             {/* FIN ANIMACIÓN BLOQUE HERO */}
        </section>
    );
}
