"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  Briefcase,
  GraduationCap,
  Star,
  Award,
  Users,
  BarChart2,
  MapPin,
  ChevronRight,
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

const skills = [
  { label: "User Research", color: "primary" },
  { label: "Market Research", color: "primary" },
  { label: "Data Analysis", color: "orange" },
  { label: "Customer Empathy", color: "orange" },
  { label: "User Story Writing", color: "primary" },
  { label: "Quality Assurance", color: "coral" },
  { label: "Cross-functional Collaboration", color: "primary" },
  { label: "Client Feedback Synthesis", color: "primary" },
  { label: "Engagement Tracking", color: "coral" },
  { label: "SQL", color: "orange" },
  { label: "Excel", color: "orange" },
  { label: "Google Sheets", color: "orange" },
  { label: "PowerPoint", color: "coral" },
  { label: "Notion", color: "coral" },
  { label: "AI Tools", color: "primary" },
];

const skillClass: Record<string, string> = {
  primary: "bg-primary/10 text-primary border-primary/20",
  orange: "bg-accent/10 text-amber-700 border-accent/25",
  coral: "bg-destructive/10 text-coral border-destructive/20",
};

const stats = [
  { value: "300+", label: "Institutional Accounts", icon: BarChart2 },
  { value: "75%", label: "Engagement Rate", icon: Star },
  { value: "20%", label: "Onboarding Time Reduction", icon: ArrowRight },
  { value: "3 yrs", label: "Product Experience", icon: Briefcase },
];

