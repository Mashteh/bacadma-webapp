import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { contactDetails } from "@/lib/site-content";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg bg-gold text-gold-foreground">
              <Sparkles className="size-4" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-bold tracking-tight">
              BACADMA GENERAL ENTERPRISES
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-navy-foreground/70">
            Reliable cleaning, gardening, catering, and general contract services.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Navigate</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/75">
            <li>Phone: {contactDetails.phone}</li>
            <li>Email: {contactDetails.email}</li>
            <li>Address: {contactDetails.address}</li>
            <li>Hours: {contactDetails.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <p className="mx-auto max-w-7xl px-4 py-6 text-xs text-navy-foreground/60 sm:px-6">
          © 2026 Bacadma General Enterprises. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
