import type { Metadata } from 'next'
import { Alegreya, Belleza } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'

// NOTE: Optimized font loading with next/font.
// This improves performance by self-hosting the fonts and eliminating network requests.
const belleza = Belleza({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-belleza',
  weight: '400',
})

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'ConhdeHelena - Regalos Personalizados',
  description:
    'Creamos regalos personalizados y únicos para toda ocasión.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`!scroll-smooth ${belleza.variable} ${alegreya.variable}`}>
      <head />
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
