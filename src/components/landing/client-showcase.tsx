import { clients } from "@/components/landing/content";
import { ClientCard } from "@/components/landing/client-card";

export function ClientShowcase() {
  return (
    <section id="om-oss" className="space-y-6">
      <h2 className="text-4xl font-semibold tracking-tight text-foreground/20">
        Våre kunder
      </h2>
      <div className="grid w-full gap-5">
        {clients.map((client) => (
          <ClientCard key={client.name} client={client} />
        ))}
      </div>
    </section>
  );
}
