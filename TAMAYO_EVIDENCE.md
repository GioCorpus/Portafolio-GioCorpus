# Tamayo 2.5D Engine Evidence Ledger

## Repository

**Local Path:** `C:/Users/HP/Documents/Documentos Personales GACB/Demo/Tamayo-2.5D-Engine-For-Unity/`

**GitHub URL (from portfolio data):** `https://github.com/GioCorpus/Tamayo` — *Note: Repository not found at this URL (HTTP 404). Local source is the primary evidence.*

**Structure:**
```
tamayo/
├── CMakeLists.txt              # Root CMake config with FetchContent
├── src/
│   ├── CMakeLists.txt          # Builds tamayo_core library + tamayo executable
│   ├── core/                   # Core engine implementation
│   ├── renderer/               # Renderer components
│   ├── io/                     # Import/export modules
│   ├── editor/                 # Editor components
│   └── main.cpp                # CLI entry point
├── include/
│   └── tamayo/
│       ├── core/               # Core engine headers
│       ├── renderer/           # Renderer headers
│       ├── io/                 # Import/export headers
│       └── editor/             # Editor headers
├── tests/                      # Catch2 test files (8 test suites)
├── external/                   # External dependencies (GLFW submodule)
├── tamayo-unity/               # Unity 6 URP prototype (Assets/Scripts only)
├── .gitignore
├── .clang-format
├── LICENSE (Apache 2.0)
├── README.md
└── CONTRIBUTING.md
```

## Build System

**CMakeLists.txt (Root):**
- `cmake_minimum_required(VERSION 3.20)`
- `project(Tamayo25D VERSION 0.1.0 LANGUAGES CXX)`
- `CMAKE_CXX_STANDARD 20` (required, extensions OFF)
- FetchContent for: nlohmann/json (v3.11.2), GLM (0.9.9.8), Catch2 (v3.4.0)
- Subdirectories: `src/`, `tests/`
- GLFW as git submodule in `external/glfw/`

**src/CMakeLists.txt:**
- `tamayo_core` library with 16 source files
- `tamayo` executable (editor) with 5 source files + main.cpp
- Public includes: `${CMAKE_SOURCE_DIR}/include`, GLM, nlohmann/json
- Links: `nlohmann_json::nlohmann_json`, `glm::glm`

**tests/CMakeLists.txt:** (inferred) builds `tamayo_tests` with Catch2
## Native C++ Engine

### Core Architecture

| Subsystem | Status | Evidence |
|-----------|--------|----------|
| Transform | **Implemented** | `include/tamayo/core/Transform.h`, `src/core/Transform.cpp`, `tests/test_transform.cpp` |
| Keyframe | **Implemented** | `include/tamayo/core/Keyframe.h`, `src/core/Keyframe.cpp`, `tests/test_keyframe.cpp` |
| Timeline | **Implemented** | `include/tamayo/core/Timeline.h`, `src/core/Timeline.cpp`, `tests/test_timeline.cpp` |
| Layer | **Implemented** | `include/tamayo/core/Layer.h`, `src/core/Layer.cpp`, `tests/test_layer.cpp` |
| Scene | **Implemented** | `include/tamayo/core/Scene.h`, `src/core/Scene.cpp`, `tests/test_scene.cpp` |
| ParallaxEngine | **Implemented** | `include/tamayo/core/ParallaxEngine.h`, `src/core/ParallaxEngine.cpp`, `tests/test_parallax.cpp` |

### Renderer

| Subsystem | Status | Evidence |
|-----------|--------|----------|
| DepthSorter | **Implemented** | `include/tamayo/renderer/DepthSorter.h`, `src/renderer/DepthSorter.cpp`, `tests/test_depth_sorter.cpp` |
| LightingSystem | **Implemented** | `include/tamayo/renderer/LightingSystem.h`, `src/renderer/LightingSystem.cpp` |
| RenderContext | **Implemented** | `include/tamayo/renderer/RenderContext.h`, `src/renderer/RenderContext.cpp` |
### Import/Export

| Subsystem | Status | Evidence |
|-----------|--------|----------|
| PngImporter | **Prototype** | `include/tamayo/io/PngImporter.h`, `src/io/PngImporter.cpp` — *getImageDimensions() is placeholder* |
| SvgImporter | **Prototype** | `include/tamayo/io/SvgImporter.h`, `src/io/SvgImporter.cpp` — *regex-based parsing only* |
| JsonExporter | **Implemented** | `include/tamayo/io/JsonExporter.h`, `src/io/JsonExporter.cpp`, `tests/test_json_exporter.cpp` |
| WebGLExporter | **Prototype** | `include/tamayo/io/WebGLExporter.h`, `src/io/WebGLExporter.cpp` — *basic shaders, no texture loading* |
| ProjectFile | **Prototype** | `include/tamayo/io/ProjectFile.h`, `src/io/ProjectFile.cpp` — *binary wrapper around JSON* |

### Editor

| Subsystem | Status | Evidence |
|-----------|--------|----------|
| EditorApp | **Prototype** | `include/tamayo/editor/EditorApp.h`, `src/editor/EditorApp.cpp` — *CLI only, no windowing* |
| TimelinePanel | **Concept** | Header referenced in CMakeLists, implementation not inspected |
| LayerPanel | **Concept** | Header referenced in CMakeLists, implementation not inspected |
| Viewport | **Concept** | Header referenced in CMakeLists, implementation not inspected |

### Tests

| Test Suite | Status | Coverage |
|------------|--------|----------|
| test_transform.cpp | **Pass** | Construction, position, scale, rotation, alpha clamping, lerp, matrix |
| test_layer.cpp | **Pass** | Construction, properties, image path, content size, transform, keyframes, child hierarchy |
| test_timeline.cpp | **Pass** | Construction, add/remove/clear keyframes, get keyframes, evaluation (linear), boundary, frame/time conversion, prev/next keyframe |
| test_parallax.cpp | **Pass** | Construction, camera offset/zoom, depth-varying offset/scale, apply parallax, layer depth generation |
| test_scene.cpp | **Pass** | Construction, canvas size, background color, add/find/move/remove layer, depth sorting, frame clamping |
| test_depth_sorter.cpp | **Pass** | Back-to-front, front-to-back, visibility filtering, empty input |
| test_json_exporter.cpp | **Pass** | Empty scene, layers, transforms, keyframes, string export, metadata toggle |
| test_keyframe.cpp | **Pass** | Construction, frame, interpolation, bezier handles, ordering, equality |
## Unity Prototype

### Structure
```
tamayo-unity/
└── Assets/
    └── Scripts/
        ├── ParallaxController.cs
        ├── CameraController.cs
        ├── BlenderImportHelper.cs
        ├── DesertSceneManager.cs
        ├── QuantumWaveController.cs
        ├── SolarPanelController.cs
        ├── TilemapParallax.cs
        ├── BlenderImportHelper.cs
        ├── Editor/
        │   ├── BlenderExport*.py (24 files)
        │   └── BlenderWorkflowEditor.cs
        └── Shaders/
            └── QuantumGlow.shader
```

### Capabilities

| Capability | Status | Evidence |
|------------|--------|----------|
| ParallaxController | **Implemented** | `ParallaxController.cs` — factor 0-1, infinite scrolling, LateUpdate |
| CameraController | **Implemented** | `CameraController.cs` — orthographic, follow, zoom, pan, shake, bounds |
| BlenderImportHelper | **Implemented** | `BlenderImportHelper.cs` — FBX import, material extraction, texture baking, quantum materials |
| Blender Export Pipeline | **Implemented** | 24 Python scripts for Blender export (animation, camera, lighting, etc.) |
| QuantumGlow Shader | **Implemented** | `QuantumGlow.shader` — URP custom shader |
| Desert Scene Manager | **Implemented** | `DesertSceneManager.cs` — scene setup from Blender models |

