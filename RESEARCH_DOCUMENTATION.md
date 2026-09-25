# Research Documentation

## Purpose

The `/research` page presents Giovanny's research-oriented engineering work as a credible technical research portfolio. It separates evidence from hypothesis, implementation from simulation, and software architecture from physical hardware claims.

This document describes the methodology, architecture, components, and known limitations of the Research page implementation.

---

## Research Methodology

### Evidence-First Principle
Every claim on the Research page must trace to specific source files, repository locations, or documented experiments. Claims without sufficient evidence are excluded or qualified.

### Dual-Axis Classification
Each research topic is classified on two independent axes:

1. **Maturity Taxonomy** (implementation status):
   - `implemented` — Code exists, compiles, tested, functional
   - `prototype` — Code exists but incomplete or untested
   - `experimental` — Exploratory implementation, may change
   - `research` — Theoretical investigation, simulation, or software model
   - `concept` — Design documented only, no code
   - `roadmap` — Planned/designed but not yet implemented

2. **Evidence Type** (what supports the claim):
   - `source-code` — Implementation in repository
   - `test` — Automated tests verifying behavior
   - `simulation` — Software simulation of a model
   - `benchmark` — Measured performance data
   - `experiment` — Documented experiment with setup/result
   - `design-document` — Architecture/design documentation
   - `research-note` — Internal research notes
   - `external-reference` — Peer-reviewed literature, official docs
   - `roadmap` — Planned future work

### Scientific Claim Classification
Research claims are internally classified as:
- `observed` — Measured in experiment
- `simulated` — Result of software simulation
- `implemented-in-software` — Code implements the abstraction/algorithm
- `hypothesized` — Proposed but not yet tested
- `designed` — Architecture/interface designed
- `referenced-from-external-research` — Based on external scientific work
- `not-yet-verified` — Claim made but evidence insufficient

### Critical Boundaries
- **Software ≠ Hardware**: A QPU abstraction interface does not prove physical quantum hardware access
- **Simulation ≠ Physical Result**: Simulated Majorana braiding ≠ physical non-Abelian braiding
- **Hypothesis ≠ Result**: Research questions are not conclusions
- **Roadmap ≠ Implementation**: Future architecture is not current capability
- **Internal Doc ≠ Peer-Reviewed Paper**: Markdown notes are not publications
---

## Research Taxonomy

### Maturity Definitions

| Level | Definition | Example |
|-------|------------|---------|
| implemented | Production-ready code with tests | QEOS kernel memory subsystem |
| prototype | Working code, incomplete coverage | QEOS HAL PCI abstraction |
| experimental | Exploratory, unstable | QEOS GPU compute crate |
| research | Simulation/theory, no hardware | Majorana simulation, tetron model |
| concept | Design only, no implementation | Distributed cluster federation |
| roadmap | Planned future work | Quantum-resistant consensus |

### Evidence Type Definitions

| Type | Description | Weight |
|------|-------------|--------|
| source-code | Implementation in repo | High |
| test | Automated verification | High |
| simulation | Software model execution | Medium |
| benchmark | Measured performance | High (if exists) |
| experiment | Documented hypothesis test | Medium-High |
| design-document | Architecture docs | Medium |
| research-note | Internal notes | Low-Medium |
| external-reference | Peer-reviewed literature | Context only |
| roadmap | Future plan | Not evidence |

---

## QEOS Research

### Verified Research Themes (from QEOS_EVIDENCE.md)

1. **Capability-Based Microkernel** — Implemented: typed addresses, IPC, scheduler, capability model
2. **Memory Safety Invariants** — Implemented: PhysAddr/VirtAddr, page tables, frame allocator
3. **Hardware Abstraction Layer** — Prototype: CPU, PCI, NVMe, GPU traits
4. **PCIe/DMA/IOMMU Drivers** — Prototype: Enumeration, BAR mapping, DMA, MSI-X, IOMMU
5. **QPU Runtime Abstraction** — Prototype: Backend model (Sim/Emul/Remote/Physical), circuit, compiler, scheduler
6. **Quantum Simulation** — Research: Local simulator backend, surface code error correction
7. **Majorana/Topological Simulation** — Research: majorana_sim.rs, tetron.rs, braiding.rs, topology.rs, noise.rs
8. **Energy Telemetry** — Prototype: Lock-free ring buffer, DVFS, carbon-aware scheduling (mocked)
9. **GPU Compute** — Concept/Prototype: Crate exists, no backend verified
10. **Distributed Federation** — Roadmap: Only Cargo.toml placeholders

### Explicitly Excluded Claims
- Physical Majorana hardware integration
- Microsoft Majorana partnership/access
- Non-Abelian braiding demonstration
- Topological quantum computation on hardware
- 3.2x logical qubit lifetime (not benchmarked)
- Sub-microsecond context switch (not benchmarked)
- Zero-copy IPC (qualified: serialization copies exist)
- IBM Quantum/Rigetti/IonQ backends (only AzureQuantumBackend in docs)
- Quantum consensus protocol patent (no source evidence)
- Peer-reviewed publications (fabricated IDs in research.ts)

---

## Majorana Research

### Software Abstraction (Verified)
- `majorana_sim.rs` — Majorana zero mode simulation
- `tetron.rs` — Tetron logical qubit structures
- `braiding.rs` — Braiding adjacency operations (algorithmic)
- `topology.rs` — Topological state tracking
- `noise.rs` — Noise modeling

### Physical Hardware Boundary (Explicit)
Per ARCHITECTURE.md and QUANTUM_ARCHITECTURE.md:
> "Majorana or topological quantum support is treated as a future adapter layer behind a stable QuantumProcessor trait. Physical access is never assumed."

### Classification
- **Maturity**: Research (simulation)
- **Evidence**: Source code, simulation
- **Scientific Classification**: Simulated (software model)
- **Physical Hardware**: NOT CLAIMED — capability-gated stub remains disabled

---

## Quartz5D

### Current Definition (from portfolio data)
- **Project**: Quartz5D
- **Status**: Experimental
- **Category**: Developer Tools & Visualization
- **Summary**: Interactive 5D data visualization engine for high-dimensional scientific datasets with real-time collaborative exploration
- **Technologies**: WebGL, TypeScript, React, CRDT, WebRTC, WebAssembly, Scientific Visualization
- **Repository**: https://github.com/GioCorpus/Quartz5D (not inspected)

### Highlights
- "5D Data Visualization" — Interactive visualization of high-dimensional datasets using WebGL (experimental)
- "Real-time Collaboration" — CRDT-based collaborative editing for scientific data exploration (roadmap)

### Critical Clarifications
- "5D" in name = visualization dimensions, NOT physical 5D storage
- No evidence of physical quartz/holographic storage
- Repository not verified — status based on portfolio data only
- CRDT/WebRTC collaboration is roadmap, not implemented

### Quartz4D Legacy Audit
- Search terms: Quartz4D, Quartz 4D, Quartz5D, Quartz 5D, Quartz4DEngine, quartz_4d, create_quartz_4d
- **Result**: No Quartz4D references found in codebase
- Quartz5D is current project name; no legacy code found
---

## Telemetry & Energy Systems

### Verified Implementation
- **Kernel telemetry**: `kernel/src/telemetry/energy.rs`
- **Energy-telemetry crate**: 7 modules (ring_buffer, energy, telemetry, faults, provenance, dvfs, carbon)
- **Ring buffer**: Lock-free SPSC, 8192 samples, 1-10kHz, atomic Acquire/Release
- **PowerSample**: timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz
- **DVFS Governor**: Performance, Balanced, PowerSave, CarbonAware modes
- **Carbon-Aware Scheduling**: Mocked carbon intensity provider, workload classification

### Limitations
- No hardware RAPL/MSR integration
- Carbon API mocked
- ABA problem risk on ring buffer indices
- No formal verification of lock-free correctness

---

## GPU / Accelerator Research

### Current State
- `crates/qeos-gpu-compute/` — GPU compute crate (exists in workspace)
- `crates/hardware-abstraction/src/gpu.rs` — GPU abstraction trait
- Planned: Compute queue, buffer management, acceleration backend, simulation backend, HPC integration

### Classification
- **Maturity**: Concept / Prototype
- **Evidence**: Crate structure only
- **No CUDA/ROCm/Vulkan support claimed**
- **Implementation maturity unclear**

---

## Distributed / Cloud / Edge

### Current State
- `crates/qeos-cluster/Cargo.toml` — Placeholder
- `crates/qeos-node/Cargo.toml` — Placeholder
- `crates/qeos-federation/` — Not created
- Architecture documented in ARCHITECTURE.md

### Unresolved Challenges
- Distributed consensus for capability revocation
- Network partition handling for quantum job state
- Cross-node IPC with capability preservation
- Quantum state synchronization (simulation only)
- Carbon-aware placement across geo-distributed nodes

---

## AI / ML Research

### Current State
- Skills listed: TensorFlow, PyTorch, JAX, Transformers, Quantum ML, GNN, Inference, AutoML
- BioCorpus project: "ML-augmented variant analysis" (description only)
- No trained models or inference pipelines in repositories
- QEOS error_correction.rs uses classical algorithms

### Classification
- Skills claimed but no project evidence of implemented ML models
- Portfolio-safe: "AI/ML skills listed. BioCorpus describes ML-augmented variant analysis. No trained models published."

---

## Experiments

### Documented Experiments
1. **Quantum Runtime Simulator Backend** — LocalSimulatorBackend executes circuits through backend abstraction
2. **Lock-Free Ring Buffer** — SPSC ring buffer for 1-10kHz power sampling in interrupt context
3. **Surface Code Error Correction** — Adaptive syndrome extraction implemented, 3.2x claim not benchmarked

### Experiment Format
Each experiment documents: QUESTION → SETUP → INPUT → METHOD → OUTPUT → OBSERVATION → LIMITATION → NEXT STEP

---

## External References

Kept visually distinct from project evidence:
- Microsoft Majorana/Topological QC documentation
- Surface Code literature (Fowler et al.)
- VQE/QAOA literature (Peruzzo et al., Farhi et al.)
- Lock-free ring buffer algorithms (Lamport)
- DVFS/Carbon-aware scheduling literature
---

## Architecture

### Information Architecture (Target Sections)
1. **Research Hero** — Title, tagline, restrained copy
2. **Research Philosophy** — Principles (evidence/hypothesis separation, small experiments, document limitations)
3. **Research Map** — Visual diagram of research area relationships
4. **QEOS Systems Research** — Kernel, memory, HAL, drivers, service framework
5. **QPU Runtime & Quantum Research** — Quantum runtime, backends, simulation
6. **Majorana / Topological Quantum** — Simulation only, explicit hardware boundary
7. **Energy Telemetry & Green Scheduling** — Ring buffer, DVFS, carbon-aware
8. **GPU / Heterogeneous Compute** — GPU abstraction, heterogeneous model
9. **Distributed / Federation** — Roadmap only, placeholders
10. **Quartz5D** — Visualization engine, 5D clarification
11. **Experiments** — Documented experiments with results
12. **Evidence & Results** — Source code, tests, simulations
13. **Limitations** — Hardware, simulation, benchmark, validation, maturity
14. **Future Questions** — Research roadmap as questions
15. **Repositories / References** — Links to sources, external context

### Components
Reused from existing portfolio:
- `CaseStudySection`, `SectionHeading`, `StatusBadge`, `TechBadge`, `EvidenceBadge`, `ExternalLink`

M7-specific components:
- `ResearchTopicCard` — Question, status, evidence, result, limitation
- `ResearchMap` — SVG/CSS diagram of research relationships
- `ExperimentCard` — Question, setup, method, result, limitation
- `EvidenceSummary` — Source, type, classification, confidence
- `LimitationList` — Categorized limitations
- `ResearchQuestion` — Hypothesis format with status
- `ResearchReference` — External reference with verification status

### Data Model
Canonical location: `src/data/research.ts` (updated from existing)

```typescript
interface ResearchTopic {
  slug: string;
  title: string;
  question: string;
  summary: string;
  maturity: ResearchMaturity;
  evidenceTypes: EvidenceType[];
  scientificClassification: ScientificClassification;
  project?: string;
  repository?: string;
  sourceFiles?: string[];
  findings?: string[];
  limitations?: string[];
  futureQuestions?: string[];
  confidence: 'high' | 'medium' | 'low';
  portfolioSafeWording: string;
}
```

---

## Responsive Strategy
- Tested breakpoints: 320, 375, 768, 1024, 1440, 1920
- Research Map: SVG with viewBox, scales on mobile
- Evidence/Experiment cards: Grid → single column on mobile
- Tables: Horizontal scroll on mobile
- Diagrams: `<pre>` with `overflow-x-auto`

---

## Accessibility
- Semantic headings (h1-h3 hierarchy)
- `aria-labelledby` on all sections
- Keyboard navigation for all interactive elements
- Focus visible states
- Reduced motion respected (no animations)
- Color contrast meets WCAG AA
- External links: `rel="noopener noreferrer"`
- Diagram descriptions and textual fallbacks

---

## Known Limitations

1. **No physical hardware validation** — All quantum/telemetry/GPU claims are simulation or prototype
2. **Fabricated publications in research.ts** — Must be removed/replaced before public deployment
3. **Quartz5D repository not inspected** — Status based on portfolio data only
4. **No benchmark harness** — Quantitative claims excluded or qualified
5. **Pre-existing Tamayo JSX errors** — Block production build (M4 issue, unrelated)
6. **No downloadable CV asset** — User must add PDF to public/cv/
7. **Web3Forms API key placeholder** — Contact form non-functional

---

## Future Work

1. **Verify Quartz5D repository** — Inspect actual implementation
2. **Add benchmark suite** — For quantum simulator, ring buffer, context switch
3. **Implement GPU backend** — At minimum simulation backend for CI
4. **Formal verification** — Lock-free ring buffer correctness
5. **Hardware integration** — RAPL/MSR for energy telemetry
6. **Distributed implementation** — Move federation from roadmap to prototype
7. **Real publications** — Replace fabricated entries in research.ts
8. **Fix Tamayo build blockers** — Separate M4 effort