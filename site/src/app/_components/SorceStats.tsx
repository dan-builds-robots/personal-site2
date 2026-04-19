"use client";

import { useEffect, useRef, useState } from "react";

type Template = "approxM" | "Mplus" | "Kplus";

const stats: { target: number; template: Template; label: string }[] = [
  { target: 1_000_000, template: "approxM", label: "users" },
  { target: 1_000_000, template: "Mplus", label: "applications" },
  { target: 1000, template: "Kplus", label: "hires" },
];

function format(value: number, template: Template): string {
  if (template === "approxM") {
    if (value < 1_000_000) return `~${Math.round(value / 1000)}K`;
    const m = (value / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `~${m}M`;
  }
  if (template === "Mplus") {
    if (value < 1_000_000) return `${Math.round(value / 1000)}K`;
    const m = (value / 1_000_000).toFixed(1).replace(/\.0$/, "");
    return `${m}M+`;
  }
  if (value < 1000) return `${value}`;
  return `${Math.round(value / 1000)}K+`;
}

function useCountUp(target: number, start: boolean, duration = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number | null = null;
    let startTime: number | null = null;
    const step = (t: number) => {
      if (startTime === null) startTime = t;
      const progress = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [start, target, duration]);

  return value;
}

export function SorceStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const values = [
    useCountUp(stats[0].target, start),
    useCountUp(stats[1].target, start),
    useCountUp(stats[2].target, start),
  ];

  return (
    <div
      ref={ref}
      className="mt-7 grid grid-cols-3 gap-4 border-t border-rule pt-6"
    >
      {stats.map((s, i) => (
        <div key={s.label} className="group">
          <div className="font-mono text-2xl font-medium tracking-[-0.02em] tabular-nums transition-colors duration-200 group-hover:text-accent sm:text-3xl">
            {format(values[i], s.template)}
          </div>
          <div className="mt-1 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted transition-colors duration-200 group-hover:text-foreground/80">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
