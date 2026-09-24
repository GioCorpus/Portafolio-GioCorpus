import type { Project, ProjectFeature, ProjectStatus } from '../types';

const qeosHighlights: ProjectFeature[] = [
  { title: 'Rust-based Kernel Architecture', description: 'Memory-safe kernel with UEFI boot services integration and hardware abstraction layer', status: 'implemented' },
  { title: 'Quantum Consensus Protocol', description: 'Byzantine fault-tolerant consensus for microgrid synchronization using variational quantum algorithms', status: 'prototype' },
  { title: 'Multi-backend Quantum Support', description: 'Integration with IBM Quantum, Rigetti, and IonQ backends for VQE/QAOA workloads', status: 'implemented' },
  { title: 'Real-time Telemetry System', description: 'Distributed telemetry collection with sub-millisecond latency for energy grid monitoring', status: 'implemented' },
  { title: 'Surface Code Error Correction', description: 'Adaptive syndrome extraction achieving 3.2x logical qubit lifetime improvement', status: 'research' },
  { title: 'Distributed Ledger Integration', description: 'Quantum-resistant consensus layer for energy transaction settlement', status: 'roadmap' },
];

const tamayoHighlights: ProjectFeature[] = [
  { title: 'Native C++20 Engine Core', description: 'Custom 2.5D rendering engine with CMake build system, ECS architecture, and modern C++20 patterns', status: 'prototype' },
  { title: 'Unity 6 URP Prototype', description: 'Parallel prototype in Unity 6 using Universal Render Pipeline for rapid iteration', status: 'implemented' },
  { title: 'Layer-based Parallax System', description: 'Multi-layer parallax rendering with depth sorting and camera-relative positioning', status: 'implemented' },
  { title: 'Timeline Animation System', description: 'Keyframe-based animation timeline with easing curves and track blending', status: 'prototype' },
  { title: 'Sprite Atlas & Asset Pipeline', description: 'Automated sprite packing, texture atlasing, and hot-reload asset pipeline', status: 'experimental' },
  { title: 'Editor Tooling', description: 'In-engine level editor with timeline scrubbing, layer management, and property inspection', status: 'roadmap' },
];

const witchcraftHighlights: ProjectFeature[] = [
  { title: 'Unreal Engine 5 Core', description: 'Gameplay systems built on UE5 with Enhanced Input, Gameplay Ability System (GAS), and Lyra foundation', status: 'prototype' },
  { title: 'Nahual Transformation System', description: 'Character metamorphosis mechanics with state-driven ability sets and visual transitions', status: 'concept' },
  { title: 'Tactical Combat Framework', description: 'Turn-based tactical combat with grid-based positioning, action economy, and affinity systems', status: 'prototype' },
  { title: 'Bond/Affinity Mechanics', description: 'Relationship system affecting combat synergies, narrative branches, and character progression', status: 'concept' },
  { title: 'Branching Narrative Architecture', description: 'Dialogue graph with condition-based branching, persistent choices, and multiple endings', status: 'concept' },
  { title: 'Development Platform', description: 'React + FastAPI + MongoDB tooling for content authoring, telemetry, and live ops', status: 'experimental' },
];

const quantumBrowserHighlights: ProjectFeature[] = [
  { title: 'Quantum-aware Rendering', description: 'Browser engine modifications for quantum circuit visualization', status: 'concept' },
  { title: 'Secure Quantum Channel', description: 'Post-quantum cryptography integration for secure browsing', status: 'research' },
];

const bioCorpusHighlights: ProjectFeature[] = [
  { title: 'Genomic Data Pipeline', description: 'Nextflow-based bioinformatics pipeline for variant calling and annotation', status: 'implemented' },
  { title: 'ML-augmented Analysis', description: 'TensorFlow models for phenotype prediction from genomic data', status: 'prototype' },
];

