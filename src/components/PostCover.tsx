import type { Post } from "@/content/posts";

// Designed cover for each post, drawn in SVG, so posts need no stock photos.
// Each category gets its own illustration; covers lift and glow on hover inside a .group card.
function Art({ category, cover }: { category: Post["category"]; cover?: Post["cover"] }) {
  const stroke = "#34d399";
  if (cover === "checklist")
    return (
      <g>
        <rect x="110" y="35" width="180" height="185" rx="16" fill="#ffffff" fillOpacity="0.06" stroke={stroke} strokeOpacity="0.6" strokeWidth="2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i} transform={`translate(132 ${62 + i * 40})`}>
            <rect width="22" height="22" rx="6" fill={i < 3 ? "#047857" : "none"} stroke={stroke} strokeWidth="2" />
            {i < 3 && <path d="M6 11 l4 4 7-8" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />}
            <rect x="34" y="7" width={i === 1 ? 80 : 104} height="8" rx="4" fill="#ffffff" fillOpacity={i < 3 ? 0.8 : 0.3} />
          </g>
        ))}
      </g>
    );
  if (cover === "split")
    return (
      <g>
        {[
          { w: 182, label: "70%", o: 1 },
          { w: 52, label: "20%", o: 0.65 },
          { w: 26, label: "10%", o: 0.35 },
        ].reduce<{ x: number; els: React.ReactNode[] }>(
          (acc, seg, i) => {
            acc.els.push(
              <g key={i}>
                <rect x={acc.x} y="95" width={seg.w - 6} height="60" rx="10" fill={stroke} fillOpacity={seg.o} />
                <text x={acc.x + (seg.w - 6) / 2} y={i === 2 ? 82 : 185} textAnchor="middle" fill="#ffffff" fontSize="18" fontWeight="800">
                  {seg.label}
                </text>
              </g>,
            );
            acc.x += seg.w;
            return acc;
          },
          { x: 70, els: [] },
        ).els}
      </g>
    );
  switch (category) {
    case "Websites":
      return (
        <g>
          <rect x="70" y="40" width="260" height="170" rx="14" fill="#ffffff" fillOpacity="0.06" stroke={stroke} strokeOpacity="0.6" strokeWidth="2" />
          <line x1="70" y1="68" x2="330" y2="68" stroke={stroke} strokeOpacity="0.4" strokeWidth="2" />
          <circle cx="88" cy="54" r="4" fill={stroke} />
          <circle cx="102" cy="54" r="4" fill={stroke} fillOpacity="0.6" />
          <rect x="92" y="90" width="120" height="14" rx="7" fill="#ffffff" fillOpacity="0.85" />
          <rect x="92" y="114" width="170" height="8" rx="4" fill="#ffffff" fillOpacity="0.3" />
          <rect x="92" y="130" width="140" height="8" rx="4" fill="#ffffff" fillOpacity="0.3" />
          <rect x="92" y="156" width="88" height="28" rx="14" fill="#047857" />
        </g>
      );
    case "SEO":
      return (
        <g>
          <rect x="70" y="50" width="260" height="40" rx="20" fill="#ffffff" fillOpacity="0.9" />
          <circle cx="94" cy="70" r="8" fill="none" stroke="#047857" strokeWidth="3" />
          <rect x="112" y="65" width="120" height="10" rx="5" fill="#0a0a0a" fillOpacity="0.5" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={110 + i * 50} y={200 - (i + 1) * 22} width="32" height={(i + 1) * 22} rx="6" fill={stroke} fillOpacity={0.35 + i * 0.2} />
          ))}
        </g>
      );
    case "Ads":
      return (
        <g>
          {[70, 50, 30, 12].map((r, i) => (
            <circle key={r} cx="200" cy="125" r={r} fill={i === 3 ? stroke : "none"} stroke={stroke} strokeOpacity={0.3 + i * 0.2} strokeWidth="3" />
          ))}
          <line x1="260" y1="65" x2="208" y2="117" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
          <path d="M262 52 l10 10 -14 4 z" fill="#ffffff" />
        </g>
      );
    case "Social media":
      return (
        <g>
          <rect x="80" y="55" width="150" height="56" rx="22" fill="#ffffff" fillOpacity="0.9" />
          <rect x="100" y="76" width="90" height="10" rx="5" fill="#0a0a0a" fillOpacity="0.45" />
          <rect x="170" y="130" width="150" height="56" rx="22" fill="#047857" />
          <rect x="190" y="151" width="100" height="10" rx="5" fill="#ffffff" fillOpacity="0.7" />
          <circle cx="300" cy="80" r="16" fill={stroke} fillOpacity="0.8" />
        </g>
      );
    default:
      return (
        <g>
          <polyline
            points="70,190 130,160 180,170 240,110 290,120 330,60"
            fill="none"
            stroke={stroke}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {[
            [130, 160],
            [240, 110],
            [330, 60],
          ].map(([x, y]) => (
            <circle key={x} cx={x} cy={y} r="8" fill="#0a0a0a" stroke="#ffffff" strokeWidth="3" />
          ))}
          <line x1="70" y1="210" x2="330" y2="210" stroke="#ffffff" strokeOpacity="0.2" strokeWidth="2" />
        </g>
      );
  }
}

export function PostCover({ post, className = "" }: { post: Post; className?: string }) {
  return (
    <div className={`relative isolate overflow-hidden bg-ink ${className}`}>
      <div aria-hidden className="absolute -top-1/3 -right-1/4 h-[140%] w-[80%] rounded-full bg-brand/40 blur-3xl transition-transform duration-700 group-hover:scale-110" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: "radial-gradient(rgb(255 255 255 / 0.18) 1px, transparent 1px)", backgroundSize: "18px 18px" }}
      />
      <svg viewBox="0 0 400 250" aria-hidden className="relative h-full w-full transition-transform duration-700 group-hover:-translate-y-1.5 group-hover:scale-[1.04]">
        <Art category={post.category} cover={post.cover} />
      </svg>
      <span className="absolute top-4 left-4 rounded-full bg-white/10 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur">{post.category}</span>
    </div>
  );
}
