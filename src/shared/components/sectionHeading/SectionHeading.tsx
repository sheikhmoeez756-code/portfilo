import { cn } from "@utils";
import Reveal from "../reveal";
import SplitText from "../splitText";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  label,
  title,
  titleAccent,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 md:mb-20", align === "center" && "mx-auto text-center", className)}>
      <Reveal>
        <p className={cn("mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-subtle", align === "center" && "justify-center")}>
          <span className="text-accent-text">{index}</span>
          <span className="h-px w-8 bg-border-strong" />
          {label}
        </p>
      </Reveal>
      <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
        <SplitText text={title} />{" "}
        {titleAccent && <SplitText text={titleAccent} className="serif-accent text-accent-text" delay={0.15} />}
      </h2>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className={cn("mt-5 max-w-xl text-lg text-muted", align === "center" && "mx-auto")}>{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
