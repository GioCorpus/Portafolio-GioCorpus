import { cn } from '../../lib/utils';

export function TamayoScene() {
  return (
    <section
      id="scene"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="scene-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="scene-heading" className="mb-4 text-3xl font-bold text-white">
            Scene Model
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Canvas configuration, layer ownership, and playback control.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Scene Definition</h3>
            <p className="text-neutral-300 leading-relaxed">
              The <code>Scene</code> class (<code>include/tamayo/scene/Scene.h</code>) is the root
              container for a composition. It owns the canvas definition, the layer collection,
              and the playback state.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Canvas Properties</h3>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Property</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Type</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">width</td><td className="p-2">uint32_t</td><td className="p-2">Canvas width in pixels</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">height</td><td className="p-2">uint32_t</td><td className="p-2">Canvas height in pixels</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">backgroundColor</td><td className="p-2">Color</td><td className="p-2">Background fill (RGBA)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">fps</td><td className="p-2">float</td><td className="p-2">Frames per second (default 30.0)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">totalFrames</td><td className="p-2">uint32_t</td><td className="p-2">Total frame count (default 100)</td></tr>
              </tbody>
            </table>
          </div>
<div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Layer Ownership</h3>
            <p className="text-neutral-300 leading-relaxed">
              Scene owns all layers via <code>std::shared_ptr<Layer></code>. Layers are added
              through <code>addLayer()</code> which assigns a unique <code>LayerID</code> (uint64_t).
              The scene maintains a flat vector of layers; hierarchy is expressed through each layer's
              <code>parentID</code> field, not through nested containers.
            </p>
            <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-violet-400 mb-2">Key Methods</h4>
              <pre className="text-sm text-neutral-300">
{`// Add layer to scene, returns assigned LayerID
LayerID addLayer(std::shared_ptr<Layer> layer);

// Remove layer by ID
bool removeLayer(LayerID id);

// Get layer by ID (const and non-const)
std::shared_ptr<Layer> getLayer(LayerID id);
const std::shared_ptr<Layer> getLayer(LayerID id) const;

// Get all layers (for iteration)
const std::vector<std::shared_ptr<Layer>>& getLayers() const;`}
              </pre>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Depth Sorting</h3>
            <p className="text-neutral-300 leading-relaxed">
              The scene provides <code>getSortedLayers()</code> which returns layers sorted by
              <code>zDepth</code> (back-to-front by default). The <code>DepthSorter</code> in the
              renderer can also sort front-to-back. Layers with equal zDepth maintain insertion order.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`std::vector<std::shared_ptr<Layer>> getSortedLayers() const {
    auto layers = layers_;
    std::sort(layers.begin(), layers.end(),
        [](const auto& a, const auto& b) {
            return a->getZDepth() < b->getZDepth();  // back-to-front
        });
    return layers;
}`}
            </pre>
          </div>
<div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Playback Control</h3>
            <p className="text-neutral-300 leading-relaxed">
              <code>EditorApp</code> manages playback state. The scene tracks the current frame
              and provides methods to evaluate all layer timelines at that frame.
            </p>
            <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-violet-400 mb-2">Playback API</h4>
              <pre className="text-sm text-neutral-300">
{`// Current frame (0 to totalFrames-1)
void setCurrentFrame(uint32_t frame);
uint32_t getCurrentFrame() const;

// Evaluate all layer timelines at current frame
void evaluateCurrentFrame();

// Total frames in scene
uint32_t getTotalFrames() const;`}
              </pre>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Scene JSON Serialization</h3>
            <p className="text-neutral-300 leading-relaxed">
              Scenes serialize to JSON via <code>JsonExporter</code>. The format includes canvas
              properties, all layers (with their timelines and keyframes), and hierarchy.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`{
  "canvas": { "width": 1920, "height": 1080, "fps": 30, "totalFrames": 120 },
  "layers": [
    { "id": 1, "name": "Background", "zDepth": 0, "parentId": 0, ... },
    { "id": 2, "name": "Character", "zDepth": 10, "parentId": 0, ... }
  ]
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoScene;