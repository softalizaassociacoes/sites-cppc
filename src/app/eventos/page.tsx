import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Eventos",
  description:
    "Congressos, jornadas e encontros do CPPC: os próximos eventos abertos a inscrição e o registro dos que já aconteceram.",
  path: "/eventos",
});

const eventosFinalizados = [
  { image: "/uploads/2025/04/Pre-congressoCPPC_capa-_1_.jpg", alt: "Pré-Congresso CPPC" },
  { image: "/uploads/2025/02/WhatsApp-Image-2025-02-06-at-17.30.47-1-1.jpeg", alt: "Jornada do CPPC SP" },
  { image: "/uploads/2025/02/WhatsApp-Image-2025-02-06-at-16.54.07-1-1.jpeg", alt: "Jornada do CPPC SP" },
  { image: "/uploads/2024/12/participacoes_musicais-1.png", alt: "Participações musicais" },
  { image: "/uploads/2024/12/presimposiocppc.png", alt: "Pré-Simpósio CPPC" },
  { image: "/uploads/2024/12/WhatsApp-Image-2021-09-18-at-10.36.47-1.jpeg", alt: "Encontro CPPC" },
];

export default function EventosPage() {
  return (
    <>
      <PageHero eyebrow="Agenda" title="Eventos" />
      <Container className="py-14">
        <SectionHeading title="Eventos Futuros" />
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="https://associacoes.softaliza.com.br/evento/di%C3%A1logos-liter%C3%A1rios"
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-primary-100 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[16/9] w-full bg-primary-50">
              <Image
                src="/uploads/2025/10/Imagem_do_WhatsApp_de_2025-09-30_as_15.46.33_c84141fe-1.jpg"
                alt="Diálogos Literários"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif-display text-xl font-semibold text-primary-900 group-hover:text-primary-700">
                Diálogos Literários
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                O CPPC tem o prazer de lançar os &ldquo;Diálogos Literários&rdquo;, um novo espaço de
                encontro e reflexão onde mergulharemos a fundo nas obras de autores que nos tocam e
                transformam.
              </p>
              <span className="mt-4 inline-flex rounded-full bg-accent-500 px-5 py-2 text-sm font-semibold text-primary-950">
                Faça sua inscrição!
              </span>
            </div>
          </a>
        </div>

        <div className="mt-16">
          <SectionHeading title="Eventos Finalizados" />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {eventosFinalizados.map((e, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-primary-50">
                <Image src={e.image} alt={e.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-2xl border border-primary-100 bg-primary-50/50 p-8 text-center">
          <p className="text-ink-soft">
            Acompanhe todos os próximos eventos e faça sua inscrição pelo portal do associado.
          </p>
          <a
            href={siteConfig.memberPortal}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Acessar eventos
          </a>
        </div>
      </Container>
    </>
  );
}
