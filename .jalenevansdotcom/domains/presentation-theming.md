---
title: Presentation & Theming Domain
type: domain
tags:
  - domain
  - theming
aliases:
  - Theme
  - Colors
  - Typography
---

# Presentation & Theming

> [!abstract] Bounded Context
> Visual appearance, typography, colors, and responsive design.

## Overview

The Presentation & Theming domain manages the **visual identity** of the site. It includes a light/dark theme system, semantic color tokens, typography stacks, and custom utilities.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Theme** | The color mode (light or dark) |
| **Color Token** | A semantic color variable |
| **Typography Stack** | The font family hierarchy |
| **Enlarge Utility** | Custom hover zoom effect |

## Theme System

### Theme Toggle

> [!example] Component: `src/components/ThemeToggle.astro`

**Behavior:**
1. User clicks toggle button
2. `.dark` class toggled on `<html>` element
3. Preference saved to `localStorage`
4. On page load, saved theme or system preference applied

**Persistence:**
```typescript
// Save
localStorage.setItem('theme', isDark ? 'dark' : 'light')

// Load (before paint)
const savedTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark' : 'light'
const theme = savedTheme || systemTheme
```

## Color System

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | oklch(0.925 0 0) | Page background |
| `light` | oklch(0.95 0 0) | Card backgrounds, hover states |
| `dark` | oklch(0.9 0 0) | Borders, subtle backgrounds |
| `darker` | oklch(0.85 0 0) | Gradient endpoints |
| `font` | oklch(0.1 0 0) | Primary text |
| `muted` | oklch(0.75 0 0) | Secondary text, tags |

### Dark Mode

| Token | Value | Usage |
|-------|-------|-------|
| `bg` | oklch(0.3 0 0) | Page background |
| `light` | oklch(0.35 0 0) | Card backgrounds |
| `dark` | oklch(0.25 0 0) | Borders |
| `darker` | oklch(0.15 0 0) | Gradient endpoints |
| `font` | oklch(0.86 0 262.065) | Primary text (blue tint) |
| `muted` | oklch(0.65 0 262.065) | Secondary text (blue tint) |

## Typography

### Font Stacks

| Stack | Font | Usage |
|-------|------|-------|
| Title | Amiri (serif) | `h1` elements |
| Heading | Nunito (sans-serif) | `h2`-`h6` elements |
| Body | Montserrat (sans-serif) | Body text, UI elements |

### Font Loading

```css
@import '@fontsource/amiri/700.css';
@import '@fontsource/nunito/600.css';
@import '@fontsource/nunito/700.css';
@import '@fontsource/montserrat/400.css';
@import '@fontsource/montserrat/500.css';
```

## Custom Utilities

### Enlarge Utility

```css
@utility enlarge-* {
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(calc(--value(integer) / 100));
  }
}
```

**Usage:**
| Class | Scale |
|-------|-------|
| `enlarge-102` | 1.02x |
| `enlarge-105` | 1.05x |
| `enlarge-110` | 1.10x |

### Link Styles

```css
.link {
  @apply underline text-muted hover:text-font;
}

.hidden-link {
  @apply hover:underline hover:text-muted text-font;
}
```

## Responsive Design

**Breakpoints** (Tailwind defaults):
| Prefix | Min Width | Usage |
|--------|-----------|-------|
| `sm` | 640px | Small screens |
| `md` | 768px | Medium screens |
| `lg` | 1024px | Large screens |
| `xl` | 1280px | Extra large screens |

## Source Files

```
src/styles/
└── global.css          # Theme tokens, typography, utilities
src/components/
├── ThemeToggle.astro   # Theme switcher
└── Footer.astro        # Contains ThemeToggle
src/layouts/
└── MainLayout.astro    # Theme initialization script
```

---

> [!see-also] 
> - [[portfolio-identity]] for component styling
> - [[architecture/stack]] for Tailwind configuration
