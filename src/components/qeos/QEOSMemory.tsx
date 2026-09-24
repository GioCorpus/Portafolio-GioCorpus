import { cn } from '../../lib/utils';

export function QEOSMemory() {
  return (
    <section id="memory" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="memory-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="memory-heading" className="mb-4 text-3xl font-bold text-white">Memory Model</h2>
          <p className="text-neutral-400 max-w-3xl">Typed physical/virtual addresses, multi-level page tables, frame allocator, and memory hardening.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Implemented</h3>
            <p className="text-neutral-300">Complete memory management subsystem in kernel/src/memory/ with 7 source files.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Types</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>PhysAddr, VirtAddr — typed address wrappers</li>
              <li>PhysPage, VirtPage — typed page wrappers</li>
              <li>FrameAllocator — buddy/bitmap frame allocation</li>
              <li>PageTable — multi-level paging (4-level x86_64)</li>
              <li>Mapper — map/unmap with permissions (R/W/X)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Hardening Features</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Canonical address validation on all translations</li>
              <li>NX (No-Execute) enforcement via page permissions</li>
              <li>TLB shootdown coordination</li>
              <li>OOM handling with graceful degradation</li>
              <li>Unsafe contained to page table manipulation</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Source: kernel/src/memory/ (allocator.rs, heap.rs, page_table.rs, physical.rs, virtual_.rs, oom.rs, mod.rs)</li>
              <li>Tests: kernel/tests/ (memory boundary contracts)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSMemory;