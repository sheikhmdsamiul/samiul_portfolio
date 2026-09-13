import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { EASE, genesis } from "../lib/motion";
import { cv, profile } from "../data/profile";
import ProfileVisual from "./ProfileVisual";
import BrutalButton from "./ui/BrutalButton";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pt-32">
      <motion.div
        variants={genesis}
        initial="hidden"
        animate="show"
        className="container-x"
      >
        <div className="relative rounded-[26px] border-2 border-ink bg-paper shadow-blk-lg">
          <div className="pointer-events-none absolute -inset-6 -z-10 hidden rounded-[32px] bg-accent/10 blur-2xl lg:block" />

          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden rounded-t-[24px] grid-paper-fade" />

          {/* card header rule */}
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink px-5 py-3 sm:px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              {profile.role}
            </span>
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for opportunities
            </span>
          </div>

          <div className="grid gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8 lg:py-20">
            <div className="flex flex-col">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="sticker w-fit"
              >
                {profile.eyebrow}
              </motion.p>

              <h1 className="mt-8 font-display font-bold uppercase leading-[0.92] tracking-tightest text-ink">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
                  className="block text-[13vw] sm:text-7xl lg:text-[5.6rem]"
                >
                  {profile.nameLines[0]}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.34, ease: EASE }}
                  className="flex items-baseline gap-3 text-[13vw] sm:text-7xl lg:text-[5.6rem]"
                >
                  <span className="relative inline-block">
                    MD.
                    <span className="absolute -bottom-2 left-0 h-3 w-full bg-accent" aria-hidden="true" />
                  </span>
                  <span className="text-outline">SAMIUL</span>
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 max-w-xl"
              >
                <p className="text-base font-medium leading-relaxed text-ink sm:text-lg text-balance">
                  {profile.heroStatement}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{profile.heroSub}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.62 }}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <BrutalButton href="#projects" variant="dark" size="lg">
                  View Projects <ArrowRight size={15} />
                </BrutalButton>

                <BrutalButton href={cv.file} download={cv.download} variant="paper" size="lg">
                  <FileDown size={15} />
                  Download CV
                </BrutalButton>

                <BrutalButton href="#contact" variant="orange" size="lg">
                  Contact Me
                </BrutalButton>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-14 flex flex-wrap items-center gap-2"
              >
                {[
                  { href: profile.github, label: "GitHub", sub: profile.githubShort, Icon: Github },
                  { href: profile.linkedin, label: "LinkedIn", sub: profile.linkedinShort, Icon: Linkedin },
                  { href: `mailto:${profile.email}`, label: "Email", sub: profile.email, Icon: Mail },
                ].map(({ href, label, sub, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "Email" ? undefined : "_blank"}
                    rel={label === "Email" ? undefined : "noreferrer"}
                    className="group flex items-center gap-2.5 rounded-lg border border-ink/70 px-3.5 py-2 transition hover:border-ink hover:shadow-blk-sm"
                  >
                    <Icon size={15} className="text-accent" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft group-hover:text-ink">
                      {label}
                    </span>
                  </a>
                ))}
              </motion.div>
            </div>

            <div className="flex items-center justify-center lg:justify-end lg:pr-6">
              <ProfileVisual />
            </div>
          </div>

          {/* card footer rule */}
          <div className="flex items-center justify-between gap-4 border-t-2 border-ink px-5 py-3 sm:px-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              {profile.locationShort}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute sm:block">
              b.sc. cse · ai trail · 2024
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              © {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-12 flex w-fit flex-col items-center gap-1 text-ink-mute transition hover:text-ink"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}