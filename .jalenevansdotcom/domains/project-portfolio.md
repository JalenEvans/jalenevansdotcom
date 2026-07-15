---
title: Project Portfolio Domain
type: domain
tags:
  - domain
  - projects
aliases:
  - Projects
  - Project Showcase
---

# Project Portfolio

> [!abstract] Bounded Context
> Managing, storing, and displaying software projects.

## Overview

The Project Portfolio domain is the **richest domain** in the system. It manages software projects as aggregate roots with metadata, tools, tags, and contributors. Projects are displayed as cards in a searchable grid and as individual MDX pages.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| [[#Project\|Project]] | A software endeavor with metadata, description, and visual assets |
| [[#ProjectCard\|ProjectCard]] | A visual card representing a project in the listing |
| **Slug** | URL-safe identifier derived from the project title |
| [[#Tool\|Tool]] | A technology used in a project, represented by an icon |
| **Tag** | A categorization label for projects |
| **Contributor** | A person who worked on the project, with optional links |
| **StartDate** | The date a project began |
| **SearchBar** | Client-side filter for projects by title or tags |

## Entities

### Project

> [!important] Aggregate Root
> The central entity containing all project metadata.

**Schema** (`src/content.config.ts`):
```typescript
{
  id: string           // UUID identifier
  title: string        // Display name (kebab-case)
  startDate: Date      // ISO date string
  contributors: string[]  // Default: ['Jalen Evans']
  description: string  // Short summary
  tools: string[]      // Technology identifiers
  mainImage?: string   // Path to project image
  tags: string[]       // Categorization labels
}
```

**Current Projects:**

| Project | Title | Start Date | Tools | Tags |
|---------|-------|------------|-------|------|
| loo-cator | loo-cator | 2024-10-09 | flutter, firebase | flutter, mobile, firebase |
| personal-website | personal-website | 2026-01-06 | astro | projects |
| tripoli | tripoli | 2022-10-09 | java | java, research, javafx, testing |

---

### ProjectCard

> [!example] Component: `src/components/ProjectCard.astro`

Visual card displayed in the project listing grid.

**Layout:**
```
┌─────────────────────────────┐
│     [Project Image]         │
├─────────────────────────────┤
│  Project Title              │
│  Description                │
│  [Tool Icons]               │
│  [#tag1] [#tag2] [#tag3]   │
└─────────────────────────────┘
```

**Properties:**
| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Project UUID |

**Behavior:**
- Fetches project data via `getCollection('project')`
- Loads main image via `import.meta.glob`
- Formats title (kebab-case → Title Case)
- Renders tool icons via `findIcon()`
- Links to `/project/{slug}`

---

### Tool

> [!example] Utility: `src/utils/toolIconFunctions.ts`

A technology used in a project, represented by an SVG icon with hover color.

**LogoData Type:**
```typescript
{
  title: string      // Display name (e.g., "Flutter")
  rawPath: string    // SVG markup
  hoverColor: string // Hex color for hover state
}
```

**Registered Tools:**

| Key | Title | Hover Color |
|-----|-------|-------------|
| `astro` | Astro | #BC52EE |
| `fastapi` | FastAPI | #009688 |
| `firebase` | Firebase | #DD2C00 |
| `flutter` | Flutter | #02569B |
| `java` | Java | #EA2D2E |
| `jupyter` | Jupyter | #F37626 |
| `postgresql` | PostgreSQL | #4169E1 |
| `pytorch` | PyTorch | #EE4C2C |
| `react` | React | #61DAFB |

---

### SearchBar

> [!example] Component: `src/components/SearchBar.astro`

Client-side search and filter for project listings.

**Features:**
- **Text Input**: Searches project titles
- **Tag Toggle**: Switches to tag-based search
- **Real-time Filtering**: No page reload

**Search Logic:**
```
Query → Lowercase comparison
  ├─ Title mode: Matches against data-title attribute
  └─ Tag mode: Matches against data-tags attribute
```

**UI Elements:**
| Element | ID | Purpose |
|---------|----|---------|
| Input | `search-bar` | Text search field |
| Button | `tagsButton` | Toggle title/tag search |

## Domain Events

| Event | Trigger | Description |
|-------|---------|-------------|
| `ProjectViewed` | User clicks ProjectCard | Opens project detail page |
| `ProjectSearched` | User types in SearchBar | Filters visible projects |
| `ProjectFilteredByTag` | User toggles tag search | Switches search mode |

## Business Rules

1. **Sorting**: Projects sorted by `startDate` descending (newest first)
2. **Title Formatting**: kebab-case → Title Case
3. **Special Case**: `loo-cator` → `Loo-cator`
4. **Image Fallback**: Projects without `mainImage` show "No Image Found."
5. **Default Contributors**: `['Jalen Evans']` if not specified

## Source Files

```
src/
├── components/
│   ├── ProjectCard.astro
│   ├── SearchBar.astro
│   └── Icon.astro
├── content/
│   └── project/
│       ├── loo-cator.mdx
│       ├── personal-website.mdx
│       └── tripoli.mdx
├── pages/
│   └── project/
│       ├── index.astro          # Project listing
│       └── [...slug].astro      # Project detail
└── utils/
    ├── formatting.ts
    └── toolIconFunctions.ts
```

---

> [!see-also] 
> - [[content-management]] for MDX handling
> - [[models/project]] for schema details
> - [[portfolio-identity]] for site identity
