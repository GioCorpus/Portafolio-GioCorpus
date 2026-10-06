import type { TechStackItem, SkillProficiency } from '../types';

export const techStack: TechStackItem[] = [
  // Languages
  { name: 'Rust', category: 'language', icon: '🦀', color: '#dea584', proficiency: 'expert' },
  { name: 'C++', category: 'language', icon: '⚙️', color: '#00599c', proficiency: 'advanced' },
  { name: 'Python', category: 'language', icon: '🐍', color: '#3776ab', proficiency: 'expert' },
  { name: 'TypeScript', category: 'language', icon: '📘', color: '#3178c6', proficiency: 'expert' },
  { name: 'JavaScript', category: 'language', icon: '📜', color: '#f7df1e', proficiency: 'advanced' },
  { name: 'Bash', category: 'language', icon: '💻', color: '#4eaa25', proficiency: 'advanced' },
  { name: 'Go', category: 'language', icon: '🐹', color: '#00add8', proficiency: 'intermediate' },
  { name: 'C', category: 'language', icon: '🔧', color: '#555555', proficiency: 'intermediate' },

  // Systems
  { name: 'Linux', category: 'tool', icon: '🐧', color: '#fcc624', proficiency: 'expert' },
  { name: 'Arch Linux', category: 'tool', icon: '📦', color: '#1793d1', proficiency: 'advanced' },
  { name: 'Artix Linux', category: 'tool', icon: '🔧', color: '#00add8', proficiency: 'advanced' },
  { name: 'UEFI', category: 'tool', icon: '💾', color: '#000000', proficiency: 'intermediate' },
  { name: 'QEMU', category: 'tool', icon: '🖥️', color: '#cc3333', proficiency: 'advanced' },
  { name: 'GDB', category: 'tool', icon: '🐛', color: '#d00a0a', proficiency: 'advanced' },
  { name: 'TCP/IP', category: 'tool', icon: '🌐', color: '#007acc', proficiency: 'advanced' },

  // Backend
  { name: 'Flask', category: 'framework', icon: '🌶️', color: '#000000', proficiency: 'advanced' },
  { name: 'FastAPI', category: 'framework', icon: '⚡', color: '#009688', proficiency: 'expert' },
  { name: 'Node.js', category: 'framework', icon: '🟢', color: '#339933', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'tool', icon: '🔌', color: '#000000', proficiency: 'expert' },
  { name: 'gRPC', category: 'tool', icon: '📡', color: '#4285f4', proficiency: 'intermediate' },
  { name: 'GraphQL', category: 'tool', icon: '📊', color: '#e10098', proficiency: 'intermediate' },

  // Frontend
  { name: 'React', category: 'framework', icon: '⚛️', color: '#61dafb', proficiency: 'expert' },
  { name: 'Next.js', category: 'framework', icon: '▲', color: '#000000', proficiency: 'advanced' },
  { name: 'Tauri', category: 'framework', icon: '🦀', color: '#24292e', proficiency: 'advanced' },
  { name: 'Tailwind CSS', category: 'framework', icon: '🎨', color: '#38b2ac', proficiency: 'expert' },

  // Graphics / Game Tech
  { name: 'C++20', category: 'language', icon: '⚙️', color: '#00599c', proficiency: 'advanced' },
  { name: 'Unity 6', category: 'framework', icon: '🎮', color: '#000000', proficiency: 'intermediate' },
  { name: 'URP', category: 'framework', icon: '🎨', color: '#3b3b3b', proficiency: 'intermediate' },
  { name: 'Unreal Engine 5', category: 'framework', icon: '🎮', color: '#0e1128', proficiency: 'basic' },
  { name: 'CMake', category: 'tool', icon: '🏗️', color: '#064f8c', proficiency: 'advanced' },
  { name: 'Rendering', category: 'tool', icon: '🖼️', color: '#000000', proficiency: 'advanced' },
  { name: 'Animation Systems', category: 'tool', icon: '🎬', color: '#000000', proficiency: 'intermediate' },
  { name: 'Parallax / 2.5D', category: 'tool', icon: '📐', color: '#000000', proficiency: 'advanced' },
  { name: 'WebGL', category: 'tool', icon: '🌐', color: '#990000', proficiency: 'intermediate' },

  // Cloud / DevOps
  { name: 'Azure', category: 'cloud', icon: '☁️', color: '#0078d4', proficiency: 'advanced' },
  { name: 'Docker', category: 'tool', icon: '🐳', color: '#2496ed', proficiency: 'expert' },
  { name: 'Git', category: 'tool', icon: '📝', color: '#f05032', proficiency: 'expert' },
  { name: 'GitHub Actions', category: 'tool', icon: '⚙️', color: '#2088ff', proficiency: 'expert' },
  { name: 'CI/CD', category: 'tool', icon: '🔄', color: '#000000', proficiency: 'expert' },

  // Quantum / Research
  { name: 'Qiskit', category: 'research', icon: '⚛️', color: '#6929c4', proficiency: 'advanced' },
  { name: 'Q#', category: 'research', icon: '💜', color: '#512bd4', proficiency: 'intermediate' },
  { name: 'HPC', category: 'research', icon: '🚀', color: '#00d4ff', proficiency: 'advanced' },
  { name: 'Scientific Computing', category: 'research', icon: '🔬', color: '#ff3366', proficiency: 'advanced' },
  { name: 'Distributed Systems', category: 'research', icon: '🌐', color: '#ffb800', proficiency: 'expert' },
  { name: 'Quantum Algorithms', category: 'research', icon: '📐', color: '#6929c4', proficiency: 'intermediate' },
  { name: 'Tensor Networks', category: 'research', icon: '🔗', color: '#000000', proficiency: 'intermediate' },
];