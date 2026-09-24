import { Hero } from '../components/Hero';
import { FlagshipProjects } from '../components/FlagshipProjects';
import { EngineeringProfile } from '../components/EngineeringProfile';
import { EngineeringDomains } from '../components/EngineeringDomains';
import { ExperienceSnapshot } from '../components/ExperienceSnapshot';
import { Projects } from '../components/Projects';
import { TechnicalStackPreview } from '../components/TechnicalStackPreview';
import { Research } from '../components/Research';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
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