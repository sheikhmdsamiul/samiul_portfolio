import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { EASE } from "../lib/motion";

const links = [
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#projects");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = [...links.map((l) => l.href.slice(1)), "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
        aria-label="Primary"
        className={`mx-auto max-w-[1150px] rounded-2xl border-2 border-ink bg-paper px-3 py-2.5 shadow-blk transition-shadow duration-300 ${
          scrolled ? "shadow-blk-sm" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border-2 border-ink bg-ink font-display text-lg font-bold text-accent shadow-blk-sm transition group-hover:bg-accent group-hover:text-paper">
              {profile.monogram}
            </span>
            <span className="leading-none">
              <span className="block font-display text-[13px] font-bold uppercase tracking-wide text-ink">
                {profile.shortName}
              </span>
              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.34em] text-ink-mute">
                Portfolio
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors ${
                  active === link.href ? "text-paper" : "text-ink-mute hover:text-ink"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-ink shadow-blk-sm"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden brutal-btn rounded-lg border-2 border-ink bg-ink px-4 py-2.5 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-accent shadow-orange-sm lg:inline-flex lg:items-center lg:gap-1.5 hover:bg-ink-soft hover:shadow-orange">
              Contact
              <ArrowUpRight size={13} />
            </a>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-lg border-2 border-ink bg-paper text-ink shadow-blk-sm transition hover:bg-accent hover:text-paper lg:hidden"
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden lg:hidden"
            >
              <ul className="mt-2 space-y-1 border-t-2 border-ink/15 pt-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] transition ${
                        active === link.href
                          ? "bg-ink text-paper"
                          : "text-ink-soft hover:bg-paper-deep"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-1 flex items-center justify-between rounded-lg bg-accent px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-paper shadow-blk-sm"
                  >
                    Contact
                    <ArrowUpRight size={14} />
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}