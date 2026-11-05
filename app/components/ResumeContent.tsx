"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Users,
  ChevronRight,
  Download,
} from "lucide-react";
import { experiences } from "@/lib/portfolio";

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

export default function ResumeContent() {
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
          <motion.h1
            custom={0}
            variants={fadeUp}
            className="text-3xl font-bold text-foreground mb-2"
          >
            Resume
          </motion.h1>
          <motion.p
            custom={1}
            variants={fadeUp}
            className="text-muted-foreground text-sm"
          >
            Experience, education, and credentials.
          </motion.p>
          <motion.a
            custom={2}
            variants={fadeUp}
            href="/Grace-Urum-Eke-Resume.pdf"
            download="Grace Urum Eke - Resume.pdf"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:brightness-110 transition-all shadow-sm"
          >
            <Download className="w-4 h-4" /> Download PDF
          </motion.a>
        </motion.div>

        {/* EXPERIENCE */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-10"
            >
              <Briefcase className="w-4 h-4 text-coral" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-coral">
                Experience
              </h2>
            </motion.div>
            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.role}
                  custom={i + 1}
                  variants={fadeUp}
                  className="relative pl-6 border-l-2 border-border hover:border-primary transition-colors group"
                >
                  <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background group-hover:bg-accent transition-colors" />
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono bg-muted px-2 py-0.5 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground/75 mb-3 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.highlights.length > 0 && (
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-foreground/70"
                        >
                          <ChevronRight className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EDUCATION */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              <GraduationCap className="w-4 h-4 text-primary" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">
                Education
              </h2>
            </motion.div>
            <div className="space-y-6">
              <motion.div
                custom={1}
                variants={fadeUp}
                className="flex justify-between items-start flex-wrap gap-2 p-5 rounded-xl bg-white border border-border hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      BBA - International Business
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The University of Texas at Austin · McCombs School of Business
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-mono shrink-0">
                  May 2023
                </span>
              </motion.div>
              <motion.div
                custom={2}
                variants={fadeUp}
                className="flex justify-between items-start flex-wrap gap-2 p-5 rounded-xl bg-white border border-border hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Exchange Program
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Korea University, Seoul
                    </p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground font-mono shrink-0">
                  Aug - Dec 2022
                </span>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              <Award className="w-4 h-4 text-accent" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-amber-700">
                Certifications
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              {/* PMP listed separately */}
              <motion.div
                custom={1}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    Professional
                  </h3>
                </div>
                <ul className="space-y-2">
                  {["PMP (PMI, Oct 2026)"].map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 text-sm text-foreground/75"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Bloomberg certifications */}
              <motion.div
                custom={2}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Bloomberg
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
                    "Bloomberg Market Concepts (Feb 2026)",
                    "Equity & Portfolio Analysis",
                    "Bloomberg Indices",
                    "Advanced News Analytics",
                    "FTP",
                  ].map((cert) => (
                    <li
                      key={cert}
                      className="flex items-center gap-2 text-sm text-foreground/75"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {cert}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* COMMUNITY & LEADERSHIP */}
        <section>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              <Users className="w-4 h-4 text-coral" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-coral">
                Community & Leadership
              </h2>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUp}
              className="p-5 rounded-xl bg-white border border-border shadow-sm"
            >
              <ul className="space-y-4">
                {[
                  {
                    role: "SF Inclusion Ambassador & Co-Lead, Black Professional Community (BPC)",
                    org: "Bloomberg",
                    period: "Nov 2025 - Aug 2026",
                    detail:
                      "An internal program championing inclusion and representation at Bloomberg SF. Organized 10+ cultural and developmental events; achieved 60-70% average departmental attendance",
                  },
                  {
                    role: "The Rotary Foundation - Paul Harris Fellow",
                    org: "Rotary International",
                    period: "2026",
                    detail:
                      "Awarded the Paul Harris Fellow in recognition of contributions to Rotary's global humanitarian mission",
                  },
                  {
                    role: "McCombs Diversity Council",
                    org: "UT Austin",
                    period: "2021 - 2023",
                  },
                  {
                    role: "Black Business Student Association",
                    org: "UT Austin",
                    period: "2019 - 2023",
                  },
                ].map((item) => (
                  <li key={item.role} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-foreground/85">
                      {item.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.org} · {item.period}
                    </p>
                    {"detail" in item && item.detail && (
                      <p className="text-xs text-muted-foreground/80 mt-0.5 italic">
                        {item.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
