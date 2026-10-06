import type { Skill, SkillProficiency } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Rust', proficiency: 'expert', category: 'languages', icon: '🦀' },
  { name: 'C++', proficiency: 'advanced', category: 'languages', icon: '⚙️' },
  { name: 'Python', proficiency: 'expert', category: 'languages', icon: '🐍' },
  { name: 'TypeScript', proficiency: 'expert', category: 'languages', icon: '📘' },
  { name: 'JavaScript', proficiency: 'advanced', category: 'languages', icon: '📜' },
  { name: 'Bash', proficiency: 'advanced', category: 'languages', icon: '💻' },
  { name: 'Go', proficiency: 'intermediate', category: 'languages', icon: '🐹' },
  { name: 'C', proficiency: 'intermediate', category: 'languages', icon: '🔧' },

  // Systems & OS
  { name: 'Linux', proficiency: 'expert', category: 'systems', icon: '🐧' },
  { name: 'Arch Linux', proficiency: 'advanced', category: 'systems', icon: '📦' },
  { name: 'Artix Linux', proficiency: 'advanced', category: 'systems', icon: '🔧' },
  { name: 'UEFI', proficiency: 'intermediate', category: 'systems', icon: '💾' },
  { name: 'QEMU', proficiency: 'advanced', category: 'systems', icon: '🖥️' },
  { name: 'GDB', proficiency: 'advanced', category: 'systems', icon: '🐛' },
  { name: 'TCP/IP', proficiency: 'advanced', category: 'systems', icon: '🌐' },
  { name: 'Kernel Development', proficiency: 'intermediate', category: 'systems', icon: '🧠' },

  // Backend
  { name: 'Flask', proficiency: 'advanced', category: 'backend', icon: '🌶️' },
  { name: 'FastAPI', proficiency: 'expert', category: 'backend', icon: '⚡' },
  { name: 'Node.js', proficiency: 'advanced', category: 'backend', icon: '🟢' },
  { name: 'REST APIs', proficiency: 'expert', category: 'backend', icon: '🔌' },
  { name: 'gRPC', proficiency: 'intermediate', category: 'backend', icon: '📡' },
  { name: 'GraphQL', proficiency: 'intermediate', category: 'backend', icon: '📊' },

  // Frontend
  { name: 'React', proficiency: 'expert', category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', proficiency: 'advanced', category: 'frontend', icon: '▲' },
  { name: 'Tauri', proficiency: 'advanced', category: 'frontend', icon: '🦀' },
  { name: 'Tailwind CSS', proficiency: 'expert', category: 'frontend', icon: '🎨' },

  // Engine / Graphics
  { name: 'C++20', proficiency: 'advanced', category: 'graphics', icon: '⚙️' },
  { name: 'Unity 6', proficiency: 'intermediate', category: 'graphics', icon: '🎮' },
  { name: 'URP (Universal Render Pipeline)', proficiency: 'intermediate', category: 'graphics', icon: '🎨' },
  { name: 'Unreal Engine 5', proficiency: 'basic', category: 'graphics', icon: '🎮' },
  { name: 'CMake', proficiency: 'advanced', category: 'graphics', icon: '🏗️' },
  { name: 'Rendering', proficiency: 'advanced', category: 'graphics', icon: '🖼️' },
  { name: 'Animation Systems', proficiency: 'intermediate', category: 'graphics', icon: '🎬' },
  { name: 'Parallax / 2.5D', proficiency: 'advanced', category: 'graphics', icon: '📐' },
  { name: 'WebGL', proficiency: 'intermediate', category: 'graphics', icon: '🌐' },

  // Cloud / DevOps
  { name: 'Azure', proficiency: 'advanced', category: 'devops', icon: '☁️' },
  { name: 'Docker', proficiency: 'expert', category: 'devops', icon: '🐳' },
  { name: 'Git', proficiency: 'expert', category: 'devops', icon: '📝' },
  { name: 'GitHub Actions', proficiency: 'expert', category: 'devops', icon: '⚙️' },
  { name: 'CI/CD', proficiency: 'expert', category: 'devops', icon: '🔄' },

  // Quantum / Research
  { name: 'Qiskit', proficiency: 'advanced', category: 'research', icon: '⚛️' },
  { name: 'Q#', proficiency: 'intermediate', category: 'research', icon: '💜' },
  { name: 'HPC', proficiency: 'advanced', category: 'research', icon: '🚀' },
  { name: 'Scientific Computing', proficiency: 'advanced', category: 'research', icon: '🔬' },
  { name: 'Distributed Systems', proficiency: 'expert', category: 'research', icon: '🌐' },
  { name: 'Quantum Algorithms', proficiency: 'intermediate', category: 'research', icon: '📐' },
  { name: 'Tensor Networks', proficiency: 'intermediate', category: 'research', icon: '🔗' },
];