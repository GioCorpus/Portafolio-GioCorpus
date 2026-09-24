import { techStack } from '../data';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { cn } from '../lib/utils';

const categoryConfig = {
  language: { label: 'Languages', icon: '💻', color: 'accent-cyan' },
  framework: { label: 'Frameworks', icon: '🔧', color: 'accent-green' },
  tool: { label: 'Tools & Platforms', icon: '⚙️', color: 'accent-amber' },
  database: { label: 'Databases', icon: '🗄️', color: 'accent-cyan' },
  cloud: { label: 'Cloud', icon: '☁️', color: 'accent-green' },
  research: { label: 'Quantum Research', icon: '⚛️', color: 'accent-amber' },
};

export function TechStack() {
  const techByCategory = techStack.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, typeof techStack>);

  return (
    <section id="tech-stack" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">04 / Stack</p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Technical Stack</h2>
          <p className="mt-4 leading-7 text-dark-400">
            Technologies, frameworks, and tools I use to build high-performance systems and quantum applications.
          </p>
        </div>

        <div className="space-y-10">
          {Object.entries(categoryConfig).map(([category, config]) => {
            const items = techByCategory[category] || [];
            if (items.length === 0) return null;
            return (
              <div key={category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{config.icon}</span>
                  <div>
                    <h3 className="font-mono text-xs uppercase tracking-widest text-accent-cyan">{config.label}</h3>
                    <p className="text-sm text-dark-500">{items.length} technologies</p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((item) => (
                    <TechItem key={item.name} item={item} color={config.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Languages" value="5" icon="💻" color="accent-cyan" />
          <StatCard label="Frameworks" value="4" icon="🔧" color="accent-green" />
          <StatCard label="Tools & Platforms" value="6" icon="⚙️" color="accent-amber" />
          <StatCard label="Quantum Research" value="4" icon="⚛️" color="accent-cyan" />
        </div>
      </div>
    </section>
  );
}

function TechItem({ item, color }: { item: typeof techStack[0]; color: string }) {
  return (
    <Card variant="hover" padding="md" className="group">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-{color}/20 to-{color}/5 flex items-center justify-center text-2xl">
          {item.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-white truncate">{item.name}</h4>
          <div className="mt-2 h-2 w-full bg-dark-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-{color} to-{color}/50 rounded-full transition-all duration-1000 ease-out group-hover:opacity-100"
              style={{ width: `${item.proficiency}%` }}
              role="progressbar"
              aria-valuenow={item.proficiency}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${item.name} proficiency: ${item.proficiency}%`}
            />
          </div>
          <p className="mt-1 font-mono text-xs text-{color}/70">{item.proficiency}% proficiency</p>
        </div>
      </div>
    </Card>
  );
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: string; color: string }) {
  return (
    <Card variant="hover" padding="lg" className="text-center group">
      <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-{color}/20 to-{color}/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="font-display text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 font-mono text-xs uppercase tracking-wider text-dark-500">{label}</p>
    </Card>
  );
}