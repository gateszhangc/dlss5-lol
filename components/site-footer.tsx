import Link from "next/link";

import {
  primaryNavigation,
  SITE_LAST_UPDATED,
  SITE_SOURCES,
  SITE_URL,
} from "@/content/site";
import { formatDate } from "@/lib/seo";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card/50">
      <div className="shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-4">
            <p className="font-heading text-lg font-semibold tracking-tight">
              DLSS 5 reference coverage without rumor padding.
            </p>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              This is an independent editorial site focused on publicly
              announced NVIDIA DLSS 5 information. It is not affiliated with or
              endorsed by NVIDIA.
            </p>
          </div>

          <div className="space-y-4">
            <p className="font-heading text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Core pages
            </p>
            <div className="flex flex-col gap-2">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-heading text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Sources
            </p>
            <div className="flex flex-col gap-3">
              {SITE_SOURCES.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {source.title}
                  <span className="block text-xs text-muted-foreground/80">
                    {source.publisher} · {formatDate(source.publishedAt)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Canonical domain: {SITE_URL}</p>
          <p>Last editorial refresh: {formatDate(SITE_LAST_UPDATED)}</p>
        </div>
      </div>
    </footer>
  );
}
