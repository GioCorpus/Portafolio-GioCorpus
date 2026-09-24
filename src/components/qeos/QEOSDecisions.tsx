import { cn } from '../../lib/utils';

export function QEOSDecisions() {
  return (
    <section id="decisions" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="decisions-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="decisions-heading" className="mb-4 text-3xl font-bold text-white">Engineering Decisions & Tradeoffs</h2>
          <p className="text-neutral-400 max-w-3xl">Real design decisions from the codebase, with benefits, costs, and alternatives considered.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Rust?</h3>
            <p className="text-neutral-300">Memory safety without GC, zero-cost abstractions, excellent for kernel development. Tradeoff: steeper learning curve, unsafe required for hardware, longer compile times. Alternative: C/C++/Zig rejected.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Typed Addresses (PhysAddr, VirtAddr)?</h3>
            <p className="text-neutral-300">Prevents mixing physical/virtual addresses at compile time. Canonical address validation enforced by type system. Tradeoff: more verbose code. Alternative: raw usize rejected for kernel correctness.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Explicit HAL Separation?</h3>
            <p className="text-neutral-300">Kernel HAL minimal, rich abstraction in crate. Enables testing, simulation, hardware swaps. Tradeoff: two HAL layers to maintain. Alternative: monolithic HAL rejected.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Service-Oriented Architecture?</h3>
            <p className="text-neutral-300">Failure isolation, independent deployment, clear IPC boundaries, testable services. Tradeoff: IPC overhead, distributed complexity. Alternative: monolithic kernel services rejected.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Separate Simulation from Hardware?</h3>
            <p className="text-neutral-300">Honest abstractions, CI tests quantum without hardware, prevents simulation leakage. Tradeoff: more interfaces. Alternative: direct hardware access rejected per ARCHITECTURE.md.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Capability-Based Security?</h3>
            <p className="text-neutral-300">Fine-grained least-privilege, composable, revocable, aligns with Rust ownership. Tradeoff: more complex than ACLs. Alternative: traditional ACLs/RBAC rejected for kernel granularity.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Lock-Free Ring Buffers?</h3>
            <p className="text-neutral-300">High-frequency telemetry without lock contention, deterministic latency, works in interrupt context. Tradeoff: complex correctness, ABA risk. Alternative: mutex queues rejected for interrupt context.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Modular Crates?</h3>
            <p className="text-neutral-300">Independent compilation, clear boundaries, reusable, parallel development. Tradeoff: version coordination, 14+ crates. Alternative: monolithic crate rejected for architectural clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSDecisions;