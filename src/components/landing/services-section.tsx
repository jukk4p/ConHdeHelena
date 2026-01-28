import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

// NOTE: Converted to a Server Component by removing all client-side animation logic.
// The component and function names have also been corrected for clarity.
const services = [
    {
        title: "Bolas de Navidad",
        description: "Adorna tu árbol con bolas de Navidad personalizadas con nombres o fechas.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "custom christmas ornament"
    },
    {
        title: "Pack Nacimiento",
        description: "Kits de bienvenida para bebés con artículos personalizados y únicos.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "newborn gift set"
    },
    {
        title: "Peines Personalizados",
        description: "Un regalo original y práctico. Peines de madera grabados con nombres o frases.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "wooden comb"
    },
    {
        title: "Copas Personalizadas",
        description: "Celebra momentos especiales con copas de vino o cava grabadas con tu diseño.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "engraved wine glass"
    },
    {
        title: "Llaveros Personalizados",
        description: "Lleva un recuerdo contigo. Llaveros de madera o acrílico con el diseño que elijas.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "custom keychain"
    },
    {
        title: "Perchas Personalizadas",
        description: "Un detalle elegante para bodas y eventos. Perchas grabadas para trajes y vestidos.",
        imageUrl: "https://placehold.co/300x200.png",
        imageHint: "custom clothes hanger"
    }
];

function ServiceCard({ title, description, imageUrl, imageHint }: { title: string, description: string, imageUrl: string, imageHint: string }) {
    return (
        <div className="h-full transition-transform duration-300 hover:-translate-y-1">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardHeader>
                    <CardTitle className="font-headline">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow items-center">
                    <div className="w-full h-48 mb-4 rounded-md overflow-hidden relative">
                        <Image src={imageUrl} alt={title} width={300} height={200} className="object-cover w-full h-full" data-ai-hint={imageHint} />
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow">{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export function ServicesSection() {
    return (
        <section id="servicios" className="w-full pb-20 md:pb-32">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Nuestros Servicios</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Ofrecemos una amplia gama de productos que podemos personalizar a tu gusto. Aquí tienes algunos ejemplos:
                    </p>
                </div>
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard 
                            key={service.title}
                            title={service.title} 
                            description={service.description} 
                            imageUrl={service.imageUrl}
                            imageHint={service.imageHint}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
