import { cn } from '../../lib/utils';

export function QEOSStatus() {
  return (
    <section id="status" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="status-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="status-heading" className="mb-4 text-3xl font-bold text-white">Current Status</h2>
          <p className="text-neutral-400 max-w-3xl">Evidence-based classification of every major capability.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Capability Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead><tr className="border-b border-neutral-700 text-left text-neutral-400"><th className="pb-2 font-mono">Capability</th><th className="pb-2">Status</th><th className="pb-2">Evidence</th></tr></thead>
                <tbody className="divide-y divide-neutral-800 text-neutral-300">
                  <tr><td className="py-2 font-mono">Kernel core</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Implemented</span></td><td className="py-2">kernel/src/, tests/, CI build</td></tr>
                  <tr><td className="py-2 font-mono">Memory model</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Implemented</span></td><td className="py-2">kernel/src/memory/ (7 files)</td></tr>
                  <tr><td className="py-2 font-mono">Service framework</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Implemented</span></td><td className="py-2">crates/system-core/src/</td></tr>
                  <tr><td className="py-2 font-mono">Identity service</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Implemented</span></td><td className="py-2">crates/identity-service/src/</td></tr>
                  <tr><td className="py-2 font-mono">Hardware abstraction</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded">Prototype</span></td><td className="py-2">crates/hardware-abstraction/</td></tr>
                  <tr><td className="py-2 font-mono">Driver framework</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded">Prototype</span></td><td className="py-2">kernel/src/driver/ (9 modules)</td></tr>
                  <tr><td className="py-2 font-mono">Quantum runtime</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded">Prototype</span></td><td className="py-2">crates/quantum-runtime/ (19 modules)</td></tr>
                  <tr><td className="py-2 font-mono">Majorana/topological sim</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-purple-500/20 text-purple-400 rounded">Research</span></td><td className="py-2">majorana_sim.rs, tetron.rs, braiding.rs</td></tr>
                  <tr><td className="py-2 font-mono">Physical QPU</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded">Concept</span></td><td className="py-2">Capability-gated adapter stub</td></tr>
                  <tr><td className="py-2 font-mono">Distributed cluster</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded">Roadmap</span></td><td className="py-2">qeos-cluster, qeos-node crates</td></tr>
                  <tr><td className="py-2 font-mono">GPU compute</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-slate-500/20 text-slate-400 rounded">Concept</span></td><td className="py-2">qeos-gpu-compute crate exists</td></tr>
                  <tr><td className="py-2 font-mono">Energy telemetry</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-blue-500/20 text-blue-400 rounded">Prototype</span></td><td className="py-2">crates/energy-telemetry/</td></tr>
                  <tr><td className="py-2 font-mono">CI/CD (multi-target, audit)</td><td className="py-2"><span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded">Implemented</span></td><td className="py-2">.github/workflows/ci.yml (8 jobs)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Architecture Layers</h3>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-cyan-500/20 text-cyan-400 rounded text-xs">1</span><span className="text-neutral-300">USER / RESEARCH LAYER</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-violet-500/20 text-violet-400 rounded text-xs">2</span><span className="text-neutral-300">SERVICE LAYER</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-green-500/20 text-green-400 rounded text-xs">3</span><span className="text-neutral-300">SERVICE FRAMEWORK / IPC</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-amber-500/20 text-amber-400 rounded text-xs">4</span><span className="text-neutral-300">KERNEL LAYER</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-red-500/20 text-red-400 rounded text-xs">5</span><span className="text-neutral-300">DEVICE LAYER</span></div>
              <div className="flex items-center gap-3"><span className="w-8 h-8 flex items-center justify-center bg-slate-500/20 text-slate-400 rounded text-xs">6</span><span className="text-neutral-300">HARDWARE / SIMULATION LAYER</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSStatus;