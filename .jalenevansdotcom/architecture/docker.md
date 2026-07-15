---
title: Docker Configuration
type: reference
tags:
  - architecture
  - docker
  - deployment
---

# Docker

> [!info] Container Configuration
> Multi-stage Docker build for production deployment.

## Overview

The site uses a **multi-stage Docker build**:
1. **Build Stage**: Node.js compiles Astro to static files
2. **Runtime Stage**: Nginx serves the static files

This approach minimizes the final image size and attack surface.

## Dockerfile

**Source**: `Dockerfile`

```dockerfile
# Build Stage
FROM node:25 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Runtime Stage
FROM nginx:alpine AS runtime
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

## Build Stages

### Stage 1: Build

| Property | Value |
|----------|-------|
| Base Image | `node:25` |
| Work Dir | `/app` |
| Output | `/app/dist` |

**Steps:**
1. Copy `package*.json`
2. Install dependencies (`npm install`)
3. Copy source code
4. Build Astro (`npm run build`)

### Stage 2: Runtime

| Property | Value |
|----------|-------|
| Base Image | `nginx:alpine` |
| Web Root | `/usr/share/nginx/html` |
| Port | 8080 |

**Steps:**
1. Copy Nginx config
2. Copy built files from Stage 1
3. Expose port 8080
4. Start Nginx

## Compose Configuration

**Source**: `compose.yaml`

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

## Commands

| Command | Description |
|---------|-------------|
| `docker compose build` | Build the image |
| `docker compose up -d` | Start the container |
| `docker compose down` | Stop the container |
| `docker compose logs` | View logs |
| `docker compose restart` | Restart the container |

## Environment Variables

None required.

## Volumes

None required (static site).

## Networking

| Service | Internal Port | External Port | Protocol |
|---------|---------------|---------------|----------|
| jalenevansdotcom | 8080 | 8080 | HTTP |

---

> [!see-also] 
> - [[architecture/nginx]] for web server config
> - [[domains/deployment-infrastructure]] for domain context
