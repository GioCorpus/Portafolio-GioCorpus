import { cn } from '../../lib/utils';

export function QEOSArchitecture() {
  return (
    <section id="architecture" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="architecture-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="architecture-heading" className="mb-4 text-3xl font-bold text-white">System Architecture</h2>
          <p className="text-neutral-400 max-w-3xl">Layered architecture keeping classical system logic, service orchestration, energy telemetry, and quantum runtime concerns clearly separated.</p>
        </header>

        <div className="mb-12 overflow-x-auto">
          <figure className="bg-neutral-950 border border-neutral-800 rounded-lg p-6">
            <pre className="font-mono text-sm text-neutral-400 leading-relaxed overflow-x-auto">
{`┌─ APPLICATIONS / RESEARCH TOOLS ─────────────────────────────────────────────┐
│  Quantum Algorithms • Energy Analytics • Distributed Workloads • Developer Tools   │
│                                    ▼                                            │
├─ PLATFORM SERVICES ──────────────────────────────────────────────────────────┤
│  Identity (Auth/JWT/RBAC) • Energy Telemetry • Quantum Runtime • HW Abstraction    │
│                                    ▼                                            │
├─ SERVICE FRAMEWORK / IPC ──────────────────────────────────────────────────────┤
│  Service Manager • Service Bus • Gateway • Channels • Endpoints • Messages         │
│                                    ▼                                            │
├─ KERNEL (qeos-kernel) ─────────────────────────────────────────────────────────┤
│  Memory • Scheduler • HAL • IPC • Drivers • Security • Telemetry • Syscalls        │
│         ▼                    ▼                    ▼                               │
│  ┌─ MEMORY ────┐  ┌─ SCHEDULER ────┐  ┌─ HAL ─────────┐                          │
│  │ Frames/Pages │  │ Per-CPU Runqueues│  │ Minimal Kernel │                          │
│  │ Page Tables  │  │ Task Context     │  │ HAL            │                          │
│  │ Allocator    │  │                  │  │                │                          │
│  └──────────────┘  └──────────────────┘  └────────────────┘                          │
│                                    ▼                                            │
├─ DEVICE MANAGER / DRIVERS ─────────────────────────────────────────────────────┤
│  PCIe • DMA • Interrupts • IOMMU • Lifecycle • MMIO • Bus Abstraction              │
│                                    ▼                                            │
├─ HARDWARE / SIMULATION BACKENDS ────────────────────────────────────────────────┤
  CPU • GPU • NVMe • QPU Simulator • Emulator • Remote • Majorana Adapter (Capability-Gated)
└─────────────────────────────────────────────────────────────────────────────────┘`}
            </pre>
          </figure>
        </div>

        <div className="prose prose-invert max-w-none space-y-6">
          <h3 className="text-xl font-semibold text-cyan-400">Layer Responsibilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-cyan-400 mb-3">Classical Computing Layer</h4><p className="text-sm text-neutral-300">Linux-compatible runtime boundaries, userland tools, system services, shell, package management.</p></div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-violet-400 mb-3">Service Layer</h4><p className="text-sm text-neutral-300">Identity, policy, telemetry, storage, browser, dashboard — orchestrated via system-core.</p></div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-amber-400 mb-3">Quantum Runtime Layer</h4><p className="text-sm text-neutral-300">Circuit and topology abstractions, measurements, backend execution (simulator, emulator, remote, physical adapter).</p></div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-green-400 mb-3">Energy & Telemetry Layer</h4><p className="text-sm text-neutral-300">Sensor and ring-buffer instrumentation, forecasting, optimization, dashboards.</p></div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-red-400 mb-3">Hardware Abstraction Layer</h4><p className="text-sm text-neutral-300">Typed access to CPUs, buses, storage, power interfaces, and quantum backend adapters.</p></div>
            <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg"><h4 className="font-semibold text-slate-400 mb-3">Future QPU Layer</h4><p className="text-sm text-neutral-300">Simulator, emulator, remote, and capability-gated physical adapters. Majorana as documented interface.</p></div>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Key Architectural Principle</h4>
            <p className="text-neutral-300"><strong>Simulation and physical hardware semantics are never mixed.</strong> The QUANTUM_ARCHITECTURE.md explicitly states: "Physical QPU access remains behind a documented adapter boundary and is never reverse-engineered or assumed from mathematical simulation output." MajoranaBackend is a capability-gated stub that remains disabled unless a documented hardware interface exists.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSArchitecture;