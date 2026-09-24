import { Link, useRouteError } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Home, FolderGit2, Bug, Terminal, Mail } from 'lucide-react';
import { personal } from '../data/personal';

export function RouteErrorPage() {
  const error = useRouteError();

  const isDev = import.meta.env.DEV;
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
  const errorStack = error instanceof Error ? error.stack : undefined;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-dark-950">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <Terminal className="mx-auto mb-4 w-16 h-16 text-accent-cyan/50" aria-hidden="true" />
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            APPLICATION ERROR
          </h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-accent-cyan">
            The requested view could not be rendered
          </p>
        </div>

        <div className={cn(
          'p-6 rounded-xl border font-mono text-sm text-left',
          'bg-dark-900/80 border-accent-cyan/20 text-dark-300'
        )}>
          <div className="mb-4 flex items-center gap-2 text-accent-cyan">
            <Bug className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span className="font-medium">Error Details</span>
          </div>
          <pre className="whitespace-pre-wrap break-words text-xs leading-relaxed">
            {errorMessage}
          </pre>
          
          {isDev && errorStack && (
            <details className="mt-4">
              <summary className="cursor-pointer text-xs text-dark-400 hover:text-accent-cyan">
                Stack Trace (Development)
              </summary>
              <pre className="mt-2 whitespace-pre-wrap break-words text-[10px] text-dark-500">
                {errorStack}
              </pre>
            </details>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm',
              'transition-all duration-300',
              'bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan',
              'hover:bg-accent-cyan/30 hover:border-accent-cyan/50',
              'focus:outline-none focus:ring-2 focus:ring-accent-cyan/50'
            )}
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Return Home
          </Link>
          <Link
            to="/projects"
            className={cn(
              'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm',
              'transition-all duration-300',
              'bg-dark-800/50 border border-dark-600 text-dark-300',
              'hover:bg-dark-700 hover:border-dark-500',
              'focus:outline-none focus:ring-2 focus:ring-dark-500'
            )}
          >
            <FolderGit2 className="w-4 h-4" aria-hidden="true" />
            View Projects
          </Link>
        </div>

        <p className="mt-10 font-mono text-xs text-dark-500">
          If this persists, please{' '}
          <a
            href={`mailto:${personal.email}`}
            className="underline hover:text-accent-cyan transition-colors flex items-center gap-1"
          >
            <Mail className="w-3 h-3" aria-hidden="true" />
            report the issue
          </a>
          .
        </p>
      </div>
    </div>
  );
}