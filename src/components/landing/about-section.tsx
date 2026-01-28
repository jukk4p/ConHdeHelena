import { AboutSectionCards } from "./about-section-cards";

// NOTE: By removing the main animation and extracting the interactive card grid
// into a separate Client Component (`AboutSectionCards`), the bulk of this section
// can be rendered on the server, improving performance.
export function AboutSection() {
    return (
        <section
            id="sobre-nosotros"
            className="w-full py-20 md:py-32"
        >
            <div className="container px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-headline">Nuestra Historia de Pasión y Precisión</h2>
                        <p className="text-muted-foreground">
                            ConhdeHelena nació de un sueño: crear conexiones emocionales a través de regalos que cuentan una historia. Combinamos la creatividad manual con la tecnología para dar vida a tus ideas.
                        </p>
                        <p className="text-muted-foreground">
                            Nuestra misión es simple: ofrecerte un producto único, de alta calidad y lleno de significado. Creemos que el regalo perfecto es aquel que se hace con el corazón y se perfecciona con la técnica.
                        </p>
                    </div>
                    {/* The interactive card grid is now in its own client component to isolate interactivity. */}
                    <AboutSectionCards />
                </div>
            </div>
        </section>
    );
}