const quartz5dHighlights: ProjectFeature[] = [
  { title: '5D Data Visualization', description: 'Interactive visualization of high-dimensional datasets using WebGL', status: 'experimental' },
  { title: 'Real-time Collaboration', description: 'CRDT-based collaborative editing for scientific data exploration', status: 'roadmap' },
];

const witchcraftStudiosHighlights: ProjectFeature[] = [
  { title: 'Studio Infrastructure', description: 'Development platform, CI/CD, and content pipeline for indie game production', status: 'implemented' },
  { title: 'Creative Tooling', description: 'Custom editors for narrative design, character creation, and world building', status: 'prototype' },
];

export const projects: Project[] = [
  // FLAGSHIP PROJECTS (featured, ordered)
  {
    slug: 'quantum-energy-os',
    name: 'QuantumEnergyOS V.04',
    shortName: 'QEOS',
    category: 'Systems & Research Engineering',
    summary: 'A Rust-based operating system kernel designed for quantum-classical hybrid workloads with real-time scheduling, hardware abstraction, and distributed quantum consensus.',
    description: 'QuantumEnergyOS V.04 is a research operating system built from the ground up in Rust to support quantum-classical hybrid computing. It features a custom kernel with UEFI boot integration, a hardware abstraction layer for quantum accelerators, a real-time scheduler for variational quantum algorithms, and a novel Byzantine fault-tolerant consensus protocol for distributed quantum energy management.',
    featured: true,
    order: 1,
    theme: 'qeos',
    technologies: ['Rust', 'Operating Systems', 'Linux Kernel', 'UEFI', 'QEMU', 'Quantum Computing', 'VQE', 'QAOA', 'Distributed Systems', 'Consensus Protocols', 'Telemetry', 'Systems Architecture'],
    highlights: qeosHighlights,
    repository: 'https://github.com/GioCorpus/QuantumEnergyOS-V.04',
    website: 'https://quantumenergyos.dev',
    period: '2024 — Present',
    role: 'Founder & Principal Architect',
    status: 'prototype',
    statusDetails: qeosHighlights,
  },
  {
    slug: 'tamayo',
    name: 'Tamayo 2.5D Engine',
    shortName: 'Tamayo',
    category: 'Graphics & Engine Technology',
    summary: 'A dual-track 2.5D animation and rendering engine: native C++20 engine core with modern ECS architecture, and a Unity 6 URP prototype for rapid iteration.',
    description: 'Tamayo explores 2.5D engine architecture through two parallel implementations. The native track is a C++20 engine with custom rendering pipeline, ECS architecture, layer-based parallax system, and timeline animation. The Unity track provides a rapid prototyping environment using URP. Both share a common asset pipeline and design language.',
    featured: true,
    order: 2,
    theme: 'tamayo',
    technologies: ['C++20', 'Unity 6', 'URP', 'CMake', 'Rendering', 'Animation', 'Timeline', 'Parallax', 'Layer Systems', 'Engine Architecture', 'ECS', 'Asset Pipeline'],
    highlights: tamayoHighlights,
    repository: 'https://github.com/GioCorpus/Tamayo-Engine',
    period: '2024 — Present',
    role: 'Engine Architect & Developer',
    status: 'prototype',
    statusDetails: tamayoHighlights,
  },
  {
    slug: 'witchcraft',
    name: 'WitchCraft: Shamans & Nahuals',
    shortName: 'WitchCraft',
    category: 'Game Development & Interactive Systems',
    summary: 'A tactical RPG inspired by Mesoamerican mythology featuring Nahual transformation mechanics, bond/affinity systems, and branching narrative — built on Unreal Engine 5 with a React/FastAPI development platform.',
    description: 'WitchCraft is a tactical RPG drawing from Mesoamerican cultural and mythological sources, specifically the Nahual tradition of shapeshifting spiritual guides. The game features a unique transformation system where characters embody animal spirits (Nahuals) that grant distinct ability sets, a tactical combat system with affinity-based synergies, and a branching narrative driven by relationship mechanics. Development uses Unreal Engine 5 with Gameplay Ability System, alongside a custom React/FastAPI/MongoDB platform for content authoring and live operations.',
    featured: true,
    order: 3,
    theme: 'witchcraft',
    technologies: ['Unreal Engine 5', 'C++', 'Gameplay Ability System', 'Enhanced Input', 'React', 'FastAPI', 'MongoDB', 'Python', 'Game Systems', 'Technical Architecture', 'Narrative Design'],
    highlights: witchcraftHighlights,
    repository: 'https://github.com/GioCorpus/WitchCraft',
    period: '2024 — Present',
    role: 'Founder, Creative & Technical Director',
    status: 'prototype',
    statusDetails: witchcraftHighlights,
  },

  // SELECTED PROJECTS (non-featured)
  {
    slug: 'quantum-browser',
    name: 'Quantum Browser Platform',
    shortName: 'QBrowser',
    category: 'Research Software',
    summary: 'Experimental browser modifications for quantum circuit visualization and post-quantum secure communication channels.',
    featured: false,
    theme: 'qeos',
    technologies: ['C++', 'Chromium', 'Quantum Computing', 'Post-Quantum Crypto', 'WebAssembly'],
    highlights: quantumBrowserHighlights,
    repository: 'https://github.com/GioCorpus/QuantumBrowser',
    status: 'concept',
    statusDetails: quantumBrowserHighlights,
  },
  {
    slug: 'biocorpus',
    name: 'BioCorpus',
    shortName: 'BioCorpus',
    category: 'Scientific Computing',
    summary: 'Bioinformatics pipeline platform for genomic data processing with Nextflow orchestration and ML-augmented variant analysis.',
    featured: false,
    theme: 'default',
    technologies: ['Nextflow', 'Python', 'TensorFlow', 'Genomics', 'Bioinformatics', 'AWS', 'Docker'],
    highlights: bioCorpusHighlights,
    repository: 'https://github.com/GioCorpus/BioCorpus',
    status: 'implemented',
    statusDetails: bioCorpusHighlights,
  },
  {
    slug: 'quartz5d',
    name: 'Quartz5D',
    shortName: 'Quartz5D',
    category: 'Developer Tools & Visualization',
    summary: 'Interactive 5D data visualization engine for high-dimensional scientific datasets with real-time collaborative exploration.',
    featured: false,
    theme: 'tamayo',
    technologies: ['WebGL', 'TypeScript', 'React', 'CRDT', 'WebRTC', 'WebAssembly', 'Scientific Visualization'],
    highlights: quartz5dHighlights,
    repository: 'https://github.com/GioCorpus/Quartz5D',
    status: 'experimental',
    statusDetails: quartz5dHighlights,
  },
  {
    slug: 'witchcraft-studios',
    name: 'WitchCraft Studios',
    shortName: 'WC Studios',
    category: 'Game Development & Interactive Systems',
    summary: 'Indie game studio infrastructure: development platform, content pipeline, and creative tooling for interactive narrative experiences.',
    featured: false,
    theme: 'witchcraft',
    technologies: ['React', 'FastAPI', 'MongoDB', 'Unreal Engine', 'Python', 'CI/CD', 'Content Pipeline', 'Developer Tools'],
    highlights: witchcraftStudiosHighlights,
    repository: 'https://github.com/GioCorpus/WitchCraft-Studios',
    period: '2024 — Present',
    role: 'Founder & Technical Director',
    status: 'implemented',
    statusDetails: witchcraftStudiosHighlights,
  },
];

export const getFeaturedProjects = (): Project[] => 
  projects.filter(p => p.featured).sort((a, b) => (a.order || 0) - (b.order || 0));

export const getSelectedProjects = (): Project[] => 
  projects.filter(p => !p.featured);

export const getProjectBySlug = (slug: string): Project | undefined => 
  projects.find(p => p.slug === slug);