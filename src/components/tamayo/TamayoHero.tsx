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

export function TamayoHero() {
  const theme = getProjectTheme('tamayo');
  const repoUrl = 'https://github.com/GioCorpus/Tamayo';

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
          <span className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-violet-400/30 bg-violet-400/10 text-violet-400">
            Tamayo 2.5D Engine
          </span>
          <span className="px-3 py-1 text-xs font-mono font-medium rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
            Graphics · Engine Technology · Animation Systems
          </span>
        </div>

        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          Tamayo 2.5D Engine
        </h1>

        <p className="mb-8 max-w-3xl text-lg sm:text-xl text-neutral-300 leading-relaxed">
          An open-source 2.5D animation and rendering project for games,
          motion design and interactive narratives.
          Tamayo explores the space between traditional 2D animation and
          3D rendering through depth-aware layers, parallax, lighting and
          timeline-based animation.
        </p>

        <div className="mb-8 flex flex-wrap items-center gap-4">
          <StatusBadge status="prototype" />
          <span className="text-sm text-neutral-500">Overall Maturity</span>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="font-mono text-violet-400">Role:</span>
            <span>Engine Architect & Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-violet-400">Period:</span>
            <span>2024 — Present</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-violet-400">Primary Languages:</span>
            <span>C++20, C# (Unity)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-violet-400">Domain:</span>
            <span>Graphics & Engine Technology</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
              'bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20'
            )}
            aria-label="View Tamayo repository on GitHub"
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
            href="#implementation-matrix"
            className={cn(
              'inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all',
              'bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700'
            )}
          >
            Implementation Status
          </a>
        </div>
      </div>
    </header>
  );
}

export default TamayoHero;
