"use client";

import type { MouseEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";
import { t } from "@i18n";
import { useMounted } from "@hooks";
import { toggleThemeWithTransition } from "@services";
import { cn } from "@utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = resolvedTheme === "dark";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    toggleThemeWithTransition(resolvedTheme, setTheme, { x: e.clientX, y: e.clientY });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t.theme.toggle}
      className={cn(
        "relative grid size-10 place-items-center overflow-hidden rounded-full text-muted transition-colors hover:bg-surface-2 hover:text-fg",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.25 }}
          >
            {isDark ? <LuMoon className="size-[18px]" /> : <LuSun className="size-[18px]" />}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
