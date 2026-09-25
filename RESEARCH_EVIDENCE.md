# Research Evidence Ledger

## Methodology

This ledger documents all research-related claims in the Giovanny Engineering Portfolio V2, classified by:
- **Maturity**: implemented | prototype | experimental | research | concept | roadmap
- **Evidence Type**: source-code | test | simulation | benchmark | experiment | design-document | research-note | external-reference | roadmap
- **Scientific Classification**: observed | simulated | implemented-in-software | hypothesized | designed | referenced-from-external-research | not-yet-verified

Each entry traces claims to specific source files, repository locations, or external references. Claims without sufficient evidence are marked EXCLUDED.

---

## QEOS Systems Research

### Research Topic: Capability-Based Microkernel Architecture
- **Question**: Can a Rust-based capability microkernel provide coherent abstractions across classical, quantum, and energy domains?
- **Claim**: QEOS implements a capability-based microkernel with typed physical addresses, IPC channels, and service framework
- **Maturity**: implemented
- **Evidence Type**: source-code, test
- **Scientific Classification**: implemented-in-software
- **Source**: `kernel/src/` (lib.rs, memory/, ipc/, scheduler/, security/, process/, syscall/), `crates/system-core/`
- **Experiment**: Kernel integration tests (`kernel/tests/kernel_integration.rs`, `kernel/tests/syscall_tests.rs`, `kernel/tests/boundary_contract_tests.rs`)
- **Result**: Core kernel compiles, tests pass in CI. Memory management, IPC, scheduler, capability system implemented.
- **Limitations**: No userspace, no filesystem, no network stack, no hardware drivers. Not a runnable OS.
- **Confidence**: High
- **Portfolio-safe wording**: "QEOS implements a capability-based microkernel architecture in Rust with typed memory management, IPC channels, and a service framework. It is a research-grade systems prototype, not a runnable operating system."

### Research Topic: Memory Safety and Kernel Invariants
- **Question**: How can typed physical/virtual address abstractions strengthen kernel memory safety?
- **Claim**: QEOS implements typed `PhysAddr`, `VirtAddr`, `PhysPage`, `VirtPage` with frame allocator and multi-level page tables
- **Maturity**: implemented
- **Evidence Type**: source-code, test
- **Scientific Classification**: implemented-in-software
- **Source**: `kernel/src/memory/` (physical.rs, virtual_.rs, page_table.rs, allocator.rs, heap.rs, oom.rs)
- **Result**: Complete memory subsystem with canonical address validation, NX permissions, frame allocation
- **Limitations**: No formal verification of memory safety properties. Unsafe code exists for hardware interaction.
- **Confidence**: High
- **Portfolio-safe wording**: "Typed physical and virtual address abstractions with multi-level page tables and frame allocation. Memory safety strengthened by Rust's type system, though unsafe blocks exist for hardware interaction."

### Research Topic: Hardware Abstraction Layer (HAL)
- **Question**: Can a clean HAL separate kernel from device-specific implementations?
- **Claim**: QEOS HAL provides CPU, device, NVMe, PCI, GPU abstractions
- **Maturity**: prototype
- **Evidence Type**: source-code
- **Scientific Classification**: implemented-in-software
- **Source**: `crates/hardware-abstraction/src/` (cpu.rs, device.rs, nvme.rs, pci.rs, gpu.rs)
- **Result**: Abstraction traits defined. GPU abstraction exists but implementation maturity unclear.
- **Limitations**: No hardware validation. GPU abstraction is concept/prototype only.
- **Confidence**: Medium
- **Portfolio-safe wording**: "HAL crate defines abstraction traits for CPU, PCI, NVMe, and GPU devices. Implementation maturity varies; GPU abstraction is early prototype."
### Research Topic: PCIe/DMA/IOMMU Driver Framework
- **Question**: Can a kernel driver framework support modern PCIe features (MSI-X, AER, SR-IOV) and DMA?
- **Claim**: QEOS kernel implements PCI enumeration, BAR mapping, DMA buffers, MSI/MSI-X, IOMMU
- **Maturity**: prototype
- **Evidence Type**: source-code
- **Scientific Classification**: implemented-in-software
- **Source**: `kernel/src/driver/` (pci.rs, dma.rs, interrupt.rs, iommu.rs, lifecycle.rs, mmio.rs, bus.rs, device.rs)
- **Result**: Driver framework with PCIe enumeration, BAR mapping, DMA support exists in source
- **Limitations**: No hardware validation evidence. Simulation only.
- **Confidence**: Medium
- **Portfolio-safe wording**: "PCIe enumeration, BAR mapping, DMA buffers, and IOMMU support implemented in kernel driver framework. Hardware validation pending."

---

## QPU Runtime & Quantum Research

### Research Topic: QPU Runtime Abstraction
- **Question**: How should an OS expose heterogeneous quantum accelerators through a stable runtime abstraction?
- **Claim**: QEOS quantum-runtime crate provides backend abstraction (Simulation, Emulation, Remote, Physical), circuit representation, compiler pipeline, job scheduler, QPU device abstraction, error correction, capability model
- **Maturity**: prototype (runtime) / research (Majorana/topological) / concept (physical QPU)
- **Evidence Type**: source-code, simulation
- **Scientific Classification**: implemented-in-software (runtime), simulated (quantum algorithms), hypothesized (physical backend)
- **Source**: `crates/quantum-runtime/src/` (19 modules)
- **Experiment**: Local simulator backend implemented. Surface code error correction implemented but not benchmarked.
- **Result**: Complete quantum runtime with simulator backend. Multiple backend model defined.
- **Limitations**: No physical QPU tested; MajoranaBackend stub disabled; error correction not benchmarked; no quantum volume; physical QPU behind adapter boundary.
- **Confidence**: High (runtime), Medium (Majorana simulation), Low (physical integration)
- **Portfolio-safe wording**: "Quantum runtime with simulator, multiple backend interfaces, error correction, and Majorana simulation — all explicitly simulation-only. Physical QPU access never assumed; capability-gated adapter stub remains disabled."

### Research Topic: Majorana / Topological Quantum Simulation
- **Question**: Can Majorana zero modes and topological qubit operations be modeled in software simulation?
- **Claim**: QEOS implements Majorana simulation, tetron logical qubits, braiding operations, topology modeling, noise modeling
- **Maturity**: research
- **Evidence Type**: source-code, simulation
- **Scientific Classification**: simulated (software simulation of theoretical models)
- **Source**: `crates/quantum-runtime/src/` (majorana_sim.rs, tetron.rs, braiding.rs, topology.rs, noise.rs)
- **Experiment**: Software simulation of Majorana physics models and braiding operations
- **Result**: Simulation code exists for Majorana zero modes, tetron logical qubits, braiding adjacency operations, topological state tracking
- **Limitations**: SOFTWARE SIMULATION ONLY — not physical Majorana hardware. No nanowire physics modeling. Braiding is algorithmic abstraction. No Microsoft hardware connection. Assumptions not scientifically validated.
- **Confidence**: Medium (code exists), Low (physical relevance)
- **Portfolio-safe wording**: "Majorana simulation, tetron logical qubit structures, braiding adjacency operations, and topological state tracking implemented as software simulation. Explicitly simulation-only per ARCHITECTURE.md: 'Majorana or topological quantum support is treated as a future adapter layer behind a stable QuantumProcessor trait. Physical access is never assumed.'"

### Research Topic: Quantum Error Correction
- **Question**: Can adaptive syndrome extraction improve logical qubit lifetime in surface codes?
- **Claim**: Surface code error correction with adaptive syndrome extraction achieving 3.2x logical qubit lifetime improvement
- **Maturity**: research
- **Evidence Type**: source-code, research-note
- **Scientific Classification**: implemented-in-software (algorithm), not-yet-verified (3.2x claim)
- **Source**: `crates/quantum-runtime/src/error_correction.rs`, portfolio claim (3.2x)
- **Result**: Surface code implementation exists in code. 3.2x claim appears in portfolio but not benchmarked in repository.
- **Limitations**: 3.2x claim not backed by benchmark evidence in repo. No randomized benchmarking. Portfolio claim exceeds repository evidence.
- **Confidence**: Medium (code), Low (3.2x claim)
- **Portfolio-safe wording**: "Surface code error correction with adaptive syndrome extraction implemented in quantum-runtime. The 3.2x logical qubit lifetime improvement claim appears in portfolio materials but is not benchmarked in the repository."

### Research Topic: Quantum HAL & QPU Interface Crates
- **Question**: What abstraction layers are needed between quantum runtime and hardware backends?
- **Claim**: quantum-hal and qeos-qpu crates provide hardware abstraction and QPU interface
- **Maturity**: prototype
- **Evidence Type**: source-code
- **Scientific Classification**: implemented-in-software
- **Source**: `crates/quantum-hal/`, `crates/qeos-qpu/`
- **Result**: Crates exist in workspace. Implementation details not fully inspected.
- **Limitations**: Limited visibility into actual implementation.
- **Confidence**: Medium
- **Portfolio-safe wording**: "Quantum HAL and QPU interface crates exist in the Cargo workspace. Implementation maturity requires further inspection."
---

## Telemetry & Energy Systems Research

### Research Topic: High-Frequency Energy Telemetry
- **Question**: How can lock-free ring buffers enable high-frequency power telemetry from hardware to userspace?
- **Claim**: QEOS implements lock-free SPSC ring buffer for 1-10kHz power sampling with PowerSample struct (timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz)
- **Maturity**: prototype
- **Evidence Type**: source-code
- **Scientific Classification**: implemented-in-software
- **Source**: `kernel/src/telemetry/energy.rs`, `crates/energy-telemetry/src/` (ring_buffer.rs, energy.rs, telemetry.rs, faults.rs, provenance.rs, dvfs.rs, carbon.rs)
- **Experiment**: Ring buffer implementation with atomic indices, bounded capacity (8192 samples), overwrite-on-full semantics
- **Result**: Lock-free ring buffer works in interrupt context. Energy metrics collection implemented.
- **Limitations**: No hardware RAPL/MSR integration yet (simulation only). Carbon intensity provider is mocked. ABA problem risk on indices. No formal verification of lock-free correctness.
- **Confidence**: High (ring buffer), Medium (DVFS), Low (carbon-aware scheduling)
- **Portfolio-safe wording**: "Lock-free SPSC ring buffer for high-frequency (1-10kHz) energy telemetry implemented in kernel and energy-telemetry crate. DVFS governor and carbon-aware scheduler are prototypes with mocked carbon API. No hardware RAPL/MSR integration yet."

### Research Topic: Fault Injection & Provenance Tracking
- **Question**: Can telemetry pipeline include fault injection for resilience testing and data lineage tracking?
- **Claim**: faults.rs provides fault injection/recording; provenance.rs tracks data lineage
- **Maturity**: prototype
- **Evidence Type**: source-code
- **Scientific Classification**: implemented-in-software
- **Source**: `crates/energy-telemetry/src/faults.rs`, `crates/energy-telemetry/src/provenance.rs`
- **Result**: Modules exist in crate. Implementation not deeply inspected.
- **Limitations**: No evidence of integration testing with fault injection.
- **Confidence**: Medium
- **Portfolio-safe wording**: "Fault injection and provenance tracking modules implemented in energy-telemetry crate. Integration testing evidence limited."

---

## GPU / Accelerator Research

### Research Topic: GPU Compute Abstraction
- **Question**: How should an experimental OS expose GPU compute through consistent abstractions?
- **Claim**: qeos-gpu-compute crate and hardware-abstraction/gpu.rs provide GPU abstraction
- **Maturity**: concept / prototype
- **Evidence Type**: source-code (crate exists)
- **Scientific Classification**: designed (architecture), not-yet-verified (implementation)
- **Source**: `crates/qeos-gpu-compute/`, `crates/hardware-abstraction/src/gpu.rs`
- **Result**: Crate structure exists in Cargo workspace. No implementation details publicly verified.
- **Limitations**: No CUDA/ROCm/Vulkan support claimed. Implementation maturity unclear. Planned capabilities only (compute queue, buffer management, acceleration backend, simulation backend).
- **Confidence**: Low
- **Portfolio-safe wording**: "GPU compute crate (qeos-gpu-compute) and GPU abstraction trait (hardware-abstraction/gpu.rs) exist in workspace. Implementation maturity unclear; no backend implementations verified."
### Research Topic: Heterogeneous Compute Model
- **Question**: How can CPU, GPU, and future quantum accelerators be exposed through unified capability-based interfaces?
- **Claim**: QEOS architecture defines heterogeneous compute model with HAL separating kernel from device backends
- **Maturity**: research / concept
- **Evidence Type**: design-document, source-code (partial)
- **Scientific Classification**: designed (architecture), hypothesized (unified model)
- **Source**: `ARCHITECTURE.md`, `QUANTUM_ARCHITECTURE.md`, `crates/hardware-abstraction/`, `crates/quantum-hal/`
- **Result**: Architecture documents describe the model. Partial implementation in HAL and quantum runtime.
- **Limitations**: GPU backend not implemented. Quantum backend is simulator-only. No unified scheduler across accelerator types demonstrated.
- **Confidence**: Medium (architecture), Low (implementation)
- **Portfolio-safe wording**: "Architecture defines heterogeneous compute model with HAL abstractions for CPU, GPU, and quantum backends. GPU and quantum backends are prototype/concept stage. Unified scheduling across accelerator types remains research."

---

## Distributed / Cloud / Edge Research

### Research Topic: Distributed Cluster & Federation
- **Question**: How can capability-based OS nodes federate for distributed quantum-classical workloads?
- **Claim**: qeos-cluster and qeos-node crates planned for multi-node orchestration, capability federation, hybrid scheduler
- **Maturity**: roadmap
- **Evidence Type**: design-document, roadmap
- **Scientific Classification**: designed (architecture), roadmap
- **Source**: `ARCHITECTURE.md`, `crates/qeos-cluster/Cargo.toml`, `crates/qeos-node/Cargo.toml`
- **Result**: Only Cargo.toml files exist. No source files in src/ for either crate.
- **Limitations**: No distributed consensus implemented. No capability federation protocol. No cross-node IPC with capability preservation. No quantum state synchronization. Carbon-aware geo-distributed placement not implemented.
- **Confidence**: Low (only placeholders exist)
- **Portfolio-safe wording**: "Cluster federation architecture designed in ARCHITECTURE.md. qeos-cluster and qeos-node crates exist as Cargo.toml placeholders only. No implementation exists."

---

## Quartz5D Research

### Research Topic: Quartz5D — Interactive High-Dimensional Data Visualization
- **Question**: How can interactive WebGL-based visualization enable exploration of high-dimensional scientific datasets?
- **Claim**: Quartz5D provides 5D data visualization engine with real-time collaborative exploration via CRDT/WebRTC
- **Maturity**: experimental
- **Evidence Type**: source-code (project exists in portfolio data), external-reference (GitHub repo)
- **Scientific Classification**: implemented-in-software (visualization), concept (5D physical storage)
- **Source**: `src/data/projects.ts` (quartz5d entry), GitHub: https://github.com/GioCorpus/Quartz5D
- **Highlights**: "5D Data Visualization" — Interactive visualization of high-dimensional datasets using WebGL (status: experimental); "Real-time Collaboration" — CRDT-based collaborative editing for scientific data exploration (status: roadmap)
- **Limitations**: "5D" in name does NOT establish five-dimensional physical storage model. No evidence of physical quartz/holographic storage. Repository not inspected — status based on portfolio data only. CRDT/WebRTC collaboration is roadmap, not implemented.
- **Confidence**: Low (repository not verified)
- **Portfolio-safe wording**: "Quartz5D is an experimental interactive visualization engine for high-dimensional scientific datasets using WebGL. The name '5D' refers to visualization dimensions, not physical 5D storage. Real-time CRDT/WebRTC collaboration is roadmap."

### Research Topic: Quartz4D Legacy Audit
- **Search**: Quartz4D, Quartz 4D, Quartz5D, Quartz 5D, Quartz4DEngine, quartz_4d, create_quartz_4d
- **Result**: No Quartz4D references found in codebase. Quartz5D appears only in portfolio data (projects.ts) and research.ts.
- **Classification**: Quartz5D is current project name. No legacy Quartz4D code found.
---

## AI / ML Research

### Research Topic: AI/ML in Portfolio
- **Search**: AI, ML, prediction, model, inference, training in codebase
- **Result**: Skills/techStack include: TensorFlow, PyTorch, JAX, Transformers, Quantum ML, GNN, Inference, AutoML. BioCorpus project mentions "ML-augmented variant analysis". No actual model implementations found in inspected repositories. QEOS error_correction.rs uses classical algorithms, not ML.
- **Classification**: Skills claimed, but no project evidence of implemented ML models found
- **Portfolio-safe wording**: "AI/ML skills listed (PyTorch, JAX, TensorFlow, Quantum ML). BioCorpus project describes ML-augmented variant analysis. No trained models or inference pipelines published in portfolio repositories."

---

## External References (Verified Separately from Project Evidence)

| Reference | Type | Relevance | Verification |
|-----------|------|-----------|--------------|
| Microsoft Majorana/Topological Quantum Computing | External Research | Context for Majorana simulation | Official Microsoft Quantum documentation |
| Surface Code Quantum Error Correction | External Research | Context for QEOS error_correction.rs | Peer-reviewed literature (Fowler et al.) |
| VQE/QAOA Variational Quantum Algorithms | External Research | Context for quantum consensus claim | Peer-reviewed literature (Peruzzo et al., Farhi et al.) |
| Lock-free Ring Buffer (SPSC) | External Research | Context for energy-telemetry ring_buffer.rs | Published algorithms (Lamport, etc.) |
| DVFS / Carbon-Aware Scheduling | External Research | Context for energy-telemetry dvfs.rs, carbon.rs | Systems research literature |

---

## Experiments

### Experiment 1: Quantum Runtime Simulator Backend
- **Question**: Can a local quantum simulator backend execute quantum circuits through the QPU runtime abstraction?
- **Setup**: QEOS quantum-runtime with LocalSimulatorBackend
- **Input**: Quantum circuits (via circuit.rs representation)
- **Method**: Simulator executes circuits through backend abstraction
- **Output**: Measurement results, simulation metadata (backend type, model, assumptions)
- **Observation**: Simulator backend implemented and functional in CI (mock/simulator only)
- **Limitation**: Simulation only. No physical hardware. Fidelity not benchmarked.
- **Next Step**: Benchmark simulator performance, add noise models

### Experiment 2: Lock-Free Ring Buffer for Energy Telemetry
- **Question**: Can a lock-free SPSC ring buffer sustain 1-10kHz power sampling in interrupt context?
- **Setup**: ring_buffer.rs with atomic indices, PowerSample struct
- **Input**: Synthetic power samples (timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz)
- **Method**: Producer in interrupt context, consumer in telemetry service
- **Output**: Buffered samples with provenance tracking
- **Observation**: Implementation compiles, atomic ordering (Acquire/Release) used
- **Limitation**: No hardware RAPL/MSR integration. ABA problem risk. Overwrite semantics lose oldest data.
- **Next Step**: Hardware integration, formal verification of lock-free correctness

### Experiment 3: Surface Code Error Correction Simulation
- **Question**: Can adaptive syndrome extraction be implemented in Rust for surface codes?
- **Setup**: error_correction.rs in quantum-runtime
- **Input**: Syndrome data from simulated quantum circuit
- **Method**: Adaptive syndrome extraction algorithm
- **Output**: Corrected logical qubit state
- **Observation**: Code exists. 3.2x lifetime claim in portfolio not benchmarked in repo.
- **Limitation**: No benchmark harness. No randomized benchmarking. Claim exceeds evidence.
- **Next Step**: Implement benchmark suite, validate 3.2x claim
---

## Benchmarks

| Benchmark | Status | Hardware | Configuration | Workload | Sample Count | Measurement Method | Units | Date | Limitations |
|-----------|--------|----------|---------------|----------|--------------|-------------------|-------|------|-------------|
| Kernel context switch | NOT BENCHMARKED | — | — | — | — | — | — | — | Claimed "sub-microsecond" in portfolio, no harness in repo |
| Quantum simulator throughput | NOT BENCHMARKED | — | — | — | — | — | — | — | No benchmark suite in quantum-runtime |
| Ring buffer throughput | NOT BENCHMARKED | — | — | — | — | — | — | — | Implementation exists, no measurements published |
| Surface code correction | NOT BENCHMARKED | — | — | — | — | — | — | — | 3.2x claim not benchmarked in repo |

**No verified benchmark results exist in the repository.**

---

## Research Limitations

### Hardware Access
- No physical QPU access (IBM Quantum, Rigetti, IonQ backends claimed in portfolio but QUANTUM_ARCHITECTURE.md only mentions AzureQuantumBackend interface)
- No Majorana hardware access (Microsoft or otherwise)
- No RAPL/MSR hardware telemetry integration
- No GPU hardware (CUDA/ROCm/Vulkan) integration verified

### Simulation Fidelity
- Majorana simulation is algorithmic/model-based, not physics-validated
- Quantum simulator fidelity not quantified
- No noise model calibration against physical devices

### Benchmark Environment
- No benchmark harness in CI
- No performance baselines established
- No comparative benchmarks against other simulators/OSes

### Scientific Validation
- No peer-reviewed publications for QEOS/Quartz5D
- Portfolio "papers" in research.ts appear to be fabricated (fake arXiv IDs, DOIs, "et al." authors)
- No external scientific validation of claims

### Prototype Maturity
- QEOS kernel: no userspace, filesystem, network stack, hardware drivers
- Quantum runtime: simulator only, physical backend stub
- Energy telemetry: mocked carbon API, no hardware integration
- GPU compute: crate exists, no implementation verified
- Distributed: only Cargo.toml placeholders
- Quartz5D: repository not inspected, status from portfolio data only

### Platform Dependencies
- QEOS targets x86_64 UEFI. ARM/RISC-V not implemented.
- Quantum runtime depends on simulator only.
- Energy telemetry requires hardware interfaces not yet implemented.
---

## Claims Excluded From Public Portfolio

| Claim | Decision | Reason |
|-------|----------|--------|
| Physical Majorana qubit control | EXCLUDED | No physical-hardware integration evidence found |
| QEOS runs on Majorana hardware | EXCLUDED | Explicitly simulation-only per ARCHITECTURE.md |
| QEOS controls Majorana qubits | EXCLUDED | Software abstraction only |
| QEOS has Microsoft Majorana hardware integration | EXCLUDED | No partnership/affiliation/hardware access verified |
| QEOS performs topological quantum computation | EXCLUDED | Simulation of topological models ≠ physical topological QC |
| QEOS has demonstrated non-Abelian braiding | EXCLUDED | Braiding.rs is algorithmic abstraction, not physical braiding |
| QEOS executes on physical topological QPU | EXCLUDED | Physical QPU backend is capability-gated stub, disabled |
| 3.2x logical qubit lifetime improvement | EXCLUDED FROM QUANTITATIVE CLAIM | Not benchmarked in repository; portfolio claim exceeds evidence |
| "Sub-microsecond context switch" | EXCLUDED FROM QUANTITATIVE CLAIM | No benchmark harness, no numbers in CI |
| "Zero-copy IPC" | QUALIFIED | Capability-based but copies exist at serialization boundary |
| IBM Quantum / Rigetti / IonQ backend integration | EXCLUDED / QUALIFIED | QUANTUM_ARCHITECTURE.md only mentions AzureQuantumBackend interface |
| Quantum consensus protocol (patent pending) | EXCLUDED | No source evidence found in repo |
| Quantum-resistant consensus for energy settlement | EXCLUDED | Status: roadmap, no implementation |
| Quartz5D physically stores data in 5D quartz | EXCLUDED | Name does not establish physical model; visualization only |
| Peer-reviewed publications (arXiv 2501.12345, DOI 10.1109/SC41406.2024.00042) | EXCLUDED | Appear fabricated — fake IDs, "et al." authors, no verification |

---

## Research Data Model (for /research page)

```typescript
type ResearchMaturity = 
  | 'implemented' 
  | 'prototype' 
  | 'experimental' 
  | 'research' 
  | 'concept' 
  | 'roadmap';

type EvidenceType = 
  | 'source-code' 
  | 'test' 
  | 'simulation' 
  | 'benchmark' 
  | 'experiment' 
  | 'design-document' 
  | 'research-note' 
  | 'external-reference' 
  | 'roadmap';

type ScientificClassification = 
  | 'observed' 
  | 'simulated' 
  | 'implemented-in-software' 
  | 'hypothesized' 
  | 'designed' 
  | 'referenced-from-external-research' 
  | 'not-yet-verified';

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

## Research Topics for /research Page (Curated from Evidence)

### 1. QEOS: Capability-Based OS Architecture for Heterogeneous Computing
- **Maturity**: implemented (kernel) / prototype (HAL, drivers) / research (quantum) / concept (physical QPU) / roadmap (distributed)
- **Key Question**: How can a clean-slate Rust OS provide coherent abstractions across classical, quantum, and energy domains?
- **Evidence**: Kernel source, memory, IPC, scheduler, security, service framework, HAL, driver framework
- **Limitations**: Not a runnable OS; no userspace/fs/net/drivers

### 2. QEOS: QPU Runtime & Quantum Simulation
- **Maturity**: prototype (runtime/simulator) / research (Majorana/topological) / concept (physical QPU)
- **Key Question**: How should an OS/runtime expose heterogeneous quantum backends through a stable abstraction?
- **Evidence**: 19-module quantum-runtime, simulator backend, backend model (Sim/Emul/Remote/Physical), error correction, Majorana simulation
- **Limitations**: Simulation only; no physical QPU; MajoranaBackend stub disabled; 3.2x claim not benchmarked

### 3. QEOS: Majorana / Topological Quantum Software Simulation
- **Maturity**: research
- **Key Question**: Can Majorana zero modes and braiding operations be modeled in software for OS/runtime integration research?
- **Evidence**: majorana_sim.rs, tetron.rs, braiding.rs, topology.rs, noise.rs
- **Limitations**: SOFTWARE SIMULATION ONLY — no physical hardware, no nanowire physics, no Microsoft integration

### 4. QEOS: High-Frequency Energy Telemetry & Green Scheduling
- **Maturity**: prototype
- **Key Question**: Can lock-free ring buffers enable high-frequency power telemetry from interrupt context to userspace analysis?
- **Evidence**: kernel/src/telemetry/energy.rs, crates/energy-telemetry/ (ring_buffer, dvfs, carbon, faults, provenance)
- **Limitations**: No hardware RAPL/MSR; carbon API mocked; no formal verification

### 5. QEOS: GPU / Heterogeneous Compute Abstraction
- **Maturity**: concept / prototype
- **Key Question**: How should an experimental OS expose GPU compute through HAL abstractions compatible with future quantum backends?
- **Evidence**: crates/qeos-gpu-compute/, hardware-abstraction/gpu.rs
- **Limitations**: No backend implementations verified; no CUDA/ROCm/Vulkan

### 6. QEOS: Distributed Cluster & Capability Federation
- **Maturity**: roadmap
- **Key Question**: How can capability-based OS nodes federate for distributed quantum-classical workloads?
- **Evidence**: ARCHITECTURE.md design, qeos-cluster/Cargo.toml, qeos-node/Cargo.toml (placeholders only)
- **Limitations**: No implementation; only design documents

### 7. Quartz5D: High-Dimensional Scientific Visualization
- **Maturity**: experimental
- **Key Question**: How can interactive WebGL visualization enable collaborative exploration of high-dimensional datasets?
- **Evidence**: Portfolio project entry, GitHub repo (not inspected)
- **Limitations**: Repo not verified; "5D" is visualization dimensions not physical storage; collaboration is roadmap

---

## Confidence Summary

| Area | Confidence | Primary Evidence |
|------|------------|------------------|
| QEOS Kernel (memory, IPC, scheduler, capability) | High | Source code + tests + CI |
| QEOS HAL / Driver Framework | Medium | Source code, no hardware validation |
| QEOS Quantum Runtime (simulator) | High | 19 modules, CI runs simulator |
| QEOS Majorana/Topological Simulation | Medium | Source code exists, explicitly simulation-only |
| QEOS Error Correction (surface code) | Medium | Code exists, 3.2x claim not benchmarked |
| QEOS Energy Telemetry (ring buffer) | High | Source code, lock-free design documented |
| QEOS DVFS / Carbon-Aware Scheduling | Medium | Code exists, mocked dependencies |
| QEOS GPU Compute | Low | Crate exists, no implementation verified |
| QEOS Distributed/Federation | Low | Only Cargo.toml placeholders |
| Quartz5D | Low | Portfolio data only, repo not inspected |
| AI/ML Claims | Low | Skills listed, no model evidence in repos |

---

## Portfolio-Safe Claim Wording Quick Reference

| Instead of... | Use... |
|---------------|--------|
| "QEOS runs on Majorana hardware" | "QEOS includes Majorana simulation as software research; physical hardware access is never assumed" |
| "QEOS controls Majorana qubits" | "QEOS simulates Majorana zero modes and tetron logical qubits in software" |
| "QEOS demonstrates non-Abelian braiding" | "QEOS implements braiding adjacency operations as algorithmic abstraction in simulation" |
| "3.2x logical qubit lifetime" | "Surface code with adaptive syndrome extraction implemented; 3.2x claim appears in portfolio but not benchmarked in repo" |
| "Sub-microsecond context switch" | "Context switch optimization researched; no benchmark harness in CI" |
| "Zero-copy IPC" | "Capability-based IPC with serialization boundary copies" |
| "Quantum advantage/supremacy" | NOT CLAIMED — explicitly excluded |
| "Quantum consensus protocol patent pending" | "Quantum consensus protocol designed; prototype status; no source evidence in repo" |
| "Quartz5D 5D storage" | "Quartz5D: interactive high-dimensional data visualization (5D = visualization dimensions)" |
| "Peer-reviewed publications" | "Technical notes / research notes / design documents" (unless real publications verified) |