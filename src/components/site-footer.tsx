import Link from "next/link";

import { navigationLinks } from "@/components/landing/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/80 bg-card/65 px-4 py-10 backdrop-blur sm:px-5 sm:py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-2 text-muted-foreground sm:flex-row sm:items-end sm:justify-between sm:px-1">
        <div className="max-w-md space-y-3">
          <Link
            href="/"
            className="inline-flex rounded-lg bg-primary px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground shadow-inner [font-family:var(--font-logo)]"
          >
            {"<codo />"}
          </Link>
          <p className="text-sm leading-6 text-muted-foreground">
            Vi hjelper små bedrifter med design, utvikling og drift av tydelige
            digitale flater.
          </p>
        </div>
        <div className="space-y-4 sm:text-right">
          <nav className="flex flex-wrap gap-4 text-sm sm:justify-end">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground/80">
            © 2026 Codo. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
