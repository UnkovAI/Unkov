import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const problems = [
  { value: "120+", unit: "hrs/qtr", label: "Manual access review labor",  color: "#dc2626" },
  { value: "3–5",  unit: "days",    label: "New hire onboarding delay",    color: "#f59e0b" },
  { value: "241",  unit: "days",    label: "Average breach lifecycle",     color: "#7c3aed" },
];

export default function Problem() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="problem" ref={ref} style={{ padding: "clamp(2rem, 5vw, 5rem) 0", backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce", borderBottom: "1px solid #dcd6ce" }}>
      <div className="container mx-auto px-10" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(20px)", transition: "all 0.7s ease" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(1.25rem,3vw,3rem)", alignItems: "center" }}>
          <div>
            <span className="section-label">The Problem</span>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>Modern infrastructure,<br />legacy governance.</h2>
            <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: 1.75 }}>Legacy IAM tools were built for quarterly review cycles and human-only environments. Today's enterprise runs hundreds of non-human identities for every employee — and the gap is showing.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {problems.map((p, i) => (
              <div key={i} style={{ backgroundColor: "#ffffff", border: `1px solid ${p.color}22`, borderLeft: `4px solid ${p.color}`, borderRadius: "0.75rem", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "clamp(0.75rem,1.5vw,1.5rem)", flexWrap: "wrap", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s, transform 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 8px 24px ${p.color}20`; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; e.currentTarget.style.transform = "translateX(0)"; }}>
                <div style={{ minWidth: "7rem" }}>
                  <span style={{ fontSize: "clamp(1.375rem,3.5vw,2.25rem)", fontWeight: 800, color: p.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{p.value}</span>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: p.color, marginLeft: "0.25rem" }}>{p.unit}</span>
                </div>
                <span style={{ fontSize: "0.9375rem", color: "#374151", fontWeight: 500 }}>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
