import { useEffect, useMemo, useRef } from "@lynx-js/react";
import type { PerformanceCallback, PerformanceObserver } from "@lynx-js/types";

export function useLynxPerformanceObserver(eventTypes: string[], callback: PerformanceCallback): void {
  "background only";

  const previousArgsRef = useRef<[PerformanceObserver]>();

  useMemo(() => {
    if (previousArgsRef.current) {
      const [observer] = previousArgsRef.current;
      observer.disconnect();
    }
    const newObserver = lynx.performance.createObserver(callback);
    newObserver.observe(eventTypes);
    previousArgsRef.current = [newObserver];
  }, [eventTypes, callback]);

  useEffect(() => {
    return () => {
      if (previousArgsRef.current) {
        const [observer] = previousArgsRef.current;
        observer.disconnect();
      }
    };
  }, []);
}
