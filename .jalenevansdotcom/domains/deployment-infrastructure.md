---
title: Deployment & Infrastructure Domain
type: domain
tags:
  - domain
  - deployment
aliases:
  - Docker
  - Nginx
  - Infrastructure
---

# Deployment & Infrastructure

> [!abstract] Bounded Context
> Building, containerizing, and serving the site.

## Overview

The Deployment & Infrastructure domain manages the **build pipeline and runtime environment**. The site uses a multi-stage Docker build (Node.js → Nginx) for optimized production deployment.

## Ubiquitous Language

| Term | Definition |
|------|------------|
| **Build** | Compiling Astro to static HTML/CSS/JS |
| **Container** | Docker image encapsulating the app |
| **Multi-stage Build** | Docker build with separate build and runtime stages |
| **Reverse Proxy** | Nginx serving static files |
| **Gzip** | Compression for served assets |

## Architecture Decision: Multi-stage Docker Build

> [!important] Architecture Decision
> **Decision**: Two-stage Docker build
> 1. **Build Stage** (`node:25`) — Install dependencies, compile Astro
> 2. **Runtime Stage** (`nginx:alpine`) — Serve static files with Nginx

**Rationale:**
- Minimizes final image size (no Node.js in production)
- Nginx is optimized for static file serving
- Alpine base reduces attack surface

## Docker Configuration

### Dockerfile

```dockerfile
FROM node:25 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

### Compose Configuration

> [!example] File: `compose.yaml`

```yaml
name: jalenevansdotcom

services:
  jalenevansdotcom:
    build:
      context: .
      dockerfile: Dockerfile
    image: jalenevans/jalenevansdotcom:latest
    container_name: jalenevansdotcom
    ports:
      - '8080:8080'
    restart: unless-stopped
```

### Build Stages

| Stage | Base Image | Purpose | Output |
|-------|------------|---------|--------|
| `build` | `node:25` | Compile Astro | `/app/dist` |
| `runtime` | `nginx:alpine` | Serve static files | Container |

## Nginx Configuration

> [!example] File: `nginx/nginx.conf`

```nginx
worker_processes 1;

events {
  worker_connections 1024;
}

http {
  server {
    listen 8080;
    server_name _;
    root /usr/share/nginx/html;
    index index.html index.htm;

    gzip on;
    gzip_min_length 1000;
    gzip_types text/plain text/css application/json 
               application/javascript text/xml application/xml 
               text/javascript;

    error_page 404 /404.html;

    location / {
      try_files $uri $uri/index.html =404;
    }
  }
}
```

### Nginx Features

| Feature | Configuration |
|---------|---------------|
| Port | 8080 |
| Gzip | Enabled (min 1000 bytes) |
| Gzip Types | text, CSS, JSON, JS, XML |
| 404 Handling | Custom 404.html |
| MIME Types | Included from `/etc/nginx/mime.types` |

## Network & Ports

| Service | Internal Port | External Port |
|---------|---------------|---------------|
| Nginx | 8080 | 8080 |

## Business Rules

1. Site is served on **port 8080**
2. Nginx handles **gzip compression** for performance
3. 404 errors handled by **custom 404.html**
4. Static files served with **proper MIME types**
5. Container **restarts** unless manually stopped

## Source Files

```
/
├── Dockerfile
├── compose.yaml
└── nginx/
    └── nginx.conf
```

---

> [!see-also] 
> - [[architecture/stack]] for technology details
> - [[architecture/docker]] for deployment procedures
