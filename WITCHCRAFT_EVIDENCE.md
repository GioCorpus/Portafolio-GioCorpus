# WitchCraft: Shamans & Nahuals Evidence Ledger

## Repository

**Primary Repository:** `https://github.com/GioCorpus/WitchCraftShamansandNahuals1.0`
- **Name:** WitchCraft: Shamans and Nahuals Webview v1.0
- **Language:** JavaScript (React frontend) / Python (FastAPI backend)
- **Purpose:** Documentation & Publisher Platform for WitchCraft project
- **Commits:** 18
- **Status:** Active development platform (not game runtime)

**Legacy Repository (404):** `https://github.com/GioCorpus/WitchCraft` — Not found
**Legacy Repository (404):** `https://github.com/GioCorpus/WitchCraft-Studios` — Not found

## Project Architecture

```
WITCHCRAFT PROJECT
├── GAME RUNTIME (Unity 6)          ← NOT IMPLEMENTED (Roadmap)
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
## Unity 6

| Aspect | Status | Evidence |
|--------|--------|----------|
| Unity Project | **ROADMAP** | No Unity project exists in any repository. Current portfolio data and documentation reference Unreal Engine 5.4. Unity 6 is stated as current direction in portfolio requirements but no source evidence exists. |
| Unity Version | **NOT VERIFIED** | No ProjectSettings/ProjectVersion.txt found. Documentation explicitly states "Unreal Engine 5.4" in TechnicalSpecs seed data. |
| C# Architecture | **NOT IMPLEMENTED** | No .cs files found in any repository. |
| Gameplay Systems | **ROADMAP** | All gameplay systems (combat, grid, turns, magic, nahual, progression, bonds, narrative) exist only as GameMechanic documents in MongoDB with status "in_development". |
| ScriptableObjects | **NOT IMPLEMENTED** | No Unity project exists. |
| Prefabs/Scenes | **NOT IMPLEMENTED** | No Unity project exists. |

## Gameplay Architecture

### Tactical Combat
- **Layer:** Documentation (MongoDB GameMechanic)
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** GameMechanic document "tactical-combat" in seed_data.py: "Grid-based movement, turn order initiative, terrain effects, line of sight calculations"
- **Implementation:** NONE — Only documented as design specification
- **Source:** `backend/seed_data.py` lines 44-51

### Grid System
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** Referenced in tactical combat implementation_details: "Grid-based movement"
- **Implementation:** NONE — No coordinate model, pathfinding, or movement range code exists
- **Source:** `backend/seed_data.py` line 47

### Turn System
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** Referenced in tactical combat: "turn order initiative"
- **Implementation:** NONE — No turn queue, initiative, or phase code exists
- **Source:** `backend/seed_data.py` line 47

### Character Architecture
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** Referenced in progression system and bond system mechanics
- **Implementation:** NONE — No character stats, classes, or equipment code exists
- **Source:** `backend/seed_data.py` lines 52-70

### Magic / Ability System
- **Layer:** Documentation only
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** GameMechanic "magic-system": "Elemental affinities, counter-magic mechanics, spell synchronization for combo effects"
- **Implementation:** NONE — Only documented
- **Source:** `backend/seed_data.py` lines 52-58

### Nahual Transformation
- **Layer:** Documentation only
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** GameMechanic "nahual-transformation": "Dynamic stats modification, new ability sets, elemental affinity changes, visual transformation system"
- **Implementation:** NONE — Only documented as design spec
- **Source:** `backend/seed_data.py` lines 59-65

### Elemental / Counter Systems
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** Referenced in magic system: "Elemental affinities, counter-magic mechanics"
- **Implementation:** NONE — No type matrix, resistance/weakness, or countermagic code exists
- **Source:** `backend/seed_data.py` line 55

### Progression
- **Layer:** Documentation only
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** GameMechanic "progression-system": "Class evolution similar to Fire Emblem, skill inheritance between classes, experience curves"
- **Implementation:** NONE — Only documented
- **Source:** `backend/seed_data.py` lines 66-70

### Bond / Affinity Systems
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** GameMechanic "bond-system": "Affinity between characters unlocks special combo abilities and unique narrative scenes"
- **Implementation:** NONE — Only documented
- **Source:** `backend/seed_data.py` lines 71-75

### Branching Narrative
- **Layer:** Documentation only
- **Status:** CONCEPT
- **Evidence:** GameMechanic "branching-narrative": "Dialogue trees with Ink integration, moral choices affecting human/nahual affinity, multiple endings"
- **Implementation:** NONE — No dialogue graph, choice nodes, or flag system code exists
- **Source:** `backend/seed_data.py` lines 76-80

## Unity 6 Architecture

**NOT APPLICABLE** — No Unity project exists. All "Unity" references in current portfolio data are legacy/aspirational.
## Data Architecture

### React Frontend (Project Platform)
- **Location:** `frontend/src/`
- **Framework:** React 19 + Create React App (CRA) + craco + Tailwind CSS
- **Routing:** React Router DOM v7
- **State Management:** useState/useEffect (no Redux/Zustand)
- **API Client:** Axios
- **Pages:** 5 (Home, Documentation, Publisher, Dashboard, Concept Art)
- **Components:** Navbar only
- **Build:** `craco build` (webpack via CRA)
- **Status:** IMPLEMENTED (functional documentation portal)

### FastAPI Backend (Project Platform)
- **Location:** `backend/server.py`
- **Framework:** FastAPI 0.110.1 + Uvicorn 0.25.0
- **Database Driver:** Motor 3.3.1 (async MongoDB)
- **Validation:** Pydantic v2
- **Auth:** PyJWT + Passlib (models exist, not wired to endpoints)
- **API Structure:** Single router `/api` with REST endpoints for all models
- **CORS:** Wildcard (`*`) — development only
- **Logging:** Basic stdlib logging
- **Status:** IMPLEMENTED (functional API for documentation platform)

### MongoDB (Project Platform)
- **Collections:** 7 (technical_specs, game_mechanics, concept_art, team_members, roadmap, publisher_data, progress_metrics)
- **Driver:** Motor (async)
- **Models:** Pydantic models mirrored in Python and seeded via seed_data.py
- **Indexes:** None explicitly defined
- **Validation:** Pydantic schema validation only
- **Status:** IMPLEMENTED (seeded with project documentation data)
## API / Data Flow

```
User (Browser)
    ↓
React Frontend (Port 3000)
    ↓ HTTP/REST
FastAPI Backend (Port 8000)
    ↓ Motor (async)
MongoDB
```

**Critical Boundary:** This data flow serves the **Project Documentation Platform ONLY**. There is NO runtime connection to a Unity game. The Unity game (if built) would be a completely separate runtime.

## Publisher / Documentation Platform

| Component | Status | Purpose |
|-----------|--------|---------|
| Home Page | IMPLEMENTED | Marketing landing page with feature highlights |
| Documentation Page | IMPLEMENTED | Technical specs + game mechanics from MongoDB |
| Publisher Page | IMPLEMENTED | Pitch deck for publishers (market, dev plan, monetization) |
| Dashboard Page | IMPLEMENTED | Project progress tracking (roadmap, team, metrics) |
| Concept Art Page | IMPLEMENTED | Gallery with category filtering |
| Navbar + API Status | IMPLEMENTED | Real-time API connection indicator |

## Concept Art

- **Storage:** MongoDB `concept_art` collection + external image URLs (Unsplash)
- **Categories:** character, environment, cultural_reference, magic_effects, ui
- **Seed Data:** 5 reference images loaded via `load_concept_art.py`
- **Status:** IMPLEMENTED (gallery display only)

## Documentation

- **Technical Specifications:** Single document in `technical_specs` collection (Unreal Engine 5.4 specs)
- **Game Mechanics:** 6 mechanic documents in `game_mechanics` collection (all "in_development")
- **Roadmap:** 8 items in `roadmap` collection (milestones with progress %)
- **Team:** 3 members in `team_members` collection
- **Progress Metrics:** 7 metrics in `progress_metrics` collection
- **Publisher Data:** 4 sections in `publisher_data` collection

## Testing

| Layer | Framework | Status | Evidence |
|-------|-----------|--------|----------|
| Backend | pytest | CONFIGURED | `requirements.txt` includes pytest, but no test files found in `tests/` (only `__init__.py`) |
| Frontend | react-scripts test | CONFIGURED | CRA default, no custom tests found |
| E2E | None | NOT CONFIGURED | No Cypress/Playwright |
| Unity | N/A | N/A | No Unity project |

## Build / CI

| Component | Build Command | Status |
|-----------|---------------|--------|
| Frontend | `craco build` | CONFIGURED (webpack via CRA) |
| Backend | `uvicorn server:app` | MANUAL (no Dockerfile, no CI) |
## Implemented (Evidence Verified)

| Capability | Layer | Evidence |
|------------|-------|----------|
| React Documentation Portal | Frontend | 5 pages, routing, API integration |
| FastAPI REST API | Backend | 7 model endpoints + dashboard summary |
| MongoDB Data Models | Database | 7 collections with Pydantic schemas |
| Technical Specs Documentation | Data | Seeded UE5.4 specs |
| Game Mechanics Documentation | Data | 6 mechanics seeded |
| Roadmap Tracking | Data | 8 roadmap items with progress |
| Team Management | Data | 3 team members seeded |
| Progress Metrics | Data | 7 metrics with targets |
| Publisher Presentation | Data | 4 sections (overview, market, dev, business) |
| Concept Art Gallery | Frontend+Data | 5 images with categories |
| API Health Indicator | Frontend | Navbar shows API connected/offline |

## Prototype

| Capability | Layer | Evidence |
|------------|-------|----------|
| JWT/Passlib Auth Models | Backend | Models imported but no auth endpoints implemented |
| Roadmap Dependencies | Data | Schema supports dependencies, not used in seed data |

## Experimental

| Capability | Layer | Evidence |
|------------|-------|----------|
| None identified | — | — |

## Research

| Capability | Layer | Evidence |
|------------|-------|----------|
| None identified | — | — |

## Concept (Design Documented Only)

| Capability | Layer | Evidence |
|------------|-------|----------|
| Tactical Combat System | Documentation | GameMechanic doc only |
| Grid System | Documentation | Referenced in combat mechanic |
| Turn System | Documentation | Referenced in combat mechanic |
| Character System | Documentation | Referenced in progression/bond mechanics |
| Magic/Ability System | Documentation | GameMechanic doc only |
| Nahual Transformation | Documentation | GameMechanic doc only |
| Elemental/Affinity Systems | Documentation | Referenced in magic mechanic |
| Progression System | Documentation | GameMechanic doc only |
| Bond/Affinity System | Documentation | GameMechanic doc only |
| Branching Narrative | Documentation | GameMechanic doc only |
| Database | Manual seed scripts | MANUAL (`python seed_data.py`, `python load_concept_art.py`) |
## Roadmap (Planned, Not Implemented)

| Capability | Layer | Evidence |
|------------|-------|----------|
| Unity 6 Game Runtime | Game Runtime | Stated as current direction in portfolio requirements; no code exists |
| Gameplay Systems Implementation | Game Runtime | All 10+ systems listed as roadmap in portfolio requirements |
| Unity ↔ Platform Integration | Integration | Not designed; would require separate architecture |

## Legacy Architecture

| Element | Current State | Notes |
|---------|---------------|-------|
| Project Name | "WitchCraft: Sorcerers and Nahuals" | Used in backend (server.py title, seed data). Portfolio normalizes to "WitchCraft: Shamans & Nahuals" |
| Game Engine | Unreal Engine 5.4 | Hardcoded in TechnicalSpecs seed data and frontend pages. Current portfolio direction: Unity 6 |
| Repository URL | `https://github.com/GioCorpus/WitchCraft` | Returns 404. Actual repo: `WitchCraftShamansandNahuals1.0` |
| Studio Repository | `https://github.com/GioCorpus/WitchCraft-Studios` | Returns 404 |

