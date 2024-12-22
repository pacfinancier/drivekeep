"use client";

import { useEffect, useRef } from 'react';
import { createSafeResizeObserver } from '@/lib/utils/resize-observer';

export function useResizeObserver<T extends Element>(
  callback: ResizeObserverCallback
) {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = createSafeResizeObserver(callback);
    if (!observer) return;

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return elementRef;
}