import { useState, useRef, useEffect } from "react";
import {
  Menu, X, ChevronDown, ArrowRight,
  GitBranch, BrainCircuit, ShieldCheck, Activity, Gauge,
  Landmark, Stethoscope, Bot, Building2, BookOpen, FileText, Map, Newspaper, Users,
} from "lucide-react";
import { useLocation } from "wouter";
import { LogoMark } from "./LogoMark";

const nav = [
  {
    label: "Features",
    wide: false,
    sections: [
      {
        heading: "Zero-Touch, Graph-Native",
        headingDesc: "Graph-native architecture. Live in 30 minutes.",
        headingHref: "/features",
        items: [
          { icon: GitBranch,    label: "Identity Social Fabric",   desc: "Real-time graph mapping every human, bot, and AI agent",              href: "/features#identity-social-fabric",        tag: null },
          { icon: BrainCircuit, label: "Intent Engine",            desc: "ML predicts access needs from peer-clone behavior",                   href: "/features#intent-engine",                  tag: null },
          { icon: ShieldCheck,  label: "Autonomous Remediation",   desc: "Kill-Switch, orphan purge, toxic link revocation — automated",        href: "/features#autonomous-remediation-engine",  tag: null },
          { icon: Activity,     label: "Predictive Compliance",    desc: "PCI DSS 4.0, HIPAA, SOC 2 — compliance as a byproduct",              href: "/features#predictive-compliance",          tag: "Year 2" },
        ],
        cta: { label: "Explore all features", href: "/features" },
      },
    ],
  },
  {
    label: "Solutions",
    wide: false,
    sections: [
      {
        heading: "By Industry",
        items: [
          { icon: Landmark,     label: "Banking & Financial Services", desc: "Autonomous access governance for fintech",            href: "/solutions/bfsi",      tag: null },
          { icon: Stethoscope,  label: "Healthcare & Life Sciences",   desc: "HIPAA-automated audit trails for regulated environments", href: "/solutions/healthcare", tag: null },
        ],
      },
      {
        heading: "By Use Case",
        items: [
          { icon: Bot,          label: "AI Agent Governance",   desc: "Purpose-built for 144:1 NHI-to-human environments", href: "/features", tag: null },
          { icon: Building2,    label: "Mid-Market IT Teams",   desc: "Reduce 120+ hrs/quarter of manual reviews",          href: "/features",      tag: null },
        ],
        cta: { label: "See how it works", href: "/how-it-works" },
      },
    ],
  },
  {
    label: "Resources",
    wide: true,
    sections: [
      {
        heading: "Learn",
        items: [
          { icon: BookOpen,  label: "How It Works",    desc: "The Discover → Analyze → Remediate loop explained",     href: "/how-it-works", tag: null },
          { icon: FileText,  label: "Blog",            desc: "Thought leadership on identity governance",              href: "/blog",         tag: null },
          { icon: Newspaper, label: "Press",           desc: "Media coverage, press releases, and brand assets",       href: "/press",        tag: null },
          { icon: Users,     label: "About Us",     desc: "Our mission, values, and team",                         href: "/company",      tag: null },
        ],
      },
      {
        heading: "Try It",
        items: [
          { icon: Gauge, label: "Apply for Pilot", desc: "See your real environment in 30 minutes — live dashboard, real data", href: "/early-access", tag: null },
        ],
        cta: { label: "Apply for a pilot", href: "/early-access" },
      },
    ],
  },
];

