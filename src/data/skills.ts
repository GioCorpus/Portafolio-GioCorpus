import type { Skill, SkillProficiency } from '../types';

export const skills: Skill[] = [
  // Languages
  { name: 'Rust', proficiency: 'expert', category: 'tools', icon: '🦀' },
  { name: 'C++', proficiency: 'advanced', category: 'tools', icon: '⚙️' },
  { name: 'Python', proficiency: 'expert', category: 'tools', icon: '🐍' },
  { name: 'TypeScript', proficiency: 'expert', category: 'frontend', icon: '📘' },
  { name: 'JavaScript', proficiency: 'advanced', category: 'frontend', icon: '📜' },
  { name: 'Bash', proficiency: 'advanced', category: 'tools', icon: '💻' },
  { name: 'Go', proficiency: 'intermediate', category: 'tools', icon: '🐹' },
  { name: 'C', proficiency: 'intermediate', category: 'tools', icon: '🔧' },

  // Systems & OS
  { name: 'Linux', proficiency: 'expert', category: 'tools', icon: '🐧' },
  { name: 'Arch Linux', proficiency: 'advanced', category: 'tools', icon: '📦' },
  { name: 'Artix Linux', proficiency: 'advanced', category: 'tools', icon: '🔧' },
  { name: 'UEFI', proficiency: 'intermediate', category: 'tools', icon: '💾' },
  { name: 'QEMU', proficiency: 'advanced', category: 'tools', icon: '🖥️' },
  { name: 'GDB', proficiency: 'advanced', category: 'tools', icon: '🐛' },
  { name: 'TCP/IP', proficiency: 'advanced', category: 'tools', icon: '🌐' },
  { name: 'Kernel Development', proficiency: 'intermediate', category: 'tools', icon: '🧠' },

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

  // Graphics / Game Tech
  { name: 'C++20', proficiency: 'advanced', category: 'tools', icon: '⚙️' },
  { name: 'Unity 6', proficiency: 'intermediate', category: 'tools', icon: '🎮' },
  { name: 'URP (Universal Render Pipeline)', proficiency: 'intermediate', category: 'tools', icon: '🎨' },
  { name: 'Unreal Engine 5', proficiency: 'basic', category: 'tools', icon: '🎮' },
  { name: 'CMake', proficiency: 'advanced', category: 'tools', icon: '🏗️' },
  { name: 'Rendering', proficiency: 'advanced', category: 'tools', icon: '🖼️' },
  { name: 'Animation Systems', proficiency: 'intermediate', category: 'tools', icon: '🎬' },
  { name: 'Parallax / 2.5D', proficiency: 'advanced', category: 'tools', icon: '📐' },
  { name: 'WebGL', proficiency: 'intermediate', category: 'tools', icon: '🌐' },

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