// main.ts — news-image-20261121 round 2
// Stdlib-only copy program: validates the bundled entry.png (PNG magic +
// IHDR 1024x1024) and writes it byte-identical to $OUTPUT_DIR/entry.png
// (default /output). No network, no randomness, no dependencies.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const EXPECTED_WIDTH = 1024;
const EXPECTED_HEIGHT = 1024;
const MAX_BYTES = 1024 * 1024;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, "entry.png");
const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.png");

let bytes: Buffer;
try {
  bytes = readFileSync(srcPath);
} catch {
  fail(`cannot read ${srcPath}`);
}

if (bytes.length < 33) fail("entry.png is too small to be a PNG");
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) fail("entry.png: bad PNG magic");
if (bytes.length > MAX_BYTES) fail(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);

// IHDR: bytes 12-15 must be "IHDR"; width at 16-19, height at 20-23 (big-endian).
if (bytes.subarray(12, 16).toString("latin1") !== "IHDR") {
  fail("entry.png: first chunk is not IHDR");
}
if (bytes.readUInt32BE(8) !== 13) fail("entry.png: IHDR chunk length is not 13");
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED_WIDTH || height !== EXPECTED_HEIGHT) {
  fail(`entry.png is ${width}x${height}, expected ${EXPECTED_WIDTH}x${EXPECTED_HEIGHT}`);
}

// IEND trailer: the last 12 bytes must be length 0 + "IEND" + CRC.
const tail = bytes.subarray(bytes.length - 12);
if (tail.readUInt32BE(0) !== 0 || tail.subarray(4, 8).toString("latin1") !== "IEND") {
  fail("entry.png: missing IEND trailer — file is truncated");
}

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, bytes);
} catch (err) {
  fail(`cannot write ${outPath}: ${(err as Error).message}`);
}
console.log(`wrote ${outPath} (${bytes.length} bytes, ${width}x${height})`);
