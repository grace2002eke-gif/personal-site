"use client";

import { motion } from "framer-motion";
import { PenLine, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

// TODO: replace each href with the actual Substack article URL
// Substack profile URL: https://substack.com/PLACEHOLDER — replace with your real Substack handle
const articles: { title: string; description: string; href: string; date: string }[] = [
  // Add articles here, e.g.:
  // {
  //   title: "Article title",
  //   description: "One-line description of what the article covers.",
  //   href: "https://substack.com/PLACEHOLDER/p/article-slug",
  //   date: "Month YYYY",
  // },
];

export default function WritingContent() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Page header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mb-14"
        >
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-2 mb-3"
          >
            <PenLine className="w-4 h-4 text-primary" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Writing
            </span>
          </motion.div>
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-3xl font-bold text-foreground mb-2"
          >
            Articles
          </motion.h1>
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-muted-foreground text-sm max-w-lg"
          >
            Thinking on implementation, adoption, and product. Published on Substack.
          </motion.p>
        </motion.div>

        {/* Article list */}
        {articles.length > 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            className="space-y-4"
          >
            {articles.map((article, i) => (
              <motion.a
                key={article.href}
                custom={i}
                variants={fadeUp}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start justify-between gap-4 p-5 rounded-xl bg-white border border-border hover:border-primary/40 hover:shadow-sm transition-all group"
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {article.description}
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1.5">
                    {article.date}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-0.5 transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-center py-20 text-muted-foreground"
          >
            <PenLine className="w-8 h-8 mx-auto mb-3 opacity-30" />
            <p className="text-sm">Articles coming soon.</p>
          </motion.div>
        )}

      </div>
    </div>
  );
}
