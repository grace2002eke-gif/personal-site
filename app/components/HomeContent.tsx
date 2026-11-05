"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Phone,
  Briefcase,
  Star,
  BarChart2,
  MapPin,
  FileText,
  PenLine,
  BookOpen,
} from "lucide-react";

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

const stats = [
  { value: "300+", label: "Institutional Accounts", icon: BarChart2 },
  { value: "75%", label: "Engagement Rate", icon: Star },
  { value: "35%", label: "Onboarding Time Reduction", icon: ArrowRight },
  { value: "3 yrs", label: "Client Solutions", icon: Briefcase },
];

const competencyGroups = [
  {
    title: "Implementation and delivery",
    items: [
      "Enterprise implementation and onboarding",
      "Technical integrations (SFTP, APIs, SSO)",
      "Programme delivery and governance (PMP)",
      "Training and enablement",
    ],
  },
  {
    title: "Clients and growth",
    items: [
      "Customer health scoring",
      "Adoption and engagement analytics",
      "Expansion and account growth",
      "Voice of customer",
      "Stakeholder management",
    ],
  },
  {
    title: "Tools and data",
    items: [
      "SQL",
      "Bloomberg Terminal",
      "Excel and Google Sheets",
      "AI tools (Claude, prototyping)",
      "Notion",
    ],
  },
];

const exploreLinks = [
  {
    label: "My work",
    href: "/work",
    description: "Case studies and product concepts",
    icon: BookOpen,
  },
  {
    label: "Writing",
    href: "/writing",
    description: "Articles and thinking",
    icon: PenLine,
  },
  {
    label: "Resume",
    href: "/resume",
    description: "Experience and credentials",
    icon: FileText,
  },
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
                  <span className="text-white/70 text-sm">Open to new opportunities</span>
                </motion.div>
              </div>
            </div>

            <motion.p
              custom={4}
              variants={fadeUp}
              className="text-white/85 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Implementation and client solutions professional with 3 years closing the loop between
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
                I&apos;m someone who stays curious, reads widely, and tends to notice how things work, and where they don&apos;t. That instinct is what led me to Bloomberg, where I spent three years working across data products and institutional clients, turning feedback into structured insight, finding where adoption breaks down, and translating friction into recommendations engineering teams can actually act on.
              </p>
              <p>
                What drives me is closing the loop. Surfacing a problem is never enough. I want to see it through to something measurable: a 35% reduction in onboarding time, a 75% engagement rate on a platform that was underperforming, a user story that actually reflects how someone works.
              </p>
              <p>
                That curiosity doesn&apos;t clock out either. When I&apos;m off, I&apos;m probably mid-book, in a pool, exploring a new city, or showing up somewhere that needed one more volunteer. In my spare time I love to build out concepts and projects utilizing AI, which is also where Groundwork came from.
              </p>
              <p>
                I&apos;m now looking for roles in implementation, program management, and customer success, bringing a background in finance, international business, and user empathy to teams building products that matter.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COMPETENCIES */}
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
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
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
            <div className="grid sm:grid-cols-3 gap-6">
              {competencyGroups.map((group, gi) => (
                <motion.div key={group.title} custom={gi + 1} variants={fadeUp}>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-foreground/50 mb-3">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/75"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE */}
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
              <ArrowRight className="w-4 h-4 text-primary" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-primary">
                Explore
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-4">
              {exploreLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <motion.div key={link.href} custom={i + 1} variants={fadeUp}>
                    <Link
                      href={link.href}
                      className="flex flex-col gap-3 p-5 rounded-lg border border-border bg-white hover:border-primary/40 hover:shadow-sm transition-all group"
                    >
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {link.description}
                        </p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all mt-auto" />
                    </Link>
                  </motion.div>
                );
              })}
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
              I&apos;m always open to conversations about implementation, programmes, or a hard adoption problem.
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
