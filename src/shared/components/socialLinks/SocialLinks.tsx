import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { SiUpwork } from "react-icons/si";
import { LINKS } from "@constants";
import { cn } from "@utils";

const SOCIALS = [
  { href: LINKS.GITHUB, label: "GitHub", icon: FaGithub },
  { href: LINKS.LINKEDIN, label: "LinkedIn", icon: FaLinkedinIn },
  { href: LINKS.UPWORK, label: "Upwork", icon: SiUpwork },
  { href: LINKS.EMAIL, label: "Email", icon: LuMail },
] as const;

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {SOCIALS.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="grid size-11 place-items-center rounded-full border border-border text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:text-fg"
          >
            <Icon className="size-[18px]" aria-hidden />
          </a>
        </li>
      ))}
    </ul>
  );
}
