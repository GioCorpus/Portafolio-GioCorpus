import { cn } from '../../lib/utils';

export function TamayoOverview() {
  return (
    <section
      id="overview"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="overview-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="overview-heading" className="mb-4 text-3xl font-bold text-white">
            Executive Technical Overview
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Understand what Tamayo is, why it exists, and what engineering domains it demonstrates —
            without requiring graphics-engine specialist knowledge.
          </p>
        </header>

        <div className="space-y-8 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">What Is Tamayo?</h3>
            <p className="text-neutral-300 leading-relaxed">
              Tamayo is a 2.5D animation and rendering engine built as a dual-track project:
              a native C++20 engine core and a parallel Unity 6 URP prototype.
              It targets games, motion design, and interactive narratives — providing
              depth-aware layer compositing, parallax scrolling, keyframe-based timeline animation,
              and a flexible asset pipeline with JSON/WebGL export.
            </p>
            <p className="text-neutral-300 leading-relaxed mt-4">
              The name honors Rufino Tamayo, the Oaxacan painter known for synthesizing
              modernist abstraction with Mexican folk art — fitting for an engine that
              bridges 2D animation heritage with 3D spatial concepts.
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">Why Build a 2.5D Engine?</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
              <li>
                <strong>2D workflow, 3D depth:</strong> Artists work with familiar 2D assets (sprites, SVGs)
                while the engine provides camera-aware parallax, depth sorting, and lighting — enabling
                cinematic 2.5D scenes without full 3D modeling pipelines.
              </li>
              <li>
                <strong>Dual-track validation:</strong> The Unity prototype enables rapid iteration
                on rendering concepts, UI/UX workflows, and Blender integration. The native C++ engine
                establishes ownership of the core architecture, rendering pipeline, and data formats.
              </li>
              <li>
                <strong>Engineering discipline:</strong> Explicit depth model, transform hierarchy,
                timeline evaluation with multiple interpolation types, and a versioned binary project format
                (.tamayo) — demonstrated in tested C++20 code, not marketing.
              </li>
              <li>
                <strong>Open, portable foundation:</strong> CMake + FetchContent build, Apache 2.0 license,
                no runtime dependencies beyond GLFW (windowing) and standard libraries. WebGL export enables
                browser-based preview without plugins.
              </li>
            </ul>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-violet-400 mb-4">Key Technical Domains Demonstrated</h3>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed">
              <li><strong>Graphics/Rendering:</strong> CPU-side render command generation, depth sorting, lighting, parallax transform application</li>
              <li><strong>Animation Systems:</strong> Per-layer timelines, keyframe interpolation (Linear, EaseIn, EaseOut, Step, CubicBezier)</li>
              <li><strong>Engine Architecture:</strong> Scene graph with layer hierarchy, transform composition, ownership via <code>shared_ptr</code></li>
              <li><strong>Asset Pipeline:</strong> PNG sequence import, SVG dimension extraction, JSON/WebGL/.tamayo export</li>
              <li><strong>Build Systems:</strong> CMake 3.20+, C++20, FetchContent for nlohmann/json, GLM, Catch2</li>
              <li><strong>Testing:</strong> 8 Catch2 test suites (~150 cases) covering all core subsystems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoOverview;
