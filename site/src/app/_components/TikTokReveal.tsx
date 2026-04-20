"use client";

import { useEffect, useRef, useState } from "react";

export function TikTokReveal({
  videoId,
  label = "watch the tiktok",
  className = "",
}: {
  videoId: string;
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [everOpened, setEverOpened] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open) setEverOpened(true);
  }, [open]);

  const show = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpen(true);
  };

  const hide = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className={`pointer-events-auto relative z-10 ${className}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group/tt inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted transition-colors duration-200 hover:text-accent"
      >
        <span
          aria-hidden
          className={`inline-block transition-transform duration-300 ${
            open ? "rotate-90 text-accent" : ""
          }`}
        >
          ▶
        </span>
        <span className="underline-offset-[4px] group-hover/tt:underline">
          {open ? "hide" : label}
        </span>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out ${
          open
            ? "mt-5 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mx-auto w-full max-w-[460px] overflow-hidden rounded-xl border border-rule bg-black">
            {everOpened && (
              <iframe
                src={`https://www.tiktok.com/embed/v2/${videoId}?lang=en-US`}
                title="TikTok video"
                width="100%"
                height={740}
                allow="encrypted-media;"
                allowFullScreen
                loading="lazy"
                className="aspect-[9/16] w-full border-0"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
