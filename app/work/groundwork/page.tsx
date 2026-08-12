"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GroundworkCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gw-page">
      <div className="gw-container">

        <Link href="/work" className="gw-back-link">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 7H2M6 3L2 7l4 4" />
          </svg>
          Back to work
        </Link>

        <div className="gw-hero">
          <div className="gw-eyebrow">Case study — Original concept</div>
          <h1 className="gw-hero-title">
            Groundwork: building <em>financial futures</em> for the adulting generation
          </h1>
          <p className="gw-hero-subtitle">
            A financial literacy and credit-building platform for 17 to 25 year olds. Milestone-driven, behavior-connected, and built to take its users seriously.
          </p>
          <div className="gw-meta-row">
            <div className="gw-meta-item">
              <span className="gw-meta-label">Industry</span>
              <span className="gw-meta-value">Consumer fintech</span>
            </div>
            <div className="gw-meta-item">
              <span className="gw-meta-label">Type</span>
              <span className="gw-meta-value">Original concept</span>
            </div>
            <div className="gw-meta-item">
              <span className="gw-meta-label">Audience</span>
              <span className="gw-meta-value">Ages 17 to 25</span>
            </div>
            <div className="gw-meta-item">
              <span className="gw-meta-label">PM focus areas</span>
              <span className="gw-meta-value">Discovery · Vision · Roadmap · Metrics</span>
            </div>
          </div>
        </div>

        <div className="gw-chapter-tag">Chapter 1 — Customer Discovery</div>

        <h2>The problem nobody taught us to solve</h2>

        <p>Every generation has a financial awakening moment: the first time rent is due, the first tax form that makes no sense, the first time a loan application comes back declined. For Gen Z and late millennials, that moment is arriving earlier, hitting harder, and happening with far less preparation than prior generations had.</p>

        <p>The socioeconomic forces of the last five years have accelerated this reality. Inflation peaked at 8% in 2022. Housing costs remain the single largest driver of ongoing inflation. Student loan payments resumed after years of forbearance. And the traditional financial rails that built credit history for prior generations, like buying a home or financing a car, are increasingly out of reach for people in their early twenties.</p>

        <p>What exists to meet this generation where they are? Not much that actually works.</p>

        <div className="gw-stat-grid">
          <div className="gw-stat-card">
            <div className="gw-stat-number">33%</div>
            <div className="gw-stat-label">of Gen Z have subprime credit scores below 600</div>
          </div>
          <div className="gw-stat-card">
            <div className="gw-stat-number">46%</div>
            <div className="gw-stat-label">had a loan application declined in the past 5 years</div>
          </div>
          <div className="gw-stat-card">
            <div className="gw-stat-number">43%</div>
            <div className="gw-stat-label">of Americans incorrectly believe debit cards build credit</div>
          </div>
          <div className="gw-stat-card">
            <div className="gw-stat-number">55%</div>
            <div className="gw-stat-label">of Gen Z lack savings to cover 3 months of expenses</div>
          </div>
        </div>

        <div className="gw-divider" />

        <h2>Who we are building for</h2>

        <p>Through desk research, behavioral data analysis, and synthesis of existing financial literacy studies, three distinct user segments emerged within the 17 to 25 age band. Each has a different relationship to money, credit, and financial knowledge.</p>

        <div className="gw-segment-list">
          <div className="gw-segment">
            <div className="gw-segment-num">01</div>
            <div>
              <div className="gw-segment-name">The Onramp User</div>
              <div className="gw-segment-age">Ages 17 to 19 · High school senior to first-year college student</div>
              <div className="gw-segment-desc">Just entering financial independence. May have a debit card and a part-time job. Has never filed taxes, never thought about credit, and does not know what a W-2 is. Not irresponsible, just untaught.</div>
              <div className="gw-segment-pain">Core pain: I do not know what I do not know, and no one is explaining it without talking down to me.</div>
            </div>
          </div>
          <div className="gw-segment">
            <div className="gw-segment-num">02</div>
            <div>
              <div className="gw-segment-name">The Stalled Builder</div>
              <div className="gw-segment-age">Ages 20 to 23 · College student or early career</div>
              <div className="gw-segment-desc">Knows credit matters and wants to build it, but has been rejected, confused by the system, or fallen into BNPL and payment apps that feel like progress but do not report to bureaus. Motivated but stuck.</div>
              <div className="gw-segment-pain">Core pain: I am doing the right things, or I think I am, but my score is not moving and I do not understand why.</div>
            </div>
          </div>
          <div className="gw-segment">
            <div className="gw-segment-num">03</div>
            <div>
              <div className="gw-segment-name">The Goal-Driven Adulter</div>
              <div className="gw-segment-age">Ages 23 to 25 · Early career, first real income</div>
              <div className="gw-segment-desc">Has a specific financial milestone in sight: first apartment, paying off debt, building an emergency fund. Earns real money now but does not have a structured approach. Ready to do the work, needs a guide not a lecture.</div>
              <div className="gw-segment-pain">Core pain: I have a goal but no roadmap. Generic budgeting apps do not connect to where I am actually trying to go.</div>
            </div>
          </div>
        </div>

        <p>Groundwork is built primarily for Segments 2 and 3, with an onboarding experience that also serves Segment 1 as they transition into financial independence. The common thread across all three: they are motivated, digitally native, and deeply skeptical of tools that feel condescending or disconnected from their reality.</p>

        <div className="gw-divider" />

        <h2>What the research revealed</h2>

        <p>Five core insights emerged from synthesizing behavioral research, credit bureau data, and generational financial studies. Each one shapes a specific product decision.</p>

        <div className="gw-insight-list">
          <div className="gw-insight">
            <div className="gw-insight-icon" style={{ background: "#eef2e8" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#5c6e3e" strokeWidth="1.5">
                <path d="M8 2v4l3 2" /><circle cx="8" cy="8" r="6" />
              </svg>
            </div>
            <div>
              <div className="gw-insight-head">Early behavior has decade-long consequences</div>
              <div className="gw-insight-body">Dallas Fed research shows lower credit utilization in your early 20s leads to a 57-point higher credit score a decade later, and that advantage persists even when controlling for income. The window to intervene is narrow and the stakes are high.</div>
            </div>
          </div>
          <div className="gw-insight">
            <div className="gw-insight-icon" style={{ background: "#e8f0fb" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#2c5fa3" strokeWidth="1.5">
                <rect x="2" y="3" width="12" height="10" rx="2" /><path d="M5 7h6M5 10h4" />
              </svg>
            </div>
            <div>
              <div className="gw-insight-head">The tools they trust do not build credit</div>
              <div className="gw-insight-body">40% of Gen Z uses Cash App or Venmo as a primary banking tool. BNPL is available at nearly every checkout. These feel like financial tools and behaviorally they are, but none of them report to credit bureaus. Users are building habits without building history.</div>
            </div>
          </div>
          <div className="gw-insight">
            <div className="gw-insight-icon" style={{ background: "#fdf0e8" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#a05a2c" strokeWidth="1.5">
                <path d="M8 3v2M8 11v2M3 8h2M11 8h2" /><circle cx="8" cy="8" r="3" />
              </svg>
            </div>
            <div>
              <div className="gw-insight-head">Motivation is real but misdirected</div>
              <div className="gw-insight-body">72% of Gen Z took active steps to improve their financial health in the past year, including cutting expenses, paying down debt, and saving. They are not apathetic. They lack a structured, personalized system to channel that motivation effectively.</div>
            </div>
          </div>
          <div className="gw-insight">
            <div className="gw-insight-icon" style={{ background: "#eef2e8" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#5c6e3e" strokeWidth="1.5">
                <path d="M4 12L8 4l4 8" /><path d="M5.5 9h5" />
              </svg>
            </div>
            <div>
              <div className="gw-insight-head">Split-brain budgeting is real user behavior</div>
              <div className="gw-insight-body">Gen Z simultaneously cuts back on dining out and splurges on experiences, a behavior researchers call &quot;split-brain budgeting.&quot; Any product that assumes linear, disciplined saving behavior will fail to model how this user actually thinks and spends.</div>
            </div>
          </div>
          <div className="gw-insight">
            <div className="gw-insight-icon" style={{ background: "#f5eaf0" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#8a2c5f" strokeWidth="1.5">
                <path d="M3 8h10M8 3v10" />
              </svg>
            </div>
            <div>
              <div className="gw-insight-head">The knowledge gap is systemic, not personal</div>
              <div className="gw-insight-body">43% of Americans believe debit cards build credit. This is not a Gen Z problem, it is a financial education system failure. The people who need to know this most are the ones least likely to have had access to financial mentorship growing up.</div>
            </div>
          </div>
        </div>

        <div className="gw-divider" />

        <div className="gw-dark-box">
          <h3>The white space</h3>
          <p>Existing credit-building products like Kikoff, Self, and Chime Credit Builder solve one piece of the puzzle: they give users a product that reports to bureaus. But they do not explain <strong>why</strong> that matters, <strong>how</strong> it connects to a user&apos;s actual goals, or <strong>what else</strong> needs to happen alongside it. Generic budgeting apps track spending but have no credit or tax layer and no milestone-driven structure. Financial literacy content exists, but it is either passive (YouTube, TikTok) or institutional and largely unabsorbed.</p>
          <p style={{ marginTop: "1rem" }}>There is no product that <strong>meets Gen Z where they already are behaviorally, connects their real spending to structured learning, and reverse-engineers a path to their actual life goals.</strong> That is the gap Groundwork fills.</p>
        </div>

        <div className="gw-divider" />

        <h2>The problem statement</h2>

        <div className="gw-callout">
          <p>Young adults between 17 and 25 are entering financial independence during a period of structural economic pressure: high inflation, frozen housing markets, and resumed student debt. They arrive with almost no practical financial education and tools that either exclude them or fail to build on each other. The result is a generation that is motivated to do better but stuck in systems that reward those who already know how they work. <strong>Groundwork exists to close that gap, one milestone, one habit, one conversation at a time.</strong></p>
        </div>

        <span className="gw-next-pill">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 7h10M8 3l4 4-4 4" />
          </svg>
          Up next: Chapter 2 — Product Vision
        </span>

      </div>
    </div>
  );
}
