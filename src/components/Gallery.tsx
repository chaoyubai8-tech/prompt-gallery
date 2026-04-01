"use client";

import { useState, useMemo } from "react";
import PromptCard from "./PromptCard";
import {
  prompts,
  categories,
  type Category,
  type CategoryInfo,
} from "@/data/prompts";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const categoryMap = useMemo(() => {
    const map: Record<string, CategoryInfo> = {};
    categories.forEach((c) => (map[c.id] = c));
    return map;
  }, []);

  const filtered = useMemo(() => {
    let result = prompts;

    if (activeCategory !== "all") {
      result = result.filter((p) => p.category === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.titleZh.includes(search.trim()) ||
          p.prompt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [search, activeCategory]);

  const hotPrompts = useMemo(() => prompts.filter((p) => p.hot), []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="py-20 px-4 text-center"
        style={{ background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)" }}
      >
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium mb-6" style={{ color: "var(--color-text-secondary)" }}>
            🧪 AI Scientific Illustrator
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4" style={{ color: "var(--color-brand)" }}>
            Turn{" "}
            <span style={{ color: "var(--color-accent)" }}>Prompts</span>
            {" "}into
            <br />
            Publication-Ready Figures
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
            {prompts.length}+ curated prompts for generating scientific
            illustrations. Free to browse, copy &amp; use with FigureLabs.
          </p>

          {/* Search */}
          <div className="max-w-lg mx-auto relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search prompts... e.g. CRISPR, Transformer, heart"
              className="w-full pl-12 pr-5 py-3.5 text-base rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 shadow-sm"
              style={{ fontSize: "16px" }}
            />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-6">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeCategory === "all"
                ? "text-white"
                : "bg-white border border-gray-200 hover:bg-gray-50"
            }`}
            style={activeCategory === "all" ? { backgroundColor: "var(--color-brand)", color: "white" } : { color: "var(--color-text-secondary)" }}
          >
            All ({prompts.length})
          </button>
          {categories.map((cat) => {
            const count = prompts.filter((p) => p.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isActive
                    ? `${cat.colorClass}`
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
                style={!isActive ? { color: "var(--color-text-secondary)" } : {}}
              >
                {cat.icon} {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Hot Prompts Section (only when no search/filter) */}
      {!search && activeCategory === "all" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold" style={{ color: "var(--color-brand)" }}>
              🔥 Hot Prompts
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hotPrompts.map((p) => (
              <PromptCard
                key={p.id}
                prompt={p}
                categoryInfo={categoryMap[p.category]}
              />
            ))}
          </div>
        </section>
      )}

      {/* All / Filtered Prompts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        <div className="flex items-center gap-3 mb-5">
          <h2 className="text-lg font-bold" style={{ color: "var(--color-brand)" }}>
            {search
              ? `Search Results (${filtered.length})`
              : activeCategory !== "all"
              ? `${categoryMap[activeCategory]?.icon} ${categoryMap[activeCategory]?.name} (${filtered.length})`
              : `All Prompts (${filtered.length})`}
          </h2>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {filtered.length === 0 ? (
          <div className="fl-card p-12 text-center">
            <p className="text-3xl mb-3">🔍</p>
            <p className="text-lg font-bold" style={{ color: "var(--color-brand)" }}>No prompts found</p>
            <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
              Try a different search term or category
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <PromptCard
                key={p.id}
                prompt={p}
                categoryInfo={categoryMap[p.category]}
                showCategory={activeCategory === "all"}
              />
            ))}
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-16">
        <div
          className="rounded-2xl p-8 sm:p-12 text-center"
          style={{ backgroundColor: "var(--color-brand)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Ready to Create Your Figures?
          </h2>
          <p className="text-white/70 mb-6 max-w-lg mx-auto text-base">
            FigureLabs turns text into publication-ready scientific
            illustrations in seconds. No design skills needed.
          </p>
          <a
            href="https://www.figurelabs.ai/inspiration?utm_source=prompt-gallery&utm_medium=bottom-cta"
            target="_blank"
            rel="noopener noreferrer"
            className="fl-btn-accent inline-block px-8 py-3 text-base no-underline"
          >
            Start for Free ✦
          </a>
          <p className="text-white/50 text-sm mt-3">Get 200 free credits | No credit card required</p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Prompts", value: `${prompts.length}+` },
            { label: "Categories", value: `${categories.length}` },
            { label: "100% Free", value: "✓" },
            { label: "Updated Weekly", value: "✓" },
          ].map((stat) => (
            <div key={stat.label} className="fl-card p-5 text-center">
              <div className="text-2xl font-extrabold" style={{ color: "var(--color-brand)" }}>
                {stat.value}
              </div>
              <div className="text-xs font-medium mt-1" style={{ color: "var(--color-text-muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
