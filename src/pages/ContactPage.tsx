import { Contact } from '../components/Contact';
import { cn } from '../lib/utils';
import { SEO } from '../components/SEO';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <SEO
        title="Contact | Giovanny Corpus Bernal"
        description="Get in touch for project inquiries, research collaborations, or technical opportunities. Email: giovanny.corpus@gmail.com"
        path="/contact"
      />
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <header className="mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">06 / Connect</p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Let's Collaborate
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-mono text-sm sm:text-base">
              I'm always open to discussing new projects, research collaborations, or technical opportunities.
            </p>
          </header>
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default ContactPage;