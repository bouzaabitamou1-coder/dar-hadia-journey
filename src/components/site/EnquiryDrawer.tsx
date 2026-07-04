import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { ENQUIRY_EVENT, type EnquiryPrefill } from "@/lib/enquiry";

type Form = {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  message: string;
};

const EMPTY: Form = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: 2,
  roomId: "stay",
  message: "",
};

export default function EnquiryDrawer() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<Form>(EMPTY);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<EnquiryPrefill>).detail ?? {};
      setForm((f) => ({ ...f, ...detail, guests: detail.guests ?? f.guests }));
      setSent(false);
      setOpen(true);
    };
    window.addEventListener(ENQUIRY_EVENT, handler);
    return () => window.removeEventListener(ENQUIRY_EVENT, handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const update = <K extends keyof Form>(key: K, value: Form[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Phase 2 will POST to a server function that creates the booking,
    // marks the room unavailable, and notifies via email + WhatsApp.
    setSent(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ebony/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-y-0 right-0 z-[71] w-full max-w-lg overflow-y-auto border-l border-gold/20 bg-ebony p-8 md:p-12"
          >
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
                  Reservation
                </span>
                <h3 className="mt-2 font-serif text-3xl italic">Request your stay</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-xs uppercase tracking-[0.3em] text-cream/50 hover:text-gold"
              >
                Close ✕
              </button>
            </div>

            {sent ? (
              <div className="space-y-6 border border-gold/30 bg-gold/5 p-8">
                <div className="text-4xl text-gold">✧</div>
                <h4 className="font-serif text-2xl">Your request has arrived.</h4>
                <p className="text-cream/70">
                  Hadia will personally reply within twenty-four hours to confirm your
                  dates, the room, and any details for your arrival.
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-cream/40">
                  Bekri, {form.name || "Guest"}.
                </p>
                <button
                  onClick={() => {
                    setOpen(false);
                    setTimeout(() => {
                      setSent(false);
                      setForm(EMPTY);
                    }, 500);
                  }}
                  className="mt-4 w-full border border-gold/50 py-4 text-[10px] uppercase tracking-[0.35em] text-gold hover:bg-gold hover:text-ebony"
                >
                  Return to the site
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-6">
                <Row label="Full name" required>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="drawer-input"
                  />
                </Row>
                <div className="grid grid-cols-2 gap-4">
                  <Row label="Email" required>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="drawer-input"
                    />
                  </Row>
                  <Row label="Phone">
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="drawer-input"
                    />
                  </Row>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Row label="Arrive" required>
                    <input
                      required
                      type="date"
                      value={form.checkIn}
                      onChange={(e) => update("checkIn", e.target.value)}
                      className="drawer-input"
                    />
                  </Row>
                  <Row label="Depart" required>
                    <input
                      required
                      type="date"
                      value={form.checkOut}
                      onChange={(e) => update("checkOut", e.target.value)}
                      className="drawer-input"
                    />
                  </Row>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Row label="Guests">
                    <select
                      value={form.guests}
                      onChange={(e) => update("guests", Number(e.target.value))}
                      className="drawer-input"
                    >
                      {[1, 2, 3, 4, 5, 6].map((n) => (
                        <option key={n} value={n} className="bg-ebony">
                          {n}
                        </option>
                      ))}
                    </select>
                  </Row>
                  <Row label="Suite">
                    <select
                      value={form.roomId}
                      onChange={(e) => update("roomId", e.target.value)}
                      className="drawer-input"
                    >
                      <option value="stay" className="bg-ebony">A stay at the Riad</option>
                      <option value="dinner" className="bg-ebony">Rooftop dinner</option>
                      <option value="cooking" className="bg-ebony">Cooking class</option>
                      <option value="private" className="bg-ebony">Private event</option>
                      <option value="any" className="bg-ebony">Any / advise me</option>
                    </select>
                  </Row>
                </div>
                <Row label="A note for Hadia">
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="drawer-input resize-none"
                  />
                </Row>

                <p className="text-[10px] uppercase tracking-[0.3em] text-cream/40">
                  No online payment. Confirmation within 24 hours.
                </p>

                <button
                  type="submit"
                  className="mt-2 w-full bg-gold py-4 text-[10px] uppercase tracking-[0.4em] text-ebony hover:bg-cream"
                >
                  Send request
                </button>
              </form>
            )}

            <style>{`
              .drawer-input {
                width: 100%;
                background: transparent;
                border: 0;
                border-bottom: 1px solid color-mix(in oklab, var(--cream) 15%, transparent);
                color: var(--cream);
                padding: 0.55rem 0;
                font-size: 0.95rem;
                outline: none;
              }
              .drawer-input:focus { border-color: var(--gold); }
              .drawer-input::-webkit-calendar-picker-indicator {
                filter: invert(0.9) sepia(0.3) saturate(3) hue-rotate(5deg);
                cursor: pointer;
              }
            `}</style>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Row({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-[10px] uppercase tracking-[0.3em] text-cream/50">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      {children}
    </label>
  );
}
