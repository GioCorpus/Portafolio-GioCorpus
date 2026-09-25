import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';

const part1 = `import { ResearchHero } from '../components/research/ResearchHero';
import { ResearchPhilosophy } from '../components/research/ResearchPhilosophy';
import { ResearchMap } from '../components/research/ResearchMap';
import { ResearchTopicCard } from '../components/research/ResearchTopicCard';
import { ExperimentCard } from '../components/research/ExperimentCard';
import { researchTopics, researchExperiments } from '../data/research';
import { cn } from '../lib/utils';

export function ResearchPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <ResearchHero />
      <ResearchPhilosophy />
      <section id="qeos-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="qeos-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="qeos-research-heading" className="mb-4 text-3xl font-bold text-white">QEOS Systems Research</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Core operating system research: capability-based microkernel, memory safety, hardware abstraction, and driver frameworks.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug.startsWith('qeos-') && !t.slug.includes('majorana') && !t.slug.includes('qpu') && !t.slug.includes('energy') && !t.slug.includes('gpu') && !t.slug.includes('distributed'))
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <section id="qpu-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="qpu-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="qpu-research-heading" className="mb-4 text-3xl font-bold text-white">QPU Runtime & Quantum Simulation</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Quantum runtime abstraction with multiple backend model (Simulation, Emulation, Remote, Physical), error correction, and Majorana simulation — all explicitly simulation-only.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-qpu-runtime' || t.slug === 'qeos-majorana-simulation')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <section id="telemetry-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="telemetry-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="telemetry-research-heading" className="mb-4 text-3xl font-bold text-white">Energy Telemetry & Green Scheduling</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Lock-free ring buffers for high-frequency power telemetry, DVFS governor, and carbon-aware scheduling prototypes.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-energy-telemetry')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <section id="compute-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="compute-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="compute-research-heading" className="mb-4 text-3xl font-bold text-white">Heterogeneous Compute Abstraction</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              GPU compute abstraction layer supporting CUDA, HIP, Metal, WebGPU backends. Simulation-first design with hardware backend for CI validation.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-gpu-compute')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>`;

fs.writeFileSync(f, part1);
console.log('Part 1 written');