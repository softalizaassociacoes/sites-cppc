import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { regions } from "@/content/regions";
import { allPosts } from "@/lib/posts";

const categoryBasePath: Record<string, string> = {
  noticias: "/noticias",
  revistas: "/revista",
  teses: "/teses",
  memorias: "/memorias",
  boletins: "/boletins",
  "biblia-conselheira": "/biblia-conselheira",
};

const staticRoutes = [
  "/",
  "/quem-somos",
  "/organizacao",
  "/diretoria",
  "/estatuto",
  "/conduta-etica",
  "/assessorias",
  "/membros-plenos",
  "/nucleos-regionais",
  "/nossos-membros",
  "/seja-um-associado",
  "/biblia-conselheira",
  "/revista",
  "/artigos",
  "/teses",
  "/livros",
  "/dvds",
  "/boletins",
  "/notas-de-falecimentos",
  "/memorias",
  "/eventos",
  "/documentos-norteadores",
  "/noticias",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));

  regions.forEach((r) => {
    entries.push({ url: `${siteConfig.url}/nucleos-regionais/${r.slug}`, lastModified: now });
  });

  allPosts.forEach((post) => {
    const base = post.categories.map((c) => categoryBasePath[c]).find(Boolean);
    if (!base) return;
    entries.push({ url: `${siteConfig.url}${base}/${post.slug}`, lastModified: post.date });
  });

  return entries;
}
