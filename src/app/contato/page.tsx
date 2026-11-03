import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Contato",
  description:
    "Fale com o CPPC pelo e-mail secretaria@cppc.org.br, pelo telefone (51) 98191-0407 ou pelas nossas redes sociais.",
  path: "/contato",
});

export default function ContatoPage() {
  return (
    <>
      <PageHero eyebrow="Fale com o CPPC" title="Contato" />
      <Container className="max-w-2xl py-14 text-center">
        <div className="rounded-2xl border border-primary-100 bg-white p-10 shadow-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-serif-display text-2xl font-semibold text-primary-800 hover:text-primary-600"
          >
            {siteConfig.email}
          </a>
          <p className="mt-3 text-lg text-ink-soft">{siteConfig.phone}</p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-200 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
            >
              Facebook
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-200 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-primary-200 px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
