import type { LucideIcon } from "lucide-react";
import { FolderCode, Grid3X3, ServerCog } from "lucide-react";

export type Client = {
  name: string;
  imageSrc: string;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  includedIn?: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  email: string;
};

export type ProductPackage = {
  name: string;
  description: string;
};

export const navigationLinks = [
  { label: "Om oss", href: "/om-oss" },
  { label: "Tjenester", href: "/produkter" },
  { label: "Kontakt", href: "/kontakt" },
];

export const clients: Client[] = [
  {
    name: "Drobaktakfornying.no",
    imageSrc: "/images/clients/drobaktakfornying.jpg",
    href: "https://drobaktakfornying.no",
  },
];

export const services: Service[] = [
  {
    title: "Design",
    description:
      "Tydelige nettsteder og identiteter som gjør det enkelt å forstå hvem dere er og hva dere tilbyr.",
    icon: Grid3X3,
    includedIn: ["Utvikling", "Komplett webutvikling"],
  },
  {
    title: "Utvikling",
    description:
      "Raske og stabile nettsider bygget komponentbasert med moderne frontend-teknologi og skalerbar struktur.",
    icon: FolderCode,
    includedIn: ["Komplett webutvikling"],
  },
  {
    title: "Drift",
    description:
      "Publisering, vedlikehold og videreutvikling slik at løsningen holder seg trygg, rask og oppdatert.",
    icon: ServerCog,
    includedIn: ["Komplett webutvikling"],
  },
];

export const productPackage: ProductPackage = {
  name: "Komplett webutvikling",
  description:
    "Pakken samler alt i ett løp: design, utvikling og drift, med ett fast kontaktpunkt fra start til videre oppfølging.",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Petra Halvorsen",
    role: "Daglig leder",
    imageSrc: "/images/about/petra.jpg",
    description:
      "Petra leder Codo og former den visuelle retningen i prosjektene, fra struktur og innhold til et uttrykk som bygger tillit.",
    email: "petra.halvorsen@codo.no",
  },
  {
    name: "Harald Velde",
    role: "Teknologidirektør",
    imageSrc: "/images/about/harald.PNG",
    description:
      "Harald har ansvar for teknologi, drift og levering, og bygger løsninger som er raske, robuste og enkle å videreutvikle.",
    email: "harald.velde@codo.no",
  },
];
