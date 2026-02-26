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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Ornament } from "../ornament"
import { Quote } from "lucide-react"

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
            <span className="font-label uppercase tracking-[5px] text-primary text-sm">Opiniones</span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl font-headline-alt">Lo que dicen quienes nos eligen</h2>
            <Ornament />
          </AnimatedItem>

          <AnimatedItem>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="h-full flex flex-col shadow-warm p-2 relative overflow-hidden">
                        <Quote className="absolute -top-2 -left-2 w-20 h-20 text-primary/5 opacity-50" />
                        <CardContent className="p-6 flex flex-col flex-grow text-center">
                          <div className="flex-grow">
                            <p className="font-body italic text-muted-foreground">"{testimonial.quote}"</p>
                          </div>
                          <div>
                           <div className="flex justify-center my-4">
                             <Ornament small />
                           </div>
                           <p className="font-headline-alt font-bold text-lg">{testimonial.name}</p>
                           <div className="flex justify-center mt-2">
                             <div className="inline-block rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground font-label uppercase tracking-widest">
                                {testimonial.event}
                             </div>
                           </div>
                          </div>
                        </CardContent>
                         <div className="p-4 pt-0 flex items-center justify-center">
                           <Avatar>
                              <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground font-bold">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
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
