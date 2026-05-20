"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PersonalizaPage() {
    return (
        <div className="min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/headers/personaliza.webp"
                    alt="Experiencia Personalizada ConhdeHelena"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                            Hecho <span className="italic font-light text-primary">para ti</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                            Damos vida a tus ideas con cariño. Diseñamos juntos cada detalle.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="relative max-w-5xl mx-auto">
                        {/* Scroll Progress Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 hidden lg:block" />

                        <div className="space-y-40">
                            {[
                                {
                                    label: "1. DISEÑO DIGITAL",
                                    title: "Damos forma a tu idea",
                                    desc: "Escuchamos lo que tienes en mente y lo proyectamos en nuestro programa de diseño. Así podemos probar fuentes y estilos hasta encontrar el camino que más te guste.",
                                    img: "/images/process/step1_design.png",
                                },
                                {
                                    label: "2. PRECISIÓN EN EL CORTE",
                                    title: "El detalle hecho realidad",
                                    desc: "Pasamos el diseño a nuestras máquinas de precisión para trabajar sobre madera o materiales especiales. Es el momento en que tu idea empieza a tomar cuerpo.",
                                    img: "/images/process/step2_cricut.png",
                                },
                                {
                                    label: "3. TRABAJO FINAL",
                                    title: "Cuidamos el acabado",
                                    desc: "Terminamos cada pieza con mimo, repasando cada borde y preparando un empaquetado bonito para que el regalo sea especial desde que se recibe.",
                                    img: "/images/process/step3_result.png",
                                    cta: true
                                }
                            ].map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-full lg:w-1/2 space-y-6 ${idx % 2 === 1 ? 'lg:text-right' : ''}`}>
                                        <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block">
                                            {step.label}
                                        </span>
                                        <h3 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-[1.1]">
                                            {step.title}
                                        </h3>
                                        <p className="text-foreground/70 text-lg md:text-xl font-light leading-relaxed max-w-lg ml-0 mr-auto lg:mx-0">
                                            {step.desc}
                                        </p>
                                        {step.cta && (
                                            <div className="pt-6">
                                                <Link 
                                                    href="/contacto" 
                                                    className="inline-flex items-center text-foreground font-medium group text-lg"
                                                >
                                                    <span className="border-b-2 border-primary/30 group-hover:border-primary transition-all duration-300 pb-1">
                                                        Me interesa, hablemos
                                                    </span>
                                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full lg:w-1/2">
                                        <div className="relative aspect-[4/5] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] group border border-foreground/5 bg-white">
                                            <Image
                                                src={step.img}
                                                alt={step.title}
                                                fill
                                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
