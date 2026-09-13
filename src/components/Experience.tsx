import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, MapPin, CheckCircle2 } from "lucide-react";
import { experience } from "../data/journey";
import { EASE, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  const [open, setOpen] = useState(true);

  return (
    <section id="experience" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="04"
          eyebrow="// Experience"
          title={
            <>
              Where I'm <span className="text-accent">building</span> today.
            </>
          }
          description="One role, grounded in production Python — and the concrete engineering behind it."
          annotation="DREAM71 BANGLADESH LTD."
        />

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="space-y-4"
          >
            <div className="border-2 border-ink bg-ink p-5 text-paper shadow-blk-sm">
              <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Active role
              </p>
              <p className="mt-3 font-display text-2xl font-bold leading-tight">
                {experience[0].role}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-ink-soft">{experience[0].summary}</p>
            <div className="flex flex-wrap gap-2">
              {experience[0].stack.map((t) => (
                <span key={t} className="rounded-md border border-ink/35 bg-paper-deep px-2.5 py-1 font-mono text-[10px] text-ink-soft">
                  {t}
                </span>
              ))}
            </div>
          </motion.aside>

          <motion.div className="relative" viewport={viewportOnce}>
            <div className="absolute bottom-2 left-[21px] top-2 w-0.5 bg-ink/15" />
            {experience.map((entry, i) => (
              <motion.div
                key={entry.role}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="relative pl-14"
              >
                <span className="absolute left-0 top-1 z-10 grid h-[42px] w-[42px] place-items-center border-2 border-ink bg-accent text-paper shadow-blk-sm">
                  <Briefcase size={18} />
                </span>

                <button
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                  className={`w-full rounded-2xl border-2 border-ink bg-paper p-5 text-left transition-all duration-300 sm:p-6 ${
                    open ? "shadow-orange" : "bg-paper shadow-blk hover:-translate-y-1 hover:shadow-blk"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="mono-label">{entry.period}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-accent-dark">
                        {i === 0 && "Current"}
                      </span>
                    </div>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-ink-mute">
                      <MapPin size={12} /> {entry.location}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold text-ink">{entry.role}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-accent-dark">{entry.company}</p>

                  <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                    <Calendar size={13} className="text-ink/40" />
                    {entry.period}
                  </div>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 space-y-3 border-t-2 border-dashed border-ink/20 pt-5">
                          {entry.highlights.map((h) => (
                            <li key={h.slice(0, 24)} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                              <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                    <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                    {open ? "Collapse details" : "Expand achievements"}
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}