import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  title: "Bíblia Conselheira",
  description:
    "Quadros e conteúdos da Bíblia de Estudo Conselheira, publicada pelo CPPC em parceria com a Sociedade Bíblica do Brasil (SBB).",
  path: "/biblia-conselheira",
});

export default function BibliaConselheiraPage() {
  const posts = getPostsByCategory("biblia-conselheira");
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Bíblia Conselheira"
        description="Quadros e conteúdos da Bíblia de Estudo Conselheira, publicada em parceria com a Sociedade Bíblica do Brasil (SBB), com estudos elaborados por psicólogos e psiquiatras cristãos."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} basePath="/biblia-conselheira" />
          ))}
        </div>
      </Container>
    </>
  );
}
