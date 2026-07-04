import Reveal from "./Reveal";
import { DH } from "@/assets/dh";

export default function Awards() {
  return (
    <section className="border-y border-cream/10 bg-stone-muted/20 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 text-center">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Recognition
            </span>
            <h2 className="mt-4 font-serif text-3xl leading-tight md:text-5xl">
              Awarded by those who visit us.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-cream/60">
              Two consecutive years among the most loved stays on Tripadvisor —
              voted by our guests.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
            >
              <img
                src={DH.tcBadge2026}
                alt="Tripadvisor Travellers' Choice 2026"
                loading="lazy"
                className="h-32 w-32 md:h-40 md:w-40"
              />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Travellers' Choice · 2026
              </span>
            </a>
            <div className="hidden h-24 w-px bg-cream/10 md:block" />
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
            >
              <img
                src={DH.tcBadge2025}
                alt="Tripadvisor Travellers' Choice 2025"
                loading="lazy"
                className="h-32 w-32 opacity-90 md:h-40 md:w-40"
              />
              <span className="text-[10px] uppercase tracking-[0.35em] text-cream/60">
                Travellers' Choice · 2025
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
