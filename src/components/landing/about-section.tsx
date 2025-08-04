"use client";

import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Scissors, Users } from "lucide-react";
import { AnimatedItem } from "@/components/animated-section";
import { motion } from "framer-motion";

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        {children}
    </motion.div>
);

export function AboutSection() {
    return (
        <section id="sobre-nosotros" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        <AnimatedItem>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Nuestra Historia de Pasión y Precisión</h2>
                        </AnimatedItem>
                        <AnimatedItem>
                        <p className="text-muted-foreground">
                            ConhdeHelena nació de un sueño: crear conexiones emocionales a través de regalos que cuentan una historia. Combinamos la creatividad manual con la tecnología para dar vida a tus ideas.
                        </p>
                        </AnimatedItem>
                        <AnimatedItem>
                        <p className="text-muted-foreground">
                            Nuestra misión es simple: ofrecerte un producto único, de alta calidad y lleno de significado. Creemos que el regalo perfecto es aquel que se hace con el corazón y se perfecciona con la técnica.
                        </p>
                        </AnimatedItem>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <AnimatedItem>
                            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                                <IconWrapper><Heart className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                                <h3 className="text-lg font-bold font-headline">Pasión</h3>
                                <p className="text-sm text-muted-foreground">Amor en cada corte y diseño.</p>
                            </Card>
                        </AnimatedItem>
                        <AnimatedItem>
                            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                                 <IconWrapper><Sparkles className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                                <h3 className="text-lg font-bold font-headline">Creatividad</h3>
                                <p className="text-sm text-muted-foreground">Ideas frescas para regalos únicos.</p>
                            </Card>
                        </AnimatedItem>
                        <AnimatedItem>
                            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                                 <IconWrapper><Scissors className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                                <h3 className="text-lg font-bold font-headline">Calidad</h3>
                                <p className="text-sm text-muted-foreground">Acabados precisos con la mejor tecnología.</p>
                            </Card>
                        </AnimatedItem>
                        <AnimatedItem>
                            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                                 <IconWrapper><Users className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                                <h3 className="text-lg font-bold font-headline">Cercanía</h3>
                                <p className="text-sm text-muted-foreground">Trato personalizado para cada cliente.</p>
                            </Card>
                        </AnimatedItem>
                    </div>
                </div>
            </div>
        </section>
    );
}