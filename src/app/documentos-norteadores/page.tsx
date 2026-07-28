import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Documentos Norteadores" };

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
