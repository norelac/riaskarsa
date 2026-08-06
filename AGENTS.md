# AGENTS.md

## Project

Rias Karsa — MUA community landing page for IT FEST 2026 competition. Single-page Next.js app, no backend.

## Tech Stack

- **Next.js App Router** (not Pages Router)
- **Tailwind CSS** with custom earth-tone design tokens — never use default Tailwind colors
- **JavaScript ES6+** (not TypeScript)
- **Lucide Icons** only — no other icon library

## Critical Design Constraints

- `#625244` is primary — reserved exclusively for CTAs, active states, focus rings. Do not use for anything else.
- Background is `#FFFFFF`, card surfaces are `#FBF9F4` — keep this distinction visible.
- Dual font system: serif headlines (Cormorant Garamond/Playfair Display) + sans body (Plus Jakarta Sans/Inter). Do not mix.
- Earth-tone palette only. No bright blues, neons, or competing accent colors.
- 8px grid system for all spacing.
- Tailwind config must extend (not replace) theme — see `DESIGN.md` §1 for exact token values.

## Responsive Breakpoints (competition scoring: 15% weight)

- Mobile (<640px): single column, hamburger drawer, full-width CTAs
- Tablet (640–1023px): 2-column grid
- Desktop (≥1024px): 3-4 column grid, max-width 1280px (`max-w-7xl mx-auto`)

## Component Rules

- Buttons: primary bg `#625244`, hover `#584A3D`, focus ring `#6252441F`, disabled 40% opacity
- Cards: surface bg `#FBF9F4`, border `#E8E2D6`, radius `8px`, padding `24px`
- Type scale: H1 48px→32px, H2 32px→24px, H3 22px→18px, Body 16px→14px (desktop→mobile)

## Directory Structure

Follow `PRD.md` §6 exactly. Key paths:
- `src/app/page.jsx` — main landing page
- `src/components/sections/` — one component per landing section
- `src/components/common/` — reusable UI (Navbar, Footer, Button, Badge)
- `src/data/` — mock data files (muas.js, openCalls.js, faqData.js, testimonials.js)
- `src/hooks/` — custom hooks (useFilter.js)
- `public/images/` — all static assets

## Competition Requirements

- Strictly NO website builders (Wix, Google Sites, etc.)
- Must deploy live (Vercel recommended for Next.js)
- Must work on Chrome, Firefox, Edge
- Code must be clean, layered, maintainable

## Commands

```bash
npx create-next-app@latest . --js --app --tailwind --eslint --no-src-dir --import-alias "@/*"
npm run dev        # dev server
npm run build      # production build — run before deploy
npx next lint      # lint
```

## Reference Docs

- `PRD.md` — functional requirements, user flows, milestones
- `DESIGN.md` — design tokens, component states, typography, layout rules
- `asset/` — SVG assets for hero/illustrations (note: directory is `asset/` not `assets/`)
