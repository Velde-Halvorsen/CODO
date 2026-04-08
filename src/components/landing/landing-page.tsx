import { ClientShowcase } from "@/components/landing/client-showcase";
import { HeroSection } from "@/components/landing/hero-section";
import { ServicesSection } from "@/components/landing/services-section";

export function LandingPage() {
  return (
    <main id="hjem" className="min-h-screen bg-background px-4 pb-12 text-foreground sm:px-5">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 pt-8 sm:gap-16 sm:pt-10">
        <HeroSection />
        <ClientShowcase />
        <ServicesSection />
        <div id="kontakt" className="h-2" />
      </div>
    </main>
  );
}
