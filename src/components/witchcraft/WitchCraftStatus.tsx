import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

const nativeCapabilities = [
  { category: 'Game Runtime (Unity 6)', items: [
    { name: 'Unity 6 project', status: 'roadmap' as ProjectStatus },
    { name: 'Tactical combat system', status: 'concept' as ProjectStatus },
    { name: 'Grid system (coordinates, pathfinding)', status: 'concept' as ProjectStatus },
    { name: 'Turn system (initiative, AP, phases)', status: 'concept' as ProjectStatus },
    { name: 'Character system (stats, classes, equipment)', status: 'concept' as ProjectStatus },
    { name: 'Magic/ability pipeline', status: 'concept' as ProjectStatus },
    { name: 'Nahual transformation FSM', status: 'concept' as ProjectStatus },
    { name: 'Elemental affinity matrix', status: 'roadmap' as ProjectStatus },
    { name: 'Progression (class evolution, skills)', status: 'concept' as ProjectStatus },
    { name: 'Bond/affinity system', status: 'concept' as ProjectStatus },
    { name: 'Branching narrative (Ink)', status: 'roadmap' as ProjectStatus },
    { name: 'Save system (local JSON/binary)', status: 'roadmap' as ProjectStatus },
  ]},
  { category: 'Project Platform (React/FastAPI/MongoDB)', items: [
    { name: 'React 19 frontend (CRA + Tailwind)', status: 'implemented' as ProjectStatus },
    { name: '5 pages: Home, Docs, Publisher, Dashboard, Concept Art', status: 'implemented' as ProjectStatus },
    { name: 'React Router DOM v7 routing', status: 'implemented' as ProjectStatus },
    { name: 'Axios API client with error handling', status: 'implemented' as ProjectStatus },
    { name: 'Navbar with real-time API status', status: 'implemented' as ProjectStatus },
    { name: 'FastAPI 0.110.1 backend', status: 'implemented' as ProjectStatus },
    { name: 'Motor 3.3.1 async MongoDB driver', status: 'implemented' as ProjectStatus },
    { name: 'Pydantic v2 validation for all models', status: 'implemented' as ProjectStatus },
    { name: '7 MongoDB collections seeded', status: 'implemented' as ProjectStatus },
    { name: 'Dashboard summary aggregation', status: 'implemented' as ProjectStatus },
    { name: 'Publisher presentation data', status: 'implemented' as ProjectStatus },
    { name: 'Concept art gallery with filtering', status: 'implemented' as ProjectStatus },
  ]},
  { category: 'Documentation & Design', items: [
    { name: 'Technical specifications (legacy UE5.4)', status: 'implemented' as ProjectStatus },
    { name: '6 GameMechanic design documents', status: 'implemented' as ProjectStatus },
    { name: '8 Roadmap items with progress tracking', status: 'implemented' as ProjectStatus },
    { name: '3 Team members documented', status: 'implemented' as ProjectStatus },
    { name: '7 Progress metrics with targets', status: 'implemented' as ProjectStatus },
    { name: '5 Concept art images (Unsplash)', status: 'implemented' as ProjectStatus },
  ]},
];

export function WitchCraftStatus() {
  return (
    <section id="status" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="status-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="status-heading" className="mb-4 text-3xl font-bold text-white">Implementation Status</h2>
        <p className="text-neutral-400 max-w-3xl">Evidence-based status for every major capability. Populated strictly from source code inspection — no checkmarks without implementation.</p></header>
        <div className="space-y-12 max-w-4xl">
          {nativeCapabilities.map(({ category, items }) => (
            <div key={category} className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-amber-400 mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map(({ name, status }) => (
                  <div key={name} className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                    <span className="text-neutral-300">{name}</span>
                    <StatusBadge status={status} />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Status Legend</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
              <li><span className="font-medium">Implemented:</span> Code exists, compiles, and is tested</li>
              <li><span className="font-medium">Prototype:</span> Code exists but incomplete or untested</li>
              <li><span className="font-medium">Experimental:</span> Exploratory implementation, may change</li>
              <li><span className="font-medium">Research:</span> Theoretical investigation, no production code</li>
              <li><span className="font-medium">Concept:</span> Design documented only, no code</li>
              <li><span className="font-medium">Roadmap:</span> Planned/designed but not yet implemented</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftStatus;