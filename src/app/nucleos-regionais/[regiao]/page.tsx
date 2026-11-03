import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { regions } from "@/content/regions";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return regions.map((r) => ({ regiao: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ regiao: string }>;
}): Promise<Metadata> {
  const { regiao } = await params;
  const region = regions.find((r) => r.slug === regiao);
  if (!region) return { title: "Núcleos Regionais" };
  const temNucleos = region.nucleos.length > 0;
  return pageMetadata({
    title: `Região ${region.name}`,
    description: temNucleos
      ? `Núcleos do CPPC na Região ${region.name} (${region.states}) e os contatos das lideranças de cada cidade.`
      : `O CPPC na Região ${region.name} (${region.states}). Informações sobre os núcleos e lideranças em breve.`,
    path: `/nucleos-regionais/${region.slug}`,
    hidden: !temNucleos,
  });
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ regiao: string }>;
}) {
  const { regiao } = await params;
  const region = regions.find((r) => r.slug === regiao);
  if (!region) notFound();

  return (
    <>
      <PageHero eyebrow="Núcleos Regionais" title={`Região ${region.name}`} description={region.states} />
      <Container className="max-w-3xl py-14">
        {region.emBreve ? (
          <p className="text-ink-soft">
            Em breve, informações sobre os núcleos e lideranças desta região.
          </p>
        ) : (
          <div className="space-y-8">
            {region.vicePresidente && (
              <div className="rounded-2xl border border-accent-300 bg-accent-300/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-accent-700">
                  Vice-presidente do CPPC na Região {region.name}
                </p>
                <p className="mt-1 font-serif-display text-lg text-primary-900">
                  {region.vicePresidente.name}
                  {region.vicePresidente.local ? ` (${region.vicePresidente.local})` : ""}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {region.nucleos.map((n, i) => (
                <div key={i} className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm">
                  <h2 className="font-serif-display text-base font-semibold text-primary-900">
                    Núcleo do CPPC em {n.cidade}
                  </h2>
                  {n.contato && <p className="mt-2 text-sm text-ink-soft">{n.contato}</p>}
                  {n.telefone && <p className="text-sm text-ink-soft">{n.telefone}</p>}
                  {n.email && (
                    <a
                      href={`mailto:${n.email}`}
                      className="mt-1 inline-block text-sm text-primary-700 hover:underline"
                    >
                      {n.email}
                    </a>
                  )}
                  {!n.contato && !n.email && (
                    <p className="mt-2 text-sm italic text-ink-soft">Em breve</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
