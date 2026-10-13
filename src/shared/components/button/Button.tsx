"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { SPRING_SOFT } from "@theme";
import { cn } from "@utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  magnetic?: boolean;
  onClick?: () => void;
}

const VARIANTS: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg hover:shadow-[0_0_0_6px_var(--glow)]",
  secondary: "border border-border-strong bg-surface/60 text-fg backdrop-blur hover:bg-surface-2",
  ghost: "text-muted hover:text-fg",
};

/** Pill button that drifts toward the cursor (on fine pointers) and springs back. */
export default function Button({
  children,
  href,
  external,
  variant = "primary",
  className,
  type = "button",
  disabled,
  magnetic = true,
  onClick,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useSpring(useMotionValue(0), SPRING_SOFT);
  const y = useSpring(useMotionValue(0), SPRING_SOFT);

  const handleMove = (e: MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium",
    "transition-[background-color,box-shadow,color] duration-300 disabled:pointer-events-none disabled:opacity-60",
    VARIANTS[variant],
    className,
  );
  const shared = { style: { x, y }, onMouseMove: handleMove, onMouseLeave: handleLeave, whileTap: { scale: 0.97 }, className: classes };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        onClick={onClick}
        {...shared}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button ref={ref as React.Ref<HTMLButtonElement>} type={type} disabled={disabled} onClick={onClick} {...shared}>
      {children}
    </motion.button>
  );
}
