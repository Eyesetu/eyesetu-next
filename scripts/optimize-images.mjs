// Converts the raw photos in /images into web-sized JPEGs in /public/images.
// Run with: npm run images
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const SRC = "images";
const OUT = "public/images";

/** [source path inside /images, output name, max edge px, optional crop] */
const MAP = [
  ["Flagship Service/20260826_130659.jpg", "hero-home-fundus.jpg", 2000],
  // Portrait crop from the 3840px original so the hero frame stays sharp
  ["Flagship Service/20260826_130659.jpg", "hero-portrait.jpg", 2000, { left: 1133, top: 0, width: 1728, height: 2160 }],
  ["Services grid/121_20260909_144802_0000.jpg", "device-retina-scan.jpg", 1800],
  ["Services grid/122_20260909_144802_0001.jpg", "device-anterior-scan.jpg", 1800],
  ["Services grid/123_20260909_144802_0002.jpg", "kit-portable.jpg", 2000],
  ["Services grid/124_20260909_144802_0003.jpg", "test-tonometry.jpg", 1800],
  ["Elder care/20260824_151137.jpg", "elder-home-exam.jpg", 2000],
  ["Elder care/IMG-20260513-WA0089.jpg", "elder-slit-lamp.jpg", 1600],
  ["Elder care/IMG-20260514-WA0033.jpg", "visual-field-vr.jpg", 2000],
  ["Elder care/IMG-20260514-WA0034.jpg", "visual-field-team.jpg", 1600],
  ["Children_s eye test block/20260617_132247.jpg", "kids-exam.jpg", 1600],
  ["Children_s eye test block/20260617_132332.jpg", "kids-exam-close.jpg", 1600],
  ["Optometrist with portable diagnostic kit/C0155T01.JPG", "optometrist-arrives.jpg", 1280],
  ["How It Works/20260717_120823.jpg", "step-tested.jpg", 1600],
  ["How It Works/20260717_121119.jpg", "professional-exam.jpg", 1600],
  ["How It Works/20260717_133821.jpg", "chronic-tonometry.jpg", 1600],
  ["How It Works/20260824_153850.jpg", "trial-lens-set.jpg", 1600],
  ["How It Works/20260826_121808.jpg", "step-teleconsult.jpg", 1400],
  ["How It Works/20260826_132627.jpg", "step-guidance.jpg", 1600],
  ["Flagship Service/20260824_150932.jpg", "team-setup.jpg", 1600],
  ["Flagship Service/20260824_151158.jpg", "vision-chart.jpg", 1600],
  ["Testimonials/20260824_155924.jpg", "testimonial-1.jpg", 1800],
  ["Testimonials/VID-20260907-WA0034.jpg", "testimonial-2.jpg", 1024],
  ["Testimonials/lv_0_20260716123047.jpg", "testimonial-3.jpg", 1800],
  ["_downloaded/tm1.png", "team/shikha-gupta.jpg", 1600, { left: 346, top: 248, width: 1782, height: 2227 }],
  ["_downloaded/tm1.png", "team/shikha-gupta-avatar.jpg", 400, { left: 742, top: 414, width: 990, height: 990 }],
  ["_downloaded/tm2.png", "team/preeti-gupta.jpg", 800],
  ["_downloaded/tm4.png", "team/varun-gogia.jpg", 800, { left: 0, top: 44, width: 294, height: 250 }],
];

await mkdir(path.join(OUT, "team"), { recursive: true });

for (const [src, out, max, crop] of MAP) {
  const dest = path.join(OUT, out);
  let img = sharp(path.join(SRC, src)).rotate(); // respect EXIF orientation
  if (crop) img = sharp(await img.toBuffer()).extract(crop);
  const info = await img
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(dest);
  console.log(`${out.padEnd(32)} ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)}KB`);
}
