"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { LuArrowUpRight, LuCommand, LuMenu, LuX } from "react-icons/lu";
import { EASE_OUT } from "@theme";
import { t } from "@i18n";
import { NAV_ITEMS, SECTIONS } from "@constants";
import { useActiveSection } from "@hooks";
import { openCommandPalette } from "@services";
import { cn } from "@utils";
import ThemeToggle from "../themeToggle";
import SocialLinks from "../socialLinks";

// The hero and contact are observed too, so the pill clears when neither nav item is on screen.
const SECTION_IDS = [SECTIONS.HERO, ...NAV_ITEMS.map((item) => item.id), SECTIONS.CONTACT];

export default function Navbar() {
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const active = useActiveSection(SECTION_IDS);

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  const handleScroll = (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240 && !menuOpen);
    setScrolled(latest > 20);
  };
  useMotionValueEvent(scrollY, "change", handleScroll);

  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
  }, [menuOpen, lenis]);

  const pillTarget = hovered ?? active;

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 pt-3 md:pt-4"
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.4, ease: EASE_OUT }}
      >
        <div className="container-page">
          <nav
            aria-label="Primary"
            className={cn(
              "flex h-14 items-center justify-between rounded-full border pl-5 pr-2 transition-all duration-500",
              scrolled || menuOpen ? "border-border bg-bg/70 shadow-card backdrop-blur-xl" : "border-transparent",
            )}
          >
            <a href={`#${SECTIONS.HERO}`} className="flex items-center gap-1.5 text-lg font-semibold tracking-tight">
              {t.nav.logo}
              <span className="size-1.5 rounded-full bg-accent" />
            </a>

            <ul className="hidden items-center md:flex" onMouseLeave={() => setHovered(null)}>
              {NAV_ITEMS.map(({ id, key }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onMouseEnter={() => setHovered(id)}
                    className={cn(
                      "relative block rounded-full px-4 py-2 text-sm transition-colors",
                      active === id ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {pillTarget === id && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-surface-2"
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    {t.nav[key]}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label={t.palette.open}
                className="hidden h-10 items-center gap-2 rounded-full px-3 text-xs text-subtle transition-colors hover:bg-surface-2 hover:text-fg lg:flex"
              >
                <span>{t.nav.searchHint}</span>
                <kbd className="flex items-center gap-0.5 rounded-md border border-border px-1.5 py-0.5 font-mono text-[10px]">
                  <LuCommand className="size-3" />K
                </kbd>
              </button>
              <ThemeToggle />
              <a
                href={`#${SECTIONS.CONTACT}`}
                className="ml-1 hidden h-10 items-center gap-1.5 rounded-full bg-fg px-4 text-sm font-medium text-bg transition-transform hover:scale-[1.03] sm:flex"
              >
                {t.nav.hire}
                <LuArrowUpRight className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? t.nav.close : t.nav.menu}
                aria-expanded={menuOpen}
                className="grid size-10 place-items-center rounded-full text-fg hover:bg-surface-2 md:hidden"
              >
                {menuOpen ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-10 pt-28 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <ul className="flex flex-col gap-2">
              {[...NAV_ITEMS, { id: SECTIONS.CONTACT, key: "contact" as const }].map(({ id, key }, i) => (
                <motion.li
                  key={id}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6, ease: EASE_OUT }}
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-5xl font-medium tracking-tight"
                  >
                    <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                    {t.nav[key]}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <SocialLinks />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
