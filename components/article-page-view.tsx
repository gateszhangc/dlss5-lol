import Link from "next/link";
import { ArrowRight, Link2, NotebookText } from "lucide-react";

import {
  getRelatedPages,
  type ArticlePage,
} from "@/content/site";
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  formatDate,
} from "@/lib/seo";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ArticlePageViewProps = {
  page: ArticlePage;
};

export function ArticlePageView({ page }: ArticlePageViewProps) {
  const relatedPages = getRelatedPages(page);
  const hasFaq = page.faq.length > 0;

  return (
    <>
      <JsonLd data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }, { name: page.title, path: page.href }])} />
      <JsonLd data={buildArticleJsonLd(page)} />
      {hasFaq ? <JsonLd data={buildFaqJsonLd(page.faq)} /> : null}

      <div className="shell py-8 sm:py-10">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{page.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <section className="hero-panel mb-8 px-6 py-8 sm:px-8 sm:py-10">
          <div className="max-w-4xl">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {page.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary">Updated {formatDate(page.updatedAt)}</Badge>
              {page.keyFacts.slice(0, 2).map((fact) => (
                <Badge key={fact.label} variant="outline">
                  {fact.label}: {fact.value}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <main className="space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {page.keyFacts.map((fact) => (
                <Card key={fact.label} className="surface-card">
                  <CardHeader>
                    <CardDescription>{fact.label}</CardDescription>
                    <CardTitle className="text-xl leading-tight">{fact.value}</CardTitle>
                  </CardHeader>
                  {fact.note ? (
                    <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
                      {fact.note}
                    </CardContent>
                  ) : null}
                </Card>
              ))}
            </section>

            {page.compareRows ? (
              <Card className="surface-card">
                <CardHeader>
                  <CardTitle>
                    DLSS 5 vs {page.compareBaselineLabel}
                  </CardTitle>
                  <CardDescription>
                    A source-backed comparison using NVIDIA&apos;s current public
                    framing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Topic</TableHead>
                        <TableHead>DLSS 5</TableHead>
                        <TableHead>{page.compareBaselineLabel}</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {page.compareRows.map((row) => (
                        <TableRow key={row.topic}>
                          <TableCell className="font-medium text-foreground">
                            {row.topic}
                          </TableCell>
                          <TableCell className="whitespace-normal text-muted-foreground">
                            {row.dlss5}
                          </TableCell>
                          <TableCell className="whitespace-normal text-muted-foreground">
                            {row.baseline}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ) : null}

            {page.games ? (
              <Card className="surface-card">
                <CardHeader>
                  <CardTitle>Announced DLSS 5 games</CardTitle>
                  <CardDescription>
                    Games explicitly named by NVIDIA in public launch materials.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Game</TableHead>
                        <TableHead>Signal</TableHead>
                        <TableHead className="min-w-[320px]">Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {page.games.map((game) => (
                        <TableRow key={game.title}>
                          <TableCell className="font-medium text-foreground">
                            {game.title}
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {game.signal}
                          </TableCell>
                          <TableCell className="whitespace-normal text-muted-foreground">
                            {game.note}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ) : null}

            {page.partners ? (
              <section className="grid gap-4 md:grid-cols-2">
                {page.partners.map((partner) => (
                  <Card key={partner.name} className="surface-card">
                    <CardHeader>
                      <CardDescription>{partner.signal}</CardDescription>
                      <CardTitle>{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
                      {partner.note}
                    </CardContent>
                  </Card>
                ))}
              </section>
            ) : null}

            {page.sections.map((section) => (
              <section key={section.title} className="surface-card rounded-[28px] p-6 sm:p-8">
                <div className="max-w-4xl">
                  <h2 className="font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <div className="article-copy mt-4">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets ? (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 size-2 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.callout ? (
                    <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/10 p-4 text-sm leading-7 text-foreground">
                      {section.callout}
                    </div>
                  ) : null}
                </div>
              </section>
            ))}

            {hasFaq ? (
              <Card className="surface-card">
                <CardHeader>
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>
                    Short answers based on currently public information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion
                    multiple
                    defaultValue={page.faq[0] ? [page.faq[0].question] : []}
                    className="gap-3"
                  >
                    {page.faq.map((item) => (
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
            ) : null}
          </main>

          <aside className="space-y-6 xl:sticky xl:top-24 xl:self-start">
            <Card className="surface-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <NotebookText className="size-4 text-primary" />
                  Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {page.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/25"
                  >
                    <p className="font-medium text-foreground">{source.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {source.publisher} · {formatDate(source.publishedAt)}
                    </p>
                  </a>
                ))}
              </CardContent>
            </Card>

            {relatedPages.length ? (
              <Card className="surface-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Link2 className="size-4 text-primary" />
                    Related pages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {relatedPages.map((relatedPage) => (
                    <Link
                      key={relatedPage.slug}
                      href={relatedPage.href}
                      className="group block rounded-2xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/25"
                    >
                      <p className="font-medium text-foreground">
                        {relatedPage.title}
                      </p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        {relatedPage.description}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
                        Read {relatedPage.navTitle}{" "}
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            ) : null}

            <Link
              href="/dlss-5-faq"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "w-full rounded-full"
              )}
            >
              Jump to FAQ
            </Link>
          </aside>
        </div>
      </div>
    </>
  );
}
