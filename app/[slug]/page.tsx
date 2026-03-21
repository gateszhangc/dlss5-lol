import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { articlePages, getArticlePage } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { ArticlePageView } from "@/components/article-page-view";

type ArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articlePages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getArticlePage(slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.metaTitle,
    description: page.description,
    path: page.href,
    keywords: page.keywords,
    type: "article",
  });
}

export default async function ArticleRoute({ params }: ArticleRouteProps) {
  const { slug } = await params;
  const page = getArticlePage(slug);

  if (!page) {
    notFound();
  }

  return <ArticlePageView page={page} />;
}
