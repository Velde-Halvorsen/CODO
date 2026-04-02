"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Vi hjelper små bedrifter med å bli synlige på nett",
  "Fordi brukervennlighet er god business.",
] as const;

const longestPhrase = phrases.reduce((longest, phrase) =>
  phrase.length > longest.length ? phrase : longest
);

const typingDelay = 120;
const deletingDelay = 28;
const pauseDelay = 1800;

function getInitialText() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return phrases[0];
  }

  return "";
}

export function HeroSection() {
  const [activePhraseIndex, setActivePhraseIndex] = useState(0);
  const [visibleText, setVisibleText] = useState(getInitialText);
  const [isDeleting, setIsDeleting] = useState(false);
  const currentPhrase = phrases[activePhraseIndex];
  const isCaretBlinking = visibleText === currentPhrase && !isDeleting;

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const atPhraseEnd = visibleText === currentPhrase;
    const atPhraseStart = visibleText.length === 0;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (atPhraseEnd) {
            setIsDeleting(true);
            return;
          }

          setVisibleText(currentPhrase.slice(0, visibleText.length + 1));
          return;
        }

        if (!atPhraseStart) {
          setVisibleText(currentPhrase.slice(0, visibleText.length - 1));
          return;
        }

        setIsDeleting(false);
        setActivePhraseIndex((currentIndex) => (currentIndex + 1) % phrases.length);
      },
      atPhraseEnd ? pauseDelay : isDeleting ? deletingDelay : typingDelay
    );

    return () => {
      window.clearTimeout(timeout);
    };
  }, [activePhraseIndex, currentPhrase, isDeleting, visibleText]);

  return (
    <section className="px-2 pt-10 pb-6 text-center sm:pt-14 sm:pb-10">
      <h1
        className="mx-auto max-w-4xl text-5xl leading-[1.18] font-light tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl"
        aria-label={phrases[activePhraseIndex]}
      >
        <span className="relative inline-grid min-h-[2.5em] w-full place-items-center">
          <span className="invisible block">
            {longestPhrase}
            <span className="ml-1 inline-block h-[0.9em] w-[0.08em] align-[-0.08em]" />
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="block text-center">
              <span>{visibleText || "\u00A0"}</span>
              <span
                aria-hidden="true"
                className={`ml-1 inline-block h-[0.9em] w-[0.08em] bg-foreground align-[-0.08em] ${
                  isCaretBlinking ? "animate-caret-blink" : ""
                }`}
              />
            </span>
          </span>
        </span>
      </h1>
    </section>
  );
}