export default function HomeContent() {
  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="gradient-hero pt-24 pb-0">
        <div className="max-w-3xl mx-auto px-6 pt-10 pb-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Avatar + name row */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6 mb-8">
              <motion.div custom={0} variants={fadeUp} className="shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-accent to-destructive shadow-xl">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/30">
                      <img
                        src="/grace.jpg"
                        alt="Grace Urum Eke"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                  <span
                    className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white"
                    title="Open to work"
                  />
                </div>
              </motion.div>

              <div className="text-center sm:text-left">
                <motion.p
                  custom={1}
                  variants={fadeUp}
                  className="text-accent text-sm font-semibold tracking-widest uppercase mb-1"
                >
                  Product Management
                </motion.p>
                <motion.h1
                  custom={2}
                  variants={fadeUp}
                  className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                  Grace Urum Eke
                </motion.h1>
                <motion.div
                  custom={3}
                  variants={fadeUp}
                  className="flex items-center justify-center sm:justify-start gap-3 mt-2 flex-wrap"
                >
                  <span className="flex items-center gap-1 text-white/70 text-sm">
                    <MapPin className="w-3.5 h-3.5" /> San Francisco, CA
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/70 text-sm">Open to PM roles</span>
                </motion.div>
              </div>
            </div>

            <motion.p
              custom={4}
              variants={fadeUp}
              className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Product-focused professional with 3 years closing the loop between
              user feedback, data, and engineering teams to drive platform
              adoption.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              className="flex flex-wrap gap-3 mb-0 pb-10"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 bg-accent text-amber-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-md"
              >
                View my work <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="mailto:grace2002eke@gmail.com"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/25 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/25 transition-all"
              >
                <Mail className="w-4 h-4" /> Email me
              </a>
              <a
                href="https://www.linkedin.com/in/graceurum-eke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white border border-white/25 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/25 transition-all"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <div className="bg-white/10 backdrop-blur-sm border-t border-white/15 mt-0">
          <div className="max-w-3xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-center"
              >
                <p className="text-2xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-white/60 mt-0.5 leading-tight">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 border-b border-border bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-6"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">
                Background
              </h2>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUp}
              className="space-y-4 text-[1.05rem] leading-relaxed text-foreground/85"
            >
              <p>
                I&apos;m someone who stays curious, reads widely, and tends to
                notice how things work, and where they don&apos;t. That instinct is
                what led me to Bloomberg, where I&apos;ve spent the last three years
                working across data products and institutional clients, turning
                feedback into structured insight, finding where adoption breaks
                down, and translating friction into recommendations engineering
                teams can actually act on.
              </p>
              <p>
                What drives me is closing the loop. Surfacing a problem is never
                enough. I want to see it through to something measurable: a 20%
                reduction in onboarding time, a 75% engagement rate on a platform
                that was underperforming, a user story that actually reflects how
                someone works.
              </p>
              <p>
                That curiosity doesn&apos;t clock out either. When I&apos;m off,
                I&apos;m probably mid-book, in a pool, exploring a new city, or
                showing up somewhere that needed one more volunteer.
              </p>
              <p>
                I&apos;m now pursuing PM roles where I can apply this foundation more
                directly, bringing a background in finance, international business,
                and user empathy to teams building products that matter.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        className="py-20 border-b border-border"
        style={{
          background:
            "linear-gradient(135deg, hsl(213 30% 95%) 0%, hsl(38 60% 96%) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-8"
            >
              <Star className="w-4 h-4 text-accent" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-foreground/60">
                Competencies
              </h2>
            </motion.div>
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill.label}
                  custom={i + 1}
                  variants={fadeUp}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium border ${skillClass[skill.color]}`}
                >
                  {skill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 border-b border-border bg-background">
        <div className="max-w-3xl mx-auto px-6">
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
        </div>
      </section>

      {/* EDUCATION */}
      <section
        className="py-20 border-b border-border"
        style={{
          background:
            "linear-gradient(135deg, hsl(210 60% 96%) 0%, hsl(213 30% 97%) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
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
                      BBA — International Business
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
                  Aug — Dec 2022
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS & COMMUNITY */}
      <section className="py-20 border-b border-border bg-background">
        <div className="max-w-3xl mx-auto px-6">
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
                Certifications & Community
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                custom={1}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-4 h-4 text-accent" />
                  <h3 className="font-semibold text-foreground">
                    Bloomberg Certifications
                  </h3>
                </div>
                <ul className="space-y-2">
                  {[
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

              <motion.div
                custom={2}
                variants={fadeUp}
                className="p-5 rounded-xl bg-white border border-border shadow-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-coral" />
                  <h3 className="font-semibold text-foreground">
                    Community & Leadership
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    {
                      role: "SF Inclusion Ambassador & Co-Lead, Black Professional Community (BPC)",
                      org: "Bloomberg",
                      period: "Nov 2025 — Present",
                      detail:
                        "An internal program championing inclusion and representation at Bloomberg SF. Organized 10+ cultural and developmental events; achieved 60-70% average departmental attendance",
                    },
                    {
                      role: "The Rotary Foundation — Paul Harris Fellow",
                      org: "Rotary International",
                      period: "2026",
                      detail:
                        "Awarded the Paul Harris Fellow in recognition of contributions to Rotary's global humanitarian mission",
                    },
                    {
                      role: "McCombs Diversity Council",
                      org: "UT Austin",
                      period: "2021 — 2023",
                    },
                    {
                      role: "Black Business Student Association",
                      org: "UT Austin",
                      period: "2019 — 2023",
                    },
                  ].map((item) => (
                    <li key={item.role}>
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(210 100% 15%) 0%, hsl(210 100% 22%) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              className="flex items-center gap-2 mb-4"
            >
              <Mail className="w-4 h-4 text-accent" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-accent">
                Get in touch
              </h2>
            </motion.div>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/80 mb-8 text-[1.1rem] leading-relaxed max-w-xl"
            >
              I&apos;m always open to conversations about product, interesting
              opportunities, or just talking through a hard problem.
            </motion.p>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <a
                href="mailto:grace2002eke@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-amber-900 text-sm font-semibold hover:brightness-110 transition-all shadow-md w-fit"
              >
                <Mail className="w-4 h-4" /> grace2002eke@gmail.com
              </a>
              <a
                href="tel:7372989224"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 text-white border border-white/25 text-sm font-medium hover:bg-white/25 transition-all w-fit"
              >
                <Phone className="w-4 h-4" /> (737) 298-9224
              </a>
              <a
                href="https://www.linkedin.com/in/graceurum-eke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 text-white border border-white/25 text-sm font-medium hover:bg-white/25 transition-all w-fit"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
