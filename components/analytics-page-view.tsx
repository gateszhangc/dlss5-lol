"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

type AnalyticsPageViewProps = {
  measurementId: string;
};

export function AnalyticsPageView({
  measurementId,
}: AnalyticsPageViewProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!measurementId || !pathname || typeof window.gtag !== "function") {
      return;
    }

    const search = window.location.search || "";
    const pagePath = `${pathname}${search}`;

    window.gtag("config", measurementId, {
      page_path: pagePath,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [measurementId, pathname]);

  return null;
}
