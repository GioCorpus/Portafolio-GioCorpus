import { projects, getSelectedProjects } from '../data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Github, ExternalLink, Code2, ShieldCheck, FlaskConical, Microscope, Lightbulb, Flag } from 'lucide-react';
import { statusVariants } from '../lib/projectTheme';
import type { ProjectStatus, Project } from '../types';

const statusIcons: Record<ProjectStatus, React.ComponentType<{ className?: string }>> = {
  implemented: ShieldCheck,
  prototype: Code2,
  experimental: FlaskConical,
  research: Microscope,
  concept: Lightbulb,
  roadmap: Flag,
};

const statusBadgeVariants: Record<ProjectStatus, 'success' | 'info' | 'warning' | 'default'> = {
  implemented: 'success',
  prototype: 'info',
  experimental: 'warning',
  research: 'info',
  concept: 'default',
  roadmap: 'default',
};

function getStatusConfig(status: ProjectStatus | undefined) {
  const variant = status ? statusVariants[status] : statusVariants.implemented;
  const Icon = status ? statusIcons[status] : ShieldCheck;
  const badgeVariant = status ? statusBadgeVariants[status] : 'success';
  
  if (!variant && import.meta.env.DEV) {
    console.warn('[ProjectCard] Missing status variant for "' + status + '", using fallback');
  }
  
  return {
    icon: Icon,
    color: variant?.color || '#00ff88',
    label: variant?.label || 'Unknown',
    badgeVariant,
  };
}

const MAX_VISIBLE_TECHNOLOGIES = 5;
const MAX_VISIBLE_HIGHLIGHTS = 3;

export interface ProjectCardProps {
  project: Project;
  variant?: 'featured' | 'selected';
}

export function ProjectCard({ project, variant = 'featured' }: ProjectCardProps) {
  const status = getStatusConfig(project.status);
  const StatusIcon = status.icon;
  const technologies = project.technologies ?? [];
  const highlights = project.highlights ?? [];

  return (
<Card variant="hover" padding="none" className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video bg-gradient-to-br from-accent-cyan/10 via-dark-900 to-accent-green/10">
        <div className="absolute inset-0 flex items-center justify-center font-mono text-xs text-dark-500">{project.category}</div>
        <div className="absolute top-4 right-4"><Badge variant={status.badgeVariant} className="gap-1"><StatusIcon className="w-3 h-3" aria-hidden="true" />{status.label}</Badge></div>
        <div className="absolute bottom-4 left-4 flex gap-2">{project.period && <span className="font-mono text-xs text-accent-cyan/70">{project.period}</span>}</div>
      </div>
      <CardHeader className="p-6"><div className="flex items-start justify-between gap-4"><div><CardTitle className="text-lg">{project.name}</CardTitle><CardDescription className="mt-2 line-clamp-2">{project.summary}</CardDescription></div></div></CardHeader>
      <CardContent className="px-6 pb-4">
        {technologies.length > 0 && <div className="flex flex-wrap gap-2">{technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES).map(t=>(<Badge key={t} variant="outline" size="sm">{t}</Badge>))}{technologies.length > MAX_VISIBLE_TECHNOLOGIES && <Badge variant="outline" size="sm" className="text-accent-cyan/70">+{technologies.length - MAX_VISIBLE_TECHNOLOGIES}</Badge>}</div>}
        {highlights.length > 0 && <ul className="mt-4 space-y-2">{highlights.slice(0, MAX_VISIBLE_HIGHLIGHTS).map((h,i)=>(<li key={i} className="flex gap-2 text-sm text-dark-400"><span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-cyan/50" aria-hidden="true" /><span className="line-clamp-1">{h.title}</span></li>))}{highlights.length > MAX_VISIBLE_HIGHLIGHTS && <li className="flex gap-2 text-sm text-dark-500"><span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-cyan/30" aria-hidden="true" /><span className="line-clamp-1">+{highlights.length - MAX_VISIBLE_HIGHLIGHTS} more</span></li>}</ul>}
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 border-t border-white/5"><div className="flex items-center gap-3">{project.repository && <Button variant="ghost" size="sm" onClick={()=>window.open(project.repository,'_blank')} aria-label={"View "+project.name+" on GitHub"}><Github className="w-4 h-4" aria-hidden="true" />Code</Button>}{project.website && <Button variant="ghost" size="sm" onClick={()=>window.open(project.website,'_blank')} aria-label={"View "+project.name+" demo"}><ExternalLink className="w-4 h-4" aria-hidden="true" />Demo</Button>}</div></CardFooter>
    </Card>
  );
}

interface ProjectsProps { mode?: 'all' | 'selected'; }

export function Projects({ mode = 'all' }: ProjectsProps) {
  const featuredProjects = projects.filter(p=>p.featured);
  const otherProjects = getSelectedProjects();
  return (
    <section id="projects" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl"><div className="mb-12 max-w-3xl"><p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">{mode==='selected'?'06 / Selected Projects':'02 / Projects'}</p><h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{mode==='selected'?'Selected Projects':'All Projects'}</h2><p className="mt-4 leading-7 text-dark-400">{mode==='selected'?'Additional engineering projects spanning research, developer tools, and experimental platforms.':'A selection of systems engineering, graphics technology, and interactive systems projects demonstrating end-to-end development capabilities.'}</p></div>
      <div className="space-y-12">{mode==='all' && featuredProjects.length>0 && <div><h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan"><span>Featured</span><span className="h-px w-12 bg-gradient-to-r from-accent-cyan to-transparent" aria-hidden="true" /></h3><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{featuredProjects.map(p=><ProjectCard key={p.slug} project={p} />)}</div></div>}<div><h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-green"><span>{mode==='selected'?'Selected Projects':'Other Projects'}</span><span className="h-px w-12 bg-gradient-to-r from-accent-green to-transparent" aria-hidden="true" /></h3><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{otherProjects.map(p=><ProjectCard key={p.slug} project={p} />)}</div></div></div></div></section>
  );
}