**Unity Version:** Not explicitly found in ProjectSettings (missing). Portfolio data claims "Unity 6 URP".

**Render Pipeline:** URP confirmed by `Universal Render Pipeline/Lit` shader reference and `QuantumGlow.shader` URP structure.

## Core Architecture

**Engine Loop (from EditorApp.cpp):**
```cpp
void EditorApp::update(float deltaTime) {
    if (playing_ && currentScene_) {
        playbackTime_ += deltaTime;
        uint32_t frame = static_cast<uint32_t>(playbackTime_ * fps_);
        if (frame >= currentScene_->getTotalFrames()) {
            playbackTime_ = 0.0f;  // Loop
            frame = 0;
        }
        currentScene_->setCurrentFrame(frame);
    }
}
```

**High-Level Pipeline (from README + source):**
```
ASSET (PNG/SVG) → PngImporter/SvgImporter
    ↓
SCENE (Scene) → addLayer()
    ↓
LAYERS (Layer) → zDepth, transform, timeline
    ↓
TRANSFORMS (Transform) → getMatrix() with anchor
    ↓
TIMELINE (Timeline) → evaluate(frame) with interpolation
    ↓
ANIMATION / PARALLAX (ParallaxEngine.applyParallax)
    ↓
RENDERER (RenderContext.buildRenderCommands)
    ├── DepthSorter.sortAndFilter()
    ├── LightingSystem.calculateLighting()
    └── RenderCommand { layer, transform, color, blendMode }
    ↓
FRAME
```
## Scene Model

**Scene** (`Scene.h/.cpp`):
- Canvas size (width/height)
- Background color (Color struct: r,g,b,a)
- Layer vector: `std::vector<std::shared_ptr<Layer>>`
- Playback state: currentFrame, totalFrames
- ID generation: static `nextID_`

**Layer** (`Layer.h/.cpp`):
- Unique ID (`LayerID` = uint32_t)
- Name, visibility, zDepth (float), blendMode (enum: Normal, Additive, Multiply, Screen, Overlay)
- Image path, content size (width/height)
- Transform (composition, not inheritance)
- Timeline (per-layer animation)
- Child hierarchy: `std::vector<std::shared_ptr<Layer>>` with recursive `findChild()`

**Ownership:** `std::shared_ptr<Layer>` throughout — Scene owns layers, Layer owns children. RAII via smart pointers.

## Layer System

## Rendering

**Graphics Backend:** None implemented in native C++.
- `RenderContext` builds `RenderCommand` list (CPU-side)
- No GPU submission, no window creation, no swapchain
- WebGLExporter generates client-side WebGL 1.0 shaders (vertex/fragment)

**RenderCommand:**
```cpp
struct RenderCommand {
    std::shared_ptr<Layer> layer;
    glm::mat4 transform;
    Color color;           // from LightingSystem
    BlendMode blendMode;   // from Layer
};
```

**Lighting:**
- Ambient: color + intensity
- Point lights: position, color, intensity, radius, falloff
- Depth-based falloff: `1.0 / (1.0 + depth * depthFalloff)`
- Calculated per-layer at layer center

**Shaders (WebGL Export only):**
- Vertex: `a_position`, `a_texCoord`, `u_matrix` (mat3) → `gl_Position`
- Fragment: `v_texCoord`, `u_texture`, `u_color` → `gl_FragColor`

## Depth / Ordering

- **Representation:** float `zDepth` per Layer
- **Sorting:** `std::sort` with custom comparator (back-to-front or front-to-back)
- **Stability:** Not guaranteed (std::sort is not stable)
- **Visibility:** Filtered before sorting in `sortAndFilter()`
- **Transparency:** BlendMode enum but no actual blending implementation

## Camera

**Native C++:**
- No dedicated Camera class
- Camera behavior split: `ParallaxEngine` (offset/zoom), `RenderContext` (transform application)
- `EditorApp` has no camera concept

**Unity Prototype:**
- `CameraController`: orthographic, follow target, zoom (2-10), pan with bounds, shake
- `ParallaxController`: per-layer parallax factor, infinite scrolling

## Parallax

**Native C++ (`ParallaxEngine`):**
- Camera offset (vec2) + zoom (float)
- Depth planes: count, min/max depth, parallaxStrength
- `calculateDepthOffset(depth)`: normalized depth → parallaxFactor = 1 - depth * strength → offset = cameraOffset * factor
- `calculateDepthScale(depth)`: normalized depth → depthScale = 1 - depth * 0.5 → scale = depthScale * cameraZoom
- `generateLayerDepths(count)`: even distribution across [minDepth, maxDepth]
- `applyParallax(layers)`: modifies each layer's transform in-place

**Unity (`ParallaxController`):**
- Per-layer `parallaxFactor` [0,1]
- `LateUpdate()`: deltaX = cameraDelta * factor → transform.position.x += deltaX
- Infinite scrolling: wrap when offset >= spriteWidth

## Animation

**Keyframe:**
- Frame index (uint32_t)
- Transform (full state)
- InterpolationType: Linear, EaseIn, EaseOut, Step, CubicBezier
- Bezier handles: in/out vec2 (for CubicBezier)

**Timeline:**
- Sorted vector of Keyframes (lazy sort)
- `evaluate(frame)`: finds surrounding keyframes, interpolates
- Interpolation implementations:
  - Linear: t
  - EaseIn: t²
  - EaseOut: 1 - (1-t)²
  - Step: returns previous keyframe
  - CubicBezier: simplified `t*t*(3-2t)` (not true bezier)
- `evaluate(time, fps)`: converts time → frame → evaluate
- Frame/time conversion: `timeToFrame(time, fps) = round(time * fps)`
## Timeline

**Data Flow:**
```
Timeline Time (frame or seconds)
     ↓
Timeline.evaluate()
     ↓
getPreviousKeyframe() / getNextKeyframe()
     ↓
Calculate interpolation factor t
     ↓
Apply interpolation type (Linear/EaseIn/EaseOut/Step/CubicBezier)
     ↓
Transform::lerp(prev.transform, next.transform, t)
     ↓
Return interpolated Transform
     ↓
Scene.setCurrentFrame() → Layer.getTimeline().evaluate() → Layer.setTransform()
```

**Relationship:** Each Layer has its own Timeline. Scene drives global frame; each Layer evaluates its Timeline at current frame.

## Assets

**Supported Formats:**
- PNG: single file, sequence (prefix/suffix), directory scan
- SVG: single file (regex-based dimension parsing)

**Import Pipeline:**
- `PngImporter`: filesystem iteration, frame number extraction via regex, sorting
- `SvgImporter`: regex for width/height/viewBox attributes
- Both create `Layer` with `imagePath` and `contentSize`
- **Note:** No actual image decoding — dimensions are metadata only (PNG returns 1920x1080 placeholder)

## Serialization

**JSON Export (`JsonExporter`):**
- Full scene: canvas, background, layers (recursive), metadata
- Layer: id, name, visible, zDepth, blendMode, imagePath, contentSize, transform, timeline, children
- Transform: position(x,y,z), scale(sx,sy), rotation, alpha, anchor(ax,ay)
- Timeline: keyframes array with frame, interpolation, transform, bezierIn/Out

**Binary Project File (`.tamayo`):**
- Header: magic "TAMA", version (1), dataSize
- Payload: JSON string (UTF-8) → binary blob
- `ProjectFile::save()` / `load()` with validation

**WebGL Export (`WebGLExporter`):**
- Generates: `index.html`, `scene.js`, `scene.json`
- HTML: canvas + script tag
- JS: WebGL 1.0 boilerplate, fetches scene.json, renders layers (no transform application in shader!)
- Shaders: embedded vertex/fragment strings

## Import / Export

