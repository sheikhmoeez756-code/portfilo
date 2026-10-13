import { flushSync } from "react-dom";

/**
 * Switches theme with a circular reveal expanding from (x, y).
 * Falls back to an instant switch where View Transitions or motion aren't available.
 */
export function toggleThemeWithTransition(
  current: string | undefined,
  setTheme: (theme: string) => void,
  origin?: { x: number; y: number },
) {
  const next = current === "dark" ? "light" : "dark";
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!document.startViewTransition || reduce) {
    setTheme(next);
    return;
  }

  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  const transition = document.startViewTransition(() => {
    flushSync(() => setTheme(next));
  });

  transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
    );
  });
}
