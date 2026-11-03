import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "Galeria de Homenageados",
  description:
    "Galeria de homenageados do CPPC. Conteúdo em preparação.",
  path: "/galeria-de-homenageados",
  hidden: true,
});

export default function GaleriaDeHomenageadosPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Galeria de Homenageados" />
      <Container className="max-w-3xl py-14">
        <p className="italic text-ink-soft">Em breve.</p>
      </Container>
    </>
  );
}
