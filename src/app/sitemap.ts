import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { regions } from "@/content/regions";
import { allPosts } from "@/lib/posts";

/** Categoria do WordPress -> seção que tem rota de detalhe no site novo. */
const categoryBasePath: Record<string, string> = {
  noticias: "/noticias",
  revistas: "/revista",
  teses: "/teses",
  memorias: "/memorias",
  boletins: "/boletins",
  "biblia-conselheira": "/biblia-conselheira",
};

/**
 * Páginas reais do site. Ficam de fora, de propósito, as que estão publicadas
 * como "Em breve", sem conteúdo (as mesmas marcadas com `hidden: true` em
 * pageMetadata, que respondem noindex): /galeria-de-homenageados,
 * /documentos-norteadores e /notas-de-falecimentos. Quando ganharem conteúdo,
 * acrescentar aqui e tirar o `hidden`.
 *
 * Páginas do WordPress que deixaram de existir (certificados, em-breve,
 * proximos-eventos, eventos-anteriores) também não entram: só têm redirect 301.
 */
const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/quem-somos", priority: 0.8, changeFrequency: "yearly" },
  { path: "/organizacao", priority: 0.6, changeFrequency: "yearly" },
  { path: "/diretoria", priority: 0.6, changeFrequency: "yearly" },
  { path: "/estatuto", priority: 0.5, changeFrequency: "yearly" },
  { path: "/conduta-etica", priority: 0.5, changeFrequency: "yearly" },
  { path: "/assessorias", priority: 0.5, changeFrequency: "yearly" },
  { path: "/membros-plenos", priority: 0.5, changeFrequency: "yearly" },
  { path: "/nucleos-regionais", priority: 0.7, changeFrequency: "yearly" },
  { path: "/nossos-membros", priority: 0.7, changeFrequency: "weekly" },
  { path: "/seja-um-associado", priority: 0.9, changeFrequency: "monthly" },
  { path: "/biblia-conselheira", priority: 0.6, changeFrequency: "monthly" },
  { path: "/revista", priority: 0.7, changeFrequency: "monthly" },
  { path: "/artigos", priority: 0.5, changeFrequency: "monthly" },
  { path: "/teses", priority: 0.6, changeFrequency: "monthly" },
  { path: "/livros", priority: 0.6, changeFrequency: "monthly" },
  { path: "/dvds", priority: 0.4, changeFrequency: "yearly" },
  { path: "/boletins", priority: 0.5, changeFrequency: "monthly" },
  { path: "/memorias", priority: 0.5, changeFrequency: "monthly" },
  { path: "/eventos", priority: 0.7, changeFrequency: "monthly" },
  { path: "/noticias", priority: 0.9, changeFrequency: "weekly" },
  { path: "/contato", priority: 0.6, changeFrequency: "yearly" },
];

/** lastmod das listagens: a data do item mais recente que elas mostram. */
function latestDateOf(categories: string[]): Date | undefined {
  const dates = allPosts
    .filter((p) => p.categories.some((c) => categories.includes(c)))
    .map((p) => p.date)
    .sort();
  const last = dates[dates.length - 1];
  return last ? new Date(last) : undefined;
}

const listingLastMod: Record<string, Date | undefined> = {
  "/": latestDateOf(["noticias"]),
  "/noticias": latestDateOf(["noticias"]),
  "/revista": latestDateOf(["revistas"]),
  "/teses": latestDateOf(["teses"]),
  "/memorias": latestDateOf(["memorias"]),
  "/boletins": latestDateOf(["boletins"]),
  "/biblia-conselheira": latestDateOf(["biblia-conselheira"]),
};

/** Data do último commit de conteúdo estático; evita lastmod "agora" em toda página. */
const staticLastMod = new Date("2026-11-03T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${siteUrl}${path === "/" ? "" : path}`,
      lastModified: listingLastMod[path] ?? staticLastMod,
      changeFrequency,
      priority,
    }),
  );

  // Regiões sem núcleos cadastrados mostram apenas "Em breve": ficam de fora,
  // como as demais páginas vazias.
  regions.forEach((r) => {
    if (r.nucleos.length === 0) return;
    entries.push({
      url: `${siteUrl}/nucleos-regionais/${r.slug}`,
      lastModified: staticLastMod,
      changeFrequency: "yearly",
      priority: 0.5,
    });
  });

  allPosts.forEach((post) => {
    const base = post.categories.map((c) => categoryBasePath[c]).find(Boolean);
    // Posts sem rota de detalhe (hoje só a categoria "livros", que aparece
    // dentro de /livros) ficam de fora para o sitemap não apontar para 404.
    if (!base) return;
    entries.push({
      url: `${siteUrl}${base}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly",
      priority: post.categories.includes("noticias") ? 0.7 : 0.6,
    });
  });

  return entries;
}
