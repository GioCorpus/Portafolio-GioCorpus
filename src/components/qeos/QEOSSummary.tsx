import { cn } from '../../lib/utils';

export function QEOSSummary() {
  return (
    <section id="summary" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="summary-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="summary-heading" className="mb-4 text-3xl font-bold text-white">Summary: What QEOS Actually Is</h2>
          <p className="text-neutral-400 max-w-3xl">Evidence-based assessment of the repository as of current state.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">TL;DR</h3>
            <p className="text-neutral-300">
              QEOS is a <strong>research-grade systems prototype</strong> written in Rust, featuring a capability-based microkernel,
              service-oriented platform layer, quantum runtime with simulator, and green computing telemetry.
              It is <strong>not a runnable operating system</strong> — no userspace, no filesystem, no network stack, no hardware drivers.
              Quantum claims are <strong>simulation-only</strong> with explicit architectural boundaries preventing hardware confusion.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">What Works (Implemented)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Kernel Core</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Typed memory model (PhysAddr, VirtAddr)</li>
                  <li>Page tables with permissions</li>
                  <li>Scheduler with priority/deadlines</li>
                  <li>Capability-based security</li>
                  <li>IPC with capability transfer</li>
                  <li>Lock-free ring buffer telemetry</li>
                </ul>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Platform Services</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Service framework (bus, gateway, registry)</li>
                  <li>Identity service (JWT, JWKS, RBAC)</li>
                  <li>Hardware abstraction crate (10 modules)</li>
                  <li>Quantum runtime (19 modules, simulator)</li>
                  <li>Energy telemetry (DVFS, carbon-aware)</li>
                </ul>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Infrastructure</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>CI: fmt, clippy, test (x86_64 + aarch64)</li>
                  <li>Security: cargo-audit, secret detection</li>
                  <li>Frontend: React + Tauri dashboard</li>
                  <li>Multi-crate Cargo workspace</li>
                  <li>Release profile: LTO, panic=abort</li>
                </ul>
              </div>
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Documentation</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>ARCHITECTURE.md (6-layer model)</li>
                  <li>QUANTUM_ARCHITECTURE.md (simulation-only)</li>
                  <li>Honest about capabilities vs research</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">What's Prototype / Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">Prototype</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Driver framework (PCIe, DMA, IOMMU)</li>
                  <li>Hardware abstraction crate</li>
                  <li>Quantum runtime backends</li>
                  <li>DVFS governor</li>
                  <li>Carbon-aware scheduling</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2">Research</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Majorana simulation</li>
                  <li>Tetron logical qubits</li>
                  <li>Braiding operations</li>
                  <li>Surface code error correction</li>
                  <li>Topological phase modeling</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-500/10 border border-slate-500/30 rounded-lg">
                <h4 className="font-semibold text-slate-400 mb-2">Concept / Roadmap</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Physical QPU adapter</li>
                  <li>Distributed cluster/federation</li>
                  <li>GPU compute</li>
                  <li>Userspace, filesystem, network</li>
                  <li>OIDC, mTLS, SBOM, formal verification</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Portfolio Claims vs Repo Evidence</h3>
            <table className="w-full text-sm">
              <thead><tr className="border-b border-neutral-700 text-left text-neutral-400"><th className="pb-2">Claim</th><th className="pb-2">Evidence in Repo</th></tr></thead>
              <tbody className="divide-y divide-neutral-800 text-neutral-300">
                <tr><td className="py-2">"Rust microkernel"</td><td className="py-2">✓ Kernel core exists, no userspace</td></tr>
                <tr><td className="py-2">"Quantum runtime"</td><td className="py-2">✓ Simulator implemented, no hardware</td></tr>
                <tr><td className="py-2">"3.2x logical qubit lifetime"</td><td className="py-2">✗ No benchmark, no data</td></tr>
                <tr><td className="py-2">"Majorana support"</td><td className="py-2">~ Simulation only, stub backend</td></tr>
                <tr><td className="py-2">"Green scheduling"</td><td className="py-2">~ Prototype, mocked carbon API</td></tr>
                <tr><td className="py-2">"Distributed cluster"</td><td className="py-2">✗ Crates exist, no code</td></tr>
                <tr><td className="py-2">"Production ready"</td><td className="py-2">✗ Phase 3+ not implemented</td></tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Final Assessment</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Strong systems programming showcase</li>
              <li>Honest about simulation vs hardware</li>
              <li>Good CI/security practices</li>
              <li>Not deployable as-is</li>
              <li>Claims need benchmark evidence</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSSummary;