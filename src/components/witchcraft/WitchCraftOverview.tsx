import { cn } from '../../lib/utils';

export function WitchCraftOverview() {
  return (
    <section
      id="overview"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="overview-heading" className="mb-4 text-3xl font-bold text-white">
            Executive Technical Overview
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Understand what WitchCraft is, what engineering disciplines are involved, and what is
            currently implemented versus designed — without requiring game-design specialist knowledge.
          </p>
        </header>

        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">What Is WitchCraft?</h3>
            <p className="text-neutral-300 leading-relaxed">
              WitchCraft: Shamans & Nahuals is a tactical role-playing game project exploring the intersection
              of strategic grid-based combat, character metamorphosis mechanics, and branching narrative
              systems. The project draws thematic inspiration from Mesoamerican cultural and mythological
              sources — specifically the concept of <em>nahuales</em> (spirit companions/shapeshifters) —
              while building original fictional systems for interactive entertainment.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              The project is organized as <strong>two distinct engineering efforts</strong>:
            </p>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed mt-4">
              <li>
                <strong>Game Runtime (Roadmap):</strong> Targeting Unity 6 for tactical combat, nahual
                transformation, progression, and narrative systems. No Unity project currently exists.
              </li>
              <li>
                <strong>Project Platform (Implemented):</strong> A full-stack documentation and publisher
                platform built with React 19, FastAPI, and MongoDB (Motor). Provides technical specifications,
                game mechanics catalog, development dashboard, publisher pitch deck, and concept art gallery.
              </li>
            </ul>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Engineering Disciplines Demonstrated</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
              <li><strong>Game Systems Design:</strong> Tactical combat, grid/turn architecture, ability pipelines, transformation state machines, progression curves, affinity/bond systems, narrative graphs</li>
              <li><strong>Software Architecture:</strong> Clean separation between game runtime (Unity) and project platform (React/FastAPI/MongoDB); no false runtime integration claims</li>
              <li><strong>Full-Stack Development:</strong> React 19 + TypeScript (via CRA), FastAPI + Pydantic v2, Motor (async MongoDB), REST API design, CORS, seeding scripts</li>
              <li><strong>Data Modeling:</strong> Pydantic schemas for technical specs, game mechanics, roadmap, team, progress metrics, publisher data, concept art</li>
              <li><strong>Documentation Engineering:</strong> Structured technical documentation consumed by a React frontend from a FastAPI backend</li>
              <li><strong>Project Tooling:</strong> Development dashboard with roadmap tracking, team management, progress metrics, publisher-facing presentation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WitchCraftOverview;