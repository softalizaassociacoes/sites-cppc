import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "Estatuto",
  description:
    "Estatuto Social do CPPC em PDF: o documento oficial que rege a organização, os propósitos e o funcionamento da associação.",
  path: "/estatuto",
});

export default function EstatutoPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Estatuto" />
      <Container className="max-w-3xl py-14">
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-primary-100 bg-white p-8 shadow-sm sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 2h9l5 5v15H6z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M15 2v5h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="font-serif-display text-xl font-semibold text-primary-900">
              Estatuto Social do CPPC
            </h2>
            <p className="mt-1 text-sm text-ink-soft">
              Documento oficial que rege a organização, os propósitos e o funcionamento do Corpo de
              Psicólogos e Psiquiatras Cristãos.
            </p>
          </div>
          <a
            href="/uploads/2026/07/estatutocppc.pdf"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Abrir PDF
          </a>
        </div>
      </Container>
    </>
  );
}
