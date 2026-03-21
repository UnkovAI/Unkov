import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";
import { LogoMark } from "../components/LogoMark";

const SESSION_KEY = "unkov_investor_auth";

// ─── Code validation (must match scripts/generate-code.ts exactly) ────────────
function makeCode(windowIndex: number, salt: string): string {
  const raw = `${windowIndex}-${salt}-unkov`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = ((hash << 5) - hash + raw.charCodeAt(i)) | 0;
  }
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  let h = Math.abs(hash);
  for (let i = 0; i < 6; i++) {
    code += chars[h % chars.length];
    h = Math.floor(h / chars.length) + (Math.abs(hash) >> i);
  }
  return `UNK-${code}`;
}

function validateCode(input: string): boolean {
  const clean = input.toUpperCase().trim();
  const salts = ["alpha", "beta", "gamma", "delta"];
  const windows = [4, 24, 72];
  for (const hrs of windows) {
    const current = Math.floor(Date.now() / (hrs * 3600000));
    for (const salt of salts) {
      if (makeCode(current, salt) === clean) return true;
      if (makeCode(current - 1, salt) === clean) return true;
    }
  }
  return false;
}

// ─── Gate page ────────────────────────────────────────────────────────────────
export default function InvestorGate() {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState("");
  const [shaking, setShaking] = useState(false);
  const [, navigate] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateCode(code)) {
      sessionStorage.setItem(SESSION_KEY, "true");
      const redirect = sessionStorage.getItem("unkov_post_auth_redirect") || "/for-investors";
      sessionStorage.removeItem("unkov_post_auth_redirect");
      navigate(redirect);
    } else {
      setError("Incorrect access code. Request access via info@unkov.com.");
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      setCode("");
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0f1e", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <div style={{ position: "fixed", top: "40%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, background: "radial-gradient(ellipse,rgba(0,41,122,0.18) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <LogoMark size={48} bgColor="#0a0f1e" />
        </div>
        <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Unkov</div>
      </div>

      <div style={{ width: "100%", maxWidth: 420, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 18, padding: "2.5rem", backdropFilter: "blur(12px)", animation: shaking ? "shake 0.5s ease" : "none" }}>
        <div style={{ width: 48, height: 48, backgroundColor: "rgba(0,97,212,0.12)", border: "1px solid rgba(0,97,212,0.25)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
          <Lock style={{ width: 20, height: 20, color: "#60a5fa" }} />
        </div>

        <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#f1f5f9", marginBottom: "0.5rem" }}>Investor Access</h1>
        <p style={{ fontSize: "0.875rem", color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.7 }}>
          This area contains confidential investor materials including financial projections, funding terms, and the data room. Enter your access code to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Access Code</label>
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <input ref={inputRef} type={showCode ? "text" : "password"} value={code}
              onChange={e => { setCode(e.target.value); setError(""); }}
              placeholder="e.g. UNK-ABC123"
              autoComplete="off" spellCheck={false}
              style={{ width: "100%", padding: "0.75rem 3rem 0.75rem 1rem", backgroundColor: "rgba(255,255,255,0.05)", border: `1px solid ${error ? "#ef4444" : "rgba(255,255,255,0.1)"}`, borderRadius: 10, color: "#f1f5f9", fontSize: "0.95rem", outline: "none", letterSpacing: "0.1em", boxSizing: "border-box" as const }} />
            <button type="button" onClick={() => setShowCode(s => !s)}
              style={{ position: "absolute", right: "0.875rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748b", padding: "0.25rem" }}>
              {showCode ? <EyeOff style={{ width: 16, height: 16 }} /> : <Eye style={{ width: 16, height: 16 }} />}
            </button>
          </div>
          {error && <p style={{ fontSize: "0.9375rem", color: "#ef4444", marginBottom: "1rem", marginTop: "-0.5rem" }}>{error}</p>}

          <button type="submit"
            style={{ width: "100%", padding: "0.875rem", backgroundColor: "#0061d4", border: "none", borderRadius: 10, color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#0052b3")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#0061d4")}>
            Access Investor Materials <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "1.75rem 0 1.5rem" }}>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.06)" }} />
          <span style={{ fontSize: "0.875rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em" }}>No code?</span>
          <div style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.06)" }} />
        </div>

        <a href="mailto:info@unkov.com?subject=Investor Access Request"
          style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%", padding: "0.75rem", backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, color: "#94a3b8", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", boxSizing: "border-box" as const }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}>
          Request access — info@unkov.com
        </a>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "2rem", fontSize: "0.875rem", color: "#64748b" }}>
        <Shield style={{ width: 12, height: 12 }} />
        Confidential materials. Not for distribution. © Unkov 2026
      </div>

      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}15%{transform:translateX(-8px)}30%{transform:translateX(8px)}45%{transform:translateX(-6px)}60%{transform:translateX(6px)}75%{transform:translateX(-3px)}90%{transform:translateX(3px)}}`}</style>
    </div>
  );
}
