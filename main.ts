import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve everything relative to this script, never the working directory,
// so the entry copies correctly no matter where the grader invokes it.
const dir = dirname(fileURLToPath(import.meta.url));
const src = join(dir, "entry.txt");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.txt"));
