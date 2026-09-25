// Career Direction data
export interface CareerDirection {
  roles: string[];
  workModes: string[];
  domains: string[];
}

export const careerDirection: CareerDirection = {
  roles: [
    'Software Engineer',
    'Systems Engineer',
    'Backend Engineer',
    'Engine Developer',
    'Research Software Engineer',
  ],
  workModes: ['Remote', 'Hybrid', 'Relocation'],
  domains: [
    'Systems Programming',
    'Operating Systems & Kernels',
    'Engine & Graphics Technology',
    'Backend & Distributed Systems',
    'Developer Tools & Infrastructure',
    'Research & Experimental Computing',
  ],
};