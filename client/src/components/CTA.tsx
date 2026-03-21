import { ArrowRight, Mail } from "lucide-react";
import { useLocation } from "wouter";

export default function CTA() {
  const [, navigate] = useLocation();
  return (
    <section style={{ position: "relative", overflow: "hidden", padding: "clamp(2rem, 5vw, 5rem) 0", background: "linear-gradient(135deg, #00297a 0%, #0041a8 60%, #0061d4 100%)" }}>
      {/* Background glow */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(0,97,212,0.4) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse at 20% 80%, rgba(0,41,122,0.5) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.3rem 1rem", borderRadius: "9999px", backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", marginBottom: "1.5rem" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#6ee7b7" }} />
          <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", letterSpacing: "0.04em" }}>Zero professional services required</span>
        </div>

        <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em", marginBottom: "1rem", lineHeight: 1.15 }}>
          Become the Permission Gate.<br />Own the agentic identity layer.
        </h2>
        <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", marginBottom: "2.5rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
          Live Identity Drift dashboard in 30 minutes. Unlike Okta, Entro, or Vanta — Unkov acts, not just alerts. Permission Gate lock-in, Bot Reputation Network, hardware-rooted identity, and Compliance Gravity as your SEC and HHS System of Record. Defined success metrics from day one — no pilot purgatory. Pilot fee credited to Year 1 in full.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => navigate("/early-access")}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", backgroundColor: "#ffffff", color: "#00297a", fontWeight: 700, borderRadius: "9999px", fontSize: "0.9375rem", border: "none", cursor: "pointer", transition: "box-shadow 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Apply for Pilot <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
          <a href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.875rem 2rem", backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff", fontWeight: 600, borderRadius: "9999px", fontSize: "0.9375rem", textDecoration: "none", border: "2px solid rgba(255,255,255,0.35)", transition: "background-color 0.2s, transform 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <Mail style={{ width: 16, height: 16 }} /> info@unkov.com
          </a>
        </div>

        {/* Trust strip */}
        <div style={{ display: "flex", justifyContent: "center", gap: "clamp(1rem,2vw,2rem)", flexWrap: "wrap", marginTop: "3rem" }}>
          {[["97%", "Decisions automated"], ["< 30 min", "First live dashboard"], ["100%", "Pilot retention"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffffff", letterSpacing: "-0.03em" }}>{v}</div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", marginTop: "0.125rem" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
