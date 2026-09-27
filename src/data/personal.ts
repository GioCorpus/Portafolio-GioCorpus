import type { Personal } from '../types';
import { profileLinks, socialLinks } from './social';

export const personal: Personal = {
  name: 'Giovanny Anthony Corpus Bernal',
  title: 'Software Engineer · Systems Engineer · Engine Developer',
  tagline: 'Building systems software, developer tools, experimental computing platforms and graphics technology.',
  bio: 'Software Engineer with over 20 years of hands-on experience across software development, Linux systems, automation, technical troubleshooting and secure data handling. Currently focused on Rust/C++ systems programming, backend and full-stack engineering, graphics technology, distributed systems and research-oriented computing.',
  location: 'Mexicali, Baja California, Mexico',
  email: 'giovanny.corpus@gmail.com',
  emailHref: profileLinks.emailHref,
  gmailUrl: profileLinks.gmailUrl,
  github: profileLinks.github,
  linkedin: profileLinks.linkedin,
  cvUrl: '/cv/giovanny-corpus-bernal-cv.pdf',
  avatar: '/avatar.svg',
  social: socialLinks,
  professionalProfile: 'Software Engineer with over 20 years of hands-on experience across software development, Linux systems, automation, technical troubleshooting and secure data handling. Currently focused on Rust/C++ systems programming, backend and full-stack engineering, graphics technology, distributed systems and research-oriented computing.',
  education: [
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
  ],
  languages: [
    { language: 'Spanish', proficiency: 'native', context: 'Native language' },
    { language: 'English', proficiency: 'intermediate', context: 'Technical reading, documentation, and written communication' },
    { language: 'Japanese', proficiency: 'basic', context: 'Elementary reading and basic phrases' },
  ],
};