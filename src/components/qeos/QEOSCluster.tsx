import { cn } from '../../lib/utils';

export function QEOSCluster() {
  return (
    <section id="cluster" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="cluster-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="cluster-heading" className="mb-4 text-3xl font-bold text-white">Distributed Cluster & Federation</h2>
          <p className="text-neutral-400 max-w-3xl">Multi-node orchestration, capability federation, and hybrid quantum-classical workload placement — roadmap stage.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Roadmap (Crates Exist, Not Implemented)</h3>
            <p className="text-neutral-300">qeos-cluster, qeos-node crates exist as placeholders. No distributed consensus, no federation protocol implemented.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Planned Architecture (from ARCHITECTURE.md)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li><strong>qeos-node</strong> — Node agent: resource reporting, local scheduler, health checks</li>
              <li><strong>qeos-cluster</strong> — Cluster controller: global scheduler, federation, policy enforcement</li>
              <li><strong>Capability Federation</strong> — Cross-node capability delegation, trust boundaries</li>
              <li><strong>Hybrid Scheduler</strong> — Place quantum jobs on best backend (local sim, remote, cloud)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Challenges (Unresolved)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Distributed consensus for capability revocation</li>
              <li>Network partition handling for quantum job state</li>
              <li>Cross-node IPC with capability preservation</li>
              <li>Quantum state synchronization (simulation only)</li>
              <li>Carbon-aware placement across geo-distributed nodes</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Related Crates (Placeholders)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>qeos-cluster/ — Cluster controller (Cargo.toml only)</li>
              <li>qeos-node/ — Node agent (Cargo.toml only)</li>
              <li>qeos-federation/ — Not yet created</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>qeos-cluster/Cargo.toml, qeos-node/Cargo.toml exist</li>
              <li>No source files in src/ for either crate</li>
              <li>ARCHITECTURE.md describes federation as future work</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSCluster;