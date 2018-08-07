var cacheName = 'shell-content-04';  // cache name static
var dynmCacheName = 'dcn-01'; // Dynamic cache name

// files to be cached
var filesToCache = [
 '/index.html',
 '/style.css',
 '/index.js',
 'sw.js',
  '/',
];

// install service worker
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
      caches.open(cacheName).then(function(cache) {
      console.log("[serviceWorker] Cacheing app shell");
      return cache.addAll(filesToCache);
    })
  );
});

// active service worker
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

// fetch service worker static
// self.addEventListener('fetch', function(e) {
//   console.log('[ServiceWorker] Fetch', e.request.url);
//   e.respondWith(
//     caches.match(e.request).then(function(response) {
//       return response || fetch(e.request);
//     })
//   );
// });

// fetch ServiceWorker dynamic

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.open(dynmCacheName).then(function(cache) {
      return fetch(e.request).then(function(response) {
        cache.put(e.request, response.clone());
        return response;
      });
    })
  );
});