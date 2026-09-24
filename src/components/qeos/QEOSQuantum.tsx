import { cn } from '../../lib/utils';

export function QEOSQuantum() {
  return (
    <section id="quantum" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="quantum-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="quantum-heading" className="mb-4 text-3xl font-bold text-white">QPU Runtime & Quantum Research</h2>
          <p className="text-neutral-400 max-w-3xl">Quantum runtime with simulator, multiple backends, error correction, and Majorana simulation — all explicitly simulation-only.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype (Runtime) / Research (Majorana) / Concept (Physical QPU)</h3>
            <p className="text-neutral-300">Complete quantum runtime in crates/quantum-runtime/. Simulator implemented. Physical QPU behind capability-gated adapter only.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quantum Runtime (crates/quantum-runtime/src/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>backend.rs — Backend abstraction (Simulation, Emulation, Remote, Physical)</li>
              <li>circuit.rs — Circuit representation</li>
              <li>compiler.rs — Compiler pipeline</li>
              <li>scheduler.rs — Job scheduler with priority/deadlines</li>
              <li>simulator.rs — Local simulator backend</li>
              <li>qpu_device.rs — QPU device abstraction</li>
              <li>job.rs — Job submission and tracking</li>
              <li>measurement.rs — Measurement handling</li>
              <li>error_correction.rs — Surface code, adaptive syndrome extraction</li>
              <li>majorana.rs / majorana_sim.rs — Majorana simulation</li>
              <li>tetron.rs — Tetron logical qubits</li>
              <li>braiding.rs — Braiding operations</li>
              <li>topology.rs — Topology modeling</li>
              <li>noise.rs — Noise modeling</li>
              <li>gates.rs — Quantum gates</li>
              <li>resources.rs — Resource management</li>
              <li>capabilities.rs — Capability model</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Backend Model (QUANTUM_ARCHITECTURE.md)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li><strong>Simulation</strong> — LocalSimulatorBackend (implemented)</li>
              <li><strong>Emulation</strong> — LocalEmulatorBackend (prototype)</li>
              <li><strong>Remote</strong> — AzureQuantumBackend (interface)</li>
              <li><strong>Physical</strong> — MajoranaBackend as capability-gated adapter (stub, disabled)</li>
            </ul>
            <p className="text-neutral-400 text-sm mt-2">SimulationMetadata includes: backend type, model name, assumptions[], fidelity (optional).</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Majorana / Topological Research</h3>
            <p className="text-neutral-300 mb-4">Explicitly simulation-only per ARCHITECTURE.md and QUANTUM_ARCHITECTURE.md:</p>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>majorana_sim.rs — Majorana simulation</li>
              <li>tetron.rs — Tetron logical qubit structures</li>
              <li>braiding.rs — Braiding adjacency operations</li>
              <li>topology.rs — Topological state tracking</li>
              <li>error_correction.rs — Surface code with 3.2x logical qubit lifetime claim (portfolio, not benchmarked in repo)</li>
            </ul>
            <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg mt-4">
              <p className="text-purple-300 text-sm"><strong>Key:</strong> "Majorana or topological quantum support is treated as a future adapter layer behind a stable QuantumProcessor trait. Physical access is never assumed." — ARCHITECTURE.md</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quantum HAL & QPU Crates</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>crates/quantum-hal/ — Quantum hardware abstraction</li>
              <li>crates/qeos-qpu/ — QPU interface</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Source: crates/quantum-runtime/src/ (19 modules)</li>
              <li>Docs: QUANTUM_ARCHITECTURE.md (explicit simulation-only stance)</li>
              <li>No physical QPU access claimed or demonstrated</li>
              <li>CI: "Mock/Simulator only, no physical QPU"</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSQuantum;