import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface TerminalLine {
  type: 'output' | 'input' | 'error' | 'success' | 'prompt';
  content: string;
  delay?: number;
}

export interface TerminalWindowProps {
  lines: TerminalLine[];
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
}

export function TerminalWindow({ lines, title = 'terminal', className, autoPlay = true, loop = false }: TerminalWindowProps) {
  const [displayedLines, setDisplayedLines] = useState<TerminalLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!autoPlay || lines.length === 0) {
      setDisplayedLines(lines);
      setIsComplete(true);
      return;
    }

    const typeLine = async (line: TerminalLine, index: number) => {
      const delay = line.delay || (line.type === 'input' ? 100 : 50);
      await new Promise(resolve => setTimeout(resolve, delay));
      setDisplayedLines(prev => [...prev, line]);
      setCurrentLineIndex(index + 1);
    };

    const playLines = async () => {
      for (let i = 0; i < lines.length; i++) {
        await typeLine(lines[i], i);
      }
      setIsComplete(true);
      
      if (loop) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setIsComplete(false);
        playLines();
      }
    };

    playLines();
  }, [lines, autoPlay, loop]);

  return (
    <div className={cn('terminal-window overflow-hidden', className)}>
      <div className="terminal-header">
        <div className="flex gap-1.5">
          <span className="terminal-dot bg-red-500/60" aria-hidden="true" />
          <span className="terminal-dot bg-amber-500/60" aria-hidden="true" />
          <span className="terminal-dot bg-green-500/60" aria-hidden="true" />
        </div>
        <span className="ml-3 font-mono text-xs text-dark-500">{title}</span>
      </div>
      <div className="terminal-body font-mono text-sm leading-relaxed">
        <div className="space-y-1" role="log" aria-live="polite">
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className={cn(
                'flex gap-2',
                line.type === 'input' && 'text-accent-cyan',
                line.type === 'error' && 'text-red-400',
                line.type === 'success' && 'text-green-400',
                line.type === 'output' && 'text-dark-300',
                line.type === 'prompt' && 'text-accent-green'
              )}
            >
              {line.type === 'prompt' && <span className="text-accent-green">$</span>}
              {line.type === 'input' && <span className="text-accent-cyan">{'>'}</span>}
              <span>{line.content}</span>
              {line.type === 'input' && index === currentLineIndex - 1 && !isComplete && (
                <span className="animate-blink inline-block w-1 h-4 bg-accent-cyan ml-1" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}