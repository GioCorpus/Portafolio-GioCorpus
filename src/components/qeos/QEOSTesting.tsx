import { cn } from '../../lib/utils';

export function QEOSTesting() {
  return (
    <section id="testing" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="testing-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="testing-heading" className="mb-4 text-3xl font-bold text-white">Testing / Verification / CI</h2>
          <p className="text-neutral-400 max-w-3xl">Multi-target CI with fmt, clippy, tests, security audit, and simulator-only quantum testing.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Implemented</h3>
            <p className="text-neutral-300">Complete CI pipeline in .github/workflows/ci.yml with 8 jobs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Kernel Tests (kernel/tests/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>boundary_contract_tests.rs — Boundary contract testing</li>
              <li>kernel_integration.rs — Integration tests</li>
              <li>syscall_tests.rs — Syscall tests</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">CI Jobs (.github/workflows/ci.yml)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li><strong>fmt</strong> — cargo fmt --check</li>
              <li><strong>clippy</strong> — cargo clippy -D warnings (all targets, all features)</li>
              <li><strong>test-rust</strong> — cargo test (x86_64, aarch64), simulator only</li>
              <li><strong>build-rust</strong> — cargo build (x86_64, aarch64)</li>
              <li><strong>frontend</strong> — pnpm install, tsc, eslint, vite build</li>
              <li><strong>python</strong> — pytest if tools/requirements.txt exists</li>
              <li><strong>migrations</strong> — PostgreSQL service, validate migrations dir</li>
              <li><strong>security</strong> — cargo-audit, secret detection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Security & Quality Gates</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>cargo-audit 0.21.0 (pinned)</li>
              <li>Secret detection (private keys, AWS keys)</li>
              <li>Clippy with -D warnings (deny all warnings)</li>
              <li>fmt check on all code</li>
              <li>Cross-compilation test (x86_64 + aarch64)</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>CI: .github/workflows/ci.yml (136 lines)</li>
              <li>Kernel tests: 3 test files</li>
              <li>Release profile: LTO, panic=abort, codegen-units=1</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSTesting;