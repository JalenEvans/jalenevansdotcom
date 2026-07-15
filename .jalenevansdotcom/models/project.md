---
title: Project Model
type: model
domain: projects
tags:
  - model
  - project
  - aggregate
---

# Project

> [!important] Aggregate Root
> The central entity containing all project metadata.

## Schema

**Source**: `src/content.config.ts`

```typescript
const project = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/project' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    startDate: z.coerce.date(),
    contributors: z.array(z.string()).default(['Jalen Evans']),
    description: z.string(),
    tools: z.array(z.string()),
    mainImage: z.string().optional(),
    tags: z.array(z.string()),
  }),
})
```

## Fields

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | — | UUID identifier |
| `title` | string | Yes | — | Display name (kebab-case) |
| `startDate` | Date | Yes | — | ISO date string (coerced) |
| `contributors` | string[] | No | `['Jalen Evans']` | People who worked on it |
| `description` | string | Yes | — | Short summary |
| `tools` | string[] | Yes | — | Technology identifiers |
| `mainImage` | string | No | — | Path to project image |
| `tags` | string[] | Yes | — | Categorization labels |

## Current Instances

| ID | Title | Start Date | Tools | Tags |
|----|-------|------------|-------|------|
| `d0b6f6ce-1fff-42e0-aa73-4f2388c074c4` | loo-cator | 2024-10-09 | flutter, firebase | flutter, mobile, firebase |
| `1711954b-e207-4cde-b964-011c1b69246d` | personal-website | 2026-01-06 | astro | projects |
| `e4e78f5a-1d5b-4fe6-b85d-7e9085bada58` | tripoli | 2022-10-09 | java | java, research, javafx, testing |

## File Location

```
src/content/project/
├── loo-cator.mdx
├── personal-website.mdx
└── tripoli.mdx
```

---

> [!see-also] 
> - [[domains/project-portfolio]] for entity details
> - [[domains/content-management]] for schema definition
