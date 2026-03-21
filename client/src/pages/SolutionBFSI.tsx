import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { Landmark, Shield, Zap, BarChart3, GitBranch, CheckCircle, AlertTriangle, Clock, DollarSign, ChevronRight } from "lucide-react";

export default function SolutionBFSI() {
  const [, navigate] = useLocation();

  const challenges = [
    { icon: Clock,         title: "$1.2M Quarterly Review Tax",  desc: "120+ hours per quarter of manual access review spreadsheets across IT, compliance, and business teams — all to satisfy regulators with stale data." },
    { icon: AlertTriangle, title: "Toxic Combinations",          desc: "Create + approve transaction access held simultaneously. A ticking compliance timebomb — invisible without continuous graph analysis." },
    { icon: DollarSign,    title: "PCI DSS 4.0 & SEC Pressure",  desc: "Requirement 7 & 8 demand continuous least-privilege enforcement. Annual audits can't catch real-time access drift. The SEC now demands AI governance proof on demand — not in a spreadsheet." },
  ];

  const capabilities = [
    { icon: GitBranch,  title: "Permission Gate for Fintech Agents", desc: "Every AI agent that touches a transaction, payment, or customer record must request a Micro-Token from Unkov first. The real-time graph maps every human, bot, and AI agent — plus every resource they touch. Unkov is the Green Light your agentic finance stack cannot operate without." },
    { icon: Zap,        title: "Autonomous Remediation",      desc: "Toxic link revocation, orphan purge, and Hard Kill-Switch on rogue bots — executed at machine speed, with full audit trail." },
    { icon: Shield,     title: "System of Record for Auditors", desc: "When the SEC asks for AI governance proof, your team hits Export from Unkov. Continuous evidence collection for PCI DSS 4.0 Requirements 7 & 8, SOC 2 Type II — audit prep becomes a single click." },
    { icon: BarChart3,  title: "Cross-Sector Bot Intelligence",  desc: "Unkov's Bot Reputation Network means a threat detected at another Fintech customer pre-emptively protects yours. Live Identity Drift dashboard 24/7. No quarterly scrambles. Unlike Okta or Entro, Unkov acts — not just alerts." },
  ];

  const results = [
    { metric: "90%",    label: "Reduction in manual access review hours" },
    { metric: "< 24h",  label: "Orphaned account backlog cleared" },
    { metric: "$1.9M",  label: "Average incident cost avoided" },
    { metric: "100%",   label: "Pilot customer renewal rate"  },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #00297a 0%, #0041a8 100%)", padding: "clamp(2.5rem,5vw,5rem) 1rem clamp(2rem,4vw,4rem)" }}>
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <Landmark className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white/75 uppercase tracking-widest">Banking & Financial Services</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-5" style={{ letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "28rem" }}>
              Eliminate the Access Review Tax — for Good.
            </h1>
            <p className="text-xl mb-8" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "36rem", lineHeight: 1.7 }}>
              Unkov automates the access governance work draining your fintech's IT and compliance teams every quarter — and keeps you PCI DSS 4.0 ready continuously.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button onClick={() => navigate("/early-access")} className="btn-primary" style={{ backgroundColor: "#ffffff", color: "#00297a", border: "none" }}>
                Apply for Pilot — Defined Success Metrics, No Pilot Purgatory <ChevronRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigate("/how-it-works")}
                style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.7rem 1.5rem", borderRadius: "9999px", border: "2px solid rgba(255,255,255,0.4)", color: "#ffffff", backgroundColor: "transparent", fontWeight: 600, cursor: "pointer", fontSize: "0.95rem", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                See How It Works
              </button>
            </div>
          </div>
        </section>

        {/* Results bar */}
        <section style={{ backgroundColor: "#1a1a2e", padding: "2rem 1.5rem" }}>
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {results.map((r, i) => (
                <div key={i}>
                  <div className="text-3xl font-extrabold mb-1" style={{ color: "#00c6e0" }}>{r.metric}</div>
                  <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.65)" }}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="section-slim">
          <div className="container mx-auto px-10 max-w-4xl">
            <div className="max-w-2xl mb-12">
              <span className="section-label">The Problem</span>
              <h2 className="section-heading mb-4">Access governance was designed for a pre-AI world.</h2>
              <p className="section-sub">Fintech teams juggle sprawling cloud environments, AI agents, and regulators demanding continuous proof. Manual processes can't keep up.</p>
            </div>
            <div className="grid md:grid-cols-1 md:grid-cols-3 gap-5">
              {challenges.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="card p-7" style={{ borderColor: "#dcd6ce" }}>
                    <div className="p-2.5 rounded-lg w-fit mb-4" style={{ backgroundColor: "#fff0f0" }}>
                      <Icon className="w-4 h-4" style={{ color: "#dc2626" }} />
                    </div>
                    <div className="text-sm font-bold mb-2" style={{ color: "#1a1a2e" }}>{c.title}</div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section-slim" style={{ backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce", borderBottom: "1px solid #dcd6ce" }}>
          <div className="container mx-auto px-10 max-w-4xl">
            <div className="max-w-2xl mb-12">
              <span className="section-label">The Solution</span>
              <h2 className="section-heading mb-4">Autonomous governance built for fintech scale.</h2>
              <p className="section-sub">Four integrated modules that replace spreadsheets with a continuous, self-healing governance loop.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {capabilities.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="card p-7" style={{ borderColor: "#dcd6ce" }}>
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg shrink-0" style={{ backgroundColor: "#e8f0fe" }}>
                        <Icon className="w-4 h-4" style={{ color: "#00297a" }} />
                      </div>
                      <div>
                        <div className="text-sm font-bold mb-1.5" style={{ color: "#1a1a2e" }}>{c.title}</div>
                        <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{c.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance callout */}
        <section className="section-slim">
          <div className="container mx-auto px-10 max-w-4xl">
            <div className="card p-10 text-center" style={{ borderColor: "#dcd6ce", background: "linear-gradient(135deg, #f0f4ff 0%, #faf9f7 100%)" }}>
              <div className="flex justify-center gap-3 mb-6 flex-wrap">
                {["PCI DSS 4.0", "SOC 2 Type II", "ISO 27001"].map((badge, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#e8f0fe", color: "#00297a", border: "1px solid #bfcfee" }}>{badge}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Compliance as a byproduct, not a project.</h3>
              <p className="mb-6 max-w-lg mx-auto" style={{ color: "#4a5568", lineHeight: 1.7 }}>
                Unkov collects evidence continuously. When your auditor asks for 90 days of access log history, you generate it in seconds — not weeks.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {["Continuous evidence collection", "Automated Req. 7 & 8 enforcement", "Audit-ready reports on demand"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#1a1a2e" }}>
                    <CheckCircle className="w-4 h-4" style={{ color: "#059669" }} /> {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #00297a 0%, #0041a8 100%)", padding: "5rem 1.5rem" }}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              Ready to close your next audit in hours, not weeks?
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              See your own Identity Drift dashboard in 30 minutes — live in your environment.
            </p>
            <button onClick={() => navigate("/early-access")} className="btn-primary" style={{ backgroundColor: "#ffffff", color: "#00297a", border: "none", padding: "0.875rem 2.5rem", fontSize: "1rem" }}>
              Apply for Pilot — Defined Success Metrics, No Pilot Purgatory <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
