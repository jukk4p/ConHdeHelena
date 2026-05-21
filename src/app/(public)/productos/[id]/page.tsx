"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Share2, Check } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const FALLBACK_PRODUCTS = [
    {
        id: "1",
        title: "Copa Personalizada",
        category: "Eventos",
        price: "15€",
        img: "Copa-personalizada-cumpleaños.webp",
        image_url: "/images/assets/Copa-personalizada-cumpleaños.webp",
        description: "Una copa de cristal elegante personalizada para tus celebraciones más especiales. Ideal para aniversarios, cumpleaños o cualquier evento inolvidable. Grabada con vinilo metálico de alta calidad y excelente adherencia."
    },
    {
        id: "2",
        title: "Llavero Personalizado",
        category: "Día a día",
        price: "10€",
        img: "Llavero-personalizado-dia-del-padre.webp",
        image_url: "/images/assets/Llavero-personalizado-dia-del-padre.webp",
        description: "Un detalle único y duradero para llevar tus recuerdos siempre contigo. Llaveros de cuero natural grabados con mensajes dedicados, perfectos para regalos especiales como el Día del Padre, cumpleaños o eventos."
    },
    {
        id: "3",
        title: "Joyero Personalizado",
        category: "Especiales",
        price: "30€",
        img: "Joyero-personalizado.webp",
        image_url: "/images/assets/Joyero-personalizado.webp",
        description: "Un elegante y práctico joyero de viaje personalizado con tu inicial y nombre en acabados metalizados. Su interior acolchado de terciopelo mantiene tus joyas organizadas, seguras y protegidas allá donde vayas."
    },
    {
        id: "4",
        title: "Percha de Comunión",
        category: "Comuniones",
        price: "15€",
        img: "Percha-personalizada-comunión.webp",
        image_url: "/images/assets/Percha-personalizada-comunión.webp",
        description: "El complemento ideal para colgar el traje o vestido de su Primera Comunión. Una percha de madera lacada en blanco, decorada con un lazo delicado y personalizada artesanalmente con su nombre para conservar un recuerdo inolvidable de ese día."
    },
    {
        id: "5",
        title: "Bolas de Navidad",
        category: "Temporada",
        price: "15€",
        img: "Bolas-de-Navidad-personalizadas.webp",
        image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp",
        description: "Añade magia y personalización a tu árbol con estas hermosas bolas navideñas transparentes rellenas de nieve o purpurina. Personalizadas con los nombres de tus seres queridos para crear una decoración única."
    },
    {
        id: "6",
        title: "Peine Personalizado",
        category: "Cuidado",
        price: "15€",
        img: "Peine-personalizado.webp",
        image_url: "/images/assets/Peine-personalizado.webp",
        description: "Un pack de aseo ideal y tierno que incluye un peine y un cepillo de madera natural grabados, acompañados de una bolsita de tela personalizada a juego. Suave con el cabello y perfecto como detalle de nacimiento o cuidado infantil."
    },
];

const PRODUCT_DETAILS_LOOKUP: Record<string, string[]> = {
    "Copa Personalizada": [
        "Cristal de alta calidad y brillo",
        "Personalización con nombre, edad o frase",
        "Diseño elegante y ergonómico",
        "Ideal para regalar en fechas señaladas"
    ],
    "Llavero Personalizado": [
        "Cuero genuino de alta calidad",
        "Grabado personalizado de precisión",
        "Remaches y anilla reforzados en acabado bronce",
        "Hecho a mano en nuestro taller"
    ],
    "Joyero Personalizado": [
        "Piel sintética de textura suave y fácil limpieza",
        "Interior de terciopelo protector anti-arañazos",
        "Personalización en foil dorado de gran durabilidad",
        "Cierre de cremallera seguro y compartimentos específicos"
    ],
    "Percha de Comunión": [
        "Madera maciza lacada en blanco",
        "Personalización artesanal con nombre y evento",
        "Lazo decorativo de gasa/organza incluido",
        "Ideal para reportajes fotográficos"
    ],
    "Bolas de Navidad": [
        "Esfera de acrílico transparente de alta resistencia",
        "Relleno decorativo navideño",
        "Lazo de gasa o terciopelo incluido",
        "Personalización duradera de nombres y detalles"
    ],
    "Peine Personalizado": [
        "Madera natural con cerdas suaves",
        "Efecto antiestático y respetuoso con el cuero cabelludo",
        "Bolsita de algodón 100% personalizada con nombre",
        "Grabado de alta precisión duradero"
    ]
};

const DEFAULT_PRODUCT_DETAILS = [
    "Elaboración artesanal en nuestro taller",
    "Materiales seleccionados de alta calidad",
    "Personalización totalmente a tu medida",
    "Diseño exclusivo y duradero"
];

function DetailSkeleton() {
    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="h-6 bg-foreground/10 rounded animate-pulse w-32 mb-12" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="aspect-[4/3] rounded-[2.5rem] bg-foreground/5 animate-pulse" />
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div className="h-12 bg-foreground/10 rounded-2xl animate-pulse w-3/4" />
                            <div className="h-8 bg-primary/10 rounded-lg animate-pulse w-1/4" />
                        </div>
                        <div className="space-y-6">
                            <div className="h-24 bg-foreground/5 rounded-2xl animate-pulse w-full" />
                            <div className="space-y-4 pt-4">
                                <div className="h-6 bg-foreground/10 rounded animate-pulse w-48" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="h-5 bg-foreground/5 rounded animate-pulse" />
                                    <div className="h-5 bg-foreground/5 rounded animate-pulse" />
                                    <div className="h-5 bg-foreground/5 rounded animate-pulse" />
                                    <div className="h-5 bg-foreground/5 rounded animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ProductDetailPage() {
    const params = useParams();
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            if (!params?.id) return;
            try {
                const supabase = createClient();
                const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(params.id));

                if (isUuid) {
                    const { data, error } = await supabase
                        .from("products")
                        .select("*")
                        .eq("id", params.id)
                        .single();

                    if (data) {
                        const details = PRODUCT_DETAILS_LOOKUP[data.name] || DEFAULT_PRODUCT_DETAILS;
                        setProduct({
                            id: data.id,
                            title: data.name,
                            category: data.category,
                            price: `${Number(data.price).toFixed(0)}€`,
                            image_url: data.image_url,
                            description: data.description,
                            details: details
                        });
                        setLoading(false);
                        return;
                    }
                }

                // Try fallback
                const fallbackProd = FALLBACK_PRODUCTS.find(p => p.id === String(params.id));
                if (fallbackProd) {
                    setProduct({
                        ...fallbackProd,
                        details: PRODUCT_DETAILS_LOOKUP[fallbackProd.title] || DEFAULT_PRODUCT_DETAILS
                    });
                } else {
                    setProduct(null);
                }
            } catch (err) {
                console.error("Error fetching product details:", err);
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [params?.id]);

    if (loading) {
        return <DetailSkeleton />;
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-serif font-bold mb-4">Producto no encontrado</h1>
                    <Link href="/productos" className="text-primary hover:underline">Volver a la colección</Link>
                </div>
            </div>
        );
    }

    const getProductImage = (product: any) => {
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
