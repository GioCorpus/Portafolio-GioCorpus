import { Hero } from '../components/Hero';
import { FlagshipProjects } from '../components/FlagshipProjects';
import { EngineeringProfile } from '../components/EngineeringProfile';
import { Projects } from '../components/Projects';
import { Research } from '../components/Research';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <FlagshipProjects />
      <EngineeringProfile />
      <Projects />
      <Research />
      <Contact />
    </>
  );
}

export default HomePage;