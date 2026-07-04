import Reveal from "./Reveal";
import { DH } from "@/assets/dh";
const spices = DH.cookingTagines;

const steps = [
  "Morning walk through the Fes souk with Chef Karim",
  "Spice grinding and dough by hand in the riad kitchen",
  "Cooking a full Fassi menu on charcoal and clay",
  "Sharing the meal in the courtyard, mint tea to close",
];

export default function CookingClasses() {
  return (
    <section className="border-y border-cream/5 bg-stone-muted/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-5 md:gap-24 md:px-10">
        <Reveal className="md:col-span-3">
          <div className="aspect-[7/5] w-full overflow-hidden">
            <img
              src={spices}
              alt="Hands grinding Moroccan spices in a stone mortar"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="space-y-8 md:col-span-2">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Workshops
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              The Art of the Tagine
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-cream/60 leading-relaxed">
              A half day in the kitchen with our chef — from the souk stalls
              to the courtyard table — decoding the balance of saffron, cumin,
              preserved lemon, and time.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ol className="mt-6 space-y-4 border-l border-gold/30 pl-6">
              {steps.map((s, i) => (
                <li key={s} className="text-sm text-cream/70">
                  <span className="mr-4 font-serif text-gold italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
