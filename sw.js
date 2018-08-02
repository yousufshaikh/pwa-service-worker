var cacheName = 'shell-content';
var filesToCache = [
 '/index.html',
 '/style.css',
 '/index.js',
  '/',
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
      console.log("[serviceWorker] Cacheing app shell");
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});