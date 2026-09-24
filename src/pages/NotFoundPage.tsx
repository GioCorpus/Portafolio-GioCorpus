import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function NotFoundPage() {
  return (
    <div className={cn('min-h-[60vh] flex items-center justify-center px-4 text-center')}>
      <div className="max-w-md">
        <h1 className="font-display text-6xl md:text-8xl font-bold text-accent-cyan mb-4">404</h1>
        <p className="font-mono text-lg text-dark-400 mb-8">Page not found</p>
        <p className="text-dark-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className={cn(
            'inline-flex items-center gap-2 px-6 py-3 font-mono text-sm uppercase tracking-wider',
            'bg-gradient-to-r from-accent-cyan to-accent-green text-dark-950 rounded-lg',
            'hover:opacity-90 transition-opacity'
          )}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;