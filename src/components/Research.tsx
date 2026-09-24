import { researchPapers } from '../data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Badge } from './ui/Badge';
import { ExternalLink, Github, FileText, Award, FlaskConical } from 'lucide-react';
import { cn } from '../lib/utils';

export function Research() {
  const featuredPapers = researchPapers.filter(p => p.featured);
  const otherPapers = researchPapers.filter(p => !p.featured);

  return (
    <section id="research" className="border-y border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">03 / Research</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Publications & Research</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Peer-reviewed publications in quantum computing, distributed systems, and high-performance computing.
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-cyan">
              <FlaskConical className="w-4 h-4" aria-hidden="true" />
              <span>Featured Publications</span>
              <span className="h-px w-12 bg-gradient-to-r from-accent-cyan to-transparent" aria-hidden="true" />
            </h3>
            <div className="space-y-6">
              {featuredPapers.map((paper) => (
                <ResearchCard key={paper.id} paper={paper} featured />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-green">
              <span>Other Publications</span>
              <span className="h-px w-12 bg-gradient-to-r from-accent-green to-transparent" aria-hidden="true" />
            </h3>
            <div className="space-y-6">
              {otherPapers.map((paper) => (
                <ResearchCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchCard({ paper, featured = false }: { paper: typeof researchPapers[0]; featured?: boolean }) {
  return (
    <Card variant={featured ? 'glow' : 'hover'} padding="lg" className={featured ? 'ring-1 ring-accent-cyan/20' : ''}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {featured && (
              <Badge variant="success" size="sm" className="mb-2">
                <Award className="w-3 h-3 mr-1" aria-hidden="true" />
                Featured
              </Badge>
            )}
            <CardTitle className="text-xl">{paper.title}</CardTitle>
            <CardDescription className="mt-2 text-dark-300">{paper.abstract}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400">
          <div className="flex items-center gap-1">
            <FileText className="w-4 h-4" aria-hidden="true" />
            <span>{paper.venue}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-mono">{paper.year}</span>
          </div>
          {paper.doi && (
            <a href={`https://doi.org/${paper.doi}`} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-mono text-xs">
              DOI: {paper.doi}
            </a>
          )}
          {paper.arxivId && (
            <a href={`https://arxiv.org/abs/${paper.arxivId}`} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline font-mono text-xs">
              arXiv:{paper.arxivId}
            </a>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {paper.tags.map((tag) => (
            <Badge key={tag} variant="outline" size="sm">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {paper.githubUrl && (
            <a href={paper.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-accent-cyan hover:text-accent-green transition-colors">
              <Github className="w-4 h-4" aria-hidden="true" />
              Code
            </a>
          )}
          <a href={`https://scholar.google.com/scholar?q=${encodeURIComponent(paper.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono text-dark-400 hover:text-accent-cyan transition-colors">
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
            Cite
          </a>
        </div>
      </CardContent>
    </Card>
  );
}