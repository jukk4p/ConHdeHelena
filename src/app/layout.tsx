import type { Metadata } from 'next'
import { Cormorant_Garamond, Poppins } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
  weight: ['400', '600', '700'],
})

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'ConhdeHelena: Regalos Personalizados Grabados | Sevilla',
  description:
    'Descubre regalos únicos y personalizados grabados con láser en Sevilla. Calidad y diseño para bodas, cumpleaños y eventos especiales. Transforma tus ideas en realidad.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`!scroll-smooth ${cormorant.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/Favicon.png" sizes="any" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}
