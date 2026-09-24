import { cn } from '../../lib/utils';

export function TamayoWhy25D() {
  return (
    <section
      id="why-25d"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="why-25d-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="why-25d-heading" className="mb-4 text-3xl font-bold text-white">
            Why 2.5D? — Tamayo's Spatial Model
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            A technical explanation of what "2.5D" means in Tamayo's implementation,
            distinct from generic textbook definitions.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Definition</h3>
            <p className="text-neutral-300 leading-relaxed">
              In Tamayo, <strong>2.5D</strong> means: <em>2D raster/vector assets placed in a depth-aware
              3D coordinate space, rendered via orthographic projection with explicit per-layer z-depth,
              camera-relative parallax offsets, and depth-based lighting falloff.</em>
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              This is not "2D with fake perspective" — it is a deliberate architectural choice
              where depth is a first-class property of every layer, driving render order, parallax,
              and lighting simultaneously.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">The Three Pillars</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-violet-400 mb-3">1. Depth-Aware Layers</h4>
                <ul className="text-sm text-neutral-300 space-y-2 list-disc list-inside">
                  <li>Every <code>Layer</code> has a <code>zDepth: float</code></li>
                  <li>Higher zDepth = further back = rendered first (back-to-front)</li>
                  <li>Depth controls parallax factor, lighting falloff, render order</li>
                  <li>Layer hierarchy: parent/child with recursive search</li>
                </ul>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-3">2. Camera-Relative Parallax</h4>
                <ul className="text-sm text-neutral-300 space-y-2 list-disc list-inside">
                  <li><code>ParallaxEngine</code> computes offset/scale per layer depth</li>
                  <li><code>parallaxFactor = 1 - normalizedDepth * strength</code></li>
                  <li>Deeper layers move less, scale less with zoom</li>
                  <li>Even depth distribution across configurable planes (default 5)</li>
                </ul>
              </div>
              <div className="p-4 bg-neutral-900/50 border border-neutral-800 rounded-lg">
                <h4 className="font-semibold text-amber-400 mb-3">3. Depth-Based Lighting</h4>
                <ul className="text-sm text-neutral-300 space-y-2 list-disc list-inside">
                  <li>Ambient + point lights with distance attenuation</li>
                  <li>Depth falloff: <code>1 / (1 + depth * depthFalloff)</code></li>
                  <li>Calculated at layer center per frame</li>
                  <li>Integrated into <code>RenderCommand.color</code></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoWhy25D;