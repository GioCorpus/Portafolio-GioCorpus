import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

interface UseIntersectionObserverReturn {
  ref: React.RefObject<HTMLElement | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

/**
 * Custom hook for Intersection Observer API
 * Provides scroll-triggered animations and lazy loading capabilities
 */
export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
    onIntersect,
  } = options;

  const ref = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggeredRef = useRef(false);

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || (triggerOnce && hasTriggeredRef.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting;
        setIsIntersecting(intersecting);
        setEntry(entry);

        if (intersecting) {
          hasTriggeredRef.current = true;
          onIntersect?.(entry);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          hasTriggeredRef.current = false;
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    observerRef.current = observer;

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [threshold, rootMargin, triggerOnce, onIntersect]);

  return { ref: { current: ref.current, set: setRef } as React.RefObject<HTMLElement | null>, isIntersecting, entry };
}

/**
 * Hook for staggered animations - triggers with delay based on index
 */
export function useStaggeredIntersection(
  index: number,
  baseDelay: number = 100,
  options: UseIntersectionObserverOptions = {}
) {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const delay = index * baseDelay;

  const { ref, isIntersecting } = useIntersectionObserver({
    ...options,
    onIntersect: (entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShouldAnimate(true), delay);
      }
      options.onIntersect?.(entry);
    },
  });

  return { ref, shouldAnimate, isIntersecting };
}

/**
 * Hook for viewport-based progress (0-1) for parallax or progress animations
 */
export function useScrollProgress(options: UseIntersectionObserverOptions = {}) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        
        const rect = entry.boundingClientRect;
        const viewportHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        const updateProgress = () => {
          const currentRect = element.getBoundingClientRect();
          const visibleTop = Math.max(0, -currentRect.top);
          const visibleBottom = Math.min(elementHeight, viewportHeight - currentRect.top);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const newProgress = visibleHeight / elementHeight;
          setProgress(Math.max(0, Math.min(1, newProgress)));
        };

        updateProgress();
        
        const handleScroll = () => updateProgress();
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', handleScroll);
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100), ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.rootMargin]);

  return { ref, progress };
}