---
title: Contributor Model
type: model
domain: projects
tags:
  - model
  - contributor
  - value-object
---

# Contributor

> [!info] Value Object
> A person who worked on a project, with optional social links.

## Schema

**Source**: `src/content.config.ts`

```typescript
// Current implementation (string array)
contributors: z.array(z.string()).default(['Jalen Evans'])
```

## Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | string | Yes | Display name |

## Current Instances

| Name | Associated Projects |
|------|---------------------|
| Jalen Evans | loo-cator, personal-website, tripoli |

## Usage

Contributors are displayed on:
- **ProjectCard**: Not currently displayed
- **Project Detail**: Not currently displayed

## File Location

Contributors are defined within project frontmatter:
```
src/content/project/*.mdx
```

---

> [!see-also] 
> - [[domains/project-portfolio]] for contributor context
> - [[models/project]] for project aggregate
