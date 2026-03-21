import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { Stethoscope, Shield, Zap, BarChart3, GitBranch, CheckCircle, AlertTriangle, Clock, Database, ChevronRight } from "lucide-react";

export default function SolutionHealthcare() {
  const [, navigate] = useLocation();

  const challenges = [
    { icon: AlertTriangle, title: "$7.42M Average Breach Cost",      desc: "Healthcare leads all industries in breach cost. Orphaned accounts from departing staff are the #1 attack vector. And in 2026, AI agents accessing ePHI without proper governance are the fastest-growing new threat vector." },
    { icon: Database,       title: "90-Day Orphaned Account Backlogs", desc: "When employees leave, their accounts linger — sometimes for months. Each one is a live backdoor into ePHI systems, invisible to quarterly reviews." },
    { icon: Clock,          title: "HIPAA Audit Scrambles",           desc: "Demonstrating \"minimum necessary\" access under HIPAA § 164.312(a) requires documentation teams spend weeks gathering manually — for every audit cycle." },
  ];

  const capabilities = [
    { icon: GitBranch,  title: "Permission Gate for Clinical AI",  desc: "Every AI agent that accesses ePHI must request a Micro-Token from Unkov first — the Green Light that cannot be bypassed. Zero-touch scan maps every identity across your EHR, PACS, and cloud stack. Unlike Entro or Vanta, which only alert, Unkov prevents." },
    { icon: Zap,        title: "Instant Orphan Purge",        desc: "When staff depart, access is revoked automatically within hours — not discovered in the next quarterly review three months later." },
    { icon: Shield,     title: "HHS System of Record",        desc: "§ 164.312(a) minimum-necessary enforcement runs continuously. When HHS or a HIPAA auditor asks for access governance proof, your team exports directly from Unkov — not a spreadsheet. CFOs and Legal never cancel the tool that passed their audit." },
    { icon: BarChart3,  title: "Patient Data Lineage + Bot Reputation",  desc: "Prove exactly which AI agent touched which patient record, when, and why — the HHS System of Record. Cross-sector Bot Reputation Network means threats detected at other Healthcare customers pre-emptively protect yours. Hardware-rooted agent identity (TPM/Secure Enclave) prevents Agent Cloning attacks that software-only tools miss." },
  ];

  const results = [
    { metric: "< 24h",  label: "To clear a 90-day orphan backlog" },
    { metric: "90%",    label: "Reduction in manual review labor"  },
    { metric: "$7.42M", label: "Average breach cost avoided"       },
    { metric: "100%",   label: "Pilot customer renewal rate"       },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #00297a 0%, #005a8e 100%)", padding: "clamp(2.5rem,5vw,5rem) 1rem clamp(2rem,4vw,4rem)" }}>
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-white/75 uppercase tracking-widest">Healthcare & Life Sciences</span>
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-5" style={{ letterSpacing: "-0.03em", lineHeight: 1.1, maxWidth: "32rem" }}>
              HIPAA Compliance — Automated End-to-End.
            </h1>
            <p className="text-xl mb-8" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "36rem", lineHeight: 1.7 }}>
              Unkov closes the orphaned-account backdoors that cost healthcare $7.42M per breach — and keeps your HIPAA posture audit-ready at all times.
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
              <h2 className="section-heading mb-4">Legacy IAM can't protect ePHI at the speed of staff turnover.</h2>
              <p className="section-sub">Healthcare environments see constant identity churn — and every orphaned account is an open door to protected health information.</p>
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
              <h2 className="section-heading mb-4">Continuous governance designed for regulated healthcare.</h2>
              <p className="section-sub">From zero-touch discovery to automated remediation — Unkov runs your access governance so your team doesn't have to.</p>
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
                {["HIPAA § 164.312(a)", "SOC 2 Type II", "HITRUST CSF"].map((badge, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full text-xs font-bold" style={{ backgroundColor: "#e8f0fe", color: "#00297a", border: "1px solid #bfcfee" }}>{badge}</span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Minimum-necessary access — enforced automatically.</h3>
              <p className="mb-6 max-w-lg mx-auto" style={{ color: "#4a5568", lineHeight: 1.7 }}>
                Unkov maps who has access to what ePHI, removes excess automatically, and produces audit evidence in seconds — not the week before your OCR review.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                {["Continuous PHI access monitoring", "Automated § 164.312(a) enforcement", "OCR audit evidence on demand"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-medium" style={{ color: "#1a1a2e" }}>
                    <CheckCircle className="w-4 h-4" style={{ color: "#059669" }} /> {pt}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg, #00297a 0%, #005a8e 100%)", padding: "5rem 1.5rem" }}>
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4" style={{ letterSpacing: "-0.03em" }}>
              Clear your orphaned account backlog in under 24 hours.
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              See your own live Identity Drift dashboard in 30 minutes — no professional services, pilot fee credited to Year 1.
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
