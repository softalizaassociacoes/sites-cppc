export interface Nucleo {
  cidade: string;
  contato?: string;
  telefone?: string;
  email?: string;
}

export interface Region {
  slug: string;
  name: string;
  states: string;
  vicePresidente?: { name: string; local?: string };
  nucleos: Nucleo[];
  emBreve?: boolean;
}

export const regions: Region[] = [
  {
    slug: "norte",
    name: "Norte",
    states: "AC, AP, AM, PA, RO, RR, TO",
    nucleos: [],
    emBreve: true,
  },
  {
    slug: "nordeste",
    name: "Nordeste",
    states: "AL, BA, CE, MA, PB, PE, PI, RN, SE",
    nucleos: [],
    emBreve: true,
  },
  {
    slug: "centro-oeste",
    name: "Centro-Oeste",
    states: "DF, GO, MT, MS",
    vicePresidente: { name: "Elisa Mara Silveira Fernandes Leão", local: "DF" },
    nucleos: [
      { cidade: "Brasília (DF)", contato: "Elisa Mara Silveira Fernandes Leão", telefone: "(62) 9 8188-1115", email: "professoraelisaleao@gmail.com" },
      { cidade: "Goiânia (GO)", contato: "Leonardo Freire Machado", telefone: "(62) 9 8129-8841", email: "goianiacppc@gmail.com" },
      { cidade: "Campo Grande (MS)", contato: "Mirian de Oliveira Pereira Exel M. Andrade", telefone: "(67) 9 9677-5505", email: "marminic@terra.com.br" },
      { cidade: "Palmas (TO)", contato: "Miriam de Jesus e Ávila", telefone: "(63) 9 9964-7448", email: "mi.avila@yahoo.com.br" },
    ],
  },
  {
    slug: "sudeste",
    name: "Sudeste",
    states: "MG, RJ, ES",
    nucleos: [],
    emBreve: true,
  },
  {
    slug: "sao-paulo",
    name: "São Paulo",
    states: "SP",
    vicePresidente: { name: "Abner Morilla", local: "SP" },
    nucleos: [
      { cidade: "Campinas (SP)", contato: "Margarete Bonuccelli Lisboa", telefone: "(19) 9 8115-3780", email: "bonuccelli@bol.com.br" },
      { cidade: "Guarulhos (SP)", contato: "Margarete Bonuccelli Lisboa", telefone: "(19) 9 8115-3780", email: "bonuccelli@bol.com.br" },
      { cidade: "Baixada Santista (SP)", contato: "Luis Antonio Pereira", telefone: "(13) 9 9713-0004", email: "kelujo62@gmail.com" },
      { cidade: "Baixada Santista (SP) — Secretaria", contato: "Elvira Batista Rodrigues", telefone: "(13) 9 9711-0553 / (13) 3232-1659", email: "ebrodrigues2411@gmail.com" },
      { cidade: "SP / Bauru (SP)", contato: "Cláudio Marcio Salviano", telefone: "(14) 3227-3715 / (14) 9 9793-9552", email: "secretariapsicologosalviano@gmail.com" },
      { cidade: "SP / Marília (SP)", contato: "Rodrigo Cesar Vieira", telefone: "(14) 9 8818-3672", email: "rodcvieira@yahoo.com.br" },
      { cidade: "SP / Osasco (SP)", contato: "Elaine Gomes Ventura", telefone: "(11) 3683-0299 / (11) 9 9137-6000", email: "elainegomes.psi@gmail.com" },
    ],
  },
  {
    slug: "sul",
    name: "Sul",
    states: "RS, SC, PR",
    vicePresidente: { name: "Julise Alves Dornelles Savalhia", local: "PR" },
    nucleos: [
      { cidade: "Porto Alegre (RS)", contato: "Elmer Erico", email: "elmerlink@gmail.com" },
      { cidade: "Planalto Médio (RS)", contato: "Elisabete Wondracek", telefone: "(55) 3375-2105 / (55) 9 8452-2105", email: "betiwondracek@hotmail.com" },
      { cidade: "Florianópolis (SC)", contato: "Clarice Ribeiro da Rosa Santos", telefone: "(48) 3028-2039 / (48) 9 9902-9519", email: "claricedarosa@gmail.com" },
      { cidade: "Blumenau (SC)", contato: "Eduardo Schütz", email: "eduardo@schutz.psc.br" },
      { cidade: "Joinville (SC)", contato: "Ingrid Bayer Costa", telefone: "(47) 9 8409-1151", email: "ingridbayercosta@gmail.com" },
      { cidade: "Curitiba (PR)" },
      { cidade: "Londrina (PR)", contato: "Luis Gonçalo Silvério", telefone: "(43) 9 9921-9746", email: "lgsilverio@gmail.com" },
      { cidade: "Cascavel (PR)", contato: "Julise Alves Dornelles Savalhia", telefone: "(45) 9 9959-5551", email: "juliseads@gmail.com" },
      { cidade: "Caxias do Sul (RS)", contato: "Maria Marlene Faria", telefone: "(54) 9 9236-9775", email: "mariamarlenepsico@gmail.com" },
      { cidade: "Santo Ângelo (RS)", contato: "Carlise Tieser Kaser", telefone: "(55) 9677-4228", email: "carlisekaser@gmail.com" },
    ],
  },
];
