const CACHE_NAME='semogogang-ckd-care-v1.1-pwa-1';
const APP_SHELL=['./','./index.html','./app.js','./styles.css','./v11.css','./logo.css','./src/config/links.js','./manifest.webmanifest','./favicon.ico','./favicon-32x32.png','./favicon-16x16.png','./apple-touch-icon.png','./pwa-icon-192.png','./pwa-icon-512.png','./assets/semonyang-header-web.png','./assets/semonyang-fullbody-web.png'];

self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
  const request=event.request;
  if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
  if(request.mode==='navigate'){
    event.respondWith(fetch(request).catch(()=>caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
});
