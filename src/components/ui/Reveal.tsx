"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  as?: "div" | "li" | "section" | "article";
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Fades content up once when it scrolls into view.
 * Only elements that start below the fold are hidden, so nothing visible ever flashes
 * and content stays visible without JS. Styling lives in globals.css ([data-reveal]).
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight) return;

    el.classList.add("reveal-pending");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("reveal-pending");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
