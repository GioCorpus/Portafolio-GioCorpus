import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftUnity() {
  return (
    <section id="unity" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="unity-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="unity-heading" className="mb-4 text-3xl font-bold text-white">Unity 6 Architecture</h2>
        <p className="text-neutral-400 max-w-3xl">Target engine for game runtime. <strong>No Unity project currently exists.</strong> All existing documentation references legacy Unreal Engine 5.4 direction.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Current Status: ROADMAP</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Unity 6 project</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">URP 2D/2.5D pipeline</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">C# gameplay assemblies</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">ScriptableObject data</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Prefab/scene organization</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Input System (new)</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">UI Toolkit / UGUI</span><StatusBadge status="roadmap" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Build pipeline (CI/CD)</span><StatusBadge status="roadmap" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Legacy UE5.4 References (Must Update)</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/server.py</code> TechnicalSpecs: engine="Unreal Engine 5", version="5.4"</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">backend/seed_data.py</code>: Lumen, Nanite, Niagara, MetaSounds specs</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">frontend/src/pages/HomePage.js</code>: "Desarrollado en Unreal Engine 5.4"</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">frontend/src/pages/DocumentationPage.js</code>: UE5.4 tech specs display</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">frontend/src/pages/PublisherPage.js</code>: UE5.4 publisher presentation</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">src/data/projects.ts</code>: technologies include "Unreal Engine 5"</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Proposed Unity 6 Architecture (Design)</h3>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Assemblies:</strong> Core, Combat, Grid, Abilities, Progression, Narrative</li>
            <li><strong>ScriptableObjects:</strong> AbilityData, CharacterData, ClassData, FormData, ElementalData, ProgressionTable</li>
            <li><strong>State Machines:</strong> CombatFSM, TurnFSM, TransformationFSM, DialogueFSM</li>
            <li><strong>Grid System:</strong> Coordinate struct, OccupancyGrid, Pathfinder (A*), RangeCalculator</li>
            <li><strong>Save System:</strong> JSON to persistentDataPath (NOT MongoDB)</li>
            <li><strong>Testing:</strong> EditMode tests for logic, PlayMode for integration</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>NO Unity project in any GitHub repository</li>
            <li>NO .cs files found in workspace</li>
            <li>NO ProjectSettings/ProjectVersion.txt found</li>
            <li>Portfolio requirement states Unity 6 as current direction</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftUnity;