import { products } from "@/lib/products";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";

export function ProductListSection() {
    return (
        <section id="productos" className="w-full pb-20 md:pb-32">
            <AnimatedSection className="container px-4 md:px-6">
                <AnimatedItem el="div" className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline">Todos Nuestros Productos</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Ofrecemos una amplia gama de productos que podemos personalizar a tu gusto. Aquí tienes algunos ejemplos:
                    </p>
                </AnimatedItem>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <AnimatedItem key={product.title}>
                           <ProductCard product={product} />
                        </AnimatedItem>
                    ))}
                </div>
            </AnimatedSection>
        </section>
    );
}
