import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal from "./Reveal";

const quotes = [
  {
    body: "An experience that transcends mere travel. It is a spiritual returning. Hadia is the heart of Fes.",
    author: "Julian V.",
    role: "Travel writer, Paris",
  },
  {
    body: "Stepping into Dar Hadia is like finding a secret garden. The silence is profound, the design is impeccable, and the hospitality feels like coming home.",
    author: "Elena Moretti",
    role: "Milan",
  },
  {
    body: "The most beautiful stay of our lives. Every meal, every corner of the house, every conversation with Hadia was a gift.",
    author: "Amara & Theo",
    role: "London",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 6500);
    return () => clearInterval(t);
  }, []);

  const q = quotes[i];

  return (
    <section className="relative overflow-hidden border-y border-cream/5 bg-stone-muted/20 py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Voices from our guests
          </span>
        </Reveal>
        <div className="relative mt-10 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
                <span className="text-gold">“</span>
                {q.body}
                <span className="text-gold">”</span>
              </p>
              <footer className="text-[10px] uppercase tracking-[0.35em] text-cream/60">
                {q.author} · <span className="text-cream/40">{q.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-10 flex justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-px w-10 transition-colors ${
                idx === i ? "bg-gold" : "bg-cream/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
