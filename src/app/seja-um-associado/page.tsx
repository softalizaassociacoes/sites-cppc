import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { siteConfig, cremos } from "@/content/site";

export const metadata: Metadata = { title: "Seja um Associado" };

export default function SejaUmAssociadoPage() {
  return (
    <>
      <PageHero
        eyebrow="Associados"
        title="Seja um Associado"
        description="O CPPC está aberto para receber propostas de novos filiados que compartilhem de nossa formação e fé. O cadastro de profissionais precisa ser aprovado pela diretoria nacional, e há uma anuidade a ser paga, corrigida anualmente."
      />
      <Container className="pt-10">
        <a
          href="https://youtu.be/RnISw9FQe6g?si=O4iBbSkktSku0TAS"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary-300 px-5 py-2.5 text-sm font-semibold text-primary-700 hover:bg-primary-50"
        >
          ▶ Assista como é fácil se associar ao CPPC
        </a>
      </Container>
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif-display text-xl font-semibold text-primary-900">Profissionais</h3>
            <p className="mt-3 text-sm font-medium text-ink">Como ser um associado CPPC</p>
            <ol className="mt-2 space-y-2 text-sm text-ink-soft">
              <li>1. Ser devidamente registrado em seu conselho, CRP ou CRM.</li>
              <li>
                2. Estar em concordância com os objetivos do CPPC, sendo indispensável a leitura do{" "}
                <a href="/estatuto" className="text-primary-700 underline">estatuto</a>.
              </li>
              <li>3. Concordar com a Declaração de Fé e Ética do CPPC.</li>
              <li>4. Ler os livros e textos que fundamentam a construção da nossa base psicoteológica.</li>
              <li>
                5. Passar por acompanhamento e supervisão de um membro pleno, através de 4 encontros
                (on-line ou presenciais).
              </li>
            </ol>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
            >
              Seja Associado
            </a>
          </div>

          <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif-display text-xl font-semibold text-primary-900">Estudantes</h3>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              {cremos.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
            >
              Seja Associado
            </a>
          </div>

          <div className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif-display text-xl font-semibold text-primary-900">Correspondentes</h3>
            <p className="mt-3 text-sm text-ink-soft">
              Qualquer pessoa interessada em caminhar com o CPPC e receber nossas publicações.
              Correspondentes não são considerados membros do CPPC, apenas apoiadores.
            </p>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
            >
              Seja Associado
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
