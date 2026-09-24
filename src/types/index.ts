export interface Language {
  name: string;
  level: 'native' | 'fluent' | 'intermediate' | 'basic';
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  current: boolean;
}

export interface Personal {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  avatar?: string;
  social: SocialLink[];
  professionalProfile: string;
  education: Education[];
  languages: Language[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  description: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  avatar: string;
  languages?: Language[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'devops' | 'data' | 'research' | 'tools';
  icon?: string;
}

// Project Theme System
export type ProjectTheme = 'qeos' | 'tamayo' | 'witchcraft' | 'default';

export interface ProjectThemeConfig {
  name: ProjectTheme;
  accentColor: string;
  accentColorMuted: string;
  backgroundGradient: string;
  semanticKeywords: string[];
}

// Project Status Model
export type ProjectStatus = 
  | 'implemented'
  | 'prototype'
  | 'experimental'
  | 'research'
  | 'concept'
  | 'roadmap';

export interface ProjectFeature {
  title: string;
  description: string;
  status: ProjectStatus;
}

// Project Domain Model
export interface Project {
  slug: string;
  name: string;
  shortName?: string;
  category: string;
  summary: string;
  description?: string;
  featured: boolean;
  order?: number;
  theme: ProjectTheme;
  technologies: string[];
  highlights?: ProjectFeature[];
  repository?: string;
  website?: string;
  period?: string;
  role?: string;
  status?: ProjectStatus;
  statusDetails?: ProjectFeature[];
}

export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  arxivId?: string;
  githubUrl?: string;
  tags: string[];
  featured: boolean;
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
  papers?: string[];
  relatedProjects?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'research';
}

export interface TechStackItem {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud' | 'research';
  icon: string;
  color: string;
  proficiency: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'milestone' | 'project' | 'publication' | 'award' | 'education';
  icon: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// Route configuration
export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  qeos: '/projects/quantum-energy-os',
  tamayo: '/projects/tamayo',
  witchcraft: '/projects/witchcraft',
  research: '/research',
  resume: '/resume',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof routes;
export type RoutePath = typeof routes[RouteKey];