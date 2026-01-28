import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { products } from "@/lib/products";

// NOTE: By removing client-side animations, this component and its children
// can be rendered on the server, significantly improving performance and reducing CPU load.

function ProductCard({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <div className="h-full">
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

export function FeaturedProductsSection() {
    return (
        <section id="productos-destacados" className="w-full py-20 md:py-32 bg-accent/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Productos Destacados</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Desde un detalle para un amigo hasta la decoración de tu evento. La tecnología nos permite ofrecer una amplia gama de productos con una precisión increíble.
                    </p>
                </div>
                <div
                    className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12"
                >
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
