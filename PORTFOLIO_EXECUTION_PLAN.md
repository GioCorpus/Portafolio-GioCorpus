# Portfolio Execution Plan

## P0 — RELEASE BLOCKERS (All Resolved)
- ✅ **FIX-01**: Build Failure - RESOLVED (Vite config works correctly)
- ✅ **FIX-02**: WitchCraft metadata in src/data/projects.ts (UE5 → Unity 6/Roadmap) - RESOLVED
- ✅ **FIX-03**: CV PDF asset in public/cv/ - RESOLVED (copied and renamed)

## P1 — CORRECTNESS & CONSISTENCY (All Resolved)
- ✅ **CON-01**: Audit all occurrences of "Unreal Engine 5" - RESOLVED (only remains in techStack.ts as "Unreal Engine 5" with proficiency: 'basic' for historical accuracy)
- ✅ **CON-02**: "20+ years" experience clearly attributed to technical/hardware computing - RESOLVED (Geese-PC entry specifies Linux systems, networking, data recovery, automation)
- ✅ **CON-03**: Verify all canonical links in projects.ts - RESOLVED (all links verified)

## P2 — REFINEMENT
- [ ] **REF-01**: Enhance Ecosystem visualization (M8) - Add explicit relationship labels between projects
- [ ] **REF-02**: Audit a11y (WCAG 2.2 AA) for all case studies
- [ ] **REF-03**: Optimize assets/images for production (favicon.ico multi-size, og-image.png 1200×630)
- [ ] **REF-04**: Implement code splitting for large JS bundle (665KB → target <500KB chunks)

## P3 — HARDENING (M9)
- [ ] **HARD-01**: Full responsive audit (320px to 1920px) - All routes
- [ ] **HARD-02**: Zero-runtime-error verification across all routes
- [ ] **HARD-03**: SEO/OpenGraph/Favicon finalization
- [ ] **HARD-04**: Accessibility audit (WCAG 2.2 AA) - keyboard navigation, focus indicators, ARIA, contrast
- [ ] **HARD-05**: Performance audit - Lighthouse/Core Web Vitals measurement
- [ ] **HARD-06**: Bundle analysis - manualChunks configuration for code splitting
- [ ] **HARD-07**: Frontend security review - CSP readiness, external links rel attributes, dependency vulnerabilities

## P4 — RELEASE (M10)
- [ ] **REL-01**: Freeze Release Candidate
- [ ] **REL-02**: Configure production domain and hosting (VITE_SITE_URL)
- [ ] **REL-03**: Generate sitemap.xml and robots.txt
- [ ] **REL-04**: Configure CI/CD pipeline (typecheck → lint → build → deploy)
- [ ] **REL-05**: Final Smoke Test on production URL (all routes, refresh, assets, metadata, HTTPS)
- [ ] **REL-06**: Security headers configuration (CSP, HSTS, etc.)
- [ ] **REL-07**: Documentation finalization (README, DEPLOYMENT.md, RELEASE_CHECKLIST.md, CHANGELOG.md)
- [ ] **REL-08**: Rollback procedure documentation
- [ ] **REL-09**: Tag verified release (if authorized)

## Completed Tasks Summary
| ID | Task | Status | Verification |
|----|------|--------|--------------|
| FIX-01 | Build Failure | ✅ DONE | npm run build passes |
| FIX-02 | WitchCraft UE5→Unity 6 | ✅ DONE | projects.ts updated, build passes |
| FIX-03 | CV PDF Asset | ✅ DONE | public/cv/giovanny-corpus-bernal-cv.pdf exists |
| CON-01 | UE5 References Audit | ✅ DONE | Only in techStack.ts as historical reference |
| CON-02 | Experience Wording | ✅ DONE | "hands-on Linux systems..." not SWE |
| CON-03 | Canonical Links | ✅ DONE | All verified in projects.ts |
| CON-04 | Skills Proficiency | ✅ DONE | Qualitative levels (expert/advanced/intermediate/basic/learning) |
| CON-05 | SEO/OG Domain Config | ✅ DONE | VITE_SITE_URL injection at build time |

## Next Priority Actions
1. **M9-HARD-01**: Responsive audit at 320/375/768/1024/1440/1920 breakpoints
2. **M9-HARD-02**: Runtime error check on all 10 routes
3. **M9-HARD-04**: Accessibility audit (keyboard-only testing)
4. **M9-HARD-06**: Code splitting with manualChunks (vendor, router, case-studies)
5. **M9-HARD-03**: Generate favicon.ico (multi-size) and og-image.png (1200×630)
6. **M10-REL-03**: sitemap.xml and robots.txt generation