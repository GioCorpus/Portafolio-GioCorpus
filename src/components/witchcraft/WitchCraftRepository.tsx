import { cn } from '../../lib/utils';
import { Github, ExternalLink } from 'lucide-react';

export function WitchCraftRepository() {
  const repoUrl = 'https://github.com/GioCorpus/WitchCraftShamansandNahuals1.0';
  const portfolioRepoUrl = 'https://github.com/GioCorpus/Portafolio-GioCorpus';

  return (
    <section id="repository" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="repository-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="repository-heading" className="mb-4 text-3xl font-bold text-white">Repository & Evidence</h2>
        <p className="text-neutral-400 max-w-3xl">Canonical source repositories and evidence references for all claims made in this case study.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Primary Repository</h3>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3"><Github className="w-6 h-6 text-amber-400" /><div><h4 className="font-semibold text-white">WitchCraftShamansandNahuals1.0</h4><p className="text-sm text-neutral-400">Documentation & Publisher Platform (React + FastAPI + MongoDB)</p></div></div>
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-500/20 transition-colors"><ExternalLink className="w-4 h-4" /> View on GitHub</a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-neutral-400">
              <span>backend/ — FastAPI + Motor + Pydantic</span>
              <span>frontend/ — React 19 + CRA + Tailwind</span>
              <span>MongoDB — 7 collections (seeded)</span>
              <span>tests/ — pytest configured (no tests)</span>
            </div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Missing / 404 Repositories</h3>
          <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">github.com/GioCorpus/WitchCraft</code> — Returns 404</li>
            <li><code className="bg-neutral-800 px-1.5 py-0.5 rounded font-mono">github.com/GioCorpus/WitchCraft-Studios</code> — Returns 404</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Portfolio Repository</h3>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3"><Github className="w-6 h-6 text-cyan-400" /><div><h4 className="font-semibold text-white">Portafolio-GioCorpus</h4><p className="text-sm text-neutral-400">Main portfolio with QEOS, Tamayo, WitchCraft</p></div></div>
              <a href={portfolioRepoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/20 transition-colors">View Portfolio on GitHub</a>
            </div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence Traceability</h3>
          <table className="w-full text-sm"><thead><tr className="border-b border-neutral-700 text-left text-neutral-400"><th className="pb-2 font-mono">Claim</th><th className="pb-2">Source File</th><th className="pb-2">Lines</th></tr></thead>
          <tbody className="divide-y divide-neutral-800 text-neutral-300">
            <tr><td className="py-2 font-mono">Platform: React/FastAPI/MongoDB implemented</td><td className="py-2"><code className="bg-neutral-800 px-1.5 py-0.5 rounded">backend/server.py</code></td><td className="py-2">Full file</td></tr>
            <tr><td className="py-2 font-mono">Frontend: 5 pages, routing, API integration</td><td className="py-2"><code className="bg-neutral-800 px-1.5 py-0.5 rounded">frontend/src/App.js</code>, <code className="bg-neutral-800 px-1.5 py-0.5 rounded">pages/*.js</code></td><td className="py-2">All</td></tr>
            <tr><td className="py-2 font-mono">Game mechanics: 6 systems documented only</td><td className="py-2"><code className="bg-neutral-800 px-1.5 py-0.5 rounded">backend/seed_data.py</code></td><td className="py-2">44-80</td></tr>
            <tr><td className="py-2 font-mono">No Unity project exists</td><td className="py-2">GitHub repo inspection</td><td className="py-2">N/A</td></tr>
            <tr><td className="py-2 font-mono">Legacy UE5.4 references</td><td className="py-2"><code className="bg-neutral-800 px-1.5 py-0.5 rounded">seed_data.py</code>, <code className="bg-neutral-800 px-1.5 py-0.5 rounded">frontend pages</code></td><td className="py-2">Multiple</td></tr>
            <tr><td className="py-2 font-mono">Platform ≠ Game Runtime boundary</td><td className="py-2"><code className="bg-neutral-800 px-1.5 py-0.5 rounded">backend/server.py</code></td><td className="py-2">All</td></tr>
          </tbody></table></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftRepository;