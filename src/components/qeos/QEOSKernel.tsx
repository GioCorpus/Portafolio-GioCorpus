import { cn } from '../../lib/utils';

export function QEOSKernel() {
  return (
    <section id="kernel" className={cn('py-16 border-t border-neutral-800')}>
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 className="mb-4 text-3xl font-bold text-white">Kernel Architecture</h2>
          <p className="text-neutral-400 max-w-3xl">Rust-first monolithic modular kernel with typed memory, IPC, scheduler, and driver subsystems.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Implemented</h3>
            <p className="text-neutral-300">The kernel lives at /kernel (package: qeos-kernel). It compiles in CI (x86_64 and aarch64) and includes integration, syscall, and boundary-contract tests.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSKernel;