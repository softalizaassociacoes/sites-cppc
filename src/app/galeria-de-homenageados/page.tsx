import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Galeria de Homenageados" };

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
