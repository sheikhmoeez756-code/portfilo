export const SECTIONS = {
  HERO: "top",
  WORK: "work",
  APPROACH: "approach",
  ABOUT: "about",
  EXPERIENCE: "experience",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export const NAV_ITEMS = [
  { id: SECTIONS.WORK, key: "work" },
  { id: SECTIONS.APPROACH, key: "approach" },
  { id: SECTIONS.ABOUT, key: "about" },
  { id: SECTIONS.EXPERIENCE, key: "experience" },
] as const;
