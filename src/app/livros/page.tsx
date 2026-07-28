import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { books } from "@/content/books";

export const metadata: Metadata = { title: "Livros" };

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
                <h3 className="font-serif-display text-base font-semibold leading-snug text-primary-900">
                  {book.title}
                </h3>
                {book.author && <p className="mt-1 text-sm text-ink-soft">{book.author}</p>}
                {book.description && (
                  <p className="mt-2 line-clamp-4 text-sm text-ink-soft">{book.description}</p>
                )}
                {book.link && (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit rounded-full border border-primary-300 px-4 py-1.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
                  >
                    Adquirir
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
