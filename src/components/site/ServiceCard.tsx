import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/site-content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          style={{ objectPosition: service.imagePosition ?? "50% 50%" }}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
        <ul className="mt-5 space-y-2 text-sm text-foreground/80">
          {service.items.slice(0, 5).map((i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/services" hash={service.slug}>
              {service.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
