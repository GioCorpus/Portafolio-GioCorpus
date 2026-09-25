import { engineeringPhilosophy } from '../../data/philosophy';
import { cn } from '../../lib/utils';
import { Terminal, Zap, Shield, Layers, GitBranch, BookOpen, Compass, Target } from 'lucide-react';

const iconMap = {
  'Evidence Over Hype': Terminal,
  'First-Principles Understanding': Zap,
  'Prototypes ≠ Production': Shield,
  'Incremental Delivery': Layers,
  'Architectural Decision Records': GitBranch,
  'Test Assumptions Early': BookOpen,
  'Continuous Learning Loop': Compass,
  'Domain-Driven Engineering': Target,
} as const;

const colorMap = {
  'Evidence Over Hype': 'accent-cyan',
  'First-Principles Understanding': 'accent-green',
  'Prototypes ≠ Production': 'accent-amber',
  'Incremental Delivery': 'accent-violet',
  'Architectural Decision Records': 'accent-cyan',
  'Test Assumptions Early': 'accent-green',
  'Continuous Learning Loop': 'accent-amber',
  'Domain-Driven Engineering': 'accent-violet',
} as const;

export function AboutPhilosophy() {
  return (
    <section id="about-philosophy" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">03 / Engineering Philosophy</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Principles That Guide My Work</h2>
          <p className="mt-4 leading-7 text-dark-400">
            These principles have emerged from two decades of building systems that must work — in production, under load, with real constraints.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringPhilosophy.map((point, index) => {
            const Icon = iconMap[point.title as keyof typeof iconMap] || Terminal;
            const color = colorMap[point.title as keyof typeof colorMap] || 'accent-cyan';
            return (
              <article key={index} className={cn('glass-panel rounded-xl p-6 border border-white/5 group relative overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/10')}>
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--point-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ '--point-color': `var(--color-${color})` }} aria-hidden="true" />
                <div className="relative z-10">
                  <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-4', `bg-${color}/10`)} aria-hidden="true">
                    <Icon className={cn('w-5 h-5', `text-${color}`)} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-sm text-dark-400 leading-relaxed">{point.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutPhilosophy;