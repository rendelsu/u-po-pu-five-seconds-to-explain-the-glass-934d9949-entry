import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line = "It sat in my sunbeam like it paid rent, so I evicted it.";
const outputFile = join(outDir, "entry.txt");
writeFileSync(outputFile, line + "\n");
chmodSync(outputFile, 0o644);
