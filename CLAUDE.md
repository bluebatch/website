# CLAUDE.md — Bluebatch Website

## Project Overview

Bluebatch (bluebatch.io) is the marketing website for an AI workflow automation company. The site is a German-language, statically-rendered Next.js application targeting enterprise customers in wholesale, e-commerce, and tax consulting. It showcases services around n8n workflow automation, use cases by industry, a blog, and team/company pages.

**Domain:** `https://bluebatch.io`
**Language:** German (html lang="de")
**Parent company:** Pexon Consulting (enterprise IT/cloud consultancy)

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| Language | TypeScript | 5.x |
| UI | React | 19.x |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) | 4.x |
| Animation | Framer Motion | 12.x |
| Code highlighting | react-syntax-highlighter | 16.x |
| Fonts | Geist Sans + Geist Mono (via `next/font/google`) |  |
| Package manager | pnpm | — |
| Linting | ESLint 9 + eslint-config-next (core-web-vitals + typescript) | — |
| Analytics | Google Analytics 4 (`G-EL0E8GDKZB`) | — |
| Forms | HubSpot Forms (via CSP-allowed external scripts) | — |

## Commands

```bash
pnpm dev          # Start development server (localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint (eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured. No unit/integration test framework is present.

## Project Structure

```
.
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navigation, Footer, CookieConsent)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind import + theme variables + base styles
│   ├── robots.ts               # robots.txt generation
│   ├── sitemap.ts              # Dynamic XML sitemap generation
│   ├── blog/                   # Blog section
│   │   ├── page.tsx            # Blog index
│   │   └── building-custom-node-dev-guide/
│   │       ├── page.tsx        # Blog post page
│   │       ├── content.md      # Blog content in markdown
│   │       └── code-blocks/    # Separate code snippet files (.ts, .bash, etc.)
│   ├── services/               # Services section (5 sub-pages)
│   │   ├── page.tsx            # Services overview
│   │   ├── n8n-hosting/
│   │   ├── workflow-wartung/
│   │   ├── custom-nodes/
│   │   ├── schulungen/
│   │   └── performance-scaling/
│   ├── use-cases/              # Industry use cases
│   │   ├── page.tsx            # Use cases overview
│   │   ├── grosshandel/        # Wholesale (8 sub-pages)
│   │   ├── steuerberater/      # Tax consultants (3 sub-pages)
│   │   └── ecommerce/          # E-Commerce (2 sub-pages)
│   ├── contact/                # Contact page
│   ├── team/                   # Team page
│   ├── warum-bluebatch/        # "Why Bluebatch" page
│   ├── unser-prozess/          # "Our Process" page
│   ├── impressum/              # Legal notice (German law requirement)
│   └── datenschutz/            # Privacy policy
├── components/                 # Shared React components
│   ├── blog/                   # Blog-specific components (BlogLayout, CodeBlock, etc.)
│   ├── buttons/                # Button components (ContactButton)
│   ├── cards/                  # Card components (SimpleCard, BoundlessImageCard, etc.)
│   ├── hero-components/        # Hero sections (BackgroundHero, Hero2Column, VideoBackground)
│   ├── customer/               # Customer logos section
│   ├── hiring/                 # Hiring section
│   ├── team/                   # Team section
│   ├── typo.tsx                # Typography system (Typo.H1-H4, Paragraph, List)
│   ├── content-wrapper.tsx     # Section wrapper (padding, backgrounds, widths)
│   ├── navigation.tsx          # Sticky top navigation with dropdowns
│   ├── footer.tsx              # Site footer
│   ├── cookie-consent.tsx      # GDPR cookie consent banner + GA4 integration
│   ├── intro-box.tsx           # Section intro with sub-components
│   ├── simple-grid.tsx         # Responsive grid layout (1-6 columns)
│   ├── consultation-cta.tsx    # CTA block (composable)
│   ├── faqs.tsx                # FAQ accordion
│   ├── tab-group.tsx           # Tab navigation component
│   ├── timeline-as-steps.tsx   # Numbered steps/timeline
│   └── ...
├── lib/                        # Utility functions
│   └── get-subpages.ts         # Dynamic subpage discovery for overview pages
├── types/                      # TypeScript type declarations
│   ├── cache-life.d.ts         # Next.js cache life type defs
│   └── routes.d.ts             # Auto-generated route types
├── public/                     # Static assets
│   ├── images/                 # Page images (.jpg, .webp)
│   ├── icons/                  # SVG icons
│   ├── customer/               # Client logos
│   ├── team/                   # Team photos
│   ├── blog/                   # Blog images
│   └── videos/                 # Background videos
├── .claude/                    # Claude Code configuration
│   ├── claude.md               # Existing rules (code-style subset)
│   ├── rules/code-style.md     # Component architecture & layout rules
│   ├── settings.local.json     # Claude permissions
│   └── agents/                 # Custom Claude agents (GA4 SEO analyzer)
└── .devcontainer/              # Dev container configuration (Node 22, pnpm)
```

## Architecture & Patterns

### Routing

- **App Router** with file-system-based routing — every route has a `page.tsx`
- No dynamic routes (`[slug]`) — all pages are statically defined
- Overview pages (e.g., `/services`, `/use-cases/grosshandel`) list sub-pages with data arrays defined inline
- Each page exports `metadata: Metadata` for SEO (title, description, OpenGraph, Twitter, canonical)
- Sitemap is auto-generated by scanning the `app/` directory for `page.tsx` files

### Page Structure Pattern

Pages follow a consistent section-stacking pattern using `ContentWrapper`:

```tsx
export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        {/* Hero section — uses isFirstSection for extra top padding */}
      </ContentWrapper>
      <ContentWrapper background="bg-gray-50">
        {/* Alternating background sections */}
      </ContentWrapper>
      <ContentWrapper>
        {/* Default white background section */}
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
```

### Component Architecture

**Sub-component pattern** — Components use the compound component pattern with dot notation, NOT props-heavy APIs:

```tsx
// Correct — sub-component pattern
<IntroBox>
  <IntroBox.PreHeadline>Label</IntroBox.PreHeadline>
  <IntroBox.Headline>Title</IntroBox.Headline>
  <IntroBox.Subline>Description</IntroBox.Subline>
