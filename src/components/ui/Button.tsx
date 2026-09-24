import { forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-mono text-sm font-medium tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-950 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-gradient-to-r from-accent-cyan to-accent-green text-dark-950 rounded-lg overflow-hidden relative focus:ring-accent-cyan/50',
      secondary: 'bg-transparent border border-accent-cyan/30 text-accent-cyan rounded-lg overflow-hidden relative focus:ring-accent-cyan/50',
      ghost: 'text-accent-cyan hover:bg-accent-cyan/10 rounded-lg focus:ring-accent-cyan/50',
      outline: 'border border-dark-600 text-dark-300 hover:border-accent-cyan/50 hover:text-accent-cyan rounded-lg focus:ring-accent-cyan/50',
    };

    const sizes = {
      sm: 'px-4 py-2',
      md: 'px-6 py-3',
      lg: 'px-8 py-4',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && !loading && (
          <span className="absolute inset-0 bg-gradient-to-r from-accent-green to-accent-cyan opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        )}
        {variant === 'secondary' && !loading && (
          <span className="absolute inset-0 bg-accent-cyan/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';