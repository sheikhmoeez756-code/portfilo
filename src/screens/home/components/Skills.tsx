"use client";

import { motion } from "motion/react";
import { EASE_OUT } from "@theme";
import { t } from "@i18n";
import { SKILL_GROUPS } from "@constants";
import { SectionHeading } from "@components";
import { pad } from "@utils";

type GroupKey = keyof typeof SKILL_GROUPS;

export default function Skills() {
  const groups = Object.keys(SKILL_GROUPS) as GroupKey[];

  return (
    <section className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeading index="03" label={t.skills.label} title={t.skills.title} titleAccent={t.skills.titleAccent} />

        <div className="border-b border-border">
          {groups.map((group, i) => (
            <motion.div
              key={group}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-5 border-t border-border py-8 md:grid-cols-[240px_1fr] md:gap-10"
            >
              <motion.h3
                variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT } } }}
                className="flex items-baseline gap-3 text-xl font-medium tracking-tight"
              >
                <span className="font-mono text-xs text-subtle">{pad(i + 1)}</span>
                {t.skills.groups[group]}
              </motion.h3>
              <ul className="flex flex-wrap gap-2">
                {SKILL_GROUPS[group].map((skill, j) => (
                  <motion.li
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0, transition: { delay: 0.1 + j * 0.035, duration: 0.5, ease: EASE_OUT } },
                    }}
                    className="cursor-default rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-fg"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
