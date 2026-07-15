---
title: Blog Domain
type: domain
tags:
  - domain
  - blog
aliases:
  - Blog
  - Substack
---

# Blog

> [!abstract] Bounded Context
> Publishing and displaying long-form written content.
>
> **Note:** This domain is managed externally by Substack.

## Overview

Blog content is authored and published on **Substack** (`jalenevans.substack.com`). The site integrates via an embedded iframe on the `/blog` route. Substack handles authentication, comments, newsletters, and analytics.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Blog** | Long-form written content hosted on Substack |
| **Substack** | External platform hosting blog content |
| **Embed** | Iframe integration of Substack content |

## Integration

### Substack Embed

> [!example] Component: `src/pages/blog/index.astro`

```astro
<iframe
  src="https://jalenevans.substack.com/embed"
  class="w-full max-w-4xl h-screen border-none rounded-lg"
  title="Substack Blog"
/>
```

### Integration Responsibilities

| Concern | Handled By |
|---------|------------|
| Content authoring | Substack |
| Authentication | Substack |
| Comments | Substack |
| Newsletters | Substack |
| Analytics | Substack |
| Navigation | jalenevansdotcom |
| Layout | jalenevansdotcom |
| Theming | Limited (iframe sandbox) |

## Business Rules

1. Substack embed must be **responsive** (full width, fixed height)
2. Iframe should be **borderless and rounded** for visual consistency
3. Substack URL is defined in `src/constants/links.ts`

## External Reference

- **Substack URL**: `https://jalenevans.substack.com`
- **Constant**: `LINKS.substack`

## Domain Events

| Event | Trigger | Description |
|-------|---------|-------------|
| `BlogViewed` | User navigates to `/blog` | Renders Substack embed |
| `BlogPostClicked` | User clicks post in embed | Opens post (within iframe) |

## Source Files

```
src/
├── constants/
│   └── links.ts          # LINKS.substack
└── pages/
    └── blog/
        └── index.astro   # Embed component
```

---

> [!see-also] 
> - [[navigation-routing]] for route definitions
> - [[contact-communication]] for other external links
