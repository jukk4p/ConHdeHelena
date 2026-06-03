"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Verificar si el usuario ya dio su consentimiento
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Mostrar el banner después de un breve delay para mejorar UX
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookie-consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[100] bg-surface/85 backdrop-blur-md border border-foreground/10 p-6 rounded-3xl shadow-2xl flex flex-col gap-4"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-primary/10 rounded-2xl text-primary">
                                <Cookie className="w-6 h-6" />
                            </div>
                            <h3 className="font-serif text-lg font-bold text-foreground">
                                Valoramos tu privacidad
                            </h3>
                        </div>
                        <button
                            onClick={handleDecline}
                            className="p-1 text-foreground/40 hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
                            aria-label="Cerrar"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Body */}
                    <p className="text-sm text-foreground/70 leading-relaxed font-light">
                        Usamos cookies propias y de terceros para analizar el tráfico, personalizar el contenido y mejorar tu experiencia en nuestra tienda de regalos artesanales. Podés aceptar todas las cookies o configurar tus preferencias.
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-3 justify-end mt-2">
                        <button
                            onClick={handleDecline}
                            className="px-4 py-2.5 rounded-xl text-xs font-semibold text-foreground/60 hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                        >
                            Rechazar
                        </button>
                        <button
                            onClick={handleAccept}
                            className="px-5 py-2.5 bg-[#b38f4d] hover:bg-[#c5a059] text-white rounded-xl text-xs font-semibold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                        >
                            Aceptar cookies
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
