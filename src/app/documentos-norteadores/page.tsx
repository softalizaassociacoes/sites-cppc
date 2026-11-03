import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "Documentos Norteadores",
  description:
    "Documentos norteadores do CPPC. Conteúdo em preparação.",
  path: "/documentos-norteadores",
  hidden: true,
});

export default function DocumentosNorteadoresPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Documentos Norteadores" />
      <Container className="max-w-3xl py-14">
        <p className="italic text-ink-soft">Em breve.</p>
      </Container>
    </>
  );
}
