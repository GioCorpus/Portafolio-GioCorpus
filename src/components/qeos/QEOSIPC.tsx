import { cn } from '../../lib/utils';

export function QEOSIPC() {
  return (
    <section id="ipc" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="ipc-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="ipc-heading" className="mb-4 text-3xl font-bold text-white">IPC & Service Framework</h2>
          <p className="text-neutral-400 max-w-3xl">Kernel-level channels + service-framework IPC with lifecycle, bus, and gateway in system-core.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Implemented</h3>
            <p className="text-neutral-300">Both kernel IPC (channels, endpoints, messages) and service framework (system-core) exist with tests.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Kernel IPC (kernel/src/ipc/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>channel.rs — Message channels with send/recv</li>
              <li>endpoint.rs — Communication endpoints</li>
              <li>message.rs — Message types and serialization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Service Framework (crates/system-core/src/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>service.rs — Service trait (initialize, start, stop, status, health)</li>
              <li>service_bus.rs — Message bus for service communication</li>
              <li>service_gateway.rs — Gateway for external access</li>
              <li>manager.rs — Service lifecycle manager</li>
              <li>services.rs — Service registry</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Architecture</h3>
            <pre className="bg-neutral-950 border border-neutral-800 rounded-lg p-4 font-mono text-sm text-neutral-300 overflow-x-auto">
{`Service
   ↓
IPC / Service Bus (channels + bus)
   ↓
Kernel / Platform Capability`}
            </pre>
            <p className="text-neutral-400 text-sm mt-2">Failure isolation via capability boundaries. Services communicate via typed channels.</p>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Kernel IPC: kernel/src/ipc/</li>
              <li>Service framework: crates/system-core/src/</li>
              <li>Tests: kernel/tests/ (IPC boundary contracts)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSIPC;