import { cn } from '../../lib/utils';
import { getProjectTheme, statusVariants } from '../../lib/projectTheme';
import type { ProjectStatus } from '../../types';

interface StatusBadgeProps {
  status: ProjectStatus;
}

function StatusBadge({ status }: StatusBadgeProps) {
  const variant = statusVariants[status] || statusVariants.implemented;
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border',
        variant.bgColor,
        variant.borderColor
      )}
      style={{ color: variant.color }}
    >
      {variant.label}
    </span>
  );
}

const nativeCapabilities = [
{ category: 'Scene Model', items: [
    { name: 'Scene (canvas, layers, playback)', status: 'implemented' as ProjectStatus },
    { name: 'Layer hierarchy (parent/children)', status: 'implemented' as ProjectStatus },
    { name: 'Transform (pos/scale/rot/anchor/alpha)', status: 'implemented' as ProjectStatus },
    { name: 'Timeline with keyframes', status: 'implemented' as ProjectStatus },
    { name: 'Interpolation (5 types)', status: 'implemented' as ProjectStatus },
    { name: 'Depth sorting (back-to-front / front-to-back)', status: 'implemented' as ProjectStatus },
    { name: 'ParallaxEngine (depth planes)', status: 'implemented' as ProjectStatus },
  ]},
  { category: 'Asset Pipeline', items: [
    { name: 'PNG metadata import', status: 'prototype' as ProjectStatus },
    { name: 'SVG dimension extraction (regex)', status: 'prototype' as ProjectStatus },
    { name: 'JSON scene export', status: 'implemented' as ProjectStatus },
    { name: 'WebGL export (HTML + basic shader)', status: 'prototype' as ProjectStatus },
    { name: '.tamayo binary format (JSON wrapper)', status: 'prototype' as ProjectStatus },
    { name: 'ProjectFile import/export', status: 'prototype' as ProjectStatus },
  ]},
  { category: 'Rendering', items: [
    { name: 'CPU render command generation', status: 'implemented' as ProjectStatus },
    { name: 'LightingSystem (ambient + point)', status: 'implemented' as ProjectStatus },
    { name: 'Blend modes (enum defined)', status: 'implemented' as ProjectStatus },
    { name: 'GPU backend / texture submission', status: 'roadmap' as ProjectStatus },
    { name: 'Texture atlasing / sprite batching', status: 'roadmap' as ProjectStatus },
  ]},
{ category: 'Editor & Tooling', items: [
    { name: 'CLI EditorApp', status: 'implemented' as ProjectStatus },
    { name: 'GUI Editor (panels declared)', status: 'roadmap' as ProjectStatus },
    { name: 'Blender export pipeline', status: 'roadmap' as ProjectStatus },
  ]},
  { category: 'Testing & Quality', items: [
    { name: '8 Catch2 test suites (~150 cases)', status: 'implemented' as ProjectStatus },
    { name: 'Transform/Keyframe/Timeline tests', status: 'implemented' as ProjectStatus },
    { name: 'Layer/Scene/Parallax/RenderContext tests', status: 'implemented' as ProjectStatus },
    { name: 'Import/Export tests', status: 'implemented' as ProjectStatus },
  ]},
];

const unityCapabilities = [
  { category: 'Unity Prototype', items: [
    { name: 'ParallaxController (factor-based)', status: 'implemented' as ProjectStatus },
    { name: 'CameraController (ortho, follow, zoom, pan, shake)', status: 'implemented' as ProjectStatus },
    { name: 'QuantumGlow URP shader', status: 'implemented' as ProjectStatus },
    { name: 'Blender pipeline (24 export scripts)', status: 'implemented' as ProjectStatus },
    { name: 'BlenderWorkflowEditor', status: 'prototype' as ProjectStatus },
    { name: 'Scene/Animation model', status: 'roadmap' as ProjectStatus },
    { name: 'Unit tests', status: 'roadmap' as ProjectStatus },
  ]},
];

export function TamayoStatus() {
  return (
    <section
      id="status"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="status-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="status-heading" className="mb-4 text-3xl font-bold text-white">
            Implementation Status
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Evidence-based status for every major capability. Populated strictly from source code
            inspection \u2014 no checkmarks without implementation.
          </p>
        </header>

        <div className="space-y-12 max-w-4xl">
{nativeCapabilities.map(({ category, items }) => (
            <div key={category} className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-violet-400 mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map(({ name, status }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"
                  >
                    <span className="text-neutral-300">{name}</span>
                    <StatusBadge status={status} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {unityCapabilities.map(({ category, items }) => (
            <div key={category} className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
              <div className="space-y-3">
                {items.map(({ name, status }) => (
                  <div
                    key={name}
                    className="flex items-center justify-between p-3 bg-neutral-900/50 border border-neutral-800 rounded-lg"
                  >
                    <span className="text-neutral-300">{name}</span>
                    <StatusBadge status={status} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Status Legend</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 text-sm">
              <li><span className="font-medium">Implemented:</span> Code exists, compiles, and is tested</li>
              <li><span className="font-medium">Prototype:</span> Code exists but incomplete or untested</li>
              <li><span className="font-medium">Roadmap:</span> Planned/designed but not yet implemented</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoStatus;