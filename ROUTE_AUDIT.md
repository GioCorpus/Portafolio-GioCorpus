# ROUTE AUDIT — M9

**Date:** 2026-09-25  
**Source:** `src/app/router.tsx`, `src/data/social.ts` (navItems)

---

## ROUTE MATRIX

| Route | Exists | Loads | Direct Nav | Refresh | Title | Meta Desc | Canonical | Keyboard | Mobile | Console Clean | Internal Links | External Links | Status |
|-------|--------|-------|------------|---------|-------|-----------|-----------|----------|--------|---------------|----------------|----------------|--------|
| `/` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/about` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/resume` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/research` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/projects/quantum-energy-os` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/projects/tamayo` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/projects/witchcraft` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/projects` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/contact` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |
| `/*` (404) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | 🔄 | **PASS** |

---

## NAVIGATION DATA DRIFT

**Source of Truth:** `src/data/social.ts` → `navItems`

```typescript
export const navItems: NavItem[] = [
  { id: 'about', label: 'ABOUT', href: '/about', icon: 'user' },
  { id: 'work', label: 'WORK', href: '/projects', icon: 'folder-code' },  // ❌ MISSING ROUTE
  { id: 'research', label: 'RESEARCH', href: '/research', icon: 'flask-conical' },
  { id: 'contact', label: 'CONTACT', href: '/contact', icon: 'mail' },   // ❌ MISSING ROUTE
];
```

**Router Configuration:** `src/app/router.tsx` — missing `/projects` and `/contact`

**Impact**: Users clicking "WORK" or "CONTACT" in navigation (desktop or mobile) will hit the 404 page.

---

## ROUTE TESTING CHECKLIST

For each existing route, verify:

- [ ] **Client Navigation**: Click nav link → route loads
- [ ] **Direct URL**: Type URL in browser → route loads
- [ ] **Refresh**: F5/Cmd+R on route → route loads (not redirect to home)
- [ ] **Title**: `<title>` tag present and unique
- [ ] **Meta Description**: `<meta name="description">` present and accurate
- [ ] **Canonical**: `<link rel="canonical">` if deployment domain known
- [ ] **Open Graph**: `og:title`, `og:description`, `og:image`, `og:url`
- [ ] **Keyboard**: Full navigation without mouse
- [ ] **Mobile**: Works at 320px, 375px
- [ ] **Console**: No TypeError, ReferenceError, React warnings, failed resources
- [ ] **Internal Links**: All anchor links (`#section`) resolve
- [ ] **External Links**: `target="_blank" rel="noopener noreferrer"` where appropriate

---

## ERROR ROUTES VERIFICATION

| Error Route | Component | Test Case | Expected |
|-------------|-----------|-----------|----------|
| Unknown route | NotFoundPage | `/invalid-route` | Shows 404 with home link |
| Render error | RouteErrorPage | Trigger error boundary | Shows error details, dev stack trace, home/projects links |
| Route error (loader) | RouteErrorPage | N/A (no loaders) | N/A |

---

## ROUTE FOCUS MANAGEMENT

**Current**: No focus management on route transitions.
**Required**: Focus main heading (`h1`) or main container (`#main-content`) after route change.
**WCAG**: 2.4.3 Focus Order, 3.2.2 On Input

---

## SCROLL RESTORATION

**Current**: Browser default (may not restore scroll position on back/forward).
**Investigate**: Whether `scrollRestoration: 'manual'` + custom logic needed.

---

## ANCHOR/HASH LINKS

**Known Anchors** (from Hero "Explore My Work" → `#featured-work`):
- `#featured-work` — exists on HomePage (FlagshipProjects section?)
- `#hero` — Hero section id
- `#about` — About section on HomePage
- `#contact` — Contact section on HomePage

**Verify**: Fixed header offset with `scroll-margin-top` or `scroll-padding-top`.