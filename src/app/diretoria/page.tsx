import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { diretoria } from "@/content/team";

export const metadata: Metadata = pageMetadata({
  title: "Diretoria",
  description:
    "A Diretoria Executiva Nacional do CPPC e as coordenações regionais responsáveis por cada região do Brasil.",
  path: "/diretoria",
});

export default function DiretoriaPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Diretoria"
        description="Diretoria Executiva Nacional do CPPC."
      />
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {diretoria.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-2xl bg-primary-50">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <h2 className="mt-3 font-serif-display text-base font-semibold text-primary-900">
                {member.name}
              </h2>
              <p className="text-sm text-ink-soft">{member.role}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
