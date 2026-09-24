import { cn } from '../../lib/utils';

export function QEOSSecurity() {
  return (
    <section id="security" className={cn('py-16 border-t border-neutral-800')} aria-labelledby="security-heading">
      <div className="max-w-7xl mx-auto px-4">
        <header className="mb-10">
          <h2 id="security-heading" className="mb-4 text-3xl font-bold text-white">Security Architecture</h2>
          <p className="text-neutral-400 max-w-3xl">Capability-based kernel security + identity service with Argon2id, RS256/JWKS, RBAC, and audit logging.</p>
        </header>
        <div className="space-y-8 max-w-4xl">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Status: Prototype</h3>
            <p className="text-neutral-300">Kernel capability model + full identity service implementation. Threat model documented.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Kernel Security (kernel/src/security/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>capability.rs — Capability-based access control</li>
              <li>permission.rs — Fine-grained permissions</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Identity Service (crates/identity-service/src/)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300 font-mono text-sm">
              <li>auth.rs — Authentication flow</li>
              <li>jwt.rs — RS256 JWT tokens (jsonwebtoken 9.0)</li>
              <li>jwks.rs — JWKS rotation</li>
              <li>rbac.rs — Role-based access control</li>
              <li>sessions.rs — Session management</li>
              <li>audit.rs — Audit logging</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cryptographic Choices (verified in Cargo.toml)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Argon2id — Password hashing (argon2 0.5)</li>
              <li>RS256 — JWT signing (jsonwebtoken 9.0)</li>
              <li>SHA-256 — Hashing (sha2 0.10)</li>
              <li>Rand 0.8 — Cryptographic randomness</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Threat Model (THREAT_MODEL.md)</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-300">
              <li>Assets: identity credentials, config, telemetry, quantum jobs, browser profiles</li>
              <li>Trust boundaries: local IPC, database, external APIs, hardware</li>
              <li>Threats: unauthorized IPC, credential leakage, token forgery, unsafe code, telemetry poisoning</li>
              <li>Controls: authenticated IPC, RBAC, short-lived tokens, Argon2id, audit logging, typed interfaces</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Evidence</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
              <li>Kernel: kernel/src/security/</li>
              <li>Identity: crates/identity-service/src/ (7 modules)</li>
              <li>Deps: Cargo.toml workspace dependencies confirm crypto choices</li>
              <li>Docs: THREAT_MODEL.md</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QEOSSecurity;