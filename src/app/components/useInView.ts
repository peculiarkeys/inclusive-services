import { useState, useEffect, RefObject } from "react";

export function useInView(
  ref: RefObject<HTMLElement | null>,
  options?: { threshold?: number }
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, options?.threshold]);

  return isInView;
}
