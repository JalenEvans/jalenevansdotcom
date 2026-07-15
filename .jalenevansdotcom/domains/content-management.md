---
title: Content Management Domain
type: domain
tags:
  - domain
  - content
aliases:
  - Content
  - MDX
  - Collections
---

# Content Management

> [!abstract] Bounded Context
> Handling MDX-based content and rendering pages.

## Overview

The Content Management domain handles **content creation, storage, and rendering** using Astro Content Collections. Projects are stored as MDX files with YAML frontmatter, validated by Zod schemas.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Collection** | A content type defined in the schema |
| **Entry** | A single piece of content within a collection |
| **Slug** | URL-safe path segment for content routing |
| **MDX** | Markdown with JSX support for rich content |
| **Schema** | Zod-validated structure for content metadata |
| **Template** | An Obsidian Templater file for creating new content |

## Collections

### Project Collection

> [!important] Primary Collection
> The only content collection currently defined.

**Schema** (`src/content.config.ts`):
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

**Schema Fields:**

| Field | Type | Required | Default | Description |
|-------|------|----------|---------|-------------|
| `id` | string | Yes | — | UUID identifier |
| `title` | string | Yes | — | Display name (kebab-case) |
| `startDate` | Date | Yes | — | ISO date (coerced) |
| `contributors` | string[] | No | `['Jalen Evans']` | People who worked on it |
| `description` | string | Yes | — | Short summary |
| `tools` | string[] | Yes | — | Technology identifiers |
| `mainImage` | string | No | — | Path to project image |
| `tags` | string[] | Yes | — | Categorization labels |

## Content Creation

### Creating a Project

> [!tip] Workflow
> Use Obsidian with Templater plugin to create new projects.

1. **Use Template**: `src/content/templates/project-template.md`
2. **Fill Fields**: Complete all required frontmatter
3. **Write Content**: Add MDX body below frontmatter
4. **Save**: Place in `src/content/project/`

**Template**:
```yaml
---
id: <% tp.user.uuid() %>
title: <% tp.file.title %>
startDate: "{{date:YYYY-MM-DD}}"
description:
tools:
mainImage:
tags:
---
```

### File Naming

- **Convention**: kebab-case (e.g., `my-project.mdx`)
- **Slug Derivation**: Filename becomes URL slug
- **Example**: `loo-cator.mdx` → `/project/loo-cator`

## Content Rendering

### Static Path Generation

> [!example] Page: `src/pages/project/[...slug].astro`

```typescript
export const getStaticPaths = async () => {
  const projectEntries = await getCollection('project')
  return projectEntries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }))
}
```

### Content Loading

```typescript
const allProjects = await getCollection('project')
const project = allProjects.find(p => p.data.id === id)
const { Content } = await entry.render()
```

## Business Rules

1. Each project must have a **unique UUID** `id`
2. `startDate` is **coerced** to a Date object from ISO string
3. MDX files are loaded from `./src/content/project/`
4. Entries are rendered within `MainLayout`

## Source Files

```
src/
├── content.config.ts              # Schema definition
├── content/
│   ├── project/                   # MDX files
│   │   ├── loo-cator.mdx
│   │   ├── personal-website.mdx
│   │   └── tripoli.mdx
│   └── templates/
│       └── project-template.md    # Obsidian template
└── pages/
    └── project/
        ├── index.astro            # Listing page
        └── [...slug].astro        # Detail page
```

---

> [!see-also] 
> - [[project-portfolio]] for project entity details
> - [[models/project]] for schema reference
