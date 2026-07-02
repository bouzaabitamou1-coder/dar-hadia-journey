import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ebony"
        >
          <motion.div
            initial={{ letterSpacing: "0.05em", opacity: 0 }}
            animate={{ letterSpacing: "0.35em", opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl italic text-cream"
          >
            <span className="text-gold">D</span>ar Hadia
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="mt-8 h-px w-40 origin-left bg-gold/60"
          />
          <p className="mt-6 text-[10px] uppercase tracking-[0.4em] text-cream/40">
            Fes El Bali · Est. Since Care
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
