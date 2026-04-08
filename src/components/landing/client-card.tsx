import Image from "next/image";

import type { Client } from "@/components/landing/content";

type ClientCardProps = {
  client: Client;
};

export function ClientCard({ client }: ClientCardProps) {
  return (
    <a
      href={client.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Besok ${client.name}`}
      className="group block w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <article className="relative overflow-hidden rounded-xl border border-border/70 bg-card/65 shadow-[0_18px_36px_rgba(0,0,0,0.14)]">
        <Image
          src={client.imageSrc}
          alt={client.name}
          width={800}
          height={540}
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[360px] lg:h-[440px]"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 bg-black/45 px-6 py-5 text-white backdrop-blur-sm dark:bg-black/45">
          <p className="text-2xl font-medium tracking-tight">
            {client.name}
          </p>
        </div>
      </article>
    </a>
  );
}
