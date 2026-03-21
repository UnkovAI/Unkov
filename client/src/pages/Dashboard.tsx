import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";
import { Shield, Users, Bot, AlertTriangle, TrendingDown, CheckCircle, Clock, Zap, Activity, Bell, Settings, ChevronRight } from "lucide-react";

function useAnimatedValue(target: number, speed = 0.08) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let cur = 0;
    const id = setInterval(() => {
      cur += (target - cur) * speed;
      if (Math.abs(cur - target) < 0.5) { setVal(target); clearInterval(id); }
      else setVal(Math.round(cur));
    }, 16);
    return () => clearInterval(id);
  }, [target]);
  return val;
}

const riskHistory = [
  { t: "Mon", risk: 72, blocked: 14 }, { t: "Tue", risk: 68, blocked: 22 },
  { t: "Wed", risk: 74, blocked: 18 }, { t: "Thu", risk: 55, blocked: 31 },
  { t: "Fri", risk: 48, blocked: 27 }, { t: "Sat", risk: 41, blocked: 19 },
  { t: "Sun", risk: 37, blocked: 23 },
];

const identityBreakdown = [
  { name: "Human", value: 42, color: "#0061d4" },
  { name: "Bot", value: 186, color: "#f59e0b" },
  { name: "AI Agent", value: 67, color: "#10b981" },
  { name: "Orphan", value: 23, color: "#ef4444" },
];

const recentEvents = [
  { time: "2m ago", icon: "🛡", color: "#10b981", msg: "Orphan account ghost-acct-0042 purged automatically", sev: "resolved" },
  { time: "5m ago", icon: "⚠", color: "#f59e0b", msg: "AI agent data-proc-07 attempting lateral move — blocked", sev: "blocked" },
  { time: "11m ago", icon: "✅", color: "#0061d4", msg: "15 new hires onboarded via Peer-Clone in 8 min", sev: "info" },
  { time: "23m ago", icon: "🔴", color: "#ef4444", msg: "Toxic link: etl-runner → pii-db revoked", sev: "critical" },
  { time: "1h ago", icon: "🤖", color: "#10b981", msg: "Bot fleet audit complete — 3 over-privileged accounts scoped", sev: "resolved" },
  { time: "2h ago", icon: "📊", color: "#8b5cf6", msg: "SOC 2 evidence package auto-generated", sev: "info" },
];

const accessQueue = [
  { user: "sarah.chen", resource: "Finance DB", requested: "10m ago", risk: "low", status: "auto-approved" },
  { user: "AI Agent: mlops-v3", resource: "Training Cluster", requested: "15m ago", risk: "medium", status: "pending" },
  { user: "bot: report-gen", resource: "HR System", requested: "22m ago", risk: "high", status: "flagged" },
  { user: "james.park", resource: "VPN Group A", requested: "1h ago", risk: "low", status: "auto-approved" },
];

const SEV_STYLES: Record<string, { bg: string; text: string }> = {
  "auto-approved": { bg: "#10b98120", text: "#10b981" },
  "pending": { bg: "#f59e0b20", text: "#f59e0b" },
  "flagged": { bg: "#ef444420", text: "#ef4444" },
};

