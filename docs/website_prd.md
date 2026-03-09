
# InfraLoop Website PRD  
## Part 1 of 2 — Marketing & Lead Generation Site

Public-Facing Marketing · Pilot Lead Generation · Brand Credibility

**Tech Stack:** Next.js · TypeScript · Tailwind CSS · Vercel  

Version 1.1 | March 2026 | CONFIDENTIAL

---

# Document Overview

This document defines the product requirements for the InfraLoop marketing website — the public-facing surface responsible for explaining what InfraLoop is, building brand credibility with construction professionals, and converting visitors into pilot program participants.

This is **Part 1 of 2 in the InfraLoop PRD series.**  
Part 2 covers the InfraLoop Marketplace Platform (MVP).

### Scope of This Document

- Website Goals & Success Criteria
- Target User Segments
- Core Pages (7 pages — purpose, content, UI elements, CTAs)
- UX & Design Direction
- Conversion Strategy
- Recommended Tech Stack

---

# 1. Website Goals

The InfraLoop marketing website must accomplish five core objectives in order of priority.

| Goal | Description |
|-----|-------------|
| Explain the Product | Communicate what InfraLoop does, who it is for, and why it matters in plain contractor language |
| Build Credibility | Establish trust with a skeptical B2B audience through team credentials and professional identity |
| Generate Pilot Signups | Convert visitors into pilot program applicants |
| Collect Qualified Leads | Capture contractor name, company, role, region, and material type |
| Preview the Platform | Provide a visual sense of the marketplace product |

### Website Success Metrics

- 50 pilot applications within 90 days
- 20 demo calls booked within 60 days
- >8% lead form conversion rate
- <55% homepage bounce rate
- >45% mobile traffic

---

# 2. Target Website Users

| User Type | Priority | Motivation |
|-----------|----------|-----------|
| General Contractors | Primary | Over-order materials as buffer, responsible for disposal costs |
| Subcontractors | Primary | Leftover specialty materials, price sensitive |
| Real Estate Developers | Secondary | ESG reporting, portfolio sustainability |
| Sustainability Managers | Secondary | Track landfill diversion metrics |
| Procurement Officers | Tertiary | Source discounted materials |
| Investors / Press | Tertiary | Evaluate market opportunity |

---

# 3. Core Pages

## Landing Page (/)

**Purpose**

Convert anonymous visitors and communicate the value proposition within 5 seconds.

**Key Content**

- Hero headline + subheadline
- 3 value propositions (Sell · Save · Sustain)
- How It Works teaser
- Social proof / pilot counter
- Stats strip
- CTA banner

**Hero Design**

Blueprint-style SVG background with architectural grid and orange dimension lines.

**Primary CTA**

Join the Pilot Program →

**Secondary CTA**

See How It Works →

---

## About Page (/about)

**Purpose**

Build brand trust and communicate the mission.

**Content**

- Mission statement
- Construction waste problem statistics
- InfraLoop approach
- Company values
- Timeline

**Primary CTA**

Meet the Team →

---

## How It Works (/how-it-works)

**Purpose**

Remove confusion and objections.

**Content**

- Seller workflow
- Buyer workflow
- Accepted materials overview
- FAQ accordion
- Logistics overview

**Primary CTA**

Start Listing Materials →

---

## Join Pilot Program (/pilot)

**Purpose**

Primary conversion page capturing qualified leads.

**Pilot Form Fields**

- Full Name
- Company Name
- Role / Title
- Email
- Phone
- State / Region
- Material Types
- Average Monthly Surplus Volume

**Primary CTA**

Apply to Join the Pilot →

---

## Marketplace Preview (/marketplace-preview)

**Purpose**

Show product maturity and reduce signup friction.

**Content**

- Annotated platform screenshots
- Listing cards
- Search / filter UI preview
- Value metrics

**Primary CTA**

Request Early Access →

---

## Meet the Team (/team)

**Purpose**

Establish credibility.

**Content**

- Founder bios
- Advisor profiles
- LinkedIn links
- Team photo

**Primary CTA**

Book a Call with the Team →

---

## Contact / Demo (/contact)

**Purpose**

Convert high-intent visitors into demo calls.

**Content**

- Calendly scheduler
- Contact form
- Direct email

**Primary CTA**

Schedule a Demo Call →

---

# 4. UX & Design Direction

InfraLoop should feel like a **modern industrial platform built for construction professionals**, not a consumer startup.

---

## Color Palette

| Token | Hex | Usage |
|------|------|------|
| Navy Deep | #0B1F35 | Primary brand color |
| Navy Light | #1A3A57 | Card backgrounds |
| Construction Orange | #E07B2A | CTA accent |
| Charcoal | #1E2428 | Footer |
| Gray Dark | #3A4550 | Borders |
| Gray Mid | #6B7A87 | Secondary text |
| Gray Light | #B8C5D0 | Body text on dark |
| Gray Pale | #E8EDF2 | Light backgrounds |
| Off White | #F5F8FA | Text on dark |
| Black | #0A0C0E | Page background |

---

## Typography

| Font | Role | Usage |
|----|----|----|
| Rajdhani Bold | Display | Hero text, stats |
| Barlow Condensed | UI | Nav and buttons |
| Barlow Regular | Body | Paragraph text |

---

# Hero Section Concept

SVG architectural blueprint background including:

- grid lines
- floor plan geometry
- elevation drawings
- orange dimension annotations
- blueprint title block

A radial vignette focuses attention toward the center wordmark.

---

# 5. Conversion Strategy

The website operates as a **three-tier funnel.**

### Tier 1 — Awareness

- Email capture
- newsletter signup
- LinkedIn retargeting

### Tier 2 — Consideration

- Marketplace preview
- explainer video
- social proof counters

### Tier 3 — Conversion

- Pilot application form
- Demo booking
- urgency messaging

### Conversion Principles

1. Lead with financial value
2. Reduce perceived risk
3. Use contractor language
4. One primary CTA per page
5. Mobile-first forms
6. Minimal required form fields

---

# 6. Recommended Tech Stack

Option B confirmed.

| Technology | Role |
|-----------|------|
| Next.js 14 | Web framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Vercel | Deployment |

---

## Supporting Tools

| Tool | Purpose |
|----|----|
| Tally / Typeform | Pilot application form |
| HubSpot / Airtable | CRM |
| Calendly | Demo scheduling |
| Google Analytics + Clarity | Analytics |
| Loops / Mailchimp | Email automation |
| next-sitemap | SEO |

---

# Appendix

## Page Inventory

| Route | Description |
|------|-------------|
| / | Homepage |
| /about | About InfraLoop |
| /how-it-works | Product explanation |
| /pilot | Pilot signup |
| /marketplace-preview | Platform preview |
| /team | Team page |
| /contact | Contact + demo |

---

## Mobile Requirements

- 44px touch targets
- hamburger navigation at 768px
- responsive hero SVG
- mobile-friendly forms
- stacked layouts under 640px

---

## SEO & Performance

| Requirement | Target |
|------------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |

### Keywords

- surplus construction materials
- contractor material resale
- construction waste marketplace