import { cn } from '../lib/utils';
import { Cpu, Code, Server, Globe, Terminal } from 'lucide-react';

interface ProfileItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color: string;
}

const coreSkills: ProfileItem[] = [
  { icon: Code, label: 'CORE', value: 'Rust · C++ · Python · TypeScript', color: 'accent-cyan' },
  { icon: Cpu, label: 'SYSTEMS', value: 'Linux · Backend · Infrastructure', color: 'accent-green' },
  { icon: Server, label: 'ENGINE', value: 'C++20 · Unity · Unreal Engine 5', color: 'accent-amber' },
  { icon: Globe, label: 'RESEARCH', value: 'HPC · Quantum · Distributed Systems', color: 'accent-violet' },
];

const currentFocus = [
  { name: 'QuantumEnergyOS V.04', theme: 'qeos' },
  { name: 'Tamayo 2.5D Engine', theme: 'tamayo' },
  { name: 'WitchCraft: Shamans & Nahuals', theme: 'witchcraft' },
] as const;

export function EngineerProfilePanel() {
  return (
    <div className="hidden lg:block animate-fade-in-up animate-delay-500">
      <div className="relative glow-border rounded-2xl p-1">
        <div className="glass-panel rounded-xl p-6 min-h-[380px] w-full min-w-[360px]">
          <div className="mb-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
              <Terminal className="w-4 h-4" aria-hidden="true" />
              ENGINEER_PROFILE
            </div>
            <div className="mt-1 h-px w-16 bg-gradient-to-r from-accent-cyan to-transparent" aria-hidden="true" />
          </div>

          <div className="space-y-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-2">LOCATION</p>
              <p className="text-white text-sm">Mexicali, Baja California, Mexico</p>
            </div>

            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">CORE COMPETENCIES</p>
              <div className="space-y-3">
                {coreSkills.map((skill, i) => (
                  <div key={skill.label} className="group relative pl-10">
                    <skill.icon className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-${skill.color}/60 group-hover:text-${skill.color} transition-colors`} aria-hidden="true" />
                    <p className="font-mono text-xs text-${skill.color}/70">{skill.label}</p>
                    <p className="text-sm text-dark-300">{skill.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">CURRENT FOCUS</p>
              <div className="space-y-2">
                {currentFocus.map((project, i) => (
                  <div key={project.name} className="flex items-center gap-3 group">
                    <div className={`w-2 h-2 rounded-full bg-${project.theme}-accent/50 transition-all group-hover:scale-150`} aria-hidden="true" />
                    <span className="text-sm text-dark-300 group-hover:text-white transition-colors">{project.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}