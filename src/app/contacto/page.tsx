"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, ChevronDown } from "lucide-react";
import { useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
            <path d="M16.001 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.353.638 4.653 1.848 6.667L2.667 29.333l6.883-1.808A13.3 13.3 0 0 0 16.001 29.333c7.364 0 13.332-5.97 13.332-13.333 0-7.364-5.968-13.333-13.332-13.333zm0 24.267a11.02 11.02 0 0 1-5.614-1.536l-.403-.24-4.085 1.073 1.09-3.974-.263-.408A10.963 10.963 0 0 1 5.001 16c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11zm6.03-8.23c-.33-.165-1.953-.963-2.256-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.513-2.654-1.637-.98-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.018-2.454-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.88.413-.303.33-1.155 1.129-1.155 2.753s1.183 3.193 1.347 3.413c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.544 1.884.696.791.252 1.511.217 2.08.132.634-.095 1.953-.799 2.228-1.57.275-.772.275-1.433.193-1.571-.082-.138-.303-.22-.633-.385z" />
        </svg>
    );
}

export default function ContactoPage() {
    const [selectedOccasion, setSelectedOccasion] = useState("boda");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const occasions = [
        { id: "boda", label: "Boda o Enlace" },
        { id: "bautizo_comunion", label: "Bautizo / Comunión" },
        { id: "regalo", label: "Regalo Especial / Aniversario" },
        { id: "navidad", label: "Campaña de Navidad" },
        { id: "otro", label: "Tengo otra idea" }
    ];

    const currentLabel = occasions.find(o => o.id === selectedOccasion)?.label;

    // 3D Mouse Tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150 };
    const rotateX = useSpring(useTransform(mouseY, [-200, 200], [15, -15]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-200, 200], [-15, 15]), springConfig);

    return (
        <div className="min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/headers/contact.webp"
                    alt="Contacto ConhdeHelena"
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
                            Hablemos <span className="italic font-light text-primary">con calma</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                            Respondemos en menos de 24 horas con el mismo cariño que ponemos en cada detalle.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-4 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left"
                        >
                            <div className="space-y-8 w-full">
                                <h3 className="font-serif text-3xl font-bold">Información</h3>
                                <div className="space-y-8">
                                    <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Email</p>
                                            <p className="text-xl text-foreground">hola@conhdehelena.es</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Teléfono</p>
                                            <p className="text-xl text-foreground">+34 678 973 988</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Taller</p>
                                            <p className="text-xl text-foreground">Sevilla, España</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="relative perspective-1000"
                                onMouseMove={(e) => {
                                    const rect = e.currentTarget.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    const centerX = rect.width / 2;
                                    const centerY = rect.height / 2;
                                    mouseX.set(x - centerX);
                                    mouseY.set(y - centerY);
                                }}
                                onMouseLeave={() => {
                                    mouseX.set(0);
                                    mouseY.set(0);
                                }}
                            >
                                <motion.div
                                    style={{
                                        rotateX,
                                        rotateY,
                                        transformStyle: "preserve-3d"
                                    }}
                                    className="bg-primary/5 p-8 rounded-[2rem] border border-primary/20 text-center lg:text-left relative overflow-hidden group shadow-2xl"
                                >
                                    <div
                                        style={{ transform: "translateZ(50px)" }}
                                        className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
                                    >
                                        <Phone className="w-16 h-16 rotate-12" />
                                    </div>

                                    <motion.h4
                                        style={{ transform: "translateZ(40px)" }}
                                        className="font-serif text-2xl font-bold mb-3 relative z-10"
                                    >
                                        Atención Directa
                                    </motion.h4>

                                    <motion.p
                                        style={{ transform: "translateZ(30px)" }}
                                        className="text-foreground/70 font-light leading-relaxed mb-8 relative z-10 max-w-sm mx-auto lg:mx-0"
                                    >
                                        Si necesitas una respuesta inmediata para un evento urgente, escríbenos directamente por WhatsApp. Te atenderemos encantadas.
                                    </motion.p>

                                    <motion.div style={{ transform: "translateZ(60px)" }}>
                                        <a
                                            href="https://wa.me/34678973988?text=Hola%20Elena!%20Vengo%20de%20la%20web%20y%20me%20gustaría%20hablar%20sobre..."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 relative z-10"
                                        >
                                            <WhatsAppIcon className="w-5 h-5 shrink-0" />
                                            <span>Abrir WhatsApp</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </a>
                                    </motion.div>

                                    {/* Shimmer effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-8"
                        >
                            <div className="bg-surface/50 backdrop-blur-sm border border-foreground/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-foreground/5">
                                <form className="space-y-8" action="/contacto/gracias" method="GET">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-foreground/70 ml-2">Tu Nombre</label>
                                            <input
                                                type="text" id="name" name="name" required placeholder="Elena Gómez"
                                                className="w-full px-5 py-4 bg-background border border-foreground/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder-foreground/30"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-foreground/70 ml-2">Email de contacto</label>
                                            <input
                                                type="email" id="email" name="email" required placeholder="elena@correo.com"
                                                className="w-full px-5 py-4 bg-background border border-foreground/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-foreground placeholder-foreground/30"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 relative">
                                        <label className="block text-sm font-medium text-foreground/70 ml-2">¿Para qué ocasión es?</label>

                                        {/* Hidden input for form submission if needed */}
                                        <input type="hidden" name="subject" value={selectedOccasion} />

                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="w-full px-5 py-4 bg-background border border-foreground/10 rounded-2xl flex items-center justify-between text-left focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                                            >
                                                <span className="text-foreground">{currentLabel}</span>
                                                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>

                                            <AnimatePresence>
                                                {isDropdownOpen && (
                                                    <>
                                                        {/* Backdrop for closing */}
                                                        <div
                                                            className="fixed inset-0 z-10"
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        />

                                                        <motion.div
                                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="absolute left-0 right-0 z-[100] mt-2 bg-white border border-foreground/10 rounded-2xl shadow-2xl overflow-hidden py-2 flex flex-col"
                                                        >
                                                            {occasions.map((option) => (
                                                                <button
                                                                    key={option.id}
                                                                    type="button"
                                                                    onClick={() => {
                                                                        setSelectedOccasion(option.id);
                                                                        setIsDropdownOpen(false);
                                                                    }}
                                                                    className={`w-full px-6 py-4 text-left transition-colors flex items-center justify-between border-b border-foreground/5 last:border-0 ${selectedOccasion === option.id
                                                                        ? 'bg-primary/5 text-primary font-bold'
                                                                        : 'text-foreground/70 hover:bg-foreground/5 hover:text-primary'
                                                                        }`}
                                                                >
                                                                    {option.label}
                                                                    {selectedOccasion === option.id && (
                                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                    )}
                                                                </button>
                                                            ))}
                                                        </motion.div>
                                                    </>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground/70 ml-2">Cuéntanos los detalles</label>
                                        <textarea
                                            id="message" name="message" rows={5} required placeholder="Me gustaría encargar 3 perchas grabadas y unas copas..."
                                            className="w-full px-5 py-4 bg-background border border-foreground/10 rounded-2xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-y text-foreground placeholder-foreground/30"
                                        ></textarea>
                                    </div>

                                    <div className="pt-4 flex flex-col items-center">
                                        <button
                                            type="submit"
                                            className="group w-fit px-12 py-5 bg-foreground text-background font-bold text-lg rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-xl shadow-foreground/10 flex items-center justify-center space-x-3"
                                        >
                                            <span>Enviar Mensaje</span>
                                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </button>
                                        <p className="mt-8 text-center text-sm text-foreground/40 italic max-w-sm">
                                            Responderemos tan pronto como terminemos nuestra última pieza en el taller.
                                        </p>
                                    </div>

                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
