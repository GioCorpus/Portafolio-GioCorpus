import { cn } from '../../lib/utils';
import { ExternalLink } from 'lucide-react';
import type { ResearchTopic, EvidenceType, ResearchMaturity, ScientificClassification } from '../../data/research';

const maturityConfig: Record<ResearchMaturity, { label: string; color: string; bg: string }> = {
  implemented: { label: 'Implemented', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30' },
  prototype: { label: 'Prototype', color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/30' },
  experimental: { label: 'Experimental', color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/30' },
  research: { label: 'Research', color: 'text-purple-400', bg: 'bg-purple-500/20 border-purple-500/30' },
  concept: { label: 'Concept', color: 'text-slate-400', bg: 'bg-slate-500/20 border-slate-500/30' },
  roadmap: { label: 'Roadmap', color: 'text-neutral-500', bg: 'bg-neutral-500/20 border-neutral-500/30' },
};

const evidenceIcons: Record<EvidenceType, string> = {
  'source-code': '💻',
  test: '✅',
  simulation: '🔬',
  benchmark: '📊',
  experiment: '🧪',
  'design-document': '📐',
  'research-note': '📝',
  'external-reference': '🔗',
  roadmap: '🗺️',
};

const classificationLabels: Record<ScientificClassification, string> = {
  observed: 'Observed',
  simulated: 'Simulated',
  'implemented-in-software': 'Implemented in Software',
  hypothesized: 'Hypothesized',
  designed: 'Designed',
  'referenced-from-external-research': 'External Research',
  'not-yet-verified': 'Not Yet Verified',
};

const confidenceColors = {
  high: 'text-green-400',
  medium: 'text-amber-400',
  low: 'text-red-400',
};

interface ResearchTopicCardProps {
  topic: ResearchTopic;
}

export function ResearchTopicCard({ topic }: ResearchTopicCardProps) {
{topic.findings && topic.findings.length > 0 && (
        <details className="mb-4 group">
          <summary className="cursor-pointer text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-2 mb-2">
            <span>Key Findings ({topic.findings.length})</span>
            <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <ul className="ml-4 mt-2 space-y-1 text-sm text-neutral-300 list-disc">
            {topic.findings.map((finding, i) => (
              <li key={i}>{finding}</li>
            ))}
          </ul>
        </details>
      )}

      {topic.limitations && topic.limitations.length > 0 && (
        <details className="mb-4 group">
          <summary className="cursor-pointer text-sm font-medium text-amber-400 hover:text-amber-300 flex items-center gap-2 mb-2">
            <span>Limitations ({topic.limitations.length})</span>
            <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <ul className="ml-4 mt-2 space-y-1 text-sm text-neutral-300 list-disc">
            {topic.limitations.map((limitation, i) => (
              <li key={i}>{limitation}</li>
            ))}
          </ul>
        </details>
      )}

      {topic.futureQuestions && topic.futureQuestions.length > 0 && (
        <details className="mb-4 group">
          <summary className="cursor-pointer text-sm font-medium text-violet-400 hover:text-violet-300 flex items-center gap-2 mb-2">
            <span>Future Questions ({topic.futureQuestions.length})</span>
            <span className="text-neutral-500 group-open:rotate-180 transition-transform">▼</span>
          </summary>
          <ul className="ml-4 mt-2 space-y-1 text-sm text-neutral-300 list-disc">
            {topic.futureQuestions.map((question, i) => (
              <li key={i}>{question}</li>
            ))}
          </ul>
        </details>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800">
        <span className="text-xs text-neutral-500 font-mono">{topic.project}</span>
        {topic.repository && (
          <a
            href={topic.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink className="w-3 h-3" />
            Repository
          </a>
        )}
        {topic.sourceFiles && topic.sourceFiles.length > 0 && (
          <details className="group">
            <summary className="cursor-pointer text-xs text-neutral-500 hover:text-neutral-400 flex items-center gap-1">
              <span>Source Files ({topic.sourceFiles.length})</span>
              <span className="group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <ul className="ml-4 mt-1 space-y-0.5 text-xs text-neutral-400 font-mono list-disc">
              {topic.sourceFiles.map((file, i) => (
                <li key={i}>{file}</li>
              ))}
            </ul>
          </details>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-neutral-800">
        <p className="text-sm text-neutral-400 italic">Portfolio wording: {topic.portfolioSafeWording}</p>
      </div>
    </article>
  );
}

export default ResearchTopicCard;
  const maturity = maturityConfig[topic.maturity];

  return (
    <article className={cn('bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 transition-all duration-200 hover:border-neutral-700')}>
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{topic.title}</h3>
          <span className={cn('px-3 py-1 text-xs font-medium rounded-full border', maturity.bg, maturity.color)}>
            {maturity.label}
          </span>
        </div>
        <div className={cn('px-2 py-1 text-xs font-medium rounded border', confidenceColors[topic.confidence])}>
          Confidence: {topic.confidence}
        </div>
      </div>

      <p className="text-neutral-400 mb-4 leading-relaxed">{topic.summary}</p>

      <div className="space-y-3 mb-4">
        <div>
          <h4 className="text-sm font-semibold text-neutral-300 mb-2">Research Question</h4>
          <p className="text-neutral-400 text-sm italic">"{topic.question}"</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-300 mb-2">Scientific Classification</h4>
          <span className={cn('px-2 py-1 text-xs font-medium rounded bg-neutral-800 border border-neutral-700 text-neutral-300')}>
            {classificationLabels[topic.scientificClassification]}
          </span>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-neutral-300 mb-2">Evidence Types</h4>
          <div className="flex flex-wrap gap-1">
            {topic.evidenceTypes.map((type, i) => (
              <span key={i} className="px-2 py-0.5 text-xs bg-neutral-800 border border-neutral-700 rounded text-neutral-300 flex items-center gap-1">
                {evidenceIcons[type]} {type.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>
      </div>