"use client";

import { Instagram, Youtube } from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SocialIcon = ({ href, target, rel, label, children }: { href: string, target?: string, rel?: string, label: string, children: React.ReactNode }) => (
    <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
        <Link href={href} target={target} rel={rel} aria-label={label} className="text-muted-foreground hover:text-primary">
            {children}
        </Link>
    </motion.div>
);

const TikTokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.25a7.67 7.67 0 0 1-1.78-2.18c-.34-.68-.66-1.35-.97-2.03-.01-1.11-.02-2.22-.03-3.33z"/>
        <path d="M16.44 0v.01c.01 3.3-1.56 6.38-4.29 8.24a7.68 7.68 0 0 1-9.15-4.22A7.67 7.67 0 0 1 7.67 0h4.01c.21 0 .42.01.63.02z"/>
        <path d="M7.67 12.32c0 4.23-3.44 7.67-7.67 7.67v-4.02a3.66 3.66 0 0 0 3.66-3.66c0-2.02-1.64-3.66-3.66-3.66H0V0h.01a7.68 7.68 0 0 1 7.66 7.67v4.65z"/>
    </svg>
);


const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M16.75 13.96c-.25-.13-1.48-.73-1.71-.81-.23-.08-.39-.13-.56.13-.16.26-.65.81-.79.98-.15.16-.29.19-.54.06s-1.06-.39-2.02-1.25c-.75-.67-1.25-1.49-1.41-1.74-.16-.25-.02-.38.11-.51.12-.11.26-.29.39-.43.13-.14.16-.25.25-.42.08-.17.04-.31-.02-.43s-.56-1.35-.76-1.84c-.2-.48-.41-.42-.56-.42-.14 0-.3 0-.46.01s-.39.06-.59.34c-.2.28-.78.76-.78 1.85s.8 2.15.91 2.32c.11.17 1.57 2.47 3.82 3.39.54.22 1.01.37 1.34.48.51.17 1.04.14 1.42.09.43-.06 1.48-.61 1.69-1.19.21-.58.21-1.08.15-1.19-.06-.12-.23-.19-.48-.31z"/>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    </svg>
);


export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="text-muted-foreground text-sm">Creando emociones, un regalo a la vez.</p>
          </div>
          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-primary">Sobre Nosotros</Link></li>
              <li><Link href="/servicios" className="text-sm text-muted-foreground hover:text-primary">Servicios</Link></li>
              <li><Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold font-headline text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terminos" className="text-sm text-muted-foreground hover:text-primary">Términos y Condiciones</Link></li>
              <li><Link href="/legal/privacidad" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold font-headline text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <SocialIcon href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" label="Instagram"><Instagram /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><Youtube /></SocialIcon>
              <SocialIcon href="#" label="TikTok"><TikTokIcon /></SocialIcon>
              <SocialIcon href="#" label="WhatsApp"><WhatsAppIcon /></SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ConhdeHelena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
