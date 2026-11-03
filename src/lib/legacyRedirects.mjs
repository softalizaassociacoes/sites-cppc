// Mapa de redirects 301 do site WordPress antigo (cppc.org.br) para as rotas do site novo.
// Gerado a partir da API do WordPress (campo `link` de cada post e página) em 03/11/2026.
// As entradas de post são derivadas de src/content/posts.json, então novos posts entram sozinhos.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const posts = JSON.parse(readFileSync(path.join(dir, "../content/posts.json"), "utf8"));

/**
 * Mídia do WordPress que mudou de caminho: miniaturas (-LARGxALT) geradas pelo
 * WordPress cujo arquivo original está no site novo, e o PDF do estatuto, que
 * trocou de arquivo. Gerado da API de mídia do WordPress em 03/11/2026.
 */
const mediaRedirects = JSON.parse(
  readFileSync(path.join(dir, "../content/legacy-media-redirects.json"), "utf8"),
);

/** Categoria do WordPress -> seção do site novo. */
const categoryBase = {
  noticias: "/noticias",
  revistas: "/revista",
  teses: "/teses",
  memorias: "/memorias",
  boletins: "/boletins",
  "biblia-conselheira": "/biblia-conselheira",
};

/** Categorias que viraram página de listagem sem rota de detalhe. */
const categoryListingOnly = {
  livros: "/livros",
};

/** Páginas do WordPress -> rota do site novo. */
const pageMap = {
  home: "/",
  "quem-somos": "/quem-somos",
  organizacao: "/organizacao",
  diretoria: "/diretoria",
  estatuto: "/estatuto",
  "conduta-etica": "/conduta-etica",
  assessorias: "/assessorias",
  "membros-plenos": "/membros-plenos",
  "nucleos-regionais": "/nucleos-regionais",
  norte: "/nucleos-regionais/norte",
  nordeste: "/nucleos-regionais/nordeste",
  "centro-oeste": "/nucleos-regionais/centro-oeste",
  sudeste: "/nucleos-regionais/sudeste",
  "sao-paulo": "/nucleos-regionais/sao-paulo",
  sul: "/nucleos-regionais/sul",
  "nossos-membros": "/nossos-membros",
  "seja-um-associado": "/seja-um-associado",
  "biblia-conselheira": "/biblia-conselheira",
  revista: "/revista",
  artigos: "/artigos",
  teses: "/teses",
  livros: "/livros",
  dvds: "/dvds",
  boletins: "/boletins",
  "notas-de-falecimentos": "/notas-de-falecimentos",
  memorias: "/memorias",
  eventos: "/eventos",
  "documentos-norteadores": "/documentos-norteadores",
  contato: "/contato",
  // Páginas que existiam no WordPress e não têm equivalente no site novo.
  // "certificados", "em-breve": páginas vazias (só o título) no WordPress.
  certificados: "/",
  "em-breve": "/",
  // "proximos-eventos" e "eventos-anteriores": conteúdo remanescente de outra
  // associação (SBCS / Congresso de Ciência do Solo), não migrado.
  "proximos-eventos": "/eventos",
  "eventos-anteriores": "/eventos",
  "galeria-de-homenageados": "/galeria-de-homenageados",
};

/** Arquivos de categoria do WordPress -> listagem do site novo. */
const categoryArchive = {
  noticias: "/noticias",
  revistas: "/revista",
  teses: "/teses",
  memorias: "/memorias",
  boletins: "/boletins",
  "biblia-conselheira": "/biblia-conselheira",
  livros: "/livros",
  artigos: "/artigos",
  "sem-categoria-pt": "/noticias",
  uncategorized: "/noticias",
};

/** URLs avulsas encontradas em links internos do conteúdo migrado (loja WooCommerce). */
const oneOff = {
  "/produto/revista-psicoteo-edicao-no-62": "/revista/revista-psicoteo-edicao-no-62",
  "/categoria-produto/congresso": "/memorias/congresso-nacional-01-a-04-de-maio-de-2003",
};

