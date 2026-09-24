import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export function Badge({ className, variant = 'default', size = 'md', children, ...props }: BadgeProps) {
  const variants = {
    default: 'bg-dark-800/50 border border-dark-600 text-dark-300',
    success: 'bg-green-500/20 border border-green-500/30 text-green-400',
    warning: 'bg-amber-500/20 border border-amber-500/30 text-amber-400',
    error: 'bg-red-500/20 border border-red-500/30 text-red-400',
    info: 'bg-cyan-500/20 border border-cyan-500/30 text-cyan-400',
    outline: 'bg-transparent border border-accent-cyan/30 text-accent-cyan',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px]',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-mono tracking-wider rounded-full transition-all duration-300',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}