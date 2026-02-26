'use client';

import { AnimatedSection, AnimatedItem } from "@/components/animated-section";
import CountUp from "react-countup";
import { Gift, Smile, Star } from "lucide-react";
import { Ornament } from "../ornament";

const stats = [
    {
        icon: Gift,
        end: 500,
        suffix: "+",
        label: "Regalos únicos entregados"
    },
    {
        icon: Smile,
        end: 100,
        suffix: "%",
        label: "Clientes que repiten"
    },
    {
        icon: Star,
        end: 4.9,
        suffix: "★",
        decimals: 1,
        label: "Valoración media"
    }
]

export function StatsSection() {
    return (
        <section id="stats" className="w-full py-20 md:py-32 bg-foreground-dark text-background">
            <div className="container px-4 md:px-6">
                <AnimatedSection className="grid md:grid-cols-3 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <AnimatedItem key={index} className="flex flex-col items-center gap-2 relative">
                           <stat.icon className="w-10 h-10 text-primary mb-2" />
                           <span className="text-5xl font-bold font-headline text-accent">
                            <CountUp end={stat.end} duration={3} decimals={stat.decimals ?? 0} enableScrollSpy scrollSpyDelay={300} />
                            {stat.suffix}
                           </span>
                           <p className="text-background/70 mt-2 font-body">{stat.label}</p>
                           {index < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-accent/20"></div>}
                        </AnimatedItem>
                    ))}
                </AnimatedSection>
                 <AnimatedItem el="div" className="text-center mt-12">
                    <p className="font-great-vibes text-2xl text-primary">Cada pieza, una historia.</p>
                </AnimatedItem>
            </div>
        </section>
    );
}
