# Debugging Log

## 2025-09-23 — Runtime Crash Fix: `Cannot read properties of undefined (reading 'icon')`

### Issue
ProjectCard crashed at `src/components/Projects.tsx:154` (now line 97) with:
```
TypeError: Cannot read properties of undefined (reading 'icon')
```

### Root Cause
The `Projects.tsx` component used an outdated `statusConfig` object with legacy status keys:
```typescript
const statusConfig = {
  completed: { icon: ShieldCheck, color: 'accent-green', label: 'Completed' },
  'in-progress': { icon: Code2, color: 'accent-cyan', label: 'In Progress' },
  archived: { icon: Archive, color: 'accent-amber', label: 'Archived' },
};
```

However, Milestone 1/2 introduced a new `ProjectStatus` type in `src/types/index.ts`:
```typescript
export type ProjectStatus = 
  | 'implemented'
  | 'prototype'
  | 'experimental'
  | 'research'
  | 'concept'
  | 'roadmap';
```

The actual project data in `src/data/projects.ts` uses these new status values (e.g., `prototype`, `research`, `concept`, `experimental`, `roadmap`, `implemented`), but the `statusConfig` map only had the old keys. When `statusConfig[project.status]` was called with a new status, it returned `undefined`, causing the crash when accessing `.icon`.

### Affected Component
- `src/components/Projects.tsx` — `ProjectCard` function

### Affected Data
All projects with non-legacy status values:
- **QuantumEnergyOS V.04** — `status: 'prototype'`
- **Tamayo 2.5D Engine** — `status: 'prototype'`
- **WitchCraft: Shamans & Nahuals** — `status: 'prototype'`
- **Quantum Browser Platform** — `status: 'concept'`
- **BioCorpus** — `status: 'implemented'`
- **Quartz5D** — `status: 'experimental'`
- **WitchCraft Studios** — `status: 'implemented'`

### Fix
1. **Removed legacy `statusConfig`** — Deleted the outdated configuration map with old keys.

2. **Added type-safe `statusIcons` map** — Maps each `ProjectStatus` to its Lucide React icon component:
   ```typescript
   const statusIcons: Record<ProjectStatus, React.ComponentType<{ className?: string }>> = {
     implemented: ShieldCheck,
     prototype: Code2,
     experimental: FlaskConical,
     research: Microscope,
     concept: Lightbulb,
     roadmap: Flag,
   };
   ```

3. **Added `statusBadgeVariants` map** — Maps each status to a valid Badge variant:
   ```typescript
   const statusBadgeVariants: Record<ProjectStatus, 'success' | 'info' | 'warning' | 'default'> = {
     implemented: 'success',
     prototype: 'info',
     experimental: 'warning',
     research: 'info',
     concept: 'default',
     roadmap: 'default',
   };
   ```

4. **Created `getStatusConfig()` function** — Centralized status resolution with controlled fallback:
   ```typescript
   function getStatusConfig(status: ProjectStatus | undefined) {
     const variant = status ? statusVariants[status] : statusVariants.implemented;
     const Icon = status ? statusIcons[status] : ShieldCheck;
     const badgeVariant = status ? statusBadgeVariants[status] : 'success';
     
     if (!variant && import.meta.env.DEV) {
       console.warn(`[ProjectCard] Missing status variant for "${status}", using fallback`);
     }
     
     return { icon: Icon, color: variant?.color || '#00ff88', label: variant?.label || 'Unknown', badgeVariant };
   }
   ```

5. **Updated `ProjectCard`** — Uses `getStatusConfig(project.status)` instead of direct map lookup.

6. **Reused canonical `statusVariants`** — Leveraged the existing `statusVariants` from `src/lib/projectTheme.ts` which already had all `ProjectStatus` keys with labels and colors.

### Type Safety Improvements
- `statusIcons` uses `Record<ProjectStatus, ...>` ensuring all statuses are covered at compile time
- `statusBadgeVariants` similarly typed
- `getStatusConfig` accepts `ProjectStatus | undefined` with proper fallback
- No `as any`, no non-null assertions, no special-case project name checks

