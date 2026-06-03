import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Aviso Legal | ConhdeHelena",
    description: "Información legal sobre el titular del sitio web ConhdeHelena.",
};

export default function AvisoLegalPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl font-bold mb-8 text-foreground border-b border-foreground/10 pb-4">
                    Aviso Legal
                </h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground/85 space-y-6 leading-relaxed font-light">
                    <p>
                        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos del titular de este sitio web.
                    </p>

                    <section className="space-y-3 mt-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">1. Datos Identificativos</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Denominación Social:</strong> Iván González Ufano (Marca comercial: ConhdeHelena)</li>
                            <li><strong>NIF/CIF:</strong> 45809360F</li>
                            <li><strong>Domicilio Social:</strong> Sevilla, España</li>
                            <li><strong>Email de contacto:</strong> hola@conhdehelena.es</li>
                            <li><strong>Teléfono de contacto:</strong> +34 678 973 988</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">2. Propiedad Intelectual y Uso del Contenido</h2>
                        <p>
                            Iván González Ufano (ConhdeHelena) es propietario de todos los derechos de propiedad intelectual e industrial de este sitio web, así como de los elementos contenidos en el mismo (imágenes, textos, marcas, logotipos, combinaciones de colores, estructura y diseño).
                        </p>
                        <p>
                            Queda expresamente prohibida la reproducción, distribución y comunicación pública de la totalidad o parte de los contenidos de esta página web con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización previa y por escrito del titular.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">3. Exclusión de Responsabilidad</h2>
                        <p>
                            El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">4. Enlaces</h2>
                        <p>
                            En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">5. Legislación Aplicable y Jurisdicción</h2>
                        <p>
                            Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Sevilla.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
