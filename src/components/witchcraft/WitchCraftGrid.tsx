import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftGrid() {
  return (
    <section id="grid" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="grid-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="grid-heading" className="mb-4 text-3xl font-bold text-white">Grid System</h2>
        <p className="text-neutral-400 max-w-3xl">Coordinate model for tactical positioning, movement range, and pathfinding. Referenced in combat design only; no implementation exists.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Scope (Concept)</h3>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Coordinate representation:</strong> Integer (x,y) or axial (q,r) for hex; not yet decided.</li>
            <li><strong>Cell state/occupancy:</strong> Empty, unit, obstacle, hazard, interactive object.</li>
            <li><strong>Movement cost:</strong> Base cost + terrain modifier; diagonal rules TBD.</li>
            <li><strong>Terrain types:</strong> Normal, difficult, blocking, elemental (fire, water, etc.).</li>
            <li><strong>World-to-grid mapping:</strong> Snap-to-grid for unit placement; origin offset for camera.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Pathfinding (Roadmap)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">No pathfinding algorithm selected or implemented. Candidates:</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>A* with Manhattan/hex heuristic</li>
            <li>Dijkstra for uniform cost</li>
            <li>Flow fields for multi-unit movement</li>
          </ul>
          <p className="text-neutral-400 text-sm mt-4"><em>Claiming a specific algorithm without code would be misleading.</em></p></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Movement Range (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed">Movement range derived from unit stats (Move stat) modified by terrain cost. Action point economy may allow split movement.</p></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Coordinate system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Occupancy grid</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Terrain cost lookup</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Pathfinding (A*/Dijkstra)</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Movement range visualization</span><StatusBadge status="concept" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Referenced in <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> tactical-combat implementation_details</li>
            <li>No standalone grid system document or code</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftGrid;