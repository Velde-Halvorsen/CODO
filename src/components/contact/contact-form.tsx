import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <section className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] px-6 py-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:px-8 sm:py-8">
      <div className="space-y-3">
        <h2 className="text-4xl font-light tracking-[-0.04em] text-white sm:text-5xl">
          Fortell oss hva dere trenger hjelp til
        </h2>
        <p className="max-w-2xl text-base leading-7 text-white/62">
          Fyll inn navn, e-post, bedrift og en kort beskrivelse av prosjektet.
          Da har vi det vi trenger for å ta kontakt med et tydelig utgangspunkt.
        </p>
      </div>

      <form className="mt-8 cursor-not-allowed">
        <fieldset
          disabled
          className="grid gap-6 [&_button]:cursor-not-allowed [&_input]:cursor-not-allowed [&_label]:cursor-not-allowed [&_textarea]:cursor-not-allowed"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/82" htmlFor="name">
                Navn
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Ditt navn"
                className="h-13 rounded-2xl border border-white/12 bg-white/[0.03] px-4 text-white placeholder:text-white/28"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/82" htmlFor="email">
                E-post
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="navn@bedrift.no"
                className="h-13 rounded-2xl border border-white/12 bg-white/[0.03] px-4 text-white placeholder:text-white/28"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/82" htmlFor="company">
              Bedrift
            </label>
            <Input
              id="company"
              name="company"
              placeholder="Bedriftsnavn"
              className="h-13 rounded-2xl border border-white/12 bg-white/[0.03] px-4 text-white placeholder:text-white/28"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/82" htmlFor="message">
              Hva trenger dere hjelp til?
            </label>
            <p className="text-sm leading-6 text-white/46">
              Beskriv kort prosjektet, målet og hva dere ønsker hjelp med.
            </p>
            <Textarea
              id="message"
              name="message"
              placeholder="Skriv noen linjer om prosjektet deres"
              className="min-h-40 rounded-3xl border border-white/12 bg-white/[0.03] px-4 py-3 text-white placeholder:text-white/28"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-white/46">
              Alle feltene gir oss nok informasjon til å følge opp henvendelsen.
            </p>
            <Button
              type="submit"
              size="lg"
              className="h-12 rounded-full bg-white px-6 text-black hover:bg-white/90"
            >
              Send melding
              <Send className="size-4" />
            </Button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
