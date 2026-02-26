"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Sobre Nosotros' },
  { href: '/productos', label: 'Productos' },
  { href: '/contacto', label: 'Contacto' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-md" : "bg-transparent",
    )}>
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Logo isScrolled={hasScrolled} />
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-body tracking-[1.5px] uppercase transition-colors hover:text-primary",
                hasScrolled ? 'text-foreground' : 'text-background/80 hover:text-background',
                pathname === link.href && (hasScrolled ? 'text-foreground' : 'text-background')
              )}
            >
              {link.label}
               {pathname === link.href && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-all"></span>}
            </Link>
          ))}
          <Button asChild variant="primary" size="sm">
            <Link href="/personaliza">Personaliza</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(hasScrolled ? 'text-foreground' : 'text-background', "hover:bg-transparent")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 bg-background">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                   <Logo isScrolled={true} />
                   <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                     <X className="h-6 w-6" />
                     <span className="sr-only">Cerrar menú</span>
                   </Button>
                </div>
                <nav className="flex flex-col gap-6 p-6 text-lg">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="font-medium text-foreground transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="primary" className="mt-4">
                     <Link href="/personaliza">Personaliza</Link>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
