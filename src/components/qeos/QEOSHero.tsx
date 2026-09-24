import { cn } from '../../lib/utils';
import { Github, ExternalLink, ShieldCheck, Code2, FlaskConical, Microscope, Lightbulb, Flag } from 'lucide-react';
import { getProjectTheme, statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  const icons: Record<ProjectStatus, React.ComponentType<{ className?: string }>> = {
    implemented: ShieldCheck,
    prototype: Code2,
    experimental: FlaskConical,
    research: Microscope,
    concept: Lightbulb,
    roadmap: Flag,
  };
  const Icon = icons[status] || ShieldCheck;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border',
        variant.bgColor,
        variant.borderColor
      )}
      style={{ color: variant.color }}
    >
      <Icon className="w-3 h-3" aria-hidden="true" />
      {variant.label}
    </span>
  );
}

export function QEOSHero() {
  const theme = getProjectTheme('qeos');
  const repoUrl = 'https://github.com/GioCorpus/QuantumEnergyOS-V.04';

  return (
    <header
      id="hero"
      className={cn(
        'relative w-full py-20 sm:py-28 lg:py-32',
        'before:absolute before:inset-0 before:bg-gradient-to-b',
        `before:from-[${theme.accentColorMuted}] before:to-transparent`
      )}
      style={{ background: theme.backgroundGradient }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
            QuantumEnergyOS V.04
          </span>
          <span className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-400">
            Experimental OS & Research Platform
          </span>
        </div>

        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          QuantumEnergyOS V.04
        </h1>

        <p className="mb-8 max-w-3xl text-lg sm:text-xl text-neutral-300 leading-relaxed">
          A ground-up systems research project exploring operating-system architecture, low-level Rust,
          hardware abstraction, telemetry, distributed services, scientific computing and emerging
          quantum-computing concepts.
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <StatusBadge status="prototype" />
          <span className="text-sm text-neutral-500">Overall Maturity</span>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400">Role:</span>
            <span>Founder & Principal Architect</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400">Period:</span>
            <span>2024 — Present</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400">Primary Language:</span>
            <span>Rust</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-cyan-400">Domain:</span>
            <span>Systems Engineering</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
              'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
            )}
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            View Repository
          </a>
          <a
            href="#architecture"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
              'bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700'
            )}
          >
            Explore Architecture
          </a>
          <a
            href="#status"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
              'bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700'
            )}
          >
            Technical Evidence
          </a>
        </div>
      </div>
    </header>
  );
}

export default QEOSHero;