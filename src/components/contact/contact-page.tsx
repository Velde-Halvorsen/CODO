import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { teamMembers } from "@/components/landing/content";
import { PageShell } from "@/components/page-shell";

export function ContactPage() {
  const [petra, harald] = teamMembers;

  return (
    <PageShell>
      <section className="space-y-8">
        <header className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-4xl leading-tight font-light tracking-[-0.04em] text-foreground sm:text-5xl">
            Kontaktskjemaet er fortsatt under arbeid
          </h1>
          <p className="text-base leading-8 text-muted-foreground sm:text-lg">
            Kontaktskjemaet er fortsatt under arbeid og er ikke klart for
            innsending ennå. Hvis dere vil komme i kontakt med oss i
            mellomtiden, bruk gjerne e-post eller telefon.
          </p>
          <p className="text-sm leading-7 text-foreground/78 sm:text-base">
            Kontakt Petra eller Harald på{" "}
            <Link
              href={`mailto:${petra.email}`}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground/78"
            >
              {petra.email}
            </Link>{" "}
            eller{" "}
            <Link
              href={`mailto:${harald.email}`}
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground/78"
            >
              {harald.email}
            </Link>
            .
          </p>
        </header>
        <ContactForm />
      </section>
    </PageShell>
  );
}
