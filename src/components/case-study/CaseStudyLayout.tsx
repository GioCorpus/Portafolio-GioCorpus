import { cn } from '../../lib/utils';
import { ReactNode } from 'react';

interface CaseStudyLayoutProps {
  children: ReactNode;
}

export function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return (
    <article className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12')}>
      {children}
    </article>
  );
}

export default CaseStudyLayout;