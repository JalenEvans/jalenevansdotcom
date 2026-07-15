---
title: LogoData Model
type: model
domain: projects
tags:
  - model
  - logo
  - value-object
---

# LogoData

> [!info] Value Object
> Technology icon data for project tools.

## Schema

**Source**: `src/utils/toolIconFunctions.ts`

```typescript
export type LogoData = {
  title: string
  rawPath: string
  hoverColor: string
}
```

## Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Display name (e.g., "Flutter") |
| `rawPath` | string | SVG markup |
| `hoverColor` | string | Hex color for hover state |

## Registered Instances

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

## Usage

```typescript
import { findIcon } from '../utils/toolIconFunctions'

const icon = findIcon('flutter')
// Returns: { title: 'Flutter', rawPath: '...', hoverColor: '#02569B' }
```

## File Location

```
src/utils/toolIconFunctions.ts
```

---

> [!see-also] 
> - [[domains/project-portfolio#Tool]] for tool context
> - [[models/project]] for project aggregate
