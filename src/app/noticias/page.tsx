import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { PostCard } from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = { title: "Notícias" };

const PAGE_SIZE = 12;

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const posts = getPostsByCategory("noticias");
  const page = Math.max(1, parseInt(pageParam || "1", 10) || 1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const current = Math.min(page, totalPages);
  const slice = posts.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);

  return (
    <>
      <PageHero
        eyebrow="Fique por dentro"
        title="Notícias"
        description="Comunicados, artigos e reflexões da comunidade CPPC."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {slice.map((post) => (
            <PostCard key={post.id} post={post} basePath="/noticias" />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/noticias" : `/noticias?page=${p}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium ${
                  p === current
                    ? "bg-primary-700 text-white"
                    : "border border-primary-200 text-ink hover:bg-primary-50"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
