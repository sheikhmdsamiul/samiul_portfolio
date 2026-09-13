import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { education } from "../data/journey";
import { EASE } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="05"
          eyebrow="// Education"
          title={
            <>
              The AI Trail behind <span className="text-accent">the</span> engineering.
            </>
          }
          annotation="NORTH SOUTH UNIVERSITY"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-3xl rounded-2xl border-2 border-ink bg-paper shadow-blk-lg"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink bg-ink px-5 py-4 text-paper sm:px-8">
            <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              <GraduationCap size={15} /> Degree
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60 sm:block">
              {education.period}
            </span>
          </div>

          <div className="px-5 py-8 sm:px-8">
            <p className="font-display text-lg font-semibold text-ink-mute">B.Sc.</p>
            <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-ink sm:text-3xl">
              {education.degree}
            </h3>
            <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-ink-soft">
              {education.university}
              <span className="flex items-center gap-1 font-mono text-[10px] text-ink-mute">
                <MapPin size={11} /> Dhaka, Bangladesh
              </span>
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-md border-2 border-ink bg-accent px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
                {education.trail}
              </span>
              <span className="rounded-md border border-ink/40 px-2.5 py-1 font-mono text-[10px] text-ink-mute">
                CSE Core + AI Specialization
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-soft">{education.summary}</p>

            <div className="mt-7 border-t-2 border-dashed border-ink/25 pt-5">
              <p className="mono-label">Key coursework</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {education.coursework.map((c, i) => (
                  <div key={c} className="flex items-center gap-2.5">
                    <span className="h-4 w-4 shrink-0 border-2 border-ink bg-paper text-center font-mono text-[8px] leading-3 text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink-soft">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}