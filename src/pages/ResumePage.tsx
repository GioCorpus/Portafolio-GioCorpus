import { personal, experience, techStack } from '../data';
import { cn } from '../lib/utils';
import { Briefcase, GraduationCap, FlaskConical, Code, Globe, Award, BookOpen, Download, Printer } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SEO } from '../components/SEO';

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

function ExperienceItem({ exp }: { exp: typeof experience[0] }) {
  const Icon = typeIcons[exp.type];
  const color = typeColors[exp.type];

  return (
    <article className="mb-8 pb-8 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <Icon className={cn('w-5 h-5', `text-${color}`)} aria-hidden="true" />
          <div>
            <h4 className="text-lg font-semibold text-white">{exp.role}</h4>
            <p className="text-sm text-dark-400">{exp.company}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-dark-500 shrink-0">
          <span>{exp.startDate.replace('-', '.')} — {exp.endDate}</span>
        </div>
      </div>
      <p className="text-dark-300 text-sm leading-relaxed mb-3">{exp.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {exp.technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-[10px] font-mono bg-white/5 border border-white/10 rounded text-dark-400">
            {tech}
          </span>
        ))}
      </div>
      {exp.achievements.length > 0 && (
        <ul className="space-y-1 pl-4">
          {exp.achievements.map((achievement, i) => (
            <li key={i} className="flex gap-2 text-sm text-dark-400">
              <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-cyan/50" aria-hidden="true" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
function SkillCategory({ category, title, icon: Icon, color }: { category: typeof techStack; title: string; icon: React.ComponentType<{ className?: string }>; color: string }) {
  const skills = category.filter(s => s.category === title.toLowerCase() || 
    (title === 'Languages' && s.category === 'language') ||
    (title === 'Systems' && s.category === 'systems') ||
    (title === 'Backend' && s.category === 'backend') ||
    (title === 'Frontend' && s.category === 'frontend') ||
    (title === 'Graphics' && s.category === 'graphics') ||
    (title === 'DevOps' && s.category === 'devops') ||
    (title === 'Research' && s.category === 'research')
  );

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className={cn('w-5 h-5', `text-${color}`)} aria-hidden="true" />
        <h4 className="font-semibold text-white">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
{skills.map((skill) => (
          <span key={skill.name} className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded text-dark-300">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

const workExperience = experience.filter(e => e.type === 'work');
const researchExperience = experience.filter(e => e.type === 'research');
const educationExperience = experience.filter(e => e.type === 'education');

export function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-dark-950 text-neutral-100 font-sans antialiased">
      <header className="print:hidden border-b border-white/5 bg-dark-950/80 backdrop-blur-xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="mx-auto max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan">
              <Code size={20} />
            </div>
            <div>
              <h1 className="font-display text-lg font-bold text-white">Giovanny Anthony Corpus Bernal</h1>
              <p className="font-mono text-xs text-accent-cyan/70">Software Engineer · Systems Engineer · Engine Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handlePrint}>
              <Printer className="w-4 h-4 mr-2" />
              Print / Save as PDF
            </Button>
            <a
              href={personal.cvUrl}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-mono tracking-wider uppercase bg-gradient-to-r from-accent-cyan to-accent-green text-dark-950 rounded-lg hover:opacity-90 transition-opacity"
              download
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>
        </div>
      </header>
<main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 print:py-0">
        <section className="mb-10 print:mb-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan mb-3">Professional Summary</p>
          <p className="text-dark-300 leading-relaxed max-w-3xl">{personal.professionalProfile}</p>
        </section>

        <section className="mb-10 print:mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
            <h2 className="text-xl font-bold text-white">Engineering Domains</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Systems</h3>
              <p className="text-sm text-dark-400">Rust · C++ · Linux · Kernel Architecture · Memory Management · Concurrency</p>
            </div>
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Backend & Infrastructure</h3>
              <p className="text-sm text-dark-400">Python · FastAPI · Flask · REST APIs · MongoDB · Docker · GitHub Actions</p>
            </div>
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Engine Technology</h3>
              <p className="text-sm text-dark-400">C++20 · Unity 6 · URP · Rendering · Animation Systems · CMake</p>
            </div>
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Frontend</h3>
              <p className="text-sm text-dark-400">React · TypeScript · Vite · Tailwind CSS · Tauri</p>
            </div>
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Research</h3>
              <p className="text-sm text-dark-400">Quantum Computing · Distributed Systems · HPC · Scientific Computing</p>
            </div>
            <div className="glass-panel rounded-lg p-4 border border-white/5">
              <h3 className="font-semibold text-white mb-2">Graphics</h3>
              <p className="text-sm text-dark-400">WebGL · 2.5D Rendering · Parallax Systems · Shader Development</p>
            </div>
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
            Professional Experience
          </h2>
          <div className="space-y-0">
            {workExperience.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-accent-violet" aria-hidden="true" />
            Research & Projects
          </h2>
          <div className="space-y-0">
            {researchExperience.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent-green" aria-hidden="true" />
            Education
          </h2>
          <div className="space-y-4">
            {educationExperience.map((exp) => (
              <ExperienceItem key={exp.id} exp={exp} />
            ))}
          </div>
        </section>
<section className="mb-10 print:mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-accent-amber" aria-hidden="true" />
            Technical Skills
          </h2>
          <div className="space-y-0">
            <SkillCategory category={techStack} title="Languages" icon={Code} color="accent-cyan" />
            <SkillCategory category={techStack} title="Systems" icon={Globe} color="accent-green" />
            <SkillCategory category={techStack} title="Backend" icon={Briefcase} color="accent-amber" />
            <SkillCategory category={techStack} title="Frontend" icon={Globe} color="accent-violet" />
            <SkillCategory category={techStack} title="Graphics" icon={Code} color="accent-cyan" />
            <SkillCategory category={techStack} title="DevOps" icon={Briefcase} color="accent-green" />
            <SkillCategory category={techStack} title="Research" icon={FlaskConical} color="accent-violet" />
          </div>
        </section>

        <section className="mb-10 print:mb-8">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent-amber" aria-hidden="true" />
            Languages
          </h2>
          <div className="flex flex-wrap gap-4">
            {personal.languages.map((lang, i) => (
              <div key={i} className="glass-panel rounded-lg p-4 border border-white/5 flex items-center gap-3">
                <Award className="w-5 h-5 text-accent-amber" aria-hidden="true" />
                <div>
                  <p className="font-medium text-white">{lang.name}</p>
                  <p className="text-sm text-dark-400">{lang.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="print:hidden">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-accent-cyan" aria-hidden="true" />
            Career Timeline
          </h2>
          <p className="text-dark-400 text-center py-8">
            View the interactive timeline on the <a href="/about" className="text-accent-cyan hover:underline">About page</a>.
          </p>
        </section>
      </main>

      <footer className="print:hidden border-t border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-6">
        <div className="mx-auto max-w-4xl text-center text-dark-500 font-mono text-xs">
          Generated from portfolio · {new Date().getFullYear()} · Giovanny Corpus Bernal
        </div>
      </footer>
    </div>
  );
}

export default ResumePage;
