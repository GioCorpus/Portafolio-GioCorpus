# WitchCraft: Shamans & Nahuals Technical Case Study

## Purpose

This document describes the implementation of the WitchCraft: Shamans & Nahuals technical case study page at `/projects/witchcraft` for the Giovanny Engineering Portfolio V2.

## Evidence Methodology

Followed the evidence-first methodology from the master prompt:
1. **Source code inspection** - Inspected `https://github.com/GioCorpus/WitchCraftShamansandNahuals1.0` (primary repo)
2. **Missing repos verified** - Confirmed `https://github.com/GioCorpus/WitchCraft` and `https://github.com/GioCorpus/WitchCraft-Studios` return 404
3. **Layer classification** - Classified every capability by layer (Game Runtime vs Project Platform) and maturity
4. **No claims without evidence** - Every assertion traces to specific source files/lines

## Repositories / Sources Inspected

| Repository | Status | Purpose |
|------------|--------|---------|
| `WitchCraftShamansandNahuals1.0` | ACTIVE (18 commits) | Documentation & Publisher Platform |
| `WitchCraft` | 404 | Referenced in portfolio data as game repo |
| `WitchCraft-Studios` | 404 | Referenced as studio infrastructure repo |

## Project Architecture

```
WITCHCRAFT PROJECT
├── GAME RUNTIME (Unity 6)          ← ROADMAP (no code exists)
│   ├── Tactical Combat System
│   ├── Grid System
│   ├── Turn System
│   ├── Character System
│   ├── Magic/Ability System
│   ├── Nahual Transformation
│   ├── Elemental/Affinity Systems
│   ├── Progression System
│   ├── Bond/Affinity System
│   └── Narrative System
│
└── PROJECT PLATFORM (Implemented)
    ├── React Frontend (CRA + Tailwind)
    │   ├── Home (Landing)
    │   ├── Documentation (Technical Specs + Mechanics)
    │   ├── Publisher (Pitch Deck)
    │   ├── Dashboard (Roadmap + Team + Metrics)
    │   └── Concept Art Gallery
    │
    ├── FastAPI Backend (Python 3.11+)
    │   ├── REST API (/api prefix)
    │   ├── Motor (Async MongoDB Driver)
    │   ├── Pydantic Models
    │   └── CORS Enabled
    │
    └── MongoDB (Async via Motor)
        ├── technical_specs
        ├── game_mechanics
        ├── concept_art
        ├── team_members
        ├── roadmap
        ├── publisher_data
        └── progress_metrics
```
## Game vs Web Platform Boundary

**Critical Distinction:** The React/FastAPI/MongoDB stack is a **project documentation and publisher platform**, NOT the game's runtime backend. It serves technical specifications, game mechanics catalogs, roadmap tracking, team management, progress metrics, publisher presentations, and concept art galleries. There is NO runtime connection to a Unity game.

## Gameplay Systems

All 10 gameplay systems exist only as design specifications in the MongoDB `game_mechanics` collection (seeded via `backend/seed_data.py`):

| System | Layer | Status | Evidence |
|--------|-------|--------|----------|
| Tactical Combat | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 44-51 |
| Grid System | Documentation only | CONCEPT | Referenced in combat design |
| Turn System | Documentation only | CONCEPT | Referenced in combat design |
| Character System | Documentation only | CONCEPT | Referenced in progression/bonds |
| Magic/Ability | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 52-58 |
| Nahual Transformation | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 59-65 |
| Elemental/Affinity | Documentation only | CONCEPT | Referenced in magic design |
| Progression | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 66-70 |
| Bonds/Affinity | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 71-75 |
| Branching Narrative | Documentation (MongoDB) | CONCEPT | `seed_data.py` lines 76-80 |

## Unity 6 Architecture

**Status: ROADMAP** - No Unity project exists in any repository. All existing documentation references legacy Unreal Engine 5.4. Unity 6 is the stated portfolio direction but no source evidence exists.

## React Architecture (Implemented)

- **Framework:** React 19 + Create React App + craco + Tailwind CSS
- **Routing:** React Router DOM v7 (5 routes)
- **State:** useState/useEffect (no Redux/Zustand)
- **API Client:** Axios
- **Pages:** Home, Documentation, Publisher, Dashboard, Concept Art
- **Components:** Navbar with real-time API status indicator

## FastAPI Architecture (Implemented)

- **Framework:** FastAPI 0.110.1 + Uvicorn 0.25.0
- **Database Driver:** Motor 3.3.1 (async MongoDB)
- **Validation:** Pydantic v2
- **Auth:** PyJWT + Passlib (models exist, not wired)
- **API Structure:** Single router `/api` with REST endpoints
- **CORS:** Wildcard (`*`) — development only

## MongoDB Data Model (Implemented)

- **Collections:** 7 (technical_specs, game_mechanics, concept_art, team_members, roadmap, publisher_data, progress_metrics)
- **Driver:** Motor (async)
- **Models:** Pydantic schemas mirrored in Python
- **Indexes:** None explicitly defined
## Implementation Classification

