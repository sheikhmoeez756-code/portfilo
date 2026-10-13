import type { ReactNode } from "react";
import { cn } from "@utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
}

/** Infinite horizontal scroll. Content is rendered twice and shifted -50% for a seamless loop. */
export default function Marquee({ children, className }: MarqueeProps) {
  return (
    <div className={cn("group flex overflow-hidden mask-fade-x", className)}>
      <div className="flex w-max shrink-0 animate-marquee items-center group-hover:[animation-play-state:paused]">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
