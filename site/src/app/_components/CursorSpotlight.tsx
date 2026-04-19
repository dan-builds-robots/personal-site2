"use client";

import { useEffect } from "react";

export function CursorSpotlight() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const root = document.documentElement;
    let frame: number | null = null;
    let targetX = 0.5;
    let targetY = -5;

    const update = () => {
      root.style.setProperty("--mx", `${targetX * 100}%`);
      root.style.setProperty("--my", `${targetY * 100}%`);
      frame = null;
    };

    const schedule = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
      schedule();
    };

    const onLeave = () => {
      targetY = -5;
      schedule();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
