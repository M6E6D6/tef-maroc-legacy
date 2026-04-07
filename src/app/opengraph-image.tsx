import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — Hôtellerie & restauration au Maroc`;
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
          background:
            "linear-gradient(128deg, #0f3566 0%, #1e64c8 40%, #0f3566 62%, #006b3c 88%, #c1272d 100%)",
          color: "white",
          padding: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, color: "#e8c547", fontWeight: 700 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2, maxWidth: "85%" }}>
          Hôtellerie, restauration & service de luxe
        </div>
        <div style={{ fontSize: 30, opacity: 0.9 }}>Casablanca, Morocco</div>
      </div>
    ),
    size,
  );
}
