import Reveal from "./Reveal";
import { DH } from "@/assets/dh";
const tagine = DH.tagineSignature;

const items = [
  {
    n: "01",
    title: "The Rooftop Kitchen",
    body: "Dine under the stars of the Fes sky. Our kitchen celebrates seasonal ingredients sourced from the souk each morning.",
  },
  {
    n: "02",
    title: "A Fassi Table",
    body: "Slow-cooked tagines, pastilla, and preserved lemons — Fassi specialties served in the courtyard by candlelight.",
  },
  {
    n: "03",
    title: "Herbal Rituals",
    body: "Mint tea poured from a height, orange blossom water, argan honey — the small ceremonies of a Moroccan day.",
  },
];

export default function Gastronomy() {
  return (
    <section id="gastronomy" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        <div className="order-2 space-y-12 md:order-1">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Gastronomy
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              A table set for slow evenings.
            </h2>
          </Reveal>

          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.08}>
              <div className="flex gap-6">
                <span className="font-serif text-3xl italic text-gold">{it.n}</span>
                <div>
                  <h3 className="mb-3 text-sm uppercase tracking-[0.3em]">{it.title}</h3>
                  <p className="text-cream/60 leading-relaxed">{it.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="order-1 md:order-2">
          <div className="aspect-[3/4] w-full overflow-hidden">
            <img
              src={tagine}
              alt="A Fassi tagine served on a mosaic table"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
