// makefun-news-image-20261121 — round 4
// Copies the pre-rendered entry.png that sits next to this file into the
// grader's output directory. The image itself is built offline (see NEWS.md);
// this program only validates it and copies the bytes, so two runs produce
// byte-identical output. Node 22, standard library only, no network.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SOURCE = join(HERE, "entry.png");

// The grader sets MAKEFUN_OUTPUT_DIR to the output directory; fall back to
// the conventional /output directory when it is unset.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const TARGET = join(OUT_DIR, "entry.png");

const MAX_BYTES = 1024 * 1024;

function fail(message) {
  throw new Error(`entry.png invalid: ${message}`);
}

function main() {
  const bytes = readFileSync(SOURCE);

  // A valid PNG with IHDR + IEND is at least 8 (magic) + 25 (IHDR) + 12 (IEND)
  // = 45 bytes; reject anything shorter before any fixed-offset read.
  if (bytes.length < 45) {
    fail(`is only ${bytes.length} bytes, too short to be a complete PNG`);
  }

  if (bytes.length > MAX_BYTES) {
    fail(`is ${bytes.length} bytes, over the 1 MiB limit`);
  }

  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  const magic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  for (let i = 0; i < magic.length; i++) {
    if (bytes[i] !== magic[i]) fail("bad PNG magic bytes");
  }

  // First chunk must be IHDR: 4-byte length (13), then the ASCII tag "IHDR".
  if (bytes.readUInt32BE(8) !== 13) fail("IHDR length is not 13");
  if (bytes.toString("ascii", 12, 16) !== "IHDR") fail("first chunk is not IHDR");

  // IHDR payload: width (4 bytes) and height (4 bytes), both must be 1024.
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width !== 1024 || height !== 1024) {
    fail(`is ${width}x${height}, expected 1024x1024`);
  }

  // Bit depth 8, colour type 2 (truecolour RGB).
  if (bytes[24] !== 8) fail(`bit depth is ${bytes[24]}, expected 8`);
  if (bytes[25] !== 2) fail(`colour type is ${bytes[25]}, expected 2 (RGB)`);

  // Last 12 bytes must be the IEND chunk: length 0, tag "IEND", then CRC.
  const tail = bytes.subarray(bytes.length - 12);
  if (tail.readUInt32BE(0) !== 0) fail("IEND length is not 0");
  if (tail.toString("ascii", 4, 8) !== "IEND") fail("missing IEND trailer");

  // Never write into the repository itself: the output directory must differ
  // from this file's directory, and must not be a subdirectory of it either.
  const outResolved = resolve(OUT_DIR);
  const hereResolved = resolve(HERE);
  if (outResolved === hereResolved ||
      outResolved.startsWith(hereResolved + sep)) {
    fail("output directory is inside the repo directory; refusing to write into the repo");
  }

  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(TARGET, bytes);
  console.log(`wrote ${TARGET} (${bytes.length} bytes, 1024x1024 PNG)`);
}

main();
