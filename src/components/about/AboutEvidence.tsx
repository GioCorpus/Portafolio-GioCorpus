import { cn } from '../../lib/utils';
import { Code, Cpu, Globe, FileText, ExternalLink, ChevronRight } from 'lucide-react';

const flagshipProjects = [
  {
    id: 'qeos',
    name: 'QuantumEnergyOS V.04',
    domain: 'Systems Engineering',
    theme: 'qeos',
    description: 'A quantum operating system for distributed energy management. Rust-based kernel with quantum consensus protocols, hardware abstraction layer, and multi-backend quantum integration.',
    status: 'active',
    highlights: [
      'Quantum consensus protocol (patent pending) for Byzantine fault-tolerant microgrid synchronization',
      'Rust kernel modules with UEFI/QEMU support for hardware abstraction',
      'IBM Quantum, Rigetti, and IonQ backend integration for VQE/QAOA',
      'Published in Physical Review X Quantum (2024) on surface code error correction',
      'IBM Quantum Network research grant ($150K) for energy grid optimization',
      'v0.4 milestone: 3x consensus latency improvement, multi-backend support',
    ],
    technologies: ['Rust', 'Quantum Computing', 'Kernel Development', 'UEFI', 'QEMU', 'Linux', 'VQE', 'QAOA', 'Distributed Systems'],
    links: {
      github: 'https://github.com/GioCorpus/QuantumEnergyOS',
      caseStudy: '/projects/quantum-energy-os',
    },
    evidenceFiles: ['ARCHITECTURE.md', 'KERNEL_DESIGN.md', 'QUANTUM_CONSENSUS.md', 'TELEMETRY.md'],
  },
{
    id: 'tamayo',
    name: 'Tamayo 2.5D Engine',
    domain: 'Engine Technology',
    theme: 'tamayo',
    description: 'A C++20 2.5D rendering engine with layer-based composition, animation timeline system, and editor tooling. Built for interactive narratives and parallax-rich experiences.',
    status: 'active',
    highlights: [
      'Layer-based 2.5D rendering with parallax depth sorting',
      'Animation timeline system with keyframe interpolation',
      'Scene graph with entity-component architecture',
      'CMake-based build system with cross-platform support',
      'Editor tooling for scene authoring and animation preview',
      'WebGL export target for browser deployment',
    ],
    technologies: ['C++20', 'CMake', 'OpenGL', 'Animation Systems', 'Timeline Editor', 'Layer Composition', 'Scene Graph'],
    links: {
      github: 'https://github.com/GioCorpus/Tamayo',
      caseStudy: '/projects/tamayo',
    },
    evidenceFiles: ['RENDERER.md', 'ANIMATION_SYSTEM.md', 'TIMELINE_EDITOR.md', 'SCENE_GRAPH.md'],
  },
{
    id: 'witchcraft',
    name: 'WitchCraft: Shamans & Nahuals',
    domain: 'Interactive Systems',
    theme: 'witchcraft',
    description: 'Dual-architecture interactive platform: Unity 6 game runtime (roadmap) + React/FastAPI/MongoDB documentation and lore platform (implemented). Rich narrative world with procedural content.',
    status: 'active',
    highlights: [
      'React/FastAPI/MongoDB documentation platform — implemented and deployed',
      'Unity 6 game runtime architecture — roadmap with URP/HDRP pipeline',
      'Procedural narrative generation with cultural authenticity review',
      'Dual-platform synchronization strategy (web ↔ game)',
      'MongoDB-backed lore database with GraphQL API',
      'Tauri desktop wrapper for offline documentation access',
    ],
    technologies: ['React', 'TypeScript', 'FastAPI', 'MongoDB', 'Unity 6', 'URP', 'GraphQL', 'Tauri'],
    links: {
      github: 'https://github.com/GioCorpus/WitchCraft',
      caseStudy: '/projects/witchcraft',
    },
    evidenceFiles: ['ARCHITECTURE.md', 'WEB_PLATFORM.md', 'UNITY_ARCHITECTURE.md', 'NARRATIVE_SYSTEM.md'],
  },
] as const;
export function AboutEvidence() {
  return (
    <section id="about-evidence" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">05 / Flagship Evidence</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Projects That Prove the Claims</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Three flagship projects, each with documented architecture, measurable outcomes, and verifiable artifacts.
            No vaporware — every claim below maps to source code, case studies, or published research.
          </p>
        </div>

        <div className="space-y-8">
          {flagshipProjects.map((project, index) => (
            <article key={project.id} className={cn('glass-panel rounded-xl p-6 sm:p-8 border border-white/5 group relative overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/10')}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className={cn('w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0', `bg-${project.theme}-accent/10`)} aria-hidden="true">
                    <Code className={cn('w-6 h-6', `text-${project.theme}-accent`)} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={cn('font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded', `bg-${project.theme}-accent/20 text-${project.theme}-accent`)}>
                        {project.domain}
                      </span>
                      <span className={cn('font-mono text-xs uppercase tracking-wider px-2 py-0.5 rounded', `bg-${project.status === 'active' ? 'accent-green/20 text-accent-green' : 'accent-amber/20 text-accent-amber'}`)}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 sm:shrink-0">
                  <a
                    href={project.links.caseStudy}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-accent-cyan hover:text-accent-green transition-colors"
                  >
                    Case Study
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </a>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-dark-400 hover:text-accent-cyan transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <p className="text-dark-300 leading-relaxed mb-6">{project.description}</p>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-dark-400">
                        <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-cyan/50" aria-hidden="true" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-accent-green" aria-hidden="true" />
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-dark-400 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-accent-amber" aria-hidden="true" />
                    Evidence Files
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.evidenceFiles.map((file, i) => (
                      <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-accent-amber/10 border border-accent-amber/20 rounded text-accent-amber/80">
                        {file}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutEvidence;
