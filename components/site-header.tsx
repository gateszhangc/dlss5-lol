"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { primaryNavigation, SITE_NAME } from "@/content/site";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="shell flex min-h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/brand/dlss5-mark.svg"
            alt=""
            width={44}
            height={44}
            aria-hidden="true"
            priority
            unoptimized
            className="size-11 shrink-0"
          />
          <span className="flex flex-col">
            <span className="font-heading text-[0.72rem] uppercase tracking-[0.28em] text-muted-foreground">
              Independent tracker
            </span>
            <span className="font-heading text-base font-semibold tracking-tight text-foreground">
              {SITE_NAME}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {primaryNavigation.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  buttonVariants({
                    variant: active ? "secondary" : "ghost",
                    size: "sm",
                  }),
                  "rounded-full px-3"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/dlss-5-supported-games"
            className={cn(
              buttonVariants({ variant: "default", size: "sm" }),
              "hidden rounded-full px-4 md:inline-flex"
            )}
          >
            Track games
          </Link>

          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full md:hidden"
                  aria-label="Open navigation"
                />
              }
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-border/70 bg-background/95 p-0"
            >
              <SheetHeader className="border-b border-border/70 px-6 py-5">
                <SheetTitle>{SITE_NAME}</SheetTitle>
                <SheetDescription>
                  Navigate the current DLSS 5 guide and comparison pages.
                </SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-2 px-4 py-5">
                {primaryNavigation.map((item) => {
                  const active =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "rounded-2xl border px-4 py-3 text-sm transition-colors",
                        active
                          ? "border-primary/25 bg-primary/10 text-foreground"
                          : "border-border/70 bg-card/80 text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
