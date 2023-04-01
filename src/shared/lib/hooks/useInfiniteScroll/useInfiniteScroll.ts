import { MutableRefObject, useEffect } from 'react';

export interface UseInfiniteScrollProps {
  wrapperRef: MutableRefObject<HTMLElement>;
  triggerRef: MutableRefObject<HTMLElement>;
  callback?: () => void;
}

export function useInfiniteScroll(args: UseInfiniteScrollProps) {
  const { wrapperRef, triggerRef, callback } = args;

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 0.5,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(triggerElement);

      return () => {
        if (observer && triggerElement) {
          observer.unobserve(triggerElement);
        }
      };
    }

    return undefined;
  }, [callback, triggerRef, wrapperRef]);
}
