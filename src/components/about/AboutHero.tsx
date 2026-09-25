import { personal } from '../../data';
import { education } from '../../data/education';
import { languages } from '../../data/languages';
import { currentFocus } from '../../data/focus';
import { Code, Cpu, Server, Globe, Terminal, GraduationCap, Languages, Award, BookOpen, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

const coreSkills = [
  { icon: Code, label: 'CORE', value: 'Rust · C++ · Python · TypeScript', color: 'accent-cyan' },
  { icon: Cpu, label: 'SYSTEMS', value: 'Linux · Backend · Infrastructure', color: 'accent-green' },
  { icon: Server, label: 'ENGINE', value: 'C++20 · Unity · Unreal Engine 5', color: 'accent-amber' },
  { icon: Globe, label: 'RESEARCH', value: 'HPC · Quantum · Distributed Systems', color: 'accent-violet' },
] as const;

export function AboutHero() {
  return (
    <section id="about-hero" className={cn('border-b border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28')}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">01 / Professional Profile</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Giovanny Anthony Corpus Bernal
          </h1>
          <p className="mt-4 text-xl text-dark-400 max-w-2xl">
            {personal.tagline}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <Terminal className="w-6 h-6 text-accent-cyan mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Core Competencies</h3>
            <div className="space-y-3">
              {coreSkills.map((skill) => (
                <div key={skill.label} className="group relative pl-8">
                  <skill.icon className={cn('absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4', `text-${skill.color}/60 group-hover:text-${skill.color} transition-colors`)} aria-hidden="true" />
                  <p className={cn('font-mono text-xs', `text-${skill.color}/70`)}>{skill.label}</p>
                  <p className="text-sm text-dark-300">{skill.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <GraduationCap className="w-6 h-6 text-accent-green mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-green/10 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-accent-green" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-white">{edu.program}</p>
                    <p className="text-xs text-dark-500">{edu.institution} · {edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <Languages className="w-6 h-6 text-accent-amber mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Languages</h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent-amber/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-accent-amber" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-white">{lang.language} <span className="font-mono text-xs text-dark-500">— {lang.context}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <Zap className="w-6 h-6 text-accent-violet mb-3" aria-hidden="true" />
            <h3 className="text-lg font-semibold text-white mb-2">Current Focus</h3>
            <div className="space-y-3">
              {currentFocus.map((project) => (
                <div key={project.project} className="flex items-center gap-3 group">
                  <div className={cn('w-2.5 h-2.5 rounded-full transition-all group-hover:scale-150', `bg-${project.theme === 'qeos' ? 'accent-cyan' : project.theme === 'tamayo' ? 'accent-violet' : 'accent-amber'}/50`)} aria-hidden="true" />
                  <span className="text-sm text-dark-300 group-hover:text-white transition-colors">{project.project}</span>
                  <span className="font-mono text-xs text-dark-500 ml-auto">{project.domain}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;