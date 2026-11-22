// main.ts — entry program for make.fun news-image-20261121 (round 3).
// Copies the pre-rendered front page (entry.png, 1024x1024) to the output
// directory after validating that it is a well-formed PNG of the right size.
// Node 22, standard library only, no network, deterministic: the bytes
// written are exactly the bytes of entry.png.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const sourcePath = new URL("./entry.png", import.meta.url);
const bytes = readFileSync(sourcePath);

if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png is not a PNG file (bad magic bytes)");
}
if (bytes.toString("ascii", 12, 16) !== "IHDR") {
  throw new Error("entry.png has no IHDR chunk where one is expected");
}
if (bytes.readUInt32BE(8) !== 13) {
  throw new Error("entry.png has a malformed IHDR chunk (length must be 13)");
}
const bitDepth = bytes[24];
const colorType = bytes[25];
if (bitDepth !== 8 || colorType !== 2) {
  throw new Error(
    `entry.png must be 8-bit RGB (bit depth ${bitDepth}, colour type ${colorType})`,
  );
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png exceeds the 1 MiB cap (${bytes.length} bytes)`);
}
if (bytes.toString("ascii", bytes.length - 8, bytes.length - 4) !== "IEND") {
  throw new Error("entry.png has no IEND trailer chunk (truncated file?)");
}
if (bytes.readUInt32BE(bytes.length - 12) !== 0) {
  throw new Error("entry.png has a malformed IEND chunk (length must be 0)");
}

const outDir = resolve(process.env.OUTPUT_DIR ?? "/output");
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
