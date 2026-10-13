import type { IconType } from "react-icons";
import {
  SiExpress, SiFigma, SiFramer, SiGithubactions, SiMongodb, SiNextdotjs, SiNodedotjs,
  SiReact, SiSupabase, SiTailwindcss, SiThreedotjs, SiTypescript, SiVercel, SiVitest,
} from "react-icons/si";
import type { MARQUEE_TECH } from "@constants";

type TechId = (typeof MARQUEE_TECH)[number];

export const TECH: Record<TechId, { icon: IconType; label: string }> = {
  nextjs: { icon: SiNextdotjs, label: "Next.js" },
  react: { icon: SiReact, label: "React" },
  typescript: { icon: SiTypescript, label: "TypeScript" },
  tailwind: { icon: SiTailwindcss, label: "Tailwind CSS" },
  framer: { icon: SiFramer, label: "Framer Motion" },
  threejs: { icon: SiThreedotjs, label: "Three.js" },
  node: { icon: SiNodedotjs, label: "Node.js" },
  express: { icon: SiExpress, label: "Express" },
  mongodb: { icon: SiMongodb, label: "MongoDB" },
  supabase: { icon: SiSupabase, label: "Supabase" },
  vitest: { icon: SiVitest, label: "Vitest" },
  githubactions: { icon: SiGithubactions, label: "GitHub Actions" },
  vercel: { icon: SiVercel, label: "Vercel" },
  figma: { icon: SiFigma, label: "Figma" },
};

export default function TechIcon({ id }: { id: TechId }) {
  const { icon: Icon, label } = TECH[id];
  return (
    <span className="mx-6 flex items-center gap-3 text-subtle transition-colors duration-300 hover:text-fg md:mx-9">
      <Icon className="size-6" aria-hidden />
      <span className="text-lg font-medium tracking-tight whitespace-nowrap">{label}</span>
    </span>
  );
}
