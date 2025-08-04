import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

function BlogCard({ title, excerpt, imageUrl, imageHint }: { title: string, excerpt: string, imageUrl: string, imageHint: string }) {
    return (
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Image src={imageUrl} alt={title} width={400} height={300} className="w-full object-cover aspect-[4/3]" data-ai-hint={imageHint} />
            <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
                <Button variant="link" className="p-0">Leer más &rarr;</Button>
            </CardContent>
        </Card>
    )
}

export function BlogSection() {
    return (
        <section id="blog" className="w-full py-20 md:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Nuestro Blog Creativo</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        Ideas, tendencias y un vistazo a nuestro proceso creativo. Inspírate para tu próximo regalo.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-3 pt-12">
                    <BlogCard title="5 ideas de regalos personalizados para San Valentín" excerpt="Sorprende a esa persona especial con un regalo que hable desde el corazón. Te mostramos cómo..." imageUrl="https://placehold.co/400x300.png" imageHint="gift ideas" />
                    <BlogCard title="El proceso detrás de una camiseta personalizada" excerpt="Desde el diseño digital hasta el planchado final con nuestra Cricut. Descubre la magia." imageUrl="https://placehold.co/400x300.png" imageHint="crafting process" />
                    <BlogCard title="Tendencias en decoración de eventos para 2024" excerpt="Los vinilos y detalles personalizados son clave. Te contamos qué está de moda para tus fiestas." imageUrl="https://placehold.co/400x300.png" imageHint="decorating home" />
                </div>
            </div>
        </section>
    );
}
