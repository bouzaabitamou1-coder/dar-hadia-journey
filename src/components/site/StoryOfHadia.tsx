import Reveal from "./Reveal";
import hadia from "@/assets/hadia-portrait.jpg";

export default function StoryOfHadia() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
      <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
        <Reveal className="relative">
          <div className="relative aspect-[2/3] w-full overflow-hidden">
            <img
              src={hadia}
              alt="Portrait of Hadia, the founder of Dar Hadia"
              loading="lazy"
              width={1000}
              height={1400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-64 border border-gold/30 bg-ebony/60 p-8 backdrop-blur-xl md:block">
            <p className="font-serif text-sm italic text-gold">
              "Dar Hadia is not a guesthouse. It is my family's heart, preserved in stone and light."
            </p>
            <span className="mt-4 block text-[10px] uppercase tracking-[0.3em] text-cream/70">
              — Hadia, Founder
            </span>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              The Guardian
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance font-serif text-4xl leading-[1.05] md:text-6xl">
              A house shaped by three generations of hands.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-md text-lg leading-relaxed text-cream/70">
              For three generations, this riad has stood as a sanctuary within
              the labyrinth of Fes. Hadia has meticulously restored every
              zellige tile and carved cedar beam, welcoming guests not as
              travellers, but as kin.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <a
              href="#gallery"
              className="inline-block border-b border-gold pb-2 text-[10px] uppercase tracking-[0.35em] text-gold transition-opacity hover:opacity-80"
            >
              Read the narrative
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
