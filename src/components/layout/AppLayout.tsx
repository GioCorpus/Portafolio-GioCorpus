import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { cn } from '../../lib/utils';

export function AppLayout() {
  return (
    <div className={cn('min-h-screen overflow-x-hidden bg-neutral-950 text-neutral-100 font-sans antialiased')}>
      <Navbar />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;