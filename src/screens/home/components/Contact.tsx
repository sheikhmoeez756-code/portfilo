"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuCheck, LuCopy, LuMapPin, LuPhone } from "react-icons/lu";
import { t } from "@i18n";
import { CONTACT_EMAIL, LINKS, SECTIONS } from "@constants";
import { Reveal, SectionHeading, SocialLinks } from "@components";
import ContactForm from "./ContactForm";

const COPIED_RESET_MS = 2000;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), COPIED_RESET_MS);
  };

  return (
    <section id={SECTIONS.CONTACT} className="py-28 md:py-40">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <SectionHeading
            index="06"
            label={t.contact.label}
            title={t.contact.title}
            titleAccent={t.contact.titleAccent}
            subtitle={t.contact.subtitle}
            className="mb-10 md:mb-12"
          />

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3">
              <a href={LINKS.EMAIL} className="text-xl font-medium tracking-tight underline decoration-border-strong underline-offset-8 transition-colors hover:decoration-accent md:text-2xl">
                {CONTACT_EMAIL}
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="relative flex h-9 items-center gap-1.5 overflow-hidden rounded-full border border-border px-3 text-xs text-muted transition-colors hover:text-fg"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "copy"}
                    initial={{ y: 12, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -12, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-1.5"
                  >
                    {copied ? <LuCheck className="size-3.5 text-accent-text" /> : <LuCopy className="size-3.5" />}
                    {copied ? t.contact.copied : t.contact.copyEmail}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>

            <ul className="mt-8 space-y-3 text-muted">
              <li>
                <a href={LINKS.PHONE} className="inline-flex items-center gap-3 transition-colors hover:text-fg">
                  <LuPhone className="size-4" aria-hidden />
                  {t.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMapPin className="size-4" aria-hidden />
                {t.hero.location}
              </li>
            </ul>

            <SocialLinks className="mt-10" />
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card md:p-8">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
