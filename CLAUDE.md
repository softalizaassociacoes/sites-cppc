# CPPC — Corpo de Psicólogos e Psiquiatras Cristãos

Site institucional da CPPC em Next.js (App Router, Tailwind v4), publicado na Vercel
no projeto **`sites-cppc`** (time `softaliza`). Push na `main` publica em produção.

- Endereço provisório: <https://cppc.softaliza.com.br>
- Endereço definitivo (após a migração): <https://cppc.org.br>
- Site antigo em WordPress: <https://cppc.org.br> (até a troca do DNS)

Todo o conteúdo é estático, migrado do WordPress e versionado no repositório.
Não há banco de dados nem CMS.

---

## Como o conteúdo está organizado

| Onde | O que guarda |
|---|---|
| `src/content/posts.json` | Os 130 posts do WordPress (notícias, revista, teses, memórias, boletins, bíblia conselheira, livros), com `bodyHtml` já reescrito para caminhos locais |
| `src/content/site.ts` | Endereço-base, e-mail, telefone, redes, **links da plataforma de associados**, navegação |
| `src/content/regions.ts` | Núcleos regionais e contatos |
| `src/content/books.ts`, `team.ts`, `members.ts`, `assessorias.ts` | Listas das páginas de Livros, Diretoria, Membros Plenos e Assessorias |
| `src/content/legacy-media-redirects.json` | Mídia do WordPress que mudou de caminho (gerado, ver abaixo) |
| `public/softaliza-logobranca.png` | Logo da Softaliza no rodapé (versão branca, para o fundo verde escuro) |
| `public/uploads/AAAA/MM/` | Imagens e PDFs, no mesmo caminho que tinham no WordPress (sem o `/wp-content`) |

**Regra:** nenhuma URL externa é digitada dentro de uma página. Tudo que é endereço
(plataforma de associados, redes, congresso) vive em `src/content/site.ts`.

---

## Decisões registradas

### Plataforma de associados — Assocializa

Todos os links de associação apontam para **`https://assocializa.com.br/cppc`**,
pela constante `ASSOCIALIZA_CPPC` / `siteConfig.memberPortal` em `src/content/site.ts`.

Essa única página reúne os planos (*"Escolha seu plano"*) **e** o formulário de login
(*"Já é associado? Faça login abaixo"*), então serve para os três casos: "Associe-se",
"Fazer login" e "Portal do associado". **Não existe `https://assocializa.com.br/login/cppc`**
(404) — não inventar um endereço de login.

Endereços antigos que **não** foram trocados, porque são outro caminho e não têm
equivalente no Assocializa:

- **Diretório de profissionais** (`siteConfig.memberSearch`), embutido em
  `/nossos-membros`: segue em `associacoes.softaliza.com.br/busca_de_profissionais/cppc`.
  O endereço equivalente no Assocializa **ainda não existe** — conferido em 03/11/2026:
  `assocializa.com.br/busca_de_profissionais/cppc` dá 404, e `assocializa.com.br/cppc/membros`
  também. O padrão da plataforma é `/{associação}/membros/{pessoa}` (a ABRADEP, por
  exemplo, tem ~700 dessas no sitemap do Assocializa), ou seja, falta publicar o
  diretório da CPPC lá. **Assim que estiver publicado, é só trocar `memberSearch`** —
  uma linha em `src/content/site.ts`.
- **Inscrição do evento Diálogos Literários**, em `src/app/eventos/page.tsx`:
  `associacoes.softaliza.com.br/evento/diálogos-literários`. Decidido manter.

### Contato

O e-mail correto é **`secretaria@cppc.org.br`**. O WordPress antigo mostrava
`cppcbrasiloficial@gmail.com` na página de contato; esse endereço **não entra** no site novo.
Telefone: (51) 98191-0407. Endereço: SGAN 608, Lote F, Sala 326 — Brasília/DF,
CEP 70850-080, que aparece no rodapé e no JSON-LD `Organization` (`PostalAddress`).
Tudo sai de `src/content/site.ts`.

