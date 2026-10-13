"use client";

import Image from "next/image";
import { motion, useTransform, type MotionValue } from "motion/react";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuCheck } from "react-icons/lu";
import { asset } from "@config";
import { t } from "@i18n";
import type { Project } from "@constants";
import { useMediaQuery } from "@hooks";
import { pad } from "@utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

/** One card in the sticky stack. Shrinks slightly as the cards after it slide over it. */
export default function ProjectCard({ project, index, total, progress }: ProjectCardProps) {
  const copy = t.work.projects[project.id];
  // Cards only stack (sticky) from md up; below that they scroll normally and shouldn't shrink.
  const stacked = useMediaQuery("(min-width: 768px)");
  const targetScale = stacked ? 1 - (total - index - 1) * 0.04 : 1;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="md:sticky md:h-[calc(100vh-8rem)]" style={{ top: `calc(7rem + ${index * 1.75}rem)` }}>
      <motion.article
        style={{ scale }}
        className="origin-top overflow-hidden rounded-[2rem] border border-border bg-surface shadow-card"
      >
        <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.25fr] md:gap-10 md:p-10">
          <div className="flex flex-col">
            <div className="flex items-center justify-between font-mono text-xs text-subtle">
              <span>
                <span className="text-accent-text">{pad(index + 1)}</span> / {pad(total)}
              </span>
              <span>{copy.kind} · {project.year}</span>
            </div>

            <h3 className="mt-6 text-4xl font-medium tracking-tight md:text-5xl">{copy.title}</h3>
            <p className="mt-4 leading-relaxed text-muted">{copy.body}</p>

            <ul className="mt-6 space-y-2.5">
              {copy.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-sm">
                  <LuCheck className="mt-0.5 size-4 shrink-0 text-accent-text" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted">
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 md:mt-auto md:pt-8">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg"
              >
                {t.work.live}
                <LuArrowUpRight className="size-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </a>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong px-5 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                <FaGithub className="size-4" />
                {t.work.source}
              </a>
            </div>
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${copy.title} — ${t.work.live}`}
            className="group/img relative block self-center overflow-hidden rounded-2xl border border-border bg-surface-2"
          >
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="size-2.5 rounded-full bg-border-strong" />
              <span className="ml-3 truncate font-mono text-[11px] text-subtle">{project.live.replace(/^https?:\/\//, "")}</span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={asset(project.image)}
                alt={copy.imageAlt}
                width={project.width}
                height={project.height}
                className="size-full object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/img:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/img:opacity-100"
                style={{ background: `linear-gradient(to top, ${project.accent}33, transparent 60%)` }}
              />
            </div>
          </a>
        </div>
      </motion.article>
    </div>
  );
}
