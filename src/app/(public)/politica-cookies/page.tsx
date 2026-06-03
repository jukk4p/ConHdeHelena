import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Cookies | ConhdeHelena",
    description: "Información transparente y cercana sobre el uso de cookies en ConhdeHelena.",
};

export default function PoliticaCookiesPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl font-bold mb-8 text-foreground border-b border-foreground/10 pb-4">
                    Nuestra Política de Cookies
                </h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground/85 space-y-8 leading-relaxed font-light">
                    <p className="text-lg italic text-foreground/75">
                        Al igual que en nuestro taller en Sevilla seleccionamos con mimo la madera y cada detalle para tus regalos, en nuestra web utilizamos herramientas digitales llamadas cookies para que tu experiencia de navegación sea igual de cuidada y personalizada.
                    </p>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">1. ¿Qué es una cookie en términos sencillos?</h2>
                        <p>
                            Pensá en una cookie como una pequeña &quot;nota mental&quot; o un post-it digital que nuestra web deja en tu navegador. Sirve simplemente para que el sitio recuerde que ya nos visitaste, mantenga tus preferencias seleccionadas (como guardar los artículos en tu carrito de compras) y nos ayude a entender cómo navegas por la tienda para que podamos hacerla más cómoda y rápida.
                        </p>
                        <p>
                            Queremos que te quedes tranquilo: ninguna de las cookies que usamos en ConhdeHelena almacena información personal sensible como tu nombre, DNI, dirección o datos bancarios.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">2. ¿Qué tipos de cookies usamos en el taller digital?</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li>
                                <strong>Cookies Técnicas (Imprescindibles):</strong> Son las que hacen posible que la web funcione. Sin ellas no podrías añadir productos a tu carrito, configurar tus detalles de compra o acceder de forma segura a las zonas de administración de la tienda.
                            </li>
                            <li>
                                <strong>Cookies de Personalización:</strong> Nos permiten recordar tus preferencias de visualización, facilitando que la web se adapte a tu pantalla de forma óptima cada vez que vuelves a visitarnos.
                            </li>
                            <li>
                                <strong>Cookies de Medición y Rendimiento:</strong> Nos ayudan a entender qué productos despiertan más interés o si alguna sección de la web va lenta. Son totalmente anónimas y nos sirven exclusivamente para mejorar nuestro catálogo y tu experiencia en la página.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">3. El tarro de nuestras cookies (Detalle)</h2>
                        <p>
                            Somos transparentes. Esta es la única cookie técnica propia que almacenamos directamente:
                        </p>
                        <div className="overflow-x-auto mt-4">
                            <table className="min-w-full divide-y divide-foreground/10 border border-foreground/10 text-sm">
                                <thead className="bg-foreground/5">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-serif font-bold text-foreground">Nombre</th>
                                        <th className="px-4 py-2 text-left font-serif font-bold text-foreground">Origen</th>
                                        <th className="px-4 py-2 text-left font-serif font-bold text-foreground">¿Para qué sirve?</th>
                                        <th className="px-4 py-2 text-left font-serif font-bold text-foreground">Duración</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-foreground/10">
                                    <tr>
                                        <td className="px-4 py-2 font-mono text-xs text-primary">cookie-consent</td>
                                        <td className="px-4 py-2">Propio</td>
                                        <td className="px-4 py-2 text-foreground/75">Recuerda si aceptaste o rechazaste el banner de cookies para no volverte a preguntar en cada página.</td>
                                        <td className="px-4 py-2">1 año</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">4. Vos tenés el control absoluto</h2>
                        <p>
                            Al igual que elegís cómo querés que personalicemos tus regalos, también tenés el control total sobre tus cookies. Podés desactivarlas, bloquearlas o borrarlas en cualquier momento modificando la configuración de tu navegador.
                        </p>
                        <p>
                            Tené en cuenta que si desactivas por completo las cookies necesarias, es posible que algunas funciones básicas de la tienda (como el carrito de compras) no se comporten como esperas. 
                        </p>
                        <p>
                            Si querés cambiar la configuración de tu navegador, te dejamos guías sencillas para los navegadores más habituales:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurar cookies en Google Chrome</a></li>
                            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurar cookies en Mozilla Firefox</a></li>
                            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurar cookies en Safari</a></li>
                            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Configurar cookies en Microsoft Edge</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
