"use client";

import { useEffect, useState } from "react";

type RuntimeAnalyticsConfig = {
  googleAnalyticsId: string | null;
  clarityProjectId: string | null;
};

declare global {
  interface Window {
    dataLayer?: unknown[][];
    gtag?: (
      command: "config" | "event" | "js",
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
    clarity?: ((...args: unknown[]) => void) & {
      q?: unknown[][];
    };
  }
}

export function Analytics() {
  const [config, setConfig] = useState<RuntimeAnalyticsConfig | null>(null);

  useEffect(() => {
    let mounted = true;

    fetch("/api/runtime-analytics", {
      cache: "no-store",
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`runtime analytics config failed: ${response.status}`);
        }

        const data = (await response.json()) as RuntimeAnalyticsConfig;
        if (mounted) {
          setConfig(data);
        }
      })
      .catch(() => {
        if (mounted) {
          setConfig({
            googleAnalyticsId: null,
            clarityProjectId: null,
          });
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const googleAnalyticsId = config?.googleAnalyticsId?.trim();

    if (!googleAnalyticsId) {
      return;
    }

    const loaderId = `google-analytics-loader-${googleAnalyticsId}`;
    if (!document.getElementById(loaderId)) {
      const script = document.createElement("script");
      script.id = loaderId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args) => {
        window.dataLayer?.push(args);
      });

    const trackPageView = () => {
      window.gtag?.("config", googleAnalyticsId, {
        page_path: window.location.pathname + window.location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    };

    window.gtag("js", new Date());
    trackPageView();

    const { history } = window;
    const originals = {
      pushState: history.pushState,
      replaceState: history.replaceState,
    };

    history.pushState = function pushState(...args) {
      const result = originals.pushState.apply(this, args);
      queueMicrotask(trackPageView);
      return result;
    };

    history.replaceState = function replaceState(...args) {
      const result = originals.replaceState.apply(this, args);
      queueMicrotask(trackPageView);
      return result;
    };

    window.addEventListener("popstate", trackPageView);

    return () => {
      history.pushState = originals.pushState;
      history.replaceState = originals.replaceState;
      window.removeEventListener("popstate", trackPageView);
    };
  }, [config?.googleAnalyticsId]);

  useEffect(() => {
    const clarityProjectId = config?.clarityProjectId?.trim();

    if (!clarityProjectId) {
      return;
    }

    const scriptId = `microsoft-clarity-loader-${clarityProjectId}`;
    if (document.getElementById(scriptId)) {
      return;
    }

    window.clarity =
      window.clarity ||
      Object.assign(
        (...args: unknown[]) => {
          const clarity = window.clarity;
          if (!clarity) {
            return;
          }

          clarity.q = clarity.q || [];
          clarity.q.push(args);
        },
        { q: [] as unknown[][] }
      );

    const script = document.createElement("script");
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
    document.head.appendChild(script);
  }, [config?.clarityProjectId]);

  return null;
}
