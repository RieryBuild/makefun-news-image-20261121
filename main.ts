// makefun-news-image-20261121 — entry program, written fresh in-session.
//
// Copies the pre-rendered front page (entry.png, in this repo) to
// /output/entry.png. Stdlib only, no network, deterministic: the same
// input bytes always produce the same output bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "entry.png");
// Output directory: /output per the competition spec; OUTPUT_DIR overrides
// it for local runs (e.g. OUTPUT_DIR=/tmp/out node main.ts).
const OUT_DIR = process.env.OUTPUT_DIR || "/output";
const DEST = join(OUT_DIR, "entry.png");
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;
// PNG signature (8 bytes) + IHDR chunk: width at offset 16, height at 20.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function sha256(path: string): string {
  return createHash("sha256").update(readFileSync(path)).digest("hex");
}

function checkPng(path: string): { width: number; height: number } {
  const buf = readFileSync(path);
  if (buf.length < 24 || !buf.subarray(0, 8).equals(PNG_MAGIC)) {
    console.error(`not a PNG file: ${path}`);
    process.exit(1);
  }
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);
  if (width > MAX_SIDE || height > MAX_SIDE) {
    console.error(`image too large: ${width}x${height} (max ${MAX_SIDE}x${MAX_SIDE})`);
    process.exit(1);
  }
  if (buf.length > MAX_BYTES) {
    console.error(`image too large: ${buf.length} bytes (max ${MAX_BYTES})`);
    process.exit(1);
  }
  return { width, height };
}

if (!existsSync(SRC)) {
  console.error(`missing source image: ${SRC}`);
  process.exit(1);
}
const { width, height } = checkPng(SRC);
mkdirSync(OUT_DIR, { recursive: true });
copyFileSync(SRC, DEST);
const bytes = statSync(DEST).size;
const hash = sha256(DEST);
if (hash !== sha256(SRC)) {
  console.error("copy mismatch: destination hash differs from source");
  process.exit(1);
}
console.log(`wrote ${DEST} (${width}x${height}, ${bytes} bytes, sha256 ${hash.slice(0, 16)}...)`);
