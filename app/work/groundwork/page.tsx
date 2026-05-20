"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

export default function GroundworkPage() {
  return (
    <div className="min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-br from-purple-900 to-purple-700 pt-24 pb-16">
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
            <motion.div custom={1} variants={fadeUp} className="flex items-center gap-3 mb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border bg-purple-50 text-purple-800 border-purple-200">
                Product Concept
              </span>
              <span className="text-white/60 text-xs font-mono">2026</span>
            </motion.div>
            <motion.h1
              custom={2}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
            >
              Groundwork
            </motion.h1>
            <motion.p custom={3} variants={fadeUp} className="text-white/70 text-lg">
              Full case study coming soon.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="py-24">
        <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto"
            >
              <Clock className="w-7 h-7 text-primary" />
            </motion.div>
            <motion.h2 custom={1} variants={fadeUp} className="text-2xl font-bold text-foreground mb-3">
              Write-up in progress
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-md mb-8">
              I&apos;m currently documenting this project. Check back soon, or reach out if you&apos;d like to hear about it directly.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to work
              </Link>
              <a
                href="mailto:grace2002eke@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:bg-muted transition-all"
              >
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
