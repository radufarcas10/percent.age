var staticCacheName = 'percentage-static-v16'; // !!change the cache version if you change anything in a file
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/calculator.min.js',
  '/styles/main.min.css'
];

self.addEventListener('install', e => {
  e.waitUntil(
      caches.open(staticCacheName).then(cache => {
        return cache.addAll(filesToCache);
      })
    );
});

self.addEventListener('activate', e => {
  e.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
            cacheNames.map(cacheName => {
              if (staticCacheName.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
      })
    );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});