## Claims Not Yet Verified

| Claim | Status | Required Evidence |
|-------|--------|-------------------|
| "Unity 6 is the current engine" | UNVERIFIED | Unity project with ProjectVersion.txt showing 6.x |
| "Tactical combat is playable" | FALSE | Only documented; no Unity code |
| "Grid system works" | FALSE | Only referenced in design doc |
| "Nahual transformation implemented" | FALSE | Only documented; no state machine code |
| "React/FastAPI/MongoDB is game backend" | FALSE | Platform is documentation only; no Unity integration |
| "MongoDB stores game saves" | FALSE | MongoDB stores project documentation only |
| "FastAPI serves game runtime" | FALSE | FastAPI serves documentation portal only |

---

## Evidence Entry Format Examples

### Capability: Tactical Combat System
- **Layer:** Documentation (MongoDB `game_mechanics` collection)
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** `backend/seed_data.py` lines 44-51 — GameMechanic document with implementation_details describing grid-based movement, initiative, terrain, LOS
- **Source:** `backend/server.py` GameMechanic model, `backend/seed_data.py`
- **Tests:** NONE
- **Confidence:** HIGH (explicitly documented as design only)
- **Portfolio-safe wording:** "Tactical combat system designed with grid-based positioning, turn initiative, and terrain effects. Currently documented in project specification; Unity implementation is roadmap."

