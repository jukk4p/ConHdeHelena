"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CartButton from "@/components/shop/CartButton";
import { createClient } from "@/utils/supabase/client";

const FALLBACK_PRODUCTS = [
    { id: "1", title: "Copa Personalizada", category: "Eventos", price: "15€", img: "Copa-personalizada-cumpleaños.webp", image_url: "/images/assets/Copa-personalizada-cumpleaños.webp" },
    { id: "2", title: "Llavero Personalizado", category: "Día a día", price: "10€", img: "Llavero-personalizado-dia-del-padre.webp", image_url: "/images/assets/Llavero-personalizado-dia-del-padre.webp" },
    { id: "3", title: "Joyero Personalizado", category: "Especiales", price: "30€", img: "Joyero-personalizado.webp", image_url: "/images/assets/Joyero-personalizado.webp" },
    { id: "4", title: "Percha de Comunión", category: "Comuniones", price: "15€", img: "Percha-personalizada-comunión.webp", image_url: "/images/assets/Percha-personalizada-comunión.webp" },
    { id: "5", title: "Bolas de Navidad", category: "Temporada", price: "15€", img: "Bolas-de-Navidad-personalizadas.webp", image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp" },
    { id: "6", title: "Peine Personalizado", category: "Cuidado", price: "15€", img: "Peine-personalizado.webp", image_url: "/images/assets/Peine-personalizado.webp" },
];

function ProductSkeleton() {
    return (
        <div className="space-y-6">
            <div className="aspect-[4/3] rounded-3xl bg-foreground/5 animate-pulse relative overflow-hidden" />
            <div className="flex items-center justify-between gap-4 px-2">
                <div className="space-y-2 flex-1">
                    <div className="h-7 bg-foreground/10 rounded-lg animate-pulse w-3/4" />
                    <div className="flex gap-3 items-center">
                        <div className="h-4 bg-primary/10 rounded-md animate-pulse w-1/4" />
                        <div className="h-3 bg-foreground/5 rounded-full w-1" />
                        <div className="h-4 bg-foreground/10 rounded-md animate-pulse w-1/6" />
                    </div>
                </div>
                <div className="w-11 h-11 rounded-full bg-foreground/10 animate-pulse" />
            </div>
        </div>
    );
}

export default function ProductosPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const supabase = createClient();
                const { data, error } = await supabase
                    .from("products")
                    .select("*")
                    .eq("is_active", true)
                    .order("created_at", { ascending: false });

                if (error) throw error;

                if (data && data.length > 0) {
                    const mapped = data.map((p: any) => ({
                        id: p.id,
                        title: p.name,
                        category: p.category,
                        price: `${Number(p.price).toFixed(0)}€`,
                        image_url: p.image_url
                    }));
                    setProducts(mapped);
                } else {
                    setProducts(FALLBACK_PRODUCTS);
                }
            } catch (err) {
                console.error("Error fetching products, using fallback:", err);
                setProducts(FALLBACK_PRODUCTS);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getProductImage = (product: any) => {
        return product.image_url || `/images/assets/${product.img}`;
    };

    return (
        <div className="min-h-screen">
            {/* Header / Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/headers/products.webp"
                    alt="Colección ConhdeHelena"
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
                            Nuestra <span className="italic font-light text-primary">Colección</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
                            Piezas creadas con paciencia y herramientas de precisión. No hacemos dos piezas iguales, porque no hay dos historias iguales.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {loading ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {Array.from({ length: 6 }).map((_, idx) => (
                                <ProductSkeleton key={idx} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
                        >
                            {products.map((product, i) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {/* Image — navigates to product detail */}
                                    <Link href={`/productos/${product.id}`} className="group block outline-none">
                                        <motion.div
                                            whileHover={{
                                                rotateY: 10,
                                                rotateX: -5,
                                                scale: 1.02,
                                                transition: { duration: 0.4 }
                                            }}
                                            style={{ perspective: 1000 }}
                                            className="aspect-[4/3] rounded-3xl bg-foreground/5 overflow-hidden relative mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500"
                                        >
                                            <Image
                                                src={getProductImage(product)}
                                                alt={product.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <span className="inline-block bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border border-white/30">
                                                    Ver Detalles
                                                </span>
                                            </div>
                                        </motion.div>
                                    </Link>

                                    {/* Info row — cart button is OUTSIDE the Link */}
                                    <div className="flex items-center justify-between gap-4 px-2 mt-1">
                                        <Link href={`/productos/${product.id}`} className="group flex-1 min-w-0">
                                            <div className="space-y-1">
                                                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                                    {product.title}
                                                </h3>
                                                <div className="flex gap-3 items-center">
                                                    <span className="text-primary font-serif italic text-sm">{product.category}</span>
                                                    <span className="text-foreground/30 text-xs">·</span>
                                                    <p className="text-foreground/60 text-sm font-medium">{product.price}</p>
                                                </div>
                                            </div>
                                        </Link>

                                        {/* Cart button — opens WhatsApp order modal */}
                                        <CartButton product={product} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}
