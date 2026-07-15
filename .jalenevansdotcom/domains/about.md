---
title: About Domain
type: domain
tags:
  - domain
  - about
aliases:
  - About Page
  - Personal Narrative
---

# About

> [!abstract] Bounded Context
> Presenting Jalen Evans as a person — personality, interests, and values.

## Overview

The About domain presents **who Jalen is** beyond professional accomplishments. It is a text-driven narrative that conveys personality, values, and interests.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **About Page** | Page describing personality, interests, and values |
| **Personal Narrative** | The story of who Jalen is beyond work |
| **Interests** | Personal passions and hobbies |
| **Values** | Core principles and beliefs |

## Current State

> [!warning] Minimal Content
> The About page currently contains only placeholder text.

**Current Implementation** (`src/pages/about.astro`):
```astro
<MainLayout title="About Me">
  <h1>About</h1>
  <p>I built this using Astro's Layout system</p>
</MainLayout>
```

## Intended Content Structure

The About page should convey:

| Section | Purpose |
|---------|---------|
| **Who I Am** | Personal background and personality |
| **What I Care About** | Values and principles |
| **What I Do Outside of Work** | Hobbies and interests |
| **How to Connect** | Invitation to reach out |

## Business Rules

- Content should feel **personal and authentic**, not corporate
- Should **complement** (not duplicate) the Home page's professional content
- **Text-driven narrative** is primary; images are optional

## Source Files

```
src/pages/
└── about.astro
```

---

> [!see-also] 
> - [[portfolio-identity]] for professional content
> - [[contact-communication]] for outreach options
