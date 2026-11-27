import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { SITE } from "@content/site";

/**
 * Share image (punch list D5): 1200 x 630, generated at build from the brand
 * tokens and the primary lockup so it cannot drift from the site. Served at
 * /opengraph-image and referenced from og:image and twitter:image on every
 * page through the root layout.
 */
export const alt = `${SITE.name} - ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (globals.css @theme). Raw values are unavoidable here: this file
// renders a PNG and never loads the stylesheet.
const AUBERGINE = "#3e2632";
const OXIDE = "#a34652";
const CARBON = "#24272a";
const SURVEY = "#657278";
const PAPER = "#f8f6f2";

async function logoDataUri() {
  const file = path.join(process.cwd(), "public/brand/Sightline_Logo_Horizontal_Primary.svg");
  const svg = await readFile(file, "utf8");
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}

async function brandFont() {
  // Hanken Grotesk 500 from Google Fonts; falls back to the renderer's default
  // sans when the build machine has no network.
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@500&display=swap",
      { headers: { "User-Agent": "Mozilla/5.0" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype|woff)'\)/)?.[1];
    if (!url) return null;
    const data = await fetch(url).then((r) => r.arrayBuffer());
    return [{ name: "Hanken Grotesk", data, weight: 500 as const, style: "normal" as const }];
  } catch {
    return null;
  }
}

export default async function OpenGraphImage() {
  const [logo, fonts] = await Promise.all([logoDataUri(), brandFont()]);
  const font = fonts ? "Hanken Grotesk" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: PAPER,
          fontFamily: font,
          color: CARBON,
        }}
      >
        {/* sheet border */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            right: 28,
            bottom: 28,
            border: `2px solid ${CARBON}`,
            display: "flex",
          }}
        />
        {/* title block strip */}
        <div
          style={{
            position: "absolute",
            left: 28,
            right: 28,
            bottom: 28,
            height: 96,
            borderTop: `2px solid ${CARBON}`,
            background: AUBERGINE,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 44px",
            color: PAPER,
            fontSize: 22,
            letterSpacing: 2,
          }}
        >
          <span>{SITE.url.replace("https://", "").toUpperCase()}</span>
          <span>NSW &amp; ACT</span>
          <span>{SITE.phone}</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "84px 92px 0",
            flex: 1,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} alt="" width={520} height={128} />
          <div
            style={{
              marginTop: 54,
              fontSize: 64,
              lineHeight: 1.08,
              letterSpacing: -1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Designed for approval.</span>
            <span style={{ color: AUBERGINE, borderBottom: `6px solid ${OXIDE}`, alignSelf: "flex-start" }}>
              Built for construction.
            </span>
          </div>
          <div style={{ marginTop: 40, fontSize: 26, color: SURVEY, display: "flex" }}>
            Independent traffic engineering for approvals, parking and access, network performance
            and construction delivery.
          </div>
        </div>
      </div>
    ),
    { ...size, ...(fonts ? { fonts } : {}) },
  );
}
