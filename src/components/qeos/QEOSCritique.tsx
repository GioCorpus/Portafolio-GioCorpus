import { cn } from '../../lib/utils';

export function QEOSCritique() {
  return (
    <section id="critique" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="critique-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="critique-heading" className="mb-4 text-3xl font-bold text-white">Honest Critique & Gaps</h2>
          <p className="text-neutral-400 max-w-3xl">What the repo doesn't do, where claims exceed evidence, and what needs work.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Claims Without Benchmark Evidence</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li><strong>"3.2x logical qubit lifetime improvement"</strong> — Portfolio claim, no benchmark code, no CI run, no data in repo</li>
              <li><strong>"Sub-microsecond context switch"</strong> — No benchmark harness, no numbers in CI</li>
              <li><strong>"Zero-copy IPC"</strong> — Capability-based, but copies exist at serialization boundary</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Missing Production Features</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>No userspace (no process abstraction, no EL0)</li>
              <li>No filesystem (VFS, ext4, tmpfs)</li>
              <li>No network stack (TCP/IP, UDP, sockets)</li>
              <li>No device drivers beyond PCIe enumeration (no NVMe, GPU, net drivers)</li>
              <li>No dynamic module loading</li>
              <li>No kexec / crash dump</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quantum-Specific Gaps</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>No physical QPU ever tested (simulation only)</li>
              <li>MajoranaBackend is a stub, capability-gated, disabled</li>
              <li>Error correction: surface code implemented but not benchmarked</li>
              <li>No quantum volume, no randomized benchmarking</li>
              <li>Compiler: no optimization passes, no layout synthesis</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Architecture Debt</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Two HALs (kernel + crate) — duplication risk</li>
              <li>14+ crates — version coordination overhead</li>
              <li>No API stability guarantees (pre-1.0)</li>
              <li>Capability revocation not implemented</li>
              <li>No integration tests across kernel/service boundary</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Testing Gaps</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Only 3 kernel test files (boundary, integration, syscall)</li>
              <li>No fuzzing (cargo-fuzz not in CI)</li>
              <li>No property-based testing (proptest)</li>
              <li>No hardware-in-the-loop testing</li>
              <li>No chaos testing for distributed components</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Documentation Gaps</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>No API reference docs (rustdoc not published)</li>
              <li>No architecture decision records (ADRs)</li>
              <li>QUANTUM_ARCHITECTURE.md and ARCHITECTURE.md sometimes conflict</li>
              <li>No contributor guide, no coding standards doc</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Summary</h4>
            <p className="text-neutral-300 text-sm">Strong research prototype with honest simulation-only stance. Not a runnable OS. Significant gaps to production. Portfolio claims exceed repo evidence in several areas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSCritique;