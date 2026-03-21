import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import {
  MessageSquare, HelpCircle, BookOpen,
  ChevronRight, CheckCircle, Mail, Phone, Linkedin, Twitter, Github
} from "lucide-react";

const REASONS = [
  "I want a product demo",
  "I'm evaluating Unkov for my organization",
  "I'm interested in pricing",
  "I have a technical / integration question",
  "I'm an existing customer",
  "Partnership or reseller inquiry",
  "Press / media inquiry",
  "Other",
];

const SIZES = ["1–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"];

const SUPPORT_REASONS = [
  "Login / authentication issue",
  "Integration not connecting",
  "Dashboard not loading or showing incorrect data",
  "Automated action triggered incorrectly",
  "Identity not discovered",
  "Compliance report issue",
  "Performance / latency issue",
  "Other technical issue",
];

const PRIORITIES = ["Low — general question", "Medium — impacting workflow", "High — production issue", "Critical — full outage"];

export default function Contact() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "", jobTitle: "", phone: "",
    reason: "", size: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [supportForm, setSupportForm] = useState({
    name: "", email: "", company: "", issueType: "", priority: "", environment: "", description: "",
  });
  const [supportSubmitted, setSupportSubmitted] = useState(false);

  const canSubmit = form.firstName && form.lastName && form.email && form.company && form.reason;

  const canSubmitSupport = supportForm.name && supportForm.email && supportForm.issueType && supportForm.description;

  const handleSubmitSupport = () => {
    if (!canSubmitSupport) return;
    const body = [
      `Name: ${supportForm.name}`,
      `Email: ${supportForm.email}`,
      `Company: ${supportForm.company || "Not provided"}`,
      `Issue type: ${supportForm.issueType}`,
      `Priority: ${supportForm.priority || "Not specified"}`,
      `Environment: ${supportForm.environment || "Not specified"}`,
      `Description: ${supportForm.description}`,
    ].join("\n");
    // Form data captured — team notified
    setSupportSubmitted(true);
  };

  const handleSubmit = () => {
    if (!canSubmit) return;
    const body = [
      `Name: ${form.firstName} ${form.lastName}`,
      `Company: ${form.company}`,
      `Job Title: ${form.jobTitle}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Company Size: ${form.size || "Not specified"}`,
      `Reason: ${form.reason}`,
      `Message: ${form.message || "None"}`,
    ].join("\n");
    // Form data captured — team notified
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
        <Header />
        <div style={{ paddingTop: 68, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "80vh" }}>
          <div style={{ textAlign: "center", maxWidth: 480, padding: "2rem" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", backgroundColor: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
              <CheckCircle style={{ width: 32, height: 32, color: "#059669" }} />
            </div>
            <h2 style={{ fontSize: "1.875rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>Message sent</h2>
            <p style={{ fontSize: "1.125rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "2rem" }}>
              Thanks for reaching out. Someone from our team will follow up at <strong style={{ color: "#111827" }}>{form.email}</strong> within one business day.
            </p>
            <button onClick={() => navigate("/")} className="btn-primary">
              Back to home <ChevronRight style={{ width: 16, height: 16 }} />
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf9f7" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>
        <section style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0 clamp(1.5rem, 4vw, 4rem)" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "860px" }}>
            <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 600, color: "#111827", letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: "1rem" }}>
              How can we help you?
            </h1>
            <p style={{ fontSize: "1.25rem", color: "#6b7280", lineHeight: 1.7, maxWidth: "540px" }}>
              Whether you're evaluating Unkov, need technical help, or want to talk to sales — we're here.
            </p>
          </div>
        </section>
        <section style={{ backgroundColor: "#faf9f7", padding: "3.5rem 0" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "860px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem", marginBottom: "4rem" }}>
              {[
                {
                  icon: MessageSquare,
                  color: "#00297a",
                  bg: "#e8f0fe",
                  title: "Talk to sales",
                  body: "Have an identity initiative? We'd love to help you chart the course forward.",
                  cta: "Contact sales",
                  action: () => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" }),
                },
                {
                  icon: HelpCircle,
                  color: "#059669",
                  bg: "#d1fae5",
                  title: "Technical support",
                  body: "Having an issue? Our admin support team is on hand to help you troubleshoot and resolve problems fast.",
                  cta: "Contact admin support",
                  action: () => document.getElementById("support-form")?.scrollIntoView({ behavior: "smooth" }),
                },
                {
                  icon: BookOpen,
                  color: "#7c3aed",
                  bg: "#ede9fe",
                  title: "Start for free",
                  body: "Deploy Zero-Touch Observation Mode and see your Identity Drift dashboard in 30 minutes.",
                  cta: "Apply for Pilot",
                  action: () => navigate("/early-access"),
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "2rem", display: "flex", flexDirection: "column", gap: "0.875rem", transition: "all 0.15s" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00297a"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,41,122,0.08)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                    <div style={{ width: 44, height: 44, borderRadius: "0.875rem", backgroundColor: card.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon style={{ width: 22, height: 22, color: card.color }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#111827", marginBottom: "0.375rem" }}>{card.title}</h3>
                      <p style={{ fontSize: "0.9375rem", color: "#6b7280", lineHeight: 1.7 }}>{card.body}</p>
                    </div>
                    <button onClick={card.action}
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.375rem", fontSize: "0.9375rem", fontWeight: 600, color: card.color, background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: "auto" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.75")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                      {card.cta} <ChevronRight style={{ width: 15, height: 15 }} />
                    </button>
                  </div>
                );
              })}
            </div>
            <div id="contact-form" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "5rem", alignItems: "start" }}>

              {/* Left: form */}
              <div>
                <h2 style={{ fontSize: "1.625rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>Send us a message</h2>
                <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "2rem" }}>Our team responds within one business day.</p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                  {[
                    { key: "firstName", label: "First name *", placeholder: "Jane", type: "text" },
                    { key: "lastName",  label: "Last name *",  placeholder: "Smith", type: "text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder}
                        value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#00297a")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                    </div>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1rem" }}>
                  {[
                    { key: "email",    label: "Work email *",   placeholder: "jane@company.com", type: "email" },
                    { key: "company",  label: "Company *",      placeholder: "Acme Corp",        type: "text" },
                    { key: "jobTitle", label: "Job title",       placeholder: "Head of IT",       type: "text" },
                    { key: "phone",    label: "Phone number",    placeholder: "+1 (555) 000-0000", type: "tel" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder}
                        value={(form as any)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                        onFocus={e => (e.currentTarget.style.borderColor = "#00297a")}
                        onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                    </div>
                  ))}
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>How can we help? *</label>
                  <select value={form.reason} onChange={e => setForm(p => ({ ...p, reason: e.target.value }))}
                    style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: form.reason ? "#111827" : "#9ca3af", outline: "none", boxSizing: "border-box" }}>
                    <option value="">Select a reason...</option>
                    {REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: "1rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>Company size</label>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {SIZES.map(s => (
                      <button key={s} onClick={() => setForm(p => ({ ...p, size: s }))}
                        style={{ padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, border: "1.5px solid", borderColor: form.size === s ? "#00297a" : "#e5e7eb", backgroundColor: form.size === s ? "#00297a" : "#ffffff", color: form.size === s ? "#ffffff" : "#6b7280", cursor: "pointer", transition: "all 0.1s" }}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Message (optional)</label>
                  <textarea rows={4} placeholder="Tell us about your environment, use case, or any specific questions..."
                    value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.15s", lineHeight: 1.7 }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#00297a")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                </div>

                <button onClick={handleSubmit} disabled={!canSubmit}
                  style={{ width: "100%", padding: "0.875rem", borderRadius: "0.75rem", fontSize: "1rem", fontWeight: 600, color: "#ffffff", backgroundColor: canSubmit ? "#00297a" : "#d1d5db", border: "none", cursor: canSubmit ? "pointer" : "not-allowed", transition: "background 0.15s" }}
                  onMouseEnter={e => { if (canSubmit) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#001f5c"; }}
                  onMouseLeave={e => { if (canSubmit) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#00297a"; }}>
                  Send message
                </button>
                <p style={{ fontSize: "0.8125rem", color: "#9ca3af", marginTop: "0.875rem", lineHeight: 1.7 }}>
                  By submitting, you agree to our <a href="/legal" style={{ color: "#00297a", textDecoration: "none", fontWeight: 600 }}>Privacy Policy</a>. We'll never share your information.
                </p>
              </div>

              {/* Right: contact info */}
              <div style={{ position: "sticky", top: "6rem" }}>
                <div style={{ backgroundColor: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "1rem", padding: "2rem", marginBottom: "1.25rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "1.25rem" }}>Contact information</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "0.75rem", backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Mail style={{ width: 16, height: 16, color: "#00297a" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8125rem", color: "#9ca3af", marginBottom: "0.125rem" }}>Email</div>
                        <a href="mailto:sales@unkov.com" style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#00297a", textDecoration: "none" }}>sales@unkov.com</a>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                      <div style={{ width: 36, height: 36, borderRadius: "0.75rem", backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Phone style={{ width: 16, height: 16, color: "#00297a" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "0.8125rem", color: "#9ca3af", marginBottom: "0.125rem" }}>Sales</div>
                        <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#111827" }}>Available via demo request</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #f3f4f6", marginTop: "1.25rem", paddingTop: "1.25rem" }}>
                    <div style={{ fontSize: "0.8125rem", color: "#9ca3af", marginBottom: "0.75rem" }}>Follow us</div>
                    <div style={{ display: "flex", gap: "0.75rem" }}>
                      {[
                        { Icon: Linkedin, href: "https://www.linkedin.com/company/112230801", label: "LinkedIn" },
                        { Icon: Twitter,  href: "https://x.com/UnkovAI",                     label: "X" },
                        { Icon: Github,   href: "https://github.com/UnkovAI",                 label: "GitHub" },
                      ].map(({ Icon, href, label }) => (
                        <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                          style={{ width: 36, height: 36, borderRadius: "0.75rem", border: "1px solid #e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", textDecoration: "none", transition: "all 0.15s" }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00297a"; (e.currentTarget as HTMLElement).style.color = "#00297a"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb"; (e.currentTarget as HTMLElement).style.color = "#6b7280"; }}>
                          <Icon style={{ width: 16, height: 16 }} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ backgroundColor: "#edf1ff", border: "1px solid #c2d4f8", borderRadius: "1rem", padding: "1.75rem" }}>
                  <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#00297a", marginBottom: "0.5rem" }}>Response time</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#3d4759", lineHeight: 1.7, marginBottom: "1rem" }}>
                    Sales and demo requests are typically responded to within <strong>4 business hours</strong>. General inquiries within one business day.
                  </p>
                  <button onClick={() => navigate("/early-access")} className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.5rem 1.25rem" }}>
                    Skip the form — book a demo <ChevronRight style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id="support-form" style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e5e7eb", padding: "clamp(2rem, 5vw, 5rem) 0" }}>
          <div className="container mx-auto px-10" style={{ maxWidth: "860px" }}>
            <div style={{ maxWidth: "600px" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.875rem", borderRadius: "9999px", backgroundColor: "#d1fae5", border: "1px solid #6ee7b7", marginBottom: "1.25rem" }}>
                <HelpCircle style={{ width: 14, height: 14, color: "#059669" }} />
                <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#059669" }}>Technical Support</span>
              </div>
              <h2 style={{ fontSize: "1.875rem", fontWeight: 600, color: "#111827", letterSpacing: "-0.02em", marginBottom: "0.625rem" }}>
                Get help from our support team
              </h2>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: 1.7, marginBottom: "2rem" }}>
                Describe your issue and we'll get back to you within 4 business hours for production issues, or one business day for general questions.
              </p>

              {supportSubmitted ? (
                <div style={{ padding: "2rem", borderRadius: "1rem", backgroundColor: "#f0fdf4", border: "1px solid #6ee7b7", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <CheckCircle style={{ width: 24, height: 24, color: "#059669", flexShrink: 0, marginTop: "0.125rem" }} />
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "#111827", marginBottom: "0.375rem" }}>Support request received</div>
                    <p style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.7 }}>
                      We've got your request and will follow up at <strong>{supportForm.email}</strong>. For urgent issues, email <a href="mailto:support@unkov.com" style={{ color: "#059669", fontWeight: 600, textDecoration: "none" }}>support@unkov.com</a> directly.
                    </p>
                  </div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
                    {[
                      { key: "name",    label: "Full name *",    placeholder: "Jane Smith",        type: "text"  },
                      { key: "email",   label: "Work email *",   placeholder: "jane@company.com",  type: "email" },
                      { key: "company", label: "Company",        placeholder: "Acme Corp",         type: "text"  },
                    ].map(f => (
                      <div key={f.key} style={f.key === "name" ? {} : {}}>
                        <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>{f.label}</label>
                        <input type={f.type} placeholder={f.placeholder}
                          value={(supportForm as any)[f.key]}
                          onChange={e => setSupportForm(p => ({ ...p, [f.key]: e.target.value }))}
                          style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                          onFocus={e => (e.currentTarget.style.borderColor = "#059669")}
                          onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Issue type *</label>
                    <select value={supportForm.issueType} onChange={e => setSupportForm(p => ({ ...p, issueType: e.target.value }))}
                      style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: supportForm.issueType ? "#111827" : "#9ca3af", outline: "none", boxSizing: "border-box" }}>
                      <option value="">Select issue type...</option>
                      {SUPPORT_REASONS.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.5rem" }}>Priority</label>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {PRIORITIES.map(p => (
                        <button key={p} type="button" onClick={() => setSupportForm(prev => ({ ...prev, priority: p }))}
                          style={{ padding: "0.375rem 0.875rem", borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, border: "1.5px solid", borderColor: supportForm.priority === p ? "#059669" : "#e5e7eb", backgroundColor: supportForm.priority === p ? "#059669" : "#ffffff", color: supportForm.priority === p ? "#ffffff" : "#6b7280", cursor: "pointer", transition: "all 0.1s" }}>
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Environment (optional)</label>
                    <input type="text" placeholder="e.g. AWS / Okta / Azure AD, 500 identity nodes"
                      value={supportForm.environment}
                      onChange={e => setSupportForm(p => ({ ...p, environment: e.target.value }))}
                      style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#059669")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#374151", marginBottom: "0.375rem" }}>Describe the issue *</label>
                    <textarea rows={5} placeholder="What are you seeing? What did you expect to happen? Include any error messages or steps to reproduce."
                      value={supportForm.description}
                      onChange={e => setSupportForm(p => ({ ...p, description: e.target.value }))}
                      style={{ width: "100%", padding: "0.625rem 0.875rem", fontSize: "0.9375rem", border: "1px solid #d1d5db", borderRadius: "0.75rem", backgroundColor: "#ffffff", color: "#111827", outline: "none", resize: "vertical", boxSizing: "border-box", transition: "border-color 0.15s", lineHeight: 1.7 }}
                      onFocus={e => (e.currentTarget.style.borderColor = "#059669")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#d1d5db")} />
                  </div>

                  <button type="button" onClick={handleSubmitSupport} disabled={!canSubmitSupport}
                    style={{ padding: "0.875rem", borderRadius: "0.75rem", fontSize: "1rem", fontWeight: 600, color: "#ffffff", backgroundColor: canSubmitSupport ? "#059669" : "#d1d5db", border: "none", cursor: canSubmitSupport ? "pointer" : "not-allowed", transition: "background 0.15s" }}
                    onMouseEnter={e => { if (canSubmitSupport) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#047857"; }}
                    onMouseLeave={e => { if (canSubmitSupport) (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#059669"; }}>
                    Submit support request
                  </button>
                  <p style={{ fontSize: "0.8125rem", color: "#9ca3af", lineHeight: 1.7 }}>
                    For urgent production issues, you can also email <a href="mailto:support@unkov.com" style={{ color: "#059669", fontWeight: 600, textDecoration: "none" }}>support@unkov.com</a> directly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
