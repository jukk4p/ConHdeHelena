
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { AnimatedItem } from "@/components/animated-section";
import { motion } from "framer-motion";

const products = [
    {
        title: "Bolas de Navidad",
        description: "Adorna tu árbol con bolas de Navidad personalizadas con nombres o fechas.",
        imageUrl: "/Bolas-de-Navidad-personalizadas.webp",
        imageHint: "custom christmas ornament"
    },
    {
        title: "Joyero Personalizado",
        description: "Guarda tus joyas con estilo en un joyero personalizado con tu nombre o iniciales.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "custom jewelry box"
    },
    {
        title: "Peines Personalizados",
        description: "Un regalo original y práctico. Peines de madera grabados con nombres o frases.",
        imageUrl: "/Peine-personalizado.webp",
        imageHint: "wooden comb"
    },
    {
        title: "Copas Personalizadas",
        description: "Celebra momentos especiales con copas de vino o cava grabadas con tu diseño.",
        imageUrl: "/Copa-personalizada-cumpleaños.webp",
        imageHint: "engraved wine glass"
    },
    {
        title: "Llaveros Personalizados",
        description: "Lleva un recuerdo contigo. Llaveros de madera o acrílico con el diseño que elijas.",
        imageUrl: "/Llavero-personalizado-dia-del-padre.webp",
        imageHint: "custom keychain"
    },
    {
        title: "Perchas Personalizadas",
        description: "Un detalle elegante para bodas y eventos. Perchas grabadas para trajes y vestidos.",
        imageUrl: "/Percha-personalizada-comunión.webp",
        imageHint: "custom clothes hanger"
    }
];

function ProductCard({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <AnimatedItem>
            <motion.div whileHover={{ y: -5 }} className="h-full">
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                    <CardHeader>
                        <CardTitle className="font-headline">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow items-center">
                        <div className="w-full h-48 mb-4 rounded-md overflow-hidden relative">
                            <Image src={imageUrl} alt={title} width={300} height={200} className="object-cover w-full h-full" data-ai-hint={imageHint} />
                        </div>
                        <p className="text-sm text-muted-foreground flex-grow">{description}</p>
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatedItem>
    )
}

export function FeaturedProductsSection() {
    return (
        <section id="productos-destacados" className="w-full py-20 md:py-32 bg-accent/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <AnimatedItem>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Productos Destacados</h2>
                    </AnimatedItem>
                     <AnimatedItem>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Desde un detalle para un amigo hasta la decoración de tu evento. La tecnología nos permite ofrecer una amplia gama de productos con una precisión increíble.
                        </p>
                    </AnimatedItem>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                    {products.map((product) => (
                        <ProductCard 
                            key={product.title}
                            title={product.title} 
                            description={product.description} 
                            imageUrl={product.imageUrl}
                            imageHint={product.imageHint}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
