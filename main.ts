// The Vacuum's Alibi — main.ts
// Writes one line (<=200 chars): the excuse a robot vacuum gives for missing a spot.
// Node 22+, no network, fully deterministic: the same fixed string every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Log 14:32: that crumb is now a load-bearing crumb. Removing it would void your floor's warranty.";

const outPath = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
