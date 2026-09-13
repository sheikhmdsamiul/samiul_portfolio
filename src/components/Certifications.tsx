import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "../data/journey";
import { EASE, viewportOnce } from "../lib/motion";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          index="06"
          eyebrow="// Certifications"
          title={
            <>
              Credentials with <span className="text-accent">receipts</span>.
            </>
          }
          description="Machine-learning fundamentals verified through DeepLearning.AI — both issued July 2025, both verifiable."
          annotation="2 ISSUED — 2025"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.credential}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.55, delay: i * 0.1, ease: EASE }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper p-6 shadow-blk-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-orange"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center border-2 border-ink bg-accent text-paper shadow-blk-sm">
                  <Award size={22} />
                </span>
                <span className="rounded-md border border-ink/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-ink-mute">
                  Issued {cert.period}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink">{cert.title}</h3>
              <p className="mt-1 text-sm font-medium text-ink-soft">{cert.issuer}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-mute">{cert.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.tags.map((t) => (
                  <span key={t} className="rounded-md border border-ink/35 bg-paper-deep px-2 py-0.5 font-mono text-[9px] text-ink-mute">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between gap-3 border-t-2 border-dashed border-ink/25 pt-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink-faint">
                  Credential ID · <span className="text-ink">{cert.credential}</span>
                </span>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border-2 border-ink bg-ink px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-paper shadow-blk-sm transition group-hover:bg-accent group-hover:shadow-orange"
                >
                  Verify <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}