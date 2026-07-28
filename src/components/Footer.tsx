import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { regions } from "@/content/regions";
import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-primary-100 bg-primary-950 text-primary-100">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/uploads/2024/12/IMG_6425.png"
            alt="CPPC"
            width={180}
            height={56}
            className="h-11 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-sm text-primary-200">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-700 hover:bg-primary-800"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-700 hover:bg-primary-800"
              aria-label="Instagram"
            >
              ig
            </a>
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-700 hover:bg-primary-800"
              aria-label="X"
            >
              x
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-serif-display text-lg font-semibold text-white">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-200">
            <li><Link href="/quem-somos" className="hover:text-accent-300">Quem Somos</Link></li>
            <li><Link href="/organizacao" className="hover:text-accent-300">Organização</Link></li>
            <li><Link href="/diretoria" className="hover:text-accent-300">Diretoria</Link></li>
            <li><Link href="/estatuto" className="hover:text-accent-300">Estatuto</Link></li>
            <li><Link href="/conduta-etica" className="hover:text-accent-300">Conduta Ética</Link></li>
            <li><Link href="/documentos-norteadores" className="hover:text-accent-300">Documentos Norteadores</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif-display text-lg font-semibold text-white">Núcleos Regionais</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-200">
            {regions.map((r) => (
              <li key={r.slug}>
                <Link href={`/nucleos-regionais/${r.slug}`} className="hover:text-accent-300">
                  {r.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-serif-display text-lg font-semibold text-white">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-200">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-300">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
            <li>
              <Link href="/contato" className="hover:text-accent-300">
                Fale conosco
              </Link>
            </li>
            <li>
              <a href={siteConfig.memberPortal} target="_blank" rel="noreferrer" className="hover:text-accent-300">
                Portal do associado
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-primary-800 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-primary-300 sm:flex-row">
          <p>© {new Date().getFullYear()} CPPC — Corpo de Psicólogos e Psiquiatras Cristãos. Todos os direitos reservados.</p>
          <p>Feito com cuidado para a comunidade CPPC.</p>
        </Container>
      </div>
    </footer>
  );
}
