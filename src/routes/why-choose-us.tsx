import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  ClipboardList,
  FileText,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  MessageSquare,
} from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { industries, processSteps, whyChooseUs } from "@/lib/site-content";

const title = "Why Choose Us | Bacadma General Enterprises";
const description =
  "Reliable, quality-focused and flexible general services — see why organizations and individuals choose Bacadma General Enterprises for their service contracts.";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/why-choose-us" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUsPage,
});

const whyIcons = [ShieldCheck, BadgeCheck, Sparkles, Users, HeartHandshake, FileText];
const stepIcons = [MessageSquare, ClipboardList, FileText, BadgeCheck];

function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Bacadma"
        title="Why Choose Us?"
        description="A practical, dependable approach to every assignment — from a single clean to a long-term service contract."
      />

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <div className="surface-card h-full p-6 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-navy">
        <SectionHeading
          tone="dark"
          eyebrow="How It Works"
          title="A Simple Four-Step Process"
          description="Clear communication from the first enquiry through to delivery."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => {
            const Icon = stepIcons[i]!;
            return (
              <Reveal key={s.title} delay={i * 90}>
                <li className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-gold text-gold-foreground">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-2xl font-bold text-navy-foreground/35">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{s.body}</p>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Client Categories We Are Ready to Support"
          description="These are the types of clients Bacadma General Enterprises is equipped to work with."
        />
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((name, i) => (
            <Reveal key={name} delay={i * 50}>
              <span className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-card">
                {name}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
