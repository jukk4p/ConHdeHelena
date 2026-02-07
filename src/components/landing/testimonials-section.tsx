'use client'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AnimatedSection, AnimatedItem } from "../animated-section"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote: "¡Las perchas personalizadas para mi boda fueron un detalle precioso! Calidad increíble y un recuerdo para toda la vida.",
    name: "Lucía G.",
    event: "Boda"
  },
  {
    quote: "Encargué un joyero para mi madre y le encantó. El grabado era perfecto y el trato fue súper cercano. Repetiré seguro.",
    name: "Javier M.",
    event: "Regalo de cumpleaños"
  },
  {
    quote: "Las copas grabadas para nuestro aniversario quedaron espectaculares. Un servicio rápido y muy profesional. ¡Gracias!",
    name: "Sofía y Carlos",
    event: "Aniversario"
  },
  {
    quote: "El llavero para el día del padre fue un éxito total. Un detalle sencillo pero lleno de significado. ¡Muy recomendable!",
    name: "Elena P.",
    event: "Día del Padre"
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedSection>
          <AnimatedItem el="div" className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl font-headline">Lo que dicen nuestros clientes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Nos enorgullece crear piezas que generan sonrisas y recuerdos.
            </p>
          </AnimatedItem>

          <AnimatedItem>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="h-full flex flex-col justify-between">
                        <CardContent className="p-6 flex-grow">
                          <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-accent fill-accent" />)}
                          </div>
                          <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                        </CardContent>
                        <div className="p-6 pt-0 flex items-center justify-end gap-4">
                           <div className="text-right">
                              <p className="font-bold font-headline text-lg">{testimonial.name}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                           </div>
                           <Avatar>
                              <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                           </Avatar>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden lg:flex" />
              <CarouselNext className="hidden lg:flex" />
            </Carousel>
          </AnimatedItem>

        </AnimatedSection>
      </div>
    </section>
  )
}
