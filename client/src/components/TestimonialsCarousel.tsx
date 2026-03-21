import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Unkov reduced our manual access reviews from 120+ hours per quarter to just 12 hours. The ROI was immediate.",
    author: "Sarah Chen",
    title: "CISO",
    company: "Tier-1 Fintech",
  },
  {
    quote: "We caught privilege creep our manual process had missed for over six months — before it became an incident. That alone justified the investment.",
    author: "James Rodriguez",
    title: "VP of Security",
    company: "Healthcare Enterprise",
  },
  {
    quote: "New hire provisioning went from 5 days to under 10 minutes. Our IT team now does security work, not spreadsheet work.",
    author: "Maria Gonzalez",
    title: "IT Director",
    company: "Fortune 500 Technology",
  },
];

export default function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section className="section" style={{ padding: "7rem 0", backgroundColor: "#f0ece6", borderTop: "1px solid #dcd6ce" }}>
      <div className="container mx-auto px-10">
        <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
          <span className="section-label" style={{ display: "block", textAlign: "center", marginBottom: "3rem" }}>Customer Stories</span>

          <blockquote style={{ fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.7, color: "#1a1a2e", marginBottom: "2.5rem", fontStyle: "italic" }}>
            "{t.quote}"
          </blockquote>

          <div style={{ fontSize: "1rem", fontWeight: 700, color: "#1a1a2e" }}>{t.author}</div>
          <div style={{ fontSize: "0.9375rem", color: "#6b7280", marginTop: "0.25rem" }}>{t.title} · {t.company}</div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginTop: "2.5rem" }}>
            <button
              onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #dcd6ce", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#4a5568", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00297a"; (e.currentTarget as HTMLElement).style.color = "#00297a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dcd6ce"; (e.currentTarget as HTMLElement).style.color = "#4a5568"; }}>
              <ChevronLeft className="w-4 h-4" />
            </button>
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setI(idx)}
                style={{ width: idx === i ? 24 : 8, height: 8, borderRadius: "9999px", border: "none", cursor: "pointer", transition: "all 0.2s", backgroundColor: idx === i ? "#00297a" : "#c4b8ae" }} />
            ))}
            <button
              onClick={() => setI((i + 1) % testimonials.length)}
              style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #dcd6ce", backgroundColor: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#4a5568", transition: "all 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#00297a"; (e.currentTarget as HTMLElement).style.color = "#00297a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#dcd6ce"; (e.currentTarget as HTMLElement).style.color = "#4a5568"; }}>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
