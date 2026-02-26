import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export function ContactSection() {
    return (
        <section
            id="contacto"
            className="w-full py-20 md:py-32"
            style={{ backgroundColor: 'hsl(var(--background-medium))' }}
        >
            <div className="container px-4 md:px-6">
                <AnimatedSection className="max-w-4xl mx-auto text-center">
                    <AnimatedItem>
                         <h2 className="font-headline-alt text-4xl font-bold tracking-tight md:text-5xl">¿Tienes una idea? Hablemos.</h2>
                    </AnimatedItem>
                     <AnimatedItem>
                        <p className="font-great-vibes text-primary text-2xl md:text-3xl mt-4 mb-8">Cada regalo empieza con una conversación.</p>
                    </AnimatedItem>
                </AnimatedSection>
                <AnimatedSection className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-start mt-12">
                    <div className="space-y-8 lg:col-span-3">
                         <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                Nos encanta afrontar nuevos retos creativos. Rellena el formulario o contáctanos directamente. Si tienes un pedido especial en mente, no dudes en detallarlo.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem>
                            <ContactForm />
                        </AnimatedItem>
                    </div>
                    <div className="space-y-8 lg:col-span-2">
                        <AnimatedItem>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <a href="mailto:hola@conhdehelena.es" className="text-muted-foreground hover:text-primary transition-colors">hola@conhdehelena.es</a>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <Phone className="w-6 h-6 text-primary" />
                                <a href="tel:+34678973988" className="text-muted-foreground hover:text-primary transition-colors">+34 678 973 988</a>
                            </div>
                        </AnimatedItem>
                        <AnimatedItem>
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <MapPin className="w-6 h-6 text-primary" />
                                <p className="text-muted-foreground">Sevilla, España</p>
                            </div>
                        </AnimatedItem>
                         <div className="border-t border-accent/20 my-6"></div>
                         <AnimatedItem>
                             <div className="text-center">
                                <p className="text-muted-foreground mb-4">O si lo prefieres, escríbenos directamente para una respuesta más rápida:</p>
                                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white font-body normal-case tracking-normal w-auto">
                                    <a href="https://wa.me/34678973988" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faWhatsapp} className="mr-2 h-5 w-5" />
                                        Escríbenos por WhatsApp
                                    </a>
                                </Button>
                                <p className="font-great-vibes text-primary text-center text-lg mt-4">Respondemos en menos de 24h con cariño.</p>
                            </div>
                        </AnimatedItem>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
