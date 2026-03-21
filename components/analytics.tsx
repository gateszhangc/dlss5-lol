import Script from "next/script";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim();
const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim();

export function Analytics() {
  const hasGoogleAnalytics = Boolean(googleAnalyticsId);
  const hasClarity = Boolean(clarityProjectId);

  if (!hasGoogleAnalytics && !hasClarity) {
    return null;
  }

  return (
    <>
      {hasGoogleAnalytics ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;

              function trackPageView() {
                gtag('config', '${googleAnalyticsId}', {
                  page_path: window.location.pathname + window.location.search,
                  page_location: window.location.href,
                  page_title: document.title,
                });
              }

              gtag('js', new Date());
              trackPageView();

              ['pushState', 'replaceState'].forEach(function(method) {
                const original = window.history[method];
                if (typeof original !== 'function') {
                  return;
                }

                window.history[method] = function() {
                  const result = original.apply(this, arguments);
                  queueMicrotask(trackPageView);
                  return result;
                };
              });

              window.addEventListener('popstate', trackPageView);
            `}
          </Script>
        </>
      ) : null}

      {hasClarity ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityProjectId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
