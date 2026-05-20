"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Share2, Check } from "lucide-react";

const products = [
    {
        id: 1,
        title: "Copa Personalizada",
        category: "Eventos",
        price: "15€",
        img: "Copa-personalizada-cumpleaños.webp",
        description: "Una copa de cristal elegante personalizada para tus celebraciones más especiales. Ideal para aniversarios, cumpleaños o cualquier evento inolvidable. Grabada con vinilo metálico de alta calidad y excelente adherencia.",
        details: [
            "Cristal de alta calidad y brillo",
            "Personalización con nombre, edad o frase",
            "Diseño elegante y ergonómico",
            "Ideal para regalar en fechas señaladas"
        ]
    },
    {
        id: 2,
        title: "Llavero Personalizado",
        category: "Día a día",
        price: "10€",
        img: "Llavero-personalizado-dia-del-padre.webp",
        description: "Un detalle único y duradero para llevar tus recuerdos siempre contigo. Llaveros de cuero natural grabados con mensajes dedicados, perfectos para regalos especiales como el Día del Padre, cumpleaños o eventos.",
        details: [
            "Cuero genuino de alta calidad",
            "Grabado personalizado de precisión",
            "Remaches y anilla reforzados en acabado bronce",
            "Hecho a mano en nuestro taller"
        ]
    },
    {
        id: 3,
        title: "Joyero Personalizado",
        category: "Especiales",
        price: "30€",
        img: "Joyero-personalizado.webp",
        description: "Un elegante y práctico joyero de viaje personalizado con tu inicial y nombre en acabados metalizados. Su interior acolchado de terciopelo mantiene tus joyas organizadas, seguras y protegidas allá donde vayas.",
        details: [
            "Piel sintética de textura suave y fácil limpieza",
            "Interior de terciopelo protector anti-arañazos",
            "Personalización en foil dorado de gran durabilidad",
            "Cierre de cremallera seguro y compartimentos específicos"
        ]
    },
    {
        id: 4,
        title: "Percha de Comunión",
        category: "Comuniones",
        price: "15€",
        img: "Percha-personalizada-comunión.webp",
        description: "El complemento ideal para colgar el traje o vestido de su Primera Comunión. Una percha de madera lacada en blanco, decorada con un lazo delicado y personalizada artesanalmente con su nombre para conservar un recuerdo inolvidable de ese día.",
        details: [
            "Madera maciza lacada en blanco",
            "Personalización artesanal con nombre y evento",
            "Lazo decorativo de gasa/organza incluido",
            "Ideal para reportajes fotográficos"
        ]
    },
    {
        id: 5,
        title: "Bolas de Navidad",
        category: "Temporada",
        price: "15€",
        img: "Bolas-de-Navidad-personalizadas.webp",
        description: "Añade magia y personalización a tu árbol con estas hermosas bolas navideñas transparentes rellenas de nieve o purpurina. Personalizadas con los nombres de tus seres queridos para crear una decoración única.",
        details: [
            "Esfera de acrílico transparente de alta resistencia",
            "Relleno decorativo navideño",
            "Lazo de gasa o terciopelo incluido",
            "Personalización duradera de nombres y detalles"
        ]
    },
    {
        id: 6,
        title: "Peine Personalizado",
        category: "Cuidado",
        price: "15€",
        img: "Peine-personalizado.webp",
        description: "Un pack de aseo ideal y tierno que incluye un peine y un cepillo de madera natural grabados, acompañados de una bolsita de tela personalizada a juego. Suave con el cabello y perfecto como detalle de nacimiento o cuidado infantil.",
        details: [
            "Madera natural con cerdas suaves",
            "Efecto antiestático y respetuoso con el cuero cabelludo",
            "Bolsita de algodón 100% personalizada con nombre",
            "Grabado de alta precisión duradero"
        ]
    },
];

export default function ProductDetailPage() {
    const params = useParams();
    const product = products.find(p => p.id === Number(params.id));

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
                                src={`/images/assets/${product.img}`}
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

                            <div className="space-y-4 pt-4">
                                <h3 className="font-serif text-xl font-bold">Detalles del producto</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-center text-foreground/60 text-sm">
                                            <Check className="w-4 h-4 text-primary mr-3 shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
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
