import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftNahual() {
  return (
    <section id="nahual" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="nahual-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="nahual-heading" className="mb-4 text-3xl font-bold text-white">Nahual Transformation</h2>
        <p className="text-neutral-400 max-w-3xl">State-driven metamorphosis with modified stats, ability sets, and elemental affinities. Documented as GameMechanic "nahual-transformation"; no implementation.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Specification (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">GameMechanic "nahual-transformation" in seed_data.py describes:</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Dynamic stats modification:</strong> Base stats replaced or modified by nahual form multipliers.</li>
            <li><strong>New ability sets:</strong> Each form grants unique abilities; human abilities locked/suppressed.</li>
            <li><strong>Elemental affinity changes:</strong> Form shifts elemental resistances/weaknesses.</li>
            <li><strong>Visual transformation system:</strong> Model/sprite swap with VFX; revert on conditions.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">State Model (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`HUMAN STATE
    │
    ├─ Base stats, human abilities
    ├─ Human elemental affinities
    │
    ▼ TRANSFORMATION TRIGGER
    (Resource threshold, HP %, ability, narrative event)
    │
    ▼
NAHUAL STATE
    │
    ├─ Modified stats (multipliers per form)
    ├─ Nahual ability set (replaces human)
    ├─ Shifted elemental affinities
    ├─ Visual form + VFX
    │
    ▼ REVERSION TRIGGER
    (Duration, resource depletion, manual, narrative)
    │
    ▼
HUMAN STATE (restored)`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Form Data (Roadmap)</h3>
          <p className="text-neutral-300 leading-relaxed">Forms likely defined as ScriptableObjects or JSON with:</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Form ID, name, description, lore</li>
            <li>Stat multipliers (STR, DEX, INT, SPD, etc.)</li>
            <li>Granted ability IDs (replaces human set)</li>
            <li>Elemental affinity overrides</li>
            <li>Visual prefab, VFX, SFX references</li>
            <li>Transformation cost, duration, cooldown</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">State machine (Human↔Nahual)</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Stat modification system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Ability set swapping</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Elemental affinity shifting</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Visual transformation VFX</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Trigger/condition system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Form data definitions</span><StatusBadge status="roadmap" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Source: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> lines 59-65 (GameMechanic "nahual-transformation")</li>
            <li>Model: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> GameMechanic</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftNahual;