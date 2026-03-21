export default function Market() {
  return (
    <section id="market" className="section" style={{ backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce", borderBottom: "1px solid #dcd6ce" }}>
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mb-14">
          <span className="section-label">Market</span>
          <h2 className="section-heading mb-4">A $30B+ market at an inflection point</h2>
          <p className="section-sub">Unkov operates at the intersection of Identity Governance and Identity Threat Detection — united by AI agent proliferation.</p>
        </div>
        <div className="grid md:grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {[
            { v: "$10.7B",  l: "IGA market (2026)",       n: "Regulatory mandates + NHI explosion", hi: false },
            { v: "$19.66B", l: "ITDR market (2026)",      n: "Behavior-based anomaly detection",     hi: false },
            { v: "~$30B+",  l: "Combined TAM",            n: "AI agent proliferation + breach cost escalation", hi: true },
          ].map((m, i) => (
            <div key={i} className="card p-7" style={{ borderColor: m.hi ? "#c2d4f8" : "#dcd6ce", backgroundColor: m.hi ? "#e8f0fe" : "#ffffff" }}>
              <div className="text-3xl font-bold mb-1" style={{ color: m.hi ? "#00297a" : "#1d1d1f" }}>{m.v}</div>
              <div className="text-sm font-semibold mb-1" style={{ color: "#3d3d5c" }}>{m.l}</div>
              <p className="text-xs" style={{ color: "#4a5568" }}>{m.n}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { label: "Primary",   name: "Mid-Market Accelerator", desc: "500–19,000 employees. Fastest-growing IGA segment. Average 1,062 apps per firm but no budget for legacy professional services." },
            { label: "Secondary", name: "Agent-Heavy Enterprise",  desc: "Large BFSI and Technology organizations where service accounts and AI agents account for the majority of privileged actions." },
            { label: "Tertiary",  name: "Regulated Sectors",      desc: "Healthcare ($7.42M average breach cost) and Retail (PCI DSS 4.0). Automated SOC 2 / HIPAA evidence is now a procurement requirement." },
          ].map((seg, i) => (
            <div key={i} className="card p-6" style={{ borderColor: "#dcd6ce" }}>
              <span className="badge-blue mb-4">{seg.label}</span>
              <div className="text-sm font-semibold mb-2" style={{ color: "#1a1a2e" }}>{seg.name}</div>
              <p className="text-sm leading-relaxed" style={{ color: "#3d4759" }}>{seg.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
