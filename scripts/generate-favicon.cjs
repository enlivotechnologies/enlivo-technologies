/**
 * Generate favicon and icon set from EnlivotechnologiesLogo.png
 * Composites the logo onto a black background for proper display in:
 * - Google Search (favicon in results)
 * - Browser tabs
 * - PWA / manifest (maskable)
 *
 * Run: node scripts/generate-favicon.cjs
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LOGO = path.join(ROOT, "public/images/navbar/EnlivotechnologiesLogo.png");

async function main() {
  const logo = await sharp(LOGO);
  const meta = await logo.metadata();
  const srcSize = Math.min(meta.width || 500, meta.height || 500);

  // Target size for logo on 512 canvas (leaves 16px black border)
  const logoSize = 480;
  const pad = (512 - logoSize) / 2;

  const logoResized = await logo.resize(logoSize, logoSize).toBuffer();

  // 512x512 black background, composite logo on top (transparent → black)
  const canvas512 = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 3,
      background: { r: 0, g: 0, b: 0 },
    },
  })
    .composite([{ input: logoResized, left: Math.round(pad), top: Math.round(pad) }])
    .png()
    .toBuffer();

  // app/icon.png – Next.js uses this as /icon.png and default favicon
  await fs.promises.writeFile(path.join(ROOT, "app/icon.png"), canvas512);
  console.log("Wrote app/icon.png");

  // public/icon-512.png – for metadata icons, manifest, schema
  await fs.promises.writeFile(path.join(ROOT, "public/icon-512.png"), canvas512);
  console.log("Wrote public/icon-512.png");

  // 192x192 – PWA, Apple touch
  const buf192 = await sharp(canvas512).resize(192, 192).png().toBuffer();
  await fs.promises.writeFile(path.join(ROOT, "public/icon-192.png"), buf192);
  console.log("Wrote public/icon-192.png");

  // 32x32 – small favicon for tabs
  const buf32 = await sharp(canvas512).resize(32, 32).png().toBuffer();
  await fs.promises.writeFile(path.join(ROOT, "public/icon-32.png"), buf32);
  console.log("Wrote public/icon-32.png");

  // 48x48 – common favicon size for search
  const buf48 = await sharp(canvas512).resize(48, 48).png().toBuffer();
  await fs.promises.writeFile(path.join(ROOT, "public/icon-48.png"), buf48);
  console.log("Wrote public/icon-48.png");

  console.log("Favicon generation done. Logo is on black background for Google/search.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
