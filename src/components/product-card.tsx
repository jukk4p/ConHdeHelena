'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Star } from 'lucide-react';

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
            <Card className="text-center flex flex-col h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-warm-lg group bg-background">
                <div className="w-full aspect-square overflow-hidden relative">
                    <Image 
                        src={product.imageUrl} 
                        alt={product.imageHint}
                        fill 
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                        <Badge variant="secondary" className='font-label uppercase tracking-widest bg-primary text-primary-foreground'>
                            Personalizable <Star className="w-3 h-3 ml-1 fill-current" />
                        </Badge>
                    </div>
                </div>
                <CardHeader>
                    <CardTitle className="font-headline-alt text-2xl text-foreground">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow items-center p-6 pt-0">
                    <p className="text-sm text-muted-foreground flex-grow mb-4">{product.description}</p>
                     <div className="w-10 h-px bg-accent my-2"></div>
                    <span className="font-great-vibes text-primary text-2xl my-2">desde {product.price}€</span>
                    <Button asChild variant="primary" className="w-full mt-2 uppercase font-label tracking-[2px]">
                        <Link href="/personaliza">Personalizar ahora</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
