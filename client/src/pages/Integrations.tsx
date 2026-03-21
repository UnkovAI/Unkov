import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Clock, Zap } from "lucide-react";

const INTEGRATIONS = [
  { cat: "Identity Providers", items: [
    { name: "Okta",               logo: "🔵", status: "live",    desc: "Full SSO + lifecycle sync",                tier: "core"  },
    { name: "Azure AD / Entra",   logo: "🪟", status: "live",    desc: "MS Graph API — real-time provisioning",    tier: "core"  },
    { name: "Google Workspace",   logo: "🔴", status: "live",    desc: "Directory sync + admin SDK",               tier: "core"  },
    { name: "Ping Identity",      logo: "🟣", status: "beta",    desc: "OAuth 2.0 / OIDC federation",             tier: "core"  },
    { name: "JumpCloud",          logo: "🟠", status: "planned", desc: "SCIM 2.0 provisioning",                   tier: "core"  },
  ]},
  { cat: "Cloud Platforms", items: [
    { name: "AWS IAM",            logo: "🟡", status: "live",    desc: "Role discovery + policy drift detection",  tier: "cloud" },
    { name: "Azure RBAC",         logo: "🔷", status: "live",    desc: "PIM integration + just-in-time access",   tier: "cloud" },
    { name: "Google Cloud IAM",   logo: "🟢", status: "live",    desc: "Service account governance",              tier: "cloud" },
    { name: "Kubernetes RBAC",    logo: "⚙️",  status: "beta",    desc: "Pod-level identity governance",           tier: "cloud" },
  ]},
  { cat: "ITSM & Ticketing", items: [
    { name: "ServiceNow",         logo: "🟢", status: "live",    desc: "Auto-create remediation tickets",         tier: "itsm"  },
    { name: "Jira Service Mgmt",  logo: "🔵", status: "live",    desc: "Access workflow automation",              tier: "itsm"  },
    { name: "Freshservice",       logo: "🍎", status: "beta",    desc: "Incident auto-linking",                   tier: "itsm"  },
  ]},
  { cat: "HR Systems", items: [
    { name: "Workday",            logo: "📊", status: "live",    desc: "Joiner-mover-leaver automation",          tier: "hr"    },
    { name: "BambooHR",           logo: "🎋", status: "live",    desc: "Onboarding trigger events",               tier: "hr"    },
    { name: "SAP SuccessFactors", logo: "💼", status: "beta",    desc: "Enterprise HR lifecycle",                 tier: "hr"    },
    { name: "ADP",                logo: "💳", status: "planned", desc: "Payroll-driven deprovisioning",           tier: "hr"    },
  ]},
  { cat: "SIEM & Security", items: [
    { name: "Splunk",             logo: "🔮", status: "live",    desc: "Real-time event streaming",               tier: "siem"  },
    { name: "Microsoft Sentinel", logo: "🛡",  status: "live",    desc: "Identity threat intel feed",              tier: "siem"  },
    { name: "CrowdStrike Falcon", logo: "🦅", status: "beta",    desc: "Endpoint + identity correlation",         tier: "siem"  },
    { name: "Datadog",            logo: "🐕", status: "planned", desc: "Observability integration",               tier: "siem"  },
  ]},
  { cat: "Directories & PAM", items: [
    { name: "Active Directory",   logo: "🏢", status: "live",    desc: "On-prem AD sync + group governance",      tier: "dir"   },
    { name: "CyberArk",           logo: "🔑", status: "beta",    desc: "PAM vault + session recording",           tier: "dir"   },
    { name: "HashiCorp Vault",    logo: "🔐", status: "beta",    desc: "Secrets lifecycle governance",            tier: "dir"   },
    { name: "BeyondTrust",        logo: "🔒", status: "planned", desc: "Privilege management",                    tier: "dir"   },
  ]},
];

const STATUS: Record<string, { color: string; bg: string; border: string; label: string }> = {
  live:    { color: "#059669", bg: "#d1fae5", border: "#6ee7b7", label: "Live"    },
  beta:    { color: "#d97706", bg: "#fef3c7", border: "#fde68a", label: "Beta"    },
  planned: { color: "#6b7280", bg: "#f3f4f6", border: "#e5e7eb", label: "Q3 2026" },
};

export default function Integrations() {
  const [filter, setFilter] = useState("all");
  const totalLive = INTEGRATIONS.flatMap(c => c.items).filter(i => i.status === "live").length;
  const totalBeta = INTEGRATIONS.flatMap(c => c.items).filter(i => i.status === "beta").length;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#fdf8f3", color: "#1a1a2e" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>

        {/* Hero */}
        <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <span className="section-label" style={{ marginBottom: "1rem", display: "inline-block" }}>Integrations</span>
            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1rem" }}>
              Plug into your entire stack
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#3d4759", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Unkov connects to the tools you already use. Zero rip-and-replace. Live in under 30 minutes.
            </p>
            {/* Stats row */}
            <div style={{ display: "flex", gap: "clamp(1.25rem,3vw,3rem)", flexWrap: "wrap" }}>
              {[
                { val: `${totalLive}`, label: "Live integrations", color: "#059669" },
                { val: `${totalBeta}`,  label: "In beta",            color: "#d97706" },
                { val: "< 30 min",      label: "To deploy",          color: "#00297a" },
                { val: "REST / SCIM",   label: "Standards-based API", color: "#00297a" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: "1.625rem", fontWeight: 600, color: s.color, letterSpacing: "-0.025em" }}>{s.val}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.125rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <div style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "0.875rem 0" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {["all", "live", "beta", "planned"].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                style={{ padding: "0.375rem 1rem", borderRadius: 9999, fontSize: "0.8125rem", fontWeight: 600, border: "1.5px solid", borderColor: filter === f ? "#00297a" : "#e5e7eb", backgroundColor: filter === f ? "#00297a" : "#ffffff", color: filter === f ? "#ffffff" : "#6b7280", cursor: "pointer", transition: "all 0.15s", textTransform: "capitalize" }}>
                {f === "all" ? "All" : STATUS[f]?.label || f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="container mx-auto px-10" style={{ maxWidth: "900px", padding: "2.5rem 0" }}>
          {INTEGRATIONS.map(cat => {
            const items = filter === "all" ? cat.items : cat.items.filter(i => i.status === filter);
            if (items.length === 0) return null;
            return (
              <div key={cat.cat} style={{ marginBottom: "2.5rem" }}>
                {/* Category heading */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00297a" }}>{cat.cat}</div>
                  <div style={{ flex: 1, height: 1, backgroundColor: "#e5e7eb" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "0.875rem" }}>
                  {items.map(item => {
                    const st = STATUS[item.status];
                    return (
                      <div key={item.name}
                        style={{ padding: "1.25rem", backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: 12, transition: "all 0.15s" }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00297a"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,41,122,0.07)"; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                            <div style={{ fontSize: "1.375rem", lineHeight: 1 }}>{item.logo}</div>
                            <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#111827" }}>{item.name}</span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", padding: "0.2rem 0.625rem", borderRadius: 9999, fontSize: "0.6875rem", fontWeight: 700, backgroundColor: st.bg, color: st.color, border: `1px solid ${st.border}` }}>
                            {item.status === "live"    && <CheckCircle style={{ width: 10, height: 10 }} />}
                            {item.status === "beta"    && <Zap         style={{ width: 10, height: 10 }} />}
                            {item.status === "planned" && <Clock       style={{ width: 10, height: 10 }} />}
                            {st.label}
                          </div>
                        </div>
                        <div style={{ fontSize: "0.8125rem", color: "#6b7280", lineHeight: 1.5 }}>{item.desc}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* CTA */}
          <div style={{ marginTop: "1rem", padding: "2rem 2.25rem", backgroundColor: "#edf1ff", border: "1px solid #c2d4f8", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "#111827", marginBottom: "0.375rem" }}>Need a custom integration?</div>
              <div style={{ fontSize: "0.875rem", color: "#4b5563" }}>We build custom connectors for enterprise pilots. Average delivery: 2 weeks.</div>
            </div>
            <button
              onClick={() => window.location.href = "/contact"}
              className="btn-primary" style={{ whiteSpace: "nowrap", flexShrink: 0 }}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
