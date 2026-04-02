import type { ReactNode } from "react";

type PageShellProps = {
  title?: string;
  intro?: string;
  children: ReactNode;
};

export function PageShell({ title, intro, children }: PageShellProps) {
  const hasPageIntro = Boolean(title || intro);

  return (
    <main className="min-h-screen bg-background px-4 pb-12 text-foreground sm:px-5">
      <div
        className={`mx-auto flex w-full max-w-7xl flex-col ${
          hasPageIntro
            ? "gap-12 pt-8 sm:gap-16 sm:pt-10"
            : "gap-8 pt-2 sm:gap-10 sm:pt-4"
        }`}
      >
        {hasPageIntro ? (
          <section className="px-2 pt-10 pb-8 text-center sm:pt-14 sm:pb-10">
            {title ? (
              <h1 className="mx-auto max-w-5xl text-5xl leading-[1.12] font-light tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                {title}
              </h1>
            ) : null}
            {intro ? (
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                {intro}
              </p>
            ) : null}
          </section>
        ) : null}
        {children}
      </div>
    </main>
  );
}
