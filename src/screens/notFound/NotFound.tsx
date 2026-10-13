import { LuArrowLeft } from "react-icons/lu";
import { t } from "@i18n";
import { Button } from "@components";
import { BASE_PATH } from "@config";

export default function NotFound() {
  return (
    <section className="relative grid min-h-[100svh] place-items-center overflow-hidden px-6 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid mask-radial" />
      <div className="relative">
        <p className="serif-accent text-[clamp(7rem,25vw,16rem)] leading-none text-accent-text">{t.notFound.code}</p>
        <h1 className="mt-2 text-3xl font-medium tracking-tight md:text-5xl">{t.notFound.title}</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">{t.notFound.body}</p>
        <Button href={`${BASE_PATH}/`} className="mt-10">
          <LuArrowLeft className="size-4" />
          {t.notFound.cta}
        </Button>
      </div>
    </section>
  );
}
