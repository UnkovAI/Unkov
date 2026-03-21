import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, Brain, Zap, BarChart3, ArrowRight, CheckCircle, Clock, Shield, TrendingDown } from "lucide-react";
import { HowItWorksHeroWidget, HeroWidgetStyles } from "@/components/HeroWidget";
import { useLocation } from "wouter";

const phases = [
  {
    icon: Search, n: "01", color: "#0061d4", bg: "#e8f0fe",
    title: "Discover",
    subtitle: "Identity Social Fabric",
    desc: "Zero-touch scan builds a real-time graph — every human, bot, AI agent, and resource, mapped automatically. Live Identity Drift dashboard in under 30 minutes with no professional services.",
    outcome: "Complete identity inventory",
    metric: "< 30 min",
    metricLabel: "to first live dashboard",
    href: "/features#identity-social-fabric",
  },
  {
    icon: Brain, n: "02", color: "#10b981", bg: "#d1fae5",
    title: "Analyze",
    subtitle: "Contextual Intelligence",
    desc: "The Intent Engine uses Peer-Clone ML to predict exactly what access each identity needs — before they request it. New hires onboarded in under 10 minutes with zero IT intervention.",
    outcome: "Automated access prediction",
    metric: "97%",
    metricLabel: "of decisions fully automated",
    href: "/features#intent-engine",
  },
  {
    icon: Zap, n: "03", color: "#f59e0b", bg: "#fef3c7",
    title: "Remediate",
    subtitle: "Autonomous Engine",
    desc: "Findings become actions at machine speed — Kill-Switch on rogue bots, instant orphan purge, toxic link revocation. Configurable from recommend-only to fully autonomous.",
    outcome: "Zero-touch remediation",
    metric: "90%",
    metricLabel: "reduction in manual review",
    href: "/features#autonomous-remediation-engine",
  },
  {
    icon: BarChart3, n: "04", color: "#8b5cf6", bg: "#ede9fe",
    title: "Monitor",
    subtitle: "Continuous Loop",
    desc: "Governance never stops. Continuous drift detection, anomaly scoring, and automated compliance evidence collection — every change scored the moment it happens.",
    outcome: "Always-on compliance",
    metric: "80 days",
    metricLabel: "faster breach detection",
    href: "/features#predictive-compliance",
  },
];

const principles = [
  { icon: Shield, title: "Least-privilege at every step", desc: "Each phase requires only the minimum access needed. Discover is read-only. Only Remediate writes — and only what's explicitly scoped." },
  { icon: Clock, title: "Live in 30 minutes", desc: "No professional services, no multi-week onboarding. Connect your identity providers and see your first drift dashboard immediately." },
  { icon: TrendingDown, title: "Human review drops to 3%", desc: "The Intent Engine handles 97% of access decisions automatically. Humans only review genuine anomalies — not 50,000-row spreadsheets." },
  { icon: CheckCircle, title: "Fully auditable AI", desc: "Every automated decision includes a complete reasoning trail — policy references, peer-clone data, risk delta — for any audit." },
];

export default function HowItWorks() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <HeroWidgetStyles />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)", backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
                <span className="section-label" style={{ marginBottom: "1.25rem", display: "inline-block" }}>How It Works</span>
                <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
                  Continuous Governance<br />at Machine Speed.
                </h1>
                <p className="section-sub">Four phases. Least-privilege access at every step. The loop runs autonomously 24/7 — no human in the critical path.</p>
                <button onClick={() => navigate("/features")} className="btn-primary mt-6 inline-flex items-center gap-2 text-sm">
                  Explore full feature details <ArrowRight className="w-4 h-4" />
                </button>
          </div>
        </section>

        {/* Phase cards */}
        <section className="section-slim">
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-2" style={{ gap: "1rem" }}>
              {phases.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div key={i} className="card overflow-hidden" style={{ borderColor: "#dcd6ce" }}>
                    <div style={{ padding: "1.75rem 1.75rem 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: phase.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                          <Icon style={{ width: 18, height: 18, color: phase.color }} />
                        </div>
                        <div>
                          <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#6b7280", letterSpacing: "0.1em", textTransform: "uppercase" }}>Phase {phase.n}</div>
                          <h2 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#1a1a2e", lineHeight: 1.2 }}>{phase.title} <span style={{ color: "#6b7280", fontWeight: 400, fontSize: "0.85rem" }}>— {phase.subtitle}</span></h2>
                        </div>
                      </div>
                      <p style={{ fontSize: "0.9rem", color: "#3d4759", lineHeight: 1.7, marginBottom: "1.25rem" }}>{phase.desc}</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.75rem", borderTop: "1px solid #f0ece6", backgroundColor: "#faf9f7" }}>
                      <div>
                        <div style={{ fontSize: "1.375rem", fontWeight: 800, color: phase.color, letterSpacing: "-0.02em" }}>{phase.metric}</div>
                        <div style={{ fontSize: "0.68rem", color: "#6b7280", marginTop: "0.1rem" }}>{phase.metricLabel}</div>
                      </div>
                      <button onClick={() => navigate(phase.href)} style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8rem", fontWeight: 600, color: phase.color, background: "none", border: "none", cursor: "pointer", padding: "0.375rem 0" }}>
                        Deep dive <ArrowRight style={{ width: 13, height: 13 }} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-slim" style={{ backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce" }}>
          <div className="container mx-auto px-10">
            <div className="max-w-xl mb-6">
              <span className="section-label">Design Principles</span>
              <h2 className="section-heading">Built for zero trust, not retrofitted</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {principles.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="card p-7" style={{ borderColor: "#dcd6ce" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.875rem" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon style={{ width: 16, height: 16, color: "#00297a" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.375rem" }}>{p.title}</div>
                        <p style={{ fontSize: "0.875rem", color: "#3d4759", lineHeight: 1.7 }}>{p.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-slim" style={{ backgroundColor: "#faf9f7", borderTop: "1px solid #dcd6ce" }}>
          <div className="container mx-auto px-10 text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-[#1d1d1f] mb-3">Ready to see it live?</h2>
            <p className="section-sub mb-6">Live Identity Drift dashboard in under 30 minutes. No credit card, no professional services.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/early-access" className="btn-primary">Apply for Pilot</a>
              <button onClick={() => navigate("/features")} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.625rem 1.375rem", borderRadius: "0.75rem", border: "1px solid #dcd6ce", backgroundColor: "transparent", color: "#3d4759", fontWeight: 600, fontSize: "0.9rem", cursor: "pointer" }}>
                Explore all features <ArrowRight style={{ width: 14, height: 14 }} />
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
