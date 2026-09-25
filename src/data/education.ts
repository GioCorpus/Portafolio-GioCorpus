// Education data
export interface Education {
  institution: string;
  program: string;
  period: string;
  status: 'completed' | 'in-progress' | 'planned';
  location?: string;
  details?: string[];
}

export const education: Education[] = [
  {
    institution: 'Universidad Politécnica de Baja California',
    program: "Bachelor's — Information Technologies and Digital Innovation",
    period: '2025–Present',
    status: 'in-progress',
    location: 'Mexicali, Baja California, Mexico',
    details: [
      'Focus on software engineering, systems architecture, and emerging technologies',
      'Coursework: Data Structures, Algorithms, Operating Systems, Computer Networks, Database Systems',
    ],
  },
];