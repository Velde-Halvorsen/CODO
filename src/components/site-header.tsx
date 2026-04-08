"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/components/landing/content";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 bg-transparent px-4 pt-4 sm:px-5">
      <header className="mx-auto w-full max-w-7xl rounded-2xl border border-border/80 bg-card/85 px-4 py-4 shadow-[0_18px_36px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/6 dark:shadow-[0_18px_36px_rgba(0,0,0,0.28)] dark:backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold tracking-tight text-primary-foreground shadow-inner [font-family:var(--font-logo)]"
          >
            {"<codo />"}
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative pb-2 transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : ""
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute right-0 bottom-0 left-0 h-px bg-foreground transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="flex w-[92px] justify-end md:block md:w-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}
