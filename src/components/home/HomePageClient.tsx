"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function HomePageClient() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [showVideo, setShowVideo] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <HeroScene />
            </div>

            {/* Hero Section */}
            <motion.section
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center"
            >
                <motion.div
                    initial={{ y: 30 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-4xl space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-foreground/5 rounded-full px-4 py-1.5 border border-foreground/10 text-sm font-medium text-foreground mb-4">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span>Regalos únicos en Sevilla</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]">
                        El arte de crear <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover italic font-light">magia</span> en cada detalle.
                    </h1>

                    <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
                        Transformamos tus ideas y recuerdos en piezas únicas.
                        Diseño artesanal cuidado para los momentos que importan.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center pt-8 space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link
                            href="/personaliza"
                            className="group flex items-center bg-foreground text-background px-8 py-4 rounded-full text-lg font-medium hover:bg-primary transition-all duration-300 w-full sm:w-auto justify-center"
                        >
                            Empezar proyecto
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/productos"
                            className="flex items-center text-foreground hover:text-primary px-8 py-4 rounded-full text-lg font-medium transition-colors w-full sm:w-auto justify-center"
                        >
                            Ver colección
                        </Link>
                    </div>
                </motion.div>
            </motion.section>

            {/* Cómo lo Hago Section (Video Animation) */}
            <section className="relative z-10 py-32 bg-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
                        >
                            Cómo nacen nuestras piezas
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mt-4 text-foreground/70 max-w-xl mx-auto text-lg font-light"
                        >
                            Un proceso cuidado donde cada decisión importa, para lograr un resultado perfecto.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "200px" }}
                        onViewportEnter={() => setShowVideo(true)}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative max-w-5xl mx-auto aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-foreground/5 bg-background/50 backdrop-blur-sm"
                    >
                        {showVideo && (
                            <video
                                src="/images/process/Gift_box_creation_202603252347.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="none"
                                className="w-full h-full object-cover scale-[1.15] object-[40%_40%]"
                            />
                        )}
                        <div className="absolute inset-0 ring-1 ring-inset ring-foreground/10 rounded-[2.5rem] pointer-events-none" />
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-32 bg-foreground text-background">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8">
                        Hagamos algo <span className="italic text-primary font-light">especial</span>
                    </h2>
                    <p className="text-background/70 max-w-2xl mx-auto mb-12 text-lg">
                        Si tienes una idea en mente o quieres que diseñemos algo desde cero para esa persona especial.
                    </p>
                    <Link
                        href="/contacto"
                        className="inline-flex items-center bg-primary text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-primary-hover transition-colors shadow-xl shadow-primary/20"
                    >
                        Cuéntanos tu idea
                    </Link>
                </div>
            </section>
        </div>
    );
}