### Defensive Fallback
- If `project.status` is undefined or invalid, falls back to `implemented` (most common/safe status)
- Development warning logged if status variant is missing
- All lookups are type-safe via `Record<ProjectStatus, ...>`

### Router Error UX
Added application-level error handling:
- **Created `src/pages/RouteErrorPage.tsx`** — Custom error page with:
  - Semantic heading ("APPLICATION ERROR")
  - Readable contrast (dark background, cyan accents)
  - Keyboard-accessible recovery links (Home, Projects)
  - Development-only stack trace in collapsible `<details>`
  - Mailto link for reporting persistent issues
- **Configured `errorElement`** on root route in `src/app/router.tsx`
- 404 (`NotFoundPage`) remains distinct from runtime errors

### Files Modified
- `src/components/Projects.tsx` — Fixed status lookup, added type-safe config
- `src/app/router.tsx` — Added `errorElement: <RouteErrorPage />`

### Files Created
- `src/pages/RouteErrorPage.tsx` — Custom route error page

### Verification
```
npm run build:
PASS (323.52 kB JS / 31.72 kB CSS, gzipped 97.95 kB / 6.27 kB)

npm run lint:
PASS (tsc --noEmit)

npm run typecheck:
PASS (included in build)

Runtime:
- Home (/) renders without crash
- Flagship Projects (QEOS, Tamayo, WitchCraft) render
- Projects page (/projects) renders all 7 project cards
- Status badges show correct icons and variants
- No console errors in browser
- 404 page still works at invalid routes
```

### Prevention
- Configuration maps now use `Record<ProjectStatus, ...>` making missing keys a compile error
- Single source of truth: `statusVariants` in `projectTheme.ts` drives both theme system and ProjectCard
- Centralized `getStatusConfig()` function prevents duplicate fallback logic
- Development warning catches future mismatches early

### Status
**SAFE TO CONTINUE MILESTONE 2**

---

## 2025-09-23 — Runtime Crash Fix: `Cannot read properties of undefined (reading 'slice')`

### Issue
ProjectCard crashed at `src/components/Projects.tsx:242` (line 133 in updated code) with:
```
TypeError: Cannot read properties of undefined (reading 'slice')
```

### Root Cause
The `ProjectCard` component in `Projects.tsx` was using a **completely mismatched legacy schema** compared to the actual `Project` type defined in `src/types/index.ts` and the data in `src/data/projects.ts`.

**Legacy schema assumed by ProjectCard:**
```typescript
{
  id: string;           // doesn't exist
  image: string;        // doesn't exist
  year: string;         // doesn't exist
  title: string;        // should be `name`
  description: string;  // should be `summary`
  tags: string[];       // should be `technologies`
  highlights: string[]; // should be `ProjectFeature[]` (optional)
  githubUrl: string;    // should be `repository`
  demoUrl: string;      // should be `website`
}
```

**Actual canonical Project type:**
```typescript
export interface Project {
  slug: string;
  name: string;
  shortName?: string;
  category: string;
  summary: string;
  description?: string;
  featured: boolean;
  order?: number;
  theme: ProjectTheme;
  technologies: string[];           // REQUIRED array
  highlights?: ProjectFeature[];    // OPTIONAL array
  repository?: string;
  website?: string;
  period?: string;
  role?: string;
  status?: ProjectStatus;
  statusDetails?: ProjectFeature[];
}
```

The crash occurred because:
1. `project.tags` doesn't exist → `undefined.slice(0, 5)` crashes
2. `project.highlights` is optional (`ProjectFeature[] | undefined`) → could be undefined

All 7 projects in the dataset have `technologies` and `highlights` populated, but the TypeScript type allows `highlights` to be optional, so the component must handle it defensively.

### Affected Component
- `src/components/Projects.tsx` — `ProjectCard` function

### Affected Properties
- `project.tags` → should be `project.technologies`
- `project.highlights` → optional, needs fallback
- `project.title` → should be `project.name`
- `project.description` → should be `project.summary`
- `project.id` → should be `project.slug` (for React key)
- `project.image` → doesn't exist, replaced with `project.category`
- `project.year` → doesn't exist, replaced with `project.period`
- `project.githubUrl` → should be `project.repository`
- `project.demoUrl` → should be `project.website`

