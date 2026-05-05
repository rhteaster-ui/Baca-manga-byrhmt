"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();

  function handleSearch(e) {
    e.preventDefault();
    if (!searchVal.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchVal.trim())}`);
    setSearchVal("");
    setMenuOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-[100]"
      style={{
        background: "rgba(8,10,15,0.93)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-3 px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              boxShadow: "0 0 16px rgba(245,158,11,0.35)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16v16H4z" fill="none"/>
              <path d="M6 2h10a2 2 0 012 2v16l-6-3-6 3V4a2 2 0 012-2z" fill="white" opacity="0.9"/>
              <path d="M9 8h6M9 11h6M9 14h4" stroke="rgba(8,10,15,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span
            className="text-lg font-bold hidden sm:block"
            style={{
              background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.01em",
            }}
          >
            MangaRift
          </span>
        </Link>

        {/* Desktop Search */}
        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Cari manga, manhua, manhwa..."
              className="w-full text-sm text-gray-200 placeholder-gray-600 rounded-xl pl-9 pr-4 py-2 outline-none transition-colors"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
              onFocus={e => e.target.style.borderColor = "rgba(245,158,11,0.4)"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.09)"}
            />
          </div>
        </form>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/" className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all">Home</Link>
          <Link href="/search" className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all">Jelajah</Link>
          <Link href="/about" className="text-sm text-gray-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-all">About</Link>
        </nav>

        {/* Mobile icons */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/search"
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <Search size={18} />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-gray-400"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-2 border-t"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}
        >
          <form onSubmit={handleSearch} className="mt-3">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                placeholder="Cari manga..."
                className="w-full text-sm text-gray-200 placeholder-gray-600 rounded-xl pl-9 pr-4 py-2.5 outline-none"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
              />
            </div>
          </form>
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 py-2 px-3 rounded-lg hover:bg-white/5">🏠 Home</Link>
          <Link href="/search" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 py-2 px-3 rounded-lg hover:bg-white/5">🔍 Jelajah Manga</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-300 py-2 px-3 rounded-lg hover:bg-white/5">👤 About</Link>
        </div>
      )}
    </header>
  );
}
