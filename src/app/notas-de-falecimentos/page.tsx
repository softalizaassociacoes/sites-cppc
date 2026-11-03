import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "Notas de Falecimentos",
  description:
    "Notas de falecimento publicadas pelo CPPC. Conteúdo em preparação.",
  path: "/notas-de-falecimentos",
  hidden: true,
});

export default function NotasDeFalecimentosPage() {
  return (
    <>
      <PageHero eyebrow="Publicações" title="Notas de Falecimentos" />
      <Container className="max-w-3xl py-14">
        <p className="italic text-ink-soft">Em breve.</p>
      </Container>
    </>
  );
}
