import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { getPostsByCategory, getPostBySlug } from "@/lib/posts";
import { JsonLd, articleJsonLd, articleMetadata, excerptToDescription } from "@/lib/seo";

export function generateStaticParams() {
  return getPostsByCategory("biblia-conselheira").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Bíblia Conselheira" };
  return articleMetadata({
    title: post.title,
    description:
      excerptToDescription(post.excerpt || post.bodyHtml) ||
      "Quadro da Bíblia de Estudo Conselheira, publicada pelo CPPC em parceria com a Sociedade Bíblica do Brasil.",
    path: `/biblia-conselheira/${post.slug}`,
    image: post.featuredImage ?? undefined,
    publishedTime: post.date,
  });
}

export default async function BibliaConselheiraPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.categories.includes("biblia-conselheira")) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description:
            excerptToDescription(post.excerpt || post.bodyHtml) ||
            "Quadro da Bíblia de Estudo Conselheira, publicada pelo CPPC em parceria com a Sociedade Bíblica do Brasil.",
          path: `/biblia-conselheira/${post.slug}`,
          datePublished: post.date,
          image: post.featuredImage,
        })}
      />
      <ArticleContent post={post} />
    </>
  );
}
