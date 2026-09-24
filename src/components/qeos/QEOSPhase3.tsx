import { cn } from '../../lib/utils';

export function QEOSPhase3() {
  return (
    <section id="phase3" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="phase3-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="phase3-heading" className="mb-4 text-3xl font-bold text-white">Phase 3+: Platform Hardening Roadmap</h2>
          <p className="text-neutral-400 max-w-3xl">Planned work for production readiness — not yet implemented.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">PostgreSQL Persistence</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>sqlx migrations in migrations/ directory</li>
              <li>Identity service: user store, token revocation list</li>
              <li>Quantum runtime: job history, circuit cache</li>
              <li>Telemetry: long-term metrics storage</li>
              <li>CI: PostgreSQL service for migration validation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">OIDC / External Identity Providers</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>JWKS endpoint for key rotation</li>
              <li>OIDC discovery document</li>
              <li>Support for GitHub, Google, Azure AD providers</li>
              <li>Capability mapping from external claims</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">TLS / mTLS Everywhere</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>rustls for service-to-service encryption</li>
              <li>Certificate rotation via cert-manager / ACME</li>
              <li>mTLS for IPC channels (capability-bound certs)</li>
              <li>Kernel: TLS not applicable (no userspace network stack)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">SBOM & Supply Chain</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>cargo-sbom for SPDX/CycloneDX generation</li>
              <li>Sigstore cosign for artifact signing</li>
              <li>Dependabot / Renovate for dependency updates</li>
              <li>SLSA Level 2 target for build provenance</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Formal Verification Targets</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Ring buffer correctness (Kani / Prusti)</li>
              <li>Capability model (Iris / Coq)</li>
              <li>Page table invariants (Prusti)</li>
              <li>Scheduler priority inversion freedom</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Hardware Bring-Up</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>x86_64: ACPI, APIC, HPET, TSC, RAPL</li>
              <li>ARM64: GICv3, PSCI, PMU, SMMU</li>
              <li>PCIe: ECAM, MSI-X, AER, SR-IOV</li>
              <li>NVMe: Admin/IO queues, namespaces</li>
              <li>GPU: DRM/KMS, compute queues (future)</li>
            </ul>
          </div>

          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>migrations/ directory exists (empty)</li>
              <li>sqlx in Cargo.toml for identity-service</li>
              <li>ARCHITECTURE.md lists Phase 3 items</li>
              <li>No OIDC, TLS, SBOM, or verification code yet</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSPhase3;