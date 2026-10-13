import type { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa6";
import { LuArrowUpRight, LuFlaskConical, LuRefreshCw, LuShieldCheck } from "react-icons/lu";
import { t } from "@i18n";
import { LINKS, SECTIONS } from "@constants";
import { Reveal, SectionHeading, SpotlightCard } from "@components";
import CiTerminal from "./CiTerminal";

type PracticeKey = keyof typeof t.approach.cards;

const PRACTICES: { key: PracticeKey; icon: IconType; href: string }[] = [
  { key: "tested", icon: LuFlaskConical, href: LINKS.LEAFORA_E2E },
  { key: "ci", icon: LuRefreshCw, href: LINKS.LEAFORA_CI },
  { key: "typed", icon: LuShieldCheck, href: LINKS.LEAFORA_SOURCE },
  { key: "open", icon: FaGithub, href: LINKS.GITHUB },
];

export default function Approach() {
  return (
    <section id={SECTIONS.APPROACH} className="py-28 md:py-40">
      <div className="container-page">
        <SectionHeading
          index="02"
          label={t.approach.label}
          title={t.approach.title}
          titleAccent={t.approach.titleAccent}
          subtitle={t.approach.subtitle}
        />

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="md:row-span-2">
            <SpotlightCard className="h-full min-h-[380px] bg-surface-2/60">
              <CiTerminal />
            </SpotlightCard>
          </Reveal>

          {PRACTICES.map(({ key, icon: Icon, href }, i) => {
            const card = t.approach.cards[key];
            return (
              <Reveal key={key} delay={0.08 * i}>
                <SpotlightCard className="h-full">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col p-7 md:p-8">
                    <div className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-accent-text">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <LuArrowUpRight className="size-5 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                    </div>
                    <h3 className="mt-6 text-xl font-medium tracking-tight">{card.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{card.body}</p>
                    <span className="mt-6 font-mono text-xs uppercase tracking-widest text-subtle transition-colors group-hover:text-accent-text">
                      {card.cta} →
                    </span>
                  </a>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
