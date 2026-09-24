import { cn } from '../../lib/utils';

export function QEOSTelemetry() {
  return (
    <section id="telemetry" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="telemetry-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="telemetry-heading" className="mb-4 text-3xl font-bold text-white">Telemetry & Data Path</h2>
          <p className="text-neutral-400 max-w-3xl">High-frequency energy telemetry with lock-free ring buffers, fault injection, and provenance tracking.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">Kernel telemetry (energy.rs) + energy-telemetry crate with ring buffer, faults, provenance.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Energy Telemetry Crate (crates/energy-telemetry/src/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>ring_buffer.rs — Lock-free ring buffer implementation</li>
              <li>energy.rs — Energy metrics collection</li>
              <li>telemetry.rs — Core telemetry types</li>
              <li>faults.rs — Fault injection and recording</li>
              <li>provenance.rs — Data provenance tracking</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Telemetry Pipeline</h3>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`Sensor / Device
      ↓
Interrupt / DMA
      ↓
Kernel Buffer (ring_buffer.rs)
      ↓
Telemetry Service (energy-telemetry)
      ↓
Aggregation / Forecasting
      ↓
API / Dashboard / Research Tool`}
            </pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Atomic ring buffer for high-frequency ingestion</li>
              <li>Energy metrics (power, voltage, current, temperature)</li>
              <li>Fault injection for resilience testing (faults.rs)</li>
              <li>Provenance tracking for data lineage</li>
              <li>No fake hardware telemetry (per ARCHITECTURE.md)</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Kernel: kernel/src/telemetry/energy.rs</li>
              <li>Crate: crates/energy-telemetry/src/ (5 modules)</li>
              <li>CI: Tests run in simulator-only mode</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSTelemetry;