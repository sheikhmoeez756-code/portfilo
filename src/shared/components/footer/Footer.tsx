"use client";

import { useLenis } from "lenis/react";
import { LuArrowUp, LuArrowUpRight } from "react-icons/lu";
import { t } from "@i18n";
import { LINKS } from "@constants";
import { useLocalTime } from "@hooks";
import Reveal from "../reveal";
import SocialLinks from "../socialLinks";

export default function Footer() {
  const lenis = useLenis();
  const time = useLocalTime("Asia/Karachi");

  return (
    <footer className="relative overflow-hidden border-t border-border pt-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div className="container-page relative">
        <Reveal>
          <a href={LINKS.EMAIL} className="group block">
            <span className="flex items-end justify-between gap-6">
              <span className="text-[clamp(3rem,10vw,8.5rem)] font-medium leading-[0.9] tracking-tighter">
                {t.footer.ctaLead} <span className="serif-accent text-accent-text">{t.footer.ctaAccent}</span>
              </span>
              <span className="mb-3 hidden size-20 shrink-0 place-items-center rounded-full bg-accent text-accent-fg transition-transform duration-500 group-hover:rotate-45 md:grid">
                <LuArrowUpRight className="size-8" />
              </span>
            </span>
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-8 border-t border-border py-8 md:flex-row md:items-center md:justify-between">
          <SocialLinks />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-subtle">
            <span suppressHydrationWarning>© {new Date().getFullYear()} {t.footer.owner}</span>
            {time && <span>{t.footer.city} · {time} PKT</span>}
            <button
              type="button"
              onClick={() => lenis?.scrollTo(0)}
              className="flex items-center gap-1.5 uppercase tracking-widest transition-colors hover:text-fg"
            >
              {t.footer.backToTop}
              <LuArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
        <p className="pb-8 font-mono text-[11px] text-subtle">{t.footer.built}</p>
      </div>
    </footer>
  );
}
