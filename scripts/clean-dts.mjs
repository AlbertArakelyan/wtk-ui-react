/*
 * src/index.ts imports the stylesheet so the Vite build emits dist/styles.css.
 * tsc copies that import into dist/index.d.ts, where it points at a path that
 * does not exist in the published tarball, and any consumer without
 * skipLibCheck then fails to resolve it. Strip those lines from the emitted
 * declarations. They carry no type information.
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const CSS_IMPORT = /^import\s+['"][^'"]+\.css['"];?\r?\n/gm;

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(path)));
    } else if (entry.name.endsWith('.d.ts')) {
      files.push(path);
    }
  }

  return files;
};

const files = await walk(DIST);
let stripped = 0;

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const cleaned = source.replace(CSS_IMPORT, '');

  if (cleaned !== source) {
    await writeFile(file, cleaned, 'utf8');
    stripped += 1;
  }
}

console.log(`clean-dts: stripped css imports from ${stripped} declaration file(s)`);
