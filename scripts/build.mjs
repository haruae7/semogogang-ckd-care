import { cp, mkdir, rm } from 'node:fs/promises';

const output = new URL('../dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const item of ['index.html', 'app.js', 'styles.css', 'v11.css', 'logo.css', 'src', 'favicon.ico', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png', 'pwa-icon-192.png', 'pwa-icon-512.png', 'manifest.webmanifest', 'sw.js']) {
  await cp(new URL(`../${item}`, import.meta.url), new URL(item, output), { recursive: true });
}

await mkdir(new URL('assets/', output), { recursive: true });
for (const asset of ['logo-semogogang-cat.svg', 'semonyang-header-web.png', 'semonyang-fullbody-web.png']) {
  await cp(new URL(`../assets/${asset}`, import.meta.url), new URL(`assets/${asset}`, output));
}

console.log('Production build created in dist/');
