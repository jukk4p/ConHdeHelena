"use client";

import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Scissors, Users } from "lucide-react";
import { motion } from "framer-motion";

// NOTE: This wrapper contains the hover animation logic.
// Keeping it in a dedicated client component isolates the client-side JS needed for this interactivity.
const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        {children}
    </motion.div>
);

export function AboutSectionCards() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <IconWrapper><Heart className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                <h3 className="text-lg font-bold font-headline">Pasión</h3>
                <p className="text-sm text-muted-foreground">Amor en cada corte y diseño.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <IconWrapper><Sparkles className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                <h3 className="text-lg font-bold font-headline">Creatividad</h3>
                <p className="text-sm text-muted-foreground">Ideas frescas para regalos únicos.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <IconWrapper><Scissors className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                <h3 className="text-lg font-bold font-headline">Calidad</h3>
                <p className="text-sm text-muted-foreground">Acabados precisos con la mejor tecnología.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                    <IconWrapper><Users className="w-12 h-12 text-primary mb-4" /></IconWrapper>
                <h3 className="text-lg font-bold font-headline">Cercanía</h3>
                <p className="text-sm text-muted-foreground">Trato personalizado para cada cliente.</p>
            </Card>
        </div>
    );
}
