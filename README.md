# ConhdeHelena - Regalos Personalizados

Este es el repositorio del sitio web de ConhdeHelena, una tienda online de regalos personalizados y únicos para toda ocasión.

## Descripción del Proyecto

El sitio web está construido con Next.js y React, utilizando Tailwind CSS para el estilo y ShadCN para los componentes de UI. Está diseñado para ser rápido, moderno y completamente responsive.

### Tecnologías Utilizadas

-   **Framework**: [Next.js](https://nextjs.org/)
-   **Librería UI**: [React](https://reactjs.org/)
-   **Estilos**: [Tailwind CSS](https://tailwindcss.com/)
-   **Componentes**: [ShadCN UI](https://ui.shadcn.com/)
-   **Animaciones**: Transiciones CSS para un rendimiento óptimo.
-   **Hosting**: Firebase App Hosting

## Estructura del Proyecto

-   `src/app/`: Contiene las rutas y páginas de la aplicación (usando el App Router de Next.js).
-   `src/components/`: Componentes reutilizables de la aplicación.
    -   `src/components/ui/`: Componentes base de ShadCN.
    -   `src/components/landing/`: Secciones principales que componen las páginas.
-   `src/lib/`: Utilidades y datos (como la lista de productos).
-   `public/`: Archivos estáticos como imágenes y logos.

## Cómo empezar

Para ejecutar este proyecto en un entorno local, sigue estos pasos:

1.  **Instala las dependencias:**
    ```bash
    npm install
    ```

2.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

    Abre [http://localhost:3000](http://localhost:3000) (o el puerto que se indique en la consola) en tu navegador para ver la aplicación.

## Optimización de Rendimiento

Este proyecto ha sido optimizado para un alto rendimiento, centrándose en:
-   **Server Components**: La mayoría de los componentes se renderizan en el servidor para minimizar el JavaScript enviado al cliente.
-   **Optimización de Fuentes**: Uso de `next/font` para cargar las fuentes de manera eficiente.
-   **Animaciones Ligeras**: Se utilizan transiciones CSS ligeras para las interacciones, evitando librerías pesadas de JavaScript para las animaciones de entrada.

¡Gracias por visitar ConhdeHelena!
