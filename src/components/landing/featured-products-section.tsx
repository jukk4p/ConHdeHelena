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
import CountUp from "react-countup";
import { Gift } from "lucide-react";

export function FeaturedProductsSection() {
    return (
        <section id="productos-destacados" className="w-full py-20 md:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <AnimatedSection>
                    <AnimatedItem el="div" className="flex flex-col items-center justify-center space-y-4 text-center">
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-headline">Productos Destacados</h2>
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
                          {products.map((product) => (
                            <CarouselItem key={product.title} className="md:basis-1/2 lg:basis-1/3">
                              <div className="p-1 h-full">
                                <ProductCard product={product} />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                      </Carousel>
                    </AnimatedItem>

                    <AnimatedItem el="div" className="flex justify-center mt-20">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2">
                           <Gift className="w-10 h-10 text-primary" />
                           <span className="text-5xl font-bold font-headline text-foreground">
                            <CountUp end={1000} duration={3} enableScrollSpy />+
                           </span>
                        </div>
                        <p className="text-muted-foreground mt-2">regalos únicos entregados</p>
                      </div>
                    </AnimatedItem>

                </AnimatedSection>
            </div>
        </section>
    );
}
