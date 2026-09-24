import { timelineEvents, experiences } from '../data';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Calendar, Award, GraduationCap, Briefcase, FlaskConical, Flag, Github, FileText, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const typeConfig = {
  milestone: { icon: Flag, color: 'accent-cyan', label: 'Milestone' },
  project: { icon: Github, color: 'accent-green', label: 'Project' },
  publication: { icon: FileText, color: 'accent-amber', label: 'Publication' },
  award: { icon: Award, color: 'accent-amber', label: 'Award' },
  education: { icon: GraduationCap, color: 'accent-cyan', label: 'Education' },
};

const experienceIcons = {
  work: Briefcase,
  research: FlaskConical,
  education: GraduationCap,
};

export function Timeline() {
  const allEvents = [...timelineEvents].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section id="timeline" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">05 / Timeline</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Career Timeline</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Key milestones, publications, and professional achievements in my journey as a systems engineer and quantum researcher.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/30 via-transparent to-accent-green/30" aria-hidden="true" />
          
          <div className="space-y-8">
            {allEvents.map((event, index) => (
              <TimelineItem key={event.id} event={event} index={index} />
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-green">
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              <span>Professional Experience</span>
            </h3>
            {experiences.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const config = typeConfig[event.type];
  const Icon = config.icon;

  return (
    <div className="relative pl-12 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="absolute left-0 top-1 w-8 h-8 -translate-x-1/2">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-dark-950 bg-{config.color} shadow-[0_0_0_4px_rgba(0,212,255,0.10)] flex items-center justify-center">
            <Icon className="w-4 h-4 text-dark-950" aria-hidden="true" />
          </div>
        </div>
      </div>
      <Card variant="hover" padding="md">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-accent-cyan">{formatDate(event.date)}</span>
              <Badge variant="outline" size="sm" className={`text-${config.color} border-${config.color}/30`}>
                <Icon className="w-3 h-3 mr-1" aria-hidden="true" />
                {config.label}
              </Badge>
            </div>
            <h4 className="mt-2 font-semibold text-white">{event.title}</h4>
          </div>
        </div>
        <p className="mt-3 text-sm text-dark-400">{event.description}</p>
      </Card>
    </div>
  );
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const Icon = experienceIcons[exp.type];
  const typeColors = {
    work: 'accent-cyan',
    research: 'accent-green',
    education: 'accent-amber',
  };
  const color = typeColors[exp.type];

  return (
    <Card variant="hover" padding="md" className="relative pl-12">
      <div className="absolute left-0 top-1 w-8 h-8 -translate-x-1/2">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-dark-950 bg-{color}/20 flex items-center justify-center">
            <Icon className="w-4 h-4 text-{color}" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
              {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
            </p>
            <h4 className="mt-1 font-semibold text-white">{exp.role}</h4>
            <p className="mt-1 text-sm text-dark-400">{exp.company}</p>
          </div>
        </div>
        <span className={`text-xs font-mono px-2 py-1 rounded-full bg-{color}/20 text-{color} whitespace-nowrap self-start`}>
          {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
        </span>
      </div>
      <p className="mt-4 text-sm text-dark-400">{exp.description}</p>
      <div className="mt-3 space-y-2">
        {exp.achievements.slice(0, 3).map((achievement, i) => (
          <div key={i} className="flex gap-2 text-sm text-dark-400">
            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-{color}/50" aria-hidden="true" />
            <span>{achievement}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {exp.technologies.slice(0, 6).map((tech) => (
          <Badge key={tech} variant="outline" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </Card>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return month ? `${monthNames[parseInt(month) - 1]} ${year}` : year;
}