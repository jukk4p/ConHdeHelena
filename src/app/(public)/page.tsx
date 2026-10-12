import HomePageClient from "@/components/home/HomePageClient";
import { Metadata } from "next";
import { createClient } from "@/utils/supabase/public";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Regalos Personalizados en Sevilla | ConhdeHelena",
  description: "Descubre regalos únicos, artesanales y personalizados en nuestro taller de Sevilla. Transformamos tus ideas en momentos inolvidables.",
};

const FALLBACK_FEATURED = [
  { id: "1", title: "Pack Nacimiento Básico", price: "9€", image_url: "/images/assets/Pack-nacimiento-basico.webp" },
  { id: "2", title: "Pack Nacimiento Premium", price: "12€", image_url: "/images/assets/Pack-nacimiento-premium.webp" },
  { id: "3", title: "Bolas de Navidad", price: "10€", image_url: "/images/assets/Bolas-de-Navidad-personalizadas.webp" },
];

export default async function Home() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, image_url")
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .limit(3);

  if (error) {
    console.error("Error fetching featured products, using fallback:", error);
  }

  const featuredProducts = data && data.length > 0
    ? data.map((p) => ({
        id: p.id,
        title: p.name,
        price: Number(p.price) > 0 ? `${Number(p.price).toFixed(0)}€` : "Consultar precio",
        image_url: p.image_url,
      }))
    : FALLBACK_FEATURED;

  return <HomePageClient featuredProducts={featuredProducts} />;
}
