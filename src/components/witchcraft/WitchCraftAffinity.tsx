import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftAffinity() {
  return (
    <section id="affinity" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="affinity-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="affinity-heading" className="mb-4 text-3xl font-bold text-white">Affinity / Bond Systems</h2>
        <p className="text-neutral-400 max-w-3xl">Affinity between characters unlocks special combo abilities and unique narrative scenes. Documented as GameMechanic "bond-system"; no implementation.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Specification (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">GameMechanic "bond-system" in seed_data.py describes:</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Relationship values:</strong> Numerical bond score per character pair (-100 to +100 or 0-100).</li>
            <li><strong>Bond modification actions:</strong> Dialogue choices, combat support, gift giving, shared events.</li>
            <li><strong>Combat synergy unlocks:</strong> Duo/trio abilities at bond thresholds; damage/buff bonuses.</li>
            <li><strong>Narrative scene gates:</strong> Character-specific scenes unlock at bond tiers.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Bond Tiers (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`TIER 0: Strangers (0-19)      → No bonuses
TIER 1: Acquaintances (20-39)  → Minor combat assist chance
TIER 2: Friends (40-59)        → Unlock duo ability slot
TIER 3: Close Bonds (60-79)    → Sync ability unlock; narrative scene
TIER 4: Soulbound (80-100)     → Ultimate combo; exclusive ending flag`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Affinity vs Bonds Distinction</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Two related but distinct concepts:</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li><strong>Elemental Affinity:</strong> Unit's elemental alignment (Fire, Water, etc.); affects damage taken/dealt.</li>
            <li><strong>Character Bond:</strong> Interpersonal relationship score; affects combat synergy and narrative.</li>
            <li><strong>Human/Nahual Affinity:</strong> Internal meter tracking humanity vs bestial nature; affects transformation access and endings.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Bond value storage</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Bond modification actions</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Combat synergy system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Narrative scene gates</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Human/Nahual affinity meter</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Elemental affinity (unit)</span><StatusBadge status="roadmap" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Source: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> lines 71-75 (GameMechanic "bond-system")</li>
            <li>Model: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> GameMechanic</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftAffinity;