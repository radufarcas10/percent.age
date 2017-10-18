var staticCacheName = 'percentage-static-v2'; // !!change the cache version if you change anything in a file
var filesToCache = [
  '/',
  '/index.html',
  '/scripts/calculator.js',
  '/styles/main.css'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
      caches.open(staticCacheName).then(function(cache) {
        return cache.addAll(filesToCache);
      })
    );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
              if (staticCacheName.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
      })
    );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});