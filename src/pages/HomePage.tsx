import { Hero } from '../components/Hero';
import { FlagshipProjects } from '../components/FlagshipProjects';
import { EngineeringProfile } from '../components/EngineeringProfile';
import { EngineeringDomains } from '../components/EngineeringDomains';
import { ExperienceSnapshot } from '../components/ExperienceSnapshot';
import { Projects } from '../components/Projects';
import { TechnicalStackPreview } from '../components/TechnicalStackPreview';
import { Research } from '../components/Research';
import { Contact } from '../components/Contact';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <>
      <SEO
        title="Giovanny Corpus Bernal | Systems Research Lab"
        description="Software Engineer · Systems Engineer · Engine Developer. Building systems software, developer tools, experimental computing platforms and graphics technology. Quantum computing, distributed systems, and interactive worlds."
        path="/"
      />
      <Hero />
      <FlagshipProjects />
      <EngineeringProfile />
      <EngineeringDomains />
      <ExperienceSnapshot />
      <Projects mode="selected" />
      <TechnicalStackPreview />
      <Research />
      <Contact />
    </>
  );
}

export default HomePage;