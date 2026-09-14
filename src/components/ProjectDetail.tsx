import { motion } from "framer-motion";
import { useEffect } from "react";
import { ArrowUpRight, CheckCircle2, Github, X } from "lucide-react";
import type { Project } from "../data/projects";
import { EASE } from "../lib/motion";

const flowSteps = ["Data", "Preprocessing", "Model / RAG", "Evaluation", "Application"];

function FlowDiagram() {
  return (
    <div className="relative mt-3">
      <div className="absolute bottom-3 left-[15px] top-3 w-0.5 bg-ink/20" />
      <ol className="space-y-2.5">
        {flowSteps.map((step, i) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: EASE }}
            className="relative flex items-center gap-3"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12 }}
              className="z-10 grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full border-2 border-ink bg-paper font-mono text-[10px] font-bold text-ink"
            >
              {i + 1}
            </motion.span>
            <span className="rounded-md border border-ink/40 bg-paper-deep px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink">
              {step}
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function FlowRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-ink/15 py-5 first:border-t-0">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent-dark">{label}</p>
      <div className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const p = project;

  useEffect(() => {
    if (!p) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [p, onClose]);

  if (!p) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[70]"
      role="dialog"
      aria-modal="true"
      aria-label={`${p.title} — project detail`}
    >
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-[3px]" onClick={onClose} />
      <div className="absolute inset-0 flex items-start justify-center overflow-y-auto p-4 sm:p-8">
        <motion.article
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ duration: 0.38, ease: EASE }}
          className="relative w-full max-w-3xl overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-blk-lg"
        >
          {/* header */}
          <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-ink px-5 py-3 text-paper sm:px-7">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
              Case {p.index} / {p.title.split(" ")[0]}
            </span>
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="grid h-9 w-9 place-items-center rounded-lg border-2 border-paper/40 text-paper transition hover:border-accent hover:bg-accent"
            >
              <X size={17} />
            </button>
          </div>

          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto p-5 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {p.category.map((c) => (
                <span key={c} className="rounded-full border border-ink px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
                  {c}
                </span>
              ))}
              <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-paper">
                {p.context}
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.summary}</p>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-ink px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-paper shadow-blk-sm transition hover:bg-accent hover:text-paper"
              >
                <Github size={14} />
                View on GitHub
                <ArrowUpRight size={13} />
              </a>
            )}

            {p.metric && (
              <div className="mt-5 inline-flex items-center gap-3 rounded-xl border-2 border-ink bg-paper shadow-blk-sm px-4 py-3">
                <span className="font-display text-2xl font-bold text-accent">{p.metric.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">{p.metric.label}</span>
              </div>
            )}

            {p.aiPipeline && (
              <div className="mt-6 rounded-xl border-2 border-dashed border-ink/40 bg-paper-deep/50 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">Pipeline</p>
                <FlowDiagram />
              </div>
            )}

            <div className="mt-6">
              <FlowRow label="Problem">{p.flow.problem}</FlowRow>
              <FlowRow label="Approach">
                <ul className="space-y-2">
                  {p.flow.approach.map((a) => (
                    <li key={a.slice(0, 24)} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </FlowRow>
              {p.flow.architecture && <FlowRow label="Architecture">{p.flow.architecture}</FlowRow>}
              <FlowRow label="Result">{p.flow.result}</FlowRow>
              <FlowRow label="Technologies">
                <div className="mt-1 flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-ink/40 bg-paper px-2.5 py-1 font-mono text-[11px] text-ink">
                      {tech}
                    </span>
                  ))}
                </div>
              </FlowRow>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  );
}