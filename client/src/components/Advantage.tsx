import { useState } from "react";

const rows = [
  { cap: "Architecture",         legacy: "Relational database (flat lists)",    unkov: "Graph-native Social Fabric" },
  { cap: "Identity scope",       legacy: "Human-centric only",                  unkov: "Unified human + NHI + AI agents" },
  { cap: "Threat detection",     legacy: "Reactive rule-based alerts",          unkov: "Intent Engine — predictive, pre-emptive" },
  { cap: "Remediation",          legacy: "Manual approval queues",              unkov: "Autonomous Kill-Switch at machine speed" },
  { cap: "Deployment",           legacy: "Months of professional services",     unkov: "< 30 minutes, zero-touch" },
  { cap: "Permission model",     legacy: "Static role assignments",             unkov: "Policy-as-Code Micro-Token gating" },
  { cap: "Network intelligence", legacy: "Siloed, per-customer only",           unkov: "Cross-tenant Bot Reputation Score" },
  { cap: "Identity root",        legacy: "Software layer only",                 unkov: "Hardware-rooted (TPM / Secure Enclave)" },
  { cap: "Compliance",           legacy: "Manual audit scrambles",              unkov: "System of Record — one-click SEC/HHS export" },
  { cap: "NHI governance",       legacy: "Afterthought / bolt-on",              unkov: "Native, first-class from day one" },
];

const anchors = [
  {
    number: "01",
    title: "Permission Gate — The Action-Interference Moat",
    color: "#dc2626",
    bg: "#fff0f0",
    body: "Most competitors are sidecar tools — they watch from the sidelines and send alerts. Unkov is the Permission Gate. Every AI agent must request a Micro-Token from Unkov before it can move money in Fintech or access a patient record in Healthcare. Once Unkov is the Green Light inside a company's automated workflows, it is operationally impossible to rip out. Remove Unkov and the entire AI workforce stops moving.",
    quote: "They can't delete Unkov without shutting down their entire agentic operations.",
  },
  {
    number: "02",
    title: "Cross-Sector Intelligence — The Network Effect Moat",
    color: "#d97706",
    bg: "#fffbeb",
    body: "Unkov creates an anonymous Bot Reputation Score across every customer. If a specific AI agent type starts acting toxic in a Fintech firm in London, Unkov's Intent Engine automatically throttles that same agent type for a hospital in New York — before it strikes. A new startup can't copy this because they don't have data from hundreds of companies. The more customers Unkov has, the safer every individual customer becomes.",
    quote: "Our moat compounds with every customer. A startup with one customer can never compete with a network of thousands.",
  },
  {
    number: "03",
    title: "Hardware-Level Identity — The Technical Depth Moat",
    color: "#0061d4",
    bg: "#eff6ff",
    body: "Competitors like Okta stop at the software layer. Unkov roots AI agent identity in the TPM (Trusted Platform Module) or Secure Enclave of the server they run on — creating a Physical Identity for digital bots. This prevents Agent Cloning and Sleeper Agent attacks that software-only tools miss entirely. It's a technical moat no one in the market has crossed.",
    quote: "We're the only platform that gives AI agents a physical identity. Software-only tools are blind to hardware-level spoofing.",
  },
  {
    number: "04",
    title: "Compliance Gravity — The System-of-Record Moat",
    color: "#059669",
    bg: "#f0fdf4",
    body: "Unkov becomes the official System of Record for auditors. When the SEC asks a Fintech firm or HHS asks a Healthcare system for proof of AI governance, the customer hits Export from Unkov. CFOs and Legal teams hate switching compliance tools. If Unkov is the reason they passed their 2026 HIPAA or PCI audit, they will never let IT cancel the subscription.",
    quote: "CFOs don't cancel the tool that made them pass their audit. Compliance gravity is the strongest lock-in in enterprise SaaS.",
  },
];

const competitors = [
  { name: "Okta",           moat: "Human Identity",              unkovWin: "Agent Social Fabric + Hardware-Rooted Identity" },
  { name: "Entro / Astrix", moat: "NHI Discovery alerts",        unkovWin: "Intent Engine prediction + Autonomous remediation" },
  { name: "Vanta / Drata",  moat: "Static compliance checklists",unkovWin: "Autonomous Kill-Switch + Compliance-as-Byproduct" },
  { name: "Torq / Gomboc",  moat: "Reactive remediation",        unkovWin: "Predictive prevention + Permission Gate lock-in" },
  { name: "Strata.io",      moat: "Identity orchestration",       unkovWin: "Graph-native + Hardware-Rooted + Network Effect" },
];

export default function Advantage() {
  const [activeAnchor, setActiveAnchor] = useState(0);
  const [showCompetitors, setShowCompetitors] = useState(false);

  return (
    <section id="moat" className="section" style={{ backgroundColor: "#faf9f7" }}>
      <div className="container mx-auto px-10">

        <div className="max-w-2xl mb-14">
          <span className="section-label">Competitive Moat</span>
          <h2 className="section-heading mb-4">Four moats. Each one unbreakable on its own.</h2>
          <p className="section-sub">
            The strongest moat in 2026 is not a feature — it is integration and data gravity. Unkov's four structural moats compound over time and are architecturally impossible for legacy vendors to replicate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {anchors.map((a, i) => (
            <button key={i} onClick={() => setActiveAnchor(i)} className="card text-left p-7 transition-all"
              style={{ borderColor: activeAnchor === i ? a.color : "#dcd6ce", backgroundColor: activeAnchor === i ? a.bg : "#ffffff", boxShadow: activeAnchor === i ? `0 0 0 2px ${a.color}22` : "none", cursor: "pointer" }}>
              <div className="flex items-start gap-4">
                <div className="text-xs font-extrabold shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: activeAnchor === i ? a.color : "#f0ece6", color: activeAnchor === i ? "#fff" : "#4a5568" }}>
                  {a.number}
                </div>
                <div>
                  <div className="text-sm font-bold mb-2" style={{ color: "#1a1a2e" }}>{a.title}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{a.body}</p>
                  {activeAnchor === i && (
                    <div className="mt-4 pl-4 border-l-2" style={{ borderColor: a.color }}>
                      <p className="text-xs italic font-medium" style={{ color: a.color }}>"{a.quote}"</p>
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-14">
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Why legacy vendors cannot catch up.</h3>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#3d4759" }}>
              Every row where Unkov wins is not a feature gap — it is an architectural consequence. These are not things competitors can copy in a sprint.
            </p>
            <div className="space-y-4">
              {[
                { title: "The Permission Gate creates operational lock-in", body: "Once Unkov is the Green Light for AI agents, removing it means halting operations. Stronger than data or workflow integrations." },
                { title: "The network effect compounds every quarter", body: "Cross-tenant Bot Reputation Scores mean every new customer makes every existing customer safer. You cannot buy this with engineering alone." },
                { title: "Hardware identity is a 12-month technical lead", body: "TPM and Secure Enclave integration is an engineering platform, not a feature. No named competitor has announced this capability." },
                { title: "Compliance gravity is the stickiest lock-in in SaaS", body: "CFOs and Legal teams do not cancel the tool that made them pass their HIPAA or PCI audit. Security spend converts to a protected compliance budget line." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: "#00297a" }} />
                  <div>
                    <span className="text-sm font-semibold" style={{ color: "#1a1a2e" }}>{item.title} — </span>
                    <span className="text-sm" style={{ color: "#3d4759" }}>{item.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card overflow-hidden" style={{ borderColor: "#dcd6ce" }}>
            <div className="px-5 py-3.5 border-b" style={{ backgroundColor: "#f0ece6", borderColor: "#dcd6ce" }}>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#3d4759" }}>Capability</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "#6b7280" }}>Legacy IAM</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-center" style={{ color: "#00297a" }}>Unkov</div>
              </div>
            </div>
            {rows.map((row, i) => (
              <div key={i} className="grid grid-cols-3 gap-2 px-5 py-3"
                style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e7eb" : "none", backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf9f7" }}>
                <div className="text-xs font-semibold" style={{ color: "#3d3d5c" }}>{row.cap}</div>
                <div className="text-xs text-center" style={{ color: "#6b7280" }}>{row.legacy}</div>
                <div className="text-xs font-semibold text-center" style={{ color: "#00297a" }}>{row.unkov}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <button onClick={() => setShowCompetitors(!showCompetitors)}
            className="text-sm font-semibold mb-5 flex items-center gap-2"
            style={{ color: "#0061d4", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            {showCompetitors ? "▲" : "▼"} How Unkov beats named competitors
          </button>
          {showCompetitors && (
            <div className="card overflow-hidden" style={{ borderColor: "#dcd6ce" }}>
              <div className="px-5 py-3.5 border-b" style={{ backgroundColor: "#f0ece6", borderColor: "#dcd6ce" }}>
                <div className="grid grid-cols-3 gap-2">
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#3d4759" }}>Competitor</div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6b7280" }}>Their Moat</div>
                  <div className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#00297a" }}>Unkov's Superior Moat</div>
                </div>
              </div>
              {competitors.map((c, i) => (
                <div key={i} className="grid grid-cols-3 gap-2 px-5 py-3"
                  style={{ borderBottom: i < competitors.length - 1 ? "1px solid #e5e7eb" : "none", backgroundColor: i % 2 === 0 ? "#ffffff" : "#faf9f7" }}>
                  <div className="text-xs font-bold" style={{ color: "#1a1a2e" }}>{c.name}</div>
                  <div className="text-xs" style={{ color: "#6b7280" }}>{c.moat}</div>
                  <div className="text-xs font-semibold" style={{ color: "#00297a" }}>{c.unkovWin}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="card p-10 text-center" style={{ background: "linear-gradient(135deg, #00297a 0%, #0041a8 100%)", border: "none" }}>
          <p className="text-xl font-bold text-white mb-2" style={{ letterSpacing: "-0.02em" }}>
            "The moat is not a feature. It is integration, data gravity, and hardware depth."
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            Permission Gate lock-in + Cross-sector network effect + Hardware-rooted identity + Compliance gravity.
            Four compounding moats that grow stronger with every customer, every deployment, every quarter.
          </p>
        </div>

      </div>
    </section>
  );
}
ENDTSX
echo "Advantage.tsx updated"