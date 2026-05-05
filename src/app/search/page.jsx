"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import MangaCard from "@/components/manga-card";
import { Search, Loader2 } from "lucide-react";
import { Suspense } from "react";

const SORT_OPTIONS = [
  { value: "latestUploadedChapter", label: "🕐 Terbaru" },
  { value: "followedCount", label: "🔥 Populer" },
  { value: "rating", label: "⭐ Rating" },
  { value: "relevance", label: "🎯 Relevan" },
];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const qParam = searchParams.get("q") || "";
  const sortParam = searchParams.get("sort") || "latestUploadedChapter";

  const [query, setQuery] = useState(qParam);
  const [sort, setSort] = useState(sortParam);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [total, setTotal] = useState(0);
  const LIMIT = 24;

  const fetchResults = useCallback(async (q, s, off = 0) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit: LIMIT, offset: off, sort: s });
      if (q) params.set("q", q);
      const res = await fetch(`/api/manga?${params}`);
      const data = await res.json();
      if (off === 0) {
        setResults(data.data || []);
      } else {
        setResults((prev) => [...prev, ...(data.data || [])]);
      }
      setTotal(data.total || 0);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setOffset(0);
    fetchResults(qParam, sortParam, 0);
    setQuery(qParam);
    setSort(sortParam);
  }, [qParam, sortParam, fetchResults]);

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    params.set("sort", sort);
    router.push(`/search?${params}`);
  }

  function handleSortChange(s) {
    setSort(s);
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    params.set("sort", s);
    router.push(`/search?${params}`);
  }

  function loadMore() {
    const newOffset = offset + LIMIT;
    setOffset(newOffset);
    fetchResults(qParam, sortParam, newOffset);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-5">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari manga, manhua, manhwa..."
            className="w-full text-sm text-gray-200 placeholder-gray-600 pl-11 pr-4 py-3.5 rounded-2xl outline-none focus:border-amber-500/50 transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold px-3 py-1.5 rounded-xl text-white transition-all"
            style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}
          >
            Cari
          </button>
        </div>
      </form>

      {/* Sort Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
        {SORT_OPTIONS.map((s) => (
          <button
            key={s.value}
            onClick={() => handleSortChange(s.value)}
            className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full transition-all"
            style={{
              background: sort === s.value ? "linear-gradient(135deg,#f59e0b,#ef4444)" : "rgba(255,255,255,0.05)",
              border: sort === s.value ? "none" : "1px solid rgba(255,255,255,0.08)",
              color: sort === s.value ? "#080a0f" : "#9ca3af",
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Results header */}
      {!loading && results.length > 0 && (
        <p className="text-xs text-gray-500 mb-4">
          {qParam ? `Hasil untuk "${qParam}" — ` : ""}{total.toLocaleString()} judul ditemukan
        </p>
      )}

      {/* Grid */}
      {loading && results.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 size={32} className="animate-spin text-amber-400" />
          <p className="text-sm text-gray-500">Mencari...</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-4xl mb-3">🔍</p>
          <p className="text-gray-400">Tidak ada hasil ditemukan</p>
        </div>
      ) : (
        <>
          <div className="manga-grid">
            {results.map((m) => (
              <MangaCard key={m.id} manga={m} />
            ))}
          </div>

          {/* Load More */}
          {results.length < total && (
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMore}
                disabled={loading}
                className="flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl text-white transition-all active:scale-95 disabled:opacity-50"
                style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                {loading ? "Memuat..." : "Muat Lebih Banyak"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchContent />
    </Suspense>
  );
}
