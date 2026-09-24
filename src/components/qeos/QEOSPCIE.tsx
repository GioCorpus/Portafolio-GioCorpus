import { cn } from '../../lib/utils';

export function QEOSPCIE() {
  return (
    <section id="pcie" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="pcie-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="pcie-heading" className="mb-4 text-3xl font-bold text-white">PCIe & DMA</h2>
          <p className="text-neutral-400 max-w-3xl">PCI enumeration, BAR mapping, DMA buffers, descriptor rings, and IOMMU in kernel driver subsystem.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">Source implementation exists in kernel and hardware-abstraction crate. No physical hardware validation.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Kernel PCIe (kernel/src/driver/pci.rs)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>PCI configuration space access</li>
              <li>Device enumeration and classification</li>
              <li>BAR (Base Address Register) mapping</li>
              <li>MSI/MSI-X interrupt allocation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Kernel DMA (kernel/src/dma/, kernel/src/driver/dma.rs)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>DMA buffer allocation and ownership</li>
              <li>Descriptor ring setup for device queues</li>
              <li>DMA address translation</li>
              <li>IOMMU domain management for isolation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Hardware Abstraction PCI (crates/hardware-abstraction/src/pci.rs)</h3>
            <p className="text-neutral-300">Typed PCI device abstraction for service-layer access without vendor-specific coupling.</p>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Kernel: kernel/src/driver/pci.rs, kernel/src/dma/mod.rs</li>
              <li>HAL: crates/hardware-abstraction/src/pci.rs</li>
              <li>No hardware validation benchmarks published</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSPCIE;