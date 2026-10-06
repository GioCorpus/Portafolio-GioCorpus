## 2025-10-06 — GitHub Pages Deployment Fix: Jekyll `/docs` ENOENT → Vite `dist/` Deployment

### Issue
GitHub Actions workflow `actions/jekyll-build-pages@v1` failed with:
```
Conversion error:
Jekyll::Converters::Scss encountered an error
while converting 'assets/css/style.scss'
No such file or directory @ dir_chdir0 - /github/workspace/docs
Errno::ENOENT
```

GitHub Pages was configured to deploy from branch `/docs` using Jekyll, but this is a React + TypeScript + Vite application.

### Root Cause
**Deployment architecture mismatch**: Repository settings had GitHub Pages configured as "Deploy from a branch → /docs (Jekyll)", but the project is a Vite SPA that produces static assets in `dist/`. The Jekyll workflow was attempting to build a non-existent `/docs` directory.

No repository-controlled workflow existed — the Jekyll build was triggered by GitHub Pages settings, not by a `.github/workflows/` file.

### Repository Architecture Confirmed
- **Framework**: React 18 + TypeScript + Vite 6 + Tailwind CSS 3
- **Package Manager**: npm (package-lock.json)
- **Build Command**: `npm run build:github` (with `--base=/Portafolio-GioCorpus/`)
- **Production Output**: `dist/`
- **Router**: `createBrowserRouter` (BrowserRouter — clean URLs)
- **Repository**: `GioCorpus/Portafolio-GioCorpus` (project site → `https://giocorpus.github.io/Portafolio-GioCorpus/`)
- **SPA Fallback**: 404.html redirect pattern (rafgraph/spa-github-pages)
- **Jekyll**: Not used — disabled via `.nojekyll` in published artifact

### Fix Applied

#### 1. Vite Configuration (`vite.config.ts`)
- Added HTML transform plugin to inject production URLs at build time
- Base path controlled via CLI `--base=/Portafolio-GioCorpus/` for GitHub Pages
- Local dev uses root `/` base

#### 2. Package Scripts (`package.json`)
- Added `build:github` script: `cross-env VITE_SITE_URL=https://giocorpus.github.io/Portafolio-GioCorpus vite build --base=/Portafolio-GioCorpus/`
- Uses `cross-env` for cross-platform env var support
- Regular `build` script unchanged for local development

#### 3. GitHub Actions Workflow (`.github/workflows/deploy-pages.yml`)
```yaml
name: Deploy Portfolio to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run build:github
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

#### 4. SPA Fallback & Jekyll Prevention (`public/`)
- `public/.nojekyll` — Prevents GitHub Pages from running Jekyll on the artifact
- `public/404.html` — SPA redirect for BrowserRouter deep links (copied to `dist/`)

#### 5. HTML Template (`index.html`)
- Updated Open Graph / Twitter meta tags to use `og-image.svg` (matches actual asset)
- Favicon uses SVG only (no `.ico` dependency)
- Placeholder `https://TU-DOMINIO.com/` replaced at build time via HTML transform

### Verification
```
npm run build:        PASS (local, base=/)
npm run build:github: PASS (GitHub Pages, base=/Portafolio-GioCorpus/)
npm run lint:         PASS (tsc --noEmit)
TypeScript compile:   PASS

dist/ contents verified:
- index.html — correct base paths, production OG URLs, favicon.svg with base
- assets/index-*.js / index-*.css — hashed, base-prefixed
- .nojekyll — present
- 404.html — SPA redirect present
- favicon.svg, og-image.svg — copied from public/
- cv/, projects/ — asset directories copied

Asset URLs in GitHub Pages build:
- JS: /Portafolio-GioCorpus/assets/index-*.js
- CSS: /Portafolio-GioCorpus/assets/index-*.css
- Favicon: /Portafolio-GioCorpus/favicon.svg
- OG Image: https://giocorpus.github.io/Portafolio-GioCorpus/og-image.svg
- OG URL: https://giocorpus.github.io/Portafolio-GioCorpus/
```

### Manual GitHub Configuration Required
Since Cline cannot modify repository settings, the following **must be done manually** in GitHub:

1. Go to: `https://github.com/GioCorpus/Portafolio-GioCorpus/settings/pages`
2. **Build and deployment → Source**: Change from "Deploy from a branch" to **"GitHub Actions"**
3. Save

After this change, the next push to `main` will trigger the new workflow and deploy `dist/` to GitHub Pages.

### Files Changed
1. `vite.config.ts` — HTML transform plugin, base path handling
2. `package.json` — `build:github` script, `cross-env` dependency
3. `index.html` — OG/Twitter meta tags use `.svg`, placeholder domain
4. `public/.nojekyll` — New file (empty)
5. `public/404.html` — New SPA fallback
6. `.github/workflows/deploy-pages.yml` — New canonical deployment workflow

### Prevention
- Single canonical deployment path: GitHub Actions → Vite → `dist/` → Pages artifact
- No Jekyll configuration in repository
- `.nojekyll` ensures Jekyll never processes the artifact even if settings drift
- Base path derived from repository name, not hardcoded in config
- SPA fallback preserves clean URLs on direct navigation/refresh

### Status
**DEPLOYMENT ARCHITECTURE FIXED — AWAITING GITHUB PAGES SETTINGS CHANGE**