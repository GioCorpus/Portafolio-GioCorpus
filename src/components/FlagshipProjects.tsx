import { getFeaturedProjects } from '../data';
import { getProjectTheme, statusVariants } from '../lib/projectTheme';
import { Button } from '../ui/Button';
import { ExternalLink, Github, ArrowRight, ShieldCheck, Code2, FlaskConical, Clock, Archive } from 'lucide-react';
import { cn } from '../../lib/utils';
import { QEOSArchitecturePreview } from './visuals/QEOSArchitecturePreview';
import { TamayoPipelinePreview } from './visuals/TamayoPipelinePreview';
import { WitchCraftSystemsPreview } from './visuals/WitchCraftSystemsPreview';
import { FlagshipProjectPanel } from './FlagshipProjectPanel';

const visualizationComponents: Record<string, React.ComponentType> = {
  'qeos': QEOSArchitecturePreview,
  'tamayo': TamayoPipelinePreview,
  'witchcraft': WitchCraftSystemsPreview,
};

const statusIcons = {
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

export function FlagshipProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="featured-work" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">01 / Featured Engineering Work</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Three Flagship Pillars</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Three projects spanning systems engineering, engine technology and interactive systems.
            Each represents a distinct domain of engineering expertise.
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <FlagshipProjectPanel key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}