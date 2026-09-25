import { cn } from '../../lib/utils';
import { researchMapNodes, researchMapEdges } from '../../data/research';

export function ResearchMap() {
  const nodeColors = {
    core: 'bg-cyan-500',
    area: 'bg-amber-500',
    topic: 'bg-violet-500',
  };

  const nodeBorderColors = {
    core: 'border-cyan-400',
    area: 'border-amber-400',
    topic: 'border-violet-400',
  };

  return (
    <section id="research-map" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="research-map-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 id="research-map-heading" className="mb-4 text-3xl font-bold text-white">Research Map</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Relationships between QEOS research areas. Core → Areas → Topics. Hover nodes for details.
          </p>
        </header>
        <div className="relative" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', aspectRatio: '800 / 700' }}>
          <svg
            viewBox="0 0 800 700"
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
            role="img"
            aria-label="Research map showing QEOS at center connected to Systems Research, Compute Research, and Telemetry & Energy areas, each branching to specific topics"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <path d="M0,0 L0,7 L9,3.5 Z" fill="#4a5568" />
              </marker>
            </defs>
            {/* Edges */}
            {researchMapEdges.map((edge, index) => {
              const fromNode = researchMapNodes.find(n => n.id === edge.from);
              const toNode = researchMapNodes.find(n => n.id === edge.to);
              if (!fromNode || !toNode) return null;
              return (
                <line
                  key={index}
                  x1={fromNode.x}
                  y1={fromNode.y}
                  x2={toNode.x}
                  y2={toNode.y}
                  stroke="#4a5568"
                  strokeWidth="1.5"
                  markerEnd="url(#arrowhead)"
                  opacity="0.5"
                />
              );
            })}
            {/* Nodes */}
            {researchMapNodes.map((node) => (
              <g key={node.id} className="cursor-pointer group">
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.type === 'core' ? 28 : node.type === 'area' ? 22 : 16}
                  className={cn(
                    nodeColors[node.type],
                    nodeBorderColors[node.type],
                    'border-2 transition-all duration-200',
                    'group-hover:scale-110 group-hover:border-white group-hover:shadow-lg group-hover:shadow-cyan-500/20'
                  )}
                />
                <text
                  x={node.x}
                  y={node.y + 4}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className={cn(
                    'text-white font-medium transition-opacity duration-200',
                    node.type === 'core' ? 'text-sm' : node.type === 'area' ? 'text-xs' : 'text-[10px]'
                  )}
                  style={{ pointerEvents: 'none' }}
                >
                  {node.label.split('\n').map((line, i) => (
                    <tspan key={i} x={node.x} dy={i === 0 ? '-0.6em' : '1.2em'}>
                      {line}
                    </tspan>
                  ))}
                </text>
                <title>{node.label.replace('\n', ' — ')}</title>
              </g>
            ))}
          </svg>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-4 h-4 rounded-full bg-cyan-500 border-2 border-cyan-400" />
            <span>Core (QEOS)</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-4 h-4 rounded-full bg-amber-500 border-2 border-amber-400" />
            <span>Research Areas</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span className="w-4 h-4 rounded-full bg-violet-500 border-2 border-violet-400" />
            <span>Specific Topics</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResearchMap;