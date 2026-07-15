---
title: Navigation & Routing Domain
type: domain
tags:
  - domain
  - navigation
aliases:
  - Routes
  - URLs
---

# Navigation & Routing

> [!abstract] Bounded Context
> Site structure, URL routing, and page-to-page navigation.

## Overview

The Navigation & Routing domain defines the **URL structure** and how pages are organized. Routes are statically generated at build time.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Route** | A defined URL path for a page |
| **Slug Route** | A dynamic URL segment for content |
| **Static Path** | A pre-generated URL for a content entry |
| **Breadcrumb Trail** | Hierarchical path shown in NavBar |

## Route Definitions

> [!example] Constants: `src/constants/routes.ts`

```typescript
export const ROUTES = {
  home: '/',
  about: '/about',
  blog: '/blog',
  projects: '/project',
} as const
```

### Route Table

| Name | Path | Page File | Purpose |
|------|------|-----------|---------|
| Home | `/` | `src/pages/index.astro` | Landing page |
| About | `/about` | `src/pages/about.astro` | Personal narrative |
| Blog | `/blog` | `src/pages/blog/index.astro` | Substack embed |
| Projects | `/project` | `src/pages/project/index.astro` | Project listing |
| Project Detail | `/project/{slug}` | `src/pages/project/[...slug].astro` | Individual project |

## Dynamic Routes

### Project Slugs

**Pattern**: `/project/{slug}`

**Generation**:
```typescript
// src/pages/project/[...slug].astro
export const getStaticPaths = async () => {
  const projectEntries = await getCollection('project')
  return projectEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}
```

**Current Slugs**:
| Slug | Source File |
|------|-------------|
| `loo-cator` | `loo-cator.mdx` |
| `personal-website` | `personal-website.mdx` |
| `tripoli` | `tripoli.mdx` |

## NavBar Path Derivation

> [!example] Component: `src/components/NavBar.astro`

The current page title is derived from the URL path:

```typescript
const getCurrPath = () => {
  if (pathname == '/') return 'Home'
  
  const paths = pathname.split('/')
  let currPath = paths[paths.length - 1]
  
  // Special cases
  if (currPath == 'loo-cator') return 'Loo-cator'
  
  // Default: title case
  let words = currPath
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
  return words.join(' ')
}
```

**Examples**:
| URL | Display |
|-----|---------|
| `/` | Home |
| `/about` | About |
| `/blog` | Blog |
| `/project` | Project |
| `/project/loo-cator` | Loo-cator |
| `/project/personal-website` | Personal Website |
| `/project/tripoli` | Tripoli |

## Source Files

```
src/
├── constants/
│   └── routes.ts           # Route definitions
├── components/
│   └── NavBar.astro        # Path derivation
└── pages/
    ├── index.astro
    ├── about.astro
    ├── blog/
    │   └── index.astro
    └── project/
        ├── index.astro
        └── [...slug].astro
```

---

> [!see-also] 
> - [[portfolio-identity]] for NavBar details
> - [[content-management]] for slug generation
