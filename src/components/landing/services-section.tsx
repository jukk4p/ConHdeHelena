import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassWater, Brush, Baby, CircleDot, KeyRound, Scissors } from "lucide-react";
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
            <CardContent className="flex flex-col flex-grow items-center">
                <div className="w-full h-48 mb-4 rounded-md overflow-hidden relative">
                    <Image src={imageUrl} alt={title} width={300} height={200} className="object-cover w-full h-full" data-ai-hint={imageHint} />
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
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
                    <ServiceCard 
                        icon={<GlassWater className="w-10 h-10 text-primary" />} 
                        title="Copas Personalizadas" 
                        description="Celebra momentos especiales con copas de vino o cava grabadas con tu diseño." 
                        imageUrl="https://images.pexels.com/photos/327228/pexels-photo-327228.jpeg"
                        imageHint="engraved wine glass"
                    />
                    <ServiceCard 
                        icon={<Brush className="w-10 h-10 text-primary" />} 
                        title="Peines Personalizados" 
                        description="Un regalo original y práctico. Peines de madera grabados con nombres o frases." 
                        imageUrl="https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg"
                        imageHint="wooden comb"
                    />
                    <ServiceCard 
                        icon={<Baby className="w-10 h-10 text-primary" />} 
                        title="Pack Nacimiento" 
                        description="Kits de bienvenida para bebés con artículos personalizados y únicos." 
                        imageUrl="https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg"
                        imageHint="newborn gift set"
                    />
                    <ServiceCard 
                        icon={<CircleDot className="w-10 h-10 text-primary" />} 
                        title="Bolas de Navidad" 
                        description="Adorna tu árbol con bolas de Navidad personalizadas con nombres o fechas." 
                        imageUrl="https://images.pexels.com/photos/3229279/pexels-photo-3229279.jpeg"
                        imageHint="custom christmas ornament"
                    />
                    <ServiceCard 
                        icon={<KeyRound className="w-10 h-10 text-primary" />} 
                        title="Llaveros Personalizados" 
                        description="Lleva un recuerdo contigo. Llaveros de madera o acrílico con el diseño que elijas." 
                        imageUrl="https://images.pexels.com/photos/2078071/pexels-photo-2078071.jpeg"
                        imageHint="custom keychain"
                    />
                    <ServiceCard 
                        icon={<Scissors className="w-10 h-10 text-primary" />} 
                        title="Perchas Personalizadas" 
                        description="Un detalle elegante para bodas y eventos. Perchas grabadas para trajes y vestidos." 
                        imageUrl="https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg"
                        imageHint="custom clothes hanger"
                    />
                </div>
            </div>
        </section>
    );
}
