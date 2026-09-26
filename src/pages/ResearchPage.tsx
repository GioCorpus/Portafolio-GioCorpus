import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchPhilosophy } from '../components/research/ResearchPhilosophy';
import { ResearchMap } from '../components/research/ResearchMap';
import { ResearchTopicCard } from '../components/research/ResearchTopicCard';
import { ExperimentCard } from '../components/research/ExperimentCard';
import { researchTopics, researchExperiments } from '../data/research';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

export function ResearchPage() {
  return (
    <>
      <SEO
        title="Research | Giovanny Corpus Bernal"
        description="Systems research portfolio: capability-based OS architecture, quantum runtime abstraction, energy telemetry, GPU compute, and distributed systems."
        path="/research"
      />
      <div className="min-h-screen bg-neutral-950 text-white">
        <ResearchHero />
        <ResearchPhilosophy />
        <section id="qeos-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="qeos-research-heading">
          <div className="max-w-7xl mx-auto px-4">
            <header className="mb-12 text-center">
              <h2 id="qeos-research-heading" className="mb-4 text-3xl font-bold text-white">QEOS Systems Research</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">Core operating system research.</p>
            </header>
            <div className="space-y-8">
              {researchTopics.filter(t => t.slug.startsWith('qeos-') && !t.slug.includes('majorana') && !t.slug.includes('qpu') && !t.slug.includes('energy') && !t.slug.includes('gpu') && !t.slug.includes('distributed')).map((topic) => (<ResearchTopicCard key={topic.slug} topic={topic} />))}
            </div>
          </div>
        </section>
        <section id="repositories" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="repos-heading">
          <div className="max-w-7xl mx-auto px-4">
            <header className="mb-12 text-center"><h2 id="repos-heading" className="mb-4 text-3xl font-bold text-white">Repositories & References</h2></header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6"><h3 className="font-semibold text-white mb-4">Project Repositories</h3><ul className="space-y-3 text-sm"><li className="flex items-center gap-3"><span className="font-mono text-cyan-400">QEOS:</span><a href="https://github.com/GioCorpus/QuantumEnergyOS-V.04" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/GioCorpus/QuantumEnergyOS-V.04</a></li><li className="flex items-center gap-3"><span className="font-mono text-cyan-400">Quartz5D:</span><a href="https://github.com/GioCorpus/Quartz5D" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/GioCorpus/Quartz5D</a></li></ul></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ResearchPage;