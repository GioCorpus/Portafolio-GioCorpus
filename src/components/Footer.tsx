import { socialLinks } from '../data';
import { Github, Linkedin, Twitter, Mail, Heart, Code2, Terminal } from 'lucide-react';

const socialIcons = { github: Github, linkedin: Linkedin, twitter: Twitter, mail: Mail };

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan">
              <Terminal size={18} />
            </div>
            <div className="text-left">
              <div className="font-display text-sm font-semibold text-white tracking-tight">GIOVANNY</div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-accent-cyan/70">Systems Research Lab</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-400">
              <span className="font-mono">© {currentYear} Giovanny Corpus Bernal</span>
              <span className="font-mono">Built with React · TypeScript · Tailwind</span>
              <span className="flex items-center gap-1.5 text-accent-cyan/70">
                <Heart className="w-3.5 h-3.5" aria-hidden="true" />
                <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
                QuantumEnergyOS
              </span>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="group p-2 rounded-lg text-dark-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-all duration-300" aria-label={social.name}>
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5">
          <p className="text-center text-sm text-dark-500 font-mono">
            "Building the future of computing, one qubit at a time."
          </p>
        </div>
      </div>
    </footer>
  );
}