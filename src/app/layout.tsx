import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FigureLabs Prompt Gallery — AI Scientific Figure Prompts",
    template: "%s | FigureLabs Prompt Gallery",
  },
  description:
    "Explore 50+ curated AI prompts for scientific illustrations. Generate publication-ready figures for biology, chemistry, physics, engineering, medical, and more. Free to browse, copy, and use with FigureLabs.",
  keywords: [
    "AI scientific illustration",
    "scientific figure prompts",
    "FigureLabs",
    "BioRender alternative",
    "AI figure maker",
    "research paper figures",
    "scientific diagram generator",
  ],
  openGraph: {
    title: "FigureLabs Prompt Gallery — AI Scientific Figure Prompts",
    description:
      "50+ curated prompts for generating publication-ready scientific figures with AI. Biology, chemistry, physics, engineering, and more.",
    type: "website",
    url: "https://gallery.figurelabs.ai",
    siteName: "FigureLabs Prompt Gallery",
  },
  twitter: {
    card: "summary_large_image",
    title: "FigureLabs Prompt Gallery",
    description:
      "50+ curated AI prompts for scientific illustrations. Free to browse and use.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        {/* Header */}
        <header className="bg-white sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-base text-white"
                style={{ backgroundColor: "var(--color-brand)" }}
              >
                F
              </div>
              <div>
                <span className="text-base font-bold" style={{ color: "var(--color-brand)" }}>
                  FigureLabs
                </span>
                <span className="text-sm text-gray-400 ml-1.5 font-medium">
                  Prompt Gallery
                </span>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/FigureLabs/prompt-gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="fl-btn-secondary px-4 py-2 text-sm no-underline inline-flex items-center gap-1.5"
              >
                ⭐ GitHub
              </a>
              <a
                href="https://www.figurelabs.ai/inspiration?utm_source=prompt-gallery&utm_medium=header-cta"
                target="_blank"
                rel="noopener noreferrer"
                className="fl-btn-primary px-5 py-2 text-sm no-underline inline-flex items-center gap-1.5"
              >
                Start for Free ✦
              </a>
            </div>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                © 2025 FigureLabs. All prompts are free to use.
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="https://www.figurelabs.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium no-underline"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  FigureLabs.ai
                </a>
                <a
                  href="https://github.com/FigureLabs/prompt-gallery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium no-underline"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  GitHub
                </a>
                <a
                  href="https://twitter.com/FigureLabsAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium no-underline"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  𝕏 / Twitter
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
