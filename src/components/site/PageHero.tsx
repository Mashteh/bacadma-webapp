export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="hero-gradient bg-navy pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl motion-safe:animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <div className="gold-rule mt-8 h-px w-40" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
