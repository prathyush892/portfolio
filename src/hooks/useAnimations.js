import { useEffect, useRef, useState, useCallback } from 'react';

// ── useReveal ─────────────────────────────────────────────
// Adds 'visible' class when element enters viewport
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

// ── useRevealList ─────────────────────────────────────────
// Staggered reveal for a list of items
export function useRevealList(count, threshold = 0.1) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll('[data-reveal-item]');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 90);
          });
          observer.unobserve(container);
        }
      },
      { threshold }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, [count, threshold]);

  return containerRef;
}

// ── useCounter ────────────────────────────────────────────
// Animates a number from 0 to target when element is visible
export function useCounter(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

// ── useSkillBars ──────────────────────────────────────────
// Triggers skill bar fill animation on scroll
export function useSkillBars() {
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const bars = container.querySelectorAll('[data-width]');
          bars.forEach((bar) => {
            bar.style.width = bar.dataset.width + '%';
          });
          observer.unobserve(container);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// ── useParallax ───────────────────────────────────────────
// Returns current scrollY for parallax calculations
export function useParallax() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handle = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return scrollY;
}

// ── useCursor ─────────────────────────────────────────────
// Custom cursor position & hover state
export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;
      setRing({ x: ringPos.current.x, y: ringPos.current.y });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const onHoverEnter = useCallback(() => setHovered(true), []);
  const onHoverLeave = useCallback(() => setHovered(false), []);

  return { pos, ring, hovered, onHoverEnter, onHoverLeave };
}

// ── useNavScroll ──────────────────────────────────────────
// Returns true when page has scrolled past threshold
export function useNavScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > threshold);
    window.addEventListener('scroll', handle, { passive: true });
    return () => window.removeEventListener('scroll', handle);
  }, [threshold]);

  return scrolled;
}
