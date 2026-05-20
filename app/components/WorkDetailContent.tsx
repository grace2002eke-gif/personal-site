"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import type { WorkItem } from "@/lib/portfolio";

type WorkType = WorkItem["type"];

const typeColors: Record<WorkType, string> = {
  "Case Study": "bg-blue-50 text-blue-800 border-blue-200",
  "MVP": "bg-violet-50 text-violet-800 border-violet-200",
  "Proof of Concept": "bg-emerald-50 text-emerald-800 border-emerald-200",
  "Strategy": "bg-orange-50 text-orange-800 border-orange-200",
  "Research": "bg-amber-50 text-amber-800 border-amber-200",
  "Product Concept": "bg-purple-50 text-purple-800 border-purple-200",
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function WorkDetailContent({ item }: { item: WorkItem }) {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className={`bg-gradient-to-br ${item.coverColor} pt-24 pb-16`}>
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div custom={0} variants={fadeUp}>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to work
              </Link>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUp}
              className="flex items-center gap-3 mb-4 flex-wrap"
            >
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${typeColors[item.type]}`}
              >
                {item.type}
              </span>
              <span className="text-white/60 text-xs font-mono">{item.year}</span>
            </motion.div>
            <motion.h1
              custom={2}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              {item.title}
            </motion.h1>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-white/80 text-lg leading-relaxed max-w-2xl"
            >
              {item.summary}
            </motion.p>
            <motion.div
              custom={4}
              variants={fadeUp}
              className="flex flex-wrap gap-1.5 mt-6"
            >
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-[1.15rem] leading-relaxed text-foreground/85 mb-12 pb-12 border-b border-border font-medium"
            >
              {item.content.intro}
            </motion.p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-12 mb-16">
            {item.content.sections.map((section, i) => (
              <motion.div
                key={section.heading}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.split("\n\n").map((para, j) => (
                    <p key={j} className="text-foreground/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Outcomes */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="bg-secondary/50 border border-border rounded-xl p-8 mb-12"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-6"
            >
              Outcomes
            </motion.h2>
            <div className="space-y-3">
              {item.content.outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  custom={i + 1}
                  variants={fadeUp}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-foreground/85 font-medium">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4"
            >
              What I Learned
            </motion.h2>
            <motion.div
              custom={1}
              variants={fadeUp}
              className="border-l-4 border-accent pl-6 py-2"
            >
              <p className="text-foreground/80 leading-relaxed italic text-[1.05rem]">
                {item.content.learnings}
              </p>
            </motion.div>
          </motion.div>

          {/* Back nav */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="mt-16 pt-8 border-t border-border"
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all work
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
