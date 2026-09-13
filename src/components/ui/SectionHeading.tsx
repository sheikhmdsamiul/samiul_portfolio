import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "../../lib/motion";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  annotation?: string;
}

export default function SectionHeading({ index, eyebrow, title, description, annotation }: SectionHeadingProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="mb-12 sm:mb-16"
    >
      <div className="flex items-center gap-3 border-b-2 border-ink pb-4">
        <span className="grid h-7 w-7 shrink-0 place-items-center border border-ink bg-accent font-mono text-[11px] font-bold text-paper shadow-blk-sm">
          {index}
        </span>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute sm:text-xs">{eyebrow}</p>
        {annotation && (
          <span className="ml-auto hidden font-mono text-[10px] uppercase tracking-[0.16em] text-ink-faint md:block">
            {annotation}
          </span>
        )}
      </div>
      <h2 className="mt-6 font-display text-3xl font-bold leading-[1.05] tracking-tightest text-ink sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">{description}</p>
      )}
    </motion.header>
  );
}