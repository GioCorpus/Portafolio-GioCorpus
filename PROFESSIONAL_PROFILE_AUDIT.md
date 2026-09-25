# Professional Profile Audit

## Audit Date
2025-01-XX

## Canonical Identity (from src/data/personal.ts)
- **Name**: Giovanny Anthony Corpus Bernal
- **Title**: Software Engineer · Systems Engineer · Engine Developer
- **Location**: Mexicali, Baja California, Mexico
- **Email**: giovanny.corpus@gmail.com
- **Bio**: Building systems software, developer tools, experimental computing platforms and interactive worlds.
- **GitHub**: https://github.com/GioCorpus
- **LinkedIn**: https://www.linkedin.com/in/giovanny-anthony-corpus-bernal-751524311/

## Canonical Contact Links (from src/data/social.ts)
- GitHub: https://github.com/GioCorpus ✅ VERIFIED
- LinkedIn: https://www.linkedin.com/in/giovanny-anthony-corpus-bernal-751524311/ ✅ VERIFIED
- Email: mailto:giovanny.corpus@gmail.com ✅ VERIFIED

## Experience Data (from src/data/experience.ts)

### Current Entries:
1. **QuantumEnergyOS**
   - Role: Founder & Principal Architect
   - Period: 2024–Present
   - Type: research
   - Highlights: Systems architecture, Rust, kernel development, memory systems, hardware abstraction, services, telemetry, research platform

2. **Geese-PC**
   - Role: Founder & Lead Systems Technician
   - Period: 2003–Present
   - Type: work
   - Highlights: Computer systems, diagnostics, hardware, repair, data recovery, technical support, systems troubleshooting

3. **Sony X Audio Latino**
   - Role: Audio & Multimedia Technician
   - Period: 2012–2015
   - Type: work
   - Highlights: Audio, multimedia, technical setup, production support

4. **Universidad Politécnica de Baja California**
   - Role: Bachelor's Degree — Information Technologies and Digital Innovation
   - Period: 2025–Present
   - Type: education
   - Highlights: Software engineering, distributed systems, quantum computing, graphics programming, modern system architectures

### Classification:
- **QuantumEnergyOS**: PROJECT-EVIDENCED (case study exists with architecture/evidence)
- **Geese-PC**: SELF-REPORTED (20+ years technical work, but hardware/technical not software engineering employment)
- **Sony X Audio Latino**: SELF-REPORTED (freelance technical work)
- **University Education**: VERIFIED (in-progress degree)

