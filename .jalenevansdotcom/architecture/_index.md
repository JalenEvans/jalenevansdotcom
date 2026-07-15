---
title: Architecture
type: index
tags:
  - documentation
  - architecture
---

# Architecture

> [!info] Technical Architecture
> Infrastructure, deployment, and technology stack.

## Documents

| Document | Description |
|----------|-------------|
| [[architecture/stack\|Tech Stack]] | Technology choices and versions |
| [[architecture/docker\|Docker]] | Container configuration |
| [[architecture/nginx\|Nginx]] | Web server configuration |

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│                    Browser                          │
│              (Static HTML/CSS/JS)                   │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│                   Nginx                             │
│            (Port 8080, Gzip, Static)                │
└─────────────────────┬───────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────┐
│              Docker Container                       │
│         (jalenevans/jalenevansdotcom:latest)        │
└─────────────────────────────────────────────────────┘
```

---

> [!see-also] 
> [[domains/deployment-infrastructure]] for domain context
