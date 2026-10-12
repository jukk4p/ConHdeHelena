import Link from "next/link";
import { createClient } from "@/utils/supabase/public";
import ProductDetailClient from "./ProductDetailClient";

export const revalidate = 60;

const FALLBACK_PRODUCTS = [
    {
        id: "1",
        title: "Pack Nacimiento Básico",
        category: "Nacimiento",
        price: "9€",
        img: "Pack-nacimiento-basico.webp",
        image_url: "/images/assets/Pack-nacimiento-basico.webp",
        description: "Un pack de nacimiento tierno y artesanal para dar la bienvenida a los más pequeños. Incluye perchas de madera y un peine personalizados con el nombre del bebé, junto con una bolsita de tela a juego. Un recuerdo único hecho con cariño en nuestro taller."
    },
    {
        id: "2",
        title: "Pack Nacimiento Premium",
        category: "Nacimiento",
        price: "12€",
        img: "Pack-nacimiento-premium.webp",
        image_url: "/images/assets/Pack-nacimiento-premium.webp",
        description: "La versión más completa para celebrar un nacimiento inolvidable. Incluye perchas de madera con lazo, una bolsita de tela personalizada con el nombre del bebé y una caja guarda-cordón umbilical de madera. Materiales naturales y acabado artesanal de alta calidad."
    },
    {
        id: "3",
        title: "Bolas de Navidad",
        category: "Temporada",
        price: "10€",
        img: "Bolas-de-Navidad-personalizadas.webp",
        image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp",
        description: "Añade magia y personalización a tu árbol con estas hermosas bolas navideñas transparentes rellenas de nieve o purpurina. Personalizadas con los nombres de tus seres queridos para crear una decoración única."
    },
    {
        id: "4",
        title: "Joyero de Viaje",
        category: "Especiales",
        price: "Consultar precio",
        img: "Joyero-de-viaje-personalizado.webp",
        image_url: "/images/assets/Joyero-de-viaje-personalizado.webp",
        description: "Joyero de viaje personalizado con tu inicial y nombre en acabados dorados, a juego con un llavero porta pinta labios con espejo. Compacto y práctico, perfecto para llevar tus joyas y esenciales allá donde vayas."
    },
    {
        id: "5",
        title: "Espejo Personalizado",
        category: "Eventos",
        price: "Consultar precio",
        img: "Espejo-personalizado-para-eventos.webp",
        image_url: "/images/assets/Espejo-personalizado-para-eventos.webp",
        description: "Un detalle único que hace de tu evento un momento inolvidable. Espejo decorativo totalmente personalizable con nombre, fecha y mensaje, ideal para bodas, bautizos, comuniones y cumpleaños."
    },
];

const PRODUCT_DETAILS_LOOKUP: Record<string, string[]> = {
    "Pack Nacimiento Básico": [
        "Perchas de madera natural personalizadas",
        "Peine de madera grabado con el nombre",
        "Bolsita de tela a juego incluida",
        "Hecho a mano en nuestro taller"
    ],
    "Pack Nacimiento Premium": [
        "Perchas de madera con lazo decorativo",
        "Bolsita de tela personalizada con nombre",
        "Caja guarda-cordón umbilical de madera",
        "Materiales naturales y acabado artesanal"
    ],
    "Bolas de Navidad": [
        "Esfera de acrílico transparente de alta resistencia",
        "Relleno decorativo navideño",
        "Lazo de gasa o terciopelo incluido",
        "Personalización duradera de nombres y detalles"
    ],
    "Joyero de Viaje": [
        "Piel sintética de textura suave y fácil limpieza",
        "Llavero porta pinta labios con espejo a juego",
        "Personalización en foil dorado de gran durabilidad",
        "Compacto y práctico para llevar de viaje"
    ],
    "Espejo Personalizado": [
        "Totalmente personalizable: nombre, fecha y mensaje",
        "Diseño elegante ideal para bodas, bautizos y comuniones",
        "Materiales de alta calidad y acabados cuidados",
        "Un recuerdo especial que tus invitados conservarán"
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
                price: Number(data.price) > 0 ? `${Number(data.price).toFixed(0)}€` : "Consultar precio",
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
