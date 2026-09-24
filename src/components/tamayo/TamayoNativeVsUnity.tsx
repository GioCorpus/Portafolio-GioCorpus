import { cn } from '../../lib/utils';

export function TamayoNativeVsUnity() {
  return (
    <section
      id="native-vs-unity"
      className={cn('py-16 border-t border-neutral-800', 'scroll-mt-24')}
      aria-labelledby="native-vs-unity-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 id="native-vs-unity-heading" className="mb-4 text-3xl font-bold text-white">
            Native C++ Engine vs Unity Prototype
          </h2>
          <p className="text-neutral-400 max-w-3xl">
            A clear separation of what exists in each track. This is the most important
            distinction in the Tamayo case study.
          </p>
        </header>

        <div className="space-y-10 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Why Two Tracks?</h3>
            <p className="text-neutral-300 leading-relaxed">
              Tamayo maintains parallel implementations for engineering reasons, not redundancy:
            </p>
            <ul className="list-disc list-inside space-y-3 text-neutral-300 leading-relaxed mt-4">
              <li>
                <strong>Unity Prototype → Rapid Experimentation:</strong> Validates rendering concepts,
                interaction models, Blender-to-Unity asset pipelines, and UI/UX workflows.
              </li>
              <li>
                <strong>Native C++ Engine → Architecture Ownership:</strong> Explicit
                control over the scene model, transform hierarchy, timeline evaluation, serialization
                formats, and rendering pipeline — without engine-imposed abstractions.
              </li>
              <li>
                <strong>Cross-Validation:</strong> Features prototyped in Unity inform native API design.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TamayoNativeVsUnity;