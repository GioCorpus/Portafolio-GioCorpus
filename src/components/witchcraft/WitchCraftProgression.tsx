import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftProgression() {
  return (
    <section id="progression" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="progression-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="progression-heading" className="mb-4 text-3xl font-bold text-white">Progression System</h2>
        <p className="text-neutral-400 max-w-3xl">Class evolution similar to Fire Emblem, skill inheritance between classes, experience curves. Documented as GameMechanic "progression-system"; no implementation.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Design Specification (Concept)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">GameMechanic "progression-system" in seed_data.py describes:</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Class evolution trees:</strong> Base class → advanced classes; branching paths.</li>
            <li><strong>Skill inheritance:</strong> Learned skills carry over or unlock in new class.</li>
            <li><strong>Experience curves:</strong> XP tables per class; shared or separate pools.</li>
            <li><strong>Unlock gates:</strong> Level, stats, narrative flags, bond thresholds.</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Class Architecture (Design)</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`BASE CLASSES (Tier 1)
├─ Shaman       →  Spirit Walker / Oracle / Totemic
├─ Warrior      →  Jaguar Knight / Eagle Warrior / Guardian
├─ Hunter       →  Stalker / Beastmaster / Shadow
└─ Scholar      →  Sage / Alchemist / Chronicler

ADVANCED (Tier 2) require:
  - Base class level threshold
  - Specific stat minimums
  - Narrative/bond milestones
  - Nahual affinity alignment

MASTER (Tier 3) - unique hybrid paths`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Skill Inheritance (Design)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">Skills marked as "inheritable" transfer to new class at reduced potency or as passive.</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>Active skills → become passives or weaker actives</li>
            <li>Passive skills → transfer at full effect</li>
            <li>Ultimate skills → locked to master class</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Implementation Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Class data definitions</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Evolution tree logic</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">XP/level system</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Skill inheritance engine</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Unlock condition evaluator</span><StatusBadge status="concept" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Nahual form gating</span><StatusBadge status="roadmap" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Source: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code> lines 66-70 (GameMechanic "progression-system")</li>
            <li>Model: <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> GameMechanic</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftProgression;