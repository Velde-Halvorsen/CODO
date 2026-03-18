import { services } from "@/components/landing/content";
import { ServiceCard } from "@/components/landing/service-card";

export function ServicesSection() {
  return (
    <section id="produkter" className="space-y-8">
      <h2 className="text-center text-5xl font-light tracking-[-0.04em] text-white sm:text-6xl">
        Vi tilbyr
      </h2>
      <div className="grid gap-5 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}
