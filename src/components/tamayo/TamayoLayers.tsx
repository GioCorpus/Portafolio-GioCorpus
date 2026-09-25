import { cn } from '../../lib/utils';

export function TamayoLayers() {
  return (
    <section
      id="layers"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="layers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="layers-heading" className="mb-4 text-3xl font-bold text-white">
            Layer System
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Layer properties, depth model, hierarchy, and blend modes.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Layer Structure</h3>
            <p className="text-neutral-300 leading-relaxed">
              The <code>Layer</code> class (<code>include/tamayo/scene/Layer.h</code>) represents
              a single visual element in the scene. Each layer has a unique ID, name, z-depth,
              transform, timeline, blend mode, and optional parent.
            </p>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Property</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Type</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">id</td><td className="p-2">LayerID (uint64_t)</td><td className="p-2">Unique identifier (assigned by Scene)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">name</td><td className="p-2">std::string</td><td className="p-2">Human-readable name</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">zDepth</td><td className="p-2">float</td><td className="p-2">Depth for sorting (lower = further back)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">transform</td><td className="p-2">Transform</td><td className="p-2">Position, scale, rotation, anchor, alpha</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">timeline</td><td className="p-2">Timeline</td><td className="p-2">Keyframe animation data</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">blendMode</td><td className="p-2">BlendMode</td><td className="p-2">Compositing mode (default: Normal)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">parentId</td><td className="p-2">LayerID</td><td className="p-2">Parent layer (0 = root)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">visible</td><td className="p-2">bool</td><td className="p-2">Visibility toggle</td></tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Depth Model</h3>
            <p className="text-neutral-300 leading-relaxed">
              <code>zDepth</code> is a float value determining render order. The scene sorts layers
              back-to-front (ascending zDepth) by default. The <code>ParallaxEngine</code> uses
              normalized depth (0.0 = far plane, 1.0 = near plane) to calculate parallax offsets.
            </p>
            <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-violet-400 mb-2">Parallax Depth Mapping</h4>
              <pre className="text-sm text-neutral-300">
{`// In ParallaxEngine
float normalizedDepth = (zDepth - minDepth) / (maxDepth - minDepth);
glm::vec2 offset = cameraOffset * normalizedDepth * parallaxFactor;
glm::vec2 scale = 1.0f + normalizedDepth * depthScaleFactor;`}
              </pre>
            </div>
<div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Hierarchy</h3>
            <p className="text-neutral-300 leading-relaxed">
              Layers form a tree through <code>parentId</code>. Children inherit parent's transform
              (position, scale, rotation) during evaluation. The <code>Transform::compose()</code>
              method combines parent and child transforms. A layer's world transform is:
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`worldTransform = parentTransform * localTransform`}
            </pre>
            <p className="text-neutral-300 leading-relaxed mt-4">
              The scene does not enforce hierarchy constraints — cycles are possible if
              parentId references are manipulated incorrectly (no validation in current implementation).
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Blend Modes</h3>
            <p className="text-neutral-300 leading-relaxed">
              The <code>BlendMode</code> enum (<code>include/tamayo/scene/BlendMode.h</code>)
              defines how a layer composites over the background. Currently enum-only; actual
              GPU blending is not implemented in the native renderer.
            </p>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Mode</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Enum Value</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Normal</td><td className="p-2">0</td><td className="p-2">Standard alpha over (default)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Additive</td><td className="p-2">1</td><td className="p-2">Add colors (glow, light)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Multiply</td><td className="p-2">2</td><td className="p-2">Multiply colors (shadows)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Screen</td><td className="p-2">3</td><td className="p-2">Inverse multiply (highlights)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Overlay</td><td className="p-2">4</td><td className="p-2">Multiply or screen based on bg</td></tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Layer Evaluation</h3>
            <p className="text-neutral-300 leading-relaxed">
              During <code>Scene::evaluateCurrentFrame()</code>, each layer's timeline is sampled
              at the current frame. The resulting <code>Transform</code> is combined with the
              parent's world transform (if any) to produce the final world matrix used for rendering.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`void Layer::evaluate(uint32_t frame) {
    transform_ = timeline_.evaluate(frame);
    if (parentId_ != 0 && scene_) {
        auto parent = scene_->getLayer(parentId_);
        if (parent) {
            transform_ = parent->getWorldTransform() * transform_;
        }
    }
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default TamayoLayers;