## Skills Data (from src/data/skills.ts)
Categories defined:
1. Programming Languages (Rust, C++, Python, TypeScript, JavaScript, C#, Shell)
2. Systems & Low-Level (Linux, Operating Systems, Kernel Architecture, Memory Management, IPC, Hardware Abstraction, Device Architecture, Concurrency)
3. Engine & Graphics (C++, CMake, Rendering, 2.5D Graphics, Animation Systems, Timeline Systems, Unity 6)
4. Backend & APIs (Python, FastAPI, Flask, REST APIs, Service Architecture, Authentication, MongoDB)
5. Frontend (React, TypeScript, Vite, Tailwind CSS)
6. Infrastructure & DevOps (Docker, GitHub Actions, QEMU, Azure, Linux tooling)
7. Databases (MongoDB, SQLite, PostgreSQL)
8. Developer Tools (Git, GitHub, VS Code, Cargo, CMake, npm, pnpm, Bun)
9. Research & Experimental Computing (Experimental Computing, Emerging Architectures)

## Tech Stack Data (from src/data/techStack.ts)
Detailed technology items with:
- Category
- Name
- Proficiency level (1-5)
- Years of experience
- Projects used in
- Evidence URLs

## New Canonical Data Files Created
- ✅ **education.ts** — Education data with institution, program, period, status, location, details
- ✅ **languages.ts** — Languages data with language, proficiency, context
- ✅ **philosophy.ts** — Engineering philosophy principles (8 principles)
- ✅ **focus.ts** — Current focus items (3 active projects)
- ✅ **career.ts** — Career direction (5 target roles, 3 work modes, 6 target domains)

## Current Pages Status (After M6 Implementation)

### AboutPage.tsx
- ✅ AboutHero — Professional profile, core competencies, education, languages, current focus
- ✅ AboutExperience — Professional experience, research & projects, education timeline
- ✅ AboutPhilosophy — 8 engineering philosophy principles (from canonical data)
- ✅ AboutIdentity — 8 engineering domains with flagship evidence mapping
- ✅ AboutEvidence — 3 flagship projects with achievements, technologies, evidence files
- ✅ AboutDirection — Target roles, work modes, target domains, availability
- ✅ Contact section — Canonical contact actions

### ResumePage.tsx
- ✅ Professional Summary (from personal.professionalProfile)
- ✅ Engineering Domains (8 domains)
- ✅ Professional Experience (filtered from experience.ts type='work')
- ✅ Research & Projects (filtered from experience.ts type='research')
- ✅ Education (filtered from experience.ts type='education')
- ✅ Technical Skills (grouped from techStack.ts by category)
- ✅ Languages (from personal.languages)
## Wording Audits

### 20+ Years Wording
**Found in codebase**: No direct "20+ years" claims found in source code
**Risk**: Geese-PC shows 2003-Present (20+ years) but is hardware/technical work
**Required**: Must NOT imply "20+ years professional software engineering experience"

### Title Audit
- "Founder & Principal Architect" - QuantumEnergyOS (project role) ✅
- "Founder & Lead Systems Technician" - Geese-PC (technical role) ✅
- "Audio & Multimedia Technician" - Sony X Audio Latino ✅
- Global title: "Software Engineer · Systems Engineer · Engine Developer" ✅

### Placeholder Audit
- No hello@example.com, hello@giocorpus.dev, example.com, John Doe, Your Name, Lorem ipsum found ✅

### LinkedIn URL Audit
- Canonical: https://www.linkedin.com/in/giovanny-anthony-corpus-bernal-751524311/ ✅
- No stale linkedin.com/in/giovanny-corpus-bernal found ✅

### CV/Resume Asset
- ❌ No PDF found in public/ or assets/
- ❌ No downloadable CV exists
- **Action**: Download button present but asset missing — user must add PDF to public/cv/

## Project Evidence Mapping

| Skill Domain | Flagship Project | Evidence |
|--------------|-----------------|----------|
| Systems Engineering | QuantumEnergyOS V.04 | Case study with architecture, kernel, memory, services |
| Engine Technology | Tamayo 2.5D Engine | Case study with renderer, animation, timeline systems |
| Interactive Systems | WitchCraft: Shamans & Nahuals | Case study with dual architecture (Unity 6 + React/FastAPI) |

## Current Build Status
- **TypeScript**: PASS (npx tsc --noEmit)
- **Lint**: PASS (no errors)
- **Build**: FAIL (pre-existing Tamayo JSX syntax errors in TamayoScene.tsx, TamayoLayers.tsx, TamayoArchitecture.tsx)
  - These are UNRELATED to M6 work
  - M4 was marked BLOCKED for this reason

## Privacy/Security
- No .env, tokens, API keys, passwords, database credentials, private URLs found ✅
- No full street address ✅
- No phone number ✅
- No government IDs ✅
- No age/birth date ✅

## Claims Classification

| Claim | Classification | Evidence |
|-------|---------------|----------|
| Software Engineer | VERIFIED | Personal data, project work |
| Systems Engineer | PROJECT-EVIDENCED | QuantumEnergyOS case study |
| Engine Developer | PROJECT-EVIDENCED | Tamayo case study |
| 20+ years hands-on computing | SELF-REPORTED | Geese-PC 2003-Present |
| 20+ years professional SWE | EXCLUDED | Not supported by evidence |
| Senior/Principal/Staff Engineer | EXCLUDED | No employment evidence |
| Rust proficiency | PROJECT-EVIDENCED | QuantumEnergyOS |
| C++ proficiency | PROJECT-EVIDENCED | Tamayo |
| Unity 6 | ROADMAP | WitchCraft platform (React/FastAPI implemented, Unity 6 is roadmap) |

## Known Limitations
1. No downloadable CV asset (user must add PDF to public/cv/)
2. Tamayo build blocker is pre-existing (M4)
3. Web3Forms API key placeholder in Contact form (needs real key)

## M6 Implementation Summary
✅ **COMPLETED**:
1. Created canonical data files: education.ts, languages.ts, philosophy.ts, focus.ts, career.ts
2. Updated personal.ts with canonical LinkedIn URL, education, languages in new format
3. Updated types/index.ts with new Education and Language interfaces
4. Updated social.ts with canonical LinkedIn URL
5. Implemented AboutIdentity component (8 engineering domains)
6. Implemented AboutEvidence component (3 flagship projects)
7. Implemented AboutDirection component (career direction)
8. Updated AboutHero to use new canonical data files
9. Updated AboutPhilosophy to use philosophy.ts
10. Updated AboutPage to include all new sections
11. Completely rewrote ResumePage with all required sections
12. Updated Contact component imports to use correct data
13. All TypeScript checks pass
14. All lint checks pass

📝 **DOCUMENTATION**:
- PROFESSIONAL_PROFILE_AUDIT.md updated
- PROFESSIONAL_PROFILE.md to be created
- IMPLEMENTATION_STATUS.md to be updated
- ✅ Print/Save as PDF button
- ✅ Download CV button (hidden until real asset exists)
- ✅ Career Timeline reference to About page

### ContactPage.tsx (Contact component)
- ✅ Canonical contact actions (Email, GitHub, LinkedIn)
- ✅ Contact form with Web3Forms integration
- ✅ Location and availability info
