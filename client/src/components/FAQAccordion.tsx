import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does Unkov differ from Okta, Entro, Vanta, and other competitors?",
    a: "Okta and SailPoint are strong at authentication and human user lifecycle management. Unkov focuses on continuous access governance across all identity types — humans, bots, AI agents, and service accounts — with autonomous enforcement rather than manual review queues. Most customers run Unkov alongside their existing IAM rather than replacing it."
  },
  {
    q: "Does Unkov replace our existing IAM, or sit on top of it?",
    a: "Either works. Unkov operates as a standalone platform or connects to your existing Okta, SailPoint, or Azure AD. Most teams start in overlay mode — you're live in under 30 minutes without changing any existing workflows."
  },
  {
    q: "What does the pilot process look like?",
    a: "Zero-Touch Observation Mode delivers a live Identity Drift dashboard within 30 minutes. No professional services, no integration project. You see your own environment from day one."
  },
  {
    q: "What is an Identity Node?",
    a: "Any active entity under governance: a human employee, AI agent, bot, service account, or API key. Pricing scales with your total node count."
  },
  {
    q: "Which compliance frameworks does Unkov support?",
    a: "Unkov automates evidence collection for PCI DSS 4.0 (Requirements 7 & 8), HIPAA (§ 164.312(a)), and SOC 2 Type II. Evidence is collected continuously in normal operation — not assembled before an audit."
  },
  {
    q: "How does Unkov handle AI agents and service accounts?",
    a: "The Identity Social Fabric automatically discovers every non-human identity in your environment — service accounts, API keys, CI/CD credentials, AI agent tokens — and governs them with the same rigor as human identities. Anomalous behavior triggers automated revocation without waiting for a ticket."
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section" style={{ padding: "7rem 0", backgroundColor: "#ffffff" }}>
      <div className="container mx-auto px-10">
        <div className="max-w-2xl mb-14">
          <span className="section-label">FAQ</span>
          <h2 className="section-heading mb-4">Common questions</h2>
          <p className="section-sub">If you don't see your question here, reach out — we respond within one business day.</p>
        </div>
        <div style={{ maxWidth: "780px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0", textAlign: "left", background: "none", border: "none", cursor: "pointer", gap: "1.5rem" }}>
                <span style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#1a1a2e", lineHeight: 1.4 }}>{faq.q}</span>
                <ChevronDown
                  style={{ width: 20, height: 20, color: "#6b7280", flexShrink: 0, transition: "transform 0.2s", transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>
              {open === i && (
                <div style={{ paddingBottom: "1.5rem" }}>
                  <p style={{ fontSize: "1rem", color: "#4a5568", lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
