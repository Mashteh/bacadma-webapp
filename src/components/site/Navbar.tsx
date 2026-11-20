import { Link } from "@tanstack/react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md shadow-[0_8px_30px_-24px_oklch(0.25_0.05_160/0.5)]"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className={cn(
              "grid size-9 place-items-center rounded-lg transition-colors",
              scrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/15 text-primary-foreground",
            )}
          >
            <Sparkles className="size-4" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-display text-sm font-bold tracking-tight sm:text-base",
                scrolled ? "text-foreground" : "text-primary-foreground",
              )}
            >
              BACADMA
            </span>
            <span
              className={cn(
                "block text-[10px] font-semibold uppercase tracking-[0.18em]",
                scrolled ? "text-muted-foreground" : "text-primary-foreground/75",
              )}
            >
              General Enterprises
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground",
              )}
              activeProps={{
                className: scrolled ? "text-primary" : "text-primary-foreground",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant={scrolled ? "default" : "gold"} size="sm" className="ml-3">
            <Link to="/contact">Request a Service</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={cn(
            "grid size-10 place-items-center rounded-md border transition-colors lg:hidden",
            scrolled
              ? "border-border text-foreground"
              : "border-primary-foreground/30 text-primary-foreground",
          )}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-secondary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="default" className="mt-3 w-full" onClick={() => setOpen(false)}>
            <Link to="/contact">Request a Service</Link>
          </Button>
        </div>
      )}
    </header>
  );
}
