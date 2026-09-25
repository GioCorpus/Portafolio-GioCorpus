// Current Focus data
export interface FocusItem {
  project: string;
  domain: string;
  status: 'active' | 'research' | 'planned';
  description: string;
}

export const currentFocus: FocusItem[] = [
  {
    project: 'QuantumEnergyOS V.04',
    domain: 'Systems Engineering',
    status: 'active',
    description: 'Rust-based research OS: kernel, memory management, hardware abstraction, service framework, telemetry.',
  },
  {
    project: 'Tamayo 2.5D Engine',
    domain: 'Engine Technology',
    status: 'active',
    description: 'C++ 2.5D rendering engine with animation timeline, layer composition, and editor tooling.',
  },
  {
    project: 'WitchCraft: Shamans & Nahuals',
    domain: 'Interactive Systems',
    status: 'active',
    description: 'Dual architecture: Unity 6 game runtime (roadmap) + React/FastAPI/MongoDB documentation platform (implemented).',
  },
];