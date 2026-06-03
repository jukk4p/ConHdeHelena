import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Política de Privacidad | ConhdeHelena",
    description: "Conoce cómo tratamos tus datos personales en ConhdeHelena bajo las regulaciones RGPD.",
};

export default function PoliticaPrivacidadPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl font-bold mb-8 text-foreground border-b border-foreground/10 pb-4">
                    Política de Privacidad
                </h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground/85 space-y-6 leading-relaxed font-light">
                    <p>
                        A través de este sitio web no se recaban datos de carácter personal de los usuarios sin su conocimiento, ni se ceden a terceros. Nos tomamos muy en serio la confidencialidad de tu información personal bajo el Reglamento General de Protección de Datos (RGPD).
                    </p>

                    <section className="space-y-3 mt-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">1. Responsable del Tratamiento</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Responsable:</strong> Iván González Ufano</li>
                            <li><strong>Domicilio:</strong> Sevilla, España</li>
                            <li><strong>Contacto:</strong> hola@conhdehelena.es</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">2. Finalidad del Tratamiento de Datos</h2>
                        <p>
                            En ConhdeHelena tratamos tus datos personales únicamente para las siguientes finalidades:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Gestión de Pedidos:</strong> Procesar las solicitudes de compra de regalos personalizados y coordinar el envío de tus productos.</li>
                            <li><strong>Atención al Cliente:</strong> Responder a los mensajes recibidos a través del formulario de contacto o vía WhatsApp.</li>
                            <li><strong>Facturación y Obligaciones Fiscales:</strong> Cumplir con las normativas contables y tributarias de España.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">3. Legitimación del Tratamiento</h2>
                        <p>
                            La base legal para el tratamiento de tus datos es:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>La ejecución del contrato de compra o servicio solicitado por el usuario.</li>
                            <li>El consentimiento explícito otorgado en el formulario de contacto al enviarnos tus dudas.</li>
                            <li>El cumplimiento de obligaciones legales de facturación.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">4. Conservación de los Datos</h2>
                        <p>
                            Los datos de carácter personal facilitados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad, además de los períodos establecidos por la legislación tributaria aplicable.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">5. Cesión de Datos a Terceros</h2>
                        <p>
                            Tus datos no se cederán a terceros, salvo obligación legal. Sin embargo, para poder entregar tus pedidos, compartiremos los datos estrictamente necesarios con las empresas de mensajería encargadas del transporte.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">6. Tus Derechos (Derechos ARCO)</h2>
                        <p>
                            Cualquier persona tiene derecho a obtener confirmación sobre si en ConhdeHelena estamos tratando datos personales que les conciernan o no. Las personas interesadas tienen derecho a:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Acceder a sus datos personales.</li>
                            <li>Solicitar la rectificación de los datos inexactos.</li>
                            <li>Solicitar su supresión (derecho al olvido) cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
                            <li>Solicitar la limitación u oposición a su tratamiento.</li>
                        </ul>
                        <p>
                            Para ejercer cualquiera de estos derechos, podés escribirnos adjuntando copia de tu DNI o documento equivalente al email <strong>hola@conhdehelena.es</strong>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