### Capability: Nahual Transformation
- **Layer:** Documentation (MongoDB `game_mechanics` collection)
- **Status:** CONCEPT (documented as "in_development" in seed data but no code)
- **Evidence:** `backend/seed_data.py` lines 59-65 — GameMechanic document describing dynamic stats modification, new ability sets, elemental affinity changes, visual transformation system
- **Source:** `backend/server.py` GameMechanic model, `backend/seed_data.py`
- **Tests:** NONE
- **Confidence:** HIGH
- **Portfolio-safe wording:** "Nahual transformation system designed as state-driven metamorphosis with modified stats, ability sets, and elemental affinities. Documented in project specification; Unity implementation is roadmap."

### Capability: Project Documentation Platform (React + FastAPI + MongoDB)
- **Layer:** Web Platform (Frontend + Backend + Database)
- **Status:** IMPLEMENTED
- **Evidence:** Full CRUD API for 7 models, 5-page React frontend consuming API, seeded MongoDB data
- **Source:** `backend/server.py`, `frontend/src/App.js`, `frontend/src/pages/*.js`, `backend/seed_data.py`
- **Tests:** NONE (pytest configured but no tests)
- **Confidence:** HIGH
- **Portfolio-safe wording:** "Full-stack documentation platform built with React 19, FastAPI, and MongoDB (Motor). Provides technical specifications, game mechanics catalog, publisher pitch deck, development dashboard, and concept art gallery. This is a project management tool, not the game's runtime backend."

### Capability: Unity 6 Game Runtime
- **Layer:** Game Runtime
- **Status:** ROADMAP
- **Evidence:** NO Unity project exists in any repository. Portfolio requirements state Unity 6 as current direction. All existing documentation references Unreal Engine 5.4.
- **Source:** Repository inspection (GitHub), `backend/seed_data.py` TechnicalSpecs, frontend pages
- **Tests:** N/A
- **Confidence:** HIGH (absence of evidence)
- **Portfolio-safe wording:** "Unity 6 is the stated target engine for WitchCraft game runtime. No Unity project currently exists in the repository; game runtime implementation is roadmap. Current documentation platform references legacy Unreal Engine 5.4 direction."