import { cn } from '../../lib/utils';

export function WitchCraftDecisions() {
  return (
    <section id="decisions" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="decisions-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="decisions-heading" className="mb-4 text-3xl font-bold text-white">Engineering Decisions & Tradeoffs</h2>
        <p className="text-neutral-400 max-w-3xl">Real design decisions from the project, with benefits, costs, and alternatives considered.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Separate Game Runtime from Project Platform</h3>
          <p className="text-neutral-300">The React/FastAPI/MongoDB platform serves documentation and project management only. The Unity game (when built) will have zero runtime dependency on this platform. Benefits: clear boundaries, independent deployment, no false integration claims. Costs: duplicate data modeling if game needs similar structures. Alternative: shared backend rejected for architectural honesty.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Unity 6 over Unreal Engine 5</h3>
          <p className="text-neutral-300">Current portfolio direction is Unity 6 despite all existing documentation referencing UE5.4. Unity offers faster iteration for 2D/2.5D tactical games, larger talent pool, and better C# ecosystem for gameplay systems. Costs: migration of UE5.4 design docs, loss of Lumen/Nanite. Alternative: UE5.4 retained for high-fidelity 3D but rejected for tactical SRPG scope.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">ScriptableObject-Driven Gameplay Data</h3>
          <p className="text-neutral-300">Abilities, characters, classes, forms, and progression tables defined as ScriptableObjects in Unity. Benefits: designer-friendly editing, version control friendly, hot-reload in editor, decoupled from MonoBehaviour. Costs: requires custom inspectors, serialization complexity for nested refs. Alternative: JSON/ScriptableObject hybrid rejected for editor workflow.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Finite State Machines for Core Systems</h3>
          <p className="text-neutral-300">Combat, Turn, Transformation, and Dialogue systems use explicit FSMs. Benefits: predictable behavior, easy debugging, testable transitions, visual state graphs. Costs: boilerplate for simple states, state explosion risk in narrative. Alternative: coroutine-based flow rejected for combat determinism.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Local Save System (Not MongoDB)</h3>
          <p className="text-neutral-300">Game saves written to Application.persistentDataPath as JSON/binary. MongoDB used only for project platform. Benefits: offline play, no server dependency, player data privacy, simpler deployment. Costs: no cloud sync, manual backup needed. Alternative: MongoDB game saves rejected — platform is not game backend.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Ink for Narrative Scripting</h3>
          <p className="text-neutral-300">Inkle's Ink chosen for dialogue trees and branching narrative. Benefits: industry standard, Unity integration, visual editor (Inky), compiles to JSON, handles complex conditionals. Costs: learning curve, custom Unity integration needed. Alternative: custom dialogue graph rejected — reinventing wheel.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Motor (Async) for MongoDB</h3>
          <p className="text-neutral-300">FastAPI backend uses Motor async driver instead of synchronous PyMongo. Benefits: non-blocking I/O, handles concurrent requests, scales with Uvicorn workers. Costs: async/await throughout, more complex error handling. Alternative: sync PyMongo rejected for FastAPI async architecture.</p></div>
          <div><h3 className="text-xl font-semibold text-amber-400 mb-4">Create React App (CRA) over Vite</h3>
          <p className="text-neutral-300">Frontend uses CRA + craco instead of Vite. Benefits: stable, well-understood, works with legacy React patterns. Costs: slower builds, webpack config complexity via craco, React 19 support experimental. Alternative: Vite migration planned for frontend modernization.</p></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftDecisions;