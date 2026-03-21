import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight } from "lucide-react";

const tabs = ["How it's different", "By role"] as const;

const anchors = [
  { number: "01", color: "#0061d4", title: "Permission Gate — not a sidecar",      body: "Competitors watch from the sidelines and send alerts. Unkov is the Green Light. Every AI agent requests a Micro-Token from Unkov before it can move money or access sensitive data. Once embedded in workflows, Unkov is operationally impossible to remove — the entire agentic workforce depends on it." },
  { number: "02", color: "#059669", title: "Zero professional services required",   body: "Traditional IAM deployments require months of consulting. Unkov's Zero-Touch Observation Mode connects to your environment and delivers a live Identity Drift dashboard in under 30 minutes — no SOW, no integration project, no risk." },
  { number: "03", color: "#f59e0b", title: "Cross-sector Bot Reputation Network",   body: "Unkov builds an anonymous Bot Reputation Score across every customer. When an AI agent behaves toxically in a London Fintech firm, Unkov pre-emptively throttles that agent type for a New York hospital — before it strikes. This network effect is impossible for new entrants to replicate." },
  { number: "04", color: "#8b5cf6", title: "Intent Engine + Bot Reputation Network", body: "The Intent Engine learns from live behavioral patterns and builds a cross-sector Bot Reputation Score across all customers. When an agent acts toxically at one customer, all customers are protected. Hardware-rooted identity via TPM and Secure Enclave prevents Agent Cloning. In Healthcare, Patient Data Lineage proves exactly which agent touched which record — the moat that wins HIPAA audits." },
];

const personas = [
  { role: "CISO",         color: "#dc2626", headline: "Stop lateral movement before it becomes a breach.",   desc: "The moment a bot behaves anomalously, Unkov revokes it — autonomously, with full audit trail. Unlike Entro or Vanta which only alert, Unkov acts. No alert fatigue. No waiting for a ticket." },
  { role: "CIO / IT VP",  color: "#0061d4", headline: "Eliminate the access review backlog.",               desc: "120+ hours of quarterly spreadsheet work, gone. New hires are provisioned in under 10 minutes. Your team does security work, not data entry." },
  { role: "CFO",          color: "#059669", headline: "System of Record for every audit.",                   desc: "When the SEC or HHS asks for AI governance proof, your team hits Export from Unkov. SOC 2, HIPAA, and PCI DSS evidence collected continuously — audit prep becomes a single click, not a multi-week scramble." },
];

export default function WhyUnkov() {
  const [, navigate] = useLocation();
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("How it's different");

  return (
    <section style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0" }}>
      <div className="container mx-auto px-10">
        <div style={{ maxWidth: "520px", marginBottom: "2.5rem" }}>
          <span className="section-label">How We're Different</span>
          <h2 className="section-heading">Why Unkov works differently.</h2>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #e5e7eb", marginBottom: "2.5rem" }}>
          {tabs.map(tab => (
            <button key={tab} type="button" onClick={() => setActiveTab(tab)}
              style={{ padding: "0.75rem 1.5rem", fontSize: "0.9375rem", fontWeight: 600, border: "none", borderBottom: `2px solid ${activeTab === tab ? "#00297a" : "transparent"}`, background: "none", color: activeTab === tab ? "#00297a" : "#6b7280", cursor: "pointer", transition: "all 0.15s", marginBottom: "-1px" }}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "How it's different" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", backgroundColor: "#e5e7eb", borderRadius: "0.875rem", overflow: "hidden" }}>
            {anchors.map((a, i) => (
              <div key={i} style={{ backgroundColor: "#ffffff", padding: "1.5rem 1.75rem", transition: "background-color 0.2s" }} onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#f8faff")} onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffffff")}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.875rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 800, color: a.color }}>{a.number}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#111827" }}>{a.title}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.75 }}>{a.body}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "By role" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {personas.map((p, i) => (
              <div key={i} style={{ border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "1.75rem", backgroundColor: "#ffffff" }}>
                <div style={{ display: "inline-flex", alignItems: "center", padding: "0.25rem 0.875rem", borderRadius: "9999px", backgroundColor: p.color + "12", border: `1.5px solid ${p.color}33`, marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 800, color: p.color }}>{p.role}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.01em", marginBottom: "0.75rem", lineHeight: 1.4 }}>{p.headline}</h3>
                <p style={{ fontSize: "0.875rem", color: "#4b5563", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button onClick={() => navigate("/early-access")}
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9375rem", fontWeight: 600, color: "#00297a", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
            Apply for Pilot <ArrowRight style={{ width: 15, height: 15 }} />
          </button>
        </div>
      </div>
    </section>
  );
}
