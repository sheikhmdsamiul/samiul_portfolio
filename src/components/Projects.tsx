import { motion } from "framer-motion";
import { ArrowUpRight, Github, GripVertical } from "lucide-react";
import type { Project } from "../data/projects";
import { EASE, stagger, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";
import ProjectVisual from "./ProjectVisual";

interface ProjectsProps {
  projects: Project[];
  onOpen: (project: Project) => void;
}

function CategoryRow({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {project.category.map((c) => (
        <span key={c} className="rounded-full border border-ink bg-paper px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
          {c}
        </span>
      ))}
      <span className="rounded-full bg-accent px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper">
        {project.context}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  featured = false,
  index = 0,
}: {
  project: Project;
  onOpen: (p: Project) => void;
  featured?: boolean;
  index?: number;
}) {
  return (
    <motion.article
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="h-full"
    >
      <motion.div
        custom={index}
        variants={{
          hidden: { opacity: 0, y: 34 },
          show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: EASE } }),
        }}
        onClick={() => onOpen(project)}
        className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-blk transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-orange ${
          featured ? "lg:flex-row" : ""
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(project);
          }
        }}
      >
        <div
          className={`relative overflow-hidden border-b-2 border-ink ${
            featured ? "h-56 border-r-2 lg:h-auto lg:w-[46%] lg:border-b-0" : "h-44"
          }`}
        >
          <div className="absolute inset-0 grid-paper opacity-60" />
          <div className="absolute inset-0 transition-colors duration-500 group-hover:bg-accent/10" />
          <ProjectVisual project={project} />
          <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full border-2 border-ink bg-paper text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bg-accent group-hover:text-paper">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-display text-3xl font-bold text-ink/15">{project.index}</span>
            <CategoryRow project={project} />
          </div>

          <h3 className={`mt-3 font-display font-bold leading-tight tracking-tight text-ink ${featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"}`}>
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.tagline}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span key={tech} className="rounded-md border border-ink/30 px-2 py-0.5 font-mono text-[10px] text-ink-mute">
                {tech}
              </span>
            ))}
            {project.stack.length > 4 && (
              <span className="rounded-md border border-ink/30 bg-paper-deep px-2 py-0.5 font-mono text-[10px] text-ink-mute">
                +{project.stack.length - 4}
              </span>
            )}
          </div>

          <div className="mt-auto flex items-center gap-3 border-t-2 border-ink/10 pt-4 mt-6">
            {project.metric && (
              <span className="font-display text-lg font-bold text-accent">
                {project.metric.value}
                <span className="ml-2 font-mono text-[9px] font-normal uppercase tracking-[0.18em] text-ink-mute">
                  {project.metric.label}
                </span>
              </span>
            )}
            <span className="ml-auto flex items-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${project.title} — GitHub repository`}
                  className="grid h-8 w-8 place-items-center rounded-lg border-2 border-ink text-ink transition group-hover:bg-accent group-hover:text-paper"
                >
                  <Github size={14} />
                </a>
              )}
              <span className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink transition group-hover:text-accent-dark">
                Open case <ArrowUpRight size={13} />
              </span>
            </span>
          </div>
        </div>

        <span className="absolute -left-0 -top-0 hidden rotate-90 lg:block" aria-hidden="true">
          <GripVertical size={12} className="p-0.5 text-ink/30" />
        </span>
      </motion.div>
    </motion.article>
  );
}

export default function Projects({ projects, onOpen }: ProjectsProps) {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="02"
          eyebrow="// Selected Work"
          title={
            <>
              Projects, from <span className="text-accent">production</span> to research.
            </>
          }
          description="Five systems — one industry platform, four AI/ML research and application projects. Tap a case to open the full breakdown."
          annotation={`${projects.length} CASES — ${projects.reduce((n, p) => n + p.category.length, 0)} CATEGORIES`}
        />

        <ProjectCard project={featured} onOpen={onOpen} featured />

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((p, i) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}