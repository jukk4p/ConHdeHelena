import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Montserrat, Lato, Great_Vibes } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { WhatsappWidget } from '@/components/whatsapp-widget'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '700'],
})

const lato = Lato({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lato',
  weight: ['300', '400', '700'],
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
  weight: ['400'],
})

const color = '#C9956B'

export const viewport: Viewport = {
  themeColor: color,
}

export const metadata: Metadata = {
  title: 'Regalos Personalizados en Sevilla | ConhdeHelena',
  description:
    'Regalos personalizados y detalles únicos en Sevilla. Perchas de boda, bolas de Navidad, peines personalizados y mucho más. Diseño único para cada momento. ¡Pide tu presupuesto gratis!',
   openGraph: {
    title: 'Regalos Personalizados en Sevilla | ConhdeHelena',
    description: 'Regalos personalizados y detalles únicos en Sevilla. Diseño único para cada momento.',
    url: 'https://conhdehelena.es',
    siteName: 'ConhdeHelena',
    images: [
      {
        url: 'https://conhdehelena.es/Percha-personalizada-comunión.webp',
        width: 800,
        height: 600,
        alt: 'Perchas personalizadas para boda en Sevilla',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  icons: {
    icon: '/Favicon.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  "name": "ConhdeHelena",
  "description": "Regalos personalizados y detalles únicos en Sevilla",
  "url": "https://conhdehelena.es",
  "telephone": "+34678973988",
  "email": "hola@conhdehelena.es",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sevilla",
    "addressRegion": "Andalucía",
    "addressCountry": "ES"
  },
  "areaServed": ["Sevilla", "Andalucía", "España"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Regalos Personalizados",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Perchas Personalizadas para Boda",
          "offers": {"@type": "Offer", "price": "12", "priceCurrency": "EUR"}
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Bolas de Navidad Personalizadas",
          "offers": {"@type": "Offer", "price": "10", "priceCurrency": "EUR"}
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`!scroll-smooth ${cormorant.variable} ${playfair.variable} ${montserrat.variable} ${lato.variable} ${greatVibes.variable}`}>
       <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <WhatsappWidget />
        <Toaster />
      </body>
    </html>
  )
}
