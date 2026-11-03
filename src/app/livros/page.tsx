import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { books } from "@/content/books";

export const metadata: Metadata = pageMetadata({
  title: "Livros",
  description:
    "Livros publicados por membros e colaboradores do CPPC. O conteúdo é de inteira responsabilidade dos autores.",
  path: "/livros",
});

export default function LivrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Publicações"
        title="Livros"
        description="O CPPC publica artigos, teses e livros, mas ressalta que o conteúdo é de inteira responsabilidade dos autores. Nem sempre expressa o pensamento do CPPC."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm">
              {book.image && (
                <div className="relative aspect-[3/4] w-full bg-primary-50">
                  <Image src={book.image} alt={book.title} fill className="object-cover" />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-serif-display text-base font-semibold leading-snug text-primary-900">
                  {book.title}
                </h2>
                {book.author && <p className="mt-1 text-sm text-ink-soft">{book.author}</p>}
                {book.description && (
                  <p className="mt-2 line-clamp-4 text-sm text-ink-soft">{book.description}</p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  {book.link && (
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit rounded-full border border-primary-300 px-4 py-1.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
                    >
                      {book.videoUrl ? "Saiba mais" : "Adquirir"}
                    </a>
                  )}
                  {book.videoUrl && (
                    <a
                      href={book.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit rounded-full border border-primary-300 px-4 py-1.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
                    >
                      Confira o vídeo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
