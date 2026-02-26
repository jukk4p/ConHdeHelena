'use client';

import { products } from "@/lib/products";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { ProductCard } from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Ornament } from "../ornament";

export function FeaturedProductsSection() {
    return (
        <section id="productos-destacados" className="w-full py-20 md:py-32" style={{backgroundColor: 'hsl(var(--background-medium))'}}>
            <div className="container px-4 md:px-6">
                <AnimatedSection>
                    <AnimatedItem el="div" className="flex flex-col items-center justify-center space-y-4 text-center">
                        <span className="font-label uppercase tracking-[5px] text-primary text-sm">Nuestras Creaciones</span>
                        <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-headline-alt">Productos Destacados</h2>
                        <Ornament />
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Desde un detalle para un amigo hasta la decoración de tu evento. La tecnología nos permite ofrecer una amplia gama de productos con una precisión increíble.
                        </p>
                    </AnimatedItem>
                    
                    <AnimatedItem el="div" className="mt-12">
                      <Carousel
                        opts={{
                          align: "start",
                          loop: true,
                        }}
                        className="w-full"
                      >
                        <CarouselContent>
                          {products.map((product, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-2 h-full">
                                <ProductCard product={product} />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                      </Carousel>
                    </AnimatedItem>
                </AnimatedSection>
            </div>
        </section>
    );
}
