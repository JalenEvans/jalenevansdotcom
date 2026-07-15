---
title: Portfolio Identity Domain
type: domain
tags:
  - domain
  - identity
aliases:
  - Identity
  - Profile
---

# Portfolio Identity

> [!abstract] Bounded Context
> Establishing and presenting Jalen Evans' professional identity.

## Overview

The Portfolio Identity domain is the **entry point** for visitors. It introduces Jalen through a visual hero section and modular profile cards displaying education, experience, leadership, and skills.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| [[#Hero\|Hero]] | Primary landing visual introducing the site owner |
| [[#HomeCard\|HomeCard]] | Modular card component displaying a profile category |
| [[#NavBar\|NavBar]] | Persistent navigation showing site name and current path |
| [[#Footer\|Footer]] | Contact information and theme controls |
| **Profile** | Collection of personal information presented |
| **Resume** | Complete professional narrative (Education + Experience + Leadership + Skills) |

## Entities

### Hero

> [!example] Component: `src/components/Hero.astro`

The introductory visual banner displayed at the top of the Home page.

**Current Implementation:**
- Green circle (placeholder for profile image)
- "Welcome to my Website!" heading
- "A portfolio site for Jalen Evans" subtitle

**Properties:**
| Property | Type | Description |
|----------|------|-------------|
| Visual | Layout | Flexbox row with circle and text |
| Background | Color | Green (`bg-green-600`) |
| Shape | Element | Rounded circle (`rounded-full`) |

---

### HomeCard

> [!example] Component: `src/components/HomeCards/DefaultHomeCard.astro`

A reusable card component that displays a category of profile information.

**Properties:**
| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | string | Yes | Card heading (e.g., "Education") |
| `height` | number \| string | Yes | Card height (`auto` or pixel value) |
| `link` | string | No | URL for "See more..." link |

**Card Types:**

| Card | File | Content |
|------|------|---------|
| EducationHomeCard | `EducationHomeCard.astro` | College degree, relevant coursework |
| ExperienceHomeCard | `ExperienceHomeCard.astro` | Work experience, responsibilities |
| LeadershipHomeCard | `LeadershipHomeCard.astro` | Leadership roles, service |
| SkillsHomeCard | `SkillsHomeCard.astro` | Technical skills, tools, core competencies |

---

### NavBar

> [!example] Component: `src/components/NavBar.astro`

Persistent top navigation bar visible on all pages.

**Properties:**
| Property | Type | Description |
|----------|------|-------------|
| Logo | SVG | Personal logo (`PersonalLogo.svg`) |
| Site Name | string | "Jalen Evans" |
| Current Path | string | Derived from URL (title-cased) |
| Links | Route[] | Home, About, Blog, Projects |

**Route Derivation Logic:**
```
/           → "Home"
/about      → "About"
/blog       → "Blog"
/project    → "Project"
/project/x  → "X"
```

**Special Cases:**
- `loo-cator` → `Loo-cator` (not `Loo Cator`)

---

### Footer

> [!example] Component: `src/components/Footer.astro`

Bottom section with contact links and theme toggle.

**Components:**
| Element | Component | Links To |
|---------|-----------|----------|
| LinkedIn | Icon | `linkedin.com/in/je319` |
| GitHub | Icon | `github.com/JalenEvans` |
| Gmail | Icon | `mailto:jalenemmanuelevans@gmail.com` |
| Theme Toggle | ThemeToggle | N/A (toggles dark mode) |

## Domain Events

| Event | Trigger | Description |
|-------|---------|-------------|
| `ThemeChanged` | User clicks ThemeToggle | Toggles light/dark mode |
| `PageNavigated` | User clicks NavBar link | Changes current page |

## Source Files

```
src/components/
├── Hero.astro
├── NavBar.astro
├── Footer.astro
├── ThemeToggle.astro
└── HomeCards/
    ├── DefaultHomeCard.astro
    ├── EducationHomeCard.astro
    ├── ExperienceHomeCard.astro
    ├── LeadershipHomeCard.astro
    └── SkillsHomeCard.astro
```

---

> [!see-also] 
> - [[project-portfolio]] for project showcase
> - [[presentation-theming]] for theme system
> - [[navigation-routing]] for route definitions
