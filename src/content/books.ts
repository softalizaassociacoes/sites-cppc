export interface Book {
  title: string;
  image: string | null;
  author: string | null;
  link: string | null;
  description: string | null;
  /** Segundo link do card, quando o site antigo tinha um ("Confira o vídeo"). */
  videoUrl?: string;
}

export const books: Book[] = [
  {
    "title": "Relação pais e filhos e desenvolvimento mental de crianças",
    "image": "/uploads/2025/01/71JDfD2hKuL._UF8941000_QL80_.jpg",
    "author": null,
    "link": null,
    "description": "O livro “Relação pais e filhos e desenvolvimento mental de crianças”, da Psicóloga e Psicanalista Andréia Leite,foi lançado recentemente."
  },
  {
    "title": "Cuidado Pastoral em Tempos de Insegurança",
    "image": "/uploads/2025/01/cuidadopastoral.jpg",
    "author": null,
    "link": null,
    "description": "“Quatro maneiras diferenciadas de analisar os problemas do ministério em nosso tempo (…) A primeira representa a condição de um mundo que sofre; a segunda a condição de uma geração que sofre;"
  },
  {
    "title": "Onde está Deus em um Mundo com o Coronavírus",
    "image": "/uploads/2025/01/61tl7lZyc8L._AC_UF10001000_QL80_.jpg",
    "author": "John Lennox",
    "link": null,
    "description": "Lançamento do e-book “Onde está Deus em um Mundo com o Coronavírus?”"
  },
  {
    "title": "Eixos da Vida",
    "image": "/uploads/2025/01/eixosdavida-600x804-1.jpeg",
    "author": null,
    "link": null,
    "description": "O livro Eixos da vida, desenho de uma teoria da engenharia do comportamento apresenta um novo olhar sobre o comportamento humano, pressupondo conceitos da física. Uma leitura ideal para o público em geral e em especial para aqueles que têm peculiar interesse nas relações humanas."
  },
  {
    "title": "Quando a dor se torna insuportável",
    "image": "/uploads/2025/01/61yHog0DlLL._AC_UF10001000_QL80_.jpg",
    "author": "Carlos “Catito” Grzybowski",
    "link": null,
    "description": null
  },
  {
    "title": "Bíblia de Estudo Conselheira",
    "image": "/uploads/2025/01/images-3.jpg",
    "author": null,
    "link": "http://www.sbb.com.br",
    "description": "Conheça a versão completa da Bíblia de Estudo Conselheira! Todos os estudos da publicação foram elaborados por um grupo de conceituados psicólogos e psiquiatras cristãos.",
    "videoUrl": "https://www.instagram.com/tv/Bx24m3hAcKw/"
  },
  {
    "title": "Vencendo o silêncio da alma",
    "image": "/uploads/2025/01/46687792_366864567401381_7460872098835656596_n-600x600-1.jpg",
    "author": null,
    "link": null,
    "description": "Sob o olhar de uma psicóloga que é cristã, “Vencendo o silêncio da alma” trata de assuntos delicados que raramente chegam ao púlpito das igrejas, mas estão presentes na vida dos cristãos: depressão, transtorno de ansiedade, bipolaridade, pensamentos suicidas etc."
  },
  {
    "title": "ABA, PAI – Aprendendo com seu filho sobre o Pai do céu",
    "image": "/uploads/2025/01/ab-pai_c-WP.jpg",
    "author": "Karl Kepler, ilustr. de Wilson Tonioli",
    "link": "http://www.livrariagrafar.com.br/ebook/aba-pai-e.html",
    "description": null
  },
  {
    "title": "COMO SE LIVRAR DE UM MAU CASAMENTO",
    "image": "/uploads/2025/01/003058_Ampliada-1024x1024-1.jpg",
    "author": "Carlos Catito Grzybowski",
    "link": "http://www.eirene.com.br/",
    "description": null
  },
  {
    "title": "Aprendendo a LIDAR COM CRISES",
    "image": "/uploads/2025/01/002751_Detalhes.jpg",
    "author": "Karin Wondracek – Carlos Hernandez",
    "link": "http://www.editorasinodal.com.br/",
    "description": null
  },
  {
    "title": "APRENDENDO A LIDAR COM O ESTRESSE",
    "image": "/uploads/2025/01/o-estresse-683x1024-1.jpg",
    "author": "Rogério R. Zimpel",
    "link": "http://www.editorasinodal.com.br/",
    "description": null
  },
  {
    "title": "CASAMENTOS SAUDÁVEIS",
    "image": "/uploads/2025/01/Capa-3d.png",
    "author": "RICARDO BRANDÃO MACHADO",
    "link": "http://www.familiassaudaveis.com.br",
    "description": null
  },
  {
    "title": "LEIAMOS A BÍBLIA – Uma Jornada interior",
    "image": "/uploads/2025/01/capalivro_hernandez0001-675x1024-1.jpg",
    "author": "Carlos José Hernandez",
    "link": null,
    "description": null
  },
  {
    "title": "NEUROSES ECLESIÁSTICAS e o Evangelho para Crentes",
    "image": "/uploads/2025/01/AE_131405.jpg",
    "author": "KARL KEPLER",
    "link": "http://www.arteeditorial.com.br/",
    "description": null
  },
  {
    "title": "O amor e seus destinos: a contribuição de Oskar Pfister para o diálogo entre teologia e psicanálise",
    "image": "/uploads/2025/01/amor_destinos_capa.jpg",
    "author": "Karin Hellen Kepler Wondracek",
    "link": "http://www.editorasinodal.com.br/produto/96368/o-amor-e-seus-destinos",
    "description": null
  },
  {
    "title": "O CAMINHO DA SABEDORIA NO ACONSELHAMENTO PASTORAL",
    "image": "/uploads/2025/01/Livro_Daniel-Schipani_Livro.jpg",
    "author": "Daniel Schipani",
    "link": "http://www.editorasinodal.com.br/",
    "description": null
  },
  {
    "title": "O LUGAR DO SAGRADO NA TERAPIA",
    "image": "/uploads/2025/01/2dce2427aff45c2c318afa7d6b81607e20f0f34f.jpg",
    "author": "Carlos José Hernandez",
    "link": null,
    "description": null
  },
  {
    "title": "Perdão: onde saúde e espiritualidade se encontram",
    "image": "/uploads/2025/01/perdao.png",
    "author": "Karin K. Wondracek, Maria Aparecida da Silveira Brígido, Nilton E. Herbes, Thomas Heimann",
    "link": "https://www.editorasinodal.com.br/produto/791926/perdao-onde-saude-e-espiritualidade-se-encontram",
    "description": null
  },
  {
    "title": "PAIS SAUDÁVEIS, FILHOS SAUDÁVEIS",
    "image": "/uploads/2025/01/Capa-livro-Pais-665x1024-1.jpg",
    "author": "RICARDO BRANDÃO MACHADO",
    "link": "http://www.familiassaudaveis.com.br",
    "description": null
  },
  {
    "title": "PSICOLOGIA & CRISTIANISMO",
    "image": "/uploads/2025/01/51VNfeUOjWL._AC_UF10001000_QL80_.jpg",
    "author": "Samuel Costa",
    "link": "http://www.editorasilvacosta.com.br",
    "description": null
  },
  {
    "title": "RELIGIOSIDADE e PSICOTERAPIA",
    "image": "/uploads/2025/01/656556.jpg",
    "author": "Claudia Bruscagin , Adriana Sávio, Fátima Fontes, Denise Mendes Gomes",
    "link": null,
    "description": "Adquirir: Livrarias Saraiva e Submarino"
  },
  {
    "title": "Psicologia Pastoral",
    "image": "/uploads/2025/01/32.jpg",
    "author": "Samuel Costa",
    "link": "http://www.editorasilvacosta.com.br",
    "description": null
  },
  {
    "title": "Sexo: espiritualidade, instinto e cultura",
    "image": "/uploads/2025/01/images-2.jpg",
    "author": "Ageu Heringer Lisboa",
    "link": "http://www.ultimato.com.br",
    "description": null
  },
  {
    "title": "Raiva: seu bem, seu mal",
    "image": "/uploads/2025/01/383_g_Raiva-copia-1.jpg",
    "author": "Esther Carrenho",
    "link": "http://www.editoravida.com.br/",
    "description": null
  },
  {
    "title": "RESSURREIÇÃO INTERIOR – Celebrando a alegria de Viver",
    "image": "/uploads/2025/01/download.jpeg",
    "author": "Esther Carrenho",
    "link": "http://www.editoravida.com.br/",
    "description": null
  },
  {
    "title": "Um país chamado Jeitoso",
    "image": "/uploads/2025/01/jeitoso_c-WP-2.jpg",
    "author": "JAIRO MIRANDA",
    "link": "http://www.editoragrafar.com.br",
    "description": null
  },
  {
    "title": "Um olhar nos espelhos da culpa",
    "image": "/uploads/2025/01/8-1-1.png",
    "author": "WONDRACEK, Karin H. K; HEIMANN, Thomas; HOCH, Lothar Carlos (org.)",
    "link": "http://www.editorasinodal.com.br/produto/331821/um-olhar-nos-espelhos-da-culpa",
    "description": null
  },
  {
    "title": "Sombras da alma: tramas e tempos da depressão",
    "image": "/uploads/2025/01/Sombras-da-alma-1.jpg",
    "author": "WONDRACEK, Karin H. K; HOCH, Lothar Carlos; HEIMANN, Thomas; (org.)",
    "link": "https://www.editorasinodal.com.br/produto/96124/sombras-da-alma-tramas-e-tempos-da-depressao",
    "description": null
  }
];
