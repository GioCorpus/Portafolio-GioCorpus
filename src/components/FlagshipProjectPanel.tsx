import { getProjectTheme, statusVariants } from '../lib/projectTheme';
import { Button } from './ui/Button';
import { Github, ArrowRight, ShieldCheck, Code2, FlaskConical, Clock, Archive } from 'lucide-react';
import { cn } from '../lib/utils';
import { QEOSArchitecturePreview } from './visuals/QEOSArchitecturePreview';
import { TamayoPipelinePreview } from './visuals/TamayoPipelinePreview';
import { WitchCraftSystemsPreview } from './visuals/WitchCraftSystemsPreview';

import type { Project, ProjectStatus } from '../../types';

const visualizationComponents: Record<string, React.ComponentType> = {
  'qeos': QEOSArchitecturePreview,
  'tamayo': TamayoPipelinePreview,
  'witchcraft': WitchCraftSystemsPreview,
};

const statusIcons: Record<ProjectStatus, React.ComponentType<{ className?: string }>> = {
  implemented: ShieldCheck,
  prototype: Code2,
  experimental: FlaskConical,
  research: FlaskConical,
  concept: Code2,
  roadmap: Archive,
};

function getVisualizationComponent(theme: string) {
  return visualizationComponents[theme] || null;
}

interface FlagshipProjectPanelProps {
  project: Project;
  index: number;
}

export function FlagshipProjectPanel({ project, index }: FlagshipProjectPanelProps) {
  const theme = getProjectTheme(project.theme);
  const VisualizationComponent = getVisualizationComponent(project.theme);
  const StatusIcon = statusIcons[project.status];
  const statusVariant = statusVariants[project.status];

  return (
    <article className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-accent)]/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative border border-white/5 rounded-2xl overflow-hidden glow-border">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative p-8 lg:p-12 min-h-[480px] flex flex-col">
            <div className="mb-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                <span>FEATURED_{index + 1}</span>
                <span className="h-px w-12 bg-gradient-to-r from-accent-cyan to-transparent" aria-hidden="true" />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <Badge variant={statusVariant}>{project.status}</Badge>
                <span className="font-mono text-xs text-dark-500">{project.category}</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-white mb-4 lg:text-3xl">{project.name}</h3>
            <p className="text-dark-400 leading-7 mb-6 flex-1">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.slice(0, 8).map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-dark-300">{tech}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.repository && (
                <Button variant="outline" size="sm" onClick={() => window.open(project.repository, '_blank')} aria-label={`View ${project.name} on GitHub`}>
                  <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                  Code
                </Button>
              )}
              {project.demoUrl && (
                <Button variant="outline" size="sm" onClick={() => window.open(project.demoUrl, '_blank')} aria-label={`View ${project.name} demo`}>
                  <ArrowRight className="w-4 h-4 mr-2" aria-hidden="true" />
                  Live Demo
                </Button>
              )}
            </div>
          </div>

          <div className="relative p-6 lg:p-8 bg-white/[0.01] min-h-[480px]">
            {VisualizationComponent && (
              <div className="w-full h-full">
                <VisualizationComponent />
              </div>
            )}
            {!VisualizationComponent && (
              <div className="w-full h-full flex items-center justify-center text-dark-500 font-mono text-sm">
                Visualization for {project.theme} coming soon
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function Badge({ variant, children }: { variant: string; children: React.ReactNode }) {
  const variants = {
    implemented: 'bg-accent-green/20 text-accent-green border-accent-green/30',
    prototype: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
    experimental: 'bg-accent-amber/20 text-accent-amber border-accent-amber/30',
    research: 'bg-accent-violet/20 text-accent-violet border-accent-violet/30',
    concept: 'bg-accent-cyan/20 text-accent-cyan border-accent-cyan/30',
    roadmap: 'bg-dark-500/20 text-dark-400 border-dark-500/30',
  };
  return (
    <span className={`px-2 py-0.5 text-xs font-mono rounded border ${variants[variant] || variants.prototype}`}>
      {children}
    </span>
  );
}
