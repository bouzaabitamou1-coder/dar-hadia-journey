import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import { DH } from "@/assets/dh";

const shots = [
  { src: DH.hero, alt: "Rooftop under the Fes twilight", span: "col-span-2 row-span-2" },
  { src: DH.zelligeDetail, alt: "Zellige-clad reception hall", span: "" },
  { src: DH.hostTea, alt: "Mint tea poured in the salon", span: "" },
  { src: DH.tagineSteam, alt: "Steaming tagine at the table", span: "" },
  { src: DH.rooftopDay, alt: "Rooftop terrace over the medina", span: "" },
  { src: DH.salonNight, alt: "Salon Marocain by lantern light", span: "col-span-2" },
  { src: DH.dinnerCandlelit, alt: "Candlelit dinner on the rooftop", span: "" },
  { src: DH.soukTomatoes, alt: "Fes souk — tomatoes and onions", span: "" },
  { src: DH.riadHall, alt: "The grand hall of the riad", span: "" },
  { src: DH.rooftopTea, alt: "Tea with a view of Fes", span: "" },
  { src: DH.cookingTagines, alt: "Tagines on the fire", span: "" },
  { src: DH.rooftopDusk2, alt: "Rooftop tent at blue hour", span: "col-span-2" },
];

export default function InteractiveGallery() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((v) => (v === null ? v : (v + 1) % shots.length));
      if (e.key === "ArrowLeft")
        setOpen((v) => (v === null ? v : (v - 1 + shots.length) % shots.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 flex items-end justify-between md:mb-16">
            <div>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                Gallery
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Fragments of the house.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-2 md:auto-rows-[220px] md:grid-cols-4 md:gap-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.03} className={s.span}>
              <button
                onClick={() => setOpen(i)}
                className="group relative block h-full w-full overflow-hidden"
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ebony/0 transition-colors group-hover:bg-ebony/25" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ebony/95 p-6 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <button
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.3em] text-cream/70 hover:text-gold"
              onClick={() => setOpen(null)}
            >
              Close ✕
            </button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={shots[open].src}
              alt={shots[open].alt}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-cream/60 hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? v : (v - 1 + shots.length) % shots.length));
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-cream/60 hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((v) => (v === null ? v : (v + 1) % shots.length));
              }}
              aria-label="Next"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
