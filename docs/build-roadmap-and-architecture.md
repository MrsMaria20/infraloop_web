# InfraLoop Website — Build Roadmap & Architecture

Derived from `website_prd.md`. Planning only — no code.

---

# 1. Phased Build Roadmap

## Phase 1 — Foundation & Homepage (Week 1–2)

**Goal:** Ship a live homepage that communicates value and establishes brand.

| Deliverable | Details |
|-------------|---------|
| Next.js 14 + TypeScript + Tailwind | Project scaffold, ESLint, base config |
| Design tokens | Tailwind theme (colors, fonts, spacing) per PRD |
| Layout shell | Root layout, header, footer, nav |
| Landing page (/) | Hero (blueprint SVG), 3 value props, stats strip, CTA banner |
| Responsive nav | Desktop nav + hamburger at 768px, 44px touch targets |
| Deployment | Vercel project, env placeholder, basic SEO meta |

**Exit criteria:** Homepage loads, brand colors/typography applied, primary CTA visible, mobile-friendly.

---

## Phase 2 — Core Content Pages (Week 2–3)

**Goal:** Complete informational pages that support consideration (Tier 2).

| Deliverable | Details |
|-------------|---------|
| About (/about) | Mission, waste stats, approach, values, timeline; CTA: Meet the Team |
| How It Works (/how-it-works) | Seller/buyer workflows, materials overview, FAQ accordion, logistics; CTA: Start Listing Materials |
| Meet the Team (/team) | Founder bios, advisors, LinkedIn links, team photo; CTA: Book a Call |
| Shared components | Section wrappers, headings, CTA buttons, stat blocks |
| Internal linking | Nav + footer links to all live pages |

**Exit criteria:** All three pages render, copy placeholders in place, CTAs route correctly.

---

## Phase 3 — Conversion & Forms (Week 3–4)

**Goal:** Capture leads and book demos (Tier 3 conversion).

| Deliverable | Details |
|-------------|---------|
| Pilot page (/pilot) | Page shell + Tally embed (or redirect) for pilot application |
| Pilot form fields (in Tally) | Name, Company, Role, Email, Phone, State/Region, Material Types, Avg Monthly Surplus Volume |
| Marketplace Preview (/marketplace-preview) | Annotated screenshots, listing cards, search/filter preview; CTA: Request Early Access |
| Contact (/contact) | Calendly embed, contact form (Tally or native), direct email |
| Form integration strategy | Tally forms embedded/redirect; webhook or manual CRM handoff documented |

**Exit criteria:** Pilot and contact forms submit; demo scheduling works; marketplace preview conveys product maturity.

---

## Phase 4 — Polish, SEO & Analytics (Week 4–5)

**Goal:** Hit performance/SEO targets and enable measurement.

| Deliverable | Details |
|-------------|---------|
| next-sitemap | Auto sitemap for /, /about, /how-it-works, /pilot, /marketplace-preview, /team, /contact |
| Meta & Open Graph | Per-page title, description, OG image where needed |
| Core Web Vitals | LCP < 2.5s, FID < 100ms, CLS < 0.1; optimize hero SVG and images |
| Analytics | Google Analytics + Clarity placeholders or integration |
| Mobile QA | 44px targets, hamburger, stacked layouts < 640px, form UX |
| Conversion tracking | Form submission events, CTA click events for funnel reporting |

**Exit criteria:** Sitemap live, performance targets met, analytics firing, no critical mobile issues.

---

## Phase 5 — Optional / Post-Launch

- Newsletter signup (Loops/Mailchimp) — Tier 1 awareness
- HubSpot/Airtable CRM sync for Tally submissions
- Explainer video embed on How It Works or Homepage
- Social proof (pilot counter, testimonials) when data exists
- A/B tests on CTAs or hero copy

---

# 2. Route Map

| Route | Purpose | Key Content / UI | Primary CTA |
|-------|---------|------------------|-------------|
| **/** | Convert & communicate value in ~5s | Hero (blueprint SVG), 3 value props (Sell · Save · Sustain), How It Works teaser, social proof/stats, CTA banner | Join the Pilot Program → |
| **/about** | Build trust, mission | Mission, construction waste stats, approach, values, timeline | Meet the Team → |
| **/how-it-works** | Remove confusion, objections | Seller workflow, buyer workflow, accepted materials, FAQ accordion, logistics | Start Listing Materials → |
| **/pilot** | Primary conversion — qualified leads | Pilot application form (Tally): Name, Company, Role, Email, Phone, State/Region, Material Types, Avg Monthly Surplus | Apply to Join the Pilot → |
| **/marketplace-preview** | Show product maturity, reduce signup friction | Annotated platform screenshots, listing cards, search/filter UI preview, value metrics | Request Early Access → |
| **/team** | Credibility | Founder bios, advisor profiles, LinkedIn links, team photo | Book a Call with the Team → |
| **/contact** | Demo calls | Calendly scheduler, contact form, direct email | Schedule a Demo Call → |

**Secondary CTA (Homepage):** See How It Works →

