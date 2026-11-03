/**
 * Endereço-base do site. Vem de NEXT_PUBLIC_SITE_URL (definida na Vercel), para que
 * canonical, Open Graph, sitemap e robots.txt acompanhem a troca de domínio sem
 * alteração de código. Hoje: https://cppc.softaliza.com.br — no dia da migração do
 * domínio basta trocar a variável para https://cppc.org.br.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://cppc.softaliza.com.br"
).replace(/\/+$/, "");

/**
 * Enquanto o site está no endereço provisório, respondemos noindex (header
 * X-Robots-Tag em next.config.ts + meta robots) para o Google não indexar
 * cppc.softaliza.com.br como cópia do site de verdade.
 * Desligar no dia da migração: NEXT_PUBLIC_NOINDEX=false.
 */
export const noIndex = process.env.NEXT_PUBLIC_NOINDEX !== "false";

/**
 * Plataforma de associados (Assocializa). Esta única página reúne os planos
 * ("Escolha seu plano") e o formulário de login ("Já é associado? Faça login abaixo"),
 * por isso serve tanto para "Associe-se" quanto para "Fazer login" / "Portal do associado".
 * Não existe /login/cppc no Assocializa (404).
 */
export const ASSOCIALIZA_CPPC = "https://assocializa.com.br/cppc";

export const siteConfig = {
  name: "CPPC",
  fullName: "Corpo de Psicólogos e Psiquiatras Cristãos",
  description:
    "Associação brasileira, sem fins lucrativos, de caráter cultural, teológico e científico, que agrega profissionais e estudantes da área de saúde mental.",
  url: siteUrl,
  email: "secretaria@cppc.org.br",
  phone: "(51) 98191-0407",
  address: {
    full: "SGAN 608, Lote F, Sala 326 — Brasília/DF, CEP 70850-080",
    street: "SGAN 608, Lote F, Sala 326",
    city: "Brasília",
    state: "DF",
    postalCode: "70850-080",
  },
  social: {
    facebook: "https://www.facebook.com/cppcbrasil/?ref=br_rs",
    instagram: "https://www.instagram.com/cppcbrasil/",
    x: "https://x.com/cppcbrasil",
  },
  /** Associe-se, Fazer login e Portal do associado — todos apontam para cá. */
  memberPortal: ASSOCIALIZA_CPPC,
  /** Busca pública de profissionais: ainda não existe no Assocializa (404 lá). */
  memberSearch: "https://associacoes.softaliza.com.br/busca_de_profissionais/cppc",
  congressoSite: "https://congressonacionalcppc.com.br/",
  /** Imagem padrão de Open Graph (1200x630). */
  ogImage: "/og-cppc.png",
};

export const cremos: string[] = [
  "Na soberania de Deus, criação e propósito de redenção;",
  "Em Jesus Cristo, Deus encarnado, Senhor e Salvador;",
  "Na atuação do Espírito Santo gerando nova vida;",
  "Na Igreja, como Corpo de Cristo e comunidade terapêutica;",
  "Na verdade, seja ela bíblica ou científica, como provinda de Deus.",
];

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Institucional",
    href: "/quem-somos",
    children: [
      { label: "Quem Somos", href: "/quem-somos" },
      { label: "Organização", href: "/organizacao" },
      { label: "Diretoria", href: "/diretoria" },
      { label: "Estatuto", href: "/estatuto" },
      { label: "Conduta Ética", href: "/conduta-etica" },
      { label: "Assessorias", href: "/assessorias" },
      { label: "Membros Plenos", href: "/membros-plenos" },
    ],
  },
  { label: "Núcleos Regionais", href: "/nucleos-regionais" },
  {
    label: "Associados",
    href: "/seja-um-associado",
    children: [
      { label: "Nossos Membros", href: "/nossos-membros" },
      { label: "Seja um Associado", href: "/seja-um-associado" },
    ],
  },
  {
    label: "Publicações",
    href: "/revista",
    children: [
      { label: "Bíblia Conselheira", href: "/biblia-conselheira" },
      { label: "Revista PsicoTeo", href: "/revista" },
      { label: "Artigos", href: "/artigos" },
      { label: "Teses", href: "/teses" },
      { label: "Livros", href: "/livros" },
      { label: "DVDs", href: "/dvds" },
      { label: "Boletins", href: "/boletins" },
      { label: "Notas de Falecimentos", href: "/notas-de-falecimentos" },
    ],
  },
  { label: "Memórias", href: "/memorias" },
  { label: "Eventos", href: "/eventos" },
  { label: "Notícias", href: "/noticias" },
  { label: "Documentos Norteadores", href: "/documentos-norteadores" },
  { label: "Contato", href: "/contato" },
];

export const condutaEtica: string[] = [
  "Respeitarei a dignidade, o valor e os direitos de cada indivíduo, casal ou família que me procure para um atendimento.",
  "Respeitarei a autodeterminação de cada ser humano e me oporei a toda opressão física, psicológica e social, incluindo qualquer forma de discriminação psicológica, cultural, econômica, sexual ou religiosa.",
  "Iniciarei e prosseguirei uma relação terapêutica somente quando tenha a idoneidade acadêmica e legal para este fim e tenha o desejo de cumprir com minhas obrigações contratadas com indivíduo, casal, família ou grupo que me procure para atendimento.",
  "Procurarei, em todas as minhas atividades, maximizar a autonomia e a cooperação dos consultantes, buscando sempre otimizar o crescimento físico, mental, social e espiritual dos mesmos.",
  "Manterei minha confiança na capacidade dos consultantes de alcançarem seu crescimento e, assumindo a responsabilidade do impacto de minha intervenção, manejarei a dependência eventualmente criada de uma maneira que não os prejudique.",
  "Evitarei iniciar ou continuar uma relação terapêutica com o indivíduo, casal, família ou grupo, quando exista justificativa para crer que outras relações ou atividades com esse consultante poderão prejudicar o processo terapêutico. Proverei um ambiente profissional adequado, que inclua o sigilo, a reserva e a segurança física e psicológica necessárias para o consultante, a fim de não causar dor desnecessária, nem ao consultante nem às suas redes sociais.",
  "Tratarei os colegas de maneira profissional, responsável e respeitosa.",
  "Ao tomar consciência de alguma interferência no idôneo desempenho de minhas funções como terapeuta, terminarei qualquer relação profissional de forma a não prejudicar a saúde integral do consultante. Pautarei minha vida pessoal e profissional nos valores do evangelho de nosso Senhor Jesus Cristo, que incluem principalmente o serviço ao meu semelhante e um estilo de vida simples, despojado e em prol dos menos favorecidos.",
];
