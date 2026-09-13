import { motion } from "framer-motion";
import { Gamepad2, Trophy, Users } from "lucide-react";
import { EASE, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

const clusters = [
  {
    Icon: Users,
    title: "Clubs & Leadership",
    caption: "NSU · community · organizing",
    accent: "bg-ink",
    items: [
      { label: "NSU HR Club", sub: "Active member" },
      { label: "NSU CEC Club", sub: "Member" },
      { label: "Organized 'Cybernauts 2019'", sub: "CEC's flagship event" },
    ],
  },
  {
    Icon: Trophy,
    title: "Sports",
    caption: "three teams · three eras",
    accent: "bg-accent",
    items: [
      { label: "NSU Football Team", sub: "Player" },
      { label: "College Football Team", sub: "Player" },
      { label: "School Cricket Team", sub: "Player" },
    ],
  },
  {
    Icon: Gamepad2,
    title: "Competitive Gaming",
    caption: "lan · tournaments · grind",
    accent: "bg-ink",
    items: [
      { label: "FIFA — now EA FC", sub: "Competed at tournaments across universities" },
      { label: "Competitive FPS", sub: "Active in ranked FPS titles" },
    ],
  },
];

export default function Extracurricular() {
  return (
    <section id="activities" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="07"
          eyebrow="// Beyond The Code"
          title={
            <>
              Extra curricular <span className="text-accent">activities</span>.
            </>
          }
          description="Teams, clubs, and tournaments — the competitive instinct carries outside the terminal too."
          annotation="NSU · COLLEGE · SCHOOL"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {clusters.map((cluster, i) => (
            <motion.article
              key={cluster.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="flex flex-col rounded-2xl border-2 border-ink bg-paper p-6 shadow-blk-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-blk"
            >
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center text-paper shadow-blk-sm ${cluster.accent}`}>
                  <cluster.Icon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold leading-tight text-ink">{cluster.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-mute">{cluster.caption}</p>
                </div>
              </div>

              <ul className="mt-6 flex-1 space-y-4 border-t border-ink/15 pt-5">
                {cluster.items.map((item) => (
                  <li key={item.label}>
                    <p className="text-sm font-semibold text-ink">{item.label}</p>
                    <p className="mt-0.5 font-mono text-[11px] leading-snug text-ink-soft">{item.sub}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}