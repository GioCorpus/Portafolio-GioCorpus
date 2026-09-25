// Languages data
export interface Language {
  language: string;
  proficiency: 'native' | 'fluent' | 'professional' | 'intermediate' | 'basic';
  context?: string;
}

export const languages: Language[] = [
  {
    language: 'Spanish',
    proficiency: 'native',
    context: 'Native language',
  },
  {
    language: 'English',
    proficiency: 'intermediate',
    context: 'Technical reading, documentation, and written communication',
  },
  {
    language: 'Japanese',
    proficiency: 'basic',
    context: 'Elementary reading and basic phrases',
  },
];