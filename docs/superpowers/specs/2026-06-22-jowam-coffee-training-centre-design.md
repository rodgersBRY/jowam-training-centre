# Jowam Coffee Training Centre — Website Design Spec

**Date:** 2026-06-22
**Source of truth for requirements:** `AGENTS.md` (this spec resolves its ambiguities and gaps; it does not override its rules).

---

## 1. Overview

A premium, sensory, coffee-branded marketing website for Jowam Coffee Training Centre — **not** a generic education template. Brand concept: *"Learn Anywhere. Practice Like a Professional."* Positioning: flexible coffee education (daytime physical classes, evening online theory, Saturday hands-on practicals) for working professionals, students, entrepreneurs, hospitality workers, and remote learners.

This document covers the full site. Implementation is sequenced into 5 phases (Section 11).

## 2. Stack & Tooling

- **Next.js (App Router) + TypeScript + Tailwind CSS** (mandated by `AGENTS.md`).
- **Framer Motion** — primary animation library (scroll fade-in, hover lift, modals, counters, coffee wheel, before/after slider, certification reveal).
- **GSAP + ScrollTrigger** — used *only* for the §7.1 Coffee Transformation pinned scroll-story. Loaded via `next/dynamic` (client-only) so it stays out of the initial bundle.
- **Zod** — form validation schemas shared between client components and API routes.
- `next/image` and `next/font` for performance and SEO.
- **No CMS, no database.** (Per `AGENTS.md` and confirmed decisions.)

## 3. Resolved Decisions (gaps in AGENTS.md)

These were unspecified in `AGENTS.md` and resolved with the user during brainstorming:

| Topic | Decision |
|---|---|
| Course content | Not yet available. Build pages against **clearly-marked PLACEHOLDER data** in one editable file; nothing presented as if it were real, final content. |
| Imagery / video | Use **licensed free stock (Unsplash) temporarily** via `next/image`, clearly swappable. Hero uses a muted looping stock coffee video in `/public`. |
| Form backend | **Validate + log/stub only.** API routes validate with Zod, `console.log` the payload, return `{ ok: true }`. Real delivery (Resend/DB) wired later, marked with `// TODO`. |
| Hero | **Option A — Video hero.** Full-width muted looping coffee video; headline fades up on scroll; background slightly zooms. |
| Animation libs | **Both Framer Motion and GSAP, used sparingly.** Framer Motion for general use; GSAP only for the §7.1 scroll-story. |
| §6–§7 module placement | **Distributed** across pages (Section 6 below) rather than all forced onto Home, to keep Home aligned with the fixed §4.1 structure. |

## 4. Design System

**Color palette (STRICT — no other brand colors):**
- Coffee Brown `#4A2A16`
- Jowam Orange `#F24D1E`
- Cream Background `#F8F5F0`
- Dark Sections `#1A120D`

Exposed as Tailwind theme tokens (`coffee`, `orange`, `cream`, `dark`) plus tints/shades derived only as needed for hover/borders.

**Typography:** one modern clean sans-serif via `next/font` (e.g. Plus Jakarta Sans / Inter), high readability, large headings, minimal clutter.

**Visual tone:** real coffee training imagery only (espresso machines, latte art, students). Stock stand-ins are temporary and swappable. No corporate-education stock.

## 5. Data Layer (placeholder content)

All unconfirmed content lives in editable files so real content swaps in one place. Each file begins with `// PLACEHOLDER — replace with real content before launch`.

- `lib/data/courses.ts` — courses: `{ slug, title, summary, duration, curriculum[], outcomes[] }`. **No pricing** (per §4.4). Drives `/courses`, `/courses/[slug]` (`generateStaticParams`), and course dropdowns in forms.
- `lib/data/testimonials.ts`, `lib/data/stats.ts` (counters), `lib/data/faq.ts`, `lib/data/personas.ts`.
- `lib/data/site.ts` — contact placeholders (phone/email/location), nav links, social/WhatsApp links.

## 6. Pages & Section Placement

**Layout shell** (`app/layout.tsx`): fonts, default metadata, JSON-LD `EducationalOrganization`, `<Header>` (transparent over hero → solid on scroll), `<Footer>`, `<StickyMobileCTA>` (§9.4), `<PageLoader>` (§9.5).