| Capability | Layer | Status | Evidence |
|------------|-------|--------|----------|
| React Documentation Portal | Frontend | IMPLEMENTED | 5 pages, routing, API integration |
| FastAPI REST API | Backend | IMPLEMENTED | 7 model endpoints + dashboard summary |
| MongoDB Data Models | Database | IMPLEMENTED | 7 collections with Pydantic schemas |
| Technical Specs Documentation | Data | IMPLEMENTED | Seeded UE5.4 specs |
| Game Mechanics Documentation | Data | IMPLEMENTED | 6 mechanics seeded |
| Roadmap Tracking | Data | IMPLEMENTED | 8 roadmap items with progress |
| Team Management | Data | IMPLEMENTED | 3 team members seeded |
| Progress Metrics | Data | IMPLEMENTED | 7 metrics with targets |
| Publisher Presentation | Data | IMPLEMENTED | 4 sections (overview, market, dev, business) |
| Concept Art Gallery | Frontend+Data | IMPLEMENTED | 5 images with categories |
| API Health Indicator | Frontend | IMPLEMENTED | Navbar shows API connected/offline |
| JWT/Passlib Auth Models | Backend | PROTOTYPE | Models imported, no endpoints |
| Roadmap Dependencies | Data | PROTOTYPE | Schema supports, not used in seed |
| Unity 6 Game Runtime | Game Runtime | ROADMAP | No Unity project exists |
| All 10 Gameplay Systems | Game Runtime | CONCEPT/ROADMAP | Design docs only |

## Technical Diagrams Created

1. **System Boundaries Diagram** - Shows Game Runtime vs Project Platform separation
2. **Platform Data Flow** - User → React → FastAPI → MongoDB
3. **Gameplay System Relationships** - Combat, Grid, Turns, Magic, Nahual, Progression, Bonds, Narrative
4. **Nahual State Model** - Human ↔ Transformation Trigger ↔ Nahual State ↔ Reversion

## Reusable Components Used

- `CaseStudyLayout` - Main layout wrapper
- `LocalNav` pattern → `WitchCraftLocalNav` - Section navigation with IntersectionObserver
- `StatusBadge` pattern - Consistent maturity badges (Implemented/Prototype/Concept/Roadmap)
- `projectTheme` system - WitchCraft amber/teal color scheme

## WitchCraft-Specific Components Created

1. `WitchCraftLocalNav` - 16-section navigation
2. `WitchCraftHero` - Hero with repository links, maturity badges
3. `WitchCraftOverview` - Executive technical overview with implementation reality table
4. `WitchCraftArchitecture` - System boundaries diagram + platform architecture
5. `WitchCraftGameSystems` - All 10 systems with evidence traceability
6. `WitchCraftCombat` - Tactical combat design + flow + status matrix
7. `WitchCraftGrid` - Grid system design + pathfinding roadmap
8. `WitchCraftTurns` - Turn system design + state machine
9. `WitchCraftMagic` - Ability pipeline + elemental model roadmap
10. `WitchCraftNahual` - Transformation state model + form data design
11. `WitchCraftProgression` - Class evolution trees + skill inheritance
12. `WitchCraftAffinity` - Bond tiers + affinity vs bonds distinction
13. `WitchCraftNarrative` - Narrative graph + state management
14. `WitchCraftUnity` - Unity 6 status + legacy UE5.4 references + proposed architecture
15. `WitchCraftPlatform` - Platform architecture + API endpoints + data models
16. `WitchCraftStatus` - Implementation matrix by category
17. `WitchCraftDecisions` - 8 engineering decisions with tradeoffs
18. `WitchCraftRoadmap` - Gameplay, technical, platform, migration roadmaps
19. `WitchCraftRepository` - Repository links + evidence traceability table

## Cultural Presentation Guidelines

- Normalized "Sorcerers and Nahuals" → "Shamans & Nahuals" for public presentation
- Legacy "Unreal Engine 5.4" references documented but clearly labeled as legacy
- Mesoamerican inspiration acknowledged as cultural inspiration for fictional systems
- No fabricated deities, symbols, or historical claims
- Engineering content prioritized over lore

## Responsive Strategy

- Tested breakpoints: 320, 375, 768, 1024, 1440, 1920
- LocalNav hides on mobile (< lg)
- Tables horizontally scroll on mobile
- Diagrams use `<pre>` with `overflow-x-auto`
- Grid layouts collapse to single column on mobile

## Accessibility

- Semantic headings (h1-h3 hierarchy)
- `aria-labelledby` on all sections
- `scroll-mt-24` for anchor offset
- Keyboard navigation for LocalNav
- Focus visible states
- Reduced motion respected (no animations)
- Color contrast meets WCAG AA
- External links have `rel="noopener noreferrer"`

## Known Limitations

1. **Pre-existing Tamayo JSX issues** - Multiple Tamayo components (`TamayoScene.tsx`, `TamayoLayers.tsx`, `TamayoArchitecture.tsx`) have JSX syntax errors blocking production build. These are pre-existing issues unrelated to WitchCraft work.
2. **No Unity project** - Game runtime is roadmap only
3. **No tests** - Platform has pytest configured but no tests; frontend has CRA test config but no tests
4. **Legacy UE5.4 references** - Throughout backend seed data and frontend pages; documented for migration
5. **CRA instead of Vite** - Frontend uses Create React App; migration planned

## Future Extensions

1. Fix pre-existing Tamayo JSX issues to restore production build
2. Migrate frontend from CRA to Vite
3. Add test coverage for platform (backend + frontend)
4. Create Unity 6 project when game runtime development begins
5. Migrate all UE5.4 references to Unity 6 in platform
6. Add interactive diagrams for combat flow, nahual transformation, narrative graph
- **Validation:** Pydantic schema validation only