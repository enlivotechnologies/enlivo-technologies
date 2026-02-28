/**
 * Generate circular favicon and icon set from EnlivotechnologiesLogo.png
 * Creates a dark circular coin with gold logo and transparent background.
 * Icons display as fully rounded in browser tabs, Google Search, and PWA.
 *
 * Run: node scripts/generate-favicon.cjs
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const LOGO = path.join(ROOT, "public/images/navbar/EnlivotechnologiesLogo.png");

async function main() {
  const CANVAS = 512;
  const PADDING = Math.round(CANVAS * 0.08); // 8% padding for clear circle
  const RADIUS = (CANVAS / 2) - PADDING;
  const CENTER = CANVAS / 2;

  // Step 1: Resize logo to fit inside the circle
  const logoSize = Math.round(RADIUS * 2 * 0.94); // 94% of circle diameter
  const logoResized = await sharp(LOGO)
    .resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  // Step 2: Create circular mask (white circle on black = mask)
  const circleSvg = Buffer.from(`
    <svg width="${CANVAS}" height="${CANVAS}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${CENTER}" cy="${CENTER}" r="${RADIUS}" fill="white"/>
    </svg>
  `);

  // Step 3: Create dark background, composite logo, apply circular mask
  const logoPad = Math.round((CANVAS - logoSize) / 2);

  const canvas512 = await sharp({
    create: {
      width: CANVAS,
      height: CANVAS,
      channels: 4,
      background: { r: 18, g: 18, b: 22, alpha: 255 },
    },
  })
    .composite([{ input: logoResized, left: logoPad, top: logoPad }])
    .png()
    .toBuffer();

  // Apply circular mask for transparent corners
  const masked512 = await sharp(canvas512)
    .composite([{
      input: await sharp(circleSvg).resize(CANVAS, CANVAS).png().toBuffer(),
      blend: "dest-in",
    }])
    .png()
    .toBuffer();

  // Write all sizes
  const sizes = [
    { size: 512, name: "app/icon.png" },
    { size: 512, name: "public/icon-512.png" },
    { size: 192, name: "public/icon-192.png" },
    { size: 48, name: "public/icon-48.png" },
    { size: 32, name: "public/icon-32.png" },
    { size: 16, name: "public/icon-16.png" },
  ];

  for (const { size, name } of sizes) {
    const buf = size === 512
      ? masked512
      : await sharp(masked512).resize(size, size).png().toBuffer();
    await fs.promises.writeFile(path.join(ROOT, name), buf);
    console.log(`Wrote ${name} (${size}x${size})`);
  }

  // Create favicon.ico (32x32 PNG in ICO container)
  const buf32 = await sharp(masked512).resize(32, 32).png().toBuffer();
  await fs.promises.writeFile(path.join(ROOT, "public/favicon.ico"), buf32);
  console.log("Wrote public/favicon.ico");

  console.log("\n✅ Circular favicon generation complete.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
