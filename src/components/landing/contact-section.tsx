import { ContactForm } from "@/components/contact-form";
import { Mail, MapPin, Phone } from "lucide-react";

// NOTE: By removing client-side animations, this component can be rendered on the server.
// The interactive <ContactForm /> is already a separate client component, which is a good pattern.
export function ContactSection() {
    return (
        <section
            id="contacto"
            className="w-full py-20 md:py-32 bg-accent/50"
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">¿Tienes una idea? Hablemos.</h2>
                        <p className="text-muted-foreground">
                            Nos encanta afrontar nuevos retos creativos. Rellena el formulario o contáctanos directamente. Si tienes un pedido especial en mente, no dudes en detallarlo.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <Mail className="w-6 h-6 text-primary" />
                                <a href="mailto:hola@conhdehelena.es" className="text-muted-foreground hover:text-primary">hola@conhdehelena.es</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-6 h-6 text-primary" />
                                <a href="tel:+34678973988" className="text-muted-foreground hover:text-primary">+34 678 973 988</a>
                            </div>
                            <div className="flex items-center gap-4">
                                <MapPin className="w-6 h-6 text-primary" />
                                <p className="text-muted-foreground">Sevilla, España</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
