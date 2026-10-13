export type ProjectId = "leafora" | "kara" | "weather";

export interface Project {
  id: ProjectId;
  image: string;
  width: number;
  height: number;
  tags: string[];
  live: string;
  source: string;
  accent: string;
  year: string;
}

export const PROJECTS: Project[] = [
  {
    id: "leafora",
    image: "/images/leafora.jpg",
    width: 1000,
    height: 672,
    tags: ["Next.js 15", "React 19", "TypeScript", "Tailwind 4", "Vitest", "Playwright"],
    live: "https://plants-eosin.vercel.app",
    source: "https://github.com/sheikhmoeez756-code/leafora",
    accent: "#4ade80",
    year: "2026",
  },
  {
    id: "kara",
    image: "/images/kara.webp",
    width: 960,
    height: 540,
    tags: ["Next.js", "TypeScript", "Three.js", "R3F", "Framer Motion", "Tailwind"],
    live: "https://kara-pi.vercel.app",
    source: "https://github.com/sheikhmoeez756-code/kara",
    accent: "#60a5fa",
    year: "2026",
  },
  {
    id: "weather",
    image: "/images/weather.webp",
    width: 960,
    height: 540,
    tags: ["React", "TypeScript", "Tailwind CSS", "PWA"],
    live: "https://sheikhmoeez756-code.github.io/weather-app/",
    source: "https://github.com/sheikhmoeez756-code/weather-app",
    accent: "#fbbf24",
    year: "2025",
  },
];
