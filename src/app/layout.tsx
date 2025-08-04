import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'ConhdeHelena - Regalos Personalizados',
  description:
    'Creamos regalos personalizados y únicos para toda ocasión con diseño y tecnología Cricut.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Belleza&display=swap"
          rel="stylesheet"
        />
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
