import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { contactDetails } from "@/lib/site-content";

const title = "Contact Us | Bacadma General Enterprises";
const description =
  "Request a service or discuss a contract with Bacadma General Enterprises — cleaning, gardening, catering, and general contract services.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details = [
  { icon: Phone, label: "Phone", value: contactDetails.phone },
  { icon: Mail, label: "Email", value: contactDetails.email },
  { icon: MapPin, label: "Address", value: contactDetails.address },
  { icon: Clock, label: "Business Hours", value: contactDetails.hours },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Service"
        description="Share your requirement and our team will get back to you with a suitable proposal."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Company Details</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Contact information will be published here once confirmed.
            </p>
            <ul className="mt-8 space-y-4">
              {details.map((d, i) => (
                <Reveal key={d.label} delay={i * 70}>
                  <li className="surface-card flex items-start gap-4 p-5">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                      <d.icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground">{d.label}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{d.value}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Send an Inquiry</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tell us what you need and we will respond with next steps.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