| Format | Direction | Status |
|--------|-----------|--------|
| PNG | Import | Prototype (metadata only) |
| SVG | Import | Prototype (regex parsing) |
| JSON | Export | Implemented |
| WebGL (HTML+JS+JSON) | Export | Prototype (basic shader, no textures) |
| .tamayo (binary) | Both | Prototype (JSON wrapper) |

## Lighting

**LightingSystem:**
- Ambient: Color + intensity (default 0.3)
- PointLight: position(vec2), color, intensity, radius, falloff
- `calculateLighting(position, depth)`: ambient + Σ(point lights with distance attenuation + depth falloff)
## Implementation Status Matrix

| Capability | Native C++ | Unity Prototype | Status |
|------------|:----------:|:---------------:|--------|
| Scene Model | ✅ | ❌ | Implemented |
| Layer Hierarchy | ✅ | ❌ | Implemented |
| Transform System | ✅ | ❌ | Implemented |
| Depth Sorting | ✅ | ❌ | Implemented |
| Parallax (depth-based) | ✅ | ✅ (factor-based) | Implemented |
| Keyframe Animation | ✅ | ❌ | Implemented |
| Timeline Evaluation | ✅ | ❌ | Implemented |
| Interpolation Types | ✅ (5 types) | ❌ | Implemented |
| PNG Import | ⚠️ (metadata only) | ❌ | Prototype |
| SVG Import | ⚠️ (regex only) | ❌ | Prototype |
| JSON Export | ✅ | ❌ | Implemented |
| WebGL Export | ⚠️ (basic) | ❌ | Prototype |
| .tamayo Binary | ⚠️ (JSON wrapper) | ❌ | Prototype |
| Lighting System | ✅ | ❌ | Implemented |
| Editor (CLI) | ⚠️ (CLI only) | ❌ | Prototype |
| Editor (GUI) | ❌ | ⚠️ (Blender tools) | Roadmap/Concept |
| Camera System | ⚠️ (split) | ✅ | Prototype/Implemented |
| Blender Pipeline | ❌ | ✅ | Implemented |
| Custom Shaders | ❌ | ✅ (QuantumGlow) | Implemented |
| Unit Tests | ✅ (8 suites) | ❌ | Implemented |

## Claims Not Yet Verified

| Claim | Source | Verification Status |
|-------|--------|---------------------|
| "ECS architecture" | projects.ts | **False** — Uses composition (Layer has Transform, Timeline), not ECS |
| "Modern C++20 patterns" | projects.ts | **Partial** — Uses C++20 standard, but limited concepts/ranges/constexpr usage |
| "Cross-platform: Windows/Linux/macOS" | README | **Untested** — CMake + GLFW suggests portability, but no CI evidence |
| "Real Z-depth sorting & lighting" | README | **Implemented** — DepthSorter + LightingSystem exist |
| "Export: WebGL preview" | README | **Prototype** — Generates HTML/JS but shader doesn't apply transforms |
| "Editor with timeline scrubbing" | projects.ts | **Roadmap** — EditorApp is CLI only |
| "Sprite Atlas & Asset Pipeline" | projects.ts | **Experimental** — PNG sequence import exists, no atlas/packing |
| "Unity 6 URP Prototype" | projects.ts | **Partial** — URP scripts exist, but no ProjectSettings to confirm version |

## Portfolio-Safe Wording

