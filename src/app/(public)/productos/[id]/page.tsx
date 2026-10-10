import Link from "next/link";
import { createClient } from "@/utils/supabase/public";
import ProductDetailClient from "./ProductDetailClient";

export const revalidate = 60;

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

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    let product = null;

    if (UUID_RE.test(id)) {
        const supabase = createClient();
        const { data } = await supabase
            .from("products")
            .select("id, name, category, price, image_url, description")
            .eq("id", id)
            .single();

        if (data) {
            product = {
                id: data.id,
                title: data.name,
                category: data.category,
                price: `${Number(data.price).toFixed(0)}€`,
                image_url: data.image_url,
                description: data.description,
                details: PRODUCT_DETAILS_LOOKUP[data.name] || DEFAULT_PRODUCT_DETAILS,
            };
        }
    }

    if (!product) {
        const fallbackProd = FALLBACK_PRODUCTS.find((p) => p.id === id);
        if (fallbackProd) {
            product = {
                ...fallbackProd,
                details: PRODUCT_DETAILS_LOOKUP[fallbackProd.title] || DEFAULT_PRODUCT_DETAILS,
            };
        }
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

    return <ProductDetailClient product={product} />;
}
