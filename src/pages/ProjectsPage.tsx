import { projects, getFeaturedProjects, getSelectedProjects } from '../data/projects';
import { ProjectCard } from '../components/Projects';
import { cn } from '../lib/utils';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { SEO } from '../components/SEO';

export function ProjectsPage() {
  const featured = getFeaturedProjects();
  const selected = getSelectedProjects();

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <SEO
        title="Projects | Giovanny Corpus Bernal"
        description="Three flagship research platforms: QuantumEnergyOS V.04, Tamayo 2.5D Engine, WitchCraft: Shamans & Nahuals. Plus selected projects: Quantum Browser, BioCorpus, Quartz5D, WitchCraft Studios."
        path="/projects"
      />
      {/* Hero Section */}
      <section id="projects-hero" className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_70%)]" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">02 / Portfolio</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Featured Work
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-mono text-sm sm:text-base">
              Three flagship research platforms and selected engineering projects spanning quantum computing, graphics engines, and interactive systems.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Projects */}
      <section id="flagship-projects" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24" aria-labelledby="flagship-heading">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center">
            <h2 id="flagship-heading" className="mb-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Flagship Platforms
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Deep-dive case studies for each flagship project — architecture, implementation status, and technical evidence.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section id="selected-projects" className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-neutral-800" aria-labelledby="selected-heading">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center">
            <h2 id="selected-heading" className="mb-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Selected Projects
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Additional research platforms, developer tools, and infrastructure projects.
            </p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {selected.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="selected" />
            ))}
          </div>
        </div>
      </section>

      {/* Repository Links */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 border-t border-neutral-800" aria-labelledby="repos-heading">
        <div className="mx-auto max-w-7xl">
          <header className="mb-12 text-center">
            <h2 id="repos-heading" className="mb-4 font-display text-3xl sm:text-4xl font-bold text-white">
              Repositories
            </h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              project.repository && (
                <a
                  key={project.slug}
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'group flex flex-col items-center gap-3 p-6 rounded-xl border transition-all duration-300',
                    'bg-neutral-900/50 border-neutral-800 hover:border-accent-cyan/30 hover:bg-accent-cyan/5'
                  )}
                  aria-label={`View ${project.name} repository on GitHub`}
                >
                  <div className="flex items-center justify-center gap-2 w-12 h-12 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 group-hover:bg-accent-cyan/20 group-hover:border-accent-cyan/40 transition-colors">
                    <FolderGit2 className="w-6 h-6 text-accent-cyan" aria-hidden="true" />
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-sm font-medium text-white group-hover:text-accent-cyan transition-colors">
                      {project.shortName || project.name}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">{project.category}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-accent-cyan transition-colors" aria-hidden="true" />
                </a>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;