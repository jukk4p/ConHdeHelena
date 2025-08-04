import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CupSoda, Shirt, Sticker, Mail } from "lucide-react";
import Image from "next/image";

function ServiceCard({ icon, title, description, imageUrl, imageHint }: { icon: React.ReactNode, title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <Card className="text-center hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader>
                <div className="mx-auto bg-primary/20 rounded-full p-4 w-fit mb-4">
                    {icon}
                </div>
                <CardTitle className="font-headline">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
                <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                    <Image src={imageUrl} alt={title} layout="fill" className="object-cover" data-ai-hint={imageHint} />
                </div>
                <p className="text-sm text-muted-foreground flex-grow">{description}</p>
            </CardContent>
        </Card>
    )
}

export function ServicesSection() {
    return (
        <section id="servicios" className="w-full py-20 md:py-32 bg-accent/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Servicios de Personalización</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Desde un detalle para un amigo hasta la decoración de tu evento. La tecnología nos permite ofrecer una amplia gama de productos con una precisión increíble.
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                    <ServiceCard 
                        icon={<CupSoda className="w-10 h-10 text-primary" />} 
                        title="Tazas y Vasos" 
                        description="Personaliza tazas, termos y vasos para cualquier ocasión." 
                        imageUrl="https://images.unsplash.com/photo-1594225439768-3c35b5a26514?q=80&w=870&auto=format&fit=crop" 
                        imageHint="custom mug" 
                    />
                    <ServiceCard 
                        icon={<Shirt className="w-10 h-10 text-primary" />} 
                        title="Textiles" 
                        description="Camisetas, sudaderas y bolsas de tela con tu diseño favorito." 
                        imageUrl="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=772&auto=format&fit=crop" 
                        imageHint="custom tshirt" 
                    />
                    <ServiceCard 
                        icon={<Mail className="w-10 h-10 text-primary" />} 
                        title="Invitaciones" 
                        description="Diseños únicos para bodas, bautizos y eventos especiales." 
                        imageUrl="https://images.unsplash.com/photo-1535406203690-8e16c4a56a4b?q=80&w=870&auto=format&fit=crop" 
                        imageHint="wedding invitation" 
                    />
                    <ServiceCard 
                        icon={<Sticker className="w-10 h-10 text-primary" />} 
                        title="Vinilos Decorativos" 
                        description="Decora paredes, portátiles y más con vinilos personalizados." 
                        imageUrl="https://images.unsplash.com/photo-1543974352-4283b58742a9?q=80&w=774&auto=format&fit=crop" 
                        imageHint="vinyl decal" 
                    />
                </div>
            </div>
        </section>
    );
}
