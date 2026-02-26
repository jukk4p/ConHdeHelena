import { Logo } from './logo';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SocialIcon = ({ href, target, rel, label, children }: { href: string, target?: string, rel?: string, label: string, children: React.ReactNode }) => (
    <Link href={href} target={target} rel={rel} aria-label={label} className="text-secondary/70 hover:text-primary transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
        {children}
    </Link>
);

export function Footer() {
  return (
    <footer className="bg-foreground-dark text-secondary/90">
      <div className="container max-w-7xl pt-16 pb-8">
        <div className="flex flex-col items-center text-center mb-12">
            <Logo onDark={true} />
            <p className="font-great-vibes text-2xl text-primary mt-4">Creando emociones, un regalo a la vez.</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10 md:gap-8 text-center md:text-left">
          
          <div className="flex flex-col sm:flex-row gap-10 md:gap-24">
            <div className="flex flex-col gap-4 items-center md:items-start">
              <h3 className="font-headline-alt font-bold text-lg mb-2 uppercase tracking-[2px] text-secondary/80">Navegación</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-secondary/70 hover:text-primary transition-colors">Inicio</Link></li>
                <li><Link href="/nosotros" className="text-sm text-secondary/70 hover:text-primary transition-colors">Sobre Nosotros</Link></li>
                <li><Link href="/productos" className="text-sm text-secondary/70 hover:text-primary transition-colors">Productos</Link></li>
                <li><Link href="/contacto" className="text-sm text-secondary/70 hover:text-primary transition-colors">Contacto</Link></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-headline-alt font-bold text-lg mb-2 uppercase tracking-[2px] text-secondary/80">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/legal/terminos" className="text-sm text-secondary/70 hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                <li><Link href="/legal/privacidad" className="text-sm text-secondary/70 hover:text-primary transition-colors">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="font-headline-alt font-bold text-lg mb-4 uppercase tracking-[2px] text-secondary/80">Síguenos</h3>
            <div className="flex space-x-6">
                <SocialIcon href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" label="Instagram">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                        <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
                    </div>
                </SocialIcon>
                <SocialIcon href="https://www.youtube.com/@Conh_deHelena" target="_blank" rel="noopener noreferrer" label="YouTube">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                        <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
                    </div>
                </SocialIcon>
                <SocialIcon href="https://www.tiktok.com/@conhdehelena2" target="_blank" rel="noopener noreferrer" label="TikTok">
                     <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                        <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
                    </div>
                </SocialIcon>
                <SocialIcon href="https://wa.me/34678973988" target="_blank" rel="noopener noreferrer" label="WhatsApp">
                     <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors">
                        <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
                    </div>
                </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-accent/20 text-center text-sm text-secondary/50">
          <p>&copy; {new Date().getFullYear()} ConhdeHelena · ✦ · Hecho con amor en Sevilla, España.</p>
        </div>
      </div>
    </footer>
  );
}
