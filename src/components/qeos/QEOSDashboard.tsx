import { cn } from '../../lib/utils';

export function QEOSDashboard() {
  return (
    <section id="dashboard" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="dashboard-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="dashboard-heading" className="mb-4 text-3xl font-bold text-white">QEOS Dashboard (Frontend)</h2>
          <p className="text-neutral-400 max-w-3xl">React 18 + TypeScript + Tauri desktop app for system observability and quantum job management.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Implemented</h3>
            <p className="text-neutral-300">Frontend in apps/qeos-dashboard/ with Tauri for native desktop. Connects to system-core via IPC.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Tech Stack</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>React 18 + TypeScript (strict mode)</li>
              <li>Vite 5 (build, HMR)</li>
              <li>Tauri 2 (Rust backend, native desktop)</li>
              <li>Tailwind CSS + shadcn/ui components</li>
              <li>TanStack Query (server state)</li>
              <li>Zustand (client state)</li>
              <li>Recharts (telemetry visualization)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Key Pages</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>System Overview — CPU, memory, thermal, power gauges</li>
              <li>Quantum Jobs — Submit, monitor, visualize circuits</li>
              <li>Energy Analytics — Power trends, carbon intensity, DVFS</li>
              <li>Service Mesh — Service graph, health, IPC traces</li>
              <li>Security — Capability audit, identity tokens, RBAC</li>
              <li>Settings — Backend selection, simulator config</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">IPC Integration</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Tauri commands invoke kernel/services via system-core</li>
              <li>Capability tokens passed from identity-service</li>
              <li>Real-time telemetry via WebSocket / Tauri events</li>
              <li>Quantum job submission through quantum-runtime service</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Source: apps/qeos-dashboard/src/</li>
              <li>CI: pnpm install, tsc, eslint, vite build</li>
              <li>Tauri config: apps/qeos-dashboard/src-tauri/</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSDashboard;