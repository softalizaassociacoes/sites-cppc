import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { condutaEtica } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Conduta Ética",
  description:
    "Os compromissos éticos assumidos pelos psicólogos e psiquiatras associados ao CPPC no atendimento a indivíduos, casais, famílias e grupos.",
  path: "/conduta-etica",
});

export default function CondutaEticaPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Conduta Ética" />
      <Container className="max-w-3xl py-14">
        <ol className="space-y-5">
          {condutaEtica.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-semibold text-white">
                {i + 1}
              </span>
              <p className="text-ink-soft">{item}</p>
            </li>
          ))}
        </ol>
      </Container>
    </>
  );
}
