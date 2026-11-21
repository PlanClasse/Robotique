/* ════════════════════════════════════════════════════════════════════
   Robotique — Service Worker (V1.11.0)
   Fonctionnement hors-ligne après la première visite.
   Stratégie "stale-while-revalidate" : on sert le cache tout de suite
   et on récupère la nouvelle version en arrière-plan.
   → après une publication, recharger DEUX fois.
   À chaque nouvelle version : incrémenter APP_VERSION (index.html),
   l'en-tête ci-dessus et CACHE_NAME.
   ════════════════════════════════════════════════════════════════════ */
const CACHE_NAME = 'robotique-v1-11-0';
const ASSETS = ['./', './index.html', './manifest.json', './fonts/bungee-shade.woff2', './fonts/bungee.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE_NAME).then(async cache => {
    const cached = await cache.match(req, {ignoreSearch: true});
    const net = fetch(req).then(r => { if (r && r.ok) cache.put(req, r.clone()); return r; }).catch(() => cached);
    return cached || net;
  }));
});
