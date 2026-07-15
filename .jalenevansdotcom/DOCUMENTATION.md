---
title: Documentation Maintenance
type: process
tags:
  - documentation
  - process
  - workflow
---

# Documentation Maintenance

> [!info] Keeping Docs in Sync
> How the General Manager ensures documentation stays accurate.

## Overview

Documentation drift happens when code changes but docs aren't updated. This process defines **when**, **who**, and **how** to update the documentation in `.jalenevansdotcom/`.

## Roles

| Role | Responsibility |
|------|----------------|
| **Head Coach** | Makes architecture/feature decisions |
| **Associate Head Coach** | Research, implementation details |
| **Point Guard** | Orchestrates documentation validation in workflow |
| **General Manager** | Documents the domain, maintains docs |
| **Center** | Reviews code, validates documentation in sync |

## When to Update Documentation

### Critical Updates (Must Update)

These changes **require** GM consultation:

| Trigger | Files to Update |
|---------|-----------------|
| Schema change in `content.config.ts` | `models/project.md`, `domains/content-management.md` |
| New content collection added | `domains/content-management.md`, `models/_index.md` |
| Route added/removed/changed | `domains/navigation-routing.md` |
| New external integration | Relevant domain + `ubiquitous-language/glossary.md` |
| Docker/Nginx config changed | `architecture/docker.md`, `architecture/nginx.md` |
| New technology/tool registered | `domains/project-portfolio.md`, `models/logo-data.md` |

### Important Updates (Should Update)

| Trigger | Files to Update |
|---------|-----------------|
| New component added | Relevant domain doc |
| Component significantly refactored | Relevant domain doc |
| New constant/config added | Relevant domain doc |
| Business rule changed | Relevant domain doc |
| New term introduced | `ubiquitous-language/glossary.md` |

### Nice-to-Have Updates

| Trigger | Files to Update |
|---------|-----------------|
| Component bug fix | No update needed |
| Style changes | `domains/presentation-theming.md` |
| Minor refactoring | No update needed |

## Update Workflow

### Step 1: Identify Change Type

```bash
# Run validation script to detect drift
./scripts/validate-docs.sh
```

### Step 2: Point Guard Orchestration

The Point Guard automatically checks for documentation drift during execution:

1. **After Implementation**: Runs `./scripts/validate-docs.sh`
2. **If Validation Fails**: Delegates to General Manager for updates
3. **After Updates**: Re-runs validation to confirm fix

### Step 3: Consult GM

If the change affects:
- **Schema** → GM updates models
- **Domain logic** → GM updates domain docs
- **Architecture** → GM updates architecture docs
- **New terms** → GM updates glossary

### Step 4: Update Documentation

1. Open relevant doc in Obsidian
2. Make changes using Obsidian-style markdown
3. Maintain `[[wikilinks]]` for cross-references
4. Update YAML frontmatter if needed

### Step 5: Verify

```bash
# Re-run validation
./scripts/validate-docs.sh

# Check Obsidian graph for orphans
# Open .jalenevansdotcom/ in Obsidian → Graph View
```

## Validation Script

**Location**: `scripts/validate-docs.sh`

**Checks:**
1. Schema fields in code vs docs
2. Registered tools in code vs docs
3. Routes in code vs docs
4. External links in code vs docs

**Usage:**
```bash
./scripts/validate-docs.sh
```

**Output:**
```
✓ Schema fields match
✓ Tools match
✓ Routes match
⚠ External links: 1 mismatch found
  - Code: substack URL changed
  - Docs: still shows old URL
```

## Documentation Structure

```
.jalenevansdotcom/
├── README.md                    # Main index
├── domains/                     # Bounded contexts
├── ubiquitous-language/         # Glossary
├── models/                      # Entity definitions
└── architecture/                # Infrastructure
```

## Conventions

### File Naming
- Use kebab-case: `portfolio-identity.md`
- Index files: `_index.md`
- One concept per file

### YAML Frontmatter
```yaml
---
title: Document Title
type: domain | model | reference | process
domain: domain-name (if applicable)
tags:
  - documentation
  - relevant-tag
aliases:
  - Alternative Name
---
```

### Cross-References
- Use `[[wikilinks]]` for internal links
- Use `> [!see-also]` callouts for related docs
- Use `> [!info]`, `> [!warning]`, `> [!tip]` for callouts

### Updates
- Keep glossary in sync with domain docs
- Update `_index.md` when adding new files
- Maintain alphabetical order in glossary

---

> [!tip] Quick Reference
> **Changed schema?** → Update `models/project.md`  
> **New route?** → Update `domains/navigation-routing.md`  
> **New term?** → Update `ubiquitous-language/glossary.md`  
> **Not sure?** → Run `./scripts/validate-docs.sh`
