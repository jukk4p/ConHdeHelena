'use client';

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

export function WhatsappWidget() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link 
                        href="https://wa.me/34678973988"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "fixed bottom-6 right-6 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg z-50 transition-all duration-500 ease-out animate-pulse-whatsapp",
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        )}
                        aria-label="Contactar por WhatsApp"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
                    </Link>
                </TooltipTrigger>
                <TooltipContent side="left" className="bg-foreground text-background border-primary">
                    <p>¡Escríbenos tu idea! 🎁</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
