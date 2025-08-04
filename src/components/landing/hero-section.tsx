import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
    return (
        <section id="inicio" className="w-full py-20 md:py-32 bg-accent/50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary-foreground font-medium">Regalos con Alma</div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-foreground">
                            ConhdeHelena: Arte en Cada Detalle
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            Transformamos tus ideas en regalos inolvidables. Cada pieza es diseñada con pasión y precisión, utilizando herramientas profesionales para un acabado perfecto.
                        </p>
                        <Button asChild size="lg">
                            <Link href="/servicios">Explora Nuestros Servicios</Link>
                        </Button>
                    </div>
                    <Image
                        src="https://images.pexels.com/photos/4099235/pexels-photo-4099235.jpeg"
                        width="600"
                        height="400"
                        alt="Regalos personalizados"
                        data-ai-hint="personalized gifts crafting"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
