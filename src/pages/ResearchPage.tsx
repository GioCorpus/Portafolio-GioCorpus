import { ResearchHero } from '../components/research/ResearchHero';
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
      </section>
      <section id="distributed-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="distributed-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="distributed-research-heading" className="mb-4 text-3xl font-bold text-white">Distributed Capability Systems</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Cross-node capability federation with sealed capabilities, delegation chains, and revocation protocols. Partition-tolerant consensus for capability management.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-distributed-capabilities')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <section id="error-correction-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="error-correction-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="error-correction-research-heading" className="mb-4 text-3xl font-bold text-white">Quantum Error Correction & Mitigation</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Surface code implementation, syndrome extraction circuits, and zero-noise extrapolation for NISQ-era error mitigation.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-error-correction')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <section id="majorana-research" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="majorana-research-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="majorana-research-heading" className="mb-4 text-3xl font-bold text-white">Majorana & Topological Quantum Computing</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Simulation of Majorana zero modes, braiding operations, and topological qubit architectures. Explicitly simulation-only.
            </p>
          </header>
          <div className="space-y-8">
            {researchTopics
              .filter(t => t.slug === 'qeos-majorana-simulation')
              .map((topic) => (
                <ResearchTopicCard key={topic.slug} topic={topic} />
              ))}
          </div>
        </div>
      </section>

      <ResearchMap />

      <section id="experiments" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="experiments-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="experiments-heading" className="mb-4 text-3xl font-bold text-white">Experiments</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Active research questions and validation experiments. Each experiment targets a specific hypothesis with measurable success criteria.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchExperiments.map((experiment) => (
              <ExperimentCard key={experiment.slug} experiment={experiment} />
            ))}
          </div>
        </div>
      </section>
      <section id="evidence" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="evidence-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="evidence-heading" className="mb-4 text-3xl font-bold text-white">Evidence & Validation</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Reproducible benchmarks, formal verification artifacts, and third-party validation of research claims.
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-400 mb-3">Can RAPL/MSR integration achieve real 1-10kHz sampling?</h3>
              <p className="text-neutral-400">Hardware integration of energy telemetry ring buffer with Intel RAPL/MSR interfaces.</p>
            </article>
            <article className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-400 mb-3">What minimal GPU backend enables CI validation?</h3>
              <p className="text-neutral-400">Implementing simulation backend for qeos-gpu-compute to validate abstraction in CI.</p>
            </article>
            <article className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-400 mb-3">What consensus algorithm suits capability revocation?</h3>
              <p className="text-neutral-400">Designing distributed consensus for cross-node capability federation with partition tolerance.</p>
            </article>
            <article className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-cyan-400 mb-3">Can formal verification eliminate ABA risk in ring buffer?</h3>
              <p className="text-neutral-400">Applying model checking (e.g., TLA+, SPIN) to lock-free SPSC ring buffer correctness.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="repositories" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="repos-heading">
        <div className="max-w-7xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h2 id="repos-heading" className="mb-4 text-3xl font-bold text-white">Repositories & References</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">Project Repositories</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400">QEOS:</span>
                  <a href="https://github.com/GioCorpus/QuantumEnergyOS-V.04" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/GioCorpus/QuantumEnergyOS-V.04</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-mono text-cyan-400">Quartz5D:</span>
                  <a href="https://github.com/GioCorpus/Quartz5D" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">github.com/GioCorpus/Quartz5D</a>
                </li>
              </ul>
            </div>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-4">External Scientific References</h3>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li>• Microsoft Quantum Documentation — Majorana/Topological QC</li>
                <li>• Fowler et al. — Surface Code Quantum Error Correction</li>
                <li>• Peruzzo et al. — VQE (Variational Quantum Eigensolver)</li>
                <li>• Farhi et al. — QAOA (Quantum Approximate Optimization Algorithm)</li>
                <li>• Lamport — Lock-Free Ring Buffer Algorithms</li>
                <li>• Intel — RAPL/MSR Power Monitoring Interfaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ResearchPage;