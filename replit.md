# A to Z Construction — Project Overview

## What's in This Project

This project contains two separate web apps in one workspace:

1. **The Website** — The actual A to Z Construction company website (client-facing)
2. **The Presentation** — A professional client walkthrough demo of the website

---

## App 1: A to Z Construction Website

**URL (dev):** `/`
**URL (live after deploy):** `https://your-app.replit.app/`

### Pages
| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, services overview, projects, testimonials, lead capture |
| About | `/about` | Company story, mission, values, credentials |
| Services | `/services` | 16 service categories with descriptions |
| Projects | `/projects` | Portfolio gallery |
| Contact | `/contact` | Lead capture form, address, phone, email |

### Services (16 categories)
General Contracting, Renovations/Remodeling, Masonry/Concrete, Roofing, Kitchen Remodeling, Bathroom Remodeling, Demolition, Painting, Drywall, Flooring, Framing, Exterior Work, Electrical, Plumbing, HVAC, Project Management

### Brand
- **Colors:** Charcoal/black background + orange accent (#E97322)
- **Tagline:** Precision. Power. Performance.
- **Style:** Bold, premium, NYC industrial-professional
- **Mobile:** Fully responsive

### Key Files
```
artifacts/atoz-construction/src/
  pages/
    home.tsx         — Homepage
    about.tsx        — About page
    services.tsx     — Services page
    projects.tsx     — Projects/portfolio gallery
    contact.tsx      — Contact & lead capture form
  index.css          — Brand theme/colors
  App.tsx            — Router
```

---

## App 2: Client Presentation

**URL (dev):** `/client-presentation/presentation`
**URL (live after deploy):** `https://your-app.replit.app/client-presentation/presentation`

A cinematic, scroll-based walkthrough of the website — designed to send to a client so they can see and understand the value of their new site. Shows each page section with browser mockup frames, business value callouts, a desktop vs. mobile comparison, and a final CTA to approve the direction.

### Sections
1. Intro title slide
2. Hero section showcase + value callout
3. Services page showcase
4. Projects gallery showcase
5. Desktop vs. mobile responsive comparison
6. About page showcase
7. Contact/lead capture showcase
8. Competitive advantages summary
9. Final "Approve This Direction" CTA

### Key Files
```
artifacts/client-presentation/src/
  pages/
    presentation.tsx              — Full client walkthrough (main file)
    home.tsx                      — App home (placeholder)
  components/
    PresentationComponents.tsx    — BrowserMockup, AnimatedSection, SectionTitle, ValueCallout
  index.css                       — Dark theme + orange brand accent
  App.tsx                         — Router (/ and /presentation routes)

  public/screenshots/             — Real screenshots of the live website
    home-desktop.jpg, home-mobile.jpg
    about-desktop.jpg
    services-desktop.jpg, services-mobile.jpg
    projects-desktop.jpg, projects-mobile.jpg
    contact-desktop.jpg, contact-mobile.jpg
```

---

## How to Share with a Client

### Option 1 — Live Deployed Link (recommended)
Deploy the project using the Deploy button. Once live, send the client:
```
https://your-app.replit.app/client-presentation/presentation
```
This is a permanent public URL they can open in any browser.

### Option 2 — GitHub
All code is saved at: https://github.com/Playmak8rz/atoz-construction

---

## How to Export / Backup Files

1. **GitHub** (already set up) — every save is pushed to `github.com/Playmak8rz/atoz-construction`
2. **Download ZIP** — use GitHub's "Code → Download ZIP" button on the repo page
3. **Replit checkpoints** — automatic snapshots are taken after every change in this workspace

---

## Stack

| Tool | Version/Details |
|------|----------------|
| Monorepo | pnpm workspaces |
| Frontend | React 19 + Vite |
| Styles | Tailwind CSS v4 |
| Routing | wouter |
| Animations | framer-motion |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| UI | shadcn/ui (Radix) |
| TypeScript | 5.9 |
| Node.js | 24 |

## Key Commands

```bash
# Run the website locally
pnpm --filter @workspace/atoz-construction run dev

# Run the client presentation locally
pnpm --filter @workspace/client-presentation run dev

# Typecheck everything
pnpm run typecheck
```
