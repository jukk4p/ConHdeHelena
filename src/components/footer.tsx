import { Logo } from './logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const SocialIcon = ({ href, label, icon }: { href: string; label: string; icon: any }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="group"
  >
    <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
      <FontAwesomeIcon icon={icon} className="h-5 w-5" />
    </div>
  </a>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground-dark text-secondary/90">
      <div className="container max-w-7xl mx-auto px-8 lg:px-12">
        {/* Top Section - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 pt-16 pb-12">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <Logo onDark />
            <p className="font-great-vibes text-2xl text-primary -mt-2">Creando emociones, un regalo a la vez.</p>
            <div className="flex space-x-3 pt-1">
                <SocialIcon href="https://www.instagram.com/conh_dehelena" label="Instagram" icon={faInstagram} />
                <SocialIcon href="https://www.youtube.com/@Conh_deHelena" label="YouTube" icon={faYoutube} />
                <SocialIcon href="https://www.tiktok.com/@conhdehelena2" label="TikTok" icon={faTiktok} />
                <SocialIcon href="https://wa.me/34678973988" label="WhatsApp" icon={faWhatsapp} />
            </div>
             <p className="font-body text-[13px] leading-relaxed text-white/60 max-w-[300px] pt-2">
              Regalos personalizados y detalles únicos. Hechos con amor en Sevilla.
            </p>
          </div>

          {/* Col 2: Navegación */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-headline-alt font-bold text-lg mb-5 uppercase tracking-[2px] text-primary">Navegación</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-secondary/70 hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-sm text-secondary/70 hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/productos" className="text-sm text-secondary/70 hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href="/personaliza" className="text-sm text-secondary/70 hover:text-primary transition-colors">Personaliza</Link></li>
              <li><Link href="/contacto" className="text-sm text-secondary/70 hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-headline-alt font-bold text-lg mb-5 uppercase tracking-[2px] text-primary">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/legal/terminos" className="text-sm text-secondary/70 hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/legal/privacidad" className="text-sm text-secondary/70 hover:text-primary transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <h3 className="font-headline-alt font-bold text-lg mb-3 uppercase tracking-[2px] text-primary">Contacto</h3>
            <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <a href="mailto:hola@conhdehelena.es" className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4 text-primary/80 flex-shrink-0" />
                      <span>hola@conhdehelena.es</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+34678973988" className="flex items-center gap-3 text-secondary/70 hover:text-primary transition-colors">
                      <Phone className="w-4 h-4 text-primary/80 flex-shrink-0" />
                      <span>+34 678 973 988</span>
                  </a>
                </li>
                <li className="flex items-center gap-3 text-secondary/70">
                    <MapPin className="w-4 h-4 text-primary/80 flex-shrink-0" />
                    <span>Sevilla, España</span>
                </li>
            </ul>
            <Link 
              href="/contacto"
              className="group mt-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-label text-xs tracking-wider ring-offset-background transition-colors duration-300 ease-in-out focus-visible:outline-none border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              style={{ padding: '8px 16px' }}
            >
              Escríbenos <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 pb-8 border-t border-accent/30 text-center text-sm text-white/50">
          <p>&copy; {currentYear} ConhdeHelena · ✦ · Hecho con amor en Sevilla, España.</p>
        </div>
      </div>
    </footer>
  );
}
