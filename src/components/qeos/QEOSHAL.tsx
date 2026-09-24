import { cn } from '../../lib/utils';

export function QEOSHAL() {
  return (
    <section id="hal" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="hal-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="hal-heading" className="mb-4 text-3xl font-bold text-white">HAL & Device Lifecycle</h2>
          <p className="text-neutral-400 max-w-3xl">Two-layer HAL: minimal kernel HAL + comprehensive hardware-abstraction crate with typed device interfaces.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">Kernel HAL is minimal (mod.rs). Rich abstraction in crates/hardware-abstraction/ with 10 device modules.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Hardware Abstraction Crate (crates/hardware-abstraction/src/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>cpu.rs — CPU abstraction</li>
              <li>device.rs — HardwareDevice trait</li>
              <li>gpu.rs — GPU abstraction</li>
              <li>nvme.rs — NVMe storage</li>
              <li>pci.rs — PCI enumeration</li>
              <li>power.rs — Power management</li>
              <li>quantum.rs — Quantum backend abstraction</li>
              <li>spi.rs — SPI interface</li>
              <li>telemetry.rs — Telemetry device abstraction</li>
              <li>error.rs — Error types</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Device Trait</h3>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`pub trait HardwareDevice {
  fn identify(&self) -> DeviceInfo;
  fn initialize(&mut self) -> Result<(), HardwareError>;
  fn health(&self) -> DeviceHealth;
}`}
            </pre>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Device Lifecycle</h3>
            <p className="text-neutral-300">Managed in kernel/src/driver/lifecycle.rs: Discover → Register → Initialize → Start → Operate → Suspend/Recover → Stop</p>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Kernel HAL: kernel/src/hal/mod.rs</li>
              <li>Hardware abstraction: crates/hardware-abstraction/src/ (10 modules)</li>
              <li>Lifecycle: kernel/src/driver/lifecycle.rs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSHAL;