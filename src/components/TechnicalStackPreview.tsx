import { skills } from '../data';
import { cn } from '../lib/utils';
import { Code, Cpu, Server, Database, Globe, Zap, Terminal, Layers } from 'lucide-react';

const stackCategories = [
  {
    id: 'languages',
    label: 'LANGUAGES',
    icon: Code,
    color: 'accent-cyan',
    skills: skills.filter(s => s.category === 'language'),
  },
  {
    id: 'systems',
    label: 'SYSTEMS & OS',
    icon: Cpu,
    color: 'accent-green',
    skills: skills.filter(s => s.category === 'systems'),
  },
  {
    id: 'backend',
    label: 'BACKEND',
    icon: Server,
    color: 'accent-violet',
    skills: skills.filter(s => s.category === 'backend'),
  },
  {
    id: 'frontend',
    label: 'FRONTEND',
    icon: Layers,
    color: 'accent-amber',
    skills: skills.filter(s => s.category === 'frontend'),
  },
  {
    id: 'graphics',
    label: 'ENGINE / GRAPHICS',
    icon: Zap,
    color: 'accent-amber',
    skills: skills.filter(s => s.category === 'graphics'),
  },
  {
    id: 'devops',
    label: 'CLOUD / DEVOPS',
    icon: Database,
    color: 'accent-green',
    skills: skills.filter(s => s.category === 'devops'),
  },
  {
    id: 'research',
    label: 'RESEARCH',
    icon: Globe,
    color: 'accent-violet',
    skills: skills.filter(s => s.category === 'research'),
  },
] as const;

export function TechnicalStackPreview() {
  return (
    <section id="technical-stack" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">05 / Technical Stack</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Tools & Technologies</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Curated technology choices organized by engineering domain. No proficiency percentages — just tools used in production.
          </p>
        </div>

        <div className="space-y-12">
          {stackCategories.map((category) => (
            <TechnicalStackCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalStackCategory({ category }: { category: typeof stackCategories[0] }) {
  return (
    <div className="group">
      <div className="mb-4 flex items-center gap-3">
        <category.icon className={`w-5 h-5 text-${category.color}`} aria-hidden="true" />
        <h3 className="text-lg font-bold text-white font-mono tracking-wide">{category.label}</h3>
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--theme-accent)] to-transparent" style={{ '--theme-accent': `var(--color-${category.color})` }} aria-hidden="true" />
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 text-sm font-mono bg-white/5 border border-white/10 rounded-lg text-dark-300 transition-all duration-300 hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-accent-cyan/5 group-hover:border-accent-cyan/30 group-hover:text-accent-cyan group-hover:bg-accent-cyan/5"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}