</IntroBox>

// Correct — compound hero
<BackgroundHero videoSrc="..." overlayOpacity={0.85}>
  <BackgroundHero.Headline>...</BackgroundHero.Headline>
  <BackgroundHero.Stats>
    <BackgroundHero.Stat value={80} suffix="%" label="..." />
  </BackgroundHero.Stats>
</BackgroundHero>

// Wrong — props overload
<IntroBox title="..." description="..." preHeadline="..." />
```

**Props are for styling/behavior only** — `className`, `variant`, `size`, `dark`, `background`, NOT for content.

**Container pattern** — Predefined wrappers that accept data via props are acceptable:
```tsx
<ConsultationCtaDefault buttonText="..." />  // wraps composable sub-components
```

### Key Components to Reuse

| Component | Purpose |
|---|---|
| `ContentWrapper` | Section wrapper with padding, background, border, width variants |
| `Typo.H1` - `Typo.H4`, `Typo.Paragraph`, `Typo.List` | Typography system |
| `IntroBox` + sub-components | Section introductions (centered or left-aligned) |
| `SimpleGrid` | Responsive grid (1-6 cols) |
| `SimpleCard` | Card with optional icon |
| `Hero2Column` + sub-components | Two-column hero section |
| `BackgroundHero` + sub-components | Full-width hero with video/image background |
| `ContactButton` | CTA button with icon variants (phone, mail, calendar, chat) |
| `ConsultationCtaDefault` | Reusable CTA block at bottom of pages |
| `Customer` | Client logo showcase |
| `TimelineAsSteps` | Numbered step timeline |
| `TabGroup` | Tab navigation |
| `BoundlessImageCard` | Card with full-bleed image |
| `CardShowcase` | Grid showcase of cards |
| `Faqs` | FAQ accordion |

### Styling

- **Tailwind CSS v4** — configured through `globals.css` using `@theme` directive (not `tailwind.config`)
- Custom color scales defined in CSS variables:
  - `primary-50` to `primary-950` — Deep Electric Navy (#002D62)
  - `secondary-50` to `secondary-950` — Cyan Spark (#00F5FF)
- Standard Tailwind utilities used inline — no CSS modules, no styled-components
- Responsive approach: mobile-first with `md:` and `lg:` breakpoints
- Dark mode CSS variables exist but the site does not actively implement dark mode switching

### Client vs Server Components

- Pages are **server components** by default (no `"use client"`)
- Client components are explicitly marked with `"use client"`:
  - `navigation.tsx` — scroll detection, dropdown state
  - `footer.tsx` — dynamic year, cookie settings callback
  - `cookie-consent.tsx` — GA4 consent management, localStorage
  - `video-background-hero-client.tsx` — video playback
  - `card-showcase-client.tsx` — animation/interaction
  - `logo-carousel.tsx` — carousel animation

### TypeScript

- Strict mode enabled
- Path alias: `@/*` maps to project root (e.g., `@/components/typo`)
- `code-blocks/**` directories are excluded from TypeScript compilation (blog code snippets)
- Interfaces preferred for component props; inline types used for simple cases
- No `any` usage except where eslint-disable comments are explicitly placed

### Import Conventions

```tsx
// 1. External packages
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 2. Internal components via path alias
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import SimpleGrid from "@/components/simple-grid";
import ContactButton from "@/components/buttons/contact-button";
```

## Naming Conventions

- **Files**: kebab-case only (`content-wrapper.tsx`, `hero-2-column.tsx`, `contact-button.tsx`)
- **Components**: PascalCase exports (`ContentWrapper`, `Hero2Column`)
- **Directories**: kebab-case (`hero-components/`, `use-cases/`)
- **Route segments**: kebab-case matching German words (`warum-bluebatch/`, `unser-prozess/`, `workflow-wartung/`)
- **Images**: kebab-case (`business-automation.jpg`, `invoice-processing.jpg`)
- No PascalCase, camelCase, or snake_case filenames

## Content Patterns

- Page content is primarily in German
- Blog posts use markdown files (`content.md`) with separate code-block files
- Research/reference files (`research.md`) exist alongside some pages but are not rendered
- SEO metadata is comprehensive: title, description, OpenGraph, Twitter cards, canonical URLs
- Every page ends with `<ConsultationCtaDefault />` as a CTA

## Security Headers

Configured in `next.config.ts`:
- `Strict-Transport-Security` (HSTS)
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` with specific allowlists for Calendly, Google Analytics, HubSpot, YouTube, Loom
- `Permissions-Policy` disabling camera, microphone, geolocation

## Development Environment

- **Dev container**: Node 22 (TypeScript-Node devcontainer), zsh shell, Starship prompt
- **pnpm** as package manager (store configured at `/home/node/.pnpm-store`)
- **VS Code extensions**: ESLint, Prettier, Test Explorer
- **Port**: 3000 (forwarded in devcontainer)

## Common Pitfalls

- No `tailwind.config.js/ts` — Tailwind v4 uses CSS-based configuration in `globals.css`
- The `code-blocks/` directories under blog posts contain raw code files that are NOT compiled by TypeScript (excluded in `tsconfig.json`)
- `types/routes.d.ts` is auto-generated by Next.js — do not edit manually
- No testing framework is set up — there are no test files to run
- The site uses Google Analytics 4 with GDPR consent mode — cookie consent must remain functional
