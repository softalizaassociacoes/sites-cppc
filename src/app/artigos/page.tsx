import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Artigos" };

export default function ArtigosPage() {
  return (
    <>
      <PageHero eyebrow="Publicações" title="Artigos" />
      <Container className="max-w-3xl py-14">
        <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif-display text-xl font-semibold text-primary-900">
            O Valor do Cuidado Integral e a Saúde do Missionário
          </h3>
          <p className="mt-2 text-sm text-ink-soft">Cuidado Integral de Missionários Transculturais</p>
          <a
            href="/uploads/2025/06/O_Valor_do_Cuidado_Integral_Final.pdf"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Acessar artigo
          </a>
        </div>
      </Container>
    </>
  );
}
