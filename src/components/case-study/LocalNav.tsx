import { cn } from '../../lib/utils';
import { useState, useEffect } from 'react';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'kernel', label: 'Kernel' },
  { id: 'memory', label: 'Memory' },
  { id: 'hal', label: 'HAL / Devices' },
  { id: 'drivers', label: 'Drivers' },
  { id: 'ipc', label: 'IPC / Services' },
  { id: 'telemetry', label: 'Telemetry' },
  { id: 'security', label: 'Security' },
  { id: 'pcie', label: 'PCIe / DMA' },
  { id: 'gpu', label: 'GPU / Compute' },
  { id: 'quantum', label: 'Quantum' },
  { id: 'energy', label: 'Energy' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'cluster', label: 'Cluster' },
  { id: 'observability', label: 'Observability' },
  { id: 'testing', label: 'Testing' },
  { id: 'decisions', label: 'Decisions' },
  { id: 'status', label: 'Status' },
  { id: 'phase3', label: 'Roadmap' },
  { id: 'critique', label: 'Critique' },
  { id: 'summary', label: 'Summary' },
];

export function LocalNav() {
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
      aria-label="Case study section navigation"
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
                    ? 'text-cyan-400 bg-cyan-400/10'
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

export default LocalNav;