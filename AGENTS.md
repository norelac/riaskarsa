# AGENTS.md

## Project

Rias Karsa — MUA community landing page for IT FEST 2026 competition. Next.js app (multi-route), no backend.

## Tech Stack

- **Next.js App Router** (not Pages Router)
- **Tailwind CSS** with custom earth-tone design tokens — never use default Tailwind colors
- **JavaScript ES6+** (not TypeScript)
- **Lucide Icons** only — no other icon library

## Critical Design Constraints

- `--color-primary: #E2C289` (gold) — reserved exclusively for CTAs, active states, focus rings. Do not use for anything else.
- Background is deep maroon `#210504`; card surfaces on dark are `#32110F`; light surfaces `#F9F7F2`. Keep contrast visible.
- Dual font system: serif headlines (Playfair Display) + sans body (DM Sans). Do not mix.
- Earth-tone palette only (maroon + gold + cream). No bright blues, neons, or competing accent colors.
- 8px grid system for all spacing.
- Design tokens are defined in `src/app/globals.css` (Tailwind v4 `@theme`) — always use the token names, never override their values. See `designfix.md` for exact token values.

## Responsive Breakpoints (competition scoring: 15% weight)

- Mobile (<640px): single column, hamburger drawer, full-width CTAs
- Tablet (640–1023px): 2-column grid
- Desktop (≥1024px): 3-4 column grid, max-width 1440px (`container-rias`)

## Component Rules

- Buttons: primary bg `--color-primary` (gold), text `--color-primary-ink`, hover `--color-primary-hover`, focus ring `--color-primary-ring`, disabled 40% opacity
- Cards: surface bg `--color-surface-dark` / `--color-surface`, border `--color-border`, radius `20px`, padding `24px`
- Type scale: H1 48px→26px, section heading 32px→28px, card heading 24px→20px, Body 16px→14px (desktop→mobile)

## Directory Structure

Follow `PRD.md` §6. Key paths:
- `src/app/page.jsx` — main landing page
- `src/app/` — routes: `/`, `/galeri`, `/penata-rias`, `/mua/[id]`, `/daftar`, `/masuk`, `/sertifikasi`, `/apply-model`, `/terima-kasih`
- `src/components/sections/` — section components (Navbar, Hero, Footer, dll)
- `src/components/common/` — reusable UI (Button, Badge, MuaCard, dll)
- `src/data/` — mock data (muas.js, workshopSchedule.js, galleryImages.js, faqData.js, testimonials.js, muaReviews.js)
- `src/hooks/` — custom hooks (useFilter.js, useScrollReveal.js, useParallax.js)
- `src/lib/auth.js` — client-side auth (localStorage)
- `public/asset/` — all static assets (WebP)

## Competition Requirements

- Strictly NO website builders (Wix, Google Sites, etc.)
- Must deploy live (Vercel recommended for Next.js)
- Must work on Chrome, Firefox, Edge
- Code must be clean, layered, maintainable

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server
npm run build      # production build — run before deploy
npm run lint       # lint (ESLint)
npm run start      # run production build
```

## Reference Docs

- `PRD.md` — functional requirements, user flows, milestones
- `designfix.md` — design tokens, component states, typography, layout rules
- `public/asset/` — WebP assets (hero, MUA, gallery, workshop)
