import { cn } from '../../lib/utils';

export function QEOSOverview() {
  return (
    <section
      id="overview"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="overview-heading" className="mb-4 text-3xl font-bold text-white">
            Executive Technical Overview
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Understand what QEOS is, why it exists, and what engineering domains it demonstrates —
            without requiring OS-specialist knowledge.
          </p>
        </header>

        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">What Problem Does QEOS Explore?</h3>
            <p className="text-neutral-300 leading-relaxed">
              Modern computing infrastructure faces a convergence challenge: classical high-performance
              computing, energy-aware systems, and emerging quantum processors each require different
              runtime abstractions, yet must interoperate. Existing operating systems were not designed
              for this hybrid reality. QEOS investigates whether a clean-slate, Rust-first OS platform
              can provide coherent abstractions across classical, quantum, and energy domains —
              without conflating simulation with hardware reality.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Build an OS/Research Platform?</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
              <li>
                <strong>Evidence over speculation:</strong> The repository <em>is</em> the evidence. Every
                architectural claim is traceable to source code, tests, or documentation.
              </li>
              <li>
                <strong>Honest hardware abstractions:</strong> Quantum and hardware integrations are
                capability-gated, documented interfaces — not assumptions. Simulation is explicitly
                separated from physical hardware behavior.
              </li>
              <li>
                <strong>Systems engineering discipline:</strong> Memory safety, typed addresses,
                capability-based security, lock-free ring buffers, and formal IPC boundaries —
                demonstrated in code, not marketing.
              </li>
              <li>
                <strong>Research infrastructure:</strong> A reproducible platform for quantum
                algorithm development, energy telemetry, and distributed systems experimentation.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSOverview;