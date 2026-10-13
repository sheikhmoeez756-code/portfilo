# Abdul Moeez Hassan — Developer Portfolio

> Personal portfolio of Abdul Moeez Hassan — a React & Next.js developer building tested, typed e-commerce and SaaS front ends.

**🔗 Live site:** [sheikhmoeez756-code.github.io/portfilo](https://sheikhmoeez756-code.github.io/portfilo/)

![Next.js](https://img.shields.io/badge/Next.js-16-000) ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8) ![Motion](https://img.shields.io/badge/Motion-Framer-ff0055)

## ✨ Highlights

- **Motion design** with Framer Motion — word-by-word text reveals, rotating hero word, scroll-linked parallax, sticky stacking project cards, scroll-drawn timeline
- **Lenis** smooth scrolling and a scroll progress bar
- **⌘K / Ctrl+K command palette** (cmdk) — jump to sections, copy email, switch theme, open links
- **Light / dark theme** with a circular View Transitions reveal
- Cursor-following spotlight cards, magnetic buttons, infinite tech marquee, animated stat counters
- Contact form with floating labels, client-side validation and loading / success / error states
- Respects `prefers-reduced-motion`; semantic HTML, keyboard focus states, ARIA labels
- SEO: metadata, Open Graph, JSON-LD `Person` schema, sitemap

## 🛠️ Stack

Next.js 16 (App Router, static export) · React 19 · TypeScript · Tailwind CSS 4 · Motion · Lenis · next-themes · cmdk · react-icons

## 📦 Getting started

```bash
npm install
npm run dev         # http://localhost:3000
npm run build       # static export to ./out
npm run lint && npm run typecheck
```

## 🚀 Deployment

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): lint → type-check → build with `PAGES_BASE_PATH=/portfilo` → publish `out/` to GitHub Pages.
In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

## 📁 Structure

```
src/
├── app/            # routes: layout, page, not-found, sitemap
├── config/         # env, base path, asset() helper
├── screens/        # page-level components (home/, notFound/)
└── shared/
    ├── components/ # Navbar, Footer, CommandPalette, Button, Reveal, SplitText…
    ├── constants/  # links, projects, skills, section ids
    ├── hooks/      # useActiveSection, useLocalTime, useMediaQuery…
    ├── i18n/       # all user-facing copy (en.ts)
    ├── services/   # contact form, theme transition, palette events
    ├── themes/     # motion easing / spring constants (colours live in globals.css)
    └── utils/
```

To edit text, change `src/shared/i18n/en.ts`. To add a project, add an entry to `src/shared/constants/projects.ts` and its copy under `work.projects` in `en.ts`.

## 👤 Author

**Abdul Moeez Hassan** — Lahore, Pakistan
[GitHub](https://github.com/sheikhmoeez756-code) · [LinkedIn](https://www.linkedin.com/in/abdul-moeez-hassan-670191332/) · [Upwork](https://www.upwork.com/freelancers/~010b02734a3d111866)
