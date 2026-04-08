import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { PageShell } from "@/components/page-shell";

const startupPackages = [
  {
    name: "Enkel nettside",
    price: "2.999,-",
    description:
      "For bedrifter som trenger en enkel og ryddig nettside for å komme raskt i gang.",
    features: [
      "Enkel bedriftsnettside",
      "Mobiltilpasset design",
      "Kontaktinformasjon og tydelig struktur",
    ],
  },
  {
    name: "Nettside med skjema",
    price: "3.999,-",
    description:
      "For bedrifter som trenger skjemaer, innsendinger og enkel backend-funksjonalitet.",
    features: [
      "Alt i enkel nettside",
      "Kontaktskjema eller innsendingsskjema",
      "Enklere backend-oppsett",
    ],
  },
  {
    name: "Avansert løsning",
    price: "4.999,-",
    description:
      "For løsninger som trenger database, mer logikk eller en struktur som skal kunne bygges videre på.",
    features: [
      "Alt i nettside med skjema",
      "Databasetilkobling",
      "Tilpasset oppsett for videreutvikling",
    ],
  },
];

export function ProductsPage() {
  return (
    <PageShell>
      <section className="space-y-10">
        <section className="px-2 pt-6 pb-8 text-center sm:pt-10 sm:pb-10">
          <h1 className="mx-auto max-w-4xl text-5xl leading-[1.15] font-light tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Velg hvordan du vil starte
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Beskriv hva du trenger, eller velg en fast pakke. Vi setter opp alt
            for deg, eller du kan sette opp selv og kun betale for drift.
          </p>
        </section>

        <section className="rounded-[2rem] border border-border/80 bg-card/70 px-8 py-10 text-foreground shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <h2 className="text-4xl leading-[1.08] font-light tracking-[-0.04em] sm:text-5xl">
                Fast månedspris. Enkel oppstart.
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                Alle betaler samme faste pris for drift: fra 249 kr/mnd. Det
                dekker hosting, sikkerhet, support og løpende vedlikehold.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                Premium drift koster 299 kr/mnd og gir første prioritet på
                henvendelser. Oppstartspakkene under er engangskostnader hvis du
                vil at vi setter opp nettsiden for deg.
              </p>
            </div>

            <div className="text-left lg:text-right">
              <p className="text-6xl leading-none font-light tracking-[-0.06em] sm:text-7xl">
                249,-
              </p>
              <p className="mt-3 text-lg text-muted-foreground">Per måned</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-border/80 bg-card/70 px-8 py-10 text-foreground shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:px-10 sm:py-12">
          <div className="max-w-3xl">
            <h2 className="text-4xl leading-[1.08] font-light tracking-[-0.04em] sm:text-5xl">
              Velg din oppstartspakke
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Velg pakken som passer behovet ditt. Deretter driftes løsningen
              videre automatisk fra 249 kr/mnd, eller 299 kr/mnd med prioritert
              oppfølging.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {startupPackages.map((pkg) => (
              <article
                key={pkg.name}
                className="flex h-full flex-col rounded-[1.75rem] border border-border/80 bg-background/55 px-6 py-7"
              >
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.03em]">
                    {pkg.name}
                  </h3>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-5xl leading-none font-light tracking-[-0.05em]">
                      {pkg.price}
                    </span>
                    <span className="pb-1 text-base text-muted-foreground">eks. mva</span>
                  </div>
                  <p className="mt-5 text-base leading-7 text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                >
                  Kom i gang
                  <ArrowRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}
