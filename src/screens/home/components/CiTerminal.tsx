"use client";

import { motion } from "motion/react";
import { t } from "@i18n";

const STEP = 0.55;

/** A fake CI run that plays line by line when scrolled into view. */
export default function CiTerminal() {
  const { title, lines, done } = t.approach.terminal;

  return (
    <div className="flex h-full flex-col font-mono text-[13px]">
      <div className="flex items-center gap-1.5 border-b border-border px-5 py-4">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-subtle">{title}</span>
      </div>

      <motion.div
        className="flex flex-1 flex-col gap-4 p-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {lines.map((line, i) => (
          <div key={line.cmd}>
            <motion.p
              variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { delay: i * STEP } } }}
              className="text-fg"
            >
              <span className="text-subtle">$ </span>
              {line.cmd}
            </motion.p>
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: i * STEP + 0.3 } } }}
              className="mt-1 text-accent-text"
            >
              {line.out}
            </motion.p>
          </div>
        ))}

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { delay: lines.length * STEP + 0.2, type: "spring", stiffness: 260, damping: 18 } },
          }}
          className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-accent-fg"
        >
          <span className="size-1.5 rounded-full bg-accent-fg" />
          {done}
        </motion.div>
        <span className="sr-only">{done}</span>
      </motion.div>
    </div>
  );
}
