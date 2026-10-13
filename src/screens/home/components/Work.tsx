"use client";

import { useRef } from "react";
import { useScroll } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { t } from "@i18n";
import { LINKS, PROJECTS, SECTIONS } from "@constants";
import { Reveal, SectionHeading } from "@components";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const stackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stackRef, offset: ["start start", "end end"] });

  return (
    <section id={SECTIONS.WORK} className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeading
          index="01"
          label={t.work.label}
          title={t.work.title}
          titleAccent={t.work.titleAccent}
          subtitle={t.work.subtitle}
        />

        <div ref={stackRef} className="flex flex-col gap-6 md:gap-0">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} total={PROJECTS.length} progress={scrollYProgress} />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <a
            href={LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <FaGithub className="size-4" />
            {t.work.more}
            <LuArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
