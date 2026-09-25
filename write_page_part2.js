import fs from 'fs';
const f = 'c:\\Users\\HP\\Documents\\Documentos Personales GACB\\Demo\\GioCorpus Portafolio\\giovanny-portfolio\\src\\pages\\ResearchPage.tsx';

const part2 = `
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
      </section>`;

let c = fs.readFileSync(f, 'utf8');
c += part2;
fs.writeFileSync(f, c);
console.log('Part 2 appended');