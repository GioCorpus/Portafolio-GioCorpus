import { careerDirection } from '../../data/career';
import { cn } from '../../lib/utils';
import { Briefcase, Monitor, MapPin, Target, Clock, Globe, Shield, Sparkles, Cpu, Server, Code, FlaskConical } from 'lucide-react';
const workModeIcons = {
  'Remote': Monitor,
  'Hybrid': Globe,
  'Relocation': MapPin,
} as const;

export function AboutDirection() {
  return (
    <section id="about-direction" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">06 / Career Direction</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Where I'm Headed</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Actively seeking roles that align with deep systems expertise, engine technology, and research-oriented engineering.
            Open to remote, hybrid, or relocation opportunities globally.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center" aria-hidden="true">
                <Target className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">Target Roles</h3>
            </div>
            <ul className="space-y-3">
              {careerDirection.roles.map((role, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-cyan/10 transition-colors group-hover:bg-accent-cyan/20')}>
                    <Briefcase className="w-4 h-4 text-accent-cyan" aria-hidden="true" />
                  </div>
                  <span className="text-dark-300 group-hover:text-white transition-colors">{role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center" aria-hidden="true">
                <Monitor className="w-5 h-5 text-accent-green" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">Work Modes</h3>
            </div>
            <ul className="space-y-3">
              {careerDirection.workModes.map((mode, i) => {
                const Icon = workModeIcons[mode as keyof typeof workModeIcons];
                return (
                  <li key={i} className="flex items-center gap-3 group">
                    <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-green/10 transition-colors group-hover:bg-accent-green/20')}>
                      <Icon className="w-4 h-4 text-accent-green" aria-hidden="true" />
                    </div>
                    <span className="text-dark-300 group-hover:text-white transition-colors">{mode}</span>
                  </li>
                );
              })}
            </ul>
          </div>
<div className="glass-panel rounded-xl p-6 border border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent-violet/10 flex items-center justify-center" aria-hidden="true">
                <Sparkles className="w-5 h-5 text-accent-violet" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">Target Domains</h3>
            </div>
            <ul className="space-y-3">
              {careerDirection.domains.map((domain, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-accent-violet/10 transition-colors group-hover:bg-accent-violet/20')}>
                    <Globe className="w-4 h-4 text-accent-violet" aria-hidden="true" />
                  </div>
                  <span className="text-dark-300 group-hover:text-white transition-colors">{domain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 glass-panel rounded-xl p-6 sm:p-8 border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Availability</h3>
              <p className="text-dark-400 leading-relaxed">
                Currently open to new opportunities. Available for immediate start.
                Preference for roles with technical depth, architectural ownership, and research-adjacent work.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:giovanny.corpus@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-gradient-to-r from-accent-cyan to-accent-green text-dark-950 rounded-lg hover:opacity-90 transition-opacity"
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                Discuss Opportunities
              </a>
              <a
                href="https://github.com/GioCorpus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-white/5 border border-white/10 text-dark-300 rounded-lg hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-white/10 transition-colors"
              >
                <Code className="w-4 h-4" aria-hidden="true" />
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDirection;
