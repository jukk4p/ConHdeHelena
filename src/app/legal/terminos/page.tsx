import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export default function TermsAndConditionsPage() {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedItem>
            <h1 className="text-4xl font-bold tracking-tighter font-headline text-foreground mb-8">
                Términos y Condiciones
            </h1>
        </AnimatedItem>
        <div className="space-y-6 text-muted-foreground">
            <AnimatedItem>
                <p>
                    Bienvenido/a a ConhdeHelena. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de ConhdeHelena. Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones. No continúes usando ConhdeHelena si no estás de acuerdo con todos los términos y condiciones establecidos en esta página.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">1. Pedidos y Pagos</h2>
                <p>
                    Todos los pedidos están sujetos a disponibilidad y a la aceptación del pedido por nuestra parte. Los precios de los productos se muestran en el sitio web e incluyen los impuestos aplicables. El pago debe realizarse en el momento del pedido a través de los métodos de pago disponibles.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">2. Productos Personalizados</h2>
                <p>
                    Para los productos personalizados, es tu responsabilidad proporcionar la información correcta (nombres, fechas, etc.). No nos hacemos responsables de los errores derivados de información incorrecta proporcionada por el cliente. Debido a la naturaleza de los productos personalizados, no se aceptan devoluciones a menos que el producto esté defectuoso o dañado a su llegada.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">3. Envíos y Entregas</h2>
                <p>
                    Los plazos de entrega son estimados y pueden variar. Haremos todo lo posible para entregar tu pedido dentro del plazo estimado, pero no nos hacemos responsables de los retrasos debidos a circunstancias imprevistas.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">4. Propiedad Intelectual</h2>
                <p>
                    El contenido de este sitio web, incluyendo textos, gráficos, logos e imágenes, es propiedad de ConhdeHelena y está protegido por las leyes de propiedad intelectual. No está permitida la reproducción o distribución sin nuestro permiso explícito.
                </p>
            </AnimatedItem>
             <AnimatedItem>
                 <p className="mt-8">
                    Estos son términos y condiciones de ejemplo. Deberás consultarlos con un profesional legal para asegurarte de que cumplen con todas las leyes y regulaciones aplicables.
                </p>
            </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
