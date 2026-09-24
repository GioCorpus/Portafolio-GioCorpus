import type { SocialLink, NavItem } from '../types';

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/GioCorpus', icon: 'github', color: '#24292e' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/giovannycorpus', icon: 'linkedin', color: '#0a66c2' },
  { name: 'Email', url: 'mailto:giovanny.corpus@gmail.com', icon: 'mail', color: '#ea4335' },
];

export const navItems: NavItem[] = [
  { id: 'about', label: 'ABOUT', href: '/about', icon: 'user' },
  { id: 'work', label: 'WORK', href: '/projects', icon: 'folder-code' },
  { id: 'research', label: 'RESEARCH', href: '/research', icon: 'flask-conical' },
  { id: 'contact', label: 'CONTACT', href: '/contact', icon: 'mail' },
];