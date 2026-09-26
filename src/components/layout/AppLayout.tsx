import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { cn } from '../../lib/utils';

export function AppLayout() {
  const location = useLocation();
  
  // Map routes to section IDs for single-page navigation on home
  const sectionMap: Record<string, string> = {
    '/': 'hero',
    '/about': 'about',
    '/resume': 'resume',
    '/research': 'research',
    '/projects': 'featured-work',
    '/contact': 'contact',
  };

  const activeSection = sectionMap[location.pathname] || 'hero';

  const onNavigate = (id: string) => {
    const targetPath = Object.entries(sectionMap).find(([_, section]) => section === id)?.[0];
    if (targetPath && targetPath !== location.pathname) {
      // Navigate to the route
      window.location.href = targetPath;
    } else if (id !== 'hero') {
      // Scroll to section on current page (home)
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll to top for hero
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Route focus management: focus main content on route change
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus({ preventScroll: true });
    }
  }, [location.pathname]);

  return (
    <div className={cn('min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100 font-sans antialiased')}>
      {/* Skip Link - accessible navigation */}
      <a
        href="#main-content"
        className={cn(
          'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50',
          'px-4 py-2 bg-accent-cyan text-dark-950 font-mono text-sm uppercase tracking-wider',
          'rounded-lg outline-none ring-2 ring-accent-cyan ring-offset-2 ring-offset-dark-950'
        )}
      >
        Skip to main content
      </a>
      
      <Navbar activeSection={activeSection} onNavigate={onNavigate} />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;