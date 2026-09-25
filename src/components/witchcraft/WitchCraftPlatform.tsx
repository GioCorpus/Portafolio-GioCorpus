import { cn } from '../../lib/utils';
import { statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps { status: ProjectStatus; }
function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return <span className={cn('inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border', variant.bgColor, variant.borderColor)} style={{ color: variant.color }}>{variant.label}</span>;
}

export function WitchCraftPlatform() {
  return (
    <section id="platform" className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')} aria-labelledby="platform-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10"><h2 id="platform-heading" className="mb-4 text-3xl font-bold text-white">Project Platform (React / FastAPI / MongoDB)</h2>
        <p className="text-neutral-400 max-w-3xl">Full-stack documentation and publisher platform. <strong>This is NOT the game's runtime backend.</strong> It serves specs, mechanics catalog, dashboard, publisher deck, and concept art.</p></header>
        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Architecture</h3>
          <div className="overflow-x-auto"><pre className="bg-neutral-900/50 border border-neutral-700 rounded-lg p-6 text-sm font-mono text-neutral-300 overflow-x-auto"><code>{`USER → React (3000) → FastAPI (8000) → MongoDB
5 Pages: Home, Docs, Publisher, Dashboard, Concept Art
7 Collections: specs, mechanics, art, team, roadmap, publisher, metrics`}</code></pre></div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Frontend Pages (Implemented)</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Home Page</span><StatusBadge status="implemented" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Documentation Page</span><StatusBadge status="implemented" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Publisher Page</span><StatusBadge status="implemented" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Dashboard Page</span><StatusBadge status="implemented" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Concept Art Page</span><StatusBadge status="implemented" /></div>
            <div className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"><span className="text-neutral-300">Navbar + API Status</span><StatusBadge status="implemented" /></div>
          </div></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Backend API (Implemented)</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm font-mono">
            <li>GET/POST /api/technical-specs</li>
            <li>GET/POST /api/game-mechanics (category filter)</li>
            <li>GET/POST /api/concept-art (category filter)</li>
            <li>GET/POST /api/team-members (role filter)</li>
            <li>GET/POST /api/roadmap (milestone filter)</li>
            <li>GET/POST /api/publisher-data (section filter)</li>
            <li>GET/POST /api/progress-metrics (category filter)</li>
            <li>GET /api/dashboard-summary (aggregated)</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Data Models (Pydantic)</h3>
          <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm font-mono">
            <li>TechnicalSpecs: engine, version, platforms, features, requirements</li>
            <li>GameMechanic: name, description, category, impl_details, priority, status</li>
            <li>ConceptArt: title, description, category, image_url, artist, tags</li>
            <li>TeamMember: name, role (enum), bio, skills, contact, avatar_url</li>
            <li>RoadmapItem: title, description, milestone, dates, status, priority, progress, deps</li>
            <li>PublisherData: section, title, content, data (JSON), order</li>
            <li>ProgressMetric: metric_name, current/target, unit, category</li>
          </ul></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Critical Boundary</h3>
          <p className="text-neutral-300 leading-relaxed mb-4"><strong>This platform does NOT communicate with the Unity game runtime.</strong> It is a project management and documentation tool. The Unity game will have its own local save system (JSON/binary) and will not connect to this API or MongoDB.</p></div>
          <div className="prose prose-invert max-w-none"><h3 className="text-xl font-semibold text-amber-400 mb-4">Evidence</h3>
          <ul className="list-disc list-insize space-y-2 text-neutral-300 text-sm">
            <li>Source: server.py, App.js, pages/*.js</li>
            <li>Seed data: seed_data.py, load_concept_art.py</li>
          </ul></div>
        </div>
      </div>
    </section>
  );
}
export default WitchCraftPlatform;