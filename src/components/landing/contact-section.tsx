import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";
import { AnimatedItem, AnimatedSection } from "@/components/animated-section";

export function ContactSection() {
    return (
        <AnimatedSection>
            <section id="contacto" className="w-full py-20 md:py-32 bg-accent/50">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-4">
                            <AnimatedItem>
                                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">¿Tienes una idea? Hablemos.</h2>
                            </AnimatedItem>
                            <AnimatedItem>
                                <p className="text-muted-foreground">
                                    Nos encanta afrontar nuevos retos creativos. Rellena el formulario o contáctanos directamente. Si tienes un pedido especial en mente, no dudes en detallarlo.
                                </p>
                            </AnimatedItem>
                            <div className="space-y-4 pt-4">
                                <AnimatedItem>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-primary" />
                                        <a href="mailto:hola@conhdehelena.com" className="text-muted-foreground hover:text-primary">hola@conhdehelena.com</a>
                                    </div>
                                </AnimatedItem>
                                <AnimatedItem>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-primary" />
                                        <a href="tel:+34123456789" className="text-muted-foreground hover:text-primary">+34 123 456 789</a>
                                    </div>
                                </AnimatedItem>
                                <AnimatedItem>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="w-6 h-6 text-primary" />
                                        <p className="text-muted-foreground">Madrid, España</p>
                                    </div>
                                </AnimatedItem>
                            </div>
                        </div>
                        <AnimatedItem>
                            <ContactForm />
                        </AnimatedItem>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
}