---

# 3. Component Architecture

## Layout Layer

| Component | Responsibility |
|-----------|-----------------|
| **RootLayout** | HTML shell, fonts (Rajdhani, Barlow, Barlow Condensed), body background (Black #0A0C0E) |
| **Header** | Logo, nav links, CTA button, hamburger + mobile drawer at 768px |
| **Footer** | Charcoal (#1E2428), links (About, How It Works, Pilot, Team, Contact), legal/social if needed |
| **PageSection** | Max-width wrapper, vertical padding, optional background (Navy Light, Gray Pale, etc.) |

## Page-Level Sections (by page)

- **Home:** Hero, ValueProps (3 cards), HowItWorksTeaser, SocialProof / StatsStrip, CtaBanner
- **About:** MissionBlock, WasteStats, Approach, Values, Timeline
- **How It Works:** SellerWorkflow, BuyerWorkflow, MaterialsOverview, FAQ (accordion), LogisticsOverview
- **Pilot:** PilotFormContainer (wraps Tally embed or iframe)
- **Marketplace Preview:** ScreenshotShowcase, ListingCardsPreview, SearchFilterPreview, ValueMetrics
- **Team:** TeamGrid (founder + advisor cards with photo, bio, LinkedIn)
- **Contact:** CalendlyEmbed, direct email only (V1: no contact form)

## Shared / Reusable Components

| Component | Use |
|-----------|-----|
| **Button** | Primary (Construction Orange), secondary (outline), size variants, 44px min height on mobile |
| **Heading** | H1 (Rajdhani Bold), H2/H3 (Barlow Condensed or Rajdhani), color variants |
| **Card** | Navy Light background, border Gray Dark, use for value props, team, stats |
| **StatBlock** | Number + label for stats strip |
| **CtaBanner** | Full-width CTA strip with headline + button |
| **Accordion** | FAQ on How It Works (single or multi-open) |
| **FormEmbed** | Wrapper for Tally iframe (pilot form) with responsive aspect/height |

## Design Constraints

- One primary CTA per page (per PRD).
- All interactive targets ≥ 44px on touch.
- Blueprint Hero: SVG component or static SVG with grid, geometry, orange dimensions, vignette.

---

# 4. Recommended Folder Structure

```
website_v1/
├── app/
│   ├── layout.tsx              # Root layout (fonts, Header, Footer)
│   ├── page.tsx                 # Home /
│   ├── globals.css              # Tailwind imports, any base styles
│   ├── about/
│   │   └── page.tsx
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── pilot/
│   │   └── page.tsx
│   ├── marketplace-preview/
│   │   └── page.tsx
│   ├── team/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageSection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Heading.tsx
│   │   ├── StatBlock.tsx
│   │   └── Accordion.tsx
│   ├── home/
│   │   ├── Hero.tsx            # Blueprint SVG hero
│   │   ├── ValueProps.tsx
│   │   ├── HowItWorksTeaser.tsx
│   │   ├── StatsStrip.tsx
│   │   └── CtaBanner.tsx
│   ├── about/
│   │   └── ...                 # About-specific sections if desired
│   ├── how-it-works/
│   │   └── FAQ.tsx
│   ├── pilot/
│   │   └── PilotFormEmbed.tsx  # Tally wrapper
│   ├── marketplace-preview/
│   │   └── ...
│   ├── team/
│   │   └── TeamGrid.tsx
│   └── contact/
│       └── CalendlyEmbed.tsx   # V1: Calendly + direct email only
├── lib/
│   └── constants.ts            # Routes, CTAs, copy snippets
├── public/
│   ├── images/
│   └── ...                     # OG image, favicon
├── docs/
│   ├── website_prd.md
│   └── build-roadmap-and-architecture.md
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

**Notes:**

- One route = one `app/.../page.tsx`; shared layout in `app/layout.tsx`.
- Keep page-specific sections under `components/<page>` for clarity; promote to `components/ui` when reused.
- `lib/constants.ts` can hold route paths, CTA labels, and design token names for consistency.

---

# 5. Form Integration Strategy (Tally)

## Role of Tally

- **Pilot application (/pilot):** Multi-field form (Name, Company, Role, Email, Phone, State/Region, Material Types, Avg Monthly Surplus). High value; keep on-site UX, submit to Tally.
- **Contact / demo (/contact):** Short form (name, email, message) or “Schedule demo” CTA that goes to Calendly. Tally optional for contact form.

## Implementation Options

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A. Embed** | Tally form embedded in page via iframe or Tally’s embed script | Stays on InfraLoop domain, consistent nav/footer | Height/responsiveness; styling limited to Tally theme |
| **B. Redirect** | “Apply to Join the Pilot” links to Tally form URL | Full Tally UX, no embed tuning | Leaves site; less control over surrounding context |
| **C. Hybrid** | Pilot: embed on /pilot; Contact: embed or link to Tally/Calendly | Balance of control and simplicity | Two patterns to maintain |

**Recommendation:** **Embed on /pilot** (Option A for pilot). Use a responsive wrapper (`PilotFormEmbed`) that gives the iframe/embed a min-height and full width so it works on mobile. **V1 Contact:** Calendly embed + direct email only (no contact form in scope).

## Tally Setup Checklist

1. **Create Tally form “Pilot Application”** with fields: Full Name, Company Name, Role/Title, Email, Phone, State/Region, Material Types (multi-select or checkboxes), Average Monthly Surplus Volume (dropdown or text).
2. **Theme Tally form** to approximate brand (navy, orange CTA) where Tally allows.
3. **Get embed code** (iframe or script) from Tally dashboard.
4. **Implement** `PilotFormEmbed` in `app/pilot/page.tsx` that renders the embed; use a container with `min-height` (e.g. 600px or 100vh minus header) so it doesn’t collapse.
5. **Thank-you / redirect:** Configure in Tally (e.g. thank-you message or redirect back to `/` or `/thank-you`).
6. **Integrations:** Connect Tally to HubSpot/Airtable/email for notifications and CRM (post–Phase 3 if not in scope for MVP).

## Data Flow

- User fills form on /pilot → Tally receives submission → Tally webhook or native integration → CRM (HubSpot/Airtable) and/or email to team.
- No need to store submissions in Next.js unless you add a custom backend later; keep V1 serverless.

## Mobile

- Use Tally’s responsive embed; ensure 44px touch targets and minimal required fields (already specified in PRD).

---

# 6. Tailwind Design Token Setup

Map PRD colors and typography into `tailwind.config.ts` so classes like `bg-navy-deep`, `text-construction-orange`, and `font-display` are available.

## Color Tokens

Extend `theme.colors` (or use CSS variables in `theme.extend`). Names below match PRD usage.

| Token name | Hex | Tailwind usage |
|------------|-----|----------------|
| navy-deep | #0B1F35 | Primary brand (nav, key backgrounds) |
| navy-light | #1A3A57 | Card backgrounds |
| construction-orange | #E07B2A | CTAs, accents, dimension lines in hero |
| charcoal | #1E2428 | Footer |
| gray-dark | #3A4550 | Borders |
| gray-mid | #6B7A87 | Secondary text |
| gray-light | #B8C5D0 | Body text on dark |
| gray-pale | #E8EDF2 | Light section backgrounds |
| off-white | #F5F8FA | Text on dark |
| black | #0A0C0E | Page background (body) |

**Note:** Override Tailwind’s default `black` if you want `black` to be #0A0C0E site-wide, or use a name like `brand-black` to avoid clashing.

## Typography

| PRD font | Role | Tailwind extension |
|----------|------|---------------------|
| Rajdhani Bold | Display (hero, stats) | `fontFamily.display` or `font-display` |
| Barlow Condensed | UI (nav, buttons) | `fontFamily.ui` or `font-ui` |
| Barlow Regular | Body | `fontFamily.body` or default `font-sans` |

**Suggested `theme.extend`:**
- `fontFamily: { display: ['Rajdhani', 'sans-serif'], ui: ['Barlow Condensed', 'sans-serif'], body: ['Barlow', 'sans-serif'] }`
- Load Rajdhani, Barlow, and Barlow Condensed via Google Fonts in `app/layout.tsx` (or `next/font/google`).

## Spacing & Sizing (optional)

- **Touch targets:** Use `min-h-[44px]` / `min-w-[44px]` for buttons and nav items (or a custom spacing token like `touch: '44px'`).
- **Section padding:** Consistent vertical rhythm (e.g. `py-16` md:`py-24`) can be encoded as a custom spacing or kept as utilities.

## Example Structure (conceptual)

In `tailwind.config.ts`:
- `theme.extend.colors`: all 10 color tokens.
- `theme.extend.fontFamily`: display, ui, body.
- Optionally `theme.extend.minHeight`: `touch: '44px'`.

In `app/globals.css`:
- `@tailwind base; @tailwind components; @tailwind utilities;`
- Optional: `body { @apply bg-black text-gray-light font-body; }` (or equivalent).
- Base font loading via Next.js font loader for Rajdhani, Barlow, Barlow Condensed.

No actual code written here; this is the token *setup plan* to implement when building.

---

# Summary

| Artifact | Purpose |
|----------|---------|
| **Phased roadmap** | 5 phases from foundation → homepage → content → conversion → polish; clear exit criteria per phase. |
| **Route map** | 7 routes with purpose, content, and primary CTA. |
| **Component architecture** | Layout (Root, Header, Footer, PageSection), page sections, shared UI (Button, Card, Accordion, etc.), and design rules. |
| **Folder structure** | App Router per-route pages, components by layout/ui/page, lib for constants, docs for PRD and this doc. |
| **Tally strategy** | Pilot form embedded on /pilot; Contact = Calendly + optional Tally/mailto; embed wrapper, theming, CRM later. |
| **Tailwind tokens** | 10 colors, 3 font families, optional touch/min-height; implement in `tailwind.config` and `globals.css` when coding. |