export default function Header() {
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [, navigate] = useLocation();

  const go = (href: string) => {
    setMobileOpen(false);
    setMobileGroup(null);
    setActiveGroup(null);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (href.startsWith("http")) window.open(href, "_blank");
    else if (href.includes("#")) { window.location.href = href; }
    else navigate(href);
  };

  const openGroup  = (label: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setActiveGroup(label); };
  const startClose = () => { closeTimer.current = setTimeout(() => setActiveGroup(null), 150); };
  const keepOpen   = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header") && !target.closest("[data-dropdown]")) {
        setActiveGroup(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const activeNav = nav.find(g => g.label === activeGroup);
  const NAV_H = 68;

  return (
    <>
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000, height: NAV_H, backgroundColor: "rgba(250,249,247,0.97)", backdropFilter: "blur(14px)", borderBottom: "1px solid #dcd6ce", boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
        <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>

          {/* Logo */}
          <button onClick={() => go("/")} style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <LogoMark size={32} />
            <span style={{ fontWeight: 700, fontSize: "1.05rem", color: "#1a1a2e", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#00c6e0" }}>U</span>nkov
            </span>
          </button>

          {/* Desktop nav — hidden on mobile */}
          <nav className="hidden md:flex" style={{ alignItems: "center", gap: "0.125rem", flex: 1, justifyContent: "center" }}>
            {nav.map((group) => (
              <div key={group.label} style={{ position: "relative" }}
                onMouseEnter={() => openGroup(group.label)}
                onMouseLeave={startClose}>
                <button
                  onClick={() => setActiveGroup(activeGroup === group.label ? null : group.label)}
                  style={{ display: "flex", alignItems: "center", gap: "0.3rem", padding: "0.45rem 0.825rem", fontSize: "0.9375rem", fontWeight: 500, color: activeGroup === group.label ? "#00297a" : "#3d3d5c", backgroundColor: activeGroup === group.label ? "#ebe8e2" : "transparent", borderRadius: "0.375rem", border: "none", transition: "all 0.15s", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {group.label}
                  <ChevronDown style={{ width: 13, height: 13, color: "#6b7280", transition: "transform 0.2s", transform: activeGroup === group.label ? "rotate(180deg)" : "rotate(0)" }} />
                </button>
              </div>
            ))}
            <button onClick={() => go("/pricing")}
              style={{ padding: "0.45rem 0.825rem", fontSize: "0.9375rem", fontWeight: 500, color: "#3d3d5c", backgroundColor: "transparent", borderRadius: "0.375rem", border: "none", transition: "all 0.15s", cursor: "pointer", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00297a"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ebe8e2"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d3d5c"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
              Pricing
            </button>
            <button onClick={() => go("/integrations")}
              style={{ padding: "0.45rem 0.825rem", fontSize: "0.9375rem", fontWeight: 500, color: "#3d3d5c", backgroundColor: "transparent", borderRadius: "0.375rem", border: "none", transition: "all 0.15s", cursor: "pointer", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00297a"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ebe8e2"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d3d5c"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}>
              Integrations
            </button>
          </nav>

          {/* Desktop right CTAs — hidden on mobile */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <button onClick={() => go("/investor-gate")}
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "#3d3d5c", padding: "0.45rem 0.875rem", borderRadius: "0.375rem", border: "1px solid #dcd6ce", backgroundColor: "transparent", cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00297a"; (e.currentTarget as HTMLElement).style.backgroundColor = "#ebe8e2"; (e.currentTarget as HTMLElement).style.borderColor = "#c8c0b6"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d3d5c"; (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "#dcd6ce"; }}>
              For Investors
            </button>
            <button onClick={() => go("/early-access")} className="btn-primary" style={{ fontSize: "0.875rem", padding: "0.45rem 1rem", whiteSpace: "nowrap" }}>
              Apply for Pilot
            </button>
          </div>

          {/* Mobile hamburger — only on mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ padding: "0.5rem", borderRadius: "0.375rem", color: "#3d3d5c", border: "none", backgroundColor: "transparent", cursor: "pointer", flexShrink: 0 }}>
            {mobileOpen ? <X style={{ width: 24, height: 24 }} /> : <Menu style={{ width: 24, height: 24 }} />}
          </button>
        </div>
      </header>
      {activeGroup && activeNav && (
        <div
          data-dropdown
          className="hidden md:block"
          onMouseEnter={keepOpen}
          onMouseLeave={startClose}
          style={{ position: "fixed", top: NAV_H, left: 0, right: 0, zIndex: 999, backgroundColor: "#faf9f7", borderBottom: "1px solid #dcd6ce", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", animation: "slideDown 0.18s ease forwards" }}>
          <div className="container" style={{ padding: "1.75rem 2rem 1.75rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: activeNav.wide ? "1fr 1fr" : "1fr", gap: "2.5rem", maxWidth: activeNav.wide ? "760px" : "360px" }}>
              {activeNav.sections.map((section, si) => (
                <div key={si}>
                  {"headingHref" in section && (section as any).headingHref ? (
                    <button onClick={() => go((section as any).headingHref)}
                      style={{ width: "100%", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", padding: "0.4rem 0.625rem 0.625rem", borderRadius: "0.75rem", marginBottom: "0.25rem", transition: "background-color 0.12s" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ebe8e2")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#1a1a2e", marginBottom: "0.125rem" }}>{section.heading}</div>
                      <div style={{ fontSize: "0.78rem", color: "#4a5568" }}>{(section as any).headingDesc}</div>
                    </button>
                  ) : (
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8096b4", marginBottom: "0.875rem", paddingBottom: "0.5rem", borderBottom: "1px solid #ebe8e2" }}>
                      {section.heading}
                    </div>
                  )}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}>
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button key={item.label} onClick={() => go(item.href)}
                          style={{ display: "flex", alignItems: "center", gap: "0.625rem", padding: "0.45rem 0.625rem", borderRadius: "0.75rem", textAlign: "left", border: "none", backgroundColor: "transparent", cursor: "pointer", transition: "background-color 0.12s", width: "100%" }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#ebe8e2")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                          <div style={{ width: 28, height: 28, borderRadius: "0.375rem", backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Icon style={{ width: 13, height: 13, color: "#0061d4" }} />
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.375rem" }}>
                              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "#2c3a52", lineHeight: 1.3 }}>{item.label}</span>
                              {item.tag && (
                                <span style={{ fontSize: "0.6rem", fontWeight: 700, padding: "0.1rem 0.35rem", borderRadius: "9999px", backgroundColor: "#fef3c7", color: "#92400e", border: "1px solid #fde68a", textTransform: "uppercase" }}>{item.tag}</span>
                              )}
                            </div>
                            <div style={{ fontSize: "0.78rem", color: "#64748b", lineHeight: 1.4, marginTop: "0.125rem" }}>{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  {"cta" in section && section.cta && (
                    <button onClick={() => go(section.cta!.href)}
                      style={{ marginTop: "0.875rem", display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", fontWeight: 600, color: "#0061d4", border: "none", backgroundColor: "transparent", cursor: "pointer", padding: "0.25rem 0.625rem", borderRadius: "0.375rem", transition: "all 0.12s" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#ebe8e2"; (e.currentTarget as HTMLElement).style.color = "#00297a"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.color = "#0061d4"; }}>
                      {section.cta.label} <ArrowRight style={{ width: 13, height: 13 }} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {mobileOpen && (
        <div
          style={{ position: "fixed", top: NAV_H, left: 0, right: 0, bottom: 0, backgroundColor: "#faf9f7", zIndex: 998, overflowY: "auto", borderTop: "1px solid #dcd6ce" }}>
          <div style={{ padding: "0.5rem 1.25rem 3rem" }}>

            {/* Nav groups */}
            {nav.map((group) => (
              <div key={group.label} style={{ borderBottom: "1px solid #ebe8e2" }}>
                <button
                  onClick={() => setMobileGroup(mobileGroup === group.label ? null : group.label)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 0", fontSize: "1rem", fontWeight: 600, color: "#1a1a2e", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                  {group.label}
                  <ChevronDown style={{ width: 18, height: 18, color: "#6b7280", transform: mobileGroup === group.label ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s", flexShrink: 0 }} />
                </button>
                {mobileGroup === group.label && (
                  <div style={{ paddingBottom: "0.75rem" }}>
                    {group.sections.flatMap(s => s.items).map(item => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.label}
                          onClick={() => go(item.href)}
                          style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.75rem 0.5rem", borderRadius: "0.75rem", border: "none", backgroundColor: "transparent", cursor: "pointer", textAlign: "left" }}>
                          <div style={{ width: 36, height: 36, borderRadius: "0.75rem", backgroundColor: "#e8f0fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <Icon style={{ width: 16, height: 16, color: "#0061d4" }} />
                          </div>
                          <div>
                            <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#1a1a2e" }}>{item.label}</div>
                            <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.125rem", lineHeight: 1.4 }}>{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                    {/* Group CTA link */}
                    {group.sections.find(s => "cta" in s && s.cta) && (
                      <button
                        onClick={() => go(group.sections.find(s => "cta" in s && s.cta)!.cta!.href)}
                        style={{ width: "100%", display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem", fontSize: "0.875rem", fontWeight: 600, color: "#0061d4", border: "none", backgroundColor: "transparent", cursor: "pointer", marginTop: "0.25rem" }}>
                        {group.sections.find(s => "cta" in s && s.cta)!.cta!.label} <ArrowRight style={{ width: 13, height: 13 }} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Direct links */}
            {[
              { label: "Pricing",      href: "/pricing" },
              { label: "Integrations", href: "/integrations" },
              { label: "Company",      href: "/company" },
              { label: "Careers",      href: "/careers" },
              { label: "Roadmap",      href: "/roadmap" },
            ].map(link => (
              <div key={link.label} style={{ borderBottom: "1px solid #ebe8e2" }}>
                <button
                  onClick={() => go(link.href)}
                  style={{ width: "100%", textAlign: "left", padding: "0.875rem 0", fontSize: "1rem", fontWeight: 600, color: "#1a1a2e", border: "none", backgroundColor: "transparent", cursor: "pointer" }}>
                  {link.label}
                </button>
              </div>
            ))}

            {/* CTAs */}
            <div style={{ paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <button
                onClick={() => go("/investor-gate")}
                style={{ width: "100%", textAlign: "center", fontSize: "0.9375rem", fontWeight: 500, color: "#3d3d5c", border: "1px solid #dcd6ce", backgroundColor: "transparent", cursor: "pointer", padding: "0.75rem 1rem", borderRadius: "9999px", transition: "all 0.15s" }}>
                For Investors
              </button>
              <button
                onClick={() => go("/early-access")}
                className="btn-primary"
                style={{ justifyContent: "center" }}>
                Apply for Pilot
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
