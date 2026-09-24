import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navItems } from '../data';
import { cn } from '../lib/utils';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-dark-950/80 backdrop-blur-xl transition-all duration-300', scrolled && 'bg-dark-950/95 shadow-glow-cyan')}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <button onClick={() => onNavigate('hero')} className="group flex items-center gap-3" aria-label="Go to home">
          <div className="grid h-9 w-9 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10 transition-all duration-300">
            <Terminal size={18} />
          </div>
          <div className="text-left hidden sm:block">
            <div className="font-display text-sm font-semibold text-white tracking-tight">GIOVANNY</div>
            <div className="font-mono text-[9px] uppercase tracking-widest text-accent-cyan/70">Systems Research Lab</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => onNavigate(item.id)} className={cn('relative px-3 py-2 text-xs font-mono tracking-wider uppercase transition-all duration-300 rounded-lg', activeSection === item.id ? 'bg-accent-cyan/10 text-accent-cyan' : 'text-dark-400 hover:bg-dark-800/50 hover:text-white')} aria-current={activeSection === item.id ? 'page' : undefined}>
              {item.label}
              {activeSection === item.id && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-cyan rounded-full" aria-hidden="true" />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://github.com/GioCorpus" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-mono tracking-wider uppercase text-accent-cyan border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/10 transition-all duration-300" aria-label="GitHub">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-lg text-dark-400 hover:bg-dark-800/50 hover:text-white transition-colors" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-dark-950/95 backdrop-blur-xl py-4 px-4 animate-fade-in">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => onNavigate(item.id)} className={cn('w-full px-4 py-3 text-left text-sm font-mono tracking-wider uppercase transition-all duration-300 rounded-lg', activeSection === item.id ? 'bg-accent-cyan/10 text-accent-cyan' : 'text-dark-400 hover:bg-dark-800/50 hover:text-white')} aria-current={activeSection === item.id ? 'page' : undefined}>
                {item.label}
              </button>
            ))}
            <a href="https://github.com/GioCorpus" target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono tracking-wider uppercase text-accent-cyan border border-accent-cyan/30 rounded-lg hover:bg-accent-cyan/10 transition-all duration-300">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}