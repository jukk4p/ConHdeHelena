import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AnimatedItem } from "@/components/animated-section";

export function HeroSection() {
    return (
        <section id="inicio" className="w-full py-20 md:py-32 bg-accent/50 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <AnimatedItem>
                            <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary-foreground font-medium">Regalos con Alma</div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-foreground">
                                ConhdeHelena: Arte en Cada Detalle
                            </h1>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Transformamos tus ideas en regalos inolvidables. Cada pieza es diseñada con pasión y precisión, utilizando herramientas profesionales para un acabado perfecto.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <Button asChild size="lg">
                                <Link href="/servicios">Explora Nuestros Servicios</Link>
                            </Button>
                        </AnimatedItem>
                    </div>
                    <AnimatedItem>
                        <Image
                            src="https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg"
                            width="600"
                            height="400"
                            alt="Regalos personalizados"
                            data-ai-hint="crafting workspace personalized"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                        />
                    </AnimatedItem>
                </div>
            </div>
        </section>
    );
}
    