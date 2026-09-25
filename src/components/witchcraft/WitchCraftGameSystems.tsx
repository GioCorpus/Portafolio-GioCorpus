import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
        variant.bgColor,
        variant.borderColor
      )}
      style={{ color: variant.color }}
    >
      {variant.label}
    </span>
  );
}

const systems = [
  { id: 'combat', name: 'Tactical Combat', desc: 'Turn-based tactical combat with grid-based positioning, action economy, and affinity systems.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic doc tactical-combat', details: ['Grid-based movement', 'Turn order initiative', 'Terrain effects', 'Line of sight'] },
  { id: 'grid', name: 'Grid System', desc: 'Coordinate model for tactical positioning, movement range, and pathfinding.', layer: 'Documentation only', status: 'concept' as ProjectStatus, evidence: 'Referenced in combat design', details: ['Coordinate representation', 'Cell state/occupancy', 'Movement cost', 'Terrain types'] },
  { id: 'turns', name: 'Turn System', desc: 'Initiative-based turn order with action point economy and phase management.', layer: 'Documentation only', status: 'concept' as ProjectStatus, evidence: 'Referenced in combat design', details: ['Turn queue', 'Initiative calculation', 'Action points', 'Phase transitions'] },
  { id: 'magic', name: 'Magic / Ability System', desc: 'Elemental affinities, counter-magic mechanics, spell synchronization for combo effects.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic magic-system', details: ['Elemental affinities', 'Counter-magic', 'Spell synchronization', 'Cost/cooldown/target'] },
  { id: 'nahual', name: 'Nahual Transformation', desc: 'State-driven metamorphosis with modified stats, ability sets, and elemental affinities.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic nahual-transformation', details: ['Dynamic stats modification', 'New ability sets', 'Elemental affinity changes', 'Visual transformation'] },
  { id: 'progression', name: 'Progression System', desc: 'Class evolution similar to Fire Emblem, skill inheritance between classes, experience curves.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic progression-system', details: ['Class evolution trees', 'Skill inheritance', 'Experience curves', 'Unlock gates'] },
  { id: 'affinity', name: 'Affinity / Bond System', desc: 'Affinity between characters unlocks special combo abilities and unique narrative scenes.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic bond-system', details: ['Relationship values', 'Bond modification actions', 'Combat synergy unlocks', 'Narrative scene gates'] },
  { id: 'narrative', name: 'Branching Narrative', desc: 'Dialogue trees with Ink integration, moral choices affecting human/nahual affinity, multiple endings.', layer: 'Documentation (MongoDB)', status: 'concept' as ProjectStatus, evidence: 'GameMechanic branching-narrative', details: ['Dialogue graph nodes', 'Choice conditions', 'Affinity flags', 'Multiple ending branches'] },
];

export function WitchCraftGameSystems() {
  return (
    <section
      id="game-systems"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="game-systems-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="game-systems-heading" className="mb-4 text-3xl font-bold text-white">
            Game Systems Overview
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            All gameplay systems are currently documented as design specifications in the MongoDB
            <code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono text-xs">game_mechanics</code>
            collection. No Unity implementation exists. Each system is classified as CONCEPT.
          </p>
        </header>

        <div className="space-y-6 max-w-4xl">
          {systems.map((system) => (
            <article
              key={system.id}
              id={system.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-amber-400">{system.name}</h3>
                  <p className="text-neutral-300 mt-1">{system.desc}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <StatusBadge status={system.status} />
                  <span className="text-xs text-neutral-500 font-mono">{system.layer}</span>
                </div>
              </div>

              <div className="prose prose-invert max-w-none text-sm">
                <p className="text-neutral-400 mb-3"><strong>Evidence:</strong> {system.evidence}</p>
                <ul className="list-disc list-inside space-y-1 text-neutral-300">
                  {system.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WitchCraftGameSystems;