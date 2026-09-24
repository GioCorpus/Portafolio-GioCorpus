import { cn } from '../../lib/utils';

export function TamayoPipelinePreview() {
  const stages = [
    { name: 'ASSET', color: 'accent-cyan', desc: 'Import & Preprocess' },
    { name: 'SCENE', color: 'accent-cyan', desc: 'Composition' },
    { name: 'LAYERS', color: 'accent-violet', desc: 'Depth Sorting', highlight: true },
    { name: 'TRANSFORMS', color: 'accent-violet', desc: 'Matrix Ops' },
    { name: 'TIMELINE', color: 'accent-amber', desc: 'Keyframes', highlight: true },
    { name: 'ANIMATION', color: 'accent-amber', desc: 'Easing & Blending', branch: true },
    { name: 'PARALLAX', color: 'accent-amber', desc: 'Depth Offset', branch: true },
    { name: 'RENDERER', color: 'accent-green', desc: 'URP / Native' },
  ];

  const positions: Record<string, {x: number, y: number}> = {
    'ASSET': { x: 40, y: 172 },
    'SCENE': { x: 100, y: 172 },
    'LAYERS': { x: 160, y: 172 },
    'TRANSFORMS': { x: 220, y: 172 },
    'TIMELINE': { x: 280, y: 172 },
    'ANIMATION': { x: 160, y: 100 },
    'PARALLAX': { x: 160, y: 244 },
    'RENDERER': { x: 340, y: 172 },
  };

  return (
    <div className="relative" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 400 380" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="tamayoLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#ffb800" stopOpacity="0.3" />
          </linearGradient>
          <marker id="tamayoArrow" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L8,3 Z" fill="#8b5cf6" opacity="0.5" />
          </marker>
        </defs>

        {/* Main pipeline flow */}
        <g stroke="url(#tamayoLineGradient)" strokeWidth="2" fill="none" strokeDasharray="6,4">
          <path d="M40 190 H360" markerEnd="url(#tamayoArrow)" />
          <path d="M280 190 V130" stroke="#ffb800" strokeOpacity="0.4" strokeDasharray="4,4" />
          <path d="M280 190 V250" stroke="#ffb800" strokeOpacity="0.4" strokeDasharray="4,4" />
        </g>

        {stages.map((stage) => {
          const pos = positions[stage.name] || { x: 0, y: 0 };
          const isHighlight = stage.highlight;
          const width = 90, height = 36;
          
          return (
            <g key={stage.name} className="stage-group">
              {stage.branch && (
                <line
                  x1={280}
                  y1={190}
                  x2={pos.x + 45}
                  y2={pos.y + (stage.name === 'ANIMATION' ? 36 : 0)}
                  stroke="#ffb800"
                  strokeWidth={1.5}
                  strokeDasharray="4,4"
                  opacity="0.5"
                  strokeLinecap="round"
                />
              )}

              <rect
                x={pos.x}
                y={pos.y}
                width={width}
                height={height}
                rx={6}
                fill={isHighlight ? `rgba(${stage.color === 'accent-violet' ? '139, 92, 246' : '255, 184, 0'}, 0.15)` : 'rgba(0, 212, 255, 0.08)'}
                stroke={isHighlight ? (stage.color === 'accent-violet' ? '#8b5cf6' : '#ffb800') : '#00d4ff'}
                strokeWidth={isHighlight ? 2 : 1}
                strokeOpacity={isHighlight ? 0.5 : 0.3}
                className="transition-all duration-300"
              />

              <text
                x={pos.x + width / 2}
                y={pos.y + 14}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={9}
                fontWeight={isHighlight ? 700 : 500}
                fill={isHighlight ? (stage.color === 'accent-violet' ? '#8b5cf6' : '#ffb800') : '#00d4ff'}
                className="transition-all duration-300"
              >
                {stage.name}
              </text>

              <text
                x={pos.x + width / 2}
                y={pos.y + 26}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={7}
                fill="#64748b"
                opacity="0.7"
              >
                {stage.desc}
              </text>
            </g>
          );
        })}

        <g fontFamily="'JetBrains Mono', monospace" fontSize="8" fill="#64748b" opacity="0.5">
          <text x="40" y="90" textAnchor="middle">Native C++</text>
          <text x="340" y="90" textAnchor="middle">Unity 6 URP</text>
          <text x="40" y="350" textAnchor="middle">CMake Build</text>
          <text x="340" y="350" textAnchor="middle">Editor Tools</text>
        </g>
      </svg>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-accent-cyan/70">
          <span className="w-3 h-3 rounded bg-accent-cyan/20 border border-accent-cyan/30" />
          Core Pipeline
        </span>
        <span className="flex items-center gap-1.5 text-accent-violet/70">
          <span className="w-3 h-3 rounded bg-accent-violet/20 border border-accent-violet/30" />
          Layer System
        </span>
        <span className="flex items-center gap-1.5 text-accent-amber/70">
          <span className="w-3 h-3 rounded bg-accent-amber/20 border border-accent-amber/30" />
          Animation
        </span>
        <span className="flex items-center gap-1.5 text-accent-green/70">
          <span className="w-3 h-3 rounded bg-accent-green/20 border border-accent-green/30" />
          Render Output
        </span>
      </div>
    </div>
  );
}