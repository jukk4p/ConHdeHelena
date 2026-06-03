import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de Regalos Personalizados | ConhdeHelena",
  description: "Explora nuestra colección de regalos personalizados: copas, llaveros, joyeros y detalles únicos hechos a mano en Sevilla.",
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
