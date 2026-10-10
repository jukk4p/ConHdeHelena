"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Share2, Check } from "lucide-react";

interface Product {
    id: string | number;
    title: string;
    category: string;
    price: string;
    img?: string;
    image_url?: string;
    description: string;
    details: string[];
}

export default function ProductDetailClient({ product }: { product: Product }) {
    const getProductImage = (product: Product) => {
        return product.image_url || `/images/assets/${product.img}`;
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <Link
                    href="/productos"
                    className="inline-flex items-center text-foreground/50 hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Volver a la colección
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-foreground/5 relative shadow-2xl">
                            <Image
                                src={getProductImage(product)}
                                alt={product.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Status tag */}
                        <div className="absolute top-8 left-8">
                            <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-foreground shadow-sm">
                                {product.category}
                            </span>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground">
                                {product.title}
                            </h1>
                            <p className="text-3xl font-light text-primary">{product.price}</p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-foreground/70 font-light leading-relaxed">
                                {product.description}
                            </p>

                            {product.details && product.details.length > 0 && (
                                <div className="space-y-4 pt-4">
                                    <h3 className="font-serif text-xl font-bold">Detalles del producto</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.details.map((detail: string, idx: number) => (
                                            <li key={idx} className="flex items-center text-foreground/60 text-sm">
                                                <Check className="w-4 h-4 text-primary mr-3 shrink-0" />
                                                {detail}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contacto"
                                className="flex-1 bg-foreground text-background px-8 py-4 rounded-full text-center text-lg font-bold hover:bg-primary transition-all duration-300 shadow-xl shadow-foreground/5 flex items-center justify-center space-x-3"
                            >
                                <ShoppingBag className="w-5 h-5" />
                                <span>Pedir presupuesto</span>
                            </Link>
                            <div className="flex gap-4">
                                <button className="p-4 rounded-full border border-foreground/10 hover:border-primary hover:text-primary transition-all group">
                                    <Heart className="w-6 h-6 group-hover:fill-current" />
                                </button>
                                <button className="p-4 rounded-full border border-foreground/10 hover:border-primary hover:text-primary transition-all">
                                    <Share2 className="w-6 h-6" />
                                </button>
                            </div>
                        </div>

                        <div className="bg-surface p-8 rounded-3xl border border-foreground/5 space-y-4">
                            <h4 className="font-serif text-lg font-bold italic">Pieza única y personalizada</h4>
                            <p className="text-sm text-foreground/60 leading-relaxed font-light">
                                Al ser un producto artesanal, los acabados y tonos de la madera o resina pueden variar ligeramente, haciendo que tu pieza sea verdaderamente única en el mundo.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
