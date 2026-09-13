import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillClusters, type Skill, type SkillCluster } from "../data/skills";
import { projects } from "../data/projects";
import { EASE, stagger, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

function projectNames(ids: string[]) {
  return ids
    .map((id) => {
      const p = projects.find((x) => x.id === id);
      return p ? p.title : null;
    })
    .filter(Boolean) as string[];
}

function SkillCard({ cluster }: { cluster: SkillCluster }) {
  const [active, setActive] = useState<Skill | null>(null);
  const matches = active?.usedIn ? projectNames(active.usedIn) : [];

  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
      className="flex flex-col rounded-2xl border-2 border-ink bg-paper p-5 shadow-blk-sm transition-shadow hover:shadow-blk"
    >
      <div className="flex items-center gap-3 border-b-2 border-ink pb-3">
        <span className="grid h-8 w-8 place-items-center border-2 border-ink bg-accent font-mono text-[11px] font-bold text-paper">
          {cluster.index}
        </span>
        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-ink">{cluster.title}</h3>
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-mute">{cluster.note}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {cluster.skills.map((skill) => {
          const isHovered = active?.name === skill.name;
          return (
            <span
              key={skill.name}
              onMouseEnter={() => setActive(skill)}
              onMouseLeave={() => setActive(null)}
              className={`cursor-default rounded-md border px-2.5 py-1 font-mono text-[11px] transition-all duration-200 ${
                isHovered
                  ? "border-accent-dark bg-accent text-paper"
                  : "border-ink/35 bg-paper-deep text-ink-soft hover:-translate-y-0.5 hover:border-ink hover:bg-paper hover:shadow-blk-sm"
              }`}
            >
              {skill.name}
            </span>
          );
        })}
      </div>

      <div className="relative mt-2 flex-1">
        <AnimatePresence initial={false}>
          {active && active.usedIn && matches.length > 0 && (
            <motion.div
              key="linked"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              className="overflow-hidden"
            >
              <div className="mt-3 rounded-lg border-2 border-dashed border-accent/60 bg-accent-wash p-3">
                <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-accent-dark">
                  <ArrowRight size={11} /> Used in
                </p>
                <p className="mt-1 text-xs font-semibold text-ink">{matches.join(" · ")}</p>
              </div>
            </motion.div>
          )}
          {active && active.usedIn && matches.length === 0 && (
            <motion.div
              key="empty"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <p className="mt-3 rounded-lg border border-ink/20 px-3 py-2 font-mono text-[10px] text-ink-mute">
                Used in the current production role · no named project.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="03"
          eyebrow="// Capabilities"
          title={
            <>
              A toolkit <span className="text-accent">sharpened</span> on real systems.
            </>
          }
          description="Grouped by how I actually use them. Hover any technology to see which project it powered — no arbitrary ratings."
          annotation="07 CLUSTERS — GROUNDED IN DELIVERABLES"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillClusters.map((cluster) => (
            <SkillCard key={cluster.id} cluster={cluster} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}