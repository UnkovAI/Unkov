import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Network, Brain, Zap, BarChart3, Shield, Smartphone, CheckCircle, X, Lock } from "lucide-react";

const W = "#ffffff";
const P = "#f6f8fa";
const B = "#dcd6ce";
const H = "#1d1d1f";
const T = "#3d4759";
const M = "#374151";
const S = "#4b5563";
const A = "#00297a";
const AL = "#e8f0fe";

const accessColors: Record<string, { bg: string; text: string; border: string }> = {
  "Read-Only / Auditor":                    { bg: "#e8f0fe", text: "#00297a",  border: "#bfcfee" },
  "Telemetry & Metadata Access":            { bg: "#d1fae5", text: "#065f46",  border: "#6ee7b7" },
  "Restricted Write / Managed Remediation": { bg: "#fef3c7", text: "#92400e",  border: "#fde68a" },
  "Continuous Auditor / Event Streamer":    { bg: "#ede9fe", text: "#4c1d95",  border: "#c4b5fd" },
};

const modules = [
  {
    n: "01", icon: Network,
    title: "Identity Social Fabric", sub: "Discover — Discovery Engine",
    anchorId: "identity-social-fabric",
    accessLevel: "Read-Only / Auditor",
    accessDesc: 'Non-intrusive. Requires the ability to see the "what" and "who" — without the power to change anything.',
    desc: "A zero-touch scan builds a real-time relationship graph — mapping every human, bot, service account, and AI agent, plus every resource they touch. This is the foundation of the Permission Gate: you cannot govern what you cannot see.",
    caps: [
      "Real-time relationship mapping — humans, bots, AI agents",
      "Hidden Bridge detection for lateral movement",
      "Orphaned account discovery",
      "Identity Drift scoring",
      "Toxic Combination detection",
    ],
    stat: "< 30 min", statL: "To first live dashboard",
  },
  {
    n: "02", icon: Brain,
    title: "Intent Engine", sub: "Analyze — Contextual Intelligence",
    anchorId: "intent-engine",
    accessLevel: "Telemetry & Metadata Access",
    accessDesc: "Processes already-gathered data to find patterns and anomalies. No interaction with live production settings.",
    desc: "ML analyzes peer-clone behavioral patterns to predict exactly what access each identity needs, before they request it. Cross-tenant Bot Reputation Scores mean every new customer makes predictions more accurate for all customers — the network effect moat.",
    caps: [
      "Peer-Clone provisioning from role-equivalent colleagues",
      "Sub-10-minute new hire onboarding",
      "Usage-based Rightsizing (Admin → Read-only automatically)",
      "Fully explainable, auditable AI decisions",
    ],
    stat: "< 10 min", statL: "New hire onboarding",
  },
  {
    n: "03", icon: Zap,
    title: "Autonomous Remediation Engine", sub: "Remediate — Action Layer",
    anchorId: "autonomous-remediation-engine",
    accessLevel: "Restricted Write / Managed Remediation",
    accessDesc: "The only phase where Unkov takes action. Access is scoped strictly to Right-Sizing and Revocation commands.",
    desc: "Findings become automated actions at machine speed. The Kill-Switch is the Permission Gate in action — Unkov revokes agent access autonomously, with full audit trail, before damage occurs. This is not alerting. This is governance.",
    caps: [
      "Hard Kill-Switch on rogue bots",
      "Automated purging of orphaned accounts",
      "Instant revocation of toxic bot-link combinations",
      "Configurable escalation thresholds",
    ],
    stat: "90%", statL: "Reduction in manual review",
  },
  {
    n: "04", icon: BarChart3,
    title: "Predictive Compliance", sub: "Monitor — Continuous Loop",
    anchorId: "predictive-compliance",
    accessLevel: "Continuous Auditor / Event Streamer",
    accessDesc: 'Persistent, low-privilege "listening" to detect changes the moment they happen.',
    desc: "Unkov becomes the System of Record for SEC (Fintech) and HHS (Healthcare) AI governance audits. Continuous monitoring tracks every deployment, regulatory change, and behavioral drift. In Healthcare, Patient Data Lineage proves exactly which agent touched which patient record and why — the definitive HIPAA audit answer.",
    caps: [
      "PCI DSS 4.0 / HIPAA / SOC 2 monitoring",
      "Automated evidence collection",
      "Drift detection — real-time identity change alerts",
      "Immutable audit snapshots for auditors",
    ],
    stat: "80 days", statL: "Faster breach detection",
  },
];

