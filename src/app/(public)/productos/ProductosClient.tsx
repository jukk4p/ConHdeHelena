"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Hammer, HeartHandshake, ArrowRight } from "lucide-react";

interface Product {
    id: string | number;
    title: string;
    category: string;
    price: string;
    img?: string;
    image_url?: string;
}

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <path d="M16.001 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.353.638 4.653 1.848 6.667L2.667 29.333l6.883-1.808A13.3 13.3 0 0 0 16.001 29.333c7.364 0 13.332-5.97 13.332-13.333 0-7.364-5.968-13.332-13.332-13.333zm0 24.267a11.02 11.02 0 0 1-5.614-1.536l-.403-.24-4.085 1.073 1.09-3.974-.263-.408A10.963 10.963 0 0 1 5.001 16c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11zm6.03-8.23c-.33-.165-1.953-.963-2.256-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.513-2.654-1.637-.98-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.018-2.454-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.88.413-.303.33-1.155 1.129-1.155 2.753s1.183 3.193 1.347 3.413c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.544 1.884.696.791.252 1.511.217 2.08.132.634-.095 1.953-.799 2.228-1.57.275-.772.275-1.433.193-1.571-.082-.138-.303-.22-.633-.385z" />
        </svg>
    );
}

export default function ProductosClient({ products = [] }: { products?: Product[] }) {
    // Current catalog items are hidden while preparing the new handmade collection
    return (
        <div className="min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative h-[48vh] min-h-[380px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/headers/products.webp"
                    alt="Colección ConhdeHelena"
                    fill
                    className="object-cover scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary mb-6 border border-white/10">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Taller de Artesanía · Sevilla</span>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                            Taller en <span className="italic font-light text-primary">Creación</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                            Estamos dando vida a una nueva colección de piezas exclusivas. Muy pronto podrás descubrir las nuevas creaciones.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Under Construction / Renovation Showcase */}
            <section className="relative z-10 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-surface/80 backdrop-blur-sm border border-foreground/5 rounded-3xl p-8 sm:p-12 md:p-16 text-center shadow-xl shadow-foreground/[0.03]"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <Hammer className="w-8 h-8" />
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Renovando nuestro <span className="text-primary italic font-light">catálogo</span>
                        </h2>

                        <p className="text-foreground/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12 font-light">
                            Actualmente las piezas de catálogo no están disponibles porque estamos en pleno proceso de diseño, artesanía y fotografía de nuevas creaciones. Cada pieza se cuida al milímetro para que sea verdaderamente inolvidable.
                        </p>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
                            <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h3 className="font-serif text-lg font-bold text-foreground mb-2">Nuevos Diseños</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    Nuevas piezas para bodas, comuniones, fechas señaladas y detalles únicos del día a día.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <Hammer className="w-5 h-5" />
                                </div>
                                <h3 className="font-serif text-lg font-bold text-foreground mb-2">100% Hecho a Mano</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    Elaborado con paciencia, grabado y acabados artesanales en nuestro taller en Sevilla.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-foreground/5">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                    <HeartHandshake className="w-5 h-5" />
                                </div>
                                <h3 className="font-serif text-lg font-bold text-foreground mb-2">Encargos a Medida</h3>
                                <p className="text-foreground/60 text-sm leading-relaxed">
                                    ¿Tienes un evento o una idea especial? ¡Seguimos aceptando encargos personalizados!
                                </p>
                            </div>
                        </div>

                        {/* Direct CTAs */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Link
                                href="/personaliza"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full text-base font-medium hover:bg-primary transition-all duration-300 shadow-md group"
                            >
                                <span>Diseñar encargo personalizado</span>
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="https://wa.me/34678973988?text=Hola%20Helena!%20He%20visto%20vuestra%20web%20y%20me%20gustar%C3%ADa%20consultar%20por%20un%20encargo%20personalizado."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#20ba5a] transition-all duration-300 shadow-md gap-2"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                                <span>Consultar por WhatsApp</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
