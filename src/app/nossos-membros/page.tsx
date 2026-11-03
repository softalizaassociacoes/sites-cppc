import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Nossos Membros",
  description:
    "Diretório de profissionais associados ao CPPC: encontre psicólogos e psiquiatras por nome, especialidade, estado e cidade.",
  path: "/nossos-membros",
});

export default function NossosMembrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Associados"
        title="Nossos Membros"
        description="Encontre profissionais associados ao CPPC através do nosso diretório."
      />
      <Container className="py-14">
        <div className="overflow-hidden rounded-2xl border border-primary-100 shadow-sm">
          <iframe
            src={siteConfig.memberSearch}
            title="Busca de profissionais CPPC"
            className="h-[950px] w-full"
            loading="lazy"
          />
        </div>
      </Container>
    </>
  );
}
