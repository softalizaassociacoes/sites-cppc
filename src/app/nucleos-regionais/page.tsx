import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { regions } from "@/content/regions";

export const metadata: Metadata = pageMetadata({
  title: "Núcleos Regionais",
  description:
    "Os núcleos regionais do CPPC espalhados pelo Brasil e os contatos das lideranças de cada região.",
  path: "/nucleos-regionais",
});

export default function NucleosRegionaisPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Núcleos Regionais"
        description="O CPPC atua através de núcleos regionais espalhados pelo Brasil. Todos os núcleos estão ligados às lideranças regionais. Se você se encontra em uma destas regiões, faça contato com o líder e participe das nossas reuniões."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <Link
              key={region.slug}
              href={`/nucleos-regionais/${region.slug}`}
              className="group rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h2 className="font-serif-display text-xl font-semibold text-primary-900 group-hover:text-primary-700">
                {region.name}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{region.states}</p>
              <p className="mt-4 text-sm font-medium text-accent-600">
                {region.emBreve ? "Em breve" : `${region.nucleos.length} núcleo(s)`}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
