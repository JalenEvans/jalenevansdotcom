---
title: Contact & Communication Domain
type: domain
tags:
  - domain
  - contact
aliases:
  - Contact
  - Social Links
---

# Contact & Communication

> [!abstract] Bounded Context
> Enabling visitors to reach out and connect.

## Overview

The Contact & Communication domain manages how visitors can connect with Jalen. Currently implemented via social links in the Footer; email is exposed as a `mailto:` link.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Social Link** | An external profile link (GitHub, LinkedIn, etc.) |
| **Contact Method** | A way to reach Jalen (form, email, social) |
| **Footer** | Persistent bottom section with contact links |

## Current Implementation

### Social Links

> [!example] Constants: `src/constants/links.ts`

```typescript
export const LINKS = {
  substack: 'https://jalenevans.substack.com',
  linkedin: 'https://www.linkedin.com/in/je319',
  github: 'https://www.github.com/JalenEvans',
  gmail: 'mailto:jalenemmanuelevans@gmail.com',
}
```

### Footer Display

> [!example] Component: `src/components/Footer.astro`

| Icon | Platform | URL |
|------|----------|-----|
| LinkedInLogo | LinkedIn | `linkedin.com/in/je319` |
| GithubLogo | GitHub | `github.com/JalenEvans` |
| GmailLogo | Email | `mailto:jalenemmanuelevans@gmail.com` |

## External Platforms

| Platform | Purpose | Visibility |
|----------|---------|------------|
| Substack | Blog content | Blog page |
| LinkedIn | Professional profile | Footer |
| GitHub | Code repositories | Footer |
| Gmail | Direct contact | Footer |

## Domain Events

| Event | Trigger | Description |
|-------|---------|-------------|
| `SocialLinkClicked` | User clicks Footer icon | Opens external URL |
| `EmailLinkClicked` | User clicks Gmail icon | Opens mailto: handler |

## Source Files

```
src/
├── components/
│   ├── Footer.astro
│   └── Icon.astro
└── constants/
    └── links.ts
```

---

> [!see-also] 
> - [[portfolio-identity]] for Footer context
> - [[blog]] for Substack integration
