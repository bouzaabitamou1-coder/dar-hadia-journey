import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";
import zellige from "@/assets/gallery-zellige.jpg";
import door from "@/assets/gallery-door.jpg";
import tea from "@/assets/gallery-tea.jpg";
import shadow from "@/assets/gallery-shadow.jpg";
import courtyard from "@/assets/hero-courtyard.jpg";
import rooftop from "@/assets/rooftop-fes.jpg";
import spices from "@/assets/cooking-spices.jpg";
import hammam from "@/assets/hammam.jpg";

const shots = [
  { src: courtyard, alt: "Candlelit courtyard", span: "row-span-2" },
  { src: zellige, alt: "Zellige tile detail", span: "" },
  { src: door, alt: "Carved cedar door", span: "" },
  { src: rooftop, alt: "Rooftop over Fes", span: "col-span-2" },
  { src: tea, alt: "Mint tea being poured", span: "" },
  { src: shadow, alt: "Shadow on tadelakt wall", span: "" },
  { src: spices, alt: "Moroccan spices", span: "" },
  { src: hammam, alt: "Marble hammam", span: "" },
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

        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={i * 0.03}>
              <button
                onClick={() => setOpen(i)}
                className={`group relative block w-full overflow-hidden ${s.span}`}
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-ebony/0 transition-colors group-hover:bg-ebony/20" />
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
