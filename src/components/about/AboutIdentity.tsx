import { cn } from '../../lib/utils';
import { Cpu, Code, Globe, Server, Layers, Zap, Network, Database } from 'lucide-react';

const domains = [
  {
    icon: Cpu,
    color: 'accent-cyan',
    title: 'Systems Engineering',
    description: 'Kernel development, memory management, hardware abstraction, concurrency primitives, and low-level systems programming in Rust and C++.',
    evidence: 'QuantumEnergyOS V.04',
    technologies: ['Rust', 'C++', 'Linux', 'UEFI', 'QEMU', 'Memory Management', 'IPC'],
  },
  {
    icon: Code,
    color: 'accent-green',
    title: 'Backend & Distributed Systems',
    description: 'Service architecture, API design, database systems, authentication, containerization, and cloud infrastructure.',
    evidence: 'QuantumEnergyOS Services · WitchCraft Platform',
    technologies: ['Python', 'FastAPI', 'Flask', 'MongoDB', 'PostgreSQL', 'Docker', 'GitHub Actions'],
  },
  {
    icon: Globe,
    color: 'accent-violet',
    title: 'Engine Technology',
    description: 'Real-time rendering, animation systems, scene graphs, asset pipelines, and editor tooling for 2.5D and 3D engines.',
    evidence: 'Tamayo 2.5D Engine',
    technologies: ['C++20', 'CMake', 'OpenGL', 'Animation Systems', 'Timeline Editor', 'Layer Composition'],
  },
  {
    icon: Server,
    color: 'accent-amber',
    title: 'Frontend & Developer Tools',
    description: 'Modern React/TypeScript applications, build systems, component libraries, and developer experience tooling.',
    evidence: 'WitchCraft Platform · Portfolio',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Tauri', 'Component Libraries'],
  },
{
    icon: Layers,
    color: 'accent-cyan',
    title: 'Graphics & Rendering',
    description: 'Shader development, parallax systems, 2.5D rendering techniques, post-processing, and visual effects pipelines.',
    evidence: 'Tamayo Engine · Portfolio Effects',
    technologies: ['GLSL', 'WebGL', '2.5D Rendering', 'Parallax', 'Post-Processing', 'Shader Development'],
  },
  {
    icon: Zap,
    color: 'accent-green',
    title: 'Research Computing',
    description: 'Quantum algorithms, HPC, scientific computing, distributed consensus, and experimental computing platforms.',
    evidence: 'QuantumEnergyOS · Research Papers',
    technologies: ['Quantum Computing', 'VQE', 'QAOA', 'Distributed Consensus', 'HPC', 'IBM Quantum', 'Rigetti'],
  },
  {
    icon: Network,
    color: 'accent-violet',
    title: 'Networking & Protocols',
    description: 'Custom protocol design, distributed systems communication, service mesh, and network programming.',
    evidence: 'QuantumEnergyOS Networking',
    technologies: ['gRPC', 'Protocol Buffers', 'Custom Protocols', 'Service Mesh', 'Network Programming'],
  },
  {
    icon: Database,
    color: 'accent-amber',
    title: 'Data & Persistence',
    description: 'Database design, query optimization, data modeling, and persistence strategies for systems and applications.',
    evidence: 'WitchCraft Platform · QuantumEnergyOS',
    technologies: ['MongoDB', 'SQLite', 'PostgreSQL', 'Data Modeling', 'Query Optimization', 'Persistence'],
  },
] as const;

export function AboutIdentity() {
  return (
    <section id="about-identity" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">04 / Engineering Identity</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Domains of Expertise</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Eight interconnected domains built through research, production systems, and continuous experimentation.
            Each domain has a flagship project demonstrating depth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {domains.map((domain, index) => (
            <article key={index} className={cn('glass-panel rounded-xl p-6 border border-white/5 group relative overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/10')}>
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--domain-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ '--domain-color': `var(--color-${domain.color})` }} aria-hidden="true" />
              <div className="relative z-10">
                <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center mb-4', `bg-${domain.color}/10`)} aria-hidden="true">
                  <domain.icon className={cn('w-5 h-5', `text-${domain.color}`)} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{domain.title}</h3>
                <p className="text-sm text-dark-400 leading-relaxed mb-3">{domain.description}</p>
                <div className="mb-3">
                  <span className="font-mono text-xs text-accent-cyan/70">Flagship: </span>
                  <span className="text-sm text-dark-300">{domain.evidence}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {domain.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-dark-500">
                      {tech}
                    </span>
                  ))}
                  {domain.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-dark-500">
                      +{domain.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutIdentity;
