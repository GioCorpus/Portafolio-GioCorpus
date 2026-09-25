import { experience } from '../../data';
import { cn } from '../../lib/utils';
import { Briefcase, GraduationCap, FlaskConical, Calendar, MapPin, Code2 } from 'lucide-react';

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  research: FlaskConical,
} as const;

const typeColors = {
  work: 'accent-cyan',
  education: 'accent-green',
  research: 'accent-violet',
} as const;

const typeLabels = {
  work: 'WORK',
  education: 'EDUCATION',
  research: 'RESEARCH',
} as const;

function ExperienceCategory({ title, icon: Icon, color, items }: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  items: typeof experience;
}) {
  return (
    <div>
      <div className="mb-8 flex items-center gap-3">
        <Icon className={cn('w-5 h-5', `text-${color}`)} aria-hidden="true" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--theme-accent)] to-transparent" style={{ '--theme-accent': `var(--color-${color})` }} aria-hidden="true" />
      </div>
      <div className="space-y-8">
        {items.map((exp, index) => (
          <ExperienceItem key={exp.id} exp={exp} index={index} color={color} />
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({ exp, index, color }: { exp: typeof experience[0]; index: number; color: string }) {
  const Icon = typeIcons[exp.type];
  const label = typeLabels[exp.type];

  return (
    <article className="group relative pl-12">
      <div className="absolute left-0 top-0 w-6 h-6 flex items-center justify-center">
        <div className={cn('w-2 h-2 rounded-full ring-2 ring-dark-950 transition-all group-hover:scale-150 group-hover:ring-[var(--item-color)]/50', `bg-[var(--item-color)]/50`)} style={{ '--item-color': `var(--color-${color})` }} aria-hidden="true" />
        <div className={cn('absolute w-1.5 h-full bottom-full', `bg-[var(--item-color)]/20`)} style={{ '--item-color': `var(--color-${color})` }} aria-hidden="true" />
      </div>

      <div className={cn('glass-panel rounded-xl p-6 border border-white/5 transition-all duration-300 hover:border-accent-cyan/30 hover:bg-white/10')}>
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Icon className={cn('w-4 h-4', `text-[var(--item-color)]`)} style={{ '--item-color': `var(--color-${color})` }} aria-hidden="true" />
              <span className={cn('font-mono text-xs uppercase tracking-wider', `text-[var(--item-color)]/70`)} style={{ '--item-color': `var(--color-${color})` }}>{label}</span>
            </div>
            <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
            <p className="text-dark-400 mt-1">{exp.company}</p>
          </div>
          <div className="flex items-center gap-4 font-mono text-xs text-dark-500 shrink-0">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" aria-hidden="true" />
              {exp.startDate.replace('-', '.')} — {exp.endDate}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" aria-hidden="true" />
              {exp.location}
            </span>
          </div>
        </div>

        <p className="text-dark-300 text-sm leading-relaxed mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {exp.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-dark-400 group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>

        {exp.achievements.length > 0 && (
          <ul className="space-y-2">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-2 text-sm text-dark-400">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-cyan/50" aria-hidden="true" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function AboutExperience() {
  const workExperience = experience.filter(e => e.type === 'work');
  const researchExperience = experience.filter(e => e.type === 'research');
  const educationExperience = experience.filter(e => e.type === 'education');

  return (
    <section id="about-experience" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">02 / Experience</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Professional Journey</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Over 20 years of hands-on engineering across systems consulting, audio technology, quantum research, and formal education.
          </p>
        </div>

        <div className="space-y-16">
          <ExperienceCategory
            title="Professional Experience"
            icon={Briefcase}
            color="accent-cyan"
            items={workExperience}
          />
          <ExperienceCategory
            title="Research & Projects"
            icon={FlaskConical}
            color="accent-violet"
            items={researchExperience}
          />
          <ExperienceCategory
            title="Education"
            icon={GraduationCap}
            color="accent-green"
            items={educationExperience}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutExperience;