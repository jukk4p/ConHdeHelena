'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductCard({ product }: { product: any }) {

    // Schema.org for better SEO
    const productSchema = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.title,
        "image": `https://conhdehelena.es${product.imageUrl}`,
        "description": product.description,
        "brand": {
            "@type": "Brand",
            "name": "ConhdeHelena"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://conhdehelena.es/personaliza`,
            "priceCurrency": "EUR",
            "price": product.price.toString(),
            "availability": "https://schema.org/InStock"
        }
    };

    return (
        <div className="h-full">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Card className="text-center flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-soft-lg group">
                <div className="w-full aspect-square overflow-hidden relative">
                    <Image 
                        src={product.imageUrl} 
                        alt={product.title} 
                        fill 
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                        data-ai-hint={product.imageHint} 
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                        <span className="text-3xl font-bold text-white mb-4 font-headline">{product.price}€</span>
                        <Button asChild variant="secondary">
                            <Link href="/personaliza">Personalizar ahora</Link>
                        </Button>
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow items-center">
                    <p className="text-sm text-muted-foreground flex-grow">{product.description}</p>
                </CardContent>
            </Card>
        </div>
    )
}
