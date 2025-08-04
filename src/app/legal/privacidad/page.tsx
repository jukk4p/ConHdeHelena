import { AnimatedSection, AnimatedItem } from "@/components/animated-section";

export default function PrivacyPolicyPage() {
  return (
    <AnimatedSection className="py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <AnimatedItem>
          <h1 className="text-4xl font-bold tracking-tighter font-headline text-foreground mb-8">
            Política de Privacidad
          </h1>
        </AnimatedItem>
        <div className="space-y-6 text-muted-foreground">
            <AnimatedItem>
                <p>
                    En ConhdeHelena, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web (independientemente de dónde lo visites) y te informará sobre tus derechos de privacidad y cómo la ley te protege.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">1. Qué datos recopilamos</h2>
                <p>
                    Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos agrupado de la siguiente manera:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li><strong>Datos de Identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
                    <li><strong>Datos de Contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de correo electrónico y números de teléfono.</li>
                    <li><strong>Datos Técnicos:</strong> incluye la dirección del protocolo de Internet (IP), tus datos de inicio de sesión, el tipo y la versión del navegador, la configuración y ubicación de la zona horaria, los tipos y versiones de los complementos del navegador, el sistema operativo y la plataforma y otra tecnología en los dispositivos que utilizas para acceder a este sitio web.</li>
                </ul>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">2. Cómo usamos tus datos personales</h2>
                <p>
                    Usaremos tus datos personales solo cuando la ley nos lo permita. Generalmente, usaremos tus datos personales en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Para registrarte como nuevo cliente.</li>
                    <li>Para procesar y entregar tu pedido.</li>
                    <li>Para gestionar nuestra relación contigo, lo que incluirá notificarte sobre cambios en nuestros términos o política de privacidad.</li>
                    <li>Para administrar y proteger nuestro negocio y este sitio web (incluida la resolución de problemas, el análisis de datos, las pruebas, el mantenimiento del sistema, el soporte, la generación de informes y el alojamiento de datos).</li>
                </ul>
            </AnimatedItem>
            <AnimatedItem>
                <h2 className="text-2xl font-bold font-headline text-foreground mt-6 mb-4">3. Seguridad de los datos</h2>
                <p>
                    Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan accidentalmente, se usen o se acceda a ellos de forma no autorizada, se alteren o se divulguen.
                </p>
            </AnimatedItem>
            <AnimatedItem>
                 <p className="mt-8">
                    Esta es una política de privacidad de ejemplo. Deberás consultarla con un profesional legal para asegurarte de que cumple con todas las leyes y regulaciones aplicables.
                </p>
            </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