const roadmap = [
  { icon: Shield,     title: "Compliance Autopilot",            when: "Year 2", desc: "Auto-generates SOC 2, HIPAA, and PCI DSS 4.0 evidence packages continuously." },
  { icon: BarChart3,  title: "Cross-Tenant Threat Intelligence", when: "Year 2", desc: "Anonymized behavioral anomaly aggregation — early warning of novel attack patterns." },
  { icon: Smartphone, title: "Mobile Alerts & Approvals",        when: "Year 3", desc: "Native app for real-time alerts and one-touch manager approvals." },
];

const comp = [
  { f: "Architecture",               u: "Graph-native architecture", s: "Relational",          o: "Relational",     c: "Relational" },
  { f: "Identity scope",             u: "Human + non-human",      s: "Human-centric",        o: "Human-centric",  c: "Privileged only" },
  { f: "Deployment",                 u: "< 30 min zero-touch",    s: "Months",               o: "Weeks",          c: "Months" },
  { f: "NHI governance",             u: true,    s: false, o: false, c: "partial" },
  { f: "Lateral movement detection", u: true,    s: false, o: false, c: false },
  { f: "Peer-clone provisioning",    u: true,    s: false, o: false, c: false },
];

function Cell({ v }: { v: string | boolean | "partial" }) {
  if (v === true)      return <CheckCircle className="w-4 h-4 mx-auto" style={{ color: A }} />;
  if (v === false)     return <X className="w-4 h-4 mx-auto" style={{ color: "#c4b8ae" }} />;
  if (v === "partial") return <span style={{ color: S, fontSize: "0.875rem" }}>Partial</span>;
  return <span style={{ color: M, fontSize: "0.875rem" }}>{v}</span>;
}

