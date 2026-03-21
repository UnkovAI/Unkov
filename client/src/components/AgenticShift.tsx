import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function AgenticShift() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="solution" style={{ padding: "clamp(3rem,6vw,6rem) 0", backgroundColor: "#00297a", overflow: "hidden", position: "relative" }}>
      {/* Subtle gradient overlays */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 75% 50%, rgba(0,97,212,0.35) 0%, transparent 55%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 80%, rgba(0,21,80,0.5) 0%, transparent 50%)", pointerEvents: "none" }} />

      <div className="container mx-auto px-10" ref={ref} style={{ position: "relative", zIndex: 1, opacity: isVisible ? 1 : 0, transform: isVisible ? "none" : "translateY(24px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "1.5rem", padding: "0.25rem 1rem", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.15)" }}>The Solution</span>

          <h2 style={{ fontSize: "clamp(2rem,4.5vw,3.25rem)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#ffffff", marginBottom: "1.5rem" }}>
            The Permission Gate your<br />AI workforce cannot operate without.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 4rem" }}>
            Unkov becomes the Green Light for every AI agent in your environment. Connects to AWS, Okta, Azure AD — or runs standalone. Within 30 minutes, every identity is visible, scored, and governed. Remove Unkov and your agentic operations stop.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "1.25rem", overflow: "hidden" }}>
            {[
              { stat: "Moat 1", label: "Permission Gate",          sub: "AI agents need Micro-Token to act"    },
              { stat: "Moat 2", label: "Bot Reputation Network",   sub: "Cross-sector threat intelligence"    },
              { stat: "Moat 3", label: "Hardware Identity",        sub: "TPM / Secure Enclave rooted"         },
              { stat: "Moat 4", label: "Compliance Gravity",       sub: "System of Record for SEC / HHS"      },
            ].map((s, i) => (
              <div key={i} style={{ padding: "2.25rem 1.75rem", backgroundColor: "rgba(255,255,255,0.05)", textAlign: "center", transition: "background-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)")}>
                <div style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.04em", marginBottom: "0.625rem" }}>{s.stat}</div>
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: "0.25rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
