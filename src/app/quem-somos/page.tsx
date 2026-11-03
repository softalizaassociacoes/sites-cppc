import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { cremos } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: "Quem Somos",
  description:
    "O CPPC é uma associação brasileira, sem fins lucrativos, de caráter cultural, teológico e científico, que congrega profissionais e estudantes da saúde mental desde 1976.",
  path: "/quem-somos",
});

export default function QuemSomosPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Quem Somos" />
      <Container className="grid grid-cols-1 gap-12 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="font-serif-display text-2xl font-semibold text-primary-900">
            O que é o CPPC?
          </h2>
          <div className="article-prose mt-4">
            <p>
              O Corpo de Psicólogos e Psiquiatras Cristãos é uma associação brasileira, sem fins
              lucrativos, de caráter cultural, teológico e científico, que congrega profissionais e
              estudantes da área de saúde mental. Atuamos como um Fórum permanente de estudos de
              questões sobre Psicologia, Teologia e saúde, agrupando profissionais interessados por
              estas temáticas.
            </p>
            <p>
              O CPPC não é uma sociedade formal, ou associação fria e impessoal. Todos nós somos aqui
              chamados a uma fraternidade amorosa, moldados pela fé cristã. Não se trata de um clube de
              lazer e de interesses ou relações sociais; muito menos de espaço para afirmação pessoal e
              grupal, ou de imposições autoritárias. Temos missão e propósitos a cumprir.
            </p>
            <p>
              A história do CPPC remonta há 5 décadas. A ideia da entidade surgiu em 1976, na cidade de
              Curitiba-PR, no Congresso Missionário promovido pela Aliança Bíblica Universitária (ABU),
              em um seminário sobre Psicologia e Psiquiatria. O espaço das tardes foi destinado a
              encontros por áreas do saber. Foi o que propiciou a reunião de 40 pessoas ligadas às
              ciências psi, entre elas Ageu Heringer Lisboa, Uriel Heckert, Gláucia de Medeiros Pereira,
              Guilherme Falcão, Catuto Ono, Margareth Brephol, Karl Lachler… E no ano seguinte, aconteceu
              o 1º Congresso Nacional do Corpo de Psicólogos e Psiquiatras Cristãos.
            </p>
            <p>
              Diferentes membros reunidos numa unidade harmônica e funcional, que nutre e sustenta a
              cada um e que se põe em movimento para o serviço ao próximo, em sintonia com o Deus
              criador.
            </p>
            <p>
              Muita literatura relevante tem sido publicada pelos associados. Destacamos a Bíblia de
              Estudo Conselheira, em parceria com a Sociedade Bíblica do Brasil (SBB). Editamos a
              revista PsicoTeo, que é nosso órgão oficial. O CPPC compõe-se de membros associados que
              assumem compromisso de se filiarem pagando uma anuidade que varia o valor de acordo com a
              categoria. Temos Membros Profissionais, Membros Correspondentes, Membros Estudantes e os
              Membros Plenos indicados e que foram aprovados no devido processo de ingresso.
            </p>

            <h2>Como fazer parte</h2>
            <p>
              A participação inicia-se aqui mesmo em nosso site e prioriza profissionais e estudantes de
              Psicologia e de Psiquiatria; mas admite como membros correspondentes, os interessados
              oriundos de todas as áreas do conhecimento. São realizadas reuniões dos núcleos em todo
              Brasil nas regiões: Norte, Nordeste, Centro-Oeste, Leste, Sul e São Paulo. Os coordenadores
              regionais dos núcleos fazem parte da Diretoria Executiva Nacional.
            </p>
            <p>
              Com um espaço acolhedor, promotor de comunhão entre as pessoas, exprimindo os valores e a
              ética do Reino do Senhor Jesus Cristo na vida pessoal, na atuação profissional, na
              inserção eclesiástica e na presença em sociedade.
            </p>

            <h2>O que oferecemos</h2>
            <p>
              Os associados do CPPC em dia com a anuidade têm prioridade de inscrição e desconto em
              eventos da instituição (cursos, supervisão, congressos, grupos de estudos, jornadas,
              simpósios etc.). Recebem as edições da revista virtual PsicoTeo, têm visualização
              profissional no nosso site e interação virtual através dos grupos de WhatsApp da região e
              CPPC Nacional, para troca de experiências, informações, indicações e palavras de
              fortalecimento e comunhão.
            </p>
            <p>
              Um associado pode ter suas publicações literárias divulgadas depois de avaliadas e
              aprovadas.
            </p>
            <p>
              O CPPC tem se empenhado em oferecer um espaço de interlocução e troca de experiências,
              desafiando-nos mutuamente a uma ação consciente e transformadora. Que toda mudança comece
              sempre por nós mesmos e atinja nossas famílias, nossas igrejas, nossas organizações
              profissionais, sociais e políticas.
            </p>
            <blockquote>
              &ldquo;Cada um servirá de esconderijo contra o vento, de refúgio contra a tempestade, de
              torrentes de águas em lugares secos e de sombra de grande rocha em terra sedenta. (…) O
              nobre projeta coisas nobres e na sua nobreza perseverará&rdquo; (Isaías 32. 2, 8).
            </blockquote>
          </div>
        </div>

        <aside className="rounded-2xl border border-primary-100 bg-primary-50/50 p-6">
          <h3 className="font-serif-display text-xl font-semibold text-primary-900">Cremos</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            {cremos.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-accent-600">✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/seja-um-associado"
            className="mt-6 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
          >
            Torne-se um associado
          </Link>
        </aside>
      </Container>
    </>
  );
}
