import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { DH } from "@/assets/dh";
const rooftop = DH.rooftopDusk3;

export default function Rooftop() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [reduce ? "0%" : "-15%", reduce ? "0%" : "15%"]);

  return (
    <section
      ref={ref}
      className="relative flex h-[85vh] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 scale-125">
        <img
          src={rooftop}
          alt="Sunset view of the Fes medina from the Dar Hadia rooftop"
          loading="lazy"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ebony/50" />
      </motion.div>

      <div className="relative z-10 px-6 text-center">
        <span className="block text-[10px] uppercase tracking-[0.5em] text-gold">
          The Rooftop
        </span>
        <h2 className="mt-8 font-serif text-6xl italic leading-none md:text-8xl lg:text-9xl">
          A skyline of <br />
          <span className="text-gold">a thousand years</span>
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-cream/70">
          Suspended above the medina, tea is poured as the muezzin calls the evening.
        </p>
      </div>
    </section>
  );
}
