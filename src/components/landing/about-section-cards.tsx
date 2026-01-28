import { Card } from "@/components/ui/card";
import { Heart, Sparkles, Scissors, Users } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
    <Card className="flex flex-col items-center justify-center p-6 text-center h-full transition-all duration-300 ease-in-out hover:shadow-soft hover:-translate-y-1">
        <div className="mb-4 text-primary bg-primary/10 rounded-full p-3">
            <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold font-headline">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </Card>
);

export function AboutSectionCards() {
    return (
        <div className="grid grid-cols-2 gap-4 md:gap-6">
            <ValueCard icon={Heart} title="Pasión" description="Amor en cada corte y diseño." />
            <ValueCard icon={Sparkles} title="Creatividad" description="Ideas frescas para regalos únicos." />
            <ValueCard icon={Scissors} title="Calidad" description="Acabados precisos con la mejor tecnología." />
            <ValueCard icon={Users} title="Cercanía" description="Trato personalizado para cada cliente." />
        </div>
    );
}
