import { cn } from '../../lib/utils';

export function QEOSEnergy() {
  return (
    <section id="energy" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="energy-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="energy-heading" className="mb-4 text-3xl font-bold text-white">Energy Telemetry & Green Scheduling</h2>
          <p className="text-neutral-400 max-w-3xl">Lock-free ring buffer for high-frequency power telemetry, DVFS integration, and carbon-aware scheduling.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">crates/energy-telemetry/ implemented with lock-free ring buffer. DVFS governor and carbon-aware scheduler are prototypes.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Ring Buffer (energy-telemetry/src/ring_buffer.rs)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Lock-free SPSC (single-producer, single-consumer) using atomics</li>
              <li>PowerSample: timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz</li>
              <li>Bounded capacity (default 8192 samples), overwrite-on-full semantics</li>
              <li>Used in interrupt context for high-frequency sampling (1-10kHz)</li>
              <li>Memory ordering: Acquire/Release for producer/consumer indices</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">DVFS Governor (energy-telemetry/src/dvfs.rs)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Performance, Balanced, PowerSave, CarbonAware modes</li>
              <li>Per-core frequency scaling via MSR/ACPI</li>
              <li>CarbonAware mode queries external carbon intensity API (stub)</li>
              <li>Integration with kernel scheduler for workload placement</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Carbon-Aware Scheduling</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Scheduler hint: prefer low-carbon windows for batch workloads</li>
              <li>Carbon intensity provider interface (mock + real implementations)</li>
              <li>Workload classification: latency-sensitive vs batch</li>
              <li>Policy: shift batch jobs to cleaner energy windows</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tradeoffs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 className="font-semibold text-green-400 mb-2">Benefits</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>Lock-free = predictable latency, works in IRQ</li>
                  <li>Bounded memory, no allocation in hot path</li>
                  <li>Enables green computing research</li>
                </ul>
              </div>
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                <h4 className="font-semibold text-amber-400 mb-2">Costs</h4>
                <ul className="space-y-1 text-sm text-neutral-300">
                  <li>ABA problem risk on indices</li>
                  <li>Overwrite semantics lose oldest data</li>
                  <li>Carbon API dependency for real deployment</li>
                  <li>No formal verification of lock-free correctness</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Source: crates/energy-telemetry/src/ (ring_buffer.rs, dvfs.rs, carbon.rs)</li>
              <li>No hardware RAPL/MSR integration yet (simulation only)</li>
              <li>Carbon intensity provider is mocked</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSEnergy;