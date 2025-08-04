"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const categories = ["Todo", "Tazas", "Camisetas", "Invitaciones", "Vinilos"];

const galleryItems = [
  {
    category: "Tazas",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "custom mug",
    title: "Taza Personalizada 'Buenos Días'",
    description: "Taza de cerámica con diseño exclusivo para empezar el día con una sonrisa."
  },
  {
    category: "Camisetas",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "custom t-shirt",
    title: "Camiseta 'Frase Inspiradora'",
    description: "Algodón de alta calidad con una frase que te motivará a ti y a los demás."
  },
  {
    category: "Invitaciones",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "wedding invitation",
    title: "Invitación de Boda Elegante",
    description: "Diseño floral con acabados en dorado, perfecto para un día inolvidable."
  },
  {
    category: "Vinilos",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "wall decal",
    title: "Vinilo Decorativo 'Sueña Grande'",
    description: "Decora tu pared con este vinilo de fácil aplicación y gran impacto visual."
  },
  {
    category: "Tazas",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "couple mugs",
    title: "Set de Tazas para Parejas",
    description: "Dos tazas que se complementan, el regalo perfecto para aniversarios."
  },
  {
    category: "Camisetas",
    imageUrl: "https://placehold.co/400x400.png",
    imageHint: "event t-shirt",
    title: "Camisetas para Evento",
    description: "Personaliza camisetas para tu despedida de soltera, cumpleaños o equipo."
  },
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todo");

  const filteredItems = activeCategory === "Todo"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="galeria" className="w-full py-20 md:py-32">
    <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Galería de Creaciones</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
            Cada regalo es una historia y cada detalle cuenta. Aquí tienes una muestra de los trabajos que hemos realizado con toda nuestra pasión y precisión. Inspírate para tu próximo regalo único.
            </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
        {categories.map(category => (
            <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            >
            {category}
            </Button>
        ))}
        </div>

        <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
        {filteredItems.map((item) => (
            <div key={item.title}>
            <Dialog>
                <DialogTrigger asChild>
                <motion.div
                    className="cursor-pointer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Card className="overflow-hidden h-full">
                    <CardContent className="p-0">
                        <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint={item.imageHint}
                        />
                    </CardContent>
                    </Card>
                </motion.div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle className="font-headline text-2xl">{item.title}</DialogTitle>
                    <DialogDescription>{item.description}</DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <Image
                        src={item.imageUrl.replace('400x400', '800x800')}
                        alt={item.title}
                        width={800}
                        height={800}
                        className="object-cover w-full h-full rounded-md"
                        data-ai-hint={item.imageHint}
                    />
                </div>
                <Button asChild>
                    <Link href="/contacto">Solicitar un producto similar</Link>
                    </Button>
                </DialogContent>
            </Dialog>
            </div>
        ))}
        </div>
    </div>
    </section>
  );
}
