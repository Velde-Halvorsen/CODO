import type { Service } from "@/components/landing/content";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.03] px-8 py-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.18)]">
      <div className="mb-7 flex justify-center text-white">
        <Icon className="size-14 stroke-[1.5]" />
      </div>
      <h3 className="text-5xl leading-none font-light tracking-[-0.04em] text-white">
        {service.title}
      </h3>
      <p className="mx-auto mt-7 max-w-xs text-base leading-7 text-white/52">
        {service.description}
      </p>
      {service.includedIn?.length ? (
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {service.includedIn.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
            >
              Inngår i {item}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
