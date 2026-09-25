import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftTurns() {
  return (
    <section id="turns" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="turns-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="turns-heading" className="mb-4 text-3xl font-bold text-white">Turn System</h2>
        <p className="text-neutral-400 max-w-3xl">Initiative-based turn order with action point economy and phase management. Documented only in combat design; no implementation exists.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Scope (Concept)</h3>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Turn queue:</strong> Sorted by initiative (stat + RNG tiebreaker); recalculated each round.</li>
            <li><strong>Initiative calculation:</strong> Base initiative from SPD/DEX; modifiers from status effects, terrain.</li>
            <li><strong>Action points:</strong> AP pool per turn; movement, abilities, items consume AP.</li>
            <li><strong>Phases:</strong> Start → Movement → Action → End; hooks for status ticks, transformation checks.</li>
            <li><strong>Delay/Ready actions:</strong> Unit may delay to later initiative or ready conditional action.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">State Machine (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`ROUND START
  ↓
SORT INITIATIVE QUEUE
  ↓
FOR EACH UNIT IN QUEUE:
  TURN START → TICK STATUS EFFECTS
  ↓
  IF CAN_ACT:
    GRANT AP POOL
    ↓
    MOVEMENT PHASE (optional)
    ↓
    ACTION PHASE (until AP exhausted or PASS)
    ↓
  TURN END → CHECK TRANSFORMATION TRIGGERS
  ↓
ROUND END → CHECK VICTORY CONDITIONS`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Initiative calculation</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Turn queue management</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Action point system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Phase state machine</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Delay/Ready actions</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Round/turn boundary hooks</span><StatusBadge status="concept" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Referenced in <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> tactical-combat: "turn order initiative"</li>
            <li>No standalone turn system document or code</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftTurns;