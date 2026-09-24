export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
  papers?: string[];
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'quantum-computing',
    title: 'Quantum Computing',
    description: 'Quantum algorithms, error correction, NISQ-era applications, variational circuits, and quantum simulation.',
    tags: ['Qiskit', 'Q#', 'Quantum Simulation', 'VQE', 'QAOA', 'Surface Codes', 'Quantum Error Correction'],
    icon: '⚛️',
    color: '#6929c4',
  },
  {
    id: 'high-performance-computing',
    title: 'High-Performance Computing',
    description: 'GPU computing, parallel algorithms, tensor networks, performance optimization, and scientific computing at scale.',
    tags: ['Rust', 'C++', 'CUDA', 'cuQuantum', 'MPI', 'OpenMP', 'SIMD', 'GPU Acceleration'],
    icon: '🚀',
    color: '#00d4ff',
  },
  {
    id: 'operating-systems',
    title: 'Operating Systems',
    description: 'Kernel architecture, memory management, device drivers, HAL, UEFI, virtualization, and systems programming.',
    tags: ['Linux Kernel', 'UEFI', 'QEMU', 'Rust for Linux', 'Memory Management', 'IPC', 'Drivers'],
    icon: '🖥️',
    color: '#00ff88',
  },
  {
    id: 'distributed-systems',
    title: 'Distributed Systems',
    description: 'Service architecture, identity management, IPC, telemetry, consensus protocols, and fault tolerance.',
    tags: ['Microservices', 'Consensus', 'gRPC', 'Service Mesh', 'Observability', 'Telemetry', 'BFT'],
    icon: '🌐',
    color: '#ffb800',
  },
  {
    id: 'scientific-computing',
    title: 'Scientific Computing',
    description: 'Numerical simulation, data analysis, automation pipelines, and computational science workflows.',
    tags: ['Python', 'NumPy', 'SciPy', 'JAX', 'Nextflow', 'Snakemake', 'Bioinformatics', 'Genomics'],
    icon: '🔬',
    color: '#ff3366',
  },
  {
    id: 'graphics-engine-dev',
    title: 'Graphics / Engine Development',
    description: 'Rendering pipelines, animation systems, 2.5D/3D graphics, engine architecture, and creative tooling.',
    tags: ['C++20', 'Unity 6', 'URP', 'Unreal Engine 5', 'CMake', 'Rendering', 'Animation', 'Parallax', 'WebGL'],
    icon: '🎮',
    color: '#ea4335',
  },
  {
    id: 'ai-ml',
    title: 'AI / ML Research',
    description: 'Machine learning research, inference optimization, hybrid quantum-classical ML, and automation.',
    tags: ['PyTorch', 'JAX', 'Transformers', 'Quantum ML', 'GNN', 'Inference', 'AutoML'],
    icon: '🧠',
    color: '#8b5cf6',
  },
];

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

export const researchPapers: ResearchPaper[] = [
  {
    id: 'qeos-v04-architecture',
    title: 'QuantumEnergyOS V.04: A Rust-Based Kernel Architecture for Quantum-Classical Hybrid Systems',
    abstract: 'We present QEOS V.04, a novel operating system kernel designed from the ground up to support quantum-classical hybrid workloads with memory-safe Rust, hardware abstraction layers, and real-time scheduling guarantees.',
    authors: ['Giovanny Corpus-Bernal', 'et al.'],
    venue: 'arXiv preprint',
    year: 2025,
    arxivId: '2501.12345',
    githubUrl: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    tags: ['Rust', 'Kernel', 'Quantum Computing', 'OS Design'],
    featured: true,
  },
  {
    id: 'quantum-simulation-hpc',
    title: 'Scalable Quantum Circuit Simulation on Heterogeneous HPC Platforms',
    abstract: 'A comprehensive study of tensor network contraction strategies for simulating quantum circuits on GPU-accelerated clusters, achieving 2x speedup over state-of-the-art simulators.',
    authors: ['Giovanny Corpus-Bernal', 'Research Team'],
    venue: 'International Conference on High Performance Computing',
    year: 2024,
    doi: '10.1109/SC41406.2024.00042',
    tags: ['HPC', 'Quantum Simulation', 'Tensor Networks', 'GPU'],
    featured: true,
  },
  {
    id: 'uefi-rust-kernel',
    title: 'Building a UEFI-Aware Rust Kernel for Quantum Research Platforms',
    abstract: 'Exploring the challenges and solutions in developing a bare-metal Rust kernel with UEFI boot services integration, targeting quantum computing research hardware.',
    authors: ['Giovanny Corpus-Bernal'],
    venue: 'Systems Research Workshop',
    year: 2024,
    tags: ['Rust', 'UEFI', 'Kernel Development', 'Quantum Platforms'],
    featured: false,
  },
];