### Conteúdo que ficou de fora de propósito

O tema do WordPress foi copiado de outra associação (SBCS — Sociedade Brasileira de
Ciência do Solo) e sobraram páginas com conteúdo alheio. **Nada disso foi migrado:**

| Página do WordPress | Por quê |
|---|---|
| `/certificados/` | Vazia (só o título) |
| `/em-breve/` | Vazia (só o título) |
| `/proximos-eventos/` | Congresso Brasileiro de Ciência do Solo, RCC-Bahia — SBCS |
| `/eventos-anteriores/` | RBMCSA, Simpósio Mineiro de Ciência do Solo, IUSS — SBCS |
| `/galeria-de-homenageados/` | Estatuto da SBCS, Prêmio Antonio Carlos Moniz — SBCS |

### Conferência contra o site antigo (03/11/2026)

A base de conteúdo é o <https://cppc.org.br>. A comparação foi refeita contra as
**páginas renderizadas** do WordPress, e não contra `content.rendered` da API: as
páginas são feitas em Elementor, e o `<main id="content">` do HTML é o que vale.

- **130 notícias: completas.** As únicas diferenças são o título repetido dentro do
  corpo pelo Elementor, que no site novo virou o `<h1>` da página.
- **34 páginas comparadas frase a frase.** Foram encontradas e corrigidas estas
  perdas da migração:

| Página | O que faltava |
|---|---|
| `/assessorias` | **5 das 8 assessorias**: Científica (Dr. Rogério Zimpel), Redes Sociais (Guilherme Falcão), Internacional (Zenon Lotufo), Internacional (Roseli Kühnrich Oliveira) e Teológica (Luis Gonçalo Silvério) |
| `/quem-somos` | 4 parágrafos: o da unidade harmônica, o do espaço acolhedor, o da divulgação de publicações dos associados e o do espaço de interlocução |
| `/seja-um-associado` | O parágrafo sobre o membro pleno designado pela diretoria para o acompanhamento |
| `/organizacao` | A frase "Fiquei assustado, mas meu pai participou da conversa com os agentes, me tranquilizando" |
| `/nucleos-regionais/sao-paulo` | A secretaria do núcleo da Baixada Santista (Elvira Batista Rodrigues) |
| `/nossos-membros` | O botão "Abrir a busca em tela cheia" para telas estreitas (mudança do WordPress de 14/09/2026) |
| `/livros` | O segundo link do card da Bíblia de Estudo Conselheira ("Confira o vídeo") |

O restante das diferenças que a comparação aponta é reescrita da migração (numeração
dos requisitos, acentuação, "PsicoTeo" no lugar de "Psicoteo (Psicoteologia)"), com o
conteúdo preservado. A única omissão deliberada é o `cppcbrasiloficial@gmail.com` da
página de contato, substituído por `secretaria@cppc.org.br`.

Para repetir a conferência: baixar `https://cppc.org.br/<slug>/` de cada página, extrair
o texto de dentro de `<main id="content">` e comparar com o `innerText` do `<main>` da
rota equivalente no site novo.

### Imagens de terceiros

O conteúdo do WordPress foi montado a partir da Wayback Machine, e os corpos de algumas
notícias ficaram com imagens servidas pelo `web.archive.org`. Foram **removidas** as cinco
cuja origem está morta (`static.ricmais.com.br` e `782447.smushcdn.com` não respondem mais;
o botão de download do próprio CPPC dava 404 e ainda estava dentro de um link morto).

**Seguem apontando para o `web.archive.org`** cinco imagens de `vyaestelar.com.br`, em
`covid-19-a-dor-de-nao-poder-dizer-adeus-aos-nossos-mortos` e
`covid-19-como-ser-vetor-de-transmissao-positiva-escrito-por-fatima-fontes`. O arquivo
original saiu do ar (404 em `vyaestelar.com.br`) e o `web.archive.org` é bloqueado pela
política de rede do ambiente de nuvem, então não dá para baixá-las de dentro de uma
sessão. Para resolver: liberar `web.archive.org` nas configurações de rede do ambiente,
ou baixar as imagens à mão e colocá-las em `public/uploads/`.

