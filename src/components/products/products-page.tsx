import { ArrowRight } from "lucide-react";

import { productPackage, services } from "@/components/landing/content";
import { ServiceCard } from "@/components/landing/service-card";
import { PageShell } from "@/components/page-shell";

export function ProductsPage() {
  return (
    <PageShell>
      <section className="space-y-10">
        <section className="space-y-8">
          <h2 className="mx-auto max-w-4xl text-center text-4xl leading-[1.18] font-light tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            Vi tilbyr pakkeløsninger som kan kjøpes hver for seg eller samlet
          </h2>
          <section className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </section>
        </section>

        <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
          <div className="grid gap-10 px-8 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-12">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/80 uppercase">
                Mest populær
              </span>
              <h2 className="mt-6 max-w-lg text-4xl leading-tight font-light tracking-[-0.04em] text-white sm:text-5xl">
                {productPackage.name}
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/58">
                {productPackage.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service.title}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                  >
                    Inkluderer {service.title}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 self-center">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="flex items-center gap-4 rounded-2xl border border-white/8 bg-black/10 px-5 py-4"
                  >
                    <div className="flex size-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white">
                      <Icon className="size-5 stroke-[1.75]" />
                    </div>
                    <p className="min-w-0 flex-1 text-base text-white/72">
                      {service.title}
                    </p>
                    <ArrowRight className="size-4 shrink-0 text-white/40" />
                    <span className="text-sm text-white/50">
                      {productPackage.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </article>
      </section>
    </PageShell>
  );
}
