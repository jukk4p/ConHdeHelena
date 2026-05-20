"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, Minus, Plus } from "lucide-react";

// Official WhatsApp logo SVG
function WhatsAppIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path d="M16.001 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.353.638 4.653 1.848 6.667L2.667 29.333l6.883-1.808A13.3 13.3 0 0 0 16.001 29.333c7.364 0 13.332-5.97 13.332-13.333 0-7.364-5.968-13.333-13.332-13.333zm0 24.267a11.02 11.02 0 0 1-5.614-1.536l-.403-.24-4.085 1.073 1.09-3.974-.263-.408A10.963 10.963 0 0 1 5.001 16c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11zm6.03-8.23c-.33-.165-1.953-.963-2.256-1.073-.303-.11-.524-.165-.744.165-.22.33-.854 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.393-.513-2.654-1.637-.98-.875-1.642-1.955-1.835-2.285-.193-.33-.021-.508.145-.672.15-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.744-1.793-1.018-2.454-.268-.644-.54-.557-.744-.567l-.633-.012c-.22 0-.578.083-.88.413-.303.33-1.155 1.129-1.155 2.753s1.183 3.193 1.347 3.413c.165.22 2.328 3.556 5.643 4.988.789.34 1.404.544 1.884.696.791.252 1.511.217 2.08.132.634-.095 1.953-.799 2.228-1.57.275-.772.275-1.433.193-1.571-.082-.138-.303-.22-.633-.385z" />
        </svg>
    );
}

interface OrderModalProps {
    product: {
        id: number;
        title: string;
        price: string;
        category: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const WHATSAPP_NUMBER = "34678973988"; // Número real de ConhdeHelena

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
    const [mounted, setMounted] = useState(false);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState("");
    const [sending, setSending] = useState(false);

    useEffect(() => { setMounted(true); }, []);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Reset form when closed
    useEffect(() => {
        if (!isOpen) {
            setName("");
            setQuantity(1);
            setNote("");
            setSending(false);
        }
    }, [isOpen]);

    const handleSend = () => {
        if (!name.trim()) return;

        setSending(true);

        const lines = [
            `🛍️ *Nuevo pedido — ConhdeHelena*`,
            ``,
            `📦 *Producto:* ${product.title}`,
            `🏷️ *Categoría:* ${product.category}`,
            `💰 *Precio unitario:* ${product.price}`,
            `🔢 *Cantidad:* ${quantity}`,
            `👤 *Nombre:* ${name.trim()}`,
            note.trim() ? `📝 *Nota:* ${note.trim()}` : null,
            ``,
            `¡Gracias por tu interés! 🌿`,
        ]
            .filter(Boolean)
            .join("\n");

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;

        // Small delay for visual feedback before opening WhatsApp
        setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
            onClose();
        }, 600);
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        key="backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0, scale: 0.92, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.92, y: 24 }}
                        transition={{ type: "spring", damping: 28, stiffness: 260 }}
                        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div
                            className="w-full max-w-md bg-[var(--background)] rounded-3xl shadow-2xl pointer-events-auto overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header */}
                            <div className="relative px-8 pt-8 pb-6 border-b border-foreground/8">
                                <div className="flex items-center gap-3 mb-1">
                                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                                        <ShoppingBag className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-primary uppercase tracking-widest">
                                            Hacer pedido
                                        </p>
                                        <h2 className="font-serif text-xl font-bold text-foreground leading-tight">
                                            {product.title}
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-3">
                                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                                        {product.category}
                                    </span>
                                    <span className="text-xs bg-foreground/6 text-foreground/60 px-3 py-1 rounded-full font-medium">
                                        {product.price} / ud.
                                    </span>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-foreground/6 text-foreground/40 hover:text-foreground transition-all"
                                    aria-label="Cerrar"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Form */}
                            <div className="px-8 py-6 space-y-5">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70">
                                        Tu nombre <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="¿Cómo te llamamos?"
                                        className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-foreground/3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                                    />
                                </div>

                                {/* Quantity */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70">
                                        Cantidad
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                            className="w-10 h-10 rounded-full border border-foreground/12 flex items-center justify-center hover:border-primary hover:text-primary transition-all active:scale-95"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="text-2xl font-serif font-bold text-foreground w-8 text-center">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={() => setQuantity((q) => q + 1)}
                                            className="w-10 h-10 rounded-full border border-foreground/12 flex items-center justify-center hover:border-primary hover:text-primary transition-all active:scale-95"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                        <span className="ml-2 text-sm text-foreground/40 font-medium">
                                            = {(parseFloat(product.price.replace("€", "").trim()) * quantity).toFixed(0)}€
                                        </span>
                                    </div>
                                </div>

                                {/* Note */}
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70">
                                        Nota o personalización{" "}
                                        <span className="text-foreground/30 font-normal">(opcional)</span>
                                    </label>
                                    <textarea
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                        placeholder="Texto a grabar, fecha especial, color preferido…"
                                        rows={3}
                                        className="w-full px-4 py-3 rounded-2xl border border-foreground/12 bg-foreground/3 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="px-8 pb-8">
                                <motion.button
                                    onClick={handleSend}
                                    disabled={!name.trim() || sending}
                                    whileHover={{ scale: name.trim() && !sending ? 1.02 : 1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                                        name.trim() && !sending
                                            ? "bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-lg shadow-[#25D366]/30"
                                            : "bg-foreground/8 text-foreground/30 cursor-not-allowed"
                                    }`}
                                >
                                    {sending ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                                            />
                                            Abriendo WhatsApp…
                                        </>
                                    ) : (
                                        <>
                                            <WhatsAppIcon className="w-5 h-5" />
                                            Pedir por WhatsApp
                                        </>
                                    )}
                                </motion.button>
                                <p className="text-center text-xs text-foreground/30 mt-3">
                                    Te redirigiremos a WhatsApp con el pedido listo para enviar
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
