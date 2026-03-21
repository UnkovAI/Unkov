import { Network, Brain, Zap, BarChart3, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const steps = [
  { icon: Network,   number: "01", color: "#0061d4", title: "Discover",  subtitle: "Identity Social Fabric",  desc: "A zero-touch scan builds a relationship graph — every human, bot, service account, and AI agent, plus every resource they touch. First live dashboard in under 30 minutes.", points: ["Automated discovery across cloud and SaaS", "Hidden bridge detection for lateral movement", "Orphaned and over-privileged account flagging"] },
  { icon: Brain,     number: "02", color: "#10b981", title: "Analyze",   subtitle: "Intent Engine",           desc: "ML clusters peer identities to predict what access each role actually needs. New hires provisioned from real peer data — not a manager's best guess.", points: ["Peer-Clone provisioning from role-equivalent peers", "Identity Heartbeat scoring on actual usage", "Usage-based rightsizing recommendations"] },
  { icon: Zap,       number: "03", color: "#f59e0b", title: "Remediate", subtitle: "Autonomous Engine",       desc: "Findings trigger automated actions — from low-touch recommendations to immediate Kill-Switch responses on anomalous bots. Configurable per policy.", points: ["Hard Kill-Switch for rogue or anomalous bots", "Automated orphaned account purge", "Human-in-the-loop escalation for high-stakes actions"] },
  { icon: BarChart3, number: "04", color: "#8b5cf6", title: "Monitor",   subtitle: "Continuous Governance",  desc: "Real-time dashboards keep your governance posture visible at all times. Compliance evidence collected automatically — no scramble before the auditor arrives.", points: ["Live Identity Drift dashboard", "Continuous PCI DSS, SOC 2, and HIPAA evidence collection", "Real-time anomaly alerting"] },
];

export default function ProductDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const step = steps[active];
  const Icon = step.icon;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive(a => (a + 1) % steps.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="section" style={{ padding: "clamp(2.5rem, 6vw, 6rem) 0", backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce", borderBottom: "1px solid #dcd6ce" }}>
      <div className="container mx-auto px-10">
        <div style={{ maxWidth: "520px", marginBottom: "3.5rem" }}>
          <span className="section-label">How It Works</span>
          <h2 className="section-heading mb-3">One continuous loop.</h2>
          <p style={{ fontSize: "1.0625rem", color: "#4a5568", lineHeight: 1.7 }}>Four phases. Runs autonomously 24/7. Click any phase to explore.</p>
        </div>

        {/* Progress bar */}
        <div style={{ display: "flex", gap: "4px", marginBottom: "2.5rem" }}>
          {steps.map((s, i) => (
            <button key={i} type="button" onClick={() => { setActive(i); setPaused(true); }}
              style={{ flex: 1, height: 3, borderRadius: 9999, border: "none", cursor: "pointer", backgroundColor: i === active ? step.color : "#d8d4ce", transition: "background-color 0.3s", padding: 0 }} />
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1.25rem,3vw,3rem)", alignItems: "start" }}>
          {/* Left — step nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {steps.map((s, i) => {
              const SI = s.icon;
              const isActive = i === active;
              return (
                <button key={i} type="button" onClick={() => { setActive(i); setPaused(true); }}
                  style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", borderRadius: "0.75rem", border: "1px solid", borderColor: isActive ? s.color + "40" : "transparent", backgroundColor: isActive ? "#ffffff" : "transparent", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "0.875rem", backgroundColor: isActive ? s.color : "#e8e4de", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 0.2s" }}>
                    <SI style={{ width: 16, height: 16, color: isActive ? "#ffffff" : "#6b7280" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: isActive ? "#1a1a2e" : "#6b7280", transition: "color 0.2s" }}>{s.number} — {s.title}</div>
                    <div style={{ fontSize: "0.75rem", color: isActive ? "#4a5568" : "#9ca3af", marginTop: "1px" }}>{s.subtitle}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right — active step detail */}
          <div key={active} style={{ backgroundColor: "#ffffff", border: "1px solid #dcd6ce", borderRadius: "1rem", padding: "2rem", animation: "fadeIn 0.3s ease" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 40, height: 40, borderRadius: "0.875rem", backgroundColor: step.color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon style={{ width: 18, height: 18, color: "#ffffff" }} />
              </div>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a2e" }}>{step.title}</div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>{step.subtitle}</div>
              </div>
            </div>
            <p style={{ fontSize: "0.9375rem", color: "#3d4759", lineHeight: 1.75, marginBottom: "1.5rem" }}>{step.desc}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {step.points.map((pt, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: step.color, flexShrink: 0 }} />
                  <span style={{ fontSize: "0.875rem", color: "#1a1a2e" }}>{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } } @media (max-width: 767px) { .product-demo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
