import { Container } from "./Container";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="border-b border-primary-100 bg-gradient-to-b from-primary-50 to-paper">
      <Container className="py-14 sm:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif-display text-4xl font-semibold text-primary-900 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">{description}</p>
        )}
      </Container>
    </div>
  );
}
