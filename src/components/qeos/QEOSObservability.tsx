import { cn } from '../../lib/utils';

export function QEOSObservability() {
  return (
    <section id="observability" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="observability-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="observability-heading" className="mb-4 text-3xl font-bold text-white">Observability: Tracing, Metrics, Logging</h2>
          <p className="text-neutral-400 max-w-3xl">Structured logging, distributed tracing, and metrics collection across kernel and services.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">tracing + tracing-subscriber in services. Kernel uses custom logging. No centralized metrics backend yet.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tracing (tracing crate)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Services: system-core, identity-service, quantum-runtime use tracing</li>
              <li>Spans for IPC calls, service lifecycle, quantum job execution</li>
              <li>Context propagation via capability tokens</li>
              <li>Kernel: custom lightweight logging (no std, no alloc in some contexts)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Metrics</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Prometheus-compatible counters/gauges in services (metrics crate)</li>
              <li>Kernel: ring buffer telemetry exported via energy-telemetry service</li>
              <li>No centralized metrics storage (Prometheus/Grafana) deployed</li>
              <li>CI does not run metrics collection</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Logging</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Structured JSON logs in services (tracing-subscriber fmt::json)</li>
              <li>Kernel: serial/framebuffer logging with severity levels</li>
              <li>Log levels: ERROR, WARN, INFO, DEBUG, TRACE</li>
              <li>No log aggregation (Loki/Elastic) configured</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Gaps</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>No distributed trace context propagation across kernel/service boundary</li>
              <li>No centralized metrics storage or alerting</li>
              <li>No log aggregation or querying UI</li>
              <li>Kernel tracing limited by no_std constraints</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>tracing in Cargo.toml for service crates</li>
              <li>kernel/src/logging.rs (custom)</li>
              <li>No Prometheus, Grafana, Loki configs in repo</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSObservability;