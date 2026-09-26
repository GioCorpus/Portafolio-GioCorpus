export type ResearchMaturity =
  | 'implemented'
  | 'prototype'
  | 'experimental'
  | 'research'
  | 'concept'
  | 'roadmap';

export type EvidenceType =
  | 'source-code'
  | 'test'
  | 'simulation'
  | 'benchmark'
  | 'experiment'
  | 'design-document'
  | 'research-note'
  | 'external-reference'
  | 'roadmap';

export type ScientificClassification =
  | 'observed'
  | 'simulated'
  | 'implemented-in-software'
  | 'hypothesized'
  | 'designed'
  | 'referenced-from-external-research'
  | 'not-yet-verified';

export interface ResearchTopic {
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

export const researchTopics: ResearchTopic[] = [
  {
    slug: 'qeos-capability-os',
    title: 'Capability-Based OS Architecture for Heterogeneous Computing',
    question: 'How can a clean-slate Rust OS provide coherent abstractions across classical, quantum, and energy domains?',
    summary: 'QEOS implements a capability-based microkernel with typed memory management, IPC channels, scheduler, and service framework. The kernel compiles and tests pass in CI, but it is not a runnable OS — no userspace, filesystem, network stack, or hardware drivers.',
    maturity: 'implemented',
    evidenceTypes: ['source-code', 'test'],
    scientificClassification: 'implemented-in-software',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'kernel/src/lib.rs',
      'kernel/src/memory/',
      'kernel/src/ipc/',
      'kernel/src/scheduler/',
      'kernel/src/security/',
      'kernel/src/process/',
      'kernel/src/syscall/',
      'crates/system-core/'
    ],
    findings: [
      'Typed PhysAddr/VirtAddr with multi-level page tables',
      'Capability-based IPC with channel/endpoint/message',
      'Priority-based scheduler with per-CPU runqueues',
      'Service framework with lifecycle, bus, gateway'
    ],
    limitations: [
      'Not a runnable OS — no userspace/fs/net/drivers',
      'No formal verification of memory safety',
      'Unsafe code exists for hardware interaction',
      'x86_64 UEFI only; ARM/RISC-V not implemented'
    ],
    futureQuestions: [
      'Can capability model express quantum resource constraints?',
      'How to integrate userspace without breaking invariants?',
      'What formal methods could verify kernel properties?'
    ],
    confidence: 'high',
    portfolioSafeWording: 'QEOS implements a capability-based microkernel architecture in Rust with typed memory management, IPC channels, and a service framework. It is a research-grade systems prototype, not a runnable operating system.'
  },
  {
    slug: 'qeos-qpu-runtime',
    title: 'QPU Runtime & Quantum Simulation',
    question: 'How should an OS/runtime expose heterogeneous quantum backends through a stable abstraction?',
    summary: 'QEOS quantum-runtime crate provides a 19-module runtime with backend abstraction (Simulation, Emulation, Remote, Physical), circuit representation, compiler pipeline, job scheduler, QPU device abstraction, surface code error correction, and Majorana simulation. All quantum claims are explicitly simulation-only.',
    maturity: 'prototype',
    evidenceTypes: ['source-code', 'simulation'],
    scientificClassification: 'implemented-in-software',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'crates/quantum-runtime/src/backend.rs',
      'crates/quantum-runtime/src/circuit.rs',
      'crates/quantum-runtime/src/compiler.rs',
      'crates/quantum-runtime/src/scheduler.rs',
      'crates/quantum-runtime/src/simulator.rs',
      'crates/quantum-runtime/src/qpu_device.rs',
      'crates/quantum-runtime/src/job.rs',
      'crates/quantum-runtime/src/error_correction.rs',
      'crates/quantum-runtime/src/capabilities.rs',
      'crates/quantum-hal/',
      'crates/qeos-qpu/'
    ],
    findings: [
      'LocalSimulatorBackend implemented and runs in CI',
      'Backend model: Simulation, Emulation, Remote, Physical',
      'Surface code error correction with adaptive syndrome extraction',
      'Quantum HAL and QPU interface crates exist'
    ],
    limitations: [
      'No physical QPU ever tested — simulation only',
      'MajoranaBackend is a stub, capability-gated, disabled',
      'Error correction not benchmarked (3.2x claim unverified)',
      'No quantum volume or randomized benchmarking',
      'Physical QPU access behind documented adapter boundary only'
    ],
    futureQuestions: [
      'How to benchmark simulator fidelity against physical devices?',
      'Can backend abstraction support real-time quantum control?',
      'What noise models are needed for realistic simulation?'
    ],
  },
  {
    slug: 'qeos-majorana-simulation',
    title: 'Majorana / Topological Quantum Software Simulation',
    question: 'Can Majorana zero modes and braiding operations be modeled in software for OS/runtime integration research?',
    summary: 'QEOS implements Majorana simulation, tetron logical qubits, braiding operations, topology modeling, and noise modeling as software simulation. This is explicitly simulation-only — no physical Majorana hardware, no nanowire physics modeling, no Microsoft hardware connection.',
    maturity: 'research',
    evidenceTypes: ['source-code', 'simulation'],
    scientificClassification: 'simulated',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'crates/quantum-runtime/src/majorana_sim.rs',
      'crates/quantum-runtime/src/tetron.rs',
      'crates/quantum-runtime/src/braiding.rs',
      'crates/quantum-runtime/src/topology.rs',
      'crates/quantum-runtime/src/noise.rs'
    ],
    findings: [
      'Majorana zero mode simulation (majorana_sim.rs)',
      'Tetron logical qubit structures (tetron.rs)',
      'Braiding adjacency operations (braiding.rs) — algorithmic abstraction',
      'Topological state tracking (topology.rs)',
      'Noise modeling for simulation (noise.rs)'
    ],
    limitations: [
      'SOFTWARE SIMULATION ONLY — not physical Majorana hardware',
      'Does not model actual nanowire physics or experimental devices',
      'Braiding is algorithmic abstraction, not physical non-Abelian braiding',
      'No connection to Microsoft Majorana hardware or any physical topological QPU',
      'Simulation assumptions not scientifically validated'
    ],
    futureQuestions: [
      'What simulation fidelity is needed for OS integration testing?',
      'Can topological error correction be simulated at scale?',
      'How to validate simulation against theoretical predictions?'
    ],
    confidence: 'medium',
    portfolioSafeWording: 'Majorana simulation, tetron logical qubit structures, braiding adjacency operations, and topological state tracking implemented as software simulation. Explicitly simulation-only per ARCHITECTURE.md: "Majorana or topological quantum support is treated as a future adapter layer behind a stable QuantumProcessor trait. Physical access is never assumed."'
  },

  {
    slug: 'qeos-energy-telemetry',
    title: 'High-Frequency Energy Telemetry & Green Scheduling',
    question: 'Can lock-free ring buffers enable high-frequency power telemetry from interrupt context to userspace analysis?',
    summary: 'QEOS implements a lock-free SPSC ring buffer for 1-10kHz power sampling with PowerSample struct (timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz). DVFS governor and carbon-aware scheduler are prototypes with mocked carbon API. No hardware RAPL/MSR integration yet.',
    maturity: 'prototype',
    evidenceTypes: ['source-code'],
    scientificClassification: 'implemented-in-software',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'kernel/src/telemetry/energy.rs',
      'crates/energy-telemetry/src/ring_buffer.rs',
      'crates/energy-telemetry/src/energy.rs',
      'crates/energy-telemetry/src/telemetry.rs',
      'crates/energy-telemetry/src/faults.rs',
      'crates/energy-telemetry/src/provenance.rs',
      'crates/energy-telemetry/src/dvfs.rs',
      'crates/energy-telemetry/src/carbon.rs'
    ],
    findings: [
      'Lock-free SPSC ring buffer (8192 samples, overwrite-on-full)',
      'Atomic Acquire/Release ordering for interrupt-safe producer',
      'PowerSample struct with timestamp, power, temp, frequency',
      'DVFS governor: Performance, Balanced, PowerSave, CarbonAware',
      'Fault injection and provenance tracking modules'
    ],
    limitations: [
      'No hardware RAPL/MSR integration (simulation only)',
      'Carbon intensity provider is mocked',
      'ABA problem risk on ring buffer indices',
      'Overwrite semantics lose oldest data',
      'No formal verification of lock-free correctness'
    ],
    futureQuestions: [
      'Can RAPL/MSR integration achieve real 1-10kHz sampling?',
      'What carbon intensity APIs are viable for production?',
      'Can formal verification eliminate ABA risk?'
    ],
    confidence: 'high',
    portfolioSafeWording: 'Lock-free SPSC ring buffer for high-frequency (1-10kHz) energy telemetry implemented in kernel and energy-telemetry crate. DVFS governor and carbon-aware scheduler are prototypes with mocked carbon API. No hardware RAPL/MSR integration yet.'
  },

  {
    slug: 'qeos-gpu-heterogeneous',
    title: 'GPU / Heterogeneous Compute Abstraction',
    question: 'How should an experimental OS expose GPU compute through HAL abstractions compatible with future quantum backends?',
    summary: 'QEOS defines a heterogeneous compute model with HAL separating kernel from device backends. GPU compute crate (qeos-gpu-compute) and GPU abstraction trait (hardware-abstraction/gpu.rs) exist in workspace. No backend implementations verified. No CUDA/ROCm/Vulkan support claimed.',
    maturity: 'concept',
    evidenceTypes: ['source-code', 'design-document'],
    scientificClassification: 'designed',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'crates/qeos-gpu-compute/',
      'crates/hardware-abstraction/src/gpu.rs',
      'ARCHITECTURE.md',
      'QUANTUM_ARCHITECTURE.md'
    ],
    findings: [
      'Architecture defines heterogeneous model (CPU/GPU/Quantum)',
      'GPU abstraction trait defined in HAL',
      'GPU compute crate exists in Cargo workspace'
    ],
    limitations: [
      'No backend implementations verified',
      'No CUDA/ROCm/Vulkan support claimed',
      'Implementation maturity unclear',
      'No unified scheduler across accelerator types demonstrated'
    ],
    futureQuestions: [
      'What minimal GPU backend enables CI validation?',
      'How to unify quantum and classical accelerator scheduling?',
      'Can capability model express GPU resource constraints?'
    ],
    confidence: 'low',
    portfolioSafeWording: 'Architecture defines heterogeneous compute model with HAL abstractions for CPU, GPU, and quantum backends. GPU and quantum backends are prototype/concept stage. Unified scheduling across accelerator types remains research.'
  },

  {
    slug: 'qeos-distributed-federation',
    title: 'Distributed Cluster & Capability Federation',
    question: 'How can capability-based OS nodes federate for distributed quantum-classical workloads?',
    summary: 'Cluster federation architecture designed in ARCHITECTURE.md. qeos-cluster and qeos-node crates exist as Cargo.toml placeholders only. No implementation exists. Unresolved: distributed consensus, capability federation protocol, cross-node IPC, quantum state sync, carbon-aware placement.',
    maturity: 'roadmap',
    evidenceTypes: ['design-document', 'roadmap'],
    scientificClassification: 'designed',
    project: 'QuantumEnergyOS V.04',
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    sourceFiles: [
      'ARCHITECTURE.md',
      'crates/qeos-cluster/Cargo.toml',
      'crates/qeos-node/Cargo.toml'
    ],
    findings: [
      'Architecture documents federation model',
      'qeos-cluster and qeos-node Cargo.toml placeholders exist'
    ],
    limitations: [
      'No source files in qeos-cluster or qeos-node crates',
      'No distributed consensus implemented',
      'No capability federation protocol',
      'No cross-node IPC with capability preservation',
      'No quantum state synchronization',
      'No carbon-aware geo-distributed placement'
    ],
    futureQuestions: [
      'What consensus algorithm suits capability revocation?',
      'How to preserve capabilities across network partitions?',
      'Can quantum job state survive node failures?'
    ],
    confidence: 'low',
    portfolioSafeWording: 'Cluster federation architecture designed in ARCHITECTURE.md. qeos-cluster and qeos-node crates exist as Cargo.toml placeholders only. No implementation exists.'
  },

  {
    slug: 'quartz5d-visualization',
    title: 'Quartz5D: High-Dimensional Scientific Visualization',
    question: 'How can interactive WebGL visualization enable collaborative exploration of high-dimensional datasets?',
    summary: 'Quartz5D is an experimental interactive visualization engine for high-dimensional scientific datasets using WebGL. The name "5D" refers to visualization dimensions, not physical 5D storage. Real-time CRDT/WebRTC collaboration is roadmap. Repository not inspected — status based on portfolio data only.',
    maturity: 'experimental',
    evidenceTypes: ['external-reference'],
    scientificClassification: 'implemented-in-software',
    project: 'Quartz5D',
    repository: 'https://github.com/GioCorpus/Quartz5D',
    sourceFiles: ['src/data/projects.ts (portfolio entry)'],
    findings: [
      'Portfolio entry describes 5D Data Visualization (experimental)',
      'Real-time Collaboration via CRDT/WebRTC (roadmap)',
      'Technologies: WebGL, TypeScript, React, CRDT, WebRTC, WebAssembly'
    ],
    limitations: [
      'Repository not verified — status from portfolio data only',
      '"5D" in name = visualization dimensions, NOT physical storage',
      'No evidence of physical quartz/holographic storage',
      'CRDT/WebRTC collaboration is roadmap, not implemented'
    ],
    futureQuestions: [
      'What is the actual implementation status of Quartz5D repo?',
      'Can WebGL handle target dataset dimensionality/interactivity?',
      'What CRDT library is suitable for scientific data collaboration?'
    ],
    confidence: 'low',
    portfolioSafeWording: 'Quartz5D is an experimental interactive visualization engine for high-dimensional scientific datasets using WebGL. The name "5D" refers to visualization dimensions, not physical 5D storage. Real-time CRDT/WebRTC collaboration is roadmap.'
  }
];
export const researchPhilosophy = [
  'Separate evidence from hypothesis.',
  'Build small experiments.',
  'Measure before concluding.',
  'Document limitations.',
  'Keep speculative work clearly labeled.',
  'Treat failed experiments as useful evidence.',
  'Prefer reproducibility over impressive claims.'
];

export const researchMapNodes = [
  { id: 'qeos', label: 'QEOS', x: 400, y: 100, type: 'core' },
  { id: 'systems', label: 'Systems\nResearch', x: 200, y: 250, type: 'area' },
  { id: 'compute', label: 'Compute\nResearch', x: 400, y: 250, type: 'area' },
  { id: 'telemetry', label: 'Telemetry\n& Energy', x: 600, y: 250, type: 'area' },
  { id: 'kernel', label: 'Capability\nMicrokernel', x: 100, y: 400, type: 'topic' },
  { id: 'memory', label: 'Memory\nSafety', x: 200, y: 400, type: 'topic' },
  { id: 'hal', label: 'Hardware\nAbstraction', x: 300, y: 400, type: 'topic' },
  { id: 'drivers', label: 'PCIe/DMA\nDrivers', x: 400, y: 400, type: 'topic' },
  { id: 'qpu', label: 'QPU Runtime', x: 300, y: 400, type: 'topic' },
  { id: 'majorana', label: 'Majorana\nSimulation', x: 400, y: 400, type: 'topic' },
  { id: 'errorcorr', label: 'Error\nCorrection', x: 500, y: 400, type: 'topic' },
  { id: 'gpu', label: 'GPU\nAbstraction', x: 600, y: 400, type: 'topic' },
  { id: 'hetero', label: 'Heterogeneous\nModel', x: 700, y: 400, type: 'topic' },
  { id: 'energy', label: 'Energy\nTelemetry', x: 500, y: 400, type: 'topic' },
  { id: 'dvfs', label: 'DVFS/\nCarbon', x: 600, y: 400, type: 'topic' },
  { id: 'dist', label: 'Distributed\nFederation', x: 400, y: 550, type: 'topic' },
  { id: 'quartz', label: 'Quartz5D\nVisualization', x: 600, y: 550, type: 'topic' },
  { id: 'experiments', label: 'Experiments', x: 400, y: 700, type: 'area' }
];

export const researchMapEdges = [
  { from: 'qeos', to: 'systems' },
  { from: 'qeos', to: 'compute' },
  { from: 'qeos', to: 'telemetry' },
  { from: 'systems', to: 'kernel' },
  { from: 'systems', to: 'memory' },
  { from: 'systems', to: 'hal' },
  { from: 'systems', to: 'drivers' },
  { from: 'compute', to: 'qpu' },
  { from: 'compute', to: 'majorana' },
  { from: 'compute', to: 'errorcorr' },
  { from: 'compute', to: 'gpu' },
  { from: 'compute', to: 'hetero' },
  { from: 'telemetry', to: 'energy' },
  { from: 'telemetry', to: 'dvfs' },
  { from: 'qeos', to: 'dist' },
  { from: 'qeos', to: 'quartz' },
  { from: 'qeos', to: 'experiments' }
];

export interface ResearchExperiment {
  slug: string;
  title: string;
  question: string;
  setup: string;
  input: string;
  method: string;
  output: string;
  observation: string;
  limitation: string;
  nextStep: string;
  status: 'supported' | 'not-supported' | 'inconclusive' | 'blocked' | 'not-yet-tested';
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  arxivId?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

export const researchPapers: ResearchPaper[] = [];

export const researchExperiments: ResearchExperiment[] = [
  {
    slug: 'quantum-simulator-backend',
    title: 'Quantum Runtime Simulator Backend',
    question: 'Can a local quantum simulator backend execute quantum circuits through the QPU runtime abstraction?',
    setup: 'QEOS quantum-runtime with LocalSimulatorBackend',
    input: 'Quantum circuits (via circuit.rs representation)',
    method: 'Simulator executes circuits through backend abstraction',
    output: 'Measurement results, simulation metadata (backend type, model, assumptions)',
    observation: 'Simulator backend implemented and functional in CI (mock/simulator only)',
    limitation: 'Simulation only. No physical hardware. Fidelity not benchmarked.',
    nextStep: 'Benchmark simulator performance, add noise models',
    status: 'supported'
  },
  {
    slug: 'lockfree-ring-buffer',
    title: 'Lock-Free Ring Buffer for Energy Telemetry',
    question: 'Can a lock-free SPSC ring buffer sustain 1-10kHz power sampling in interrupt context?',
    setup: 'ring_buffer.rs with atomic indices, PowerSample struct',
    input: 'Synthetic power samples (timestamp_ns, package_w, core_w, dram_w, temperature_c, frequency_mhz)',
    method: 'Producer in interrupt context, consumer in telemetry service',
    output: 'Buffered samples with provenance tracking',
    observation: 'Implementation compiles, atomic ordering (Acquire/Release) used',
    limitation: 'No hardware RAPL/MSR integration. ABA problem risk. Overwrite semantics lose oldest data.',
    nextStep: 'Hardware integration, formal verification of lock-free correctness',
    status: 'supported'
  },
  {
    slug: 'surface-code-correction',
    title: 'Surface Code Error Correction Simulation',
    question: 'Can adaptive syndrome extraction be implemented in Rust for surface codes?',
    setup: 'error_correction.rs in quantum-runtime',
    input: 'Syndrome data from simulated quantum circuit',
    method: 'Adaptive syndrome extraction algorithm',
    output: 'Corrected logical qubit state',
    observation: 'Code exists. 3.2x lifetime claim in portfolio not benchmarked in repo.',
    limitation: 'No benchmark harness. No randomized benchmarking. Claim exceeds evidence.',
    nextStep: 'Implement benchmark suite, validate 3.2x claim',
    status: 'inconclusive'
  }
];