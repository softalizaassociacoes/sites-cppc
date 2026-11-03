import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você procurou não existe ou mudou de endereço. Veja os caminhos mais procurados do site do CPPC.",
  robots: { index: false, follow: true },
};

const atalhos: { href: string; label: string; descricao: string }[] = [
  { href: "/", label: "Página inicial", descricao: "O começo de tudo no site do CPPC." },
  { href: "/noticias", label: "Notícias", descricao: "Comunicados, artigos e reflexões da comunidade." },
  { href: "/quem-somos", label: "Quem Somos", descricao: "A história e os propósitos da associação." },
  { href: "/revista", label: "Revista PsicoTeo", descricao: "Todas as edições do nosso órgão oficial." },
  { href: "/nucleos-regionais", label: "Núcleos Regionais", descricao: "O CPPC em cada região do Brasil." },
  { href: "/seja-um-associado", label: "Seja um Associado", descricao: "Como se associar ao CPPC." },
  { href: "/nossos-membros", label: "Nossos Membros", descricao: "Busca de profissionais associados." },
  { href: "/contato", label: "Contato", descricao: "Fale com a secretaria." },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="Erro 404"
        title="Página não encontrada"
        description="A página que você procurou não existe ou mudou de endereço. Talvez um destes caminhos ajude."
      />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {atalhos.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="rounded-2xl border border-primary-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
            >
              <h2 className="font-serif-display text-base font-semibold text-primary-900">
                {a.label}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{a.descricao}</p>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink-soft">
          Não encontrou o que procurava? Escreva para{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-primary-700 hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          ou ligue para {siteConfig.phone}.
        </p>
      </Container>
    </>
  );
}
