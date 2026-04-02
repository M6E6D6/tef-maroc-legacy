import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} - Training in Morocco`;
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          padding: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, color: "#d4af37", fontWeight: 700 }}>TEF Maroc Legacy</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2, maxWidth: "85%" }}>
          Hospitality & Management Training
        </div>
        <div style={{ fontSize: 30, opacity: 0.9 }}>Casablanca, Morocco</div>
      </div>
    ),
    size,
  );
}
