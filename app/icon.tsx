import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
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
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 28,
            borderRadius: 72,
            border: "4px solid rgba(248, 250, 248, 0.18)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            textTransform: "uppercase",
          }}
        >
          <div style={{ fontSize: 190, fontWeight: 800, letterSpacing: "-0.08em" }}>
            5
          </div>
          <div style={{ fontSize: 64, letterSpacing: "0.36em", marginLeft: "0.36em" }}>
            DLSS
          </div>
        </div>
      </div>
    ),
    size
  );
}
