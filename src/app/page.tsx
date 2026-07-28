import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { PostCard } from "@/components/PostCard";
import { cremos, siteConfig } from "@/content/site";
import { regions } from "@/content/regions";
import { getPostsByCategory } from "@/lib/posts";

export default function Home() {
  const noticias = getPostsByCategory("noticias").slice(0, 3);
  const quadros = getPostsByCategory("biblia-conselheira").slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950">
        <div className="absolute inset-0">
          <Image
            src="/uploads/2024/12/site.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-950/90 to-primary-950/60" />
        </div>
        <Container className="relative py-24 sm:py-32">
          <div className="mb-8 inline-flex rounded-2xl bg-white p-3 shadow-lg">
            <Image
              src="/uploads/2024/12/IMG_6425.png"
              alt="CPPC - Corpo de Psicólogos e Psiquiatras Cristãos"
              width={220}
              height={68}
              className="h-14 w-auto sm:h-16"
            />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">
            Fé, ciência e cuidado
          </p>
          <h1 className="mt-3 max-w-2xl font-serif-display text-4xl font-semibold text-white sm:text-5xl">
            Corpo de Psicólogos e Psiquiatras Cristãos
          </h1>
          <p className="mt-5 max-w-xl text-lg text-primary-100">
            Uma associação brasileira, sem fins lucrativos, que reúne profissionais e estudantes da
            saúde mental num fórum permanente de estudos sobre Psicologia, Teologia e saúde.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/quem-somos"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-900 hover:bg-primary-50"
            >
              Conheça o CPPC
            </Link>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-accent-400 px-6 py-3 text-sm font-semibold text-accent-300 hover:bg-white/10"
            >
              Torne-se um associado
            </a>
          </div>
        </Container>
      </section>

      {/* Organização */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Nossa história" title="A organização" />
            <p className="mt-4 text-ink-soft">
              A história do CPPC remonta há 5 décadas. A ideia da entidade surgiu em 1976, na cidade
              de Curitiba-PR, no Congresso Missionário promovido pela Aliança Bíblica Universitária
              (ABU), em um seminário sobre Psicologia e Psiquiatria. Diferentes membros reunidos numa
              unidade harmônica e funcional, que nutre e sustenta a cada um e que se põe em movimento
              para o serviço ao próximo, em sintonia com o Deus criador.
            </p>
            <Link href="/organizacao" className="mt-5 inline-flex font-semibold text-primary-700 hover:text-primary-900">
              Saiba mais →
            </Link>
          </div>
          <div className="rounded-2xl bg-primary-50 p-8">
            <p className="font-serif-display text-lg italic text-primary-900">
              &ldquo;Muita literatura relevante tem sido publicada pelos associados. Destacamos a
              Bíblia de Estudo Conselheira, em parceria com a Sociedade Bíblica do Brasil (SBB).
              Editamos a revista PsicoTeo, que é nosso órgão oficial.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* Associados / Cremos */}
      <section className="bg-primary-900 py-16 text-primary-50 sm:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-400">Associados</p>
            <h2 className="mt-2 font-serif-display text-3xl font-semibold text-white">Cremos</h2>
            <ul className="mt-5 space-y-3">
              {cremos.map((c) => (
                <li key={c} className="flex gap-3 text-primary-100">
                  <span className="text-accent-400">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/seja-um-associado"
              className="mt-6 inline-flex rounded-full bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-950 hover:bg-accent-400"
            >
              Saiba mais
            </Link>
          </div>
          <div className="rounded-2xl border border-primary-700 bg-primary-800/60 p-8">
            <h3 className="font-serif-display text-xl font-semibold text-white">Como fazer parte</h3>
            <p className="mt-3 text-primary-100">
              A participação inicia-se aqui mesmo em nosso site e prioriza profissionais e estudantes
              de Psicologia e de Psiquiatria; mas admite como membros correspondentes os interessados
              oriundos de todas as áreas do conhecimento. São realizadas reuniões dos núcleos em todo o
              Brasil.
            </p>
            <a
              href={siteConfig.memberPortal}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-full border border-accent-400 px-5 py-2.5 text-sm font-semibold text-accent-300 hover:bg-white/10"
            >
              Torne-se um associado
            </a>
          </div>
        </Container>
      </section>

      {/* Quadros Bíblia Conselheira */}
      {quadros.length > 0 && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Publicações"
              title="Quadros Bíblia Conselheira"
              description="Estudos elaborados por psicólogos e psiquiatras cristãos, em parceria com a Sociedade Bíblica do Brasil."
            />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {quadros.map((post) => (
                <PostCard key={post.id} post={post} basePath="/biblia-conselheira" />
              ))}
            </div>
            <Link href="/biblia-conselheira" className="mt-6 inline-flex font-semibold text-primary-700 hover:text-primary-900">
              Acessar Quadros →
            </Link>
          </Container>
        </section>
      )}

      {/* Notícias */}
      <section className="bg-paper-dim py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Fique por dentro" title="Últimas notícias" />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {noticias.map((post) => (
              <PostCard key={post.id} post={post} basePath="/noticias" />
            ))}
          </div>
          <Link href="/noticias" className="mt-6 inline-flex font-semibold text-primary-700 hover:text-primary-900">
            Ver mais notícias →
          </Link>
        </Container>
      </section>

      {/* Eventos futuros */}
      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-primary-50">
            <Image
              src="/uploads/2025/10/Imagem_do_WhatsApp_de_2025-09-30_as_15.46.33_c84141fe.jpg"
              alt="Eventos CPPC"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="Agenda" title="Eventos futuros" />
            <p className="mt-4 text-ink-soft">
              Cursos, jornadas e encontros promovidos pelo CPPC e pelos núcleos regionais. Acompanhe
              a agenda e faça sua inscrição.
            </p>
            <Link
              href="/eventos"
              className="mt-5 inline-flex rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-800"
            >
              Acessar eventos
            </Link>
          </div>
        </Container>
      </section>

      {/* Núcleos Regionais */}
      <section className="bg-paper-dim py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Institucional"
            title="Núcleos Regionais"
            description="O CPPC atua através de núcleos regionais espalhados pelo Brasil. Faça contato com o líder da sua região e participe das nossas reuniões."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {regions.map((r) => (
              <Link
                key={r.slug}
                href={`/nucleos-regionais/${r.slug}`}
                className="rounded-full border border-primary-200 bg-white px-5 py-2.5 text-sm font-semibold text-primary-800 hover:bg-primary-50"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Revista Psicoteologia */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Publicações" title="Revista Psicoteologia" />
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-primary-50 shadow-sm">
              <Image
                src="/uploads/2024/12/versao-final-EDICAO-67-01.jpg"
                alt="Revista PsicoTeo Edição 67"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-primary-50 shadow-sm">
              <Image
                src="/uploads/2024/12/Screen-Shot-2021-12-24-at-11.53.05.png"
                alt="Revista PsicoTeo"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-primary-50 shadow-sm">
              <Image
                src="/uploads/2024/12/psicoteo65.png"
                alt="Revista PsicoTeo Edição 65"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <a
            href={siteConfig.memberPortal}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block overflow-hidden rounded-2xl transition hover:opacity-90"
          >
            <Image
              src="/uploads/2024/12/BANNER.png"
              alt="Seja um Associado"
              width={1200}
              height={160}
              className="h-auto w-full"
            />
          </a>
        </Container>
      </section>
    </>
  );
}
