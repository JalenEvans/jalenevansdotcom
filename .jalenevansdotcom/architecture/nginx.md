---
title: Nginx Configuration
type: reference
tags:
  - architecture
  - nginx
  - web-server
---

# Nginx

> [!info] Web Server Configuration
> Nginx serves the static site with compression and routing.

## Overview

Nginx is configured as a **reverse proxy for static files** with gzip compression, custom error handling, and proper MIME types.

## Configuration

**Source**: `nginx/nginx.conf`

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
    gzip_proxied expired no-cache no-store private auth;
    gzip_types text/plain text/css application/json 
               application/javascript application/x-javascript 
               text/xml application/xml application/xml+rss 
               text/javascript;

    error_page 404 /404.html;
    location = /404.html {
      root /usr/share/nginx/html;
      internal;
    }

    location / {
      try_files $uri $uri/index.html =404;
    }
  }
}
```

## Settings

### Server

| Setting | Value | Description |
|---------|-------|-------------|
| `listen` | 8080 | Port number |
| `server_name` | `_` | Catch-all server name |
| `root` | `/usr/share/nginx/html` | Static file root |
| `index` | `index.html index.htm` | Default index files |

### Gzip

| Setting | Value | Description |
|---------|-------|-------------|
| `gzip` | `on` | Enable compression |
| `gzip_min_length` | 1000 | Min bytes to compress |
| `gzip_proxied` | `expired no-cache no-store private auth` | Proxy settings |
| `gzip_types` | text, CSS, JSON, JS, XML | Compressible types |

### Error Handling

| Error | Handler | Location |
|-------|---------|----------|
| 404 | `/404.html` | Internal redirect |

### Routing

| Pattern | Handler | Description |
|---------|---------|-------------|
| `/` | `try_files $uri $uri/index.html =404` | Serve static files |

## MIME Types

Included from `/etc/nginx/mime.types`.

**Common Types:**
| Extension | MIME Type |
|-----------|-----------|
| `.html` | text/html |
| `.css` | text/css |
| `.js` | application/javascript |
| `.json` | application/json |
| `.svg` | image/svg+xml |
| `.png` | image/png |
| `.jpg` | image/jpeg |

## Performance

### Gzip Compression

**Enabled Types:**
- `text/plain`
- `text/css`
- `application/json`
- `application/javascript`
- `application/x-javascript`
- `text/xml`
- `application/xml`
- `application/xml+rss`
- `text/javascript`

**Benefits:**
- Reduces file sizes by 60-80%
- Faster page loads
- Lower bandwidth usage

## Security

| Feature | Status |
|---------|--------|
| Server tokens | Not hidden (default) |
| CORS | Not configured |
| Rate limiting | Not configured |
| HTTPS | Not configured (handled upstream) |

---

> [!see-also] 
> - [[architecture/docker]] for container config
> - [[domains/deployment-infrastructure]] for domain context
