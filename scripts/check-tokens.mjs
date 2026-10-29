// Fails if a colour is hard-coded anywhere except src/styles/look.css.
// Keeps the brand swappable: every colour must come from a look token.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../src', import.meta.url).pathname;
const ALLOWED = new Set(['styles/look.css']);
const COLOUR = /#[0-9a-fA-F]{3,8}\b|\b(?:rgb|rgba|hsl|hsla|oklch|oklab)\(/;

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) yield* walk(path);
    else if (/\.(astro|css|ts|js|mjs)$/.test(name)) yield path;
  }
}

const problems = [];
for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file);
  if (ALLOWED.has(rel)) continue;
  readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    if (COLOUR.test(line)) problems.push(`src/${rel}:${i + 1}: ${line.trim()}`);
  });
}

if (problems.length) {
  console.error('Hard-coded colours found (use a token from src/styles/look.css):\n' + problems.join('\n'));
  process.exit(1);
}
console.log('Token check passed: no hard-coded colours outside look.css.');
