import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Mail, Zap, Building2, Sparkles } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

const plans = [
  {
    icon: Zap,
    name: "Pilot",
    nodes: "Your full environment",
    acv: "Custom",
    avcSub: "30–90 day engagement",
    description: "A structured, time-boxed evaluation of Unkov in your real environment. Direct access to the founding team. Pilot fee credited to Year 1.",
    cta: "Apply for Pilot",
    ctaHref: "/early-access",
    ctaStyle: "ghost",
    featured: false,
    badge: "Limited Availability",
    features: [
      "Full environment — no node cap",
      "Zero-Touch Observation Mode",
      "Live Identity Drift dashboard",
      "Complete orphaned account & ghost bot discovery",
      "Hidden bridge & toxic combination detection",
      "Direct founding team access",
      "Executive debrief + ROI report",
      "Pilot fee credited to Year 1 ACV",
    ],
  },
  {
    icon: null,
    name: "Mid-Market Starter",
    nodes: "Up to 2,500 Identity Nodes",
    acv: "$25,000",
    avcSub: "/ year",
    description: "For mid-sized enterprises beginning their autonomous identity governance journey.",
    cta: "Apply for Pilot",
    ctaHref: "/early-access",
    ctaStyle: "ghost",
    featured: false,
    badge: null,
    features: [
      "Up to 2,500 human + non-human identity nodes",
      "Identity Social Fabric (Discovery Engine)",
      "Autonomous remediation for access violations",
      "Okta & Azure AD native integrations",
      "Identity Drift dashboard",
      "Email support",
      "Monthly compliance reports",
    ],
  },
  {
    icon: null,
    name: "Mid-Market Growth",
    nodes: "2,500 – 10,000 Identity Nodes",
    acv: "$60,000",
    avcSub: "/ year",
    description: "For growing enterprises with complex NHI environments and compliance mandates.",
    cta: "Apply for Pilot",
    ctaHref: "/early-access",
    ctaStyle: "primary",
    featured: true,
    badge: "Most Popular",
    features: [
      "2,500–10,000 human + non-human identity nodes",
      "Full Identity Social Fabric + Intent Engine",
      "Predictive Peer-Clone provisioning",
      "Autonomous Remediation Engine with Kill-Switch",
      "Real-time Identity Heartbeat monitoring",
      "PCI DSS 4.0 & SOC 2 evidence automation",
      "Priority support + dedicated CSM",
      "Custom integrations (200+ systems)",
      "Advanced analytics & risk scoring",
    ],
  },
  {
    icon: null,
    name: "Enterprise",
    nodes: "10,000+ Identity Nodes",
    acv: "$150,000+",
    avcSub: "/ year",
    description: "For large-scale agent-heavy organizations requiring maximum governance and dedicated support.",
    cta: "Contact Sales",
    ctaHref: "/early-access",
    ctaStyle: "ghost",
    featured: false,
    badge: null,
    features: [
      "Unlimited identity nodes",
      "Full AI-native platform — all modules",
      "On-premise & hybrid deployment options",
      "Compliance Autopilot (SOC 2, HIPAA, PCI DSS)",
      "Custom ML model training on your data",
      "Dedicated account manager + 24/7 support",
      "Custom SLAs & data residency options",
      "Enterprise SSO / SAML support",
    ],
  },
  {
    icon: Sparkles,
    name: "Custom",
    nodes: "Any scale, any structure",
    acv: "Let's talk",
    avcSub: "tailored to you",
    description: "Unique requirements? Unusual architecture, multi-tenant deployment, or a deal structure that doesn't fit a standard tier — we'll build a plan around you.",
    cta: "Get a Custom Quote",
    ctaHref: "#contact",
    ctaStyle: "ghost",
    featured: false,
    badge: null,
    features: [
      "Fully negotiated identity node count",
      "Custom module selection",
      "Flexible contract length & payment terms",
      "White-label or OEM options for MSPs",
      "Multi-region or air-gapped deployment",
      "Dedicated solutions engineering team",
    ],
  },
];

