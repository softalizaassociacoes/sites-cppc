import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Mesmo no endereço provisório o rastreamento fica liberado de propósito:
    // quem diz "noindex" é o header X-Robots-Tag (next.config.ts) e a meta
    // robots, e o Google só enxerga isso se puder buscar a página.
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
