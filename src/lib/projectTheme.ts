import type { ProjectTheme, ProjectThemeConfig } from '../types';

export const projectThemes: Record<ProjectTheme, ProjectThemeConfig> = {
  qeos: {
    name: 'qeos',
    accentColor: '#00d4ff',
    accentColorMuted: 'rgba(0, 212, 255, 0.15)',
    backgroundGradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(0, 180, 216, 0.04) 50%, transparent 100%)',
    semanticKeywords: ['systems', 'kernel', 'hardware', 'telemetry', 'research', 'quantum', 'distributed'],
  },
  tamayo: {
    name: 'tamayo',
    accentColor: '#8b5cf6',
    accentColorMuted: 'rgba(139, 92, 246, 0.15)',
    backgroundGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
    semanticKeywords: ['graphics', 'rendering', 'animation', 'geometry', 'engine tooling', '2.5d', 'parallax'],
  },
  witchcraft: {
    name: 'witchcraft',
    accentColor: '#d4a843',
    accentColorMuted: 'rgba(212, 168, 67, 0.15)',
    backgroundGradient: 'linear-gradient(135deg, rgba(212, 168, 67, 0.08) 0%, rgba(0, 168, 132, 0.04) 50%, transparent 100%)',
    semanticKeywords: ['tactical systems', 'interactive worlds', 'game technology', 'creative engineering', 'unreal engine'],
  },
  default: {
    name: 'default',
    accentColor: '#00d4ff',
    accentColorMuted: 'rgba(0, 212, 255, 0.1)',
    backgroundGradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%)',
    semanticKeywords: [],
  },
};

export function getProjectTheme(theme: ProjectTheme): ProjectThemeConfig {
  return projectThemes[theme] || projectThemes.default;
}

export function getThemeAccentColor(theme: ProjectTheme): string {
  return projectThemes[theme]?.accentColor || projectThemes.default.accentColor;
}

export function getThemeAccentColorMuted(theme: ProjectTheme): string {
  return projectThemes[theme]?.accentColorMuted || projectThemes.default.accentColorMuted;
}

export function getThemeBackgroundGradient(theme: ProjectTheme): string {
  return projectThemes[theme]?.backgroundGradient || projectThemes.default.backgroundGradient;
}

export function getThemeSemanticKeywords(theme: ProjectTheme): string[] {
  return projectThemes[theme]?.semanticKeywords || [];
}

// Status badge variants mapping
export const statusVariants: Record<ProjectStatus, { 
  label: string; 
  color: string; 
  bgColor: string; 
  borderColor: string;
}> = {
  implemented: {
    label: 'Implemented',
    color: '#00ff88',
    bgColor: 'rgba(0, 255, 136, 0.15)',
    borderColor: 'rgba(0, 255, 136, 0.3)',
  },
  prototype: {
    label: 'Prototype',
    color: '#00d4ff',
    bgColor: 'rgba(0, 212, 255, 0.15)',
    borderColor: 'rgba(0, 212, 255, 0.3)',
  },
  experimental: {
    label: 'Experimental',
    color: '#ffb800',
    bgColor: 'rgba(255, 184, 0, 0.15)',
    borderColor: 'rgba(255, 184, 0, 0.3)',
  },
  research: {
    label: 'Research',
    color: '#6929c4',
    bgColor: 'rgba(105, 41, 196, 0.15)',
    borderColor: 'rgba(105, 41, 196, 0.3)',
  },
  concept: {
    label: 'Concept',
    color: '#8b5cf6',
    bgColor: 'rgba(139, 92, 246, 0.15)',
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  roadmap: {
    label: 'Roadmap',
    color: '#64748b',
    bgColor: 'rgba(100, 116, 139, 0.15)',
    borderColor: 'rgba(100, 116, 139, 0.3)',
  },
};

import type { ProjectStatus } from '../types';