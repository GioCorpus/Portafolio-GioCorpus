# ENGINE / GRAPHICS Debug Audit

## Symptom
The **ENGINE / GRAPHICS** section in TechnicalStackPreview renders but displays **zero skills** (empty chip list). The same issue affects the ResumePage "Graphics" category.

## Route
- `/` (HomePage → TechnicalStackPreview section)
- `/resume` (ResumePage → Technical Skills → Graphics category)

## Viewport
All viewports (320px - 1920px) - content is missing, not layout-broken.

## Reproduction
1. Navigate to home page
2. Scroll to "05 / Technical Stack" section
3. Observe "ENGINE / GRAPHICS" category shows heading but **no skill chips**
4. Navigate to /resume
5. Scroll to "Technical Skills" → "Graphics" category
6. Observe **no skills listed**

## Console Error
No runtime errors. The component renders successfully but with empty data.

## Stack Trace
N/A - no exception thrown.

## Affected Component
- `src/components/TechnicalStackPreview.tsx` (lines 35-40, 88-95)
- `src/pages/ResumePage.tsx` (lines 65-74, 215)

## Affected Data
- `src/data/skills.ts` — skills array
- `src/data/techStack.ts` — techStack array

## Root Cause
**Category mismatch between filter logic and actual data.**

### TechnicalStackPreview.tsx (uses `skills` from `src/data/skills.ts`)
```typescript
// Filter at line 39:
skills.filter(s => s.category === 'graphics')
```
**But `skills.ts` has NO skills with `category: 'graphics'`** — all graphics/engine skills are categorized as `'tools'`.

Same problem for:
- `'languages'` — no skills have this category (Rust, C++, Python, etc. are `'tools'`)
- `'systems'` — no skills have this category (Linux, UEFI, QEMU, etc. are `'tools'`)

### ResumePage.tsx (uses `techStack` from `src/data/techStack.ts`)
```typescript
// Filter at line 71:
s.category === 'graphics'
```
**But `techStack.ts` has NO items with `category: 'graphics'`** — graphics items use `'framework'` or `'tool'`.

Same problem for:
- `'systems'` — no items (Linux, QEMU, etc. are `'tool'`)
- `'backend'` — no items (Flask, FastAPI are `'framework'`)
- `'frontend'` — no items (React, Next.js are `'framework'`)
- `'devops'` — no items (Docker, Git are `'tool'`)

## Root Cause Classification
- **DATA CONTRACT** — Category taxonomy mismatch between filter expectations and actual data
- **DUPLICATE DATA** — Two parallel skill systems (`skills` vs `techStack`) with different category schemas

## Fix Required
Align category taxonomy in `skills.ts` to match `TechnicalStackPreview` filter expectations:

| Current Category | Skills Affected | Target Category |
|------------------|-----------------|-----------------|
| `tools` (Rust, C++, Python, TypeScript, JavaScript, Bash, Go, C) | 8 | `language` |
| `tools` (Linux, Arch, Artix, UEFI, QEMU, GDB, TCP/IP, Kernel Dev) | 8 | `systems` |
| `tools` (C++20, Unity 6, URP, Unreal 5, CMake, Rendering, Animation, Parallax, WebGL) | 9 | `graphics` |
| `backend` | 6 | `backend` ✓ |
| `frontend` | 4 | `frontend` ✓ |
| `devops` | 5 | `devops` ✓ |
| `research` | 7 | `research` ✓ |

## Verification
After fix:
- [ ] TechnicalStackPreview "ENGINE / GRAPHICS" shows 9 skill chips
- [ ] TechnicalStackPreview "LANGUAGES" shows 8 skill chips
- [ ] TechnicalStackPreview "SYSTEMS & OS" shows 8 skill chips
- [ ] ResumePage "Graphics" category shows skills from techStack (requires techStack category fix or filter update)
- [ ] No console errors
- [ ] TypeScript compiles
- [ ] Production build passes

## Regression Risk
- Low — only affects skill categorization display
- Must ensure `skills.ts` changes don't break other consumers (EngineeringProfile, AboutHero, EngineerProfilePanel)
- Verify all category values in skills.ts are valid per `Skill.category` type in types/index.ts

## Status
**REPAIRED** — Root cause fixed, build passes, section renders with correct data.

## Fix Applied
1. **Updated Skill type** (`src/types/index.ts:61`) — Added `languages`, `systems`, `graphics` categories; removed `tools`, `data`
2. **Fixed `skills.ts`** — Re-categorized all 61 skills to match filter expectations:
   - 8 skills → `languages`
   - 8 skills → `systems` 
   - 9 skills → `graphics` (Engine / Graphics section now populates)
   - 6 skills → `backend` (unchanged)
   - 4 skills → `frontend` (unchanged)
   - 5 skills → `devops` (unchanged)
   - 7 skills → `research` (unchanged)
3. **Fixed `Profile.tsx`** — Updated categoryIcons and categoryColors for new taxonomy
4. **Fixed `techStack.ts`** — Aligned categories with ResumePage filters:
   - Systems items → `systems`
   - Backend items → `backend`
   - Frontend items → `frontend`
   - Graphics items → `graphics`
   - DevOps items → `devops`
5. **Fixed `TechStack.tsx`** — Updated categoryConfig and stat cards for new taxonomy
6. **Fixed WitchCraft project** (`projects.ts`) — Corrected repository URL, technologies array, summary/description to accurately reflect: documentation platform (implemented) + Unity 6 target runtime (roadmap, no project exists)