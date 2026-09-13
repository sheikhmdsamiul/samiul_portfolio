import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { EASE, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      const el = document.createElement("textarea");
      el.value = profile.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      el.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative rounded-[26px] border-2 border-ink bg-ink p-6 text-paper shadow-blk-lg sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(246,242,233,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(246,242,233,.6) 1px, transparent 1px)", backgroundSize: "44px 44px" }} />

          <div className="relative">
            <div className="flex items-center justify-between gap-3 border-b-2 border-paper/20 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                11 / Contact
              </span>
              <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50 sm:block">
                Ashkona · Dhaka-1231 · Bangladesh
              </span>
            </div>

            <h2 className="mt-8 max-w-3xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tightest sm:text-6xl lg:text-7xl">
              Let's build<br />
              <span className="text-outline-paper">something.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-paper/70 sm:text-base">
              A backend need, a model to fine-tune, a team looking for a builder who understands both —
              my inbox is open.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={copyEmail}
                className="brutal-btn rounded-lg border-2 border-paper bg-accent px-6 py-4 font-sans text-sm font-bold shadow-orange hover:shadow-orange-lg"
                aria-live="polite"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                {copied ? "Copied to clipboard" : profile.email}
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="brutal-btn rounded-lg border-2 border-paper bg-paper px-6 py-4 font-sans text-sm font-bold text-ink shadow-orange hover:shadow-orange-lg"
              >
                <Mail size={17} /> Compose
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                {
                  href: profile.github,
                  label: "GitHub",
                  sub: profile.githubShort,
                  Icon: Github,
                },
                {
                  href: profile.linkedin,
                  label: "LinkedIn",
                  sub: profile.linkedinShort,
                  Icon: Linkedin,
                },
                {
                  href: `tel:${profile.phone}`,
                  label: "Phone",
                  sub: profile.phoneDisplay,
                  Icon: Phone,
                },
              ].map(({ href, label, sub, Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label === "Phone" ? undefined : "_blank"}
                  rel={label === "Phone" ? undefined : "noreferrer"}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                  className="group flex items-center gap-3 rounded-xl border-2 border-paper/25 p-4 transition hover:border-accent hover:bg-accent/10"
                >
                  <Icon size={20} className="shrink-0 text-accent transition group-hover:rotate-3" />
                  <span className="min-w-0">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.2em] text-paper/50">{label}</span>
                    <span className="block truncate text-sm font-medium text-paper">{sub}</span>
                  </span>
                  <ArrowUpRight size={14} className="ml-auto shrink-0 text-paper/40 transition group-hover:text-accent" />
                </motion.a>
              ))}
            </div>

            <p className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/40">
              <MapPin size={12} className="text-accent" /> Based in {profile.location}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}