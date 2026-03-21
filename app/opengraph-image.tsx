import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/content/site";

export const alt = "DLSS 5 Report open graph image";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #f8faf8 0%, #eef5ef 48%, #ddebe1 100%)",
          color: "#14281d",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-120px",
            width: "420px",
            height: "420px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(69,194,123,0.38) 0%, rgba(69,194,123,0) 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "-40px",
            bottom: "-120px",
            width: "360px",
            height: "360px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle, rgba(61,92,255,0.14) 0%, rgba(61,92,255,0) 72%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(20,40,29,0.12)",
            borderRadius: "36px",
            padding: "48px",
            background: "rgba(255,255,255,0.72)",
          }}
        >
          <div style={{ fontSize: 26, letterSpacing: "0.24em", textTransform: "uppercase", color: "#2c6e49" }}>
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "820px" }}>
            <div style={{ fontSize: 82, lineHeight: 1, fontWeight: 700 }}>
              DLSS 5
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.25, color: "#35524a" }}>
              Release date, neural rendering, announced games, and the official
              shift beyond DLSS 4.5.
            </div>
          </div>
          <div style={{ display: "flex", gap: "18px", fontSize: 26, color: "#35524a" }}>
            <div>March 16, 2026 announcement</div>
            <div>•</div>
            <div>Fall 2026 target</div>
            <div>•</div>
            <div>15+ announced games</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
