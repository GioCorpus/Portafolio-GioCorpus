import { cn } from '../../lib/utils';

export function QEOSArchitecturePreview() {
  const layers = [
    { name: 'APPLICATIONS', color: 'accent-cyan' },
    { name: 'SERVICES', color: 'accent-cyan' },
    { name: 'KERNEL', color: 'accent-green', highlight: true },
    { name: 'MEM', color: 'accent-amber', subgroup: true },
    { name: 'HAL', color: 'accent-amber', subgroup: true },
    { name: 'IPC', color: 'accent-amber', subgroup: true },
    { name: 'DRIVERS', color: 'accent-cyan' },
    { name: 'HARDWARE', color: 'accent-green' },
  ];

  return (
    <div className="relative" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 300 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="qeosLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#00ff88" stopOpacity="0.3" />
          </linearGradient>
          <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L8,3 Z" fill="#00d4ff" opacity="0.5" />
          </marker>
        </defs>

        {/* Central vertical line */}
        <line x1="150" y1="30" x2="150" y2="370" stroke="url(#qeosLineGradient)" strokeWidth="2" strokeDasharray="8,4" />

        {/* Layers */}
        {layers.map((layer, index) => {
          const y = 50 + index * 40;
          const isSubgroup = layer.subgroup;
          const isKernel = layer.highlight;
          const x = isSubgroup ? 200 : 150;
          const width = isSubgroup ? 80 : 180;
          const offsetX = isSubgroup ? 0 : -90;

          return (
            <g key={layer.name} className="layer-group">
              {/* Connection line for subgroups */}
              {isSubgroup && (
                <line
                  x1="150"
                  y1={y + 12}
                  x2="200"
                  y2={y + 12}
                  stroke="#00d4ff"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  opacity="0.4"
                />
              )}

              {/* Box */}
              <rect
                x={offsetX + x - width / 2}
                y={y}
                width={width}
                height={24}
                rx={4}
                fill={isKernel ? 'rgba(0, 255, 136, 0.15)' : 'rgba(0, 212, 255, 0.08)'}
                stroke={isKernel ? '#00ff88' : `#${layer.color === 'accent-cyan' ? '00d4ff' : layer.color === 'accent-green' ? '00ff88' : 'ffb800'}`}
                strokeWidth={isKernel ? 2 : 1}
                strokeOpacity={isKernel ? 0.5 : 0.3}
                className="transition-all duration-300"
              />

              {/* Label */}
              <text
                x={x}
                y={y + 15}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={isSubgroup ? 9 : 11}
                fontWeight={isKernel ? 700 : 500}
                fill={isKernel ? '#00ff88' : layer.color === 'accent-cyan' ? '#00d4ff' : layer.color === 'accent-green' ? '#00ff88' : '#ffb800'}
                opacity={isSubgroup ? 0.8 : 1}
                className="transition-all duration-300"
              >
                {layer.name}
              </text>
            </g>
          );
        })}

        {/* Side annotations */}
        <g fontFamily="'JetBrains Mono', monospace" fontSize="8" fill="#64748b" opacity="0.6">
          <text x="30" y="105" textAnchor="end">Rust</text>
          <text x="30" y="145" textAnchor="end">Memory-Safe</text>
          <text x="270" y="105" textAnchor="start">UEFI Boot</text>
          <text x="270" y="145" textAnchor="start">HAL</text>
          <text x="30" y="265" textAnchor="end">Consensus</text>
          <text x="30" y="305" textAnchor="end">Telemetry</text>
          <text x="270" y="265" textAnchor="start">Quantum</text>
          <text x="270" y="305" textAnchor="start">IPC</text>
          <text x="30" y="385" textAnchor="end">Drivers</text>
          <text x="270" y="385" textAnchor="start">Hardware</text>
        </g>
      </svg>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-accent-cyan/70">
          <span className="w-3 h-3 rounded bg-accent-cyan/20 border border-accent-cyan/30" />
          System Layer
        </span>
        <span className="flex items-center gap-1.5 text-accent-green/70">
          <span className="w-3 h-3 rounded bg-accent-green/20 border border-accent-green/30" />
          Kernel Core
        </span>
        <span className="flex items-center gap-1.5 text-accent-amber/70">
          <span className="w-3 h-3 rounded bg-accent-amber/20 border border-accent-amber/30" />
          Subsystem
        </span>
      </div>
    </div>
  );
}