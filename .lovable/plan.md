## Phase 1 — Homepage build (this plan)

Build the full Dar Hadia Fes marketing homepage in the "Heritage Noir Luxury" direction you picked. No booking backend or admin yet — the Reserve buttons will open a stylish "Request a stay" form that captures the enquiry client-side (dates, room, guests, contact) and shows a confirmation state, so the site feels complete. We wire the real booking engine, admin, WhatsApp and email in Phase 2.

### Design system

- Palette: ebony `#121212`, gold `#C5A059`, cream `#F9F7F2`, stone `#2A2A2A`, deep cobalt & terracotta accents for room cards.
- Type: Playfair Display (italic serif) for display, Outfit for UI/body. Loaded via `<link>` in `__root.tsx` head (per Tailwind v4 rules — never `@import` a remote URL in CSS).
- Tokens go into `src/styles.css` under `@theme` + `:root` (oklch), so every color is a semantic utility (`bg-ebony`, `text-gold`, etc.). Global dark background, cream text, gold selection.
- Rounded-none, hairline gold rules, generous vertical rhythm, `mix-blend-difference` nav.

### Route structure

Single-page marketing site with a shareable homepage. Section anchors for in-page nav.

```
src/routes/
  __root.tsx     → font links, real title/description/OG (Dar Hadia Fes), site chrome
  index.tsx      → homepage composing all 13 section components
```

Deep pages (rooms detail, journal, etc.) are out of scope for Phase 1.

### Section components (`src/components/site/`)

Built in the order and composition of the chosen prototype, with sections added to reach the full 13:

1. `SiteNav` — fixed, mix-blend-difference, Reserve button opens enquiry drawer
2. `Hero` — fullscreen cinematic image + "A Poetry of Heritage" + scroll cue
3. `StoryOfHadia` — portrait + gold-quote card + narrative
4. `RiadExperience` — three intro pillars (Architecture, Craft, Hospitality) with zellige-inspired divider
5. `LuxurySuites` — 3-column edge-to-edge room cards with hover scale + gradient overlay
6. `Gastronomy` — tagine imagery + numbered pillars column (Rooftop Kitchen, Wellness, Souk Expeditions)
7. `Rooftop` — full-bleed parallax medina-at-dusk image with overlay headline
8. `CookingClasses` — split editorial with spice/hands imagery + itinerary bullets
9. `WellnessHammam` — dark marble hammam imagery + ritual description
10. `Testimonials` — auto-advancing quote carousel (3 testimonials)
11. `InteractiveGallery` — masonry grid, click opens lightbox with next/prev
12. `ExploreFez` — map-style illustration + curated medina highlights list
13. `ReservationCTA` — "Experience Fes" headline + inline date/room/guests picker → opens `EnquiryDrawer`
14. `ContactFooter` — address, phone, email, socials, WhatsApp CTA
15. `WhatsAppFloat` — fixed bottom-right pill (placeholder `wa.me` link)
16. `EnquiryDrawer` — slide-in sheet with dates, room select, guests, name/email/phone, message → submit shows "Request received" success state (no backend yet)

### Animations

- `motion/react` (Framer Motion) for reveal-on-scroll (fade + translate-y), image parallax on hero and rooftop, hover interactions on room cards, drawer open.
- Text reveal: split lines, staggered fade-up on hero/section headings.
- Cursor lantern glow: fixed radial-gradient div following pointer, blurred, low-opacity gold (respects `prefers-reduced-motion`).
- Lenis smooth scroll wired at the root.
- Subtle floating "lantern particle" divs (CSS keyframes) behind hero — no Three.js in Phase 1 (heavy for score-95 target; add in a polish pass if desired).
- Premium loader: first-visit only, gold monogram fade with progress line, ≤1.2s max.
- All animations gated by `prefers-reduced-motion`.

### Imagery

Generate 12 hero/section images in `src/assets/` using the fast image model, matching the placeholder prompts (courtyard, portrait of Hadia, three suites, tagine, rooftop, hammam, spices, medina alley, plus 4 gallery tiles). Imported as ES modules so Vite fingerprints them.

Later (Phase 2) we'll add the admin media upload system with the `/rooms /restaurant /rooftop /food /experiences /owner-hadia /medina` buckets and auto-generated galleries.

### SEO & head

- Real `<title>` "Dar Hadia — A Luxury Riad in the Heart of the Fes Medina"
- Description, og:title, og:description, og:type=website, og:image (generated hero), twitter:card=summary_large_image
- Semantic HTML: single `<h1>` in hero, `<section>` per block, alt text on every image, lazy-load below-the-fold images.

### Tech notes

- Stack: TanStack Start (React 19 + Vite 7 + Tailwind v4 + Framer Motion + Lenis). Server functions available for Phase 2.
- Install: `motion`, `lenis`, `embla-carousel-react` (testimonials/gallery).
- No new routes gated behind auth. No Lovable Cloud yet — it goes on in Phase 2 with the booking backend.
- Performance: images sized correctly, `loading="lazy"` + `decoding="async"` below hero, motion gated on reduced-motion.

### What's explicitly deferred to Phase 2

- Lovable Cloud enable + Postgres schema (rooms, bookings, blocked_dates, testimonials, gallery_images, admin users/roles)
- Availability engine + calendar
- Admin dashboard (login, analytics, booking approve/reject, room + gallery + testimonial CRUD, availability calendar, blocked dates)
- WhatsApp Cloud API integration for owner notifications (needs Hadia's number)
- Email automations — customer confirmation, owner notification, approval, rejection, reminders (needs verified sender domain via Lovable Emails + owner email)
- Media upload buckets & auto-generated galleries powered by uploads
- Storage bucket setup and RLS

I'll come back to you before Phase 2 to collect Hadia's WhatsApp number, notification email, and set up her email domain.

### Deliverable at end of Phase 1

A polished, fully-designed single-page site at `/` with all 13 sections, real generated imagery, luxury animations, working enquiry drawer that captures a request (no send yet), WhatsApp float, and Awwwards-level craft — ready to show Hadia.