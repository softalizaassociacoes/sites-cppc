import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { assessorias } from "@/content/assessorias";

export const metadata: Metadata = { title: "Assessorias" };

export default function AssessoriasPage() {
  return (
    <>
      <PageHero eyebrow="Institucional" title="Assessorias" />
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {assessorias.map((a) => (
            <div key={a.title} className="rounded-2xl border border-primary-100 bg-white p-6 shadow-sm">
              <h3 className="font-serif-display text-lg font-semibold text-primary-900">{a.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{a.responsavel}</p>
              {a.email && (
                <a href={`mailto:${a.email}`} className="mt-2 inline-block text-sm text-primary-700 hover:underline">
                  {a.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
