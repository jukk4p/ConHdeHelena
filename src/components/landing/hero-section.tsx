'use client'

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { ArrowRight, Feather } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter'
import { Ornament } from "../ornament";

export function HeroSection() {
    return (
        <section 
          id="inicio" 
          className="w-full min-h-[80vh] md:min-h-screen flex items-center justify-center relative text-white bg-cover bg-center bg-[url('/hero-bg.jpg')]"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-foreground-dark/80 via-foreground-dark/60 to-transparent"></div>

            <AnimatedSection className="container relative px-4 md:px-6 text-center z-10">
                 <AnimatedItem el="div">
                  <div className="inline-block rounded-lg bg-primary/80 px-4 py-2 text-sm text-primary-foreground font-label uppercase tracking-[2px] mb-4">
                   ✦ Hecho con amor en Sevilla
                  </div>
                </AnimatedItem>
                <AnimatedItem el="h1" className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white">
                    <Typewriter
                        words={['Regalos que no se olvidan.']}
                        loop={1}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        cursorColor="#BFA070"
                    />
                </AnimatedItem>
                <AnimatedItem el="div" className="my-6">
                  <Ornament isGold />
                </AnimatedItem>
                <AnimatedItem el="p" className="max-w-[500px] mx-auto text-background/80 md:text-xl">
                    Taller de diseño y grabado en Sevilla. Creamos piezas únicas para momentos especiales, transformando tus ideas en regalos inolvidables.
                </AnimatedItem>
                <AnimatedItem el="div" className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" variant="primary" className="group">
                        <Link href="/contacto">
                            Contacta con Nosotros
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="group text-white border-white/50 hover:bg-white/10 hover:text-white">
                        <Link href="#productos-destacados">
                            Ver Productos <ArrowRight className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </AnimatedItem>
            </AnimatedSection>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
              <Feather className="w-8 h-8 text-accent" />
            </div>
        </section>
    );
}
