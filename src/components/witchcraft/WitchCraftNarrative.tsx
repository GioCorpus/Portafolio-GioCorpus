import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftNarrative() {
  return (
    <section id="narrative" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="narrative-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="narrative-heading" className="mb-4 text-3xl font-bold text-white">Branching Narrative Architecture</h2>
        <p className="text-neutral-400 max-w-3xl">Dialogue trees with Ink, moral choices affecting human/nahual affinity, multiple endings. Documented as GameMechanic "branching-narrative"; no implementation.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Specification (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">GameMechanic "branching-narrative" in seed_data.py describes:</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Dialogue trees with Ink:</strong> Inkle's Ink scripting for dialogue logic.</li>
            <li><strong>Moral choices:</strong> Decisions shift Human/Nahual affinity meter.</li>
            <li><strong>Multiple endings:</strong> Ending determined by affinity, bonds, major choices.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Narrative Graph (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`CH1: AWAKENING → Choice A: Embrace beast (+Nahual) | Choice B: Resist (+Human)
CH2: DIVERGENCE → High Nahual: Beast faction | High Human: Human faction
CH3: CONVERGENCE → Nahual Ending | Human Ending | Balance Ending (requires bonds+affinity)`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">State Management (Design)</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li><strong>Global flags:</strong> Major choice outcomes as persistent booleans/enums.</li>
            <li><strong>Affinity meter:</strong> Continuous -100 to +100 (Human ↔ Nahual).</li>
            <li><strong>Bond matrix:</strong> N×N relationship scores for party members.</li>
            <li><strong>Scene unlocks:</strong> Boolean flags gated by affinity/bond thresholds.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Dialogue graph (Ink)</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Choice node system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Affinity meter</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Bond matrix</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Flag persistence</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Ending evaluator</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Scene unlock logic</span><StatusBadge status="concept" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Source: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> lines 76-80</li>
            <li>Model: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> GameMechanic</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftNarrative;