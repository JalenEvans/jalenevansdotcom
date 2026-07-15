---
title: Scripts
type: reference
tags:
  - documentation
  - scripts
  - tooling
---

# Scripts

> [!info] Documentation Tooling
> Helper scripts for maintaining documentation.

## Available Scripts

| Script | Purpose | Usage |
|--------|---------|-------|
| `validate-docs.sh` | Check docs match code | `./scripts/validate-docs.sh` |
| `update-docs.sh` | Get update guidance | `./scripts/update-docs.sh [target]` |
| `setup-docs.sh` | One-time setup | `./scripts/setup-docs.sh` |

## validate-docs.sh

Validates that documentation is in sync with the codebase.

**Checks:**
1. Schema fields in `content.config.ts` vs `models/project.md`
2. Registered tools in `toolIconFunctions.ts` vs `domains/project-portfolio.md`
3. Routes in `routes.ts` vs `domains/navigation-routing.md`
4. External links in `links.ts` vs domain docs
5. Project count in code vs docs

**Usage:**
```bash
./scripts/validate-docs.sh
```

**Output:**
```
✓ Schema fields match
✓ Registered tools match
✓ Routes match
✓ External links match
✓ Project count matches
```

## update-docs.sh

Provides guidance on which docs to update after code changes.

**Usage:**
```bash
./scripts/update-docs.sh schema   # After schema changes
./scripts/update-docs.sh tools    # After tool changes
./scripts/update-docs.sh routes   # After route changes
./scripts/update-docs.sh links    # After link changes
```

## setup-docs.sh

One-time setup for documentation tooling.

**Usage:**
```bash
./scripts/setup-docs.sh
```

**Actions:**
- Makes `validate-docs.sh` executable
- Ensures scripts directory exists

---

> [!tip] Workflow
> 1. Make code changes
> 2. Run `./scripts/validate-docs.sh`
> 3. If errors, run `./scripts/update-docs.sh [target]`
> 4. Update docs in Obsidian
> 5. Re-run validation
