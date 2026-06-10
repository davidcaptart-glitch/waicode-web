/**
 * One-off asset preparation:
 *  - logo-mark.png  → logo with the white margins trimmed (for navbar/footer)
 *  - og.png         → 1200x630 Open Graph card with the logo centered
 *  - app/icon.png   → 512px favicon
 *  - app/apple-icon.png → 180px Apple touch icon
 *
 * Run from waicode-web/:  node scripts/prepare-images.mjs
 */
import sharp from "sharp";

const SRC = "public/images/logo.png";

// 1. Trimmed wordmark
const mark = await sharp(SRC).trim({ threshold: 10 }).toBuffer();
const markMeta = await sharp(mark).metadata();
await sharp(mark).png().toFile("public/images/logo-mark.png");
console.log(`logo-mark.png → ${markMeta.width}x${markMeta.height}`);

// 2. Open Graph 1200x630
const ogLogo = await sharp(mark).resize({ width: 520 }).toBuffer();
await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 4,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  },
})
  .composite([{ input: ogLogo, gravity: "centre" }])
  .png()
  .toFile("public/images/og.png");
console.log("og.png → 1200x630");

// 3. Favicons (square source already includes margins)
await sharp(SRC).resize(512, 512).png().toFile("app/icon.png");
await sharp(SRC).resize(180, 180).png().toFile("app/apple-icon.png");
console.log("icon.png + apple-icon.png done");
