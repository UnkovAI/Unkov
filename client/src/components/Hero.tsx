import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export default function Hero() {
  return (
    <section style={{
      paddingTop: "7rem",
      paddingBottom: "5rem",
      backgroundColor: "#faf9f7",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Background gradient blob */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "60%", height: "120%", background: "radial-gradient(ellipse at top right, #dde8ff 0%, #f0eee8 40%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: "20%", width: "50%", height: "40%", background: "radial-gradient(ellipse at bottom, rgba(0,97,212,0.06) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(2rem,4vw,4rem)", alignItems: "center" }} className="grid-hero">

          {/* Left */}
          <div>
            {/* Badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 0.875rem", borderRadius: "9999px", backgroundColor: "#e8f0fe", border: "1px solid #bfcfee", marginBottom: "1.75rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0061d4" }} />
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#00297a", letterSpacing: "0.04em", textTransform: "uppercase" }}>The Permission Gate for the Agentic Enterprise</span>
            </div>

            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.875rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.04em", color: "#0a0f1e", marginBottom: "1.5rem" }}>
              Identity orchestration<br />
              <span style={{ background: "linear-gradient(90deg, #0061d4 0%, #00297a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>for the agentic era.</span>
            </h1>

            <p style={{ fontSize: "1.125rem", color: "#3d4759", lineHeight: 1.8, marginBottom: "2.25rem", maxWidth: "32rem" }}>
              Every AI agent requests a Micro-Token from Unkov before acting — the Permission Gate competitors cannot replicate. Cross-sector Bot Reputation Network, hardware-rooted identity, and Compliance Gravity as System of Record. Live dashboard in 30 minutes.
            </p>

            <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginBottom: "3rem" }}>
              <button onClick={() => window.location.href = "/early-access"} className="btn-primary"
                style={{ fontSize: "0.9375rem", padding: "0.8rem 1.875rem" }}>
                Apply for Pilot <ArrowRight style={{ width: 16, height: 16 }} />
              </button>
              <button onClick={() => document.getElementById("solution")?.scrollIntoView({ behavior: "smooth" })} className="btn-ghost"
                style={{ fontSize: "0.9375rem", padding: "0.8rem 1.875rem" }}>
                See How It Works
              </button>
            </div>

            {/* Trust icons */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.75rem", paddingTop: "2rem", borderTop: "1px solid #d8dde6", flexWrap: "wrap" }}>
              {[
                { icon: Zap,    label: "< 30 min",  sub: "Time to live dashboard" },
                { icon: Shield, label: "97%",        sub: "Decisions automated"   },
                { icon: Users,  label: "144:1",      sub: "NHI-to-human ratio"    },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={sub} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "0.75rem", backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon style={{ width: 14, height: 14, color: "#0061d4" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#00297a", letterSpacing: "-0.02em", lineHeight: 1 }}>{label}</div>
                    <div style={{ fontSize: "0.6875rem", color: "#6b7280", marginTop: "0.125rem" }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — dashboard widget */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }} className="hidden md:flex">
            {/* Main card */}
            <div style={{ backgroundColor: "#ffffff", border: "1px solid #d8dde6", borderRadius: "1.25rem", padding: "1.75rem", boxShadow: "0 20px 60px rgba(0,41,122,0.12), 0 4px 16px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                <div>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.25rem" }}>Identity Drift Score</div>
                  <div style={{ fontSize: "2.25rem", fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.04em", lineHeight: 1 }}>87 <span style={{ fontSize: "1rem", color: "#9ca3af", fontWeight: 500 }}>/100</span></div>
                </div>
                <div style={{ padding: "0.375rem 0.75rem", borderRadius: "9999px", backgroundColor: "#d1fae5", border: "1px solid #6ee7b7" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#059669" }}>↑ 12 pts</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "2.75rem", marginBottom: "0.5rem" }}>
                {[35, 60, 42, 78, 52, 88, 65, 82, 58, 92, 72, 87].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", backgroundColor: i === 11 ? "#0061d4" : i >= 9 ? "#bfcfee" : "#e8f0fe", transition: "background-color 0.2s" }} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.6875rem", color: "#d1d5db" }}>30 days ago</span>
                <span style={{ fontSize: "0.6875rem", color: "#d1d5db" }}>Today</span>
              </div>
            </div>

            {/* Stat cards */}
            {[
              { label: "Ghost bots purged",           val: "12", color: "#059669", bg: "#d1fae5", border: "#6ee7b7" },
              { label: "Toxic combinations resolved",  val: "3",  color: "#0061d4", bg: "#e8f0fe", border: "#bfcfee" },
              { label: "Non-human identities governed",val: "144",color: "#00297a", bg: "#dbeafe", border: "#93c5fd" },
            ].map(item => (
              <div key={item.label} style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "0.875rem", padding: "0.875rem 1.125rem", display: "flex", alignItems: "center", justifyContent: "space-between", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, transform 0.15s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "none"; }}>
                <span style={{ fontSize: "0.875rem", color: "#374151", fontWeight: 500 }}>{item.label}</span>
                <span style={{ fontSize: "1rem", fontWeight: 800, color: item.color, backgroundColor: item.bg, border: `1px solid ${item.border}`, padding: "0.125rem 0.625rem", borderRadius: "0.75rem" }}>{item.val}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
