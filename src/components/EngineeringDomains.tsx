import { cn } from '../lib/utils';
import { Cpu, Server, Globe, Code2, Microscope, Zap, Terminal, Database } from 'lucide-react';

const domains = [
  {
    id: 'systems',
    label: 'SYSTEMS ENGINEERING',
    icon: Cpu,
    color: 'accent-cyan',
    technologies: 'Rust · Linux · Kernel Architecture · Low-Level Systems · UEFI · QEMU',
    description: 'Operating system kernels, hardware abstraction layers, memory management, and bare-metal systems programming.',
  },
  {
    id: 'backend',
    label: 'BACKEND & INFRASTRUCTURE',
    icon: Server,
    color: 'accent-green',
    technologies: 'Python · FastAPI · Flask · Node.js · REST APIs · gRPC · Automation · Networking',
    description: 'Scalable backend services, API design, distributed systems, cloud infrastructure, and automation pipelines.',
  },
  {
    id: 'engine-graphics',
    label: 'ENGINE & GRAPHICS TECHNOLOGY',
    icon: Code2,
    color: 'accent-violet',
    technologies: 'C++20 · Unity 6 · URP · Unreal Engine 5 · CMake · Rendering · Animation · Parallax · WebGL',
    description: 'Custom engine development, rendering pipelines, animation systems, 2.5D/3D graphics, and creative tooling.',
  },
  {
    id: 'developer-platforms',
    label: 'DEVELOPER PLATFORMS',
    icon: Terminal,
    color: 'accent-amber',
    technologies: 'React · TypeScript · Tauri · Vite · Tooling · CI/CD · Content Pipelines',
    description: 'Desktop applications, developer tools, build systems, and platforms that accelerate engineering workflows.',
  },
  {
    id: 'research-computing',
    label: 'RESEARCH COMPUTING',
    icon: Microscope,
    color: 'accent-violet',
    technologies: 'HPC · Quantum Simulation · Tensor Networks · Scientific Computing · VQE · QAOA · Distributed Systems',
    description: 'High-performance computing, quantum algorithms, numerical simulation, and computational science workflows.',
  },
  {
    id: 'interactive-systems',
    label: 'INTERACTIVE SYSTEMS',
    icon: Zap,
    color: 'accent-amber',
    technologies: 'Unreal Engine 5 · Gameplay Ability System · Game Systems · Technical Design · Narrative Architecture',
    description: 'Game systems engineering, interactive experiences, technical direction, and creative software architecture.',
  },
] as const;

export function EngineeringDomains() {
  return (
    <section id="engineering-domains" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">03 / Engineering Domains</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Breadth</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Six interconnected domains spanning systems software, backend infrastructure, engine technology,
            developer platforms, research computing, and interactive systems.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((domain) => (
            <article
              key={domain.id}
              className="group relative p-6 glass-panel rounded-xl border border-white/5 transition-all duration-500 hover:border-accent-cyan/30 hover:bg-white/10"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan mb-3">
                  <domain.icon className="w-4 h-4" aria-hidden="true" />
                  <span>{domain.label}</span>
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">{domain.description}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">TECHNOLOGIES</p>
                <p className="text-sm text-dark-300 font-mono leading-relaxed">{domain.technologies}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}