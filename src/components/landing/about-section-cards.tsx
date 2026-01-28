import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Scissors, Users } from "lucide-react";

// NOTE: This component has been refactored to remove framer-motion.
// It is now a Server Component that uses CSS transitions for hover effects,
// which is more performant.
export function AboutSectionCards() {
    return (
        <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Heart className="w-12 h-12 text-primary mb-4" />
                </div>
                <h3 className="text-lg font-bold font-headline">Pasión</h3>
                <p className="text-sm text-muted-foreground">Amor en cada corte y diseño.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Sparkles className="w-12 h-12 text-primary mb-4" />
                </div>
                <h3 className="text-lg font-bold font-headline">Creatividad</h3>
                <p className="text-sm text-muted-foreground">Ideas frescas para regalos únicos.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Scissors className="w-12 h-12 text-primary mb-4" />
                </div>
                <h3 className="text-lg font-bold font-headline">Calidad</h3>
                <p className="text-sm text-muted-foreground">Acabados precisos con la mejor tecnología.</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div className="transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Users className="w-12 h-12 text-primary mb-4" />
                </div>
                <h3 className="text-lg font-bold font-headline">Cercanía</h3>
                <p className="text-sm text-muted-foreground">Trato personalizado para cada cliente.</p>
            </Card>
        </div>
    );
}
