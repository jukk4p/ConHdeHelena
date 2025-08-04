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
        <path d="M12.52.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-1.25a7.67 7.67 0 0 1-1.78-2.18c-.34-.68-.66-1.35-.97-2.03z"></path>
        <path d="M16.44 0a7.67 7.67 0 0 0-7.67 7.67v8.94a7.68 7.68 0 0 1-7.67-7.68c0-4.23 3.44-7.67 7.67-7.67v4.02a3.66 3.66 0 0 0-3.66 3.66c0 2.02 1.64 3.66 3.66 3.66s3.66-1.64 3.66-3.66V0z"></path>
    </svg>
);

const WhatsAppIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52s-.67-.766-.916-.966c-.247-.199-.494-.223-.67-.223-.173 0-.371.025-.57.025-.198 0-.52.075-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.075-.124-.273-.198-.57-.347z" fill="currentColor"></path>
        <path d="M21.529 11.233c0 5.48-4.444 9.923-9.924 9.923-1.65 0-3.21-.408-4.587-1.144L.698 22.302l2.38-6.194c-.81-1.458-1.278-3.14-1.278-4.875C1.8 5.753 6.244 1.31 11.605 1.31c5.48 0 9.924 4.444 9.924 9.923z" stroke="currentColor" fill="none"></path>
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

    