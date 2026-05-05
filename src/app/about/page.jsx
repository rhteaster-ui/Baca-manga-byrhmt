import Link from "next/link";

const tech = [
  { icon: "⚛️", name: "Frontend", desc: "Next.js 15 / JSX" },
  { icon: "🎨", name: "Styling", desc: "Tailwind CSS" },
  { icon: "📖", name: "Sumber", desc: "MangaDex API" },
  { icon: "☁️", name: "Hosting", desc: "Vercel Serverless" },
];

const socials = [
  { href: "https://whatsapp.com/channel/0029VbBjyjlJ93wa6hwSWa0p", label: "WA Channel" },
  { href: "t.me/rAi_engine", label: "Telegram" },
  { href: "https://www.tiktok.com/@r_hmtofc?_r=1&_t=ZS-94KRfWQjeUu", label: "TikTok" },
  { href: "https://github.com/rahmat-369", label: "GitHub" },
  { href: "https://www.instagram.com/rahmt_nhw?igsh=MWQwcnB3bTA2ZnVidg==", label: "Instagram" },
];

export const metadata = {
  title: "About — MangaRift",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: "#080a0f" }}>
      <div className="max-w-lg mx-auto px-4 py-6 space-y-4">

        {/* Back */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white mb-2">
          ← Kembali
        </Link>

        {/* Hero Card */}
        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,rgba(245,158,11,0.1),rgba(239,68,68,0.06))",
            border: "1px solid rgba(245,158,11,0.12)",
          }}
        >
          <div className="relative flex flex-col items-center py-8 px-5 text-center">
            {/* glow */}
            <div
              className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle,rgba(245,158,11,0.18),transparent 70%)", filter: "blur(30px)" }}
            />

            {/* App logo */}
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4"
              style={{
                background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                boxShadow: "0 0 40px rgba(245,158,11,0.35)",
                border: "1px solid rgba(245,158,11,0.3)",
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M6 2h10a2 2 0 012 2v16l-6-3-6 3V4a2 2 0 012-2z" fill="white" opacity="0.95"/>
                <path d="M9 7h6M9 10.5h6M9 14h4" stroke="rgba(8,10,15,0.65)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>

            <h1
              className="text-2xl font-bold mb-1"
              style={{
                background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              MangaRift
            </h1>
            <p className="text-xs mb-5" style={{ color: "#6b7280" }}>
              Platform Baca Manga, Manhua &amp; Manhwa · v1.0.0
            </p>

            {/* Dev card */}
            <div
              className="w-full flex items-center gap-3 rounded-2xl p-3"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(245,158,11,0.1)" }}
            >
              {/* Avatar placeholder using initials */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-sm"
                style={{
                  background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                  color: "#080a0f",
                  border: "1px solid rgba(245,158,11,0.4)",
                }}
              >
                R
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-semibold text-white">R_hmt ofc</p>
                <p className="text-[11px]" style={{ color: "#6b7280" }}>Lead Developer &amp; UI/UX Designer</p>
              </div>
              <span
                className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{ background: "rgba(245,158,11,0.13)", color: "#f59e0b" }}
              >
                Owner
              </span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: "#4b5563" }}>Hubungi Dev</p>
          <div className="flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full transition-all hover:text-white"
                style={{
                  color: "#9ca3af",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* About project */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#f59e0b" }}
          >
            Tentang Project
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
            <span className="text-white font-medium">MangaRift</span> adalah platform baca manga gratis berbasis web.
            Data bersumber dari{" "}
            <span style={{ color: "#f59e0b" }}>MangaDex API</span> yang menyediakan koleksi manga, manhua, dan manhwa dari seluruh dunia.
          </p>
        </div>

        {/* PWA info */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.12)" }}
        >
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#f59e0b" }}
          >
            📲 Install sebagai App
          </h2>
          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
            MangaRift dapat diinstall sebagai aplikasi. Di browser, buka menu{" "}
            <span className="text-white">Settings → Add to Home Screen</span> atau{" "}
            <span className="text-white">Profil → Tentang Web (About)</span> untuk install PWA.
          </p>
        </div>

        {/* Tech stack */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <h2
            className="text-[11px] font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#f59e0b" }}
          >
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {tech.map((t) => (
              <div key={t.name} className="flex items-center gap-3 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)" }}>
                <span className="text-xl">{t.icon}</span>
                <div>
                  <p className="text-xs font-medium text-white">{t.name}</p>
                  <p className="text-[10px]" style={{ color: "#6b7280" }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-2xl p-4"
          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)" }}
        >
          <h2 className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: "#ef4444" }}>
            ⚠️ Disclaimer
          </h2>
          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>
            MangaRift tidak menyimpan konten manga di server kami. Semua data bersumber dari MangaDex. Dibuat untuk tujuan edukasi &amp; pengembangan.
          </p>
        </div>

        <div className="text-center py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <p className="text-[11px]" style={{ color: "#374151" }}>© 2026 R_hmt ofc · MangaRift 📚</p>
        </div>
      </div>
    </div>
  );
}
