var staticCacheName = 'percentage-static-v5'; // !!change the cache version if you change anything in a file
var filesToCache = [
	'/',
	'/index.html',
	'/scripts/calculator.js',
  '/scripts/utils.js',
	'/styles/main.css'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] install');
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
            cacheNames.filter(function(cacheName) {
              return cacheName.startsWith('percentage-');
            }).map(function(cacheName) {
              return caches.delete(cacheName);
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
