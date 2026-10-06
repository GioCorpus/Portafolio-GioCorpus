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
  { name: 'Linux', category: 'systems', icon: '🐧', color: '#fcc624', proficiency: 'expert' },
  { name: 'Arch Linux', category: 'systems', icon: '📦', color: '#1793d1', proficiency: 'advanced' },
  { name: 'Artix Linux', category: 'systems', icon: '🔧', color: '#00add8', proficiency: 'advanced' },
  { name: 'UEFI', category: 'systems', icon: '💾', color: '#000000', proficiency: 'intermediate' },
  { name: 'QEMU', category: 'systems', icon: '🖥️', color: '#cc3333', proficiency: 'advanced' },
  { name: 'GDB', category: 'systems', icon: '🐛', color: '#d00a0a', proficiency: 'advanced' },
  { name: 'TCP/IP', category: 'systems', icon: '🌐', color: '#007acc', proficiency: 'advanced' },

  // Backend
  { name: 'Flask', category: 'backend', icon: '🌶️', color: '#000000', proficiency: 'advanced' },
  { name: 'FastAPI', category: 'backend', icon: '⚡', color: '#009688', proficiency: 'expert' },
  { name: 'Node.js', category: 'backend', icon: '🟢', color: '#339933', proficiency: 'advanced' },
  { name: 'REST APIs', category: 'backend', icon: '🔌', color: '#000000', proficiency: 'expert' },
  { name: 'gRPC', category: 'backend', icon: '📡', color: '#4285f4', proficiency: 'intermediate' },
  { name: 'GraphQL', category: 'backend', icon: '📊', color: '#e10098', proficiency: 'intermediate' },

  // Frontend
  { name: 'React', category: 'frontend', icon: '⚛️', color: '#61dafb', proficiency: 'expert' },
  { name: 'Next.js', category: 'frontend', icon: '▲', color: '#000000', proficiency: 'advanced' },
  { name: 'Tauri', category: 'frontend', icon: '🦀', color: '#24292e', proficiency: 'advanced' },
  { name: 'Tailwind CSS', category: 'frontend', icon: '🎨', color: '#38b2ac', proficiency: 'expert' },

  // Engine / Graphics
  { name: 'C++20', category: 'graphics', icon: '⚙️', color: '#00599c', proficiency: 'advanced' },
  { name: 'Unity 6', category: 'graphics', icon: '🎮', color: '#000000', proficiency: 'intermediate' },
  { name: 'URP', category: 'graphics', icon: '🎨', color: '#3b3b3b', proficiency: 'intermediate' },
  { name: 'Unreal Engine 5', category: 'graphics', icon: '🎮', color: '#0e1128', proficiency: 'basic' },
  { name: 'CMake', category: 'graphics', icon: '🏗️', color: '#064f8c', proficiency: 'advanced' },
  { name: 'Rendering', category: 'graphics', icon: '🖼️', color: '#000000', proficiency: 'advanced' },
  { name: 'Animation Systems', category: 'graphics', icon: '🎬', color: '#000000', proficiency: 'intermediate' },
  { name: 'Parallax / 2.5D', category: 'graphics', icon: '📐', color: '#000000', proficiency: 'advanced' },
  { name: 'WebGL', category: 'graphics', icon: '🌐', color: '#990000', proficiency: 'intermediate' },

  // Cloud / DevOps
  { name: 'Azure', category: 'devops', icon: '☁️', color: '#0078d4', proficiency: 'advanced' },
  { name: 'Docker', category: 'devops', icon: '🐳', color: '#2496ed', proficiency: 'expert' },
  { name: 'Git', category: 'devops', icon: '📝', color: '#f05032', proficiency: 'expert' },
  { name: 'GitHub Actions', category: 'devops', icon: '⚙️', color: '#2088ff', proficiency: 'expert' },
  { name: 'CI/CD', category: 'devops', icon: '🔄', color: '#000000', proficiency: 'expert' },

  // Quantum / Research
  { name: 'Qiskit', category: 'research', icon: '⚛️', color: '#6929c4', proficiency: 'advanced' },
  { name: 'Q#', category: 'research', icon: '💜', color: '#512bd4', proficiency: 'intermediate' },
  { name: 'HPC', category: 'research', icon: '🚀', color: '#00d4ff', proficiency: 'advanced' },
  { name: 'Scientific Computing', category: 'research', icon: '🔬', color: '#ff3366', proficiency: 'advanced' },
  { name: 'Distributed Systems', category: 'research', icon: '🌐', color: '#ffb800', proficiency: 'expert' },
  { name: 'Quantum Algorithms', category: 'research', icon: '📐', color: '#6929c4', proficiency: 'intermediate' },
  { name: 'Tensor Networks', category: 'research', icon: '🔗', color: '#000000', proficiency: 'intermediate' },
];