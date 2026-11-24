import { mkdirSync, writeFileSync } from "node:fs";

// Entry for The Robot Pickup Line Championship — one robot pickup line,
// written exactly as-is to $MAKEFUN_OUTPUT_DIR/entry.txt.
const LINE =
  "My loss function hit zero the day I met you — nothing left to optimize.";

try {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the entry is exactly one line.
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}
