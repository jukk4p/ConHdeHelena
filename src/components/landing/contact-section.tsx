import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export function ContactSection() {
    return (
        <section
            id="contacto"
            className="w-full py-20 md:py-32 bg-card"
        >
            <div className="container px-4 md:px-6">
                 {/* // INICIO ANIMACIÓN BLOQUE CONTACTO */}
                <AnimatedSection className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                         <AnimatedItem>
                            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl font-headline">¿Tienes una idea? Hablemos.</h2>
                        </AnimatedItem>
                        <AnimatedItem>
                            <p className="text-muted-foreground md:text-lg">
                                Nos encanta afrontar nuevos retos creativos. Rellena el formulario o contáctanos directamente. Si tienes un pedido especial en mente, no dudes en detallarlo.
                            </p>
                        </AnimatedItem>
                        <div className="space-y-6 pt-4">
                            <AnimatedItem>
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                    <a href="mailto:hola@conhdehelena.es" className="text-muted-foreground hover:text-primary transition-colors">hola@conhdehelena.es</a>
                                </div>
                            </AnimatedItem>
                            <AnimatedItem>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                    <a href="tel:+34678973988" className="text-muted-foreground hover:text-primary transition-colors">+34 678 973 988</a>
                                </div>
                            </AnimatedItem>
                            <AnimatedItem>
                                <div className="flex items-center gap-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <p className="text-muted-foreground">Sevilla, España</p>
                                </div>
                            </AnimatedItem>
                        </div>
                    </div>
                    <AnimatedItem>
                        <ContactForm />
                    </AnimatedItem>
                </AnimatedSection>
                {/* // FIN ANIMACIÓN BLOQUE CONTACTO */}
            </div>
        </section>
    );
}
