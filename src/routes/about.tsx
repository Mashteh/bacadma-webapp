import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import aboutImage from "@/assets/about-team.jpeg";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";

const title = "About Us | Bacadma General Enterprises";
const description =
  "Bacadma General Enterprises is a general services company delivering dependable cleaning, gardening, catering, and contract services with professionalism and efficiency.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const highlights = [
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    body: "We plan each assignment carefully and follow through on what we agree with our clients.",
  },
  {
    icon: Users,
    title: "Professional Team",
    body: "Our service team is organised, presentable, and briefed on the requirements of every job.",
  },
  {
    icon: Sparkles,
    title: "Flexible Solutions",
    body: "Scope, schedule and contract size are shaped around what each client actually needs.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Reliable Partner for Quality Services"
        description="A general services company built around dependability, professionalism, and practical solutions for every client."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Committed to Dependable, High-Quality Service"
              description="Bacadma General Enterprises is a professional general services company providing cleaning, gardening and landscaping, catering, and general contract services. We are committed to delivering dependable, high-quality work while maintaining professionalism, efficiency, and customer satisfaction."
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              We do not limit ourselves to a single service category. Alongside our core services,
              we are open to suitable tenders, contracts, and service opportunities, and we work
              closely with each client to understand their requirements before proposing a practical
              way forward.
            </p>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-3xl shadow-lift">
              <img
                src={aboutImage}
                alt="Bacadma General Enterprises service team coordinating an assignment"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 90}>
              <div className="surface-card h-full p-6 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <h.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
