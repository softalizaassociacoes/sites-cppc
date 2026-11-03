export interface Assessoria {
  title: string;
  responsavel: string;
  email?: string;
}

/** Ordem e dados conforme https://cppc.org.br/assessorias/ (conferido em 03/11/2026). */
export const assessorias: Assessoria[] = [
  { title: "Assessoria Universitária", responsavel: "Renata Oliveira Sampaio Homem / Giovana Machado", email: "psi.renatahomem@yahoo.com.br" },
  { title: "Assessoria Institucional", responsavel: "Dr. Uriel Heckert", email: "urielheck@gmail.com" },
  { title: "Assessoria Científica", responsavel: "Dra. Fátima Fontes", email: "fatima@pobox.com" },
  { title: "Assessoria Científica", responsavel: "Dr. Rogério Zimpel", email: "rogerio.zimpel@gmail.com" },
  { title: "Assessoria de Redes Sociais", responsavel: "Guilherme Falcão", email: "guil.falcao@gmail.com" },
  { title: "Assessoria Internacional", responsavel: "Zenon Lotufo", email: "zenonjr@uol.com.br" },
  { title: "Assessoria Internacional", responsavel: "Roseli Kühnrich Oliveira", email: "renovatium@gmail.com" },
  { title: "Assessoria Teológica", responsavel: "Luis Gonçalo Silvério", email: "lgsilverio@gmail.com" },
];
