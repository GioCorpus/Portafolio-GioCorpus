import { cn } from '../../lib/utils';

export function TamayoArchitecture() {
  return (
    <section
      id="architecture"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="architecture-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="architecture-heading" className="mb-4 text-3xl font-bold text-white">
            Engine Architecture
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Native C++ engine subsystem architecture derived from source inspection.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Subsystem Diagram</h3>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300">
{`+---------------+      +---------------+      +---------------+
|   Application | ---> |  EditorApp    | ---> |   Scene       |
|   (main.cpp)  |      |  (CLI Editor) |      |   (Canvas,    |
+---------------+      +---------------+      |    Layers,    |
                                                |    Playback)  |
        |                        |            +---------------+
        v                        v                     |
+---------------+      +---------------+      +---------------+
|  tamayo_core  |      |   Renderer    |      |   Parallax    |
|  (library)    |      |               |      |   Engine      |
|               |      | - DepthSorter |      |               |
| - Transform   |      | - LightingSys |      | - Depth planes|
| - Keyframe    |      | - RenderCtx   |      | - Offset/scale|
| - Timeline    |      +---------------+      +---------------+
| - Layer       |               |                    |
| - Scene       |               v                    v
| - Parallax    |      +---------------+      +---------------+
+---------------+      |  Import/Export|      |   Assets      |
        |              |               |      |               |
        v              | - PngImporter |      | PNG (meta)    |
+---------------+      | - SvgImporter |      | SVG (regex)   |
|   Tests       |      | - JsonExport  |      +---------------+
|  (Catch2)     |      | - WebGLExport |
+---------------+      | - ProjectFile |
                       +---------------+`}
            </pre>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Core Library (tamayo_core)</h3>
            <p className="text-neutral-300 leading-relaxed">
              The <code>tamayo_core</code> static library contains all engine subsystems.
              Built with C++20, zero runtime dependencies beyond standard library,
              GLM (math), and nlohmann/json (serialization).
            </p>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Module</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Purpose</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Key Types</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Transform</td><td className="p-2">Position, scale, rotation, anchor, matrix, lerp</td><td className="p-2">Transform, Anchor</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Keyframe</td><td className="p-2">Frame index, transform, interpolation, bezier handles</td><td className="p-2">Keyframe, InterpolationType</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Timeline</td><td className="p-2">Sorted keyframes, evaluation, frame/time conversion</td><td className="p-2">Timeline</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Layer</td><td className="p-2">zDepth, transform, timeline, hierarchy, blend mode</td><td className="p-2">Layer, BlendMode, LayerID</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Scene</td><td className="p-2">Canvas, layers, playback, depth sorting</td><td className="p-2">Scene, Color</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">ParallaxEngine</td><td className="p-2">Depth-based offset/scale calculation</td><td className="p-2">ParallaxEngine</td></tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Renderer Subsystem</h3>
            <p className="text-neutral-300 leading-relaxed">
              CPU-side render command generation. No GPU backend implemented in native core.
              The <code>RenderContext</code> builds a vector of <code>RenderCommand</code>
              which contains layer reference, transform matrix, computed color, and blend mode.
            </p>
            <div className="bg-neutral-900/30 border border-neutral-800 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-violet-400 mb-2">RenderCommand Structure</h4>
              <pre className="text-sm text-neutral-300">
{`struct RenderCommand {
    std::shared_ptr<Layer> layer;
    glm::mat4 transform;
    Color color;
    BlendMode blendMode;
};`}
              </pre>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Engine Loop (EditorApp)</h3>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300">
{`void EditorApp::update(float deltaTime) {
    if (playing_ && currentScene_) {
        playbackTime_ += deltaTime;
        uint32_t frame = static_cast<uint32_t>(playbackTime_ * fps_);
        if (frame >= currentScene_->getTotalFrames()) {
            playbackTime_ = 0.0f;  // Loop
            frame = 0;
        }
        currentScene_->setCurrentFrame(frame);
    }
}`}
            </pre>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Build Configuration</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li><strong>CMake:</strong> 3.20+, C++20 required, extensions OFF</li>
              <li><strong>Dependencies (FetchContent):</strong> nlohmann/json 3.11.2, GLM 0.9.9.8, Catch2 3.4.0</li>
              <li><strong>GLFW:</strong> Git submodule in <code>external/glfw/</code> (unused by EditorApp)</li>
              <li><strong>Outputs:</strong> <code>tamayo_core</code> (static lib), <code>tamayo</code> (editor CLI), <code>tamayo_tests</code> (test runner)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoArchitecture;