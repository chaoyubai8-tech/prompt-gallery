import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  prompts,
  getPromptById,
  getCategoryInfo,
  getPromptsByCategory,
} from "@/data/prompts";
import PromptDetail from "./PromptDetail";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return prompts.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const prompt = getPromptById(id);
  if (!prompt) return {};

  const catInfo = getCategoryInfo(prompt.category);
  const title = `AI ${catInfo?.name} Figure — ${prompt.title}`;

  return {
    title,
    description: `${prompt.prompt.slice(0, 155)}...`,
    keywords: [
      ...prompt.tags,
      "AI scientific illustration",
      "FigureLabs",
      catInfo?.name || "",
      "scientific figure prompt",
    ],
    openGraph: {
      title,
      description: prompt.prompt.slice(0, 200),
      type: "article",
      url: `https://gallery.figurelabs.ai/prompt/${prompt.id}`,
    },
    twitter: {
      card: "summary",
      title: prompt.title,
      description: prompt.prompt.slice(0, 200),
    },
  };
}

export default async function PromptPage({ params }: PageProps) {
  const { id } = await params;
  const prompt = getPromptById(id);
  if (!prompt) notFound();

  const catInfo = getCategoryInfo(prompt.category)!;
  const related = getPromptsByCategory(prompt.category)
    .filter((p) => p.id !== prompt.id)
    .slice(0, 3);

  return (
    <PromptDetail prompt={prompt} catInfo={catInfo} related={related} />
  );
}
