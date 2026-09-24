import type { Skill } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Rust', level: 95, category: 'language', icon: '🦀' },
  { name: 'C++', level: 85, category: 'language', icon: '⚙️' },
  { name: 'Python', level: 95, category: 'language', icon: '🐍' },
  { name: 'TypeScript', level: 95, category: 'language', icon: '📘' },
  { name: 'JavaScript', level: 90, category: 'language', icon: '📜' },
  { name: 'Bash', level: 90, category: 'language', icon: '💻' },
  { name: 'Go', level: 80, category: 'language', icon: '🐹' },
  { name: 'C', level: 75, category: 'language', icon: '🔧' },

  // Systems & OS
  { name: 'Linux', level: 95, category: 'systems', icon: '🐧' },
  { name: 'Arch Linux', level: 90, category: 'systems', icon: '📦' },
  { name: 'Artix Linux', level: 85, category: 'systems', icon: '🔧' },
  { name: 'UEFI', level: 75, category: 'systems', icon: '💾' },
  { name: 'QEMU', level: 80, category: 'systems', icon: '🖥️' },
  { name: 'GDB', level: 85, category: 'systems', icon: '🐛' },
  { name: 'TCP/IP', level: 85, category: 'systems', icon: '🌐' },
  { name: 'Kernel Development', level: 70, category: 'systems', icon: '🧠' },

  // Backend
  { name: 'Flask', level: 85, category: 'backend', icon: '🌶️' },
  { name: 'FastAPI', level: 90, category: 'backend', icon: '⚡' },
  { name: 'Node.js', level: 85, category: 'backend', icon: '🟢' },
  { name: 'REST APIs', level: 90, category: 'backend', icon: '🔌' },
  { name: 'gRPC', level: 75, category: 'backend', icon: '📡' },
  { name: 'GraphQL', level: 70, category: 'backend', icon: '📊' },

  // Frontend
  { name: 'React', level: 90, category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: '▲' },
  { name: 'Tauri', level: 80, category: 'frontend', icon: '🦀' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend', icon: '🎨' },

  // Graphics / Game Tech
  { name: 'C++20', level: 85, category: 'graphics', icon: '⚙️' },
  { name: 'Unity 6', level: 80, category: 'graphics', icon: '🎮' },
  { name: 'URP (Universal Render Pipeline)', level: 75, category: 'graphics', icon: '🎨' },
  { name: 'Unreal Engine 5', level: 70, category: 'graphics', icon: '🎮' },
  { name: 'CMake', level: 85, category: 'graphics', icon: '🏗️' },
  { name: 'Rendering', level: 80, category: 'graphics', icon: '🖼️' },
  { name: 'Animation Systems', level: 75, category: 'graphics', icon: '🎬' },
  { name: 'Parallax / 2.5D', level: 80, category: 'graphics', icon: '📐' },
  { name: 'WebGL', level: 75, category: 'graphics', icon: '🌐' },

  // Cloud / DevOps
  { name: 'Azure', level: 85, category: 'devops', icon: '☁️' },
  { name: 'Docker', level: 95, category: 'devops', icon: '🐳' },
  { name: 'Git', level: 95, category: 'devops', icon: '📝' },
  { name: 'GitHub Actions', level: 90, category: 'devops', icon: '⚙️' },
  { name: 'CI/CD', level: 90, category: 'devops', icon: '🔄' },

  // Quantum / Research
  { name: 'Qiskit', level: 85, category: 'research', icon: '⚛️' },
  { name: 'Q#', level: 70, category: 'research', icon: '💜' },
  { name: 'HPC', level: 85, category: 'research', icon: '🚀' },
  { name: 'Scientific Computing', level: 85, category: 'research', icon: '🔬' },
  { name: 'Distributed Systems', level: 90, category: 'research', icon: '🌐' },
  { name: 'Quantum Algorithms', level: 80, category: 'research', icon: '📐' },
  { name: 'Tensor Networks', level: 70, category: 'research', icon: '🔗' },
];