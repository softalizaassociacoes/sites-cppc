import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = { title: "Organização" };

export default function OrganizacaoPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Organização" />
      <Container className="max-w-3xl py-14">
        <div className="article-prose">
          <h2>Em geral</h2>
          <p>
            O CPPC nasceu em 1976 a partir de uma Consulta sobre Teologia e Psicologia, em
            Curitiba/PR, com o propósito de desenvolver estudos criativos sobre as relações das
            ciências psicológicas e a teologia e filosofia hebraico-cristã. É uma entidade civil, de
            caráter educativo-científico, sem fins lucrativos. Para a consecução de nossos objetivos,
            promovemos reuniões científicas, congressos, cursos e seminários com renomados
            especialistas nacionais e estrangeiros.
          </p>
          <p>
            Mantemos intercâmbios e convênios de cooperação mútua com entidades científicas e
            educacionais. Não mantemos clínicas de psicologia ou psiquiatria, nem estamos
            subordinados a nenhuma instituição religiosa ou de qualquer natureza. Editamos livros,
            monografias e a Revista Psicoteologia. Firmamos convênios com seminários e institutos
            teológicos para elaboração e docência em cadeiras de aconselhamento e demais cadeiras
            ligadas à psicologia e saúde mental. Funcionamos como fórum permanente de estudos de
            questões das áreas de psicologia, psiquiatria, saúde e religião, agrupando profissionais e
            estudantes destas áreas.
          </p>
          <p>
            Cremos na soberania de Deus na criação e redenção; em Jesus Cristo, Deus encarnado,
            Senhor e Salvador; na atuação do Espírito Santo gerando nova vida; na Igreja, Corpo de
            Cristo, como comunidade terapêutica; na verdade, bíblica ou científica, provinda de Deus.
          </p>

          <h2>A ideia do CPPC</h2>
          <p>
            Aconteceu a partir de benéficas inquietações espirituais e desafios intelectuais em
            algumas pessoas. Uriel Heckert, desde Juiz de Fora, MG, quando ainda na Faculdade de
            Medicina, antes de 1970. Ageu Heringer Lisboa em Belo Horizonte, a partir dos anos de
            estudante, início dos anos 70, e toda uma primeira geração do CPPC: Francisco Lotufo
            Neto — depois psiquiatra —, Zenon Lotufo Jr., pastor e analista transacional, São Paulo;
            Margareth Brepohl e Carlos Grzybowski — Catito —, estudante de psicologia, Curitiba; Almir
            Linhares de Faria, psicólogo, Belo Horizonte; Ronald Scott Bruno, psiquiatra; Terezinha
            Privatti e Glaucia Medeiros — psicólogas, Rio de Janeiro; e logo Esly Regina de Carvalho,
            psicóloga, em Brasília; Benedito Guilherme Falcão em Alagoas; Karin H. Kepler Wondracek,
            de Porto Alegre; Werner Haeuser — pastor, Curitiba e Gramado, RS.
          </p>
          <p>
            Um marco histórico se deu quando do Congresso Missionário da ABU em Curitiba, janeiro de
            1976, que lançou as bases do que seria o CPPC. Decidiu-se por um Congresso no ano seguinte
            em Belo Horizonte. Com o sonho e projeto se corporificando, veio o Primeiro Congresso em
            1977, no retiro dos Pinheiros, na saída de Belo Horizonte para Ouro Preto, MG.
          </p>
          <p>
            A partir deste Primeiro Congresso, estabelecidos como em rede, iniciamos um período de
            trocas. Através da rede de núcleos da ABU Latino-Americana, que dispunha de literatura
            progressista na época, como a revista Certeza, descobrimos uma série de autores cristãos
            que abordavam as questões que justamente buscávamos: o psiquiatra John White, canadense,
            Paul Tournier e Hans Bürki, suíços, Daniel Schipani, Carlos José Hernández, os médicos
            Zandrinos, argentinos, e o Dr. Jorge León, cubano-argentino. No campo teológico, Samuel
            Escobar, peruano; René Padilha, equatoriano; John Stott, inglês.
          </p>

          <h2>Apoiadores teológicos</h2>
          <p>
            O Prof. Karl Lachler, na Fac. Teol. Batista de São Paulo, mostrou-nos belas conexões
            produtivas entre ensinos bíblicos e nossa vida profissional. Hans Bürki — IFES/ABU —
            atuou como diretor espiritual de uma geração de pioneiros, juntamente com sua esposa,
            psiquiatra e terapeuta de famílias, Ago Bürki. O Dr. Francisco Lotufo Neto, juntamente com
            Margareth Brepohl, articularam as várias vindas ao Brasil do Bürki, da Suíça, e do Dr.
            Frank Lake, da Inglaterra, ocasiões que aconteciam seminários, vivências, supervisões e
            conferências públicas em São Paulo, Belo Horizonte, Rio de Janeiro e Curitiba.
          </p>
          <p>
            Outra grande descoberta nos foi trazida pela colega Esly, que conheceu o Dr. Harold J.
            Ellens, de Chicago, Estados Unidos. Visitou-nos por três ocasiões, ensinando sobre a Graça
            de Deus e a Saúde Humana e também Psicoteologia: aspectos básicos, que se tornaram duas de
            nossas publicações, antes mesmo de serem editadas em seu país.
          </p>

          <h2>A aposta dos fundadores</h2>
          <p>
            Há grandes distâncias no interior de cada campo, entre as distintas teologias e as
            distintas construções teóricas em psicologia no entendimento e processamento da relação
            psicologia-religião. Descobre-se muito especialmente nesta tensão o quanto todo saber,
            toda ciência e toda teologia é construção histórica e social, necessariamente parcial,
            limitada na sua capacidade de abarcar um todo que é, igualmente, evolutivo.
          </p>

          <h2>Interface acadêmica</h2>
          <p>
            Desde o início o CPPC se tornou um referencial para estudantes de psicologia e
            psiquiatria. Em janeiro de 1978 foi realizado o curso Trauma de Nascimento: etiologia,
            sequelas e psicoterapia, ministrado pelo Dr. Frank Lake, da Universidade de Londres, na PUC
            de São Paulo. Outro grande momento se deu com o I Congresso Humanístico
            Existencial-Logoterapia, na PUC de Porto Alegre, com a presença do Dr. Viktor Frankl, o
            próprio criador da Logoterapia, em sua primeira vinda ao Brasil.
          </p>
          <p>
            No campo editorial, publicamos Psicologia e Saúde Pastoral e Saúde Pastoral e Comunitária;
            Espiritismo, Psicopatologia e Psicoterapia, do psiquiatra Ronald Scott Bruno; Graça de Deus
            e Saúde Humana e Psicoteologia: aspectos básicos, do Dr. Harold Ellens, pela Editora
            Sinodal; e O Lugar do Sagrado na Terapia, de Carlos Hernández. Mais recentemente, a colega
            psicanalista Karin Wondracek traduziu o volume que faltava para a edição das obras
            completas de Sigmund Freud em português, e o CPPC editou, pela Editora Ultimato de Viçosa,
            MG, o livro Cartas Freud-Pfister 1909–1939.
          </p>

          <h2>Interface teológica</h2>
          <p>
            Junto ao campo teológico, especialmente o protestante ou evangélico, praticamos um
            diálogo que tem se mostrado frutificante. O psiquiatra, o psicólogo e o psicopedagogo, com
            seu instrumental conceitual, de diagnóstico e de intervenção, têm muito a contribuir para a
            saúde emocional de pessoas, famílias e grupos. Pastorais de idosos, encontros de casais,
            cuidado a pessoas com deficiência, sexualidade, crises do ciclo vital, perdas e luto,
            pastoral carcerária, cuidado de crianças e adolescentes em situação de risco e tantas
            outras áreas críticas para o cuidado pastoral são impensáveis hoje à parte dos recursos
            desenvolvidos pelas ciências.
          </p>
          <p>
            Concluindo esta apreciação das relações entre práticas psicológicas e práticas pastorais no
            quadro brasileiro, temos prevalecido no espírito fraterno e no cumprimento do que ensina o
            apóstolo Paulo: &ldquo;trazendo cativo a Cristo todo pensamento&rdquo;. Mesmo identificando-nos
            cada um com uma abordagem psicológica distinta, mantemo-nos articulados, organicamente, num
            corpo — relativizando cada um dos saberes com os quais trabalhamos, por desejarmos a
            genuína sabedoria que vem da Palavra de Deus.
          </p>
          <p className="text-sm italic text-ink-soft">
            Ageu Heringer Lisboa, abril de 2003. Ageu Lisboa é um dos fundadores do CPPC e seu primeiro
            presidente. Integrou o Conselho Consultivo do CPPC.
          </p>
        </div>
      </Container>
    </>
  );
}
