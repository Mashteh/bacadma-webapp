import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="hero-gradient bg-navy">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">
            Have a Project or Service Requirement?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Whether you need professional cleaning, gardening, catering, or a reliable partner for a
            service contract, talk to Bacadma General Enterprises today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="lg">
              <Link to="/contact">Request a Service</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
