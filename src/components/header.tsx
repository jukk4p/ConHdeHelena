"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-nosotros', label: 'Sobre Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/contacto', label: 'Contacto' },
];

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
    <Link href={href} className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
      {label}
    </Link>
  </motion.div>
);


export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
              <SheetDescription className="sr-only">
                Navegación principal del sitio. Selecciona una opción para ir a la página correspondiente.
              </SheetDescription>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo />
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                     <X className="h-6 w-6" />
                     <span className="sr-only">Cerrar menú</span>
                   </Button>
                </div>
                <nav className="flex flex-col gap-4 p-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
