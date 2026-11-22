// news-image-20261121 round 5 — entry program (Node 22, standard library only).
// Validates the bundled entry.png (PNG magic, IHDR 1024x1024, IEND trailer,
// size at most 1 MiB) and writes a byte-identical copy to the output directory.
// No network, no writes outside the output directory, fully deterministic.
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const IEND_TAIL = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);
const MAX_BYTES = 1024 * 1024;

function fail(message) {
  console.error(`entry: ${message}`);
  process.exit(1);
}

// Minimum structural size of a PNG: 8-byte signature + 25-byte IHDR chunk
// (4 length + 4 type + 13 data + 4 CRC) + 12-byte IEND chunk.
const MIN_PNG_BYTES = 8 + 25 + 12;

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const source = join(here, "entry.png");
  let png;
  try {
    png = readFileSync(source);
  } catch {
    fail(`cannot read ${source}`);
  }

  if (png.length < MIN_PNG_BYTES || !png.subarray(0, 8).equals(PNG_MAGIC)) {
    fail(`${source} is not a PNG file (bad magic or truncated)`);
  }
  if (png.length > MAX_BYTES) {
    fail(`${source} is ${png.length} bytes, over the 1 MiB limit`);
  }
  if (png.readUInt32BE(8) !== 13) {
    fail(`${source} has an IHDR chunk of unexpected length`);
  }
  const width = png.readUInt32BE(16);
  const height = png.readUInt32BE(20);
  if (!png.subarray(12, 16).equals(Buffer.from("IHDR"))) {
    fail(`${source} has no IHDR chunk where one is expected`);
  }
  if (width !== 1024 || height !== 1024) {
    fail(`${source} is ${width}x${height}, expected 1024x1024`);
  }
  if (!png.subarray(png.length - IEND_TAIL.length).equals(IEND_TAIL)) {
    fail(`${source} has no IEND trailer`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.png");
  copyFileSync(source, target);
  const written = statSync(target).size;
  if (written !== png.length || !readFileSync(target).equals(png)) {
    fail(`written ${target} does not match the validated ${source}`);
  }
  console.log(`entry: wrote ${target} (${written} bytes, ${width}x${height})`);
}

main();
