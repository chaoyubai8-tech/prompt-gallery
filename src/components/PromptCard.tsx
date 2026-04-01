"use client";

import { useState } from "react";
import type { Prompt, CategoryInfo } from "@/data/prompts";

interface PromptCardProps {
  prompt: Prompt;
  categoryInfo: CategoryInfo;
  showCategory?: boolean;
}

export default function PromptCard({
  prompt,
  categoryInfo,
  showCategory = true,
}: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tryUrl = `https://www.figurelabs.ai/inspiration?utm_source=prompt-gallery&utm_medium=prompt-card&utm_content=${prompt.id}`;

  return (
    <div className="fl-card p-5 flex flex-col gap-3 h-full">
      {/* Top row: category badge + hot */}
      <div className="flex items-center gap-2 flex-wrap">
        {showCategory && (
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${categoryInfo.colorClass}`}
          >
            {categoryInfo.icon} {categoryInfo.name}
          </span>
        )}
        {prompt.hot && (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-50 text-amber-700">
            🔥 HOT
          </span>
        )}
      </div>

      {/* Title */}
      <a
        href={`/prompt/${prompt.id}`}
        className="no-underline group"
      >
        <h3 className="font-bold text-base leading-tight group-hover:text-blue-700 transition-colors" style={{ color: "var(--color-brand)" }}>
          {prompt.title}
        </h3>
        <p className="text-sm mt-0.5" style={{ color: "var(--color-text-muted)" }}>{prompt.titleZh}</p>
      </a>

      {/* Prompt preview */}
      <p className="text-sm leading-relaxed line-clamp-3 flex-1" style={{ color: "var(--color-text-secondary)" }}>
        {prompt.prompt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {prompt.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="fl-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2 mt-1">
        <button
          onClick={handleCopy}
          className={`fl-btn-secondary flex-1 px-3 py-2 text-sm ${
            copied ? "!bg-green-50 !text-green-700 !border-green-200" : ""
          }`}
        >
          {copied ? "✓ Copied!" : "📋 Copy Prompt"}
        </button>
        <a
          href={tryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fl-btn-primary flex-1 px-3 py-2 text-sm text-center no-underline inline-flex items-center justify-center"
        >
          ▶ Generate Figure
        </a>
      </div>
    </div>
  );
}
