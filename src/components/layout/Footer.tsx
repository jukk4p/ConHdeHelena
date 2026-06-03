"use client";

import Link from "next/link";
import Image from "next/image";
import LogoSVG from "./LogoSVG";
import { Instagram, Mail, MapPin, Phone, Youtube, Music2 } from "lucide-react";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "./SocialIcons";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative z-10 bg-surface overflow-hidden pt-24 pb-12 mt-20 border-t border-foreground/5">
            {/* Decorative background gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">

                    {/* Brand */}
                    <div className="md:col-span-2 space-y-6 flex flex-col items-center md:items-start text-center md:text-left">
                        <Link href="/" className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                                <Image
                                    src="/images/logo_v2.png"
                                    alt="ConhdeHelena Logo"
                                    width={84}
                                    height={84}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            <span className="font-serif text-2xl font-normal tracking-tight text-[#b38f4d]">
                                ConhdeHelena
                            </span>
                        </Link>
                        <p className="text-base text-foreground/70 max-w-sm font-light leading-relaxed italic text-center md:text-left">
                            &quot;Transformamos momentos en recuerdos eternos, hechos con calma y corazón desde Sevilla.&quot;
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <h4 className="font-serif text-lg font-medium text-foreground">Explora</h4>
                        <ul className="flex flex-col items-center md:items-start space-y-3">
                            <li>
                                <Link href="/productos" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                                    Productos Destacados
                                </Link>
                            </li>
                            <li>
                                <Link href="/personaliza" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                                    Personaliza tu Idea
                                </Link>
                            </li>
                            <li>
                                <Link href="/nosotros" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                                    Sobre Nosotros
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                        <h4 className="font-serif text-lg font-medium text-foreground">Contacto</h4>
                        <ul className="flex flex-col items-center md:items-start space-y-3">
                            <li>
                                <a href="mailto:hola@conhdehelena.es" className="flex items-center space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                                    <Mail className="w-4 h-4" />
                                    <span>hola@conhdehelena.es</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/34678973988" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                                    <Phone className="w-4 h-4" />
                                    <span>+34 678 973 988</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center space-x-3 text-sm text-foreground/70">
                                    <MapPin className="w-4 h-4" />
                                    <span>Sevilla, España</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col space-y-6">
                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs text-foreground/60">
                        <Link href="/aviso-legal" className="hover:text-primary transition-colors">
                            Aviso Legal
                        </Link>
                        <Link href="/politica-privacidad" className="hover:text-primary transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="/politica-cookies" className="hover:text-primary transition-colors">
                            Política de Cookies
                        </Link>
                        <Link href="/condiciones-compra" className="hover:text-primary transition-colors">
                            Condiciones de Compra y Devoluciones
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-foreground/50">
                        <p>© {new Date().getFullYear()} ConhdeHelena. Todos los derechos reservados.</p>
                        <div className="flex space-x-6">
                            <a href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                                <InstagramIcon className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@conhdehelena2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="TikTok">
                                <TikTokIcon className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@Conh_deHelena" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="YouTube">
                                <YoutubeIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
