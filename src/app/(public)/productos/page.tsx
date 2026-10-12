import { createClient } from "@/utils/supabase/public";
import ProductosClient from "./ProductosClient";

export const revalidate = 60;

const FALLBACK_PRODUCTS = [
    { id: "1", title: "Pack Nacimiento Básico", category: "Nacimiento", price: "9€", img: "Pack-nacimiento-basico.webp", image_url: "/images/assets/Pack-nacimiento-basico.webp" },
    { id: "2", title: "Pack Nacimiento Premium", category: "Nacimiento", price: "12€", img: "Pack-nacimiento-premium.webp", image_url: "/images/assets/Pack-nacimiento-premium.webp" },
    { id: "3", title: "Bolas de Navidad", category: "Temporada", price: "10€", img: "Bolas-de-Navidad-personalizadas.webp", image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp" },
    { id: "4", title: "Joyero de Viaje", category: "Especiales", price: "Consultar precio", img: "Joyero-de-viaje-personalizado.webp", image_url: "/images/assets/Joyero-de-viaje-personalizado.webp" },
    { id: "5", title: "Espejo Personalizado", category: "Eventos", price: "Consultar precio", img: "Espejo-personalizado-para-eventos.webp", image_url: "/images/assets/Espejo-personalizado-para-eventos.webp" },
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
            price: Number(p.price) > 0 ? `${Number(p.price).toFixed(0)}€` : "Consultar precio",
            image_url: p.image_url,
        }))
        : FALLBACK_PRODUCTS;

    return <ProductosClient products={products} />;
}
