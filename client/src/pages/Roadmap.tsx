import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Circle } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { RoadmapHeroWidget, HeroWidgetStyles } from "@/components/HeroWidget";

const items = [
  {
    q: "Q2 2026", phase: "Seed Phase", status: "current",
    title: "Core Platform — Permission Gate + Identity Graph Live",
    desc: "Permission Gate (Moat 1) is live: every AI agent requests a Micro-Token before acting. Once embedded in customer workflows, removing Unkov stops their entire AI workforce — operationally impossible to rip out. Zero-Touch deployment delivers a live Identity Drift dashboard in under 30 minutes. Pilot success metrics defined upfront — no pilot purgatory.",
    features: [
      "Permission Gate — Policy-as-Code Micro-Token engine (Moat 1 active)",
      "Identity Social Fabric — AI-native graph discovery engine",
      "Autonomous Kill-Switch + orphan purge remediation",
      "Real-time Identity Drift dashboard — live in < 30 minutes",
      "Okta, AWS IAM & Azure AD native connectors",
      "Hardware Identity binder — server-level cryptographic fingerprinting for service accounts (Moat 3 foundation)",
      "Pilot success metrics framework — X orphans found + Y actions blocked = contract signed",
    ],
    milestone: "First 3 paying pilot customers"
  },
  {
    q: "Q3 2026", phase: "Seed Phase", status: "upcoming",
    title: "Bot Reputation Network + AWS Marketplace",
    desc: "Launch the Bot Reputation Network (Moat 2): anonymous cross-tenant threat intelligence. If an agent type acts toxically at Customer A, all customers are pre-emptively protected. List on AWS Marketplace to unlock procurement from existing cloud budgets and sign first MSP channel partner.",
    features: [
      "Bot Reputation Network — anonymous cross-tenant reputation scores (Moat 2 active)",
      "Pre-emptive cross-sector threat throttling across all customers",
      "AWS Marketplace listing live — zero-friction procurement",
      "First MSP channel partner signed — white-labeled multi-tenant dashboard",
      "Compounding network effect: more customers = safer platform for all",
    ],
    milestone: "10 paying customers / $200K+ ARR"
  },
  {
    q: "Q4 2026", phase: "Seed Phase", status: "upcoming",
    title: "Compliance Gravity + SOC 2 Certification",
    desc: "Establish Unkov as the official System of Record for auditors (Moat 4): when the SEC or HHS asks for AI governance proof, the customer hits Export from Unkov. SOC 2 Type II certification removes the #1 enterprise procurement blocker. Patient Data Lineage ships for Healthcare — the deepest vertical moat.",
    features: [
      "Compliance Gravity — one-click SEC + HHS export (Moat 4 active)",
      "Patient Data Lineage — agent-level ePHI audit trail for HIPAA § 164.312(a)",
      "PCI DSS 4.0, HIPAA & SOC 2 Type II automated evidence collection",
      "SOC 2 Type II certification achieved",
      "Continuous compliance evidence — audit readiness as a byproduct, not a project",
    ],
    milestone: "SOC 2 Type II certified"
  },
  {
    q: "Q1 2027", phase: "Series A Target", status: "upcoming",
    title: "Series A — All Four Moats Fully Active",
    desc: "All four structural moats operational. Raise Series A with $300K–$500K ARR, 15–20 enterprise customers, and NRR > 110%. Scale for larger enterprise deployments with advanced ML and expanded integrations marketplace.",
    features: [
      "$300K–$500K ARR / 15–20 enterprise customers",
      "All four moats active: Permission Gate, Bot Reputation, Hardware Identity, Compliance Gravity",
      "On-premise & hybrid deployment options",
      "Advanced ML model training — GPU-accelerated drift scoring",
      "Custom integrations marketplace",
    ],
    milestone: "Series A — $20M raise"
  },
  {
    q: "Year 2", phase: "Post Series A", status: "future",
    title: "Hardware Identity — Full TPM Depth + Prior Art",
    desc: "Extend Hardware Identity (Moat 3) to full TPM/Secure Enclave depth — creating a Physical Identity for every digital bot that is cryptographically unforgeable. No named competitor has announced this capability. This 12–18 month technical lead must be filed as prior art. Simultaneously, expand cross-sector intelligence to 100+ enterprise tenants.",
    features: [
      "Full TPM/Secure Enclave hardware identity binding — Physical Identity for bots",
      "Prevention of Agent Cloning and Sleeper Agent attacks",
      "Prior art filing for hardware-rooted agent identity",
      "Bot Reputation Network scaled to 100+ enterprise tenants",
      "Industry-specific threat benchmarking — Fintech, Healthcare, Retail",
    ],
    milestone: "Hardware identity moat — filed as prior art"
  },
  {
    q: "Year 2–3", phase: "Post Series A", status: "future",
    title: "Compliance Autopilot + Global Expansion",
    desc: "Compliance becomes fully automated: SOC 2, HIPAA, and PCI DSS 4.0 evidence packages generated continuously without human intervention. Expand to EU (GDPR v2, EU AI Act) and launch the native mobile app for manager approvals.",
    features: [
      "Compliance Autopilot — continuous SOC 2, HIPAA, PCI DSS 4.0 evidence generation",
      "EU AI Act High-Risk AI System transparency compliance",
      "GDPR v2 data residency controls",
      "Native mobile app for real-time alerts and one-touch access approvals",
      "Custom compliance rule builder for regulated verticals",
    ],
    milestone: "Compliance as a byproduct — global"
  },
];

