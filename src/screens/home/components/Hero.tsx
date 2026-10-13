"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";
import {
  AnimatePresence, motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform,
} from "motion/react";
import { LuArrowDown, LuArrowRight } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
import { asset } from "@config";
import { EASE_OUT } from "@theme";
import { t } from "@i18n";
import { LINKS, SECTIONS } from "@constants";
import { Button, Counter, SplitText } from "@components";

const ROTATE_EVERY_MS = 2200;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  // Cursor-following glow
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(520px circle at ${glowX}px ${glowY}px, var(--glow), transparent 70%)`;

  // Content drifts up and fades as the hero scrolls away
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    const id = setInterval(() => setWordIndex((i) => (i + 1) % t.hero.rotating.length), ROTATE_EVERY_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id={SECTIONS.HERO}
      onMouseMove={handleMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-32 md:pt-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-radial" />
      <motion.div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block" style={{ background: glow }} />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]"
      />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-page relative flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="flex items-center gap-2.5 rounded-full border border-border bg-surface/70 py-1 pl-1 pr-4 text-sm backdrop-blur">
            <Image
              src={asset("/images/avatar-sm.webp")}
              alt=""
              width={28}
              height={28}
              className="size-7 rounded-full object-cover"
              priority
            />
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {t.hero.badge}
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{t.hero.location}</span>
        </motion.div>

        <h1 className="mt-8 max-w-5xl text-[clamp(2.75rem,8.5vw,7rem)] font-medium leading-[0.95] tracking-tighter">
          <SplitText text={t.hero.lineOne} immediate delay={0.1} />
          <br />
          <SplitText text={t.hero.lineTwoPrefix} immediate delay={0.3} />{" "}
          <span className="relative inline-flex overflow-hidden pb-[0.1em] align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={t.hero.rotating[wordIndex]}
                className="serif-accent inline-block pr-[0.1em] text-accent-text"
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: EASE_OUT }}
              >
                {t.hero.rotating[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE_OUT }}
          className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-lg text-lg leading-relaxed text-muted md:text-xl">{t.hero.description}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={`#${SECTIONS.WORK}`}>
              {t.hero.primaryCta}
              <LuArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href={LINKS.UPWORK} external variant="secondary">
              <SiUpwork className="size-4" />
              {t.hero.secondaryCta}
            </Button>
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-auto grid grid-cols-2 border-t border-border pt-8 pb-10 md:grid-cols-4 md:pb-14"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="py-3 md:border-l md:border-border md:pl-6 md:first:border-l-0 md:first:pl-0">
              <dd className="text-4xl font-medium tracking-tight md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="mt-1 text-sm text-subtle">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <motion.a
        href={`#${SECTIONS.WORK}`}
        aria-label={t.hero.scroll}
        className="absolute bottom-6 right-6 hidden size-12 place-items-center rounded-full border border-border text-subtle transition-colors hover:text-fg lg:grid"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <LuArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
