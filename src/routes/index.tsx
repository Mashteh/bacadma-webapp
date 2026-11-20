import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarCheck,
  ClipboardList,
  FileText,
  HeartHandshake,
  Home,
  Hotel,
  Landmark,
  MessageSquare,
  School,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-team.jpeg";
import aboutImage from "@/assets/about-team.jpeg";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBanner } from "@/components/site/CtaBanner";
import { industries, processSteps, services, whyChooseUs } from "@/lib/site-content";

const title = "Bacadma General Enterprises | Cleaning, Gardening & Catering Services";
const description =
  "Bacadma General Enterprises provides professional cleaning, gardening, catering, and general contract services for businesses, institutions, organizations, and individuals.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Bacadma General Enterprises",
          description,
          url: "/",
        }),
      },
    ],
  }),
  component: HomePage,
});

const industryIcons = [
  Building2,
  School,
  Hotel,
  CalendarCheck,
  Home,
  Landmark,
  HeartHandshake,
  ClipboardList,
];
const whyIcons = [ShieldCheck, BadgeCheck, Sparkles, Users, HeartHandshake, FileText];
const stepIcons = [MessageSquare, ClipboardList, FileText, BadgeCheck];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Bacadma General Enterprises service team at work"
          className="absolute inset-0 -z-20 size-full object-cover"
        />
        <div className="hero-gradient absolute inset-0 -z-10" aria-hidden="true" />
        <div
          className="absolute -right-24 top-16 -z-10 size-72 rounded-full bg-gold/25 blur-3xl motion-safe:animate-pulse"
          aria-hidden="true"
        />
        <div className="mx-auto w-full max-w-7xl px-4 py-32 sm:px-6">
          <div className="max-w-3xl motion-safe:animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/90 backdrop-blur">
              <Sparkles className="size-3.5" aria-hidden="true" />
              Cleaning · Gardening · Catering · Contracts
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
              Professional Services You Can Trust
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
              Bacadma General Enterprises provides reliable cleaning, gardening, catering, and
              general contract services tailored to meet the needs of businesses, institutions,
              organizations, and individuals.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="gold" size="lg">
                <Link to="/contact">
                  Request a Service
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {["Reliable Service", "Professional Team", "Flexible Solutions"].map((t, i) => (
                <Reveal
                  key={t}
                  delay={i * 90}
                  className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-sm font-medium text-primary-foreground backdrop-blur"
                >
                  {t}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImage}
                alt="Bacadma General Enterprises service team preparing for an assignment"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Your Reliable Partner for Quality Services"
              description="Bacadma General Enterprises is committed to delivering dependable, high-quality services while maintaining professionalism, efficiency, and customer satisfaction. We do not limit ourselves to one service category — we can undertake suitable contracts and tenders based on client requirements."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, title: "Reliable Service" },
                { icon: Users, title: "Professional Team" },
                { icon: Sparkles, title: "Flexible Solutions" },
              ].map((h, i) => (
                <Reveal key={h.title} delay={i * 90} className="surface-card p-5">
                  <h.icon className="size-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-semibold text-foreground">{h.title}</h3>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">More About Bacadma</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="bg-secondary/50">
        <SectionHeading
          eyebrow="Our Services"
          title="Services Built Around Your Requirements"
          description="Core services delivered with consistency, plus the flexibility to take on other suitable contracts and tenders."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Why choose us */}
      <Section>
        <SectionHeading
          eyebrow="Why Bacadma"
          title="Why Choose Us?"
          description="A practical, service-first approach that organizations and individuals can rely on."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f, i) => {
            const Icon = whyIcons[i % whyIcons.length]!;
            return (
              <Reveal key={f.title} delay={i * 70}>
                <div className="surface-card h-full p-6 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-navy">
        <SectionHeading
          tone="dark"
          eyebrow="How It Works"
          title="A Simple Four-Step Process"
          description="From first enquiry to delivery, we keep the process clear and straightforward."
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => {
            const Icon = stepIcons[i]!;
            return (
              <Reveal key={s.title} delay={i * 90}>
                <li className="h-full rounded-2xl border border-navy-foreground/15 bg-navy-foreground/5 p-6 transition-colors hover:bg-navy-foreground/10">
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

      {/* Industries */}
      <Section>
        <SectionHeading
          eyebrow="Who We Serve"
          title="Clients We Are Ready to Work With"
          description="Bacadma General Enterprises is equipped to serve a wide range of client categories."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((name, i) => {
            const Icon = industryIcons[i % industryIcons.length]!;
            return (
              <Reveal key={name} delay={i * 60}>
                <div className="surface-card flex h-full items-center gap-3 p-5 hover:-translate-y-1 hover:shadow-lift">
                  <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{name}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
