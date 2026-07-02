import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImg from "@/assets/hero-courtyard.jpg";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.2]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0"
      >
        <img
          src={heroImg}
          alt="Candlelit courtyard of Dar Hadia at dusk"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ebony/60 via-ebony/20 to-ebony" />
      </motion.div>

      {/* Floating lantern particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => {
          const size = 6 + Math.random() * 18;
          return (
            <span
              key={i}
              className="particle"
              style={{
                width: size,
                height: size,
                left: `${Math.random() * 100}%`,
                top: `${20 + Math.random() * 70}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 8}s`,
              }}
            />
          );
        })}
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="block text-xs uppercase tracking-[0.5em] text-gold"
        >
          Fes El Bali · Morocco
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-[15vw] leading-[0.9] italic md:text-8xl lg:text-9xl"
        >
          A Poetry <br />
          of <span className="text-gold">Heritage</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 1 }}
          className="mx-auto mt-8 max-w-lg text-pretty text-sm leading-relaxed text-cream/70 md:text-base"
        >
          Step into the ancestral home of Hadia, where the scent of orange blossom
          meets the soul of ancient Morocco.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="h-12 w-px bg-gold/60" />
        <span className="text-[9px] uppercase tracking-[0.4em] text-gold">Scroll to discover</span>
      </motion.div>
    </section>
  );
}
