import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = { title: "Teses" };

export default function TesesPage() {
  const posts = getPostsByCategory("teses");
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Teses"
        description="Trabalhos acadêmicos de membros e colaboradores do CPPC sobre psicologia, religiosidade e saúde mental."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} basePath="/teses" />
          ))}
        </div>
      </Container>
    </>
  );
}
