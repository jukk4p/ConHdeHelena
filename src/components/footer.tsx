"use client";

import { Logo } from './logo';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ href, target, rel, label, children }: { href: string, target?: string, rel?: string, label: string, children: React.ReactNode }) => (
    <motion.div whileHover={{ scale: 1.2, y: -2 }} transition={{ duration: 0.2 }}>
        <Link href={href} target={target} rel={rel} aria-label={label} className="text-muted-foreground hover:text-primary">
            {children}
        </Link>
    </motion.div>
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
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-primary">Productos</Link></li>
              <li><Link href="/galeria" className="text-sm text-muted-foreground hover:text-primary">Galería</Link></li>
              <li><Link href="/personaliza" className="text-sm text-muted-foreground hover:text-primary">Personaliza</Link></li>
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
              <SocialIcon href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" label="Instagram"><FontAwesomeIcon icon={faInstagram} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="#" label="YouTube"><FontAwesomeIcon icon={faYoutube} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="#" label="TikTok"><FontAwesomeIcon icon={faTiktok} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="#" label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" /></SocialIcon>
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
