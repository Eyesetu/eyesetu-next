"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = { value: number; prefix?: string; suffix?: string; duration?: number };

/**
 * Counts up to `value` once it scrolls into view.
 * The server renders the final number (good for SEO / no JS); only counters that start
 * below the fold are reset to 0 and animated, and reduced-motion users never see the animation.
 */
export function CountUp({ value, prefix = "", suffix = "", duration = 1400 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setN(0);
    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}
