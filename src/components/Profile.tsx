import { personalInfo, skills, experiences } from '../data';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Code2, BrainCircuit, Award, GraduationCap, Briefcase, FlaskConical } from 'lucide-react';
import { cn } from '../lib/utils';

const categoryIcons = {
  frontend: Code2,
  backend: BrainCircuit,
  devops: Briefcase,
  data: Code2,
  research: FlaskConical,
  tools: Code2,
};

const categoryColors = {
  frontend: 'accent-cyan',
  backend: 'accent-green',
  devops: 'accent-amber',
  data: 'accent-cyan',
  research: 'accent-green',
  tools: 'accent-amber',
};

const experienceIcons = {
  work: Briefcase,
  research: FlaskConical,
  education: GraduationCap,
};

export function Profile() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="profile" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">01 / Profile</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Profile & Expertise</h2>
          <p className="mt-4 leading-7 text-dark-400">
            {personalInfo.description}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <Code2 className="text-accent-cyan" size={20} aria-hidden="true" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                const color = categoryColors[category as keyof typeof categoryColors];
                return (
                  <div key={category} className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-dark-400">
                      <Icon className={`text-${color}`} size={14} aria-hidden="true" />
                      <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <Badge key={skill.name} variant="outline" size="sm" className="hover:border-accent-cyan/50 hover:text-accent-cyan">
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-lg font-semibold text-white">
              <Award className="text-accent-amber" size={20} aria-hidden="true" />
              Experience & Education
            </h3>
            <div className="space-y-4">
              {experiences.map((exp) => {
                const Icon = experienceIcons[exp.type];
                const typeColors = {
                  work: 'accent-cyan',
                  research: 'accent-green',
                  education: 'accent-amber',
                };
                const color = typeColors[exp.type];
                return (
                  <Card key={exp.id} variant="hover" padding="md">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-${color}/20 flex items-center justify-center`}>
                          <Icon className={`w-5 h-5 text-${color}`} aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan">
                            {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                          </p>
                          <h4 className="mt-1 font-semibold text-white">{exp.role}</h4>
                          <p className="mt-1 text-sm text-dark-400">{exp.company}</p>
                        </div>
                      </div>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full bg-${color}/20 text-${color} whitespace-nowrap`}>
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-dark-400">{exp.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 6).map((tech) => (
                        <Badge key={tech} variant="outline" size="sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-');
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${monthNames[parseInt(month) - 1]} ${year}`;
}