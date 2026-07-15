---
title: jalenevansdotcom - Software Documentation
type: index
tags:
  - documentation
  - index
---

# jalenevansdotcom

> [!info] About This Documentation
> This documentation describes the software as it currently exists, organized by domain and ubiquitous language.

## What Is This?

A **personal portfolio website** for Jalen Evans, built with Astro 7, Tailwind CSS 4, and MDX content. It serves as a digital resume, project showcase, and blog platform, deployed via Docker with Nginx.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [[architecture/stack#Astro\|Astro 7]] |
| Styling | [[architecture/stack#Tailwind CSS\|Tailwind CSS 4]] |
| Content | MDX (Astro Content Collections) |
| Fonts | Amiri, Nunito, Montserrat |
| Container | Docker (multi-stage: Node.js → Nginx) |
| Blog | Substack (external, embedded) |

## Navigation

### Domains

| Domain | Description |
|--------|-------------|
| [[domains/portfolio-identity\|Portfolio Identity]] | Professional identity presentation |
| [[domains/project-portfolio\|Project Portfolio]] | Software project showcase |
| [[domains/about\|About]] | Personal narrative and personality |
| [[domains/blog\|Blog]] | Long-form written content (Substack) |
| [[domains/contact-communication\|Contact & Communication]] | Visitor outreach |
| [[domains/content-management\|Content Management]] | MDX content handling |
| [[domains/navigation-routing\|Navigation & Routing]] | Site structure and URLs |
| [[domains/presentation-theming\|Presentation & Theming]] | Visual appearance |
| [[domains/deployment-infrastructure\|Deployment & Infrastructure]] | Docker and Nginx |

### Reference

| Document | Description |
|----------|-------------|
| [[ubiquitous-language/glossary\|Glossary]] | Master terminology reference |
| [[models/]] | Domain models and schemas |
| [[architecture/]] | Infrastructure and deployment |

## Source Code

The codebase lives at:
```
src/
├── assets/           # Images, SVGs, logos
├── components/       # Astro components
├── constants/        # Routes, links
├── content/          # MDX content collections
├── layouts/          # Page layouts
├── pages/            # Route pages
├── styles/           # Global CSS
└── utils/            # Helper functions
```

---

> [!tip] Quick Start
> - **Adding a project?** See [[domains/content-management#Creating a Project]]
> - **Understanding a term?** See [[ubiquitous-language/glossary]]
> - **Deployment info?** See [[architecture/docker]]
