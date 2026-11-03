import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { getPostsByCategory, getPostBySlug } from "@/lib/posts";
import { JsonLd, articleJsonLd, articleMetadata, excerptToDescription } from "@/lib/seo";

export function generateStaticParams() {
  return getPostsByCategory("boletins").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Boletins" };
  return articleMetadata({
    title: post.title,
    description:
      excerptToDescription(post.excerpt || post.bodyHtml) ||
      "Edição do boletim informativo do CPPC.",
    path: `/boletins/${post.slug}`,
    image: post.featuredImage ?? undefined,
    publishedTime: post.date,
  });
}

export default async function BoletimPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.categories.includes("boletins")) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description:
            excerptToDescription(post.excerpt || post.bodyHtml) ||
            "Edição do boletim informativo do CPPC.",
          path: `/boletins/${post.slug}`,
          datePublished: post.date,
          image: post.featuredImage,
        })}
      />
      <ArticleContent post={post} />
    </>
  );
}
