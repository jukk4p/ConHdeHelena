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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M12 12a4 4 0 1 0 4 4V8a8 8 0 1 0-8 8" />
    </svg>
);


const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
