---
title: Models
type: index
tags:
  - documentation
  - models
---

# Models

> [!info] Domain Models
> Entity and value object definitions for the software.

## Model Index

| Model | Domain | Type | Description |
|-------|--------|------|-------------|
| [[models/project\|Project]] | [[domains/project-portfolio\|Projects]] | Aggregate Root | Software endeavor with metadata |
| [[models/contributor\|Contributor]] | [[domains/project-portfolio\|Projects]] | Value Object | Person who worked on a project |
| [[models/logo-data\|LogoData]] | [[domains/project-portfolio\|Projects]] | Value Object | Technology icon data |

## Source Schema

The primary schema definition lives in:
```
src/content.config.ts
```

---

> [!see-also] 
> [[domains/content-management]] for schema details
> [[ubiquitous-language/glossary]] for term definitions
