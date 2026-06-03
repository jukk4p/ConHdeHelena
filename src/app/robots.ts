import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/admin",
                "/admin/*",
                "/auth",
                "/auth/*",
            ],
        },
        sitemap: "https://conhdehelena.es/sitemap.xml",
    };
}