| Route | Sections |
|---|---|
| `/` (Home) | Hero (video) → Flexible Learning Paths (embeds §6.2 Schedule Visualizer) → Why Jowam (+ §9.2 Counters) → Courses Overview → Saturday Practical → Gallery (§9.3 masonry) → Testimonials → FAQ → Final CTA. Matches §4.1 exactly. |
| `/about` | Story → Mission → Training Philosophy → Facilities. Plus distributed modules: §7.2 Coffee Wheel, §7.1 Coffee Transformation, §7.3 Before/After Slider. No other sections. |
| `/courses` | Static interactive course cards only (§9.1 hover → expand → outcomes → CTA). No filtering, no CMS. |
| `/courses/[slug]` | Overview → Curriculum → Duration → Outcomes → Apply CTA. `notFound()` on unknown slug. No pricing. |
| `/admissions` | Monthly intake → Learning Paths overview → Application process → CTA. Plus distributed modules: §6.3 Student Personas, §6.4 Journey Timeline, §7.4 Certification Reveal. |
| `/apply` | Full Application Form only. |
| `/contact` | Contact form + phone/email/location placeholders. |

**Module distribution rationale:** §4.1 fixes the Home structure; §6–§7 describe rich modules without assigning a page. Forcing all onto Home would bloat it. Distribution: Schedule Visualizer → Home (inside Learning Paths); Personas, Journey Timeline, Certification Reveal → Admissions; Coffee Wheel, Coffee Transformation → About; Before/After Slider → About (within the transformation/outcome narrative).

## 7. Components (per §13 structure)

- `components/layout/` — Header, Footer, StickyMobileCTA, PageLoader.
- `components/sections/` — one file per section/module: Hero, FlexibleLearningPaths, ScheduleVisualizer, WhyJowam, Counters, CoursesOverview, SaturdayPractical, Gallery, Testimonials, FAQ, FinalCTA, StudentPersonas, JourneyTimeline, CoffeeTransformation, CoffeeWheel, BeforeAfterSlider, CertificationReveal, plus About-specific (Story, Mission, Philosophy, Facilities) and Admissions (Intake, Process) blocks.
- `components/forms/` — QuickInquiryForm, FullApplicationForm, ContactForm + shared Field/Input/Select/Textarea primitives.
- `components/ui/` — Button, Card, Container, SectionHeading, Tooltip, AnimatedCounter, FadeIn (scroll wrapper), Modal.
- `lib/validation/` — Zod schemas (one per form), shared client + server.
- `lib/utils/` — `cn()`, scroll/intersection helpers, reduced-motion hook.

## 8. Forms & API (STRICT — only 3 forms, per §10)

All forms validate client-side and server-side with the same Zod schema. API routes log the payload and return `{ ok: true }`; a `// TODO: wire real delivery` marker sits at each send point.

1. **Quick Inquiry** → `POST /api/quick-inquiry` — Name (req), Phone (req), Email (opt), Course Interest (req).
2. **Full Application** (primary, on `/apply`) → `POST /api/apply` — Personal (Name, DOB, Gender, ID/Passport); Contact (Phone, Email, Location); Course (Course, Intake Month); Background (Education, Experience opt); Emergency (Contact name, Phone, Relationship).
3. **Contact** → `POST /api/contact` — Name, Email, Subject, Message.

## 9. Animation Rules (§8 — strict, sparing)

Allowed: scroll fade-in, hover lift, modal transitions, banner slide-in, counter animations. Approved advanced: GSAP scroll storytelling (§7.1 only), Framer Motion transitions. **No over-animation.** All animation respects `prefers-reduced-motion` (degrades to instant/visible). GSAP dynamically imported so it never affects initial load.

## 10. SEO & Performance

**SEO (§11):** per-page `metadata` (title/description/keywords) targeting *barista training Kenya, coffee academy Nairobi, barista course Kenya, coffee training school Nairobi*; semantic HTML; one `<h1>` per page + ordered headings; `next/image` everywhere; `app/sitemap.ts` + `app/robots.ts`; JSON-LD `EducationalOrganization` in root layout.

**Performance (§12):** mobile-first; images lazy by default, `priority` only on hero; hero video muted/playsinline/`preload="metadata"` + poster image for fast LCP; GSAP dynamically imported; no unnecessary libraries.

## 11. Build Phasing

Each phase is independently verifiable (build passes, pages render).

1. **Foundation** — Next.js scaffold, Tailwind theme/tokens, `next/font`, layout shell, placeholder data files, UI primitives, `next.config` remote image config.
2. **Core pages + static content** — Home static sections, About, Courses + `[slug]`, Admissions, Contact static content.
3. **Forms + API** — 3 Zod schemas, 3 form components, 3 stubbed API routes.
4. **Interactive/animated modules** — FadeIn, Counters, Schedule Visualizer, Personas, Journey Timeline, Coffee Wheel, Before/After Slider, Certification Reveal, Gallery; GSAP Coffee Transformation last.
5. **Polish** — PageLoader, StickyMobileCTA, SEO metadata/sitemap/robots/JSON-LD, accessibility + reduced-motion pass, performance pass.

## 12. Out of Scope (explicit)

- No pages beyond §4. No invented content, courses, testimonials, or stats presented as real.
- No pricing on course detail pages unless provided.
- No CMS, no database, no course filtering.
- No real form delivery in this build (stubbed; wired later).
