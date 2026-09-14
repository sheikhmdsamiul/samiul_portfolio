import { ArrowUp, Github, Linkedin, Mail, Terminal } from "lucide-react";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-ink bg-paper">
      <div className="container-x py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border-2 border-ink bg-ink font-display text-sm font-bold text-accent transition group-hover:bg-accent group-hover:text-paper">
              {profile.monogram}
            </span>
            <span className="leading-none">
              <span className="block font-display text-xs font-bold uppercase tracking-wide text-ink">
                {profile.shortName}
              </span>
              <span className="mt-1 flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.3em] text-ink-mute">
                <Terminal size={10} /> Python · Backend · AI/ML
              </span>
            </span>
          </a>

          <nav aria-label="Section quick links" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {["About", "Projects", "Skills", "Experience", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute transition hover:text-ink"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {[
              { Icon: Github, href: profile.github, label: "GitHub" },
              { Icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-paper text-ink shadow-blk-sm transition hover:bg-accent hover:text-paper"
              >
                <Icon size={15} />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 grid h-9 w-9 place-items-center rounded-lg border-2 border-ink bg-ink text-accent shadow-blk-sm transition hover:bg-accent hover:text-paper"
            >
              <ArrowUp size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t-2 border-dashed border-ink/20 pt-5 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            © {new Date().getFullYear()} {profile.shortName} — designed & built by me
          </p>
        </div>
      </div>
    </footer>
  );
}