import { cn } from '../../lib/utils';

export function ResearchHero() {
  return (
    <section id="research-hero" className={cn('relative py-20 lg:py-32 overflow-hidden')} aria-labelledby="research-hero-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-12 text-center">
          <h1 id="research-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Research & Experimental Computing
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Systems software, heterogeneous computing, experimental runtime architectures and emerging computing models through software prototypes, simulation and documented engineering experiments.
          </p>
        </header>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
          <span className="flex items-center gap-1">
            <span className="px-2 py-0.5 bg-neutral-800 border border-neutral-700 rounded font-mono">Implemented</span>
            <span className="text-neutral-600">Kernel, Memory, IPC</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded font-mono">Prototype</span>
            <span className="text-neutral-600">HAL, Drivers, Telemetry</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded font-mono">Research</span>
            <span className="text-neutral-600">Quantum Runtime, Majorana Sim</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="px-2 py-0.5 bg-slate-500/20 border border-slate-500/30 rounded font-mono">Roadmap</span>
            <span className="text-neutral-600">Distributed, GPU</span>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#6929c4" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#00ff88" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <rect width="1200" height="400" fill="url(#heroGradient)" />
          <g stroke="currentColor" strokeWidth="0.5" opacity="0.3">
            <line x1="0" y1="100" x2="1200" y2="100" stroke="#00d4ff" />
            <line x1="0" y1="250" x2="1200" y2="250" stroke="#6929c4" />
            <line x1="0" y1="400" x2="1200" y2="400" stroke="#00ff88" />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default ResearchHero;