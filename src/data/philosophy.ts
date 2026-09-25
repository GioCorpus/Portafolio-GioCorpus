// Engineering Philosophy data
export interface PhilosophyPrinciple {
  title: string;
  description: string;
}

export const engineeringPhilosophy: PhilosophyPrinciple[] = [
  {
    title: 'Evidence Over Hype',
    description: 'Claims require proof. Architecture decisions are documented with trade-offs. Prototypes are separated from production assertions.',
  },
  {
    title: 'First-Principles Understanding',
    description: 'Systems are understood from fundamentals — not just API surfaces. Debugging starts at the hardware/kernel boundary when needed.',
  },
  {
    title: 'Prototypes ≠ Production',
    description: 'Experimental code is clearly marked. Research spikes inform design but do not ship without hardening, testing, and evidence.',
  },
  {
    title: 'Incremental Delivery',
    description: 'Large systems are built in verifiable slices. Each increment ships value and reduces risk. No big-bang rewrites.',
  },
  {
    title: 'Architectural Decision Records',
    description: 'Significant choices are documented with context, alternatives considered, and rationale. Future maintainers deserve the why.',
  },
  {
    title: 'Test Assumptions Early',
    description: 'Hypotheses about performance, correctness, or feasibility are validated with minimal experiments before committing.',
  },
  {
    title: 'Continuous Learning Loop',
    description: 'New domains are approached by building, measuring, and reflecting. The portfolio itself is a learning artifact.',
  },
  {
    title: 'Domain-Driven Engineering',
    description: 'Technical decisions serve the problem domain. Abstractions pay rent — they earn their complexity through reuse or clarity.',
  },
];