Da mesma forma, boa parte da mídia do WordPress (`/wp-content/uploads/2023/*` e
`2024/01`–`2024/11`, ~1.180 arquivos: Boletim SBCS, Estatuto 2023, logo-sbcs…) é da SBCS
e **não** foi copiada. Essas URLs devem mesmo responder 404 no site novo.

### Páginas publicadas sem conteúdo

Três páginas existem na navegação mas ainda não têm conteúdo (no WordPress também não
têm — todas dizem "Em Breve"). **As rotas ficam**, para quem tiver o link antigo não
cair em 404, mas enquanto estiverem vazias elas respondem 200 **fora do sitemap e com
`noindex`**, via `hidden: true` em `pageMetadata()`:

- `/galeria-de-homenageados`
- `/documentos-norteadores`
- `/notas-de-falecimentos`

As regiões sem núcleos cadastrados (`norte`, `nordeste`, `sudeste`) seguem a mesma regra.

No caso da **Galeria de Homenageados**, não existe conteúdo da CPPC em lugar nenhum
para preenchê-la: a única página com esse nome, no WordPress, traz os sócios honorários
e o Prêmio Antonio Carlos Moniz **da SBCS**. Falta a CPPC mandar a lista dos próprios
homenageados.

Quando o conteúdo chegar, basta tirar o `hidden: true` e acrescentar a rota em
`staticRoutes`, em `src/app/sitemap.ts`.

---

## Indexação

### Endereço-base e noindex por variável de ambiente

Definidas na Vercel (produção, preview e desenvolvimento):

| Variável | Hoje | No dia da migração |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://cppc.softaliza.com.br` | `https://cppc.org.br` |
| `NEXT_PUBLIC_NOINDEX` | `true` | `false` |

`NEXT_PUBLIC_SITE_URL` alimenta canonical, Open Graph, `sitemap.xml` e `robots.txt`
(`siteUrl` em `src/content/site.ts`).

`NEXT_PUBLIC_NOINDEX=true` faz o site responder `X-Robots-Tag: noindex, nofollow`
(em `next.config.ts`) e `<meta name="robots" content="noindex,nofollow">`
(em `src/app/layout.tsx`), para o Google não indexar o endereço provisório como cópia
do site de verdade. O `robots.txt` continua liberando o rastreamento de propósito: o
Google só enxerga o `noindex` se puder buscar a página.

**Nenhum dos dois exige alteração de código.** Trocar a variável e republicar basta.

### O que cada página tem

- `<link rel="canonical">` em todas as páginas
- `<title>` e meta description próprios por página
- Open Graph e Twitter Card com imagem `public/og-cppc.png` (1200×630)
- JSON-LD `Organization` + `WebSite` na home
- JSON-LD `Article` nas páginas de notícia, revista, teses, memórias, boletins e bíblia conselheira

### Acessibilidade

Lighthouse no celular: **acessibilidade e SEO 100** nas dez páginas medidas. Três coisas
precisaram de ajuste, nenhuma delas mexendo no desenho aprovado:

- Os links de rede social do rodapé têm o texto visível ("f", "ig", "x") repetido num
  `<span className="sr-only">`, porque o nome acessível precisa conter o texto visível.
- Os títulos de card em listagens são `h2`, não `h3`: vindo logo depois do `h1` da página,
  um `h3` pularia um degrau. O `PostCard` tem a prop `headingLevel` para os casos em que
  o card está dentro de uma seção que já tem `h2` (a home).
- `--color-accent-600` foi escurecido de `#a5762c` para `#8a6325`, para o dourado dos
  textos pequenos passar no contraste 4.5:1 da WCAG AA nos quatro fundos claros do site.
  Essa cor é usada só como cor de texto, nunca como fundo.

Tudo isso vem dos helpers de `src/lib/seo.tsx`: `pageMetadata()`, `articleMetadata()`,
`organizationJsonLd()`, `articleJsonLd()`, `<JsonLd>`.

