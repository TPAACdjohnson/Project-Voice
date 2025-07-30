const CACHE_NAME = 'my-path-v2';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './story_hub.js',
  './chapter_one_game.js',
  './chapter_two_game.js',
  './chapter_three_game.js',
  './manifest.json'
];

// Install event: cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate event: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event: serve from cache, then network, then fallback to index.html
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(res => {
        // Only cache successful GET requests
        if (!event.request.url.startsWith('http') || event.request.method !== 'GET') return res;
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, res.clone());
          return res;
        });
      });
    }).catch(() => caches.match('./index.html'))
  );
});
