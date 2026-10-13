import { t } from "@i18n";
import { MARQUEE_TECH } from "@constants";
import { Marquee, TechIcon } from "@components";

export default function TechStrip() {
  return (
    <section aria-label={t.marquee.label} className="border-y border-border py-10">
      <p className="container-page mb-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-subtle">
        {t.marquee.label}
      </p>
      <Marquee>
        {MARQUEE_TECH.map((id) => (
          <TechIcon key={id} id={id} />
        ))}
      </Marquee>
    </section>
  );
}
