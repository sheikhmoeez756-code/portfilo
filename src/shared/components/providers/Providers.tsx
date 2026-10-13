"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "motion/react";
import { ReactLenis } from "lenis/react";
import { DEFAULT_THEME, THEME_ATTRIBUTE } from "@theme";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute={THEME_ATTRIBUTE} defaultTheme={DEFAULT_THEME} enableSystem={false} disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <ReactLenis
          root
          options={{
            lerp: 0.1,
            smoothWheel: !prefersReducedMotion(),
            anchors: { offset: -88 },
          }}
        >
          {children}
        </ReactLenis>
      </MotionConfig>
    </ThemeProvider>
  );
}
