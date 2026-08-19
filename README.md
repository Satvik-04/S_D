# Teztecch — Smart Software Solutions

Marketing website for **Teztecch**, a software development company based in Nagpur, India.
Custom software, ERP, CRM, SaaS, business automation, and maintenance & support.

## Pages

| Route            | Page                                                            |
| ---------------- | --------------------------------------------------------------- |
| `#/`             | Home — hero with live terminal, services index, stats, CTA      |
| `#/about`        | About Us — mission, vision, 6-phase process, why we stand out   |
| `#/services`     | Services — six detailed service blocks with scroll-tracked nav  |
| `#/founder`      | Our Founder — portrait, bio, guiding principles                 |
| `#/contact`      | Contact — details, live business-hours status, inquiry form     |

## Tech Stack

- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **react-router-dom** (hash routing, works on any static host)
- Type system: Space Grotesk (display) · IBM Plex Sans (body) · JetBrains Mono (labels)

## Getting Started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run typecheck  # TypeScript check
```

## Package as a ZIP

**From the live site** — click **"Download source .zip"** in the footer of any page.
The archive is assembled in your browser (no server needed) and saved as
`teztecch-source.zip`.

**From a terminal** — a zero-dependency script is included:

```bash
node scripts/zip-project.mjs
```

This writes `teztecch-source.zip` containing the full project source
(excluding `node_modules`, `dist`, and `.git`).

Alternatively, from the project root:

```bash
# macOS / Linux
zip -r teztecch-source.zip . -x "node_modules/*" "dist/*" ".git/*"

# Windows PowerShell
Compress-Archive -Path .\* -DestinationPath teztecch-source.zip
```

## Project Structure

```
index.html              HTML shell + fonts + favicon
src/
  App.tsx               Router & layout shell
  main.tsx              Entry point
  index.css             Tailwind theme, animations, reduced-motion fallbacks
  hooks.ts              useInView, useCountUp, usePrefersReducedMotion
  data.ts               All page copy & content
  components/
    chrome.tsx          Nav, footer, ambient background, page transitions
    icons.tsx           Custom inline SVG icon set
    Terminal.tsx        Animated typing terminal
    ui.tsx              Reveal, MaskLine, Scramble, Counter, Marquee…
  pages/
    Home.tsx  About.tsx  Services.tsx  Contact.tsx  Founder.tsx
scripts/
  zip-project.mjs       Dependency-free ZIP packager
```