export default function Dashboard() {
  const totalIdentities = useAnimatedValue(318);
  const riskScore = useAnimatedValue(23);
  const hoursaved = useAnimatedValue(94);
  const orphans = useAnimatedValue(23);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0f1e", color: "#e2e8f0" }}>
      <Header />
      <div style={{ paddingTop: 68, minHeight: "100vh" }}>
        {/* Dashboard header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <div style={{ fontSize: "0.875rem", color: "#475569", textTransform: "uppercase", letterSpacing: "0.12em" }}>SaaS Dashboard</div>
            <h1 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#f1f5f9" }}>Identity Command Center — Acme Corp</h1>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.375rem 0.875rem", backgroundColor: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 9999, fontSize: "0.9375rem", color: "#10b981" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#10b981", animation: "pulse2 2s infinite" }} />
              All Systems Nominal
            </div>
            <button type="button" aria-label="Notifications" style={{ padding: "0.5rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#94a3b8", cursor: "pointer" }}><Bell style={{ width: 16, height: 16 }} /></button>
            <button type="button" aria-label="Settings" style={{ padding: "0.5rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, color: "#94a3b8", cursor: "pointer" }}><Settings style={{ width: 16, height: 16 }} /></button>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, padding: "0 2rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {["overview", "identities", "access", "compliance"].map(tab => (
            <button type="button" key={tab} onClick={() => setActiveTab(tab)}
              style={{ padding: "0.875rem 1.25rem", fontSize: "0.9375rem", fontWeight: 600, color: activeTab === tab ? "#60a5fa" : "#94a3b8", border: "none", borderBottom: `2px solid ${activeTab === tab ? "#60a5fa" : "transparent"}`, background: "none", outline: "none", cursor: "pointer", textTransform: "capitalize", transition: "color 0.15s, border-color 0.15s" }}>
              {tab}
            </button>
          ))}
        </div>

        <div style={{ padding: "1.5rem 2rem" }}>
          {activeTab === "identities" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "1.25rem" }}>Identity Breakdown</div>
                {[
                  { label: "Human Employees", count: 42, color: "#0061d4", pct: 13 },
                  { label: "Bots / Service Accounts", count: 186, color: "#f59e0b", pct: 58 },
                  { label: "AI Agents", count: 67, color: "#10b981", pct: 21 },
                  { label: "Orphaned / Ghost", count: 23, color: "#ef4444", pct: 7 },
                ].map((row, i) => (
                  <div key={i} style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                      <span style={{ fontSize: "0.9375rem", color: "#cbd5e1" }}>{row.label}</span>
                      <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: row.color }}>{row.count}</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 9999 }}>
                      <div style={{ height: "100%", width: `${row.pct}%`, backgroundColor: row.color, borderRadius: 9999, transition: "width 0.6s ease" }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "1.25rem" }}>Recent Identity Events</div>
                {[
                  { icon: "👤", msg: "james.park joined — Peer-Clone provisioned in 6 min", time: "12m ago", color: "#10b981" },
                  { icon: "🤖", msg: "data-ingest-bot-07 created with Admin scope — flagged", time: "34m ago", color: "#ef4444" },
                  { icon: "👻", msg: "ex-employee accounts purged: 5 orphans removed", time: "1h ago", color: "#f59e0b" },
                  { icon: "🔐", msg: "ai-agent-mlops-v3 scope reduced: Admin → Read", time: "2h ago", color: "#0061d4" },
                  { icon: "✅", msg: "Quarterly access review completed in 9 minutes", time: "3h ago", color: "#10b981" },
                ].map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.625rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 8, marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "1rem" }}>{e.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.9375rem", color: "#cbd5e1" }}>{e.msg}</div>
                      <div style={{ fontSize: "0.8125rem", color: "#475569", marginTop: "0.2rem" }}>{e.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "access" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0" }}>Access Request Queue</div>
                <div style={{ fontSize: "0.9375rem", color: "#64748b" }}>4 requests · 2 auto-approved</div>
              </div>
              {[
                { user: "sarah.chen", resource: "Finance DB", requested: "10m ago", risk: "low", status: "auto-approved", reason: "Peer-clone match: 11/12 peers have access" },
                { user: "AI Agent: mlops-v3", resource: "Training Cluster", requested: "15m ago", risk: "medium", status: "pending", reason: "New agent type — awaiting policy confirmation" },
                { user: "bot: report-gen", resource: "HR System", requested: "22m ago", risk: "high", status: "flagged", reason: "Cross-department access violates Toxic Combination policy" },
                { user: "james.park", resource: "VPN Group A", requested: "1h ago", risk: "low", status: "auto-approved", reason: "Standard onboarding provision — role match confirmed" },
              ].map((r, i) => (
                <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: `1px solid ${r.risk === "high" ? "rgba(239,68,68,0.3)" : r.risk === "medium" ? "rgba(245,158,11,0.3)" : "rgba(255,255,255,0.06)"}`, borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.625rem" }}>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#e2e8f0" }}>{r.user} <span style={{ color: "#475569", fontWeight: 400 }}>→</span> <span style={{ color: "#60a5fa" }}>{r.resource}</span></div>
                    <div style={{ padding: "0.25rem 0.75rem", borderRadius: 9999, fontSize: "0.8125rem", fontWeight: 700, backgroundColor: r.status === "auto-approved" ? "rgba(16,185,129,0.15)" : r.status === "flagged" ? "rgba(239,68,68,0.15)" : "rgba(245,158,11,0.15)", color: r.status === "auto-approved" ? "#10b981" : r.status === "flagged" ? "#ef4444" : "#f59e0b" }}>{r.status}</div>
                  </div>
                  <div style={{ fontSize: "0.9375rem", color: "#64748b" }}>{r.reason}</div>
                  <div style={{ fontSize: "0.8125rem", color: "#475569", marginTop: "0.375rem" }}>{r.requested}</div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "compliance" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "1.25rem" }}>Compliance Posture</div>
                {[
                  { standard: "PCI DSS 4.0", status: "Compliant", pct: 97, color: "#10b981" },
                  { standard: "SOC 2 Type II", status: "Compliant", pct: 94, color: "#10b981" },
                  { standard: "HIPAA § 164.312(a)", status: "In Progress", pct: 78, color: "#f59e0b" },
                  { standard: "ISO 27001", status: "Planned", pct: 45, color: "#64748b" },
                ].map((row, i) => (
                  <div key={i} style={{ marginBottom: "1.125rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                      <span style={{ fontSize: "0.9375rem", color: "#cbd5e1", fontWeight: 500 }}>{row.standard}</span>
                      <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: row.color }}>{row.status}</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 9999 }}>
                      <div style={{ height: "100%", width: `${row.pct}%`, backgroundColor: row.color, borderRadius: 9999 }} />
                    </div>
                    <div style={{ fontSize: "0.8125rem", color: "#475569", marginTop: "0.25rem" }}>{row.pct}% controls passing</div>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "1.25rem" }}>Evidence Collection</div>
                {[
                  { label: "Access log entries collected today", val: "14,382", color: "#60a5fa" },
                  { label: "Policy violations auto-remediated", val: "47", color: "#10b981" },
                  { label: "Audit reports generated this month", val: "3", color: "#8b5cf6" },
                  { label: "Days until next SOC 2 audit", val: "42", color: "#f59e0b" },
                  { label: "Hours saved vs. manual evidence", val: "118 hrs", color: "#10b981" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.875rem 0", borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                    <span style={{ fontSize: "0.9375rem", color: "#94a3b8" }}>{item.label}</span>
                    <span style={{ fontSize: "1rem", fontWeight: 700, color: item.color }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "overview" && <>
          {/* KPI cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { icon: Users, label: "Total Identities", val: totalIdentities, unit: "", color: "#60a5fa", delta: "+12 this week", positive: true },
              { icon: AlertTriangle, label: "Risk Score", val: riskScore, unit: "/100", color: "#f59e0b", delta: "−18 from last week", positive: true },
              { icon: Clock, label: "Hours Saved/Qtr", val: hoursaved, unit: "hrs", color: "#10b981", delta: "vs. 120hr manual", positive: true },
              { icon: Bot, label: "Orphan Accounts", val: orphans, unit: "", color: "#ef4444", delta: "Auto-purge queued", positive: false },
            ].map(k => {
              const Icon = k.icon;
              return (
                <div key={k.label} style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.25rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                    <div style={{ fontSize: "0.875rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k.label}</div>
                    <div style={{ padding: "0.375rem", backgroundColor: k.color + "15", borderRadius: 8 }}>
                      <Icon style={{ width: 14, height: 14, color: k.color }} />
                    </div>
                  </div>
                  <div style={{ fontSize: "2rem", fontWeight: 800, color: k.color, lineHeight: 1 }}>
                    {k.val}<span style={{ fontSize: "0.9rem", color: "#475569", fontWeight: 400 }}>{k.unit}</span>
                  </div>
                  <div style={{ fontSize: "0.875rem", color: k.positive ? "#10b981" : "#ef4444", marginTop: "0.5rem" }}>
                    {k.positive ? "↓" : "↑"} {k.delta}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.5rem", marginBottom: "1.5rem" }}>
            {/* Risk trend chart */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div>
                  <div style={{ fontSize: "0.9375rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em" }}>Risk Score Trend</div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0" }}>7-Day Risk Reduction</div>
                </div>
                <div style={{ fontSize: "0.9375rem", color: "#10b981", fontWeight: 600 }}>↓ 48% this week</div>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <AreaChart data={riskHistory}>
                  <defs>
                    <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="blockGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="t" tick={{ fontSize: 10, fill: "#475569" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 10, fill: "#475569" }} axisLine={false} tickLine={false} width={30} />
                  <Tooltip contentStyle={{ backgroundColor: "#1e2433", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }} />
                  <Area type="monotone" dataKey="risk" stroke="#ef4444" fill="url(#riskGrad)" strokeWidth={2} name="Risk Score" />
                  <Area type="monotone" dataKey="blocked" stroke="#10b981" fill="url(#blockGrad)" strokeWidth={2} name="Threats Blocked" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Identity breakdown pie */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ fontSize: "0.9375rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Identity Fabric</div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0", marginBottom: "0.75rem" }}>Breakdown by Type</div>
              <ResponsiveContainer width="100%" height={130}>
                <PieChart>
                  <Pie data={identityBreakdown} cx="50%" cy="50%" innerRadius={40} outerRadius={60} paddingAngle={3} dataKey="value">
                    {identityBreakdown.map((e, i) => <Cell key={i} fill={e.color} />)}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#1e2433", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                {identityBreakdown.map(e => (
                  <div key={e.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: e.color }} />
                      <span style={{ fontSize: "0.9375rem", color: "#94a3b8" }}>{e.name}</span>
                    </div>
                    <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: e.color }}>{e.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {/* Recent events */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0" }}>Live Event Feed</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", color: "#10b981" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#10b981", animation: "pulse2 2s infinite" }} />
                  Live
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {recentEvents.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", padding: "0.625rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.04)" }}>
                    <div style={{ fontSize: "1rem", flexShrink: 0 }}>{e.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "0.9375rem", color: "#94a3b8" }}>{e.msg}</div>
                      <div style={{ fontSize: "0.68rem", color: "#475569", marginTop: "0.2rem" }}>{e.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Access request queue */}
            <div style={{ backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12, padding: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                <div style={{ fontSize: "1rem", fontWeight: 700, color: "#e2e8f0" }}>Access Request Queue</div>
                <div style={{ fontSize: "0.875rem", color: "#64748b" }}>4 pending</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {accessQueue.map((r, i) => (
                  <div key={i} style={{ padding: "0.875rem", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.375rem" }}>
                      <div style={{ fontSize: "0.82rem", fontWeight: 600, color: "#e2e8f0" }}>{r.user}</div>
                      <div style={{ padding: "0.2rem 0.625rem", borderRadius: 9999, fontSize: "0.8125rem", fontWeight: 700, backgroundColor: SEV_STYLES[r.status]?.bg, color: SEV_STYLES[r.status]?.text }}>
                        {r.status}
                      </div>
                    </div>
                    <div style={{ fontSize: "0.9375rem", color: "#64748b" }}>→ {r.resource} · {r.requested}</div>
                    <div style={{ fontSize: "0.875rem", color: r.risk === "high" ? "#ef4444" : r.risk === "medium" ? "#f59e0b" : "#10b981", marginTop: "0.25rem" }}>
                      Risk: {r.risk}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </>}
        </div>
      </div>
      <Footer />
      <style>{`@keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
}
