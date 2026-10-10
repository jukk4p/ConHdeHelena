import { createClient } from "@/utils/supabase/public";
import ProductosClient from "./ProductosClient";

export const revalidate = 60;

const FALLBACK_PRODUCTS = [
    { id: "1", title: "Copa Personalizada", category: "Eventos", price: "15€", img: "Copa-personalizada-cumpleaños.webp", image_url: "/images/assets/Copa-personalizada-cumpleaños.webp" },
    { id: "2", title: "Llavero Personalizado", category: "Día a día", price: "10€", img: "Llavero-personalizado-dia-del-padre.webp", image_url: "/images/assets/Llavero-personalizado-dia-del-padre.webp" },
    { id: "3", title: "Joyero Personalizado", category: "Especiales", price: "30€", img: "Joyero-personalizado.webp", image_url: "/images/assets/Joyero-personalizado.webp" },
    { id: "4", title: "Percha de Comunión", category: "Comuniones", price: "15€", img: "Percha-personalizada-comunión.webp", image_url: "/images/assets/Percha-personalizada-comunión.webp" },
    { id: "5", title: "Bolas de Navidad", category: "Temporada", price: "15€", img: "Bolas-de-Navidad-personalizadas.webp", image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp" },
    { id: "6", title: "Peine Personalizado", category: "Cuidado", price: "15€", img: "Peine-personalizado.webp", image_url: "/images/assets/Peine-personalizado.webp" },
];

export default async function ProductosPage() {
    const supabase = createClient();

    const { data, error } = await supabase
        .from("products")
        .select("id, name, category, price, image_url")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

    if (error) {
        console.error("Error fetching products, using fallback:", error);
    }

    const products = data && data.length > 0
        ? data.map((p) => ({
            id: p.id,
            title: p.name,
            category: p.category,
            price: `${Number(p.price).toFixed(0)}€`,
            image_url: p.image_url,
        }))
        : FALLBACK_PRODUCTS;

    return <ProductosClient products={products} />;
}
