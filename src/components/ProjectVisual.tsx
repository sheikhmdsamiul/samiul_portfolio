import { motion } from "framer-motion";
import type { Project } from "../data/projects";

/* Flat, light-theme abstract visuals — decorative only, no data invented. */
export default function ProjectVisual({ project }: { project: Project }) {
  const { visual } = project;

  if (visual === "bars") {
    const bars = [44, 72, 38, 88, 58, 96, 66];
    return (
      <div className="flex h-full items-end gap-2 px-5 pb-4" aria-hidden="true">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full rounded-t-[3px] border border-ink ${i % 2 ? "bg-accent" : "bg-paper"}`}
          />
        ))}
      </div>
    );
  }

  if (visual === "network") {
    return (
      <svg viewBox="0 0 320 150" className="h-full w-full" fill="none" aria-hidden="true">
        {[
          "M160 75 L48 42",
          "M160 75 L272 46",
          "M160 75 L56 128",
          "M160 75 L268 122",
          "M160 75 L160 18",
          "M160 75 L160 140",
        ].map((line, i) => {
          const parts = line.trim().split(/\s+/);
          return (
            <motion.line
              key={i}
              x1={parts[0].slice(1)}
              y1={parts[1]}
              x2={parts[2].slice(1)}
              y2={parts[3]}
              stroke={i === 0 ? "#E4570E" : "#111A2A"}
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
            />
          );
        })}
        {[
          [160, 75],
          [48, 42],
          [272, 46],
          [56, 128],
          [268, 122],
          [160, 18],
          [160, 140],
        ].map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r={i === 0 ? 7 : 4}
            fill={i === 0 ? "#E4570E" : "#111A2A"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
      </svg>
    );
  }

  if (visual === "chat") {
    return (
      <div className="flex h-full flex-col justify-end gap-2.5 p-5" aria-hidden="true">
        {[
          { align: "self-start", w: "w-2/3", ink: true, d: 0 },
          { align: "self-end", w: "w-1/2", ink: false, d: 0.35 },
          { align: "self-start", w: "w-3/4", ink: true, d: 0.6 },
          { align: "self-end", w: "w-2/5", ink: false, d: 0.8 },
        ].map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: b.d }}
            className={`${b.align} ${b.w} rounded-lg border ${
              b.ink ? "border-ink bg-ink text-paper" : "border-accent bg-accent text-paper"
            } px-3 py-2`}
          >
            <div className="h-1 w-3/5 rounded bg-current opacity-40" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (visual === "text") {
    const lines = ["w-11/12", "w-3/4", "w-4/5", "w-2/3", "w-9/12"];
    return (
      <div className="flex h-full flex-col justify-center gap-2.5 px-5" aria-hidden="true">
        {lines.map((w, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className={`h-2 rounded-sm border border-ink ${w} ${i === 2 ? "bg-accent border-accent" : "bg-paper"}`}
          />
        ))}
      </div>
    );
  }

  const lit = [1, 4, 6, 7, 12, 13, 16, 19, 22];
  return (
    <div className="grid h-full grid-cols-6 grid-rows-4 gap-1.5 p-5" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: i * 0.015 }}
          className={`rounded-[3px] border border-ink ${lit.includes(i) ? "bg-accent" : "bg-paper-deep"}`}
        />
      ))}
    </div>
  );
}