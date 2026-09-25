import { cn } from '../../lib/utils';
import { researchPhilosophy } from '../../data/research';

export function ResearchPhilosophy() {
  return (
    <section id="philosophy" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="philosophy-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 id="philosophy-heading" className="mb-4 text-3xl font-bold text-white">Research Philosophy</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Principles that guide how we separate evidence from hypothesis, and implementation from speculation.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchPhilosophy.map((principle, index) => (
            <article key={index} className={cn('p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg')}>
              <h3 className="font-semibold text-white mb-2 text-lg">{index + 1}.</h3>
              <p className="text-neutral-300 leading-relaxed">{principle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchPhilosophy;