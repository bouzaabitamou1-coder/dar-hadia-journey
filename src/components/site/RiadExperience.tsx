import Reveal from "./Reveal";

const pillars = [
  {
    n: "I",
    title: "Ancient Architecture",
    body: "A 17th-century Fassi riad restored beam by beam, with hand-cut zellige, carved cedar, and tadelakt walls polished by artisan hands.",
  },
  {
    n: "II",
    title: "Living Craft",
    body: "Every lantern, textile, and ceramic in the house was made by a Fes atelier we know by name.",
  },
  {
    n: "III",
    title: "Human Hospitality",
    body: "Nine keys. One family. Days shaped by mint tea, quiet fountains, and the timing of the muezzin.",
  },
];

export default function RiadExperience() {
  return (
    <section className="border-y border-cream/5 bg-stone-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              The Riad Experience
            </span>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
              Three quiet luxuries, held in one house.
            </h2>
          </Reveal>
        </div>

        <div className="zellige-divider mb-16" />

        <div className="grid gap-12 md:grid-cols-3 md:gap-16">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="space-y-6">
                <span className="font-serif text-5xl italic text-gold">{p.n}</span>
                <h3 className="text-lg uppercase tracking-[0.25em]">{p.title}</h3>
                <p className="text-cream/60 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
