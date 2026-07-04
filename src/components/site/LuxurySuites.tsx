import Reveal from "./Reveal";
import { openEnquiry } from "@/lib/enquiry";
import { DH } from "@/assets/dh";

const rooms = [
  {
    id: "grand-salon",
    name: "The Grand Salon",
    tag: "Zellige-clad reception · Fassi craftsmanship",
    from: "Guest use",
    img: DH.zelligeDetail,
  },
  {
    id: "riad-salon",
    name: "Salon Marocain",
    tag: "Silk banquettes · Lantern light",
    from: "Guest use",
    img: DH.salonNight,
  },
  {
    id: "atrium",
    name: "The Atrium",
    tag: "Open to the sky · Traditional fountain",
    from: "Guest use",
    img: DH.riadHall,
  },
];

export default function LuxurySuites() {
  return (
    <section id="suites" className="py-24 md:py-32">
      <div className="mb-16 flex flex-col justify-between gap-6 px-6 md:mb-20 md:flex-row md:items-end md:px-10">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            The House
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
            Salons of Dar Hadia
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <button
            onClick={() => openEnquiry()}
            className="self-start border border-cream/20 px-8 py-3 text-[10px] uppercase tracking-[0.3em] transition-all hover:border-gold hover:bg-gold hover:text-ebony md:self-auto"
          >
            View availability
          </button>
        </Reveal>
      </div>

      <div className="grid gap-px border-y border-cream/10 bg-cream/10 md:grid-cols-3">
        {rooms.map((r, i) => (
          <Reveal key={r.id} delay={i * 0.08}>
            <button
              onClick={() => openEnquiry({ roomId: r.id })}
              className="group relative block h-full w-full overflow-hidden bg-stone-muted text-left"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ebony via-ebony/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 md:p-8">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl">{r.name}</h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-gold">
                    {r.tag}
                  </p>
                </div>
                <span className="hidden text-right text-xs text-cream/70 md:block">
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-cream/40">
                    From
                  </span>
                  {r.from}
                  <span className="text-cream/40"> / night</span>
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
