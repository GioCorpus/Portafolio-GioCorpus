import { useEffect, useState } from 'react';
import { navItems } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { cn } from './lib/utils';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={cn('min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100 font-sans antialiased')}>
      <Navbar activeSection={activeSection} onNavigate={goTo} />
      
      <main id="main-content">
        <Hero />
      </main>
    </div>
  );
}

export default App;