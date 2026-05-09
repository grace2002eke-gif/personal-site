"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Clock } from "lucide-react";
import { workItems, type WorkItem } from "@/lib/portfolio";

type WorkType = WorkItem["type"];

const typeColors: Record<WorkType, string> = {
  "Case Study": "bg-primary/10 text-primary border-primary/20",
  "MVP": "bg-violet-50 text-violet-800 border-violet-200",
  "Proof of Concept": "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Strategy": "bg-accent/10 text-amber-700 border-accent/20",
  "Research": "bg-destructive/10 text-coral border-destructive/20",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function WorkContent() {
  return (
    <div className="min-h-screen">
      <section className="border-b border-border pt-24 pb-16 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm font-semibold tracking-widest uppercase text-accent mb-4"
            >
              Portfolio
            </motion.p>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
            >
              Selected Work
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
            >
              Case studies, MVPs, and proofs of concept. Each piece reflects a
              real problem, a real team, and a real outcome.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {workItems.length > 0 ? (
            <div className="divide-y divide-border">
              {workItems.map((item, i) => (
                <motion.div
                  key={item.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                >
                  <Link
                    href={`/work/${item.slug}`}
                    className="group flex items-start justify-between gap-6 py-8 hover:pl-2 transition-all duration-200"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${typeColors[item.type]}`}
                        >
                          {item.type}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {item.year}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-muted-foreground/70 bg-muted px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="py-20 flex flex-col items-center text-center"
            >
              <motion.div
                custom={0}
                variants={fadeUp}
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
              >
                <Clock className="w-7 h-7 text-primary" />
              </motion.div>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="text-2xl font-bold text-foreground mb-3"
              >
                Case studies on their way
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-muted-foreground leading-relaxed max-w-md mb-8"
              >
                I&apos;m putting together write-ups of the work I&apos;m most proud of.
                Check back soon, or get in touch if you&apos;d like to hear about a
                specific project directly.
              </motion.p>
              <motion.div custom={3} variants={fadeUp}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all shadow-sm"
                >
                  Back to About <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
