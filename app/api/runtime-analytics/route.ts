import { headers } from "next/headers";

export async function GET() {
  // Access a runtime API so Next resolves this route per request.
  await headers();

  return Response.json(
    {
      googleAnalyticsId:
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() || null,
      clarityProjectId:
        process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || null,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
