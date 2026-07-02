export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-cream/10 bg-stone-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden py-8">
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap font-serif text-6xl italic text-cream/10 md:text-8xl">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="flex items-center gap-16">
                Dar Hadia · Fes El Bali · Est. Since Care · Dar Hadia · Fes El Bali · Est. Since Care ·
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-cream/10 pt-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl uppercase tracking-[0.35em]">
              Dar <span className="text-gold">Hadia</span>
            </div>
            <p className="mt-6 max-w-xs text-sm text-cream/50">
              An intimate luxury riad in the heart of the Fes medina.
              Nine keys, one family, timeless hospitality.
            </p>
          </div>

          <div>
            <h5 className="mb-6 text-[10px] uppercase tracking-[0.3em] text-gold">
              Contact
            </h5>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>14 Derb el Mitre, Fes El Bali</li>
              <li>Morocco</li>
              <li>+212 535 000 000</li>
              <li>
                <a href="mailto:hello@darhadiafes.com" className="hover:text-gold">
                  hello@darhadiafes.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212535000000"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold hover:text-cream"
                >
                  WhatsApp Hadia →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="mb-6 text-[10px] uppercase tracking-[0.3em] text-gold">
              Follow
            </h5>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <a
                  href="https://www.instagram.com/darhadiafes/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-cream/5 pt-8 text-[10px] uppercase tracking-[0.3em] text-cream/30 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Dar Hadia Fes</span>
          <span>Designed for the soul</span>
        </div>
      </div>
    </footer>
  );
}
