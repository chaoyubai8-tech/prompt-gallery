"use client";

import { useState } from "react";
import type { Prompt, CategoryInfo } from "@/data/prompts";
import PromptCard from "@/components/PromptCard";
import { getCategoryInfo } from "@/data/prompts";

interface Props {
  prompt: Prompt;
  catInfo: CategoryInfo;
  related: Prompt[];
}

export default function PromptDetail({ prompt, catInfo, related }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tryUrl = `https://www.figurelabs.ai/inspiration?utm_source=prompt-gallery&utm_medium=detail-page&utm_content=${prompt.id}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>
        <a href="/" className="hover:underline font-medium" style={{ color: "var(--color-text-secondary)" }}>
          Gallery
        </a>
        <span className="text-gray-300">/</span>
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${catInfo.colorClass}`}
        >
          {catInfo.icon} {catInfo.name}
        </span>
        <span className="text-gray-300">/</span>
        <span className="font-medium truncate" style={{ color: "var(--color-brand)" }}>{prompt.title}</span>
      </nav>

      {/* Title */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          {prompt.hot && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700">
              🔥 HOT
            </span>
          )}
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: "var(--color-brand)" }}>
          {prompt.title}
        </h1>
        <p className="text-lg mt-1.5" style={{ color: "var(--color-text-muted)" }}>{prompt.titleZh}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {prompt.tags.map((tag) => (
          <span key={tag} className="fl-tag text-sm px-3 py-1">
            {tag}
          </span>
        ))}
      </div>

      {/* Prompt Content */}
      <div className="fl-card p-6 sm:p-8 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>
            Prompt
          </h2>
          <button
            onClick={handleCopy}
            className={`fl-btn-secondary px-4 py-1.5 text-sm ${
              copied ? "!bg-green-50 !text-green-700 !border-green-200" : ""
            }`}
          >
            {copied ? "✓ Copied!" : "📋 Copy"}
          </button>
        </div>
        <p className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: "var(--color-text-secondary)" }}>
          {prompt.prompt}
        </p>
      </div>

      {/* CTA */}
      <div
        className="rounded-2xl p-6 sm:p-8 text-center mb-12"
        style={{ backgroundColor: "var(--color-brand)" }}
      >
        <h3 className="text-xl font-extrabold text-white mb-2">
          Generate This Figure with AI
        </h3>
        <p className="text-white/70 text-sm mb-5">
          Paste this prompt into FigureLabs and get a publication-ready figure in seconds.
        </p>
        <a
          href={tryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fl-btn-accent inline-block px-8 py-3 text-base no-underline"
        >
          ▶ Generate on FigureLabs →
        </a>
        <p className="text-white/50 text-xs mt-3">Get 200 free credits | No credit card required</p>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: prompt.title,
            description: prompt.prompt,
            keywords: prompt.tags.join(", "),
            creator: {
              "@type": "Organization",
              name: "FigureLabs",
              url: "https://www.figurelabs.ai",
            },
            isAccessibleForFree: true,
          }),
        }}
      />

      {/* Related Prompts */}
      {related.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-5">
            <h2 className="text-lg font-bold" style={{ color: "var(--color-brand)" }}>
              More {catInfo.name} Prompts
            </h2>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => {
              const ci = getCategoryInfo(p.category)!;
              return (
                <PromptCard
                  key={p.id}
                  prompt={p}
                  categoryInfo={ci}
                  showCategory={false}
                />
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
