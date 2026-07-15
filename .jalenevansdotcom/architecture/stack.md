---
title: Tech Stack
type: reference
tags:
  - architecture
  - stack
  - technology
---

# Tech Stack

> [!info] Technology Choices
> Core technologies powering the site.

## Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| **Astro** | 7.0.9 | Static site generator |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS |
| **MDX** | 7.0.3 | Markdown with JSX |

### Astro

- **Type**: Static Site Generator (SSG)
- **Build Output**: Static HTML/CSS/JS
- **Content Collections**: MDX with Zod schemas
- **Integration**: `@astrojs/mdx`

### Tailwind CSS

- **Type**: CSS Framework
- **Plugins**:
  - `@tailwindcss/typography` (0.5.19) — Prose styling
  - `@tailwindcss/forms` (0.5.11) — Form element reset
  - `@tailwindcss/vite` (4.1.18) — Vite integration

## Fonts

| Font | Family | Usage |
|------|--------|-------|
| **Amiri** | Serif | Title (`h1`) |
| **Nunito** | Sans-serif | Headings (`h2`-`h6`) |
| **Montserrat** | Sans-serif | Body text, UI |

## Build Tools

| Tool | Purpose |
|------|---------|
| **Vite** | Build tool (via Astro) |
| **Prettier** | Code formatting |
| **prettier-plugin-astro** | Astro file formatting |

## Container

| Component | Image | Purpose |
|-----------|-------|---------|
| **Build Stage** | `node:25` | Compile Astro |
| **Runtime Stage** | `nginx:alpine` | Serve static files |

## Package Dependencies

**Production:**
- `astro` 7.0.9
- `@astrojs/mdx` 7.0.3
- `@fontsource/amiri` 5.2.8
- `@fontsource/montserrat` 5.2.8
- `@fontsource/nunito` 5.2.7
- `@tailwindcss/forms` 0.5.11
- `@tailwindcss/vite` 4.1.18
- `tailwindcss` 4.1.18

**Development:**
- `@tailwindcss/typography` 0.5.19
- `prettier` 3.7.4
- `prettier-plugin-astro` 0.14.1

---

> [!see-also] 
> - [[domains/deployment-infrastructure]] for deployment context
> - [[architecture/docker]] for container details