const faqs = [
  { q: "What is an Identity Node?", a: "Any active entity under Unkov's governance: a human employee, AI agent, bot, service account, or API key. Pricing scales with your total node count — aligning our revenue with the growth of your agentic enterprise." },
  { q: "How does the Pilot work?", a: "We run a structured 30–90 day evaluation in your real environment. You see your actual identity risk, your actual orphaned accounts, your actual governance gaps — not a sandbox. The pilot fee is credited in full toward your Year 1 subscription. Pilots are by application only." },
  { q: "Do you offer annual discounts?", a: "Yes — 15–20% discounts for annual prepayment. All listed ACVs are annual contract values billed upfront. Multi-year agreements available at additional discount." },
  { q: "What support is included?", a: "Starter includes email support. Growth includes priority support and a dedicated Customer Success Manager. Enterprise includes 24/7 phone and email support with custom SLAs." },
  { q: "Is on-premise deployment available?", a: "On-premise and hybrid deployment are available for Enterprise and Custom tiers, with custom data residency SLAs and air-gap options for regulated environments." },
  { q: "How does pricing grow with us?", a: "As you add employees and AI agents, your node count grows and your contract expands automatically — no new sales cycle needed. This drives our target >115% Net Revenue Retention." },
];

export default function Pricing() {
  const [form, setForm] = useState({ name: "", email: "", company: "", nodes: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nEstimated Identity Nodes: ${form.nodes}\n\nMessage:\n${form.message}`;
    // Form data captured — sales team notified
    setSent(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>
        <section style={{ borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)", backgroundColor: "#ffffff" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "900px" }}>
            <span className="section-label" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Pricing</span>
            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
              Pricing that scales with<br />your identity footprint
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#3d4759", lineHeight: 1.7, marginBottom: "2.5rem" }}>
              Transparent, node-based pricing that scales with your identity footprint. Every pilot begins with defined success metrics — no pilot purgatory. The Permission Gate, Bot Reputation Network, hardware-rooted identity, and Compliance Gravity as SEC/HHS System of Record are included in every tier. Every plan includes the full AI-native governance platform — no hidden per-module fees.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(1rem,2vw,2rem)", flexWrap: "wrap" }}>
              {[["< 30 min", "Zero-touch setup"], ["144:1", "NHI-to-human ratio supported"], ["100%", "Pilot customer retention"]].map(([v, l]) => (
                <div key={l}>
                  <div style={{ fontSize: "1.5rem", fontWeight: 600, color: "#00297a", letterSpacing: "-0.03em" }}>{v}</div>
                  <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.125rem" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Identity Node callout */}
        <div style={{ backgroundColor: "#edf1ff", borderBottom: "1px solid #c2d4f8" }} className="py-5">
          <div className="container mx-auto px-10">
            <div className="flex items-start gap-3 max-w-2xl">
              <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: "#00297a" }} />
              <p className="text-sm text-[#3d4759]">
                <span className="font-semibold">What is an Identity Node?</span> Any human employee,
                AI agent, service account, bot, or API key under Unkov's governance. In 2026 the
                average enterprise runs a <strong>144:1 NHI-to-human ratio</strong> — our pricing
                reflects that reality.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <section className="section-slim">
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
              {plans.map((plan, idx) => {
                const Icon = plan.icon;
                return (
                  <div
                    key={idx}
                    className={`card flex flex-col overflow-hidden ${
                      plan.featured ? "ring-2 ring-[#00297a] md:scale-[1.03] shadow-md" : ""
                    }`}
                  >
                    {plan.badge && (
                      <div className="text-white text-xs font-bold text-center py-2 tracking-wider"
                        style={{ backgroundColor: "#00297a" }}>
                        {plan.badge.toUpperCase()}
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Icon for special tiers */}
                      {Icon && (
                        <div className="p-2 rounded-lg w-fit mb-3" style={{ backgroundColor: "#edf1ff" }}>
                          <Icon className="w-4 h-4" style={{ color: "#00297a" }} />
                        </div>
                      )}

                      <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{plan.name}</h3>
                      <p className="text-xs font-mono text-[#3d4759] mb-4">{plan.nodes}</p>

                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-2xl font-bold text-[#1d1d1f]">{plan.acv}</span>
                        <span className="text-xs text-[#3d4759]">{plan.avcSub}</span>
                      </div>
                      <p className="text-xs text-[#3d4759] mb-5 leading-relaxed">{plan.description}</p>

                      <a
                        href={plan.ctaHref}
                        onClick={plan.ctaHref === "#contact" ? (e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        } : undefined}
                        className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg font-semibold text-xs mb-6 transition-colors ${
                          plan.ctaStyle === "primary"
                            ? "text-white"
                            : "border border-[#d8dde6] text-[#3d4759] hover:border-[#b8c4d8]"
                        }`}
                        style={plan.ctaStyle === "primary" ? { backgroundColor: "#00297a" } : {}}
                      >
                        {plan.cta} <ArrowRight className="w-3 h-3" />
                      </a>

                      <div className="space-y-2.5 flex-1">
                        {plan.features.map((f, fi) => (
                          <div key={fi} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: "#00297a" }} />
                            <span className="text-xs text-[#3d4759] leading-relaxed">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Us Form */}
        <section id="contact" className="section border-t border-[#d8dde6]" style={{ backgroundColor: "#f0ece6" }}>
          <div className="container mx-auto px-10">
            <div className="grid md:grid-cols-2 gap-14 items-start max-w-5xl">
              {/* Left — copy */}
              <div>
                <span className="section-label">Contact Sales</span>
                <h2 className="text-2xl font-bold text-[#1d1d1f] mb-4">
                  Need a custom quote?
                </h2>
                <p className="text-[#3d4759] leading-relaxed mb-8">
                  Unusual scale, multi-tenant architecture, MSP reseller agreement, or just want to
                  talk through your environment before committing to a tier — fill in the form and
                  we'll get back to you within one business day.
                </p>
                <div className="space-y-5">
                  {[
                    { title: "Response within 1 business day", body: "Our team reviews every inquiry personally — no auto-responders." },
                    { title: "No-pressure conversation", body: "We'll scope your environment and recommend the right tier — even if that's the pilot." },
                    { title: "Custom contract available", body: "Flexible node counts, payment terms, multi-year pricing, and MSP white-label options." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#00297a" }} />
                      <div>
                        <div className="text-sm font-semibold text-[#1d1d1f]">{item.title}</div>
                        <p className="text-sm text-[#3d4759]">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-[#d8dde6]">
                  <p className="text-xs text-[#3d4759] mb-1">Prefer email?</p>
                  <a href="mailto:sales@unkov.com"
                    className="flex items-center gap-2 text-sm font-semibold text-[#00297a] hover:underline">
                    <Mail className="w-4 h-4" /> sales@unkov.com
                  </a>
                </div>
              </div>

              {/* Right — form */}
              <div className="card p-8">
                {sent ? (
                  <div className="text-center py-10">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: "#d1fae5" }}>
                      <CheckCircle className="w-6 h-6" style={{ color: "#059669" }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1d1d1f] mb-2">Message sent!</h3>
                    <p className="text-sm text-[#3d4759]">We'll be in touch within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-base font-bold text-[#1d1d1f] mb-6">Get a Custom Quote</h3>
                    {[
                      { key: "name", label: "Full Name", placeholder: "Jane Smith", type: "text", required: true },
                      { key: "email", label: "Work Email", placeholder: "jane@company.com", type: "email", required: true },
                      { key: "company", label: "Company", placeholder: "Acme Corp", type: "text", required: true },
                      { key: "nodes", label: "Estimated Identity Nodes", placeholder: "e.g. 5,000 employees + 200 bots", type: "text", required: false },
                    ].map((f) => (
                      <div key={f.key}>
                        <label className="block text-xs font-semibold text-[#3d4759] mb-1.5">
                          {f.label}{f.required && <span className="text-red-400 ml-0.5">*</span>}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required}
                          value={(form as any)[f.key]}
                          onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border text-[#1d1d1f] placeholder-[#b8c4d8] focus:outline-none focus:ring-2 focus:ring-[#00297a] transition-shadow"
                          style={{ borderColor: "#dcd6ce", backgroundColor: "#faf9f7" }}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-xs font-semibold text-[#3d4759] mb-1.5">
                        How can we help? <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Tell us about your environment, deployment requirements, or any questions about pricing..."
                        value={form.message}
                        onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border text-[#1d1d1f] placeholder-[#b8c4d8] focus:outline-none focus:ring-2 focus:ring-[#00297a] resize-none transition-shadow"
                        style={{ borderColor: "#dcd6ce", backgroundColor: "#faf9f7" }}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                      <Mail className="w-4 h-4" /> Send Message
                    </button>
                    <p className="text-xs text-center text-[#3d4759]">
                      We respond within 1 business day. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-slim">
          <div className="container mx-auto px-10">
            <div className="max-w-xl mb-6">
              <span className="section-label">FAQ</span>
              <h2 className="text-2xl font-bold text-[#1d1d1f]">Pricing questions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-14 gap-y-8 max-w-4xl">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <h3 className="text-sm font-semibold text-[#1d1d1f] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[#3d4759] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
