import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConhdeHelena | Regalos Personalizados",
  description: "Diseño y personalización de regalos en Sevilla. Transformamos tus ideas en detalles únicos para momentos especiales.",
  openGraph: {
    title: "ConhdeHelena | Regalos Personalizados",
    description: "Diseño y personalización de regalos en Sevilla. Transformamos tus ideas en detalles únicos para momentos especiales.",
    url: "https://conhdehelena.com",
    siteName: "ConhdeHelena",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConhdeHelena | Regalos Personalizados",
    description: "Diseño y personalización de regalos en Sevilla.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${lora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
