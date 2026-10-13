"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { LuBadgeCheck, LuGraduationCap } from "react-icons/lu";
import { t } from "@i18n";
import { SECTIONS } from "@constants";
import { Reveal, SectionHeading, SpotlightCard } from "@components";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id={SECTIONS.EXPERIENCE} className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeading index="05" label={t.experience.label} title={t.experience.title} titleAccent={t.experience.titleAccent} />

        <div ref={timelineRef} className="relative pl-8 md:pl-12">
          <div aria-hidden className="absolute left-[7px] top-2 bottom-2 w-px bg-border md:left-[11px]" />
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-accent md:left-[11px]"
          />

          {t.experience.jobs.map((job) => (
            <Reveal key={job.role} className="relative">
              <span className="absolute -left-8 top-1.5 grid size-[15px] place-items-center rounded-full border border-accent bg-bg md:-left-12 md:size-[23px]">
                <span className="size-1.5 rounded-full bg-accent md:size-2" />
              </span>
              <div className="grid gap-4 md:grid-cols-[220px_1fr] md:gap-10">
                <p className="font-mono text-sm text-subtle">{job.period}</p>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight md:text-3xl">{job.role}</h3>
                  <p className="mt-1 text-accent-text">{job.company}</p>
                  <p className="mt-4 text-lg text-muted">{job.intro}</p>
                  <ul className="mt-6 space-y-3">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3 text-muted">
                        <span className="mt-2.5 h-px w-4 shrink-0 bg-border-strong" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {t.experience.education.map((item, i) => (
              <Reveal key={item.title} delay={0.1 * i}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-7">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-accent-text">
                        <LuGraduationCap className="size-5" aria-hidden />
                      </span>
                      <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted">
                        <LuBadgeCheck className="size-3.5 text-accent-text" aria-hidden />
                        {t.experience.completed}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-medium tracking-tight">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.place}</p>
                    <p className="mt-auto pt-4 font-mono text-xs text-subtle">{item.period}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
