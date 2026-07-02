import { useState } from "react";
import Reveal from "./Reveal";
import { openEnquiry } from "@/lib/enquiry";

export default function ReservationCTA() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [room, setRoom] = useState("amber");

  return (
    <section id="reserve" className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold">
            Reservation
          </span>
          <h2 className="mt-6 font-serif text-6xl leading-[0.95] italic md:text-8xl">
            Experience <span className="text-gold">Fes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-cream/60">
            Every stay is confirmed personally by Hadia. No online payment —
            we send a written confirmation within twenty-four hours.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              openEnquiry({ roomId: room, checkIn, checkOut, guests });
            }}
            className="mx-auto mt-16 max-w-4xl border border-cream/10 bg-ebony/60 p-6 backdrop-blur-xl md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-4">
              <Field label="Arrive">
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="input-line"
                />
              </Field>
              <Field label="Depart">
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="input-line"
                />
              </Field>
              <Field label="Guests">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="input-line"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="bg-ebony">
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Suite">
                <select
                  value={room}
                  onChange={(e) => setRoom(e.target.value)}
                  className="input-line"
                >
                  <option value="amber" className="bg-ebony">Suite Amber</option>
                  <option value="cobalt" className="bg-ebony">Royal Cobalt</option>
                  <option value="cedar" className="bg-ebony">Cedar Retreat</option>
                  <option value="any" className="bg-ebony">Any / advise me</option>
                </select>
              </Field>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-gold py-5 text-[10px] uppercase tracking-[0.4em] text-ebony transition-all hover:bg-cream"
            >
              Request your stay
            </button>
          </form>
        </Reveal>
      </div>

      <style>{`
        .input-line {
          width: 100%;
          border: 0;
          border-bottom: 1px solid color-mix(in oklab, var(--cream) 20%, transparent);
          background: transparent;
          color: var(--cream);
          padding: 0.5rem 0;
          font-size: 0.95rem;
          outline: none;
          appearance: none;
        }
        .input-line:focus {
          border-color: var(--gold);
        }
        .input-line::-webkit-calendar-picker-indicator {
          filter: invert(0.9) sepia(0.3) saturate(3) hue-rotate(5deg);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-left">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.3em] text-cream/50">
        {label}
      </span>
      {children}
    </label>
  );
}