Ao criar uma página nova: usar `pageMetadata({ title, description, path })` e
acrescentar a rota em `src/app/sitemap.ts`.

### Redirects do WordPress

`src/lib/legacyRedirects.mjs` gera o mapa, lido por `next.config.ts`. São **488 URLs
antigas** (977 entradas, cada uma com e sem barra final), todas com **301** e destino que
responde 200:

- 130 posts `/AAAA/MM/DD/slug/` → `/noticias/slug`, `/revista/slug`, `/teses/slug`,
  `/memorias/slug`, `/boletins/slug`, `/biblia-conselheira/slug` (o post da categoria
  "livros" vai para `/livros`, que é onde ele aparece)
- os `/feed/` de cada post
- 20 páginas que mudaram de endereço (`/sul/` → `/nucleos-regionais/sul`, `/home/` → `/`…)
- 10 arquivos de categoria, com `/page/N/` e `/feed/`
- `/tag/*`, `/author/*`, `/feed/*`, `/comments/feed`
- 170 arquivos de mídia que mudaram de nome (miniaturas `-LARGxALT` cujo original está
  no site novo, e o PDF do estatuto) — em `src/content/legacy-media-redirects.json`
- `/wp-content/uploads/*` → `/uploads/*`
- `/wp-sitemap*.xml`, `/sitemap_index.xml` → `/sitemap.xml`
- `/produto/*`, `/categoria-produto/*` (loja WooCommerce desativada)
- arquivos por data: `/AAAA/`, `/AAAA/MM/`, `/AAAA/MM/DD/`

Duas particularidades do `next.config.ts`, ambas propositais:

1. **`statusCode: 301`** e não `permanent: true` — o Next emite 308 para `permanent`,
   e a combinação com a CPPC é 301.
2. **`skipTrailingSlashRedirect: true`** — sem isso o Next normalizaria a barra final
   com um 308 **antes** de olhar os redirects, e cada URL antiga responderia 308 + 301.
   O último redirect da lista (`/:path+/` → `/:path+`) faz o papel da normalização, como 301.

Posts novos entram no mapa sozinhos (ele é derivado de `posts.json`). Páginas novas
que substituam um endereço antigo precisam de uma linha em `pageMap`.

---

## Roteiro da migração do domínio `cppc.org.br`

> **O e-mail `@cppc.org.br` não pode ser tocado.** Ele roda na KingHost
> (`mx-vip-01.kinghost.net` e `mx-vip-02.kinghost.net`, prioridade 5) com
> `v=spf1 include:_spf.kinghost.net -all`. Na migração mudam **somente** os registros
> do site: o `A` do apex e o `A` do `www`. **Não mexer em MX, SPF, DKIM nem DMARC.**

Estado de hoje (03/11/2026), conferido no DNS público:

| Registro | Valor atual |
|---|---|
| NS | `vita.ns.cloudflare.com`, `gabe.ns.cloudflare.com` → **o DNS é gerenciado na Cloudflare** |
| `cppc.org.br` A | `66.94.113.19` (servidor do WordPress, nginx) |
| `www.cppc.org.br` A | `66.94.113.19` — hoje responde 301 para o apex |
| MX | `mx-vip-01.kinghost.net`, `mx-vip-02.kinghost.net` (prioridade 5) |
| TXT | `v=spf1 include:_spf.kinghost.net -all` |
| TXT | `google-site-verification=Sb1UbPkCFcUU30L7Sn0p6nOPxTT7xfWRvaTs5T8n1kc` |
| `_dmarc` | **não existe** |

### Passos (executar à mão)

**1. Vercel — adicionar os domínios.** Projeto `sites-cppc` → Settings → Domains.

- Adicionar `cppc.org.br`.
- Adicionar `www.cppc.org.br` e marcar **Redirect to `cppc.org.br`** (301), que é o
  comportamento de hoje.
- A Vercel mostra os registros a criar. Anotar o valor do `A` do apex (hoje `76.76.21.21`,
  mas **usar o que a tela mostrar**) e o `CNAME` do `www`
  (`cname.vercel-dns.com`, idem).

