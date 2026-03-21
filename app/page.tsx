import Link from "next/link";
import { ArrowRight, CalendarDays, Layers3, Sparkles, Swords } from "lucide-react";

import {
  articlePages,
  confirmedPartners,
  homeFaq,
  homeStats,
  homeTimeline,
  SITE_LAST_UPDATED,
  SITE_SOURCES,
  supportedGames,
} from "@/content/site";
import {
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildWebsiteJsonLd,
  createMetadata,
  formatDate,
} from "@/lib/seo";
import { cn } from "@/lib/utils";
import { HomeExplorer } from "@/components/home-explorer";
import { JsonLd } from "@/components/json-ld";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/lib/button-variants";

export const metadata = createMetadata({
  title: "DLSS 5 Guide, Release Date, Supported Games, and FAQ",
  description:
    "A source-backed DLSS 5 guide covering release timing, neural rendering, official features, announced games, and DLSS 4.5 comparisons.",
  path: "/",
  keywords: ["DLSS 5 guide", "DLSS 5 overview", "DLSS 5 FAQ"],
  type: "website",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildWebsiteJsonLd()} />
      <JsonLd data={buildOrganizationJsonLd()} />
      <JsonLd data={buildFaqJsonLd(homeFaq)} />

      <div className="shell space-y-16 py-8 sm:py-10 lg:space-y-20">
        <section className="hero-panel px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Officially announced</Badge>
                <Badge variant="outline">Launch window: Fall 2026</Badge>
                <Badge variant="outline">15+ announced games</Badge>
              </div>

              <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
                DLSS 5 guide: release date, games, and what NVIDIA announced.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                NVIDIA unveiled DLSS 5 on March 16, 2026 and framed it as a
                real-time neural rendering leap. This site is built to answer the
                highest-intent questions around release timing, features, partner
                support, and the shift from DLSS 4.5.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/what-is-dlss-5"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-5"
                  )}
                >
                  Read what DLSS 5 is
                </Link>
                <Link
                  href="/dlss-5-supported-games"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-full px-5"
                  )}
                >
                  See supported DLSS 5 games
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" />
                  Last refreshed {formatDate(SITE_LAST_UPDATED)}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" />
                  Built from official NVIDIA sources only
                </span>
              </div>
            </div>

            <Card className="surface-card overflow-hidden">
              <CardHeader>
                <CardDescription>Current snapshot</CardDescription>
                <CardTitle className="text-2xl">What matters right now</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {homeStats.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-2xl border border-border/70 bg-background/80 p-4"
                  >
                    <p className="text-sm text-muted-foreground">{fact.label}</p>
                    <p className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {fact.note}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <HomeExplorer
          stats={homeStats}
          timeline={homeTimeline}
          games={supportedGames}
          partners={confirmedPartners}
        />

        <section className="space-y-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Route atlas</p>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
              A 10-page content structure built for DLSS 5 search intent.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {articlePages.map((page) => (
              <Card key={page.slug} className="surface-card group">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="secondary">{page.eyebrow}</Badge>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="text-2xl">{page.title}</CardTitle>
                  <CardDescription>{page.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    href={page.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Read {page.navTitle} <ArrowRight className="size-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="surface-card">
            <CardHeader>
              <div className="flex items-center gap-3 text-primary">
                <Layers3 className="size-5" />
                <span className="eyebrow text-primary">Comparison shorthand</span>
              </div>
              <CardTitle className="text-3xl">
                The easiest way to think about DLSS 5 vs DLSS 4.5
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0 text-base leading-8 text-muted-foreground">
              <p>
                DLSS 4.5 is the most precise current baseline because NVIDIA was
                still actively rolling it into games when DLSS 5 was announced.
              </p>
              <p>
                DLSS 5 is not framed as just a faster or cleaner version of the
                same thing. NVIDIA sells it as a rendering shift that changes how
                light and materials are formed in real time.
              </p>
              <Link
                href="/dlss-5-vs-dlss-4-5"
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "mt-2 rounded-full px-4"
                )}
              >
                Read the full comparison
              </Link>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Positioning",
                body: "DLSS 4.5 extends the current stack. DLSS 5 is marketed as a new neural rendering stage.",
              },
              {
                title: "Availability",
                body: "DLSS 4.5 is already rolling through public game announcements. DLSS 5 is aimed at fall 2026.",
              },
              {
                title: "User takeaway",
                body: "DLSS 4.5 is the shipping-era reference. DLSS 5 is the forward-looking visual leap to watch.",
              },
            ].map((item) => (
              <Card key={item.title} className="surface-card">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
                  {item.body}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="surface-card">
            <CardHeader>
              <div className="flex items-center gap-3 text-primary">
                <Swords className="size-5" />
                <span className="eyebrow text-primary">FAQ</span>
              </div>
              <CardTitle className="text-3xl">The fastest answers to the biggest DLSS 5 questions</CardTitle>
              <CardDescription>
                Built from the official launch materials and current NVIDIA messaging.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion
                multiple
                defaultValue={homeFaq[0] ? [homeFaq[0].question] : []}
                className="gap-3"
              >
                {homeFaq.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="rounded-2xl border border-border/70 bg-background/70 px-4"
                  >
                    <AccordionTrigger className="py-4 text-base font-semibold text-foreground hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 text-sm leading-7 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="surface-card">
            <CardHeader>
              <CardDescription>Primary sources</CardDescription>
              <CardTitle className="text-3xl">Every key claim points back to NVIDIA.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              {SITE_SOURCES.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-border/70 bg-background/75 p-4 transition-colors hover:border-primary/25"
                >
                  <p className="font-medium text-foreground">{source.title}</p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {source.publisher} · {formatDate(source.publishedAt)}
                  </p>
                </a>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </>
  );
}