export default function Features() {
  const [openModule, setOpenModule] = useState<number>(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setOpenModule(a => (a + 1) % modules.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: W, color: H }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ borderBottom: `1px solid ${B}`, padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)", backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <span className="section-label" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Platform</span>
            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Four modules.<br />One continuous loop.
            </h1>
            <p className="section-sub" style={{ maxWidth: "36rem" }}>
              <span style={{ fontWeight: 700, color: "#00297a" }}>Discover</span>
              <span style={{ color: "#0061d4", fontWeight: 600, margin: "0 0.35rem" }}>→</span>
              <span style={{ fontWeight: 700, color: "#00297a" }}>Analyze</span>
              <span style={{ color: "#0061d4", fontWeight: 600, margin: "0 0.35rem" }}>→</span>
              <span style={{ fontWeight: 700, color: "#00297a" }}>Remediate</span>
              <span style={{ color: "#0061d4", fontWeight: 600, margin: "0 0.35rem" }}>→</span>
              <span style={{ fontWeight: 700, color: "#00297a" }}>Monitor</span>
              {". "}Each module feeds the next, creating a self-healing identity fabric that operates at machine speed, 24/7.
            </p>
          </div>
        </section>

        {/* Core modules — interactive */}
        <section style={{ padding: "clamp(1.5rem, 3vw, 3rem) 0", backgroundColor: "#f0ece6", borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "960px" }}>

            {/* Progress bar */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "2rem" }}>
              {modules.map((mod, i) => (
                <button key={i} type="button" onClick={() => { setOpenModule(i); setPaused(true); }}
                  style={{ flex: 1, height: 3, borderRadius: 9999, border: "none", cursor: "pointer", backgroundColor: i === (openModule ?? 0) ? "#0061d4" : "#d8d4ce", transition: "background-color 0.3s", padding: 0 }} />
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1rem,2.5vw,2.5rem)", alignItems: "start" }}>
              {/* Left — step nav */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {modules.map((mod, i) => {
                  const Icon = mod.icon;
                  const isActive = i === (openModule ?? 0);
                  return (
                    <button key={i} type="button" onClick={() => { setOpenModule(i); setPaused(true); }}
                      style={{ width: "100%", textAlign: "left", padding: "1rem 1.25rem", borderRadius: "0.75rem", border: "1px solid", borderColor: isActive ? "#0061d440" : "transparent", backgroundColor: isActive ? "#ffffff" : "transparent", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "1rem" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "0.875rem", backgroundColor: isActive ? A : "#e8e4de", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background-color 0.2s" }}>
                        <Icon style={{ width: 16, height: 16, color: isActive ? "#ffffff" : "#6b7280" }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: "0.875rem", fontWeight: 700, color: isActive ? H : "#6b7280", transition: "color 0.2s" }}>{mod.n} — {mod.title}</div>
                        <div style={{ fontSize: "0.75rem", color: isActive ? S : "#9ca3af", marginTop: "1px" }}>{mod.sub}</div>
                      </div>
                      <div style={{ textAlign: "right", opacity: isActive ? 1 : 0, transition: "opacity 0.2s" }}>
                        <div style={{ fontSize: "1rem", fontWeight: 700, color: A }}>{mod.stat}</div>
                        <div style={{ fontSize: "0.6875rem", color: S }}>{mod.statL}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right — active module detail */}
              {(() => {
                const mod = modules[openModule ?? 0];
                const Icon = mod.icon;
                const ac = accessColors[mod.accessLevel];
                return (
                  <div key={openModule} style={{ backgroundColor: "#ffffff", border: `1px solid ${B}`, borderRadius: "1rem", padding: "1.75rem", animation: "fadeIn 0.3s ease" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1.25rem" }}>
                      <div style={{ width: 40, height: 40, borderRadius: "0.875rem", backgroundColor: A, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon style={{ width: 18, height: 18, color: "#ffffff" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "1rem", fontWeight: 700, color: H }}>{mod.title}</div>
                        <div style={{ fontSize: "0.75rem", color: S }}>{mod.sub}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: "0.9375rem", color: M, lineHeight: 1.75, marginBottom: "1.25rem" }}>{mod.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.25rem" }}>
                      {mod.caps.map((cap, ci) => (
                        <div key={ci} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: A, flexShrink: 0 }} />
                          <span style={{ fontSize: "0.875rem", color: H }}>{cap}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ paddingTop: "1rem", borderTop: `1px solid ${B}` }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.375rem" }}>
                        <Lock style={{ width: 11, height: 11, color: ac.text }} />
                        <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: S }}>Access Level</span>
                      </div>
                      <div style={{ display: "inline-flex", fontSize: "0.8125rem", fontWeight: 700, padding: "0.2rem 0.75rem", borderRadius: 9999, backgroundColor: ac.bg, color: ac.text, border: `1px solid ${ac.border}` }}>
                        {mod.accessLevel}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }`}</style>
        </section>

        {/* Competitive comparison */}
        <section style={{ padding: "clamp(1.5rem, 3vw, 3rem) 0" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span className="section-label">How We're Different</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: H, marginBottom: "0.375rem" }}>Why Unkov works differently.</h2>
              <p style={{ fontSize: "0.9375rem", color: M, maxWidth: "36rem" }}>Architectural decisions made from day one that change what's possible in identity governance.</p>
            </div>

            {/* Vibrant differentiator cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
              {[
                { n: "01", gradient: "linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%)", border: "#ff9999", title: "Graph-native identity model", body: "Unkov models identities as a live relationship graph — capturing connections between users, roles, and resources that a relational database can't represent.", quote: "Identity relationships are the signal. Flat lists can't see them." },
                { n: "02", gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)", border: "#fde68a", title: "Zero professional services", body: "Connects to your environment and shows a live dashboard in 30 minutes — no SOW, no integration project, no months of consulting.", quote: "Up and running before your next standup." },
                { n: "03", gradient: "linear-gradient(135deg, #0061d4 0%, #00297a 100%)", border: "#93c5fd", title: "Non-human identity first class", body: "AI agents, bots, and service accounts governed with the same rigor as human employees — not as afterthoughts. From day one.", quote: "Every identity, governed. Not just the ones with a manager." },
                { n: "04", gradient: "linear-gradient(135deg, #059669 0%, #047857 100%)", border: "#6ee7b7", title: "Intent Engine learns continuously", body: "As it observes actual usage, Peer-Clone predictions become more accurate and decisions more precise — reducing false positives over time.", quote: "The more it runs, the less you have to do." },
              ].map((a, i) => (
                <div key={i} className="card-dynamic" style={{ borderRadius: "0.875rem", border: `1px solid ${a.border}`, overflow: "hidden" }}>
                  <div style={{ background: a.gradient, padding: "1rem 1.25rem", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "rgba(255,255,255,0.6)" }}>{a.n}</span>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ffffff" }}>{a.title}</span>
                  </div>
                  <div style={{ padding: "1rem 1.25rem", backgroundColor: "#ffffff" }}>
                    <p style={{ fontSize: "0.875rem", color: M, lineHeight: 1.7, marginBottom: "0.875rem" }}>{a.body}</p>
                    <div style={{ paddingLeft: "0.875rem", borderLeft: "2px solid", borderColor: a.border }}>
                      <p style={{ fontSize: "0.8125rem", fontStyle: "italic", fontWeight: 600, color: "#374151" }}>"{a.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ border: `1px solid ${B}`, borderRadius: "0.75rem", overflow: "hidden", marginBottom: "1.25rem" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                <thead>
                  <tr style={{ backgroundColor: "#f0ece6", borderBottom: `1px solid ${B}` }}>
                    <th style={{ textAlign: "left", padding: "0.875rem 1.25rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: S }}>Capability</th>
                    <th style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: A, textAlign: "center" }}>Unkov</th>
                    <th style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: S, textAlign: "center" }}>Okta IGA</th>
                    <th style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: S, textAlign: "center" }}>SailPoint</th>
                    <th style={{ padding: "0.875rem 1rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: S, textAlign: "center" }}>CyberArk</th>
                  </tr>
                </thead>
                <tbody>
                  {comp.map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${B}`, backgroundColor: i % 2 === 0 ? W : "#fafafa", transition: "background-color 0.15s" }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#eef3ff")} onMouseLeave={e => (e.currentTarget.style.backgroundColor = i % 2 === 0 ? W : "#fafafa")}>
                      <td style={{ padding: "0.75rem 1.25rem", fontWeight: 500, color: H }}>{row.f}</td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center" }}><Cell v={row.u} /></td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center" }}><Cell v={row.s} /></td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center" }}><Cell v={row.o} /></td>
                      <td style={{ padding: "0.75rem 1rem", textAlign: "center" }}><Cell v={row.c} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ backgroundColor: "#edf1ff", border: "1px solid #c2d4f8", borderRadius: "0.75rem", padding: "1.25rem" }}>
              <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#00297a", marginBottom: "0.25rem" }}>Why the gap won't close quickly</p>
              <p style={{ fontSize: "0.875rem", color: "#3d4759", lineHeight: 1.7 }}>
                Rebuilding a relational IAM platform on a graph-native architecture would require years of engineering — a genuine structural constraint, not just a lack of investment.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ padding: "clamp(1.5rem, 3vw, 3rem) 0", backgroundColor: P, borderTop: `1px solid ${B}`, borderBottom: `1px solid ${B}` }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <div style={{ marginBottom: "1.75rem" }}>
              <span className="section-label">Roadmap</span>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: H, marginBottom: "0.375rem" }}>Coming in Year 2–3</h2>
              <p style={{ fontSize: "0.9375rem", color: M }}>Capabilities expanding as the platform scales.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {roadmap.map((r, i) => {
                const Icon = r.icon;
                return (
                  <div key={i} className="card-dynamic" style={{ backgroundColor: W, border: `1px solid ${B}`, borderRadius: "0.75rem", padding: "1.25rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "0.75rem" }}>
                      <div style={{ padding: "0.375rem", borderRadius: "0.375rem", backgroundColor: AL }}><Icon style={{ width: 14, height: 14, color: A }} /></div>
                      <span style={{ fontSize: "0.75rem", fontWeight: 700, padding: "0.125rem 0.5rem", borderRadius: 9999, backgroundColor: AL, color: A }}>{r.when}</span>
                    </div>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: H, marginBottom: "0.375rem" }}>{r.title}</div>
                    <p style={{ fontSize: "0.8125rem", color: M, lineHeight: 1.7 }}>{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


      </div>
      <Footer />
    </div>
  );
}