**2. Cloudflare — trocar só os registros do site.** Painel da Cloudflare, zona `cppc.org.br`:

- `cppc.org.br` A `66.94.113.19` → trocar pelo IP que a Vercel indicou.
- `www.cppc.org.br` A `66.94.113.19` → trocar por CNAME `cname.vercel-dns.com`
  (ou pelo que a Vercel indicar).
- Deixar os registros **DNS only** (nuvem cinza), não proxied: a Vercel emite o
  certificado e o proxy da Cloudflare na frente atrapalha a validação.
- **Não tocar** em nada mais: MX, os dois TXT, e qualquer seletor DKIM, ficam como estão.
- Baixar o TTL para 5 minutos algumas horas antes, se quiser poder voltar atrás rápido.

**3. Vercel — esperar o domínio verificar** e o certificado ser emitido
(Settings → Domains mostra "Valid Configuration"). Costuma levar de minutos a 1 hora.

**4. Vercel — trocar as variáveis.** Settings → Environment Variables:

- `NEXT_PUBLIC_SITE_URL` = `https://cppc.org.br`
- `NEXT_PUBLIC_NOINDEX` = `false`

**5. Republicar.** Deployments → o último de produção → Redeploy
(**desmarcar** "Use existing Build Cache", para as variáveis entrarem no build).

**6. Conferir depois da troca:**

- [ ] `https://cppc.org.br` abre o site novo com HTTPS válido
- [ ] `https://www.cppc.org.br` faz 301 para `https://cppc.org.br`
- [ ] `curl -I https://cppc.org.br` **não** traz `X-Robots-Tag: noindex`
- [ ] `https://cppc.org.br/robots.txt` aponta o sitemap para `https://cppc.org.br/sitemap.xml`
- [ ] `https://cppc.org.br/sitemap.xml` lista URLs em `cppc.org.br`
- [ ] Uma página qualquer traz `<link rel="canonical" href="https://cppc.org.br/...">`
- [ ] Redirects: `/2025/07/07/valdir-steurnagel-cita-o-cppc/` → 301 → `/noticias/...` → 200;
      `/sul/` → 301 → `/nucleos-regionais/sul`; `/wp-content/uploads/2025/01/jeitoso_c-WP.jpg`
      → 301 → `/uploads/...`
- [ ] **E-mail**: mandar e receber uma mensagem em `secretaria@cppc.org.br`, e conferir que
      `dig cppc.org.br MX` ainda devolve os dois `mx-vip-*.kinghost.net`
- [ ] `dig cppc.org.br TXT` ainda traz o SPF da KingHost

**7. Search Console.** Já existe um `google-site-verification` TXT no apex, ou seja,
**a propriedade provavelmente já existe** (verificada por DNS). Entrar em
<https://search.google.com/search-console> e:

- Se a propriedade **`cppc.org.br`** aparecer: enviar o sitemap novo
  (Sitemaps → `https://cppc.org.br/sitemap.xml`) e usar a Inspeção de URL na home,
  pedindo indexação.
- Se **não** aparecer: criar uma propriedade do tipo **Domínio** para `cppc.org.br`
  (a verificação é por TXT na Cloudflare — **acrescentar** um TXT, nunca substituir o SPF),
  e então enviar o sitemap.
- Em qualquer caso: nas semanas seguintes, acompanhar Páginas → "Não indexada" para
  ver se sobrou alguma URL antiga em 404, e Experiência → Core Web Vitals.

**8. Depois de tudo no ar:** manter o WordPress antigo ligado por algumas semanas
(sem o domínio apontando para ele) é a rede de segurança para resgatar qualquer
conteúdo que falte.

---

## Comandos

```bash
npm ci
npm run dev        # desenvolvimento em http://localhost:3000
npm run build      # build de produção
npm run lint
```

Para conferir o comportamento de produção (redirects, headers, noindex), `next start`
depois do build — `next dev` não aplica os redirects do mesmo jeito.
