"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Command } from "cmdk";
import { useLenis } from "lenis/react";
import { useTheme } from "next-themes";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuArrowRight, LuCopy, LuExternalLink, LuSunMoon } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
import { t } from "@i18n";
import { CONTACT_EMAIL, LINKS, NAV_ITEMS, PROJECTS, SECTIONS } from "@constants";
import { PALETTE_OPEN_EVENT, toggleThemeWithTransition } from "@services";

const GROUP_HEADING =
  "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pb-1.5 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-subtle";

function Item({ children, icon, onSelect }: { children: ReactNode; icon: ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted"
    >
      <span className="grid size-7 place-items-center rounded-lg border border-border text-fg">{icon}</span>
      {children}
    </Command.Item>
  );
}

/** ⌘K / Ctrl+K menu for jumping to sections, copying the email, switching theme and opening links. */
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((value) => !value);
      }
    };
    const handleOpen = () => setOpen(true);
    window.addEventListener("keydown", handleKey);
    window.addEventListener(PALETTE_OPEN_EVENT, handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener(PALETTE_OPEN_EVENT, handleOpen);
    };
  }, []);

  const run = (action: () => void) => {
    setOpen(false);
    action();
  };
  const goTo = (id: string) => run(() => lenis?.scrollTo(`#${id}`, { offset: -88 }));
  const openUrl = (url: string) => run(() => window.open(url, "_blank", "noopener,noreferrer"));

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label={t.palette.open}
      overlayClassName="fixed inset-0 z-[80] bg-black/40 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-[18vh] z-[90] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-card"
    >
      <Command.Input
        placeholder={t.palette.placeholder}
        className="h-14 w-full border-b border-border bg-transparent px-5 text-[15px] outline-none placeholder:text-subtle"
      />
      <Command.List className={`max-h-[50vh] overflow-y-auto p-2 ${GROUP_HEADING}`} data-lenis-prevent>
        <Command.Empty className="py-10 text-center text-sm text-subtle">{t.palette.empty}</Command.Empty>

        <Command.Group heading={t.palette.navigation}>
          {[...NAV_ITEMS, { id: SECTIONS.CONTACT, key: "contact" as const }].map(({ id, key }) => (
            <Item key={id} icon={<LuArrowRight className="size-3.5" />} onSelect={() => goTo(id)}>
              {t.nav[key]}
            </Item>
          ))}
        </Command.Group>

        <Command.Group heading={t.palette.actions}>
          <Item icon={<LuCopy className="size-3.5" />} onSelect={() => run(() => navigator.clipboard.writeText(CONTACT_EMAIL))}>
            {t.palette.copyEmail}
          </Item>
          <Item icon={<LuSunMoon className="size-3.5" />} onSelect={() => run(() => toggleThemeWithTransition(resolvedTheme, setTheme))}>
            {t.palette.toggleTheme}
          </Item>
        </Command.Group>

        <Command.Group heading={t.palette.links}>
          <Item icon={<FaGithub className="size-3.5" />} onSelect={() => openUrl(LINKS.GITHUB)}>GitHub</Item>
          <Item icon={<SiUpwork className="size-3.5" />} onSelect={() => openUrl(LINKS.UPWORK)}>Upwork</Item>
          <Item icon={<FaLinkedinIn className="size-3.5" />} onSelect={() => openUrl(LINKS.LINKEDIN)}>LinkedIn</Item>
          {PROJECTS.map((project) => (
            <Item key={project.id} icon={<LuExternalLink className="size-3.5" />} onSelect={() => openUrl(project.live)}>
              {t.work.projects[project.id].title} — {t.work.live}
            </Item>
          ))}
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
