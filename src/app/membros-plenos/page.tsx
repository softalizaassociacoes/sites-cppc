import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { membrosPlenos } from "@/content/members";

export const metadata: Metadata = { title: "Membros Plenos" };

export default function MembrosPlenosPage() {
  return (
    <>
      <PageHero
        eyebrow="Institucional"
        title="Membros Plenos"
        description="Membros plenos são indicados e aprovados no devido processo de ingresso do CPPC."
      />
      <Container className="py-14">
        <div className="columns-2 gap-x-8 sm:columns-3 lg:columns-4">
          {membrosPlenos.map((name) => (
            <p
              key={name}
              className="mb-2 break-inside-avoid rounded-md px-2 py-1.5 text-sm text-ink-soft odd:bg-primary-50/50"
            >
              {name}
            </p>
          ))}
        </div>
      </Container>
    </>
  );
}
