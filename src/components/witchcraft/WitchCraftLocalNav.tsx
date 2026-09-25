import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'game-systems', label: 'Game Systems' },
  { id: 'combat', label: 'Combat' },
  { id: 'grid', label: 'Grid' },
  { id: 'turns', label: 'Turns' },
  { id: 'magic', label: 'Magic' },
  { id: 'nahual', label: 'Nahual' },
  { id: 'progression', label: 'Progression' },
  { id: 'affinity', label: 'Affinity' },
  { id: 'narrative', label: 'Narrative' },
  { id: 'unity', label: 'Unity 6' },
  { id: 'platform', label: 'Platform' },
  { id: 'status', label: 'Status' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'repository', label: 'Repository' },
];

export function WitchCraftLocalNav() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -66%', threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      setIsSticky(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-16 right-4 z-40 w-48 hidden lg:block transition-all duration-200',
        isSticky ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="WitchCraft case study section navigation"
    >
      <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-lg p-2">
        <ul className="space-y-1" role="list">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  'block px-3 py-2 text-xs font-medium rounded-md transition-colors',
                  activeSection === id
                    ? 'text-amber-400 bg-amber-400/10'
                    : 'text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(id);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(id);
                  }
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default WitchCraftLocalNav;