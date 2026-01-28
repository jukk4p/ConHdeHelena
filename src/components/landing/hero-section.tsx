import { Button } from "@/components/ui/button";
import Link from "next/link";

// NOTE: By removing the "use client" directive and framer-motion wrapper,
// this component is now a performant React Server Component.
export function HeroSection() {
    return (
        <section id="inicio" className="w-full pt-20 md:pt-32 pb-10 bg-accent/50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
                    <div className="space-y-4 text-center">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary-foreground font-medium">Regalos con Alma</div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-foreground">
                            ConhdeHelena: Arte en Cada Detalle
                        </h1>
                        <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                            Transformamos tus ideas en regalos inolvidables. Cada pieza es diseñada con pasión y precisión, utilizando herramientas profesionales para un acabado perfecto.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/contacto">Contacta con Nosotros</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
