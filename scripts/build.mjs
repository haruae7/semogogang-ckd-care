import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const item of ['index.html', 'app.js', 'styles.css', 'logo.css', 'src']) {
  await cp(new URL(`../${item}`, import.meta.url), new URL(item, output), { recursive: true });
}

await mkdir(new URL('assets/', output), { recursive: true });
for (const asset of ['logo-semogogang-cat.svg', 'semonyang-header-web.png', 'semonyang-fullbody-web.png']) {
  await cp(new URL(`../assets/${asset}`, import.meta.url), new URL(`assets/${asset}`, output));
}

console.log('Production build created in dist/');
