import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Taller Artesanal en Sevilla | ConhdeHelena",
  description: "Conoce la historia detrás de ConhdeHelena. Diseño digital y acabado a mano desde nuestro taller en Sevilla para crear piezas inolvidables.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
