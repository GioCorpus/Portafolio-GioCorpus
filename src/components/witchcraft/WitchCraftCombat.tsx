import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return (
    <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>
  );
}

export function WitchCraftCombat() {
  return (
    <section id="combat" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="combat-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="combat-heading" className="mb-4 text-3xl font-bold text-white">Tactical Combat</h2>
        <p className="text-neutral-400 max-w-3xl">Turn-based tactical combat with grid-based positioning. Currently exists only as a design specification in the project documentation platform.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Specification (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Documented in MongoDB <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs">game_mechanics</code> as GameMechanic ID <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs">tactical-combat</code>.</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Grid-based movement:</strong> Units move on a discrete grid; coordinates determine position, range, and line of sight.</li>
            <li><strong>Turn order initiative:</strong> Initiative system determines acting order; likely stat-based with tiebreakers.</li>
            <li><strong>Terrain effects:</strong> Tiles have properties affecting movement cost, defense, and elemental interactions.</li>
            <li><strong>Line of sight calculations:</strong> Obstruction checking for ranged abilities and targeting validation.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Combat Flow (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`TURN START → UNIT SELECTION → MOVEMENT PHASE → ACTION PHASE → ABILITY RESOLUTION → STATUS UPDATE → TURN END → NEXT UNIT`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Combat state machine</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Grid coordinate system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Initiative/turn queue</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Ability pipeline</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Damage/effect resolution</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Status effect system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Victory/defeat conditions</span><StatusBadge status="concept" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Source: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> lines 44-51</li>
            <li>Model: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> GameMechanic Pydantic model</li>
            <li>No Unity C# code exists for any combat system</li>
            <li>No tests exist for combat logic</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftCombat;