import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/lib/products";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

function ProductCard({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <div className="h-full group">
            <Card className="text-center flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-soft-lg hover:-translate-y-2">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow items-center">
                    <div className="w-full aspect-square mb-6 rounded-md overflow-hidden relative">
                        <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105" data-ai-hint={imageHint} />
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow">{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export function FeaturedProductsSection() {
    return (
        <section id="productos-destacados" className="w-full py-20 md:py-32 bg-card">
            <div className="container px-4 md:px-6">
                {/* INICIO ANIMACIÓN BLOQUE PRODUCTOS DESTACADOS */}
                <AnimatedSection>
                    <AnimatedItem el="div" className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-headline">Productos Destacados</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Desde un detalle para un amigo hasta la decoración de tu evento. La tecnología nos permite ofrecer una amplia gama de productos con una precisión increíble.
                        </p>
                    </AnimatedItem>
                    <div
                        className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12"
                    >
                        {products.map((product) => (
                           <AnimatedItem key={product.title}>
                                <ProductCard
                                    title={product.title}
                                    description={product.description}
                                    imageUrl={product.imageUrl}
                                    imageHint={product.imageHint}
                                />
                            </AnimatedItem>
                        ))}
                    </div>
                </AnimatedSection>
                 {/* FIN ANIMACIÓN BLOQUE PRODUCTOS DESTACADOS */}
            </div>
        </section>
    );
}
