"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import LogoSVG from "./LogoSVG";
import { Menu, X, ArrowRight } from "lucide-react";
import { InstagramIcon, TikTokIcon, YoutubeIcon } from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Personaliza", href: "/personaliza" },
    { name: "Nosotros", href: "/nosotros" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
        <nav
            className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-2xl ${isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link
                        href="/"
                        className="flex items-center space-x-4 group relative z-50 shrink-0"
                    >
                        <div className="flex items-center">
                            {/* Static Logo Image */}
                            <motion.div 
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="relative z-10"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="ConhdeHelena Logo"
                                    width={60}
                                    height={60}
                                    className="hover:scale-110 transition-transform duration-300"
                                />
                            </motion.div>

                            {/* Brand Text with slide-in animation */}
                            <motion.span 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                                className="font-serif text-2xl font-normal tracking-tight text-[#b38f4d] ml-3"
                            >
                                ConhdeHelena
                            </motion.span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-sm font-semibold text-foreground/70 hover:text-primary transition-colors duration-300 group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="/contacto"
                            className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all duration-300 active:scale-95"
                        >
                            Hablemos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center relative z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-foreground hover:text-primary transition-all duration-300 focus:outline-none"
                            aria-label="Toggle Navigation"
                        >
                            <div className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5">
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        y: isMobileMenuOpen ? 8 : 0,
                                        width: isMobileMenuOpen ? "2rem" : "1.5rem"
                                    }}
                                    className="block h-0.5 bg-current rounded-full transition-all"
                                />
                                <motion.span
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                        x: isMobileMenuOpen ? 20 : 0
                                    }}
                                    className="block w-8 h-0.5 bg-current rounded-full transition-all"
                                />
                                <motion.span
                                    animate={{
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        y: isMobileMenuOpen ? -8 : 0,
                                        width: isMobileMenuOpen ? "2rem" : "1.5rem"
                                    }}
                                    className="block h-0.5 bg-current rounded-full transition-all"
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

        </nav>

        {/* Premium Mobile Nav Overlay — rendered in a Portal so it's truly viewport-fixed */}
        {mounted && createPortal(
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[9999] bg-background/95 backdrop-blur-xl md:hidden overflow-hidden flex flex-col"
                        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                    >
                        {/* Close / Logo row inside overlay */}
                        <div className="flex justify-between items-center px-6 pt-6 pb-4 shrink-0">
                            <Link href="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                                <Image
                                    src="/images/logo.png"
                                    alt="ConhdeHelena Logo"
                                    width={48}
                                    height={48}
                                />
                                <span className="font-serif text-xl font-normal tracking-tight text-[#b38f4d]">
                                    ConhdeHelena
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-foreground hover:text-primary transition-colors"
                                aria-label="Cerrar menú"
                            >
                                <X className="w-7 h-7" />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center px-12 space-y-12">
                            <nav className="space-y-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="group flex items-center space-x-4"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="text-4xl font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                                                {link.name}
                                            </span>
                                            <ArrowRight className="w-6 h-6 text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="space-y-8 pt-8 border-t border-foreground/10"
                            >
                                <Link
                                    href="/contacto"
                                    className="block text-center bg-primary text-white py-5 rounded-full text-xl font-bold shadow-xl shadow-primary/20"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Hablemos
                                </Link>

                                <div className="flex justify-center space-x-8 text-foreground/40">
                                    <a href="https://www.instagram.com/conh_dehelena" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <InstagramIcon className="w-7 h-7" />
                                    </a>
                                    <a href="https://www.tiktok.com/@conhdehelena2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <TikTokIcon className="w-7 h-7" />
                                    </a>
                                    <a href="https://www.youtube.com/@Conh_deHelena" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        <YoutubeIcon className="w-7 h-7" />
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>,
            document.body
        )}
        </>
    );
}
