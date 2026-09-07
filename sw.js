self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fin-pwa-v4').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        'https://cdn.jsdelivr.net/npm/chart.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
