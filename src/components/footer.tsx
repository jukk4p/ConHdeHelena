import { Logo } from './logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ href, target, rel, label, children }: { href: string, target?: string, rel?: string, label: string, children: React.ReactNode }) => (
    <Link href={href} target={target} rel={rel} aria-label={label} className="text-muted-foreground hover:text-primary transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
        {children}
    </Link>
);

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4 items-start">
            <Logo />
            <p className="text-muted-foreground text-sm">Creando emociones, un regalo a la vez.</p>
          </div>
          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="/nosotros" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/productos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Productos</Link></li>
              <li><Link href="/personaliza" className="text-sm text-muted-foreground hover:text-primary transition-colors">Personaliza</Link></li>
              <li><Link href="/contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold font-headline text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terminos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="/legal/privacidad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidad</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold font-headline text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-6">
              <SocialIcon href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" label="Instagram"><FontAwesomeIcon icon={faInstagram} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="https://www.youtube.com/@Conh_deHelena" target="_blank" rel="noopener noreferrer" label="YouTube"><FontAwesomeIcon icon={faYoutube} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="https://www.tiktok.com/@conhdehelena2" target="_blank" rel="noopener noreferrer" label="TikTok"><FontAwesomeIcon icon={faTiktok} className="h-6 w-6" /></SocialIcon>
              <SocialIcon href="https://wa.me/34678973988" target="_blank" rel="noopener noreferrer" label="WhatsApp"><FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" /></SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ConhdeHelena. Todos los derechos reservados. Sevilla, España.</p>
        </div>
      </div>
    </footer>
  );
}
