import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = pageMetadata({
  title: "Boletins",
  description:
    "Edições históricas do boletim informativo do CPPC, com registros da vida da associação ao longo dos anos.",
  path: "/boletins",
});

export default function BoletinsPage() {
  const posts = getPostsByCategory("boletins");
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Boletins"
        description="Edições históricas do boletim informativo do CPPC."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} basePath="/boletins" />
          ))}
        </div>
      </Container>
    </>
  );
}
