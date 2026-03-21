import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #0f1f18 0%, #163327 52%, #2c6e49 100%)",
          color: "#f8faf8",
          borderRadius: 36,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            textTransform: "uppercase",
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 0.92 }}>5</div>
          <div style={{ fontSize: 24, letterSpacing: "0.28em", marginLeft: "0.28em" }}>
            DLSS
          </div>
        </div>
      </div>
    ),
    size
  );
}
