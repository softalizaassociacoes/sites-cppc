import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMetadata({
  title: "Organização",
  description:
    "Como o CPPC se organiza: entidade civil de caráter educativo-científico, sem fins lucrativos, nascida em 1976 em Curitiba (PR).",
  path: "/organizacao",
});

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

          <h2>A Ideia do CPPC</h2>
          <p>
            Aconteceu a partir de benéficas inquietações espirituais e desafios intelectuais em
            algumas pessoas. Uriel Heckert, desde Juiz de Fora, MG, quando ainda na Faculdade de
            Medicina, antes de 1970. Ageu Heringer Lisboa em Belo Horizonte, a partir dos anos de
            estudante, início dos anos 70 e toda uma primeira geração do CPPC: Francisco Lotufo
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
            em Belo Horizonte. No período preparatório difundiu-se a ideia do CPPC em algumas
            publicações como o Diário do Comércio, no Recife, em artigo do Prof. Robinson Cavalcanti;
            em jornais de igrejas e principalmente pelas trocas de correspondência entre amigos que
            indicavam outros profissionais e estudantes da área PSI.
          </p>
          <p>
            Com o sonho e projeto se corporificando, de um lado com direção compartilhada entre o
            Uriel em Juiz de Fora, o Lotufo Neto e Zenon em São Paulo, a secretaria do Congresso ficou
            a cargo de um grupo em Belo Horizonte. E veio o Primeiro Congresso em 1977, no retiro dos
            Pinheiros, na saída de Belo Horizonte para Ouro Preto, MG. Placas de sinalização do local
            do Encontro CPPC para os participantes chamaram atenção da Polícia Federal, que fez um
            acompanhamento à distância e dias após procurou-nos em casa para esclarecimentos. Fiquei
            assustado, mas meu pai participou da conversa com os agentes, me tranquilizando.
          </p>
          <p>
            Queriam que fornecêssemos uma lista com os nomes dos participantes. Recusamos esta
            solicitação, mas entregamos textos da convocação e o programa desenvolvido. Neste tempo
            esboçava-se a abertura política no país.
          </p>
          <p>
            A partir deste Primeiro Congresso, estabelecidos como em rede (na época este termo não era
            utilizado), iniciamos um período de trocas. O Lotufo Neto descobria autores como E. Mansel
            Pattison, professor de Psiquiatria em Oregon. Colegas como Heloisa Helena Silva e Paulo
            Emanuel Doro traduziam textos.
          </p>
          <p>
            Era um tempo de sonhos, parcos recursos, textos impressos em stencil. O grupo reunia
            poucos estudantes e jovens recém-formados. Através da rede de núcleos da ABU
            Latino-Americana, que dispunha de literatura progressista na época, como a revista
            Certeza, descobrimos uma série de autores cristãos que abordavam as questões que
            justamente buscávamos. Assim passamos a ler o psiquiatra John White, canadense, Paul
            Tournier e Hans Bürki, suíços, Daniel Schipani, Carlos José Hernández, os médicos
            Zandrinos, argentinos, e o Dr. Jorge León, cubano-argentino. No campo dos escritos
            teológicos que nos capacitavam a olhar criativamente a ciência como reflexo do mandato
            cultural de Deus estavam Samuel Escobar, peruano; Renê Padilha, equatoriano; John Stott,
            inglês.
          </p>

          <h2>Apoiadores Teológicos</h2>
          <p>
            Prof. Karl Lachler, na Fac. Teol. Batista de São Paulo, alma sensível, ouvia-nos com real
            interesse e nos indagava sobre nossos campos, ouvia nossas inquietações intelectuais e
            espirituais. Com sua amizade e pastoreio mostrou-nos belas conexões produtivas entre
            ensinos bíblicos e nossa vida profissional, e abriu-nos campos de discussão na Fac.
            Teológica Batista de São Paulo, onde era professor. Hans Bürki — IFES/ABU — com sua vasta
            formação acadêmica e profundidade teológica, atuou como diretor espiritual de uma geração
            de pioneiros, juntamente com sua esposa, psiquiatra e terapeuta de famílias, Ago Bürki. Em
            Belo Horizonte, Noé Stanley, André e Joana Buxton, assessores da ABU, e o Pr. pedagogo
            Jairo Gonçalves foram bons interlocutores que animavam o início do empreendimento CPPC. O
            Dr. Francisco Lotufo Neto, juntamente com Margareth Brepohl, articularam as várias vindas
            ao Brasil do Bürki, da Suíça, e do Dr. Frank Lake, da Inglaterra, ocasiões em que
            aconteciam seminários em Faculdades Teológicas — Batista e Presbiteriana —, vivências,
            supervisões para profissionais e conferências públicas, em São Paulo, Belo Horizonte, Rio
            de Janeiro e Curitiba. Com o Dr. Frank Lake foi realizado, em janeiro de 1978, o Curso de
            Aconselhamento Pastoral na Fac. Teol. Batista, com grande afluência de pastores e líderes.
            O Prof. Almir Linhares de Faria saiu de Belo Horizonte e se fixou em Piracicaba, na Unimep.
            Viajando pela Argentina, conheceu pessoalmente o Dr. Carlos José Hernández e o convidou
            para estar entre nós.
          </p>
          <p>
            Desde então o Hernández desenvolveu uma vinculação profunda com toda a família do CPPC.
            Temos o prazer de contar com sua presença na maioria de nossos Congressos e seminários.
            Exerce um papel de pai espiritual do grupo.
          </p>
          <p>
            Outra grande descoberta nos foi trazida pela colega Esly, que conheceu o Dr. Harold J.
            Ellens, de Chicago, Estados Unidos. Visitou-nos por três ocasiões, ensinando sobre a Graça
            de Deus e a Saúde Humana e também Psicoteologia: aspectos básicos, que se tornaram duas de
            nossas publicações, antes mesmo de serem editadas em seu país. Percorreu várias capitais,
            incluindo o nordeste. Sucedendo, a colega Fátima Fontes, de Recife, articulava alguns
            trabalhos na região. Em São Paulo, Ellens foi interpretado pelo colega Rev. José Cássio
            Martins, que assim fez sua entrada no CPPC.
          </p>
          <p>
            O Dr. Ellens ainda corresponde conosco através dos colegas Cássio e Zenon. Ambos, por sua
            formação teológica, sempre contribuíram para forjar a identidade do CPPC, presentes em
            oficinas, palestras e textos. Os conferencistas e dirigentes de seminários em nossos
            congressos, cada um deles, nos enriqueceram com suas contribuições bem particulares. Fazem
            parte desta rica galeria o Pr. Ricardo Barbosa, de Brasília, e o Pr. Osmar Ludovico da
            Silva, desde o Rio de Janeiro e agora em Curitiba, ambos mestres de espiritualidade cristã;
            Dra. Maria Clara Bingemer, teóloga católica da PUC-RJ, palestrante em encontros do CPPC no
            Rio e em São Paulo. O Dr. Pedro Iwashita, reitor do Seminário de Espírito Santo, em São
            Paulo, SP, em suas exposições no grupo articulou o encontro da psicologia analítica com a
            teologia cristã. Devemos nossa gratidão ainda a vários pastores e teólogos colaboradores
            que nos legaram suas contribuições.
          </p>

          <h2>A Aposta dos Fundadores</h2>
          <p>
            Destacamos nesta questão que há grandes distâncias no interior de cada campo, entre as
            distintas teologias e as distintas construções teóricas em psicologia no entendimento e
            processamento da relação psicologia-religião. Descobre-se muito especialmente nesta tensão
            o quanto todo saber, toda ciência e toda teologia é construção histórica e social,
            necessariamente parcial, limitada na sua capacidade de abarcar um todo que é, igualmente,
            evolutivo. Um grande papel desempenha neste campo de estudos a personalidade e a história
            de cada autor, teólogo ou psicólogo, com sua subjetividade. De ambos os lados encontramos
            autores contaminados por preconceitos grosseiros — os conceitos prévios não esclarecidos —
            causadores de falsos problemas. No campo religioso, alguns até pensam que a humanidade do
            crente seja marcada por uma diferença substancial, que afetaria seu funcionamento psíquico.
          </p>
          <p>
            Felizmente a época das inquisições e exclusões tende a diminuir entre vastos setores dos
            dois campos, permitindo uma relação mutuamente fecundante. A grande frequência de
            psicólogos hoje nos cursos de Pós-graduação em Ciências da Religião e de pastores cursando
            psicologia mostra uma confluência de interesses realmente plural e uma saudável distensão
            de mentes.
          </p>

          <h2>Interface Acadêmica</h2>
          <p>
            As repercussões que desencadeamos pelo fato de ousarmos existir jamais conheceremos
            satisfatoriamente. Um grupo de profissionais que assume uma confessionalidade religiosa e
            que dirige seu olhar para o campo científico e acadêmico de um lado, e para o campo
            religioso e teológico do outro, corre sérios riscos de mal-entendidos. Desde o início o
            CPPC se tornou um referencial para estudantes de psicologia e psiquiatria. Atrairá olhares
            tortos de profissionais céticos, mas também suspeitas de religiosos, sejam de
            fundamentalistas ou liberais. É uma corda-bamba que exige muita perícia para a travessia. É
            o que temos buscado desde sempre. Um de nossos colaboradores iniciais em Belo Horizonte,
            apresentado por nosso colega pastor e psicólogo Márcio Moreira, foi o Prof. Haley Alves
            Bessa, líder leigo católico, fundador tanto da Faculdade de Psicologia da U.F.M.G. quanto
            da PUC-MG. Foi um bem conceituado psiquiatra e psicólogo, primeiro presidente do Conselho
            Federal de Psicologia. Em seus últimos anos de vida concluiu o curso de teologia na
            PUC-Minas. Interagia bastante com outro diretor da Faculdade de Psicologia da UFMG, o Prof.
            Antônio Quinan, nosso companheiro de CPPC e um dos conferencistas de nosso Congresso sobre
            Família em Campinas, SP. O CPPC-Belo Horizonte abriu-se a várias colaborações, como a Dra.
            Riva Satovski Schwartzmann, judia, inicialmente psicóloga existencial, depois psicanalista,
            que também nos trouxe uma inesquecível exposição a partir da análise existencial.
          </p>
          <p>
            Em janeiro de 1978 foi realizado o curso Trauma de Nascimento: etiologia, sequelas e
            psicoterapia, ministrado pelo Dr. Frank Lake, da Universidade de Londres, na PUC-São Paulo.
            Dos mais de 120 participantes, apenas 30 eram profissionais identificados com alguma igreja
            evangélica. Outro grande momento que marcou a confluência de objetivos do CPPC e centros
            universitários se deu com o I Congresso Humanístico Existencial-Logoterapia, presidido pela
            colega Izar Xausa (que publicou a primeira obra em português sobre Logoterapia) e entidades
            argentinas de psicologia. Este Congresso, realizado na PUC de Porto Alegre, contou com a
            presença do Dr. Viktor Frankl, o próprio criador da Logoterapia, que pela primeira vez veio
            ao Brasil. Assim introduziu-se a Logoterapia no Brasil, e no momento diversas sociedades de
            formação e cursos de pós-graduação são encontrados.
          </p>
          <p>
            No campo editorial publicamos pequenos cadernos de textos e livros mais voltados para o
            público habituado à leitura bíblica e teológica: Psicologia e Saúde Pastoral e Saúde
            Pastoral e Comunitária — vários colaboradores; Espiritismo, Psicopatologia e Psicoterapia,
            do psiquiatra Ronald Scott Bruno. Posteriormente, numa direção híbrida, os dois títulos do
            Dr. Harold Ellens e temas de suas preleções no Brasil: Graça de Deus e Saúde Humana e
            Psicoteologia: aspectos básicos, pela Editora Sinodal. Outro salto na direção do mundo
            acadêmico foi o valioso livro O Lugar do Sagrado na Terapia, do Carlos Hernández.
          </p>
          <p>
            Nos últimos anos, com a presidência sendo exercida pelo professor de psiquiatria Uriel
            Heckert, o CPPC traz outras contribuições aos círculos acadêmicos. A competente colega
            psicanalista Karin Wondracek traduz o volume que faltava para a edição das obras completas
            de Sigmund Freud em português. Assim o CPPC editou, pela editora Ultimato de Viçosa, MG, o
            livro Cartas Freud-Pfister 1909–1939, lançado em várias capitais, ganhando inclusive uma
            tocante encenação com leituras de trechos desta correspondência entre dois grandes amigos e
            pensadores.
          </p>

          <h2>Interface Teológica</h2>
          <p>
            Junto ao campo teológico, especialmente o protestante ou evangélico, praticamos um
            diálogo que tem se mostrado frutificante. É que o psiquiatra e o psicólogo, como também o
            psicopedagogo, dispondo de instrumental conceitual, de diagnóstico e de intervenção, têm
            muito a contribuir para a saúde emocional de pessoas, famílias e grupos em geral. Mas não é
            sem problemas esta presença de psicólogos/psiquiatras cristãos no meio da imensa
            diversidade de pastores e posturas doutrinárias. Esta mesma vocação e perícia de
            profissionais em lidar com o sofrimento psíquico de pessoas levanta suspeitas de invasão do
            campo religioso, ou é vista como desintegradora de valores dogmáticos. Independente destas
            suspeitas, algumas pontes têm sido construídas, como nos Programas de Aconselhamento
            Pastoral, que se utilizam amplamente de contribuições da psicologia e da medicina.
          </p>
          <p>
            Pastorais de idosos, encontros de casais, cuidados a pessoas portadoras de deficiências,
            sexualidade, crises do ciclo vital, perdas e luto, pastoral carcerária, cuidado de crianças
            e adolescentes em situação de risco, vítimas de abuso sexual e violência, e tantas outras
            áreas críticas para o cuidado pastoral são impensáveis hoje à parte dos recursos
            desenvolvidos pelas ciências. Algumas áreas nobres, como preparação de seminaristas e saúde
            mental de pastores e missionários, deixam de ser tabu e recebem a colaboração de
            profissionais da saúde mental. Algumas questões são mais delicadas do ponto de vista ético
            e doutrinário, e potencialmente explosivas se mal conduzidas; é o caso de movimentos de
            cura divina, cura interior, quebra de maldições hereditárias, que se popularizaram nos
            últimos anos em várias igrejas oriundas do setor pentecostal ou com ênfase
            neo-pentecostal. Um dos pontos a observarmos nestes movimentos é que são apresentados como
            uma psicologia divinamente inspirada e infalível. Algumas se baseiam muito mais na
            demonologia que na Graça de Deus. Geralmente são diretivos nos métodos e desclassificam
            inteiramente o conhecimento da psicologia profissional. Mas alguns dos grupos que
            desenvolvem estas práticas parecem buscar uma aproximação com a psicologia científica e,
            então, pode ser viável uma cooperação produtiva. Alguns colegas, como o Dr. Fábio
            Damasceno, psiquiatra fluminense, têm conseguido, com rara habilidade, captar as demandas
            subjacentes a este movimento e oferecido sua própria contribuição. É alguém oriundo do meio
            pentecostal, ex-dependente de drogas, hoje psiquiatra de renome e pastor. Realmente uma
            interface muito criativa.
          </p>
          <p>
            Um campo de estudo que sugiro ser empreendido é como se situam distintos grupos
            evangélicos e católicos com relação à psicologia e à psiquiatria enquanto ciências e como
            profissões. Empiricamente observo que ocorre uma compreensão e convivência pacífica entre
            os chamados evangelicais e os psicólogos e psiquiatras. Já os conservadores aceitam
            medicação psiquiátrica a contragosto em crises agudas, mas suspeitam e desaconselham a um
            membro da igreja se submeter a psicoterapia. Maior resistência vem de setores pentecostais
            e neo-pentecostais, pois entendem que seria como abandonar o evangelho e desconsiderar a
            ação do Espírito Santo ou descrer do poder da fé. Um membro de igreja assim, quando se vê
            em necessidade ou lhe é recomendado psicoterapia ou análise, sofre intensamente por
            conflito de lealdades.
          </p>
          <p>
            Quando acolhido por um profissional que lhe respeita a orientação religiosa, recebe grande
            alívio e pode crescer interiormente. Comumente mantém silêncio sobre sua frequência a um
            profissional por temor de censura à sua &ldquo;falta de fé&rdquo;. Concluindo esta
            apreciação das relações entre práticas psicológicas e práticas pastorais que encontramos no
            quadro brasileiro, observamos tanto uma relação de ódio e rejeição da psicologia por parte
            de alguns setores quanto a de apaixonamento recente de pastores autodenominados
            psicanalistas.
          </p>
          <p>
            Sobre estes pastores que se dizem psicanalistas clínicos ou psicanalistas ortodoxos, nosso
            Boletim de Psicoteologia publicou duas matérias críticas que antecipou em mais de três anos
            o posicionamento do Conselho Federal de Psicologia e do Fórum Nacional de Entidades de
            Psicanálise, realizado no Rio de Janeiro em 2002. Não temos a pretensão de sermos uma
            espécie de central única de psicólogos e psiquiatras cristãos em nosso país. Certamente,
            por conta de nossas próprias limitações, embora professemos um espírito inclusivo e
            democrático, não conseguimos a aproximação de vários irmãos-colegas aos quais respeitamos.
            Neste aspecto, cada núcleo tem desenvolvido uma história e uma personalidade distinta. Até
            o momento — e espero que para sempre — não sofremos cisões por polarizações ideológicas ou
            hegemonia de uma determinada orientação teórica. Tem prevalecido o espírito fraterno e o
            cumprimento do que ensina o apóstolo Paulo: &ldquo;trazendo cativo a Cristo todo
            pensamento&rdquo;.
          </p>
          <p>
            Mesmo identificando-nos cada um com uma abordagem psicológica, que refletem construções
            epistêmicas distintas, mantemo-nos articulados, organicamente, num corpo. Parece que temos
            sido levados a caminhar com um senso de prudência espiritual — e igualmente científica — de
            relativizarmos cada um dos distintos saberes com os quais trabalhamos, por desejarmos a
            genuína sabedoria que vem da Palavra de Deus.
          </p>
          <p>
            Não sabemos ao certo a extensão do nosso alcance e impacto, seja no meio evangélico, seja
            entre setores católicos e nos ambientes profissionais. É algo incomensurável. E como
            qualquer acontecimento contínuo, presença complexa, e por operarmos no campo simbólico,
            político e cultural, estamos sujeitos a diferentes captações, tantas quantas forem as
            pessoas que se encontram com o CPPC. Cabe-nos assumir uma contínua atitude de humildade
            perante todos e entregar-nos ao Senhor da cultura e da seara, com gratidão pelo muito que
            nos tem dado nestes 27 anos de caminhada.
          </p>
          <p className="text-sm italic text-ink-soft">
            Ageu Heringer Lisboa, abril de 2003. Ageu Lisboa é um dos fundadores do CPPC e seu primeiro
            presidente. Hoje integra o Conselho Consultivo do CPPC.
          </p>
        </div>
      </Container>
    </>
  );
}
