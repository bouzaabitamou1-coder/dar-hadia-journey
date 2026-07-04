import { useEffect, useState } from "react";
import { openEnquiry } from "@/lib/enquiry";

const links = [
  { href: "#story", label: "The Riad" },
  { href: "#suites", label: "The House" },
  { href: "#gastronomy", label: "Gastronomy" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-colors duration-500 md:px-10 ${
        scrolled ? "bg-ebony/70 backdrop-blur-md" : "bg-transparent mix-blend-difference"
      }`}
    >
      <a href="#top" className="font-serif text-lg uppercase tracking-[0.35em] text-cream">
        Dar <span className="text-gold">Hadia</span>
      </a>
      <div className="hidden gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-[10px] uppercase tracking-[0.3em] text-cream/80 transition-colors hover:text-gold"
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => openEnquiry()}
          className="hidden border border-cream/20 px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-cream transition-all hover:border-gold hover:bg-gold hover:text-ebony md:inline-flex"
        >
          Reserve
        </button>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className="h-px w-6 bg-cream" />
            <span className="h-px w-6 bg-cream" />
          </div>
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[64px] z-40 flex flex-col gap-6 bg-ebony/95 px-8 py-10 backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl text-cream"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openEnquiry();
            }}
            className="mt-6 border border-gold px-6 py-4 text-xs uppercase tracking-[0.3em] text-gold"
          >
            Reserve
          </button>
        </div>
      )}
    </nav>
  );
}
