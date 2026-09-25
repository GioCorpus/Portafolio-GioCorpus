import { cn } from '../../lib/utils';

export function WitchCraftArchitecture() {
  return (
    <section
      id="architecture"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="architecture-heading" className="mb-4 text-3xl font-bold text-white">
            Project Architecture
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            High-level architecture showing the critical boundary between the game runtime (Unity 6, roadmap)
            and the project platform (React/FastAPI/MongoDB, implemented). No runtime integration exists.
          </p>
        </header>

        <div className="space-y-12 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">System Boundaries</h3>
            <p className="text-neutral-300 leading-relaxed mb-6">
              The WitchCraft project consists of two architecturally separate systems that do not communicate
              at runtime. This distinction is critical for technical credibility.
            </p>

            <div className="overflow-x-auto">
              <pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`┌─────────────────────────────────────────────────────────────────┐
│                     WITCHCRAFT PROJECT                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────┐   ┌─────────────────────────┐  │
│  │      GAME RUNTIME           │   │    PROJECT PLATFORM     │  │
│  │      (Unity 6)              │   │    (Implemented)        │  │
│  │                             │   │                         │  │
│  │  ┌─────────────────────┐    │   │  ┌──────────────────┐   │  │
│  │  │ Tactical Combat     │    │   │  │ React Frontend   │   │  │
│  │  │ Grid System         │    │   │  │ (CRA + Tailwind) │   │  │
│  │  │ Turn System         │    │   │  └────────┬─────────┘   │  │
│  │  │ Character System    │    │   │           │             │  │
│  │  │ Magic/Ability Sys   │    │   │           ▼             │  │
│  │  │ Nahual Transform    │    │   │  ┌──────────────────┐   │  │
│  │  │ Progression         │    │   │  │ FastAPI Backend  │   │  │
│  │  │ Affinity/Bonds      │    │   │  │ (Motor + Pydantic)│   │  │
│  │  │ Narrative System    │    │   │  └────────┬─────────┘   │  │
│  │  └─────────────────────┘    │   │           │             │  │
│  │                             │   │           ▼             │  │
│  │  Status: ROADMAP            │   │  ┌──────────────────┐   │  │
│  │  No Unity project exists    │   │  │ MongoDB          │   │  │
│  │  No C# code exists          │   │  │ (7 collections)  │   │  │
│  └─────────────────────────────┘   │  └──────────────────┘   │  │
│         NO RUNTIME LINK            Status: IMPLEMENTED        │  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
            </div>

            <p className="text-neutral-300 leading-relaxed mt-6">
              <strong>Key Architectural Decision:</strong> The React/FastAPI/MongoDB stack is a
              <em>project documentation and publisher platform</em>, not the game's runtime backend.
              It serves technical specifications, game mechanics catalogs, roadmap tracking, team management,
              progress metrics, publisher presentations, and concept art galleries. There is no WebSocket
              connection, no shared database, and no API contract between the Unity game (when built)
              and this platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WitchCraftArchitecture;