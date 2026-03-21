"use client";

import Link from "next/link";

import {
  type GameSupportEntry,
  type KeyFact,
  type PartnerEntry,
} from "@/content/site";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type HomeExplorerProps = {
  stats: KeyFact[];
  timeline: Array<{ date: string; title: string; detail: string }>;
  games: GameSupportEntry[];
  partners: PartnerEntry[];
};

export function HomeExplorer({
  stats,
  timeline,
  games,
  partners,
}: HomeExplorerProps) {
  return (
    <Tabs defaultValue="briefing" className="gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">DLSS 5 Overview</p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            DLSS 5 Timeline, Supported Games, and Partners
          </h2>
        </div>
        <TabsList variant="line" className="rounded-full border border-border/70 bg-card/70 p-1">
          <TabsTrigger value="briefing" className="rounded-full px-4">
            Timeline
          </TabsTrigger>
          <TabsTrigger value="games" className="rounded-full px-4">
            Supported Games
          </TabsTrigger>
          <TabsTrigger value="partners" className="rounded-full px-4">
            Confirmed Partners
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="briefing" className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="surface-card">
          <CardHeader>
            <CardTitle>DLSS 5 Release Timeline</CardTitle>
            <CardDescription>
              The shortest path from early DLSS history to the current 2026 roadmap.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {timeline.map((item, index) => (
              <div
                key={item.date}
                className={cn(
                  "grid gap-3 rounded-2xl border border-border/60 bg-background/70 p-4 sm:grid-cols-[120px_1fr]",
                  index === 2 && "border-primary/25 bg-primary/8"
                )}
              >
                <div className="text-sm font-medium text-primary">{item.date}</div>
                <div>
                  <p className="font-heading text-base font-semibold tracking-tight">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {stats.map((item) => (
            <Card key={item.label} className="surface-card">
              <CardHeader>
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-3xl sm:text-4xl">{item.value}</CardTitle>
              </CardHeader>
              {item.note ? (
                <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
                  {item.note}
                </CardContent>
              ) : null}
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="games">
        <Card className="surface-card">
          <CardHeader>
            <CardTitle>DLSS 5 Supported Games Announced So Far</CardTitle>
            <CardDescription>
              Every title below was named by NVIDIA in public DLSS 5 launch materials.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Game</TableHead>
                  <TableHead>Signal</TableHead>
                  <TableHead className="min-w-[320px]">Editorial note</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {games.map((game) => (
                  <TableRow key={game.title}>
                    <TableCell className="font-medium text-foreground">{game.title}</TableCell>
                    <TableCell className="text-muted-foreground">{game.signal}</TableCell>
                    <TableCell className="whitespace-normal text-muted-foreground">
                      {game.note}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-6">
              <Link
                href="/dlss-5-supported-games"
                className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4")}
              >
                Read the supported games list
              </Link>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="partners">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <Card key={partner.name} className="surface-card">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{partner.name}</CardTitle>
                  <Badge variant="secondary">{partner.signal}</Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0 text-sm leading-7 text-muted-foreground">
                {partner.note}
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
