import HomePageClient from "@/components/home/HomePageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regalos Personalizados en Sevilla | ConhdeHelena",
  description: "Descubre regalos únicos, artesanales y personalizados en nuestro taller de Sevilla. Transformamos tus ideas en momentos inolvidables.",
};

export default function Home() {
  return <HomePageClient />;
}
