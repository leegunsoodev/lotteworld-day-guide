const CACHE='lotte-day-v3';
const ASSETS=['./','./index.html','./style.css','./app.js','./data.js','./state.js','./map.js','./icon.svg','./og.png','./research.md','./maps/B1.webp','./maps/1F.webp','./maps/2F.webp','./maps/3F.webp','./maps/4F.webp','./maps/M.webp'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('lotte-day-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(r=>r).catch(()=>caches.match(event.request).then(r=>r||(event.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));});
