import type { Metadata } from "next";
import { noIndex, siteConfig, siteUrl } from "@/content/site";

export interface PageSeo {
  /** <title> da página, sem o sufixo "– CPPC". */
  title: string;
  /** Meta description própria da página. */
  description: string;
  /** Caminho absoluto no site, começando com "/". Vira o canonical. */
  path: string;
  /** Imagem de Open Graph, caminho relativo ao site. Padrão: a imagem do CPPC. */
  image?: string;
  /** Páginas sem conteúdo publicável ficam fora dos buscadores. */
  hidden?: boolean;
}

const robotsHidden = {
  index: false,
  follow: false,
  googleBot: { index: false, follow: false },
} as const;

/** Monta title, description, canonical e Open Graph de uma página. */
export function pageMetadata({
  title,
  description,
  path,
  image,
  hidden,
}: PageSeo): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const img = image ?? siteConfig.ogImage;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: hidden || noIndex ? robotsHidden : undefined,
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: siteConfig.name,
      title: `${title} – ${siteConfig.name}`,
      description,
      url,
      images: [{ url: img, width: 1200, height: 630, alt: siteConfig.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – ${siteConfig.name}`,
      description,
      images: [img],
    },
  };
}

/** Variante para páginas de artigo (notícias, revista, teses, memórias…). */
export function articleMetadata({
  title,
  description,
  path,
  image,
  publishedTime,
}: PageSeo & { publishedTime?: string }): Metadata {
  const base = pageMetadata({ title, description, path, image });
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime,
    },
  };
}

/** Resumo em texto puro a partir do HTML migrado do WordPress, para meta description. */
export function excerptToDescription(input: string, max = 160): string {
  const text = input
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#39;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\[&hellip;\]|\[…\]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 80 ? lastSpace : max).trimEnd()}…`;
}

/** JSON-LD de Organization, usado na home. */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.fullName,
    alternateName: siteConfig.name,
    url: siteUrl,
    logo: `${siteUrl}/uploads/2024/12/IMG_6425.png`,
    image: `${siteUrl}${siteConfig.ogImage}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: "+5551981910407",
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.x],
    areaServed: "BR",
  };
}

/** JSON-LD de WebSite, usado na home junto do Organization. */
export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${siteConfig.name} – ${siteConfig.fullName}`,
    inLanguage: "pt-BR",
    publisher: { "@id": `${siteUrl}/#organization` },
  };
}

/** JSON-LD de Article, usado nas páginas de notícia e demais publicações. */
export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  image?: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    inLanguage: "pt-BR",
    mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}${path}` },
    url: `${siteUrl}${path}`,
    image: image ? `${siteUrl}${image}` : `${siteUrl}${siteConfig.ogImage}`,
    author: { "@type": "Organization", name: siteConfig.fullName, url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: siteConfig.fullName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/uploads/2024/12/IMG_6425.png`,
      },
    },
  };
}

/** <script type="application/ld+json"> pronto para inserir numa página. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