export default function Roadmap() {
  const [, navigate] = useLocation();
  useEffect(() => {
    if (sessionStorage.getItem("unkov_investor_auth") !== "true") {
      navigate("/investor-gate");
    } else {
      sessionStorage.removeItem("unkov_investor_auth");
    }
  }, []);
  if (sessionStorage.getItem("unkov_investor_auth") !== "true") return null;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <HeroWidgetStyles />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        <section style={{ borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)", backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <span className="section-label" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Roadmap</span>
            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>From seed to scale</h1>
            <p className="section-sub" style={{ marginBottom: "2rem" }}>Our roadmap is built around the four structural moats — each one compounding with every new customer.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { num: "M1", color: "#00A8E8", bg: "#E8F4FD", title: "Permission Gate", timing: "Live — Q2 2026" },
                { num: "M2", color: "#00C896", bg: "#E8FDF5", title: "Bot Reputation", timing: "Q3 2026" },
                { num: "M3", color: "#A855F7", bg: "#F5E8FD", title: "Hardware Identity", timing: "Q2 2026 foundation" },
                { num: "M4", color: "#F59E0B", bg: "#FDF5E8", title: "Compliance Gravity", timing: "Q4 2026" },
              ].map((m) => (
                <div key={m.num} style={{ backgroundColor: m.bg, border: `1px solid ${m.color}`, borderRadius: 8, padding: "0.75rem 1rem" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: m.color, marginBottom: 2 }}>{m.num}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#111827", marginBottom: 2 }}>{m.title}</div>
                  <div style={{ fontSize: 11, color: "#6b7280" }}>{m.timing}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase legend */}
        <section className="py-6 border-b border-[#d8dde6] bg-[#f6f8fa]">
          <div className="container mx-auto px-10">
            <div className="flex flex-wrap gap-4">
              {[{ color: "bg-[#00297a]", label: "In Progress" }, { color: "bg-slate-300", label: "Seed Phase" }, { color: "bg-[#d8dde6]", label: "Post Series A" }].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${l.color}`} />
                  <span className="text-sm text-[#3d4759]">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-slim">
          <div className="container mx-auto px-10 max-w-3xl">
            <div className="space-y-0">
              {items.map((item, idx) => {
                const isLast = idx === items.length - 1;
                return (
                  <div key={idx} className="flex gap-5">
                    {/* Dot + line */}
                    <div className="flex flex-col items-center w-8 shrink-0 pt-8">
                      <div className={`w-3 h-3 rounded-full ring-4 ring-white z-10 shrink-0 ${item.status === "current" ? "bg-[#00297a]" : item.status === "upcoming" ? "bg-slate-400" : "bg-[#d8dde6]"}`} />
                      {!isLast && <div className="w-px flex-1 bg-[#d8dde6] mt-1" />}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 mb-5 card p-7 ${item.status === "future" ? "border-dashed bg-[#f6f8fa]" : ""} ${item.status === "current" ? "border-[#c2d4f8]" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2.5 mb-3">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.status === "current" ? "bg-[#00297a] text-white" : item.status === "upcoming" ? "bg-[#e8f0fe] text-[#00297a] border border-[#c2d4f8]" : "bg-[#eef2f7] text-[#3d4759]"}`}>{item.q}</span>
                        <span className="text-xs text-[#3d4759]">{item.phase}</span>
                        {item.status === "current" && <span className="text-xs font-bold text-[#00297a]">● Live</span>}
                      </div>
                      <h3 className="text-base font-bold text-[#1d1d1f] mb-2">{item.title}</h3>
                      <p className="text-sm text-[#3d4759] mb-5 leading-relaxed">{item.desc}</p>
                      <div className="space-y-2 mb-5">
                        {item.features.map((f, fi) => (
                          <div key={fi} className="flex items-start gap-2 text-sm text-[#3d4759]">
                            <CheckCircle className="w-3.5 h-3.5 text-[#00297a] shrink-0 mt-0.5" />{f}
                          </div>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-[#d8dde6] flex items-center gap-2">
                        <span className="text-xs text-[#3d4759] uppercase tracking-widest font-mono">Milestone:</span>
                        <span className="text-xs font-semibold text-[#3d4759]">{item.milestone}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-20">
          <div className="container mx-auto px-10 max-w-3xl">
            <div className="card p-10 bg-[#00297a] border-0 text-center">
              <h2 className="text-xl font-bold text-white mb-2">Help shape the roadmap</h2>
              <p className="text-[#c2d4f8] text-sm mb-6 max-w-sm mx-auto">Join our customer advisory board and have direct input on product priorities.</p>
              <a href="mailto:info@unkov.com" className="inline-flex items-center gap-2 bg-[#ffffff] text-[#00297a] hover:bg-[#e8f0fe] font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm">Get in touch</a>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
