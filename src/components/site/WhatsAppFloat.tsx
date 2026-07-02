import { motion } from "motion/react";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/212535000000"
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.8 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 border border-gold/40 bg-ebony/70 px-5 py-3 backdrop-blur-xl transition-all hover:bg-gold hover:text-ebony md:bottom-8 md:right-8"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inset-0 animate-ping rounded-full bg-gold/70" />
        <span className="relative h-2 w-2 rounded-full bg-gold" />
      </span>
      <span className="text-[10px] uppercase tracking-[0.35em]">Chat with Hadia</span>
    </motion.a>
  );
}
