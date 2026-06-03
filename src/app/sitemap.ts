import { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://conhdehelena.es";

    // Rutas estáticas de la web
    const staticRoutes = [
        "",
        "/productos",
        "/personaliza",
        "/nosotros",
        "/contacto",
        "/aviso-legal",
        "/politica-privacidad",
        "/politica-cookies",
        "/condiciones-compra",
    ];

    const sitemapEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => {
        // Asignar prioridades lógicas
        let priority = 0.5;
        if (route === "") priority = 1.0;
        else if (route === "/productos") priority = 0.9;
        else if (["/personaliza", "/nosotros", "/contacto"].includes(route)) priority = 0.8;
        else if (route.startsWith("/legal") || ["/aviso-legal", "/politica-privacidad", "/politica-cookies", "/condiciones-compra"].includes(route)) priority = 0.3;

        return {
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: route === "" || route === "/productos" ? "daily" : "weekly",
            priority,
        };
    });

    // Intentar obtener rutas de productos dinámicos de Supabase
    try {
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );
        const { data: products } = await supabase
            .from("products")
            .select("id")
            .eq("is_active", true);

        if (products && products.length > 0) {
            products.forEach((product) => {
                sitemapEntries.push({
                    url: `${baseUrl}/productos/${product.id}`,
                    lastModified: new Date(),
                    changeFrequency: "weekly",
                    priority: 0.7,
                });
            });
        }
    } catch (error) {
        console.error("Error generating dynamic sitemap routes:", error);
    }

    return sitemapEntries;
}
