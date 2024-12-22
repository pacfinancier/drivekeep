"use client";

export function createSafeResizeObserver(callback: ResizeObserverCallback): ResizeObserver | null {
  if (typeof window === 'undefined') return null;

  try {
    const observer = new ResizeObserver((entries, obs) => {
      // Wrap in requestAnimationFrame to avoid loop limit exceeded error
      window.requestAnimationFrame(() => {
        callback(entries, obs);
      });
    });

    return observer;
  } catch (e) {
    console.warn('ResizeObserver not supported');
    return null;
  }
}