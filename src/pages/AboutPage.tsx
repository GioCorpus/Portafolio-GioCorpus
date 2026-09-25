import { AboutHero } from '../components/about/AboutHero';
import { AboutExperience } from '../components/about/AboutExperience';
import { AboutPhilosophy } from '../components/about/AboutPhilosophy';
import { AboutIdentity } from '../components/about/AboutIdentity';
import { AboutEvidence } from '../components/about/AboutEvidence';
import { AboutDirection } from '../components/about/AboutDirection';
import { personal } from '../data';

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutExperience />
      <AboutPhilosophy />
      <AboutIdentity />
      <AboutEvidence />
      <AboutDirection />
      <section id="about-contact" className="border-b border-white/5 bg-white/[0.015] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">07 / Connect</p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Let's Build Something</h2>
            <p className="mt-4 leading-7 text-dark-400 max-w-xl mx-auto">
              I'm always interested in challenging systems problems, quantum computing applications, graphics engine development, and research collaborations.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={personal.email}
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-gradient-to-r from-accent-cyan to-accent-green text-dark-950 rounded-lg hover:opacity-90 transition-opacity"
              >
                Email
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-white/5 border border-white/10 text-dark-300 rounded-lg hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-white/10 transition-colors"
              >
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider bg-white/5 border border-white/10 text-dark-300 rounded-lg hover:border-accent-cyan/30 hover:text-accent-cyan hover:bg-white/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;