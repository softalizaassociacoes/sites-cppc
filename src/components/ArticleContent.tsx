import Image from "next/image";
import { Post, formatDate } from "@/lib/posts";
import { Container } from "./Container";

const categoryLabels: Record<string, string> = {
  noticias: "Notícias",
  revistas: "Revista PsicoTeo",
  livros: "Livros",
  boletins: "Boletins",
  teses: "Teses",
  memorias: "Memórias",
  "biblia-conselheira": "Bíblia Conselheira",
};

export function ArticleContent({ post }: { post: Post }) {
  const showFeatured = post.featuredImage && !post.bodyHtml.includes(post.featuredImage);
  const extraImages = post.images.filter(
    (img) => img.src !== post.featuredImage && !post.bodyHtml.includes(img.src)
  );

  return (
    <article className="py-12">
      <Container className="max-w-3xl">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-accent-600">
          {post.categories.map((c) => (
            <span key={c} className="rounded-full bg-primary-50 px-3 py-1 text-primary-700">
              {categoryLabels[c] || c}
            </span>
          ))}
          <time>{formatDate(post.date)}</time>
        </div>
        <h1 className="font-serif-display text-3xl font-semibold text-primary-900 sm:text-4xl">
          {post.title}
        </h1>

        {showFeatured && post.featuredImage && (
          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-primary-50">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              priority
              className="object-cover"
            />
          </div>
        )}

        {post.bodyHtml ? (
          <div
            className="article-prose mt-8"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />
        ) : (
          !showFeatured && (
            <p className="mt-8 text-ink-soft">
              Este registro faz parte do nosso arquivo histórico.
            </p>
          )
        )}

        {extraImages.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {extraImages.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary-50">
                <Image src={img.src} alt={img.alt || post.title} fill className="object-cover" />
              </div>
            ))}
          </div>
        )}
      </Container>
    </article>
  );
}
