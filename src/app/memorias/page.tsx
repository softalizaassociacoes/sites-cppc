import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = { title: "Memórias" };

export default function MemoriasPage() {
  const posts = getPostsByCategory("memorias");
  return (
    <>
      <PageHero
        eyebrow="Nossa história"
        title="Memórias CPPC"
        description="Registros e fotografias de congressos, cursos e encontros que fazem parte da história de cinco décadas do CPPC."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} basePath="/memorias" />
          ))}
        </div>
      </Container>
    </>
  );
}
