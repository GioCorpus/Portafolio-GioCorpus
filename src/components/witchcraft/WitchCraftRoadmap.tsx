import { cn } from '../../lib/utils';

export function WitchCraftRoadmap() {
  return (
    <section id="roadmap" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="roadmap-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="roadmap-heading" className="mb-4 text-3xl font-bold text-white">Roadmap</h2>
        <p className="text-neutral-400 max-w-3xl">Actual roadmap data from the project platform (MongoDB roadmap collection). Separated by domain.</p></header>
        <div className="space-y-12 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Gameplay Roadmap (Unity 6)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">No Unity project exists. The following represents design intent only:</p>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><strong>Phase 1 — Core Systems:</strong> Unity 6 project setup, URP, input system, basic scene, ScriptableObject architecture, grid coordinate system, occupancy grid.</li>
            <li><strong>Phase 2 — Combat Prototype:</strong> Turn FSM, initiative queue, action point system, basic movement, ability pipeline (validation→cost→target→effect), damage resolution.</li>
            <li><strong>Phase 3 — Grid & Abilities:</strong> A* pathfinding, range visualization, terrain costs, elemental affinity matrix, counter-magic, spell synchronization.</li>
            <li><strong>Phase 4 — Nahual Transformation:</strong> Transformation FSM, stat modification, ability set swap, elemental shift, visual VFX, trigger conditions.</li>
            <li><strong>Phase 5 — Progression & Bonds:</strong> Class evolution trees, XP/level system, skill inheritance, bond matrix, combat synergy, narrative scene gates.</li>
            <li><strong>Phase 6 — Narrative:</strong> Ink integration, dialogue graph, choice nodes, affinity meter, flag persistence, ending evaluator.</li>
            <li><strong>Phase 7 — Polish & Ship:</strong> UI/UX, save/load, build pipeline, testing, platform builds (PC, console targets).</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Technical Roadmap (Unity 6)</h3>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li>Assembly definitions and dependency graph</li>
            <li>EditMode unit tests for all logic systems (target 80% coverage)</li>
            <li>PlayMode integration tests for combat flow</li>
            <li>CI/CD: GitHub Actions for build, test, static analysis</li>
            <li>Addressables for asset management</li>
            <li>Input System rebinding UI</li>
            <li>Localization framework (EN/ES/JP/FR)</li>
            <li>Performance profiling (mobile/console targets)</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Platform Roadmap (React/FastAPI/MongoDB)</h3>
          <p className="text-neutral-300 leading-relaxed mb-4">From seeded roadmap collection (8 items):</p>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Project initialization & team onboarding (Completed)</li>
            <li>Technical specification documentation (Completed)</li>
            <li>Game mechanics catalog (In Progress)</li>
            <li>Concept art pipeline (In Progress)</li>
            <li>Publisher presentation deck (Completed)</li>
            <li>Development dashboard with metrics (Completed)</li>
            <li>Roadmap tracking with dependencies (Planned)</li>
            <li>Team collaboration features (Planned)</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Migration Items (Legacy UE5.4 → Unity 6)</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
            <li>Update backend TechnicalSpecs seed data</li>
            <li>Update frontend HomePage, DocumentationPage, PublisherPage</li>
            <li>Update portfolio project data (technologies, description)</li>
            <li>Update all UE5.4-specific terminology (Lumen, Nanite, Niagara, MetaSounds)</li>
            <li>Normalize "Sorcerers and Nahuals" → "Shamans & Nahuals" across platform</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftRoadmap;