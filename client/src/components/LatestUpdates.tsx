import { useLocation } from "wouter";
const updates = [
  { date: "Mar 10, 2026", tag: "Announcement", title: "Unkov Closes $4M Seed Round", desc: "Funding to accelerate product development and go-to-market expansion in BFSI and Healthcare." },
  { date: "Feb 28, 2026", tag: "Integration", title: "Native Okta Integration Live", desc: "Unkov now connects directly to Okta for seamless identity discovery and governance across human and non-human identities." },
  { date: "Feb 15, 2026", tag: "Press", title: "Featured in TechCrunch", desc: "Highlighted as a key player in the emerging agentic identity management space." },
];
export default function LatestUpdates() {
  const [, navigate] = useLocation();
  return (
    <section className="section" style={{ backgroundColor: "#faf9f7" }}>
      <div className="container mx-auto px-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="section-label">Latest</span>
            <h2 className="section-heading">Updates</h2>
          </div>
          <button onClick={() => navigate("/blog")} className="btn-ghost text-sm hidden md:inline-flex">View all →</button>
        </div>
        <div className="grid md:grid-cols-1 md:grid-cols-3 gap-5">
          {updates.map((u, i) => (
            <div key={i} className="card p-6 cursor-pointer group" style={{ borderColor: "#dcd6ce" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#00297a")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#dcd6ce")}>
              <div className="flex items-center justify-between mb-4">
                <span className="badge-blue">{u.tag}</span>
                <span className="text-xs" style={{ color: "#4a5568" }}>{u.date}</span>
              </div>
              <div className="text-sm font-semibold mb-2 leading-snug" style={{ color: "#1a1a2e" }}>{u.title}</div>
              <p className="text-sm leading-relaxed" style={{ color: "#3d4759" }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
