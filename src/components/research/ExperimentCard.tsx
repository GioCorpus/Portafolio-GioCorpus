import { cn } from '../../lib/utils';
import type { ResearchExperiment } from '../../data/research';

const statusConfig = {
  supported: { label: 'Supported', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30' },
  'not-supported': { label: 'Not Supported', color: 'text-red-400', bg: 'bg-red-500/20 border-red-500/30' },
  inconclusive: { label: 'Inconclusive', color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/30' },
  blocked: { label: 'Blocked', color: 'text-slate-400', bg: 'bg-slate-500/20 border-slate-500/30' },
  'not-yet-tested': { label: 'Not Yet Tested', color: 'text-neutral-500', bg: 'bg-neutral-500/20 border-neutral-500/30' },
};

interface ExperimentCardProps {
  experiment: ResearchExperiment;
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  const status = statusConfig[experiment.status];

  return (
    <article className={cn('bg-neutral-900/50 border border-neutral-800 rounded-xl p-6')}>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <h3 className="text-xl font-bold text-white">{experiment.title}</h3>
        <span className={cn('px-3 py-1 text-xs font-medium rounded-full border', status.bg, status.color)}>
          {status.label}
        </span>
      </div>

      <p className="text-neutral-400 mb-4 leading-relaxed">{experiment.question}</p>

      <div className="space-y-3 mb-4 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-neutral-300 mb-1">Setup</h4>
            <p className="text-neutral-400">{experiment.setup}</p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-300 mb-1">Input</h4>
            <p className="text-neutral-400">{experiment.input}</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-300 mb-1">Method</h4>
          <p className="text-neutral-400">{experiment.method}</p>
        </div>

        <div>
          <h4 className="font-semibold text-neutral-300 mb-1">Output</h4>
          <p className="text-neutral-400">{experiment.output}</p>
        </div>

        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
          <h4 className="font-semibold text-green-400 mb-1">Observation</h4>
          <p className="text-neutral-300">{experiment.observation}</p>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
          <h4 className="font-semibold text-amber-400 mb-1">Limitation</h4>
          <p className="text-neutral-300">{experiment.limitation}</p>
        </div>

        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-3">
          <h4 className="font-semibold text-cyan-400 mb-1">Next Step</h4>
          <p className="text-neutral-300">{experiment.nextStep}</p>
        </div>
      </div>
    </article>
  );
}

export default ExperimentCard;