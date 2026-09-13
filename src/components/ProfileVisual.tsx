import { useState } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { profile } from "../data/profile";
import { EASE } from "../lib/motion";

export default function ProfileVisual() {
  const [missing, setMissing] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 2 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className="dash-frame relative mx-auto w-full max-w-[340px]"
    >
      <span className="dash-deco" />
      <span className="absolute -right-3 -top-4 z-10 rounded-md border-2 border-ink bg-accent px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-paper shadow-blk-sm -rotate-2">
        fig.01
      </span>
      <span className="sticker absolute -bottom-4 -left-3 z-10 rotate-[-3deg]">
        {profile.photoLabel}
      </span>

      {/* portrait / photo slot */}
      {!missing ? (
        <div
          className="group relative cursor-pointer overflow-hidden border-[3px] border-ink bg-paper-deep shadow-orangeR transition-transform duration-300 hover:rotate-[4deg] motion-reduce:hover:rotate-0"
          onMouseEnter={() => setMissing(false)}
        >
          <motion.img
            src={profile.photo}
            alt="Portrait of Sheikh Md. Samiul"
            onError={() => setMissing(true)}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-[0.35]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
        </div>
      ) : (
        <div
          role="img"
          aria-label="Portrait placeholder — add a photo at public/profile.jpg"
          className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden border-[3px] border-ink bg-paper-deep shadow-orangeR"
        >
          <div className="absolute inset-0 grid-paper opacity-70" />
          <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center border-2 border-ink bg-ink font-display text-2xl font-bold text-accent shadow-blk-sm">
              {profile.monogram}
            </span>
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink-mute">
              {profile.name}
            </p>
            <p className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
              <Camera size={12} />
              drop photo → /public/profile.jpg
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}