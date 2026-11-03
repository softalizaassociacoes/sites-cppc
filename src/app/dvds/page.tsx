import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "DVDs",
  description:
    "DVDs e vídeos das palestras do CPPC. O conteúdo é de inteira responsabilidade dos autores.",
  path: "/dvds",
});

export default function DvdsPage() {
  return (
    <>
      <PageHero eyebrow="Publicações" title="DVDs" />
      <Container className="max-w-3xl py-14">
        <p className="text-ink-soft">
          O CPPC publica artigos, teses e livros, mas quer deixar registrado que o conteúdo é de
          inteira responsabilidade dos autores dos mesmos. Nem sempre expressa o pensamento do CPPC.
        </p>
        <p className="mt-4 text-ink-soft">
          Neste espaço, indicaremos a todos os interessados como conseguir os vídeos das palestras do
          CPPC.
        </p>
      </Container>
    </>
  );
}
