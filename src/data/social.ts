import type { SocialLink, NavItem, ProfileLinks } from '../types';

export const profileLinks: ProfileLinks = {
  github: 'https://github.com/GioCorpus',
  linkedin: 'https://www.linkedin.com/in/giovanny-anthony-corpus-bernal-751524311/',
  emailHref: 'mailto:giovanny.corpus@gmail.com',
  gmailUrl: 'https://workspace.google.com/intl/en-US/gmail/',
};

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: profileLinks.github, icon: 'github', color: '#24292e' },
  { name: 'LinkedIn', url: profileLinks.linkedin, icon: 'linkedin', color: '#0a66c2' },
  { name: 'Email', url: profileLinks.emailHref, icon: 'mail', color: '#ea4335' },
  { name: 'Gmail', url: profileLinks.gmailUrl, icon: 'mail', color: '#4285f4' },
];

export const navItems: NavItem[] = [
  { id: 'about', label: 'ABOUT', href: '/about', icon: 'user' },
  { id: 'work', label: 'WORK', href: '/projects', icon: 'folder-code' },
  { id: 'research', label: 'RESEARCH', href: '/research', icon: 'flask-conical' },
  { id: 'contact', label: 'CONTACT', href: '/contact', icon: 'mail' },
];