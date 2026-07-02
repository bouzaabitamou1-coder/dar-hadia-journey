import Reveal from "./Reveal";
import hammam from "@/assets/hammam.jpg";

export default function WellnessHammam() {
  return (
    <section id="wellness" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-10">
        <div className="space-y-8">
          <Reveal>
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
              Wellness
            </span>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Rituals of water & silence.
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-lg leading-relaxed text-cream/70">
              Our private marble hammam offers the ancient sequence — steam,
              black soap, rassoul clay, cold rinse — followed by argan oil
              massage on a warm slab. An hour that undoes a week.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <dl className="grid grid-cols-2 gap-6 border-t border-cream/10 pt-8">
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-cream/40">
                  Duration
                </dt>
                <dd className="mt-2 font-serif text-2xl text-gold">90 min</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-cream/40">
                  Reservation
                </dt>
                <dd className="mt-2 font-serif text-2xl text-gold">Guests only</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="aspect-[7/6] w-full overflow-hidden">
            <img
              src={hammam}
              alt="Marble hammam of Dar Hadia with a shaft of golden light"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
