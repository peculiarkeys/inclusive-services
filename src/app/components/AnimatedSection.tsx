import { useEffect, useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if browser supports scroll-driven animations
    const supportsNative = CSS.supports('(animation-timeline: view()) and (animation-range: entry)');
    
    if (!supportsNative && ref.current) {
      const el = ref.current;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  const animationClass = `animated-section-native animated-section-fallback animated-section-${direction}`;

  return (
    <div
      ref={ref}
      className={`${animationClass} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s`, animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
