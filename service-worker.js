// Service Worker for Bible Verse Clock PWA

const CACHE_NAME = 'bible-verse-clock-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './verse-collection.js',
  './devotional-collection.js',
  './main.js',
  './icons/icon-72x72.png',
  './icons/icon-96x96.png',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-152x152.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request because it's a stream and can only be consumed once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response because it's a stream too and can only be consumed once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        })
        .catch(() => {
          // Offline fallback - return a custom offline page or message
          // Here we just return the original response or null
          return response;
        });
      })
  );
});

// Handle offline background sync for favorites and preferences
self.addEventListener('sync', event => {
  if (event.tag === 'sync-favorites') {
    event.waitUntil(syncFavorites());
  }
});

// Function to sync favorites when back online (placeholder implementation)
function syncFavorites() {
  // In a real app, this would sync with a server
  // For now, we just log that sync would happen
  console.log('Would sync favorites when online');
  return Promise.resolve();
}

// Handle push notifications
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : { title: 'Bible Verse Clock', body: 'Time to check your verse!' };
  
  const options = {
    body: data.body || 'Time to check your Bible Verse Clock!',
    icon: './icons/icon-192x192.png',
    badge: './icons/icon-72x72.png',
    data: {
      url: data.url || './'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title || 'Bible Verse Clock', options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
