import { personal } from '../data';
import { cn } from '../lib/utils';
import { Code, Cpu, Server, Globe, Terminal, GraduationCap, Languages } from 'lucide-react';

const coreSkills = [
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
export function EngineeringProfile() {
  return (
    <section id="engineering-profile" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-8 max-w-xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">02 / Engineering Profile</p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Over 20 Years of Hands-On Engineering
              </h2>
              <p className="mt-4 leading-7 text-dark-400">
                {personal.professionalProfile}
              </p>
            </div>

            <div className="space-y-6">
              {coreSkills.map((skill) => (
                <div key={skill.label} className="group relative pl-10">
                  <skill.icon className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-${skill.color}/60 group-hover:text-${skill.color} transition-colors`} aria-hidden="true" />
                  <p className="font-mono text-xs text-${skill.color}/70">{skill.label}</p>
                  <p className="text-base text-dark-300">{skill.value}</p>
                </div>
              ))}

              <div className="pt-6 border-t border-white/5">
                <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-4">CURRENT FOCUS</p>
                <div className="space-y-3">
                  {currentFocus.map((project) => (
                    <div key={project.name} className="flex items-center gap-3 group">
                      <div className={`w-2.5 h-2.5 rounded-full bg-${project.theme}-accent/50 transition-all group-hover:scale-150`} aria-hidden="true" />
                      <span className="text-base text-dark-300 group-hover:text-white transition-colors">{project.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative glow-border rounded-2xl p-1 h-full min-h-[420px]">
              <div className="glass-panel rounded-xl p-6 h-full">
                <div className="mb-6">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
                    <Terminal className="w-4 h-4" aria-hidden="true" />
                    ENGINEER_PROFILE
                  </div>
                  <div className="mt-1 h-px w-16 bg-gradient-to-r from-accent-cyan to-transparent" aria-hidden="true" />
                </div>

                <EngineeringProfileDetails personal={personal} coreSkills={coreSkills} currentFocus={currentFocus} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngineeringProfileDetails({ personal, coreSkills, currentFocus }: {
  personal: typeof import('../data').personal;
  coreSkills: typeof coreSkills;
  currentFocus: typeof currentFocus;
}) {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-2">LOCATION</p>
        <p className="text-white text-sm">{personal.location}</p>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">CORE COMPETENCIES</p>
        <div className="space-y-3">
          {coreSkills.map((skill) => (
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
          {currentFocus.map((project) => (
            <div key={project.name} className="flex items-center gap-3 group">
              <div className={`w-2 h-2 rounded-full bg-${project.theme}-accent/50 transition-all group-hover:scale-150`} aria-hidden="true" />
              <span className="text-sm text-dark-300 group-hover:text-white transition-colors">{project.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5">
        <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">EDUCATION</p>
        <div className="space-y-2">
          {personal.education.map((edu, i) => (
            <div key={i} className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-accent-cyan/70 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm text-dark-300">{edu.degree}</p>
                <p className="text-xs text-dark-500">{edu.institution} · {edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-white/5">
        <p className="font-mono text-xs uppercase tracking-wider text-dark-500 mb-3">LANGUAGES</p>
        <div className="space-y-2">
          {personal.languages.map((lang, i) => (
            <div key={i} className="flex items-center gap-3">
              <Languages className="w-4 h-4 text-accent-green/70 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm text-dark-300">{lang.name} — {lang.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
