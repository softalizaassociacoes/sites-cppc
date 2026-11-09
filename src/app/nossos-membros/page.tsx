import type { Metadata } from "next";
import Script from "next/script";
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
        {/* Em telas estreitas a busca embutida fica apertada, então oferecemos o
            atalho para abri-la em tela cheia, como no site antigo. */}
        <div className="mb-4 text-center lg:hidden">
          <a
            href={siteConfig.memberSearch}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Abrir a busca em tela cheia
          </a>
        </div>
        <div className="overflow-hidden rounded-2xl border border-primary-100 shadow-sm">
          {/* A altura abaixo é só o ponto de partida: o resize.js do Assocializa
              ajusta o iframe ao conteúdo. Se o script não carregar, a busca
              continua utilizável nesta altura. */}
          <iframe
            src={siteConfig.memberSearch}
            title="Busca de associados"
            loading="lazy"
            className="block w-full border-0"
            style={{ height: 900 }}
          />
        </div>
      </Container>
      <Script src={siteConfig.memberSearchResize} strategy="afterInteractive" />
    </>
  );
}
