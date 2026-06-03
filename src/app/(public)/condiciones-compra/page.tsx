import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Condiciones de Compra y Devoluciones | ConhdeHelena",
    description: "Conoce nuestras políticas de envío, métodos de pago, devoluciones y reembolsos de ConhdeHelena.",
};

export default function CondicionesCompraPage() {
    return (
        <div className="min-h-screen bg-background py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-serif text-4xl font-bold mb-8 text-foreground border-b border-foreground/10 pb-4">
                    Condiciones de Compra, Envíos y Devoluciones
                </h1>

                <div className="prose prose-stone dark:prose-invert max-w-none text-foreground/85 space-y-6 leading-relaxed font-light">
                    <p>
                        Las presentes condiciones regulan la compra de productos a través de este sitio web. Te recomendamos leerlas atentamente antes de realizar tu pedido.
                    </p>

                    <section className="space-y-3 mt-6">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">1. Métodos de Pago</h2>
                        <p>
                            Para garantizar la seguridad de tus transacciones y la mejor atención a tus ideas de personalización, aceptamos los siguientes métodos de pago:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Bizum:</strong> Pago rápido y seguro a través de tu teléfono móvil al número indicado al finalizar la orden.</li>
                            <li><strong>Transferencia Bancaria:</strong> Recibirás los datos de nuestra cuenta por correo electrónico o WhatsApp al confirmar el pedido.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">2. Políticas de Envío</h2>
                        <p>
                            Al tratarse de regalos personalizados hechos a mano en nuestro taller de Sevilla, los tiempos de procesamiento varían según la complejidad del pedido:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Tiempo de preparación:</strong> Generalmente entre 3 y 7 días hábiles (te confirmaremos el plazo exacto al concretar tu diseño).</li>
                            <li><strong>Plazos de entrega del transportista:</strong> De 24 a 48 horas una vez entregado a la agencia de transportes (para envíos dentro de España Peninsular).</li>
                            <li><strong>Gastos de envío:</strong> Se calcularán y detallarán al concretar la orden según el volumen y destino.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">3. Derecho de Desistimiento y Devoluciones</h2>
                        <p>
                            Queremos que estés completamente feliz con tu compra. No obstante, de acuerdo con la legislación vigente en España (Real Decreto Legislativo 1/2007 de Defensa de Consumidores), debés tener en cuenta las siguientes excepciones:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Productos Personalizados:</strong> El derecho de desistimiento <strong>no se aplica</strong> a productos confeccionados conforme a tus especificaciones o claramente personalizados (artículo 103.c de la Ley de Consumidores). Una vez iniciado el proceso de grabado o fabricación de tu diseño personalizado, no se admiten cancelaciones ni devoluciones salvo que presenten un defecto de fabricación o rotura durante el transporte.
                            </li>
                            <li>
                                <strong>Productos No Personalizados:</strong> Disponés de un plazo de <strong>14 días naturales</strong> desde la recepción del artículo para solicitar su devolución. En este caso, el producto debe estar en perfectas condiciones y en su embalaje original.
                            </li>
                            <li>
                                <strong>Costes de devolución:</strong> Los costes de envío asociados a la devolución de productos no personalizados correrán a cargo del cliente.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">4. Garantía ante Roturas de Transporte</h2>
                        <p>
                            Si tu paquete llega dañado o roto debido al transporte, debés notificárnoslo dentro de las **24 horas siguientes a la recepción** adjuntando fotos del estado del embalaje y del producto a **hola@conhdehelena.es** o a nuestro WhatsApp (+34 678 973 988) para que podamos gestionar una reposición sin coste alguno para vos a la mayor brevedad.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-serif text-2xl font-semibold text-foreground">5. Reembolsos</h2>
                        <p>
                            Una vez recibida y aprobada la devolución del producto no personalizado en nuestro taller, procederemos a tramitar el reembolso del importe correspondiente mediante el mismo método de pago utilizado para la compra, en un plazo máximo de 10 días laborables.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
