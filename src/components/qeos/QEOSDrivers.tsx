import { cn } from '../../lib/utils';

export function QEOSDrivers() {
  return (
    <section id="drivers" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="drivers-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="drivers-heading" className="mb-4 text-3xl font-bold text-white">Drivers</h2>
          <p className="text-neutral-400 max-w-3xl">PCIe enumeration, DMA, interrupts, IOMMU, device lifecycle, and MMIO in kernel driver subsystem.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">Complete driver framework in kernel/src/driver/ with 9 modules. No physical hardware validation yet.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Driver Modules (kernel/src/driver/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>pci.rs — PCI/PCIe enumeration, BAR mapping</li>
              <li>dma.rs — DMA buffer management, descriptor rings</li>
              <li>interrupt.rs — Interrupt handling, MSI/MSI-X</li>
              <li>iommu.rs — IOMMU support for DMA protection</li>
              <li>lifecycle.rs — Device lifecycle management</li>
              <li>mmio.rs — Memory-mapped I/O access</li>
              <li>bus.rs — Bus abstraction layer</li>
              <li>device.rs — Generic device structure</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">PCIe / DMA Capabilities</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>PCI configuration space access</li>
              <li>BAR (Base Address Register) mapping</li>
              <li>DMA buffer allocation and mapping</li>
              <li>Descriptor ring setup for device queues</li>
              <li>IOMMU domain management for DMA isolation</li>
              <li>MSI/MSI-X interrupt allocation</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Source: kernel/src/driver/ (9 modules)</li>
              <li>HAL PCI: crates/hardware-abstraction/src/pci.rs</li>
              <li>No physical device validation documented</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSDrivers;