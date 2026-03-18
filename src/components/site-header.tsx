"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationLinks } from "@/components/landing/content";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-50 px-4 pt-4 sm:px-5">
      <header className="mx-auto w-full max-w-7xl rounded-2xl border border-white/8 bg-white/4 px-4 py-4 shadow-[0_18px_36px_rgba(0,0,0,0.22)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-semibold tracking-tight text-white shadow-inner [font-family:var(--font-logo)]"
          >
            {"<codo />"}
          </Link>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative pb-2 transition-colors hover:text-white ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute right-0 bottom-0 left-0 h-px bg-white transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="w-[92px] md:block" />
        </div>
      </header>
    </div>
  );
}
