"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { asset } from "@config";
import { t } from "@i18n";
import { SECTIONS } from "@constants";
import { useLocalTime } from "@hooks";
import { Reveal, SectionHeading } from "@components";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const time = useLocalTime("Asia/Karachi");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const facts = Object.entries(t.about.facts).map(([key, fact]) => ({
    key,
    label: fact.label,
    value: key === "timezone" ? (time ? `${time} PKT` : "PKT · UTC+5") : fact.value,
  }));

  return (
    <section id={SECTIONS.ABOUT} className="py-28 md:py-40">
      <div className="container-page grid gap-14 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal>
          <div ref={ref} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-surface-2">
            <motion.div style={{ y: imageY }} className="absolute -inset-y-[10%] inset-x-0">
              <Image
                src={asset("/images/portrait.webp")}
                alt="Portrait of Abdul Moeez Hassan"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-2.5 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping-slow rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {t.hero.badge}
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading index="04" label={t.about.label} title={t.about.title} titleAccent={t.about.titleAccent} className="mb-10 md:mb-12" />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            {t.about.paragraphs.map((paragraph, i) => (
              <Reveal key={i} delay={0.1 * i}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              {facts.map((fact) => (
                <div key={fact.key} className="bg-bg p-5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{fact.label}</dt>
                  <dd className="mt-1.5 font-medium">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
