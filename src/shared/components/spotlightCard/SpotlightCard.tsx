"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { cn } from "@utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

/** Card with a soft glow and lit border that follow the cursor. Uses CSS vars, so no re-renders. */
export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border border-border bg-surface shadow-card",
        "transition-colors duration-500 hover:border-border-strong",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x) var(--y), var(--glow), transparent 45%)" }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
