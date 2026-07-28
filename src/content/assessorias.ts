export interface Assessoria {
  title: string;
  responsavel: string;
  email?: string;
}

export const assessorias: Assessoria[] = [
  { title: "Assessoria Universitária", responsavel: "Renata Oliveira Sampaio Homem / Giovana Machado", email: "psi.renatahomem@yahoo.com.br" },
  { title: "Assessoria Institucional", responsavel: "Dr. Uriel Heckert", email: "urielheck@gmail.com" },
  { title: "Assessoria Científica", responsavel: "Dra. Fátima Fontes", email: "fatima@pobox.com" },
];
