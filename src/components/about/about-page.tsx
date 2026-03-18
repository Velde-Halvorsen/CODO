import { teamMembers } from "@/components/landing/content";
import { PageShell } from "@/components/page-shell";
import { ProfileCard } from "@/components/about/profile-card";

export function AboutPage() {
  return (
    <PageShell>
      <section className="grid gap-10 xl:grid-cols-[0.85fr_1.15fr] xl:items-start">
        <article>
          <h2 className="max-w-lg text-4xl leading-tight font-light tracking-[-0.04em] text-white sm:text-5xl">
            Et kompakt team med tydelige roller og kort vei fra ide til levering.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">
            Vi bygger digitale flater som skal være enkle å forstå, raske å
            bruke og lette å videreutvikle. Fordelen med et lite team er at
            beslutninger tas raskt, og at samme folk følger prosjektet fra
            retning og design til utvikling og drift.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-white/38">Fokus</p>
              <p className="mt-3 text-lg leading-7 text-white">
                Tydelige nettsider for små bedrifter
              </p>
            </div>
            <div>
              <p className="text-sm text-white/38">Arbeidsform</p>
              <p className="mt-3 text-lg leading-7 text-white">
                Design, utvikling og drift i samme løp
              </p>
            </div>
          </div>
        </article>
        <section>
          <section className="grid justify-center gap-6 lg:grid-cols-2">
            {teamMembers.map((member) => (
              <ProfileCard key={member.name} member={member} />
            ))}
          </section>
        </section>
      </section>
    </PageShell>
  );
}
