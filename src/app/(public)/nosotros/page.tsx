"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function NosotrosPage() {
    return (
        <div className="min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/asets-workshop.webp"
                    alt="Taller ConhdeHelena en Sevilla"
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
                            Nuestra <span className="italic font-light text-primary">Historia</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                            Más que un regalo, una emoción tangible.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                        {/* Visual Anchor (Now on the Left) */}
                        <div className="order-1 lg:order-1">
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative aspect-video rounded-[2rem] overflow-hidden bg-[#fdfcfb] border border-foreground/10 shadow-2xl"
                            >
                                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                    <video
                                        src="/images/Animation_logo.mp4"
                                        autoPlay
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover"
                                        style={{ transform: 'scale(1.3)', transformOrigin: 'center' }}
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Story Content (Now on the Right) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.3,
                                        delayChildren: 0.5
                                    }
                                }
                            }}
                            className="order-2 lg:order-2 space-y-8"
                        >
                            <div className="space-y-6 text-foreground/80 font-light leading-relaxed text-lg">
                                <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                                    ConhdeHelena nació de las ganas de crear algo especial. Nos dimos cuenta de que los momentos importantes merecen un detalle que los guarde para siempre.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                                    En nuestro taller de Sevilla, unimos el diseño digital con el acabado a mano. Hacemos desde cajas de recuerdos hasta decoración para eventos, siempre tratando cada pieza como si fuera para nosotros mismos.
                                </motion.p>
                                <motion.p variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
                                    Creemos que detrás de cada encargo hay una historia. Por eso, ponemos mucha atención en cada detalle y trabajamos para que cada personalización sea justo lo que buscabas.
                                </motion.p>
                            </div>

                            <motion.div 
                                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                                className="pt-6"
                            >
                                <blockquote className="border-l-2 border-primary pl-6 py-2 italic text-foreground/90 font-serif text-xl">
                                    &quot;Creando emociones, un regalo a la vez.&quot;
                                </blockquote>
                            </motion.div>

                            <motion.div 
                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                className="pt-8"
                            >
                                <Link
                                    href="/contacto"
                                    className="inline-flex items-center space-x-2 text-foreground font-medium hover:text-primary transition-colors border-b border-foreground/30 hover:border-primary pb-1"
                                >
                                    <span>Empieza tu proyecto con nosotros</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