function destinationForPost(post) {
  for (const c of post.categories) {
    if (categoryBase[c]) return `${categoryBase[c]}/${post.slug}`;
  }
  for (const c of post.categories) {
    if (categoryListingOnly[c]) return categoryListingOnly[c];
  }
  return "/noticias";
}

/** Caminho antigo de um post: /AAAA/MM/DD/slug */
export function legacyPostPath(post) {
  const d = post.date.slice(0, 10).split("-");
  return `/${d[0]}/${d[1]}/${d[2]}/${post.slug}`;
}

/** Lista plana { source, destination } — uma entrada por URL antiga conhecida. */
export function legacyRedirectPairs() {
  const pairs = [];
  const push = (source, destination) => pairs.push({ source, destination });

  // 1. Posts: /AAAA/MM/DD/slug  ->  /secao/slug
  for (const post of posts) {
    const dest = destinationForPost(post);
    push(legacyPostPath(post), dest);
    push(`${legacyPostPath(post)}/feed`, dest);
  }

  // 2. Páginas: /slug -> rota nova
  for (const [slug, dest] of Object.entries(pageMap)) {
    if (`/${slug}` === dest) continue; // mesma URL, nada a redirecionar
    push(`/${slug}`, dest);
  }

  // 3. Arquivos de categoria e sua paginação
  for (const [slug, dest] of Object.entries(categoryArchive)) {
    push(`/category/${slug}`, dest);
    push(`/category/${slug}/feed`, dest);
    push(`/category/${slug}/page/:page*`, dest);
  }

  // 4. URLs avulsas da loja
  for (const [source, destination] of Object.entries(oneOff)) push(source, destination);

  // 5. Tags (todas sem posts no WordPress), autor, busca e feeds globais
  push("/tag/:slug*", "/noticias");
  push("/author/:slug*", "/");
  push("/feed", "/noticias");
  push("/feed/:path*", "/noticias");
  push("/comments/feed", "/noticias");

  // 6. Mídia que mudou de nome de arquivo (miniaturas, estatuto) — antes da
  //    regra geral, porque a primeira regra que casar é a que vale.
  for (const [source, destination] of Object.entries(mediaRedirects)) {
    push(source, destination);
  }

  // 7. Mídia em geral: /wp-content/uploads/... -> /uploads/...
  push("/wp-content/uploads/:path*", "/uploads/:path*");

  // 8. Sitemaps do WordPress
  push("/wp-sitemap.xml", "/sitemap.xml");
  push("/wp-sitemap-:path", "/sitemap.xml");
  push("/sitemap_index.xml", "/sitemap.xml");

  // 9. Prefixos da loja que sobrarem
  push("/produto/:slug*", "/revista");
  push("/categoria-produto/:slug*", "/noticias");

  // 10. Arquivos por data (depois das regras específicas de post, que são exatas)
  push("/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug*", "/noticias");
  push("/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})", "/noticias");
  push("/:year(\\d{4})/:month(\\d{2})", "/noticias");
  push("/:year(\\d{4})", "/noticias");

  return pairs;
}

/**
 * Formato do next.config.
 *
 * - statusCode 301 (e não `permanent: true`, que o Next emite como 308), porque
 *   é o código combinado para a migração.
 * - Cada fonte entra duas vezes, com e sem barra final: as URLs antigas do
 *   WordPress sempre terminavam em barra, e com `skipTrailingSlashRedirect`
 *   ligado no next.config elas chegam aqui intactas, devolvendo um único 301
 *   em vez da cadeia 308 (normalização) + 301.
 * - A última entrada é a rede de segurança: qualquer outro caminho com barra
 *   final vira a mesma rota sem barra, que é o formato do site novo.
 * - As fontes que já terminam em barra (as de pares cuja fonte é "/")
 *   não são duplicadas, para não gerar laço na raiz.
 */
export function legacyRedirects() {
  const out = [];
  for (const { source, destination } of legacyRedirectPairs()) {
    out.push({ source, destination, statusCode: 301 });
    out.push({ source: `${source}/`, destination, statusCode: 301 });
  }
  // :path+ (um ou mais) e não :path*, para a raiz "/" não cair nesta regra.
  out.push({ source: "/:path+/", destination: "/:path+", statusCode: 301 });
  return out;
}
