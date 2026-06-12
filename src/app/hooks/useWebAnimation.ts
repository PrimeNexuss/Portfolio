import { useEffect, useRef } from 'react';

interface AnimationOptions {
  keyframes: Keyframe[];
  options?: KeyframeAnimationOptions;
  trigger?: 'mount' | 'scroll' | 'hover';
  threshold?: number;
}

export const useWebAnimation = (options: AnimationOptions) => {
  const elementRef = useRef<HTMLElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state to hidden for scroll-triggered animations
    if (options.trigger === 'scroll' && !hasAnimatedRef.current) {
      element.style.opacity = '0';
    }

    const animate = () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
      animationRef.current = element.animate(options.keyframes, options.options);
    };

    if (options.trigger === 'mount') {
      animate();
    } else if (options.trigger === 'scroll') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current) {
              hasAnimatedRef.current = true;
              animate();
              observer.unobserve(element);
            }
          });
        },
        { threshold: options.threshold || 0.1 }
      );
      observer.observe(element);
      return () => observer.disconnect();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [options]);

  return { elementRef, animationRef };
};

// Predefined animation keyframes
export const fadeInUp = [
  { opacity: 0, transform: 'translateY(30px)' },
  { opacity: 1, transform: 'translateY(0)' }
];

export const fadeIn = [
  { opacity: 0 },
  { opacity: 1 }
];

export const slideInLeft = [
  { transform: 'translateX(-50px)', opacity: 0 },
  { transform: 'translateX(0)', opacity: 1 }
];

export const slideInRight = [
  { transform: 'translateX(50px)', opacity: 0 },
  { transform: 'translateX(0)', opacity: 1 }
];

export const scaleIn = [
  { transform: 'scale(0.9)', opacity: 0 },
  { transform: 'scale(1)', opacity: 1 }
];

export const staggerOptions = (delay: number) => ({
  duration: 800,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)' as const,
  delay,
  fill: 'forwards' as const
});
