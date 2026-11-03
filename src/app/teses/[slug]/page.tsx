import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleContent } from "@/components/ArticleContent";
import { getPostsByCategory, getPostBySlug } from "@/lib/posts";
import { JsonLd, articleJsonLd, articleMetadata, excerptToDescription } from "@/lib/seo";

export function generateStaticParams() {
  return getPostsByCategory("teses").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Teses" };
  return articleMetadata({
    title: post.title,
    description:
      excerptToDescription(post.excerpt || post.bodyHtml) ||
      "Trabalho acadêmico publicado pelo CPPC.",
    path: `/teses/${post.slug}`,
    image: post.featuredImage ?? undefined,
    publishedTime: post.date,
  });
}

export default async function TesePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.categories.includes("teses")) notFound();
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description:
            excerptToDescription(post.excerpt || post.bodyHtml) ||
            "Trabalho acadêmico publicado pelo CPPC.",
          path: `/teses/${post.slug}`,
          datePublished: post.date,
          image: post.featuredImage,
        })}
      />
      <ArticleContent post={post} />
    </>
  );
}
