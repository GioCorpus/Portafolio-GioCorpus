import { cn } from '../../lib/utils';

export function WitchCraftSystemsPreview() {
  const systems = [
    { name: 'WITCHCRAFT', x: 200, y: 40, color: 'accent-amber', central: true },
    { name: 'TACTICAL COMBAT', x: 60, y: 140, color: 'accent-cyan', parent: 'WITCHCRAFT' },
    { name: 'MAGIC SYSTEM', x: 200, y: 140, color: 'accent-violet', parent: 'WITCHCRAFT' },
    { name: 'NAHUAL TRANSFORMATION', x: 340, y: 140, color: 'accent-amber', parent: 'WITCHCRAFT' },
    { name: 'PROGRESSION', x: 200, y: 240, color: 'accent-green', parent: 'MAGIC SYSTEM' },
    { name: 'BONDS', x: 120, y: 320, color: 'accent-violet', parent: 'PROGRESSION' },
    { name: 'NARRATIVE', x: 280, y: 320, color: 'accent-cyan', parent: 'PROGRESSION' },
  ];

  const connections = [
    { from: 'WITCHCRAFT', to: 'TACTICAL COMBAT' },
    { from: 'WITCHCRAFT', to: 'MAGIC SYSTEM' },
    { from: 'WITCHCRAFT', to: 'NAHUAL TRANSFORMATION' },
    { from: 'MAGIC SYSTEM', to: 'PROGRESSION' },
    { from: 'PROGRESSION', to: 'BONDS' },
    { from: 'PROGRESSION', to: 'NARRATIVE' },
  ];

  const getPos = (name: string) => systems.find(s => s.name === name)!;

  return (
    <div className="relative" aria-hidden="true">
      <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="wcLineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4a843" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00a884" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Connections */}
        <g stroke="url(#wcLineGradient)" strokeWidth={1.5} fill="none" strokeDasharray="4,4" opacity="0.4">
          {connections.map((conn, i) => {
            const from = getPos(conn.from);
            const to = getPos(conn.to);
            return (
              <path
                key={i}
                d={`M${from.x} ${from.y + 30} Q${from.x} ${(from.y + to.y) / 2} ${to.x} ${to.y - 10}`}
                strokeLinecap="round"
              />
            );
          })}
        </g>

        {/* System nodes */}
        {systems.map((system) => {
          const isCentral = system.central;
          const width = isCentral ? 140 : 110;
          const height = isCentral ? 44 : 36;
          const x = system.x - width / 2;
          const y = system.y - height / 2;

          return (
            <g key={system.name} className="system-node">
              <rect
                x={x}
                y={y}
                width={width}
                height={height}
                rx={8}
                fill={isCentral ? 'rgba(212, 168, 67, 0.15)' : `rgba(0, 0, 0, 0.3)`}
                stroke={system.color === 'accent-amber' ? '#d4a843' : system.color === 'accent-cyan' ? '#00d4ff' : system.color === 'accent-violet' ? '#8b5cf6' : '#00a884'}
                strokeWidth={isCentral ? 2 : 1.5}
                strokeOpacity={isCentral ? 0.6 : 0.4}
                className="transition-all duration-300"
              />

              <text
                x={system.x}
                y={system.y + 4}
                textAnchor="middle"
                fontFamily="'JetBrains Mono', monospace"
                fontSize={isCentral ? 12 : 8}
                fontWeight={isCentral ? 700 : 600}
                fill={system.color === 'accent-amber' ? '#d4a843' : system.color === 'accent-cyan' ? '#00d4ff' : system.color === 'accent-violet' ? '#8b5cf6' : '#00a884'}
                letterSpacing={isCentral ? '0.1em' : '0.05em'}
              >
                {system.name}
              </text>

              {!isCentral && (
                <text
                  x={system.x}
                  y={system.y + 18}
                  textAnchor="middle"
                  fontFamily="'JetBrains Mono', monospace"
                  fontSize={6}
                  fill="#64748b"
                  opacity="0.6"
                >
                  {system.parent}
                </text>
              )}
            </g>
          );
        })}

        {/* Tech stack indicators */}
        <g fontFamily="'JetBrains Mono', monospace" fontSize="7" fill="#64748b" opacity="0.45">
          <text x="60" y="185" textAnchor="middle">Unreal Engine 5</text>
          <text x="60" y="195" textAnchor="middle">GAS + Lyra</text>
          <text x="200" y="185" textAnchor="middle">Gameplay</text>
          <text x="200" y="195" textAnchor="middle">Ability System</text>
          <text x="340" y="185" textAnchor="middle">State-Driven</text>
          <text x="340" y="195" textAnchor="middle">Visual FX</text>
          <text x="120" y="360" textAnchor="middle">React + FastAPI</text>
          <text x="280" y="360" textAnchor="middle">MongoDB</text>
          <text x="280" y="370" textAnchor="middle">Dialogue Graph</text>
        </g>
      </svg>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
        <span className="flex items-center gap-1.5 text-accent-amber/70">
          <span className="w-3 h-3 rounded bg-accent-amber/20 border border-accent-amber/30" />
          Core Systems
        </span>
        <span className="flex items-center gap-1.5 text-accent-cyan/70">
          <span className="w-3 h-3 rounded bg-accent-cyan/20 border border-accent-cyan/30" />
          Combat & Narrative
        </span>
        <span className="flex items-center gap-1.5 text-accent-violet/70">
          <span className="w-3 h-3 rounded bg-accent-violet/20 border border-accent-violet/30" />
          Magic & Bonds
        </span>
        <span className="flex items-center gap-1.5 text-accent-green/70">
          <span className="w-3 h-3 rounded bg-accent-green/20 border border-accent-green/30" />
          Progression
        </span>
      </div>
    </div>
  );
}