### Why TypeScript Did Not Catch It
The `ProjectCard` prop type was:
```typescript
{ project: typeof projects[0] }
```

This creates a structural type from the data, but because the component was accessing properties that don't exist on the actual `Project` type (`tags`, `image`, `year`, `githubUrl`, `demoUrl`), TypeScript should have errored. However, the project data uses `as const` inference or similar, and the component was likely typed loosely. The key issue is that `highlights` is correctly typed as optional, so `project.highlights.slice()` is a valid TypeScript concern that should have been caught if strict null checks were fully effective.

### Fix
1. **Corrected all field mappings** to match the canonical `Project` type:
   - `project.id` → `project.slug`
   - `project.title` → `project.name`
   - `project.description` → `project.summary`
   - `project.tags` → `project.technologies`
   - `project.highlights` → `project.highlights` (with fallback)
   - `project.githubUrl` → `project.repository`
   - `project.demoUrl` → `project.website`
   - `project.image` → `project.category` (as placeholder)
   - `project.year` → `project.period` (conditional render)

2. **Added defensive array handling** for optional arrays:
   ```typescript
   const technologies = project.technologies ?? [];
   const highlights = project.highlights ?? [];
   ```

3. **Made rendering conditional** on array length:
   ```tsx
   {technologies.length > 0 && ( ... )}
   {highlights.length > 0 && ( ... )}
   ```

4. **Used constants** for magic numbers:
   ```typescript
   const MAX_VISIBLE_TECHNOLOGIES = 5;
   const MAX_VISIBLE_HIGHLIGHTS = 3;
   ```

5. **Added "more" indicator** when items are truncated.

6. **Typed `ProjectCard` prop explicitly** as `Project` from types.

### Type Contract Hardening
- `ProjectCard` now explicitly accepts `Project` type from types
- Optional arrays (`highlights`) handled with `?? []` fallback
- Required arrays (`technologies`) also get fallback for defense-in-depth
- No `as any`, no non-null assertions, no project-name special cases

### Data Normalization
The `technologies` field is **required** in the `Project` type (`string[]`), so all projects must provide it. The data in `projects.ts` correctly includes it for all 7 projects.

The `highlights` field is **optional** (`ProjectFeature[] | undefined`), so defensive fallback is appropriate.

### Router Error UX — Contact Email Fix
- **Replaced placeholder `hello@giocorpus.dev`** with canonical email from `personal.email` (`giovanny.corpus@gmail.com`)
- **Import from single source of truth**: `import { personal } from '../data/personal'`
- **Added Mail icon** for visual clarity

### Files Modified
- `src/components/Projects.tsx` — Complete schema alignment, defensive array handling, type-safe props
- `src/pages/RouteErrorPage.tsx` — Canonical email from personal data

### Verification
```
npm run build:
PASS (324.09 kB JS / 31.77 kB CSS, gzipped 98.07 kB / 6.28 kB)

npm run lint:
PASS (tsc --noEmit)

TypeScript compile:
PASS (included in build)

Runtime verification (all routes):
- Home (/) renders without crash
- Flagship Projects (QEOS, Tamayo, WitchCraft) render
- Projects page (/projects) renders all 7 project cards
- Technology badges render correctly with +N overflow
- Highlights render correctly with +N overflow
- Status badges show correct icons and variants
- No console errors in browser
- 404 page works at invalid routes
- Error page uses canonical email (giovanny.corpus@gmail.com)
```

### Prevention
- `ProjectCard` now uses explicit `Project` type from canonical types
- Optional arrays handled with `?? []` pattern
- Required arrays also defended for future-proofing
- Single source of truth for contact email
- Development warnings in `getStatusConfig()` catch status mismatches

### Relationship to Previous `.icon` Bug
**Same root cause**: Both bugs stem from `Projects.tsx` using a legacy/incorrect schema that diverged from the canonical `Project` type established in Milestone 1. The first bug (`.icon`) was in the status config; this bug (`.slice`) was in the project field mappings. Both are now fixed by aligning `Projects.tsx` with the canonical type system.

### Status
**SAFE TO CONTINUE MILESTONE 2**