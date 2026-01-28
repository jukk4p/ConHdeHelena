import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/lib/products";

// NOTE: Removed "use client" to convert this to a Server Component.
// The hover animation is handled with more performant CSS transitions via Tailwind classes.

function ProductCard({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <div className="h-full transition-transform duration-300 hover:-translate-y-1">
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
        </div>
    )
}

export function ProductListSection() {
    return (
        <section id="productos" className="w-full pb-20 md:pb-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Todos Nuestros Productos</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Ofrecemos una amplia gama de productos que podemos personalizar a tu gusto. Aquí tienes algunos ejemplos:
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
