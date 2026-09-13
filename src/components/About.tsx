import { motion } from "framer-motion";
import { ArrowUpRight, Compass, GraduationCap, MapPin, Target } from "lucide-react";
import { profile } from "../data/profile";
import { education } from "../data/journey";
import { EASE, fadeUp, stagger, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

const focusAreas = [
  "Backend Engineering",
  "Deep Learning",
  "NLP & RAG",
  "Data & Analytics",
  "Production Python",
  "System Design",
];

const direction = [
  "Seeking a Software Engineer role building reliable, scalable applications with an engineering team.",
  "Growing my ML practice toward production-grade pipelines — from training to serving.",
  "Building toward data engineering & analytics: pipelines and dashboards that turn raw data into decisions.",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="01"
          eyebrow="// About"
          title={
            <>
              Engineer by craft,<br />
              <span className="text-accent">researcher</span> by curiosity.
            </>
          }
          description="A software engineer who trains models and ships the systems that serve them."
          annotation="SHEIKH MD. SAMIUL — PROFILE 2026"
        />

        <div className="grid gap-5 lg:grid-cols-12">
          {/* narrative */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="space-y-4 border-2 border-ink bg-paper p-6 shadow-blk sm:p-8 lg:col-span-7"
          >
            {[
              "Computer Science graduate with hands-on experience designing and building backend systems in Python (Django, FastAPI). Comfortable working across the stack from database schema design to API architecture, with a solid foundation in system design and DevOps tooling.",
              "Driven by a strong interest in AI/ML and Data Science, with practical experience training & fine-tuning models, building NLP applications, and data pipelines through academic research and hands-on projects. Continually expanding skills at the intersection of backend engineering, machine learning, and data-driven solutions.",
            ].map((para) => (
              <motion.p key={para.slice(0, 20)} variants={fadeUp} className="text-sm leading-relaxed text-ink-soft sm:text-base">
                {para}
              </motion.p>
            ))}
            <motion.div variants={fadeUp} className="pt-4">
              <p className="mono-label mb-3">Technical focus</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span key={f} className="rounded-md border border-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* profile card */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative lg:col-span-5"
          >
            <div className="inline-flex w-full flex-col overflow-hidden rounded-2xl border-2 border-ink bg-ink text-paper shadow-orange lg:rotate-1">
              <div className="flex items-center justify-between border-b border-paper/20 px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
                  Profile / ID
                </span>
                <span className="grid h-6 w-6 place-items-center border border-accent font-mono text-[10px] font-bold text-accent">
                  {profile.monogram}
                </span>
              </div>
              <div className="space-y-4 px-5 py-6 sm:px-6">
                <div>
                  <p className="mono-label !text-paper/60">Name</p>
                  <p className="mt-1 font-display text-xl font-bold uppercase tracking-tight">{profile.name}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mono-label !text-paper/60">Role</p>
                    <p className="mt-1 text-xs font-medium leading-snug text-paper/90">Python Developer · Backend Engineer · AI/ML</p>
                  </div>
                  <div>
                    <p className="mono-label !text-paper/60">Based</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-paper/90">
                      <MapPin size={12} className="text-accent" /> Dhaka, Bangladesh
                    </p>
                  </div>
                  <div>
                    <p className="mono-label !text-paper/60">Education</p>
                    <p className="mt-1 text-xs font-semibold text-paper/90">B.Sc. CSE — NSU</p>
                  </div>
                  <div>
                    <p className="mono-label !text-paper/60">Grad. year</p>
                    <p className="mt-1 text-xs font-semibold text-paper/90">Dec 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-paper/20 pt-4">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/80">
                    Open to Software Engineer & ML roles
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* education mini */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-brutal group relative overflow-hidden p-6 lg:col-span-4"
          >
            <GraduationCap size={22} className="text-accent" />
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">Education</p>
            <h3 className="mt-1 font-display text-lg font-bold leading-tight text-ink">{education.degree}</h3>
            <p className="mt-1 text-xs font-medium text-ink-soft">{education.university}</p>
            <p className="mt-3 inline-flex rounded-md bg-accent/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-dark">
              {education.trail}
            </p>
            <p className="mt-3 font-mono text-[11px] text-ink-mute">{education.period}</p>
          </motion.div>

          {/* career direction */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="card-brutal p-6 lg:col-span-4"
          >
            <div className="flex items-center justify-between">
              <Compass size={22} className="text-accent" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-faint">Where I'm headed</span>
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-ink">Career direction</h3>
            <ul className="mt-3 space-y-3">
              {direction.map((d) => (
                <li key={d.slice(0, 20)} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-ink-soft">
                  <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-accent" />
                  {d}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* education coursework */}
          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex items-start justify-between gap-4 border-2 border-dashed border-ink/50 p-6 lg:col-span-4"
          >
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">Key coursework</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span key={c} className="rounded-md bg-paper-deep px-2.5 py-1 font-mono text-[10px] text-ink-soft">
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <Target size={20} className="shrink-0 text-ink-faint" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}