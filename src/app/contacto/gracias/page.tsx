"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Heart } from "lucide-react";

export default function GraciasPage() {
    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-surface p-12 rounded-[3rem] border border-foreground/5 shadow-2xl text-center space-y-8"
            >
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="font-serif text-4xl font-bold text-foreground">¡Mensaje Recibido!</h1>
                    <p className="text-foreground/70 font-light leading-relaxed text-lg">
                        Gracias por confiar en nosotros para tu idea. Hemos recibido tus detalles y Elena te responderá personalmente en menos de 24 horas.
                    </p>
                </div>

                <div className="pt-4 space-y-4">
                    <Link
                        href="/"
                        className="flex items-center justify-center bg-foreground text-background px-8 py-4 rounded-full text-lg font-bold hover:bg-primary transition-all duration-300 w-full"
                    >
                        <span>Volver al inicio</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>

                    <div className="flex items-center justify-center space-x-2 text-primary font-serif italic py-4">
                        <Heart className="w-4 h-4 fill-current" />
                        <span>Hecho con amor en Sevilla</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
