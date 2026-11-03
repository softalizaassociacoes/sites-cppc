import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  title: "Revista PsicoTeo",
  description:
    "A PsicoTeo é o órgão oficial de publicação do CPPC, com artigos, entrevistas e reflexões sobre Psicologia, Psiquiatria e Teologia.",
  path: "/revista",
});

export default function RevistaPage() {
  const posts = getPostsByCategory("revistas");
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Revista PsicoTeo"
        description="A PsicoTeo é o órgão oficial de publicação do CPPC, reunindo artigos, entrevistas e reflexões sobre Psicologia, Psiquiatria e Teologia."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} basePath="/revista" />
          ))}
        </div>
      </Container>
    </>
  );
}
