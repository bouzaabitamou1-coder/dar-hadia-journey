import Reveal from "./Reveal";
import alley from "@/assets/medina-alley.jpg";

const highlights = [
  { n: "01", place: "Al-Qarawiyyin", note: "The world's oldest continuously operating university." },
  { n: "02", place: "Chouara Tannery", note: "The famed dyeing pits, best seen from a leather balcony." },
  { n: "03", place: "Bou Inania Madrasa", note: "A 14th-century masterpiece of Marinid craftsmanship." },
  { n: "04", place: "Nejjarine Square", note: "Carpenters' fountain and the museum of wooden arts." },
];

export default function ExploreFez() {
  return (
    <section className="border-y border-cream/5 bg-stone-muted/20 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        <Reveal className="order-2 md:order-1">
          <div className="aspect-[4/5] w-full overflow-hidden">
            <img
              src={alley}
              alt="A lantern-lit alley in the Fes medina at dusk"
              loading="lazy"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="order-1 space-y-10 md:order-2">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Explore Fez
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              9,000 alleys. <br /> One quiet guide.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-cream/60 leading-relaxed">
              The world's largest urban pedestrian zone unfolds outside the
              door. Our concierge maps a slow route through workshops,
              libraries, and hidden tea houses — no crowds, no rush.
            </p>
          </Reveal>
          <ul className="mt-4 divide-y divide-cream/10 border-y border-cream/10">
            {highlights.map((h, i) => (
              <Reveal key={h.n} delay={0.15 + i * 0.06}>
                <li className="flex items-baseline gap-6 py-5">
                  <span className="font-serif text-xl italic text-gold">{h.n}</span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em]">{h.place}</p>
                    <p className="mt-1 text-sm text-cream/50">{h.note}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
