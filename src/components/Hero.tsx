import { personal, socialLinks } from '../data';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Cpu, Globe } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from '../lib/utils';
import { EngineerProfilePanel } from './EngineerProfilePanel';

const socialIcons = { github: Github, linkedin: Linkedin, mail: Mail };

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <HeroContent />
          <EngineerProfilePanel />
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

function HeroContent() {
  return (
    <div className="max-w-3xl animate-fade-in-up">
      <div className="mb-6 flex flex-wrap items-center gap-2 animate-slide-in-right animate-delay-200">
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan/70">SOFTWARE · SYSTEMS · ENGINE TECHNOLOGY · R&D</span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up animate-delay-300">
        <span className="text-white">GIOVANNY ANTHONY</span>
        <br />
        <span className="text-white">CORPUS BERNAL</span>
      </h1>
      <p className="mt-6 text-lg sm:text-xl text-dark-300 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-400 font-mono text-sm sm:text-base">
        Software Engineer · Systems Engineer · Engine Developer
      </p>
      <p className="mt-4 text-base sm:text-lg text-dark-400 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-400">
        Building systems software, developer tools, experimental computing platforms and interactive worlds.
      </p>
      <HeroActions />
      <HeroSocial />
      <HeroLocation />
    </div>
  );
}

function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-in-up animate-delay-500">
      <Button size="lg" onClick={() => document.getElementById('featured-work')?.scrollIntoView({ behavior: 'smooth' })}>
        Explore My Work
        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
      </Button>
      <Button variant="secondary" size="lg" onClick={() => window.open('https://github.com/GioCorpus', '_blank')}>
        <Github className="mr-2 w-4 h-4" aria-hidden="true" />
        GitHub
      </Button>
      <Button variant="secondary" size="lg" onClick={() => window.open('https://linkedin.com/in/giovannycorpus', '_blank')}>
        <Linkedin className="mr-2 w-4 h-4" aria-hidden="true" />
        LinkedIn
      </Button>
    </div>
  );
}

function HeroSocial() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-in-up animate-delay-600">
      {socialLinks.map((social) => {
        const Icon = socialIcons[social.icon as keyof typeof socialIcons];
        return (
          <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className={cn('flex items-center gap-2 text-dark-400 hover:text-accent-cyan transition-colors duration-300 group')} aria-label={social.name}>
            <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
            <span className="font-mono text-xs hidden sm:inline">{social.name}</span>
          </a>
        );
      })}
    </div>
  );
}

function HeroLocation() {
  return (
    <div className="mt-8 flex items-center gap-3 text-dark-500 font-mono text-xs animate-fade-in-up animate-delay-700">
      <Globe className="w-4 h-4 text-accent-cyan/70" aria-hidden="true" />
      <span>Mexicali, Baja California, Mexico</span>
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-1000">
      <svg className="w-6 h-6 text-dark-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
}