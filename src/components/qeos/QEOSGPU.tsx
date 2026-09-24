import { cn } from '../../lib/utils';

export function QEOSGPU() {
  return (
    <section id="gpu" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="gpu-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="gpu-heading" className="mb-4 text-3xl font-bold text-white">GPU / Compute</h2>
          <p className="text-neutral-400 max-w-3xl">GPU abstraction layer and compute crate for HPC workloads. Implementation maturity unclear.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Concept / Prototype</h3>
            <p className="text-neutral-300">Crate structure exists (qeos-gpu-compute, hardware-abstraction/gpu.rs). Implementation not inspected in detail.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Crates</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>crates/qeos-gpu-compute/ — GPU compute crate</li>
              <li>crates/hardware-abstraction/src/gpu.rs — GPU abstraction trait</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Planned Capabilities (from architecture)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Compute queue abstraction</li>
              <li>Buffer management (device/host)</li>
              <li>Acceleration backend interface</li>
              <li>Simulation backend for CI</li>
              <li>HPC workload integration</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Crates exist in workspace (Cargo.toml)</li>
              <li>No implementation details publicly verified</li>
              <li>No CUDA/ROCm/Vulkan support claimed</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSGPU;