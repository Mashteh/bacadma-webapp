import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const title = "Our Services | Bacadma General Enterprises";
const description =
  "Professional cleaning, gardening and landscaping, catering, and general contract and tender services from Bacadma General Enterprises.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Services Delivered With Consistency"
        description="Cleaning, gardening, and catering form our core offering — and we remain open to other suitable contracts and tenders."
      />

      <Section>
        <div className="space-y-20">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2"
            >
              <Reveal className={cn(i % 2 === 1 && "lg:order-2")}>
                <div className="overflow-hidden rounded-3xl shadow-lift">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    style={{ objectPosition: s.imagePosition ?? "50% 50%" }}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-3xl font-bold text-foreground">{s.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">{s.cta}</Link>
                  </Button>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