| Capability | Safe Wording |
|------------|--------------|
| Native C++ Engine | "Native C++20 engine core with CMake build system, implementing scene graph, transform hierarchy, timeline animation, parallax, depth sorting, and lighting" |
| Unity Prototype | "Parallel Unity 6 URP prototype exploring parallax rendering, camera control, and Blender-to-Unity asset pipeline" |
| 2.5D Model | "Depth-aware layer system with explicit z-depth, camera-relative parallax offset/scale, and back-to-front render ordering" |
| Animation | "Per-layer timeline with keyframe interpolation (Linear, EaseIn, EaseOut, Step, CubicBezier)" |
| Asset Pipeline | "PNG/SVG import (metadata extraction), JSON/WebGL/.tamayo export" |
| Editor | "CLI-driven editor application with scene management, playback control, and export dispatch; GUI panels declared but not implemented" |
| Testing | "8 Catch2 test suites covering core engine subsystems" |
| Performance | No benchmarks — do not claim |

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Core Engine (Transform, Layer, Scene, Timeline) | **High** | Full implementation + tests |
| Parallax Engine | **High** | Full implementation + tests |
| Rendering Pipeline (CPU) | **High** | RenderContext + DepthSorter + LightingSystem |
| GPU Rendering | **Low** | Not implemented in native; WebGL export only |
| Asset Import (PNG/SVG) | **Medium** | Importers exist but no pixel decoding |
| Editor GUI | **Low** | Only CLI; panel headers declared |
| Unity Prototype Parallax/Camera | **High** | Complete MonoBehaviour implementations |
| Unity Blender Pipeline | **High** | 24 export scripts + import helper |
| Unity Version (6) | **Low** | No ProjectSettings/manifest.json found |
| Cross-platform Build | **Medium** | CMake + FetchContent + GLFW, but untested |
- Depth falloff: `1.0 / (1.0 + depth * depthFalloff)` (default 0.5)

**Integration:** `RenderContext.buildRenderCommands()` calls `LightingSystem.calculateLighting()` per layer center.

## Tooling / Editor

**Native C++:**
- `EditorApp`: CLI-driven — initialize, newScene, openScene, saveScene, exportScene(json/webgl), play/pause/stop, frame navigation
- No GUI, no windowing system (GLFW submodule present but unused in editor)
- Panels (TimelinePanel, LayerPanel, Viewport) declared in CMakeLists but implementations not inspected

**Unity:**
- `BlenderWorkflowEditor.cs`: Editor window for Blender import/export
- 24 Python scripts for Blender-side export automation

## Tests

**Coverage:** 8 test files, ~150 test cases
**Framework:** Catch2 v3.4.0 (FetchContent)
**Categories:** transform, layer, timeline, parallax, scene, depth_sorter, json_exporter, keyframe
**Run:** `cmake --build build && ctest` (or `./tamayo_tests "[tag]"`)

## Examples / Demos

**None found** in source tree. No example applications in `src/` or `examples/`.

## Documentation

- `README.md`: Feature list, build instructions, CLI usage, API example
- `CONTRIBUTING.md`: Code style, workflow, commit guidelines, testing, documentation
- Doxygen-style comments in headers
- No CHANGELOG.md, no ARCHITECTURE.md
**Depth Model:**
- `zDepth` float per layer (higher = further back)
- `sortLayersByDepth(bool frontToBack)` in Scene
- `DepthSorter` class: `sort()`, `filterVisible()`, `sortAndFilter()`
- Comparison: back-to-front = higher zDepth first; front-to-back = lower zDepth first

**Parallax Integration:**
- `ParallaxEngine` calculates offset/scale per layer depth
- `applyParallax()` modifies layer transforms in-place
- Depth planes: configurable count (default 5), min/max depth (0.0-1.0), parallaxStrength (0.5)

## Transforms

**Transform** (`Transform.h/.cpp`):
- Position: `glm::vec3` (x, y, z)
- Scale: `glm::vec2` (sx, sy)
- Rotation: float degrees (Z-axis only)
- Alpha: float [0,1] clamped
- Anchor: `glm::vec2` normalized [0,1] (default 0.5, 0.5 = center)
- `getMatrix()`: anchor translate → position → rotate → scale → anchor untranslate
- `lerp(a, b, t)`: linear interpolation of all components

**Transform Pipeline:**
```
Local Transform (position, scale, rotation, anchor)
      ↓
getMatrix() → model matrix
      ↓
ParallaxEngine.applyParallax() → modifies position/scale
      ↓
RenderContext.calculateLayerTransform() → applies camera offset/zoom
      ↓
RenderCommand.transform (final MVP-ready matrix)
```