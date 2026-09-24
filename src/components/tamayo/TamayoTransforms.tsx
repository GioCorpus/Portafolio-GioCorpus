import { cn } from '../../lib/utils';

export function TamayoTransforms() {
  return (
    <section
      id="transforms"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="transforms-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="transforms-heading" className="mb-4 text-3xl font-bold text-white">
            Transforms & Interpolation
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            Transform components, matrix composition, 5 interpolation types, and evaluation pipeline.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Transform Components</h3>
            <p className="text-neutral-300 leading-relaxed">
              The <code>Transform</code> struct stores all spatial properties of a layer. Uses GLM for matrix math.
            </p>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Component</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Type</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Default</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">position</td><td className="p-2">glm::vec2</td><td className="p-2">(0, 0)</td><td className="p-2">X, Y translation</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">scale</td><td className="p-2">glm::vec2</td><td className="p-2">(1, 1)</td><td className="p-2">X, Y scale factors</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">rotation</td><td className="p-2">float</td><td className="p-2">0.0</td><td className="p-2">Rotation in radians (CCW)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">anchor</td><td className="p-2">glm::vec2</td><td className="p-2">(0.5, 0.5)</td><td className="p-2">Pivot point (0-1)</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">alpha</td><td className="p-2">float</td><td className="p-2">1.0</td><td className="p-2">Opacity (0.0 - 1.0)</td></tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Matrix Composition</h3>
            <p className="text-neutral-300 leading-relaxed">
              <code>Transform::toMatrix()</code> builds a 4x4 matrix. Order: translate to anchor, scale, rotate, translate to position.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`glm::mat4 Transform::toMatrix() const {
    glm::mat4 anchorT = glm::translate(glm::mat4(1.0f), 
        glm::vec3(-anchor_.x * size.x, -anchor_.y * size.y, 0.0f));
    glm::mat4 scaleM = glm::scale(glm::mat4(1.0f), 
        glm::vec3(scale_.x, scale_.y, 1.0f));
    glm::mat4 rotM = glm::rotate(glm::mat4(1.0f), rotation_, 
        glm::vec3(0.0f, 0.0f, 1.0f));
    glm::mat4 posT = glm::translate(glm::mat4(1.0f), 
        glm::vec3(position_.x, position_.y, 0.0f));
    return posT * rotM * scaleM * anchorT;
}`}
            </pre>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Interpolation Types</h3>
            <p className="text-neutral-300 leading-relaxed">
              Five interpolation types defined in <code>InterpolationType</code> enum.
            </p>
            <table className="w-full text-sm text-neutral-300 border-collapse mt-4">
              <thead>
                <tr className="border-b border-neutral-700">
                  <th className="text-left p-2 font-semibold text-violet-400">Type</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Enum</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Params</th>
                  <th className="text-left p-2 font-semibold text-violet-400">Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Linear</td><td className="p-2">0</td><td className="p-2">none</td><td className="p-2">Constant rate</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">EaseIn</td><td className="p-2">1</td><td className="p-2">none</td><td className="p-2">Slow start, fast end</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">EaseOut</td><td className="p-2">2</td><td className="p-2">none</td><td className="p-2">Fast start, slow end</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">Step</td><td className="p-2">3</td><td className="p-2">none</td><td className="p-2">Hold until next keyframe</td></tr>
                <tr className="border-b border-neutral-800"><td className="p-2 font-mono">CubicBezier</td><td className="p-2">4</td><td className="p-2">p1, p2</td><td className="p-2">Custom bezier curve</td></tr>
              </tbody>
            </table>
          </div>
<div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Keyframe Structure</h3>
            <p className="text-neutral-300 leading-relaxed">
              Each <code>Keyframe</code> stores frame index, transform, interpolation type, and
              bezier control points. Keyframes are sorted by frame index in the Timeline.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`struct Keyframe {
    uint32_t frameIndex;
    Transform transform;
    InterpolationType interpolation;
    glm::vec2 bezierP1;
    glm::vec2 bezierP2;
};`}
            </pre>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Timeline Evaluation</h3>
            <p className="text-neutral-300 leading-relaxed">
              <code>Timeline::evaluate(frame)</code> finds the two keyframes bracketing the frame,
              computes local <code>t</code> (0-1), applies the interpolation function, and lerps
              the Transform components. For CubicBezier, uses De Casteljau's algorithm.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`Transform Timeline::evaluate(uint32_t frame) const {
    if (keyframes_.empty()) return Transform{};
    
    auto it = std::upper_bound(keyframes_.begin(), keyframes_.end(), frame,
        [](uint32_t f, const Keyframe& k) { return f < k.frameIndex; });
    
    if (it == keyframes_.begin()) return keyframes_.front().transform;
    if (it == keyframes_.end()) return keyframes_.back().transform;
    
    const Keyframe& k0 = *(it - 1);
    const Keyframe& k1 = *it;
    float t = float(frame - k0.frameIndex) / float(k1.frameIndex - k0.frameIndex);
    float easedT = interpolate(t, k0.interpolation, k0.bezierP1, k0.bezierP2);
    
    return Transform::lerp(k0.transform, k1.transform, easedT);
}`}
            </pre>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Transform Lerp</h3>
            <p className="text-neutral-300 leading-relaxed">
              Component-wise interpolation. Rotation uses shortest-path angle interpolation
              (SLERP equivalent for 2D). Scale and position use linear interpolation.
            </p>
            <pre className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-4 overflow-x-auto text-sm text-neutral-300 mt-4">
{`Transform Transform::lerp(const Transform& a, const Transform& b, float t) {
    Transform result;
    result.position = glm::mix(a.position, b.position, t);
    result.scale = glm::mix(a.scale, b.scale, t);
    float da = b.rotation - a.rotation;
    da = fmod(da + M_PI, 2 * M_PI) - M_PI;
    result.rotation = a.rotation + da * t;
    result.anchor = glm::mix(a.anchor, b.anchor, t);
    result.alpha = glm::mix(a.alpha, b.alpha, t);
    return result;
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoTransforms;