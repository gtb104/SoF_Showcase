// Service Worker for Freedom Showcase PWA
// Make sure you update the VERSION if you make any updates!
const VERSION = 'v1.4.0::';
const NAME = 'freedom-showcase';
const CACHE_NAME = `${VERSION}${NAME}`;
const urlsToCache = [
	'/',
	'/schedule',
	'/bands',
	'/sponsors',
	'/map',
	'/concessions',
	'/manifest.json',
	'/icons/eagle192.png',
	'/icons/eagle512.png'
	// Add more assets to cache as needed
];

// Install event - cache assets
self.addEventListener('install', (event) => {
	self.skipWaiting();
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			return cache.addAll(urlsToCache);
		})
	);
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter(function (key) {
						return !key.startsWith(VERSION);
					})
					.map((cacheName) => {
						if (cacheName !== CACHE_NAME) {
							return caches.delete(cacheName);
						}
					})
			);
		})
	);
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET') {
		/* We should only cache GET requests */
		return;
	}
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Return cached response if found
			if (response) {
				return response;
			}

			// Clone the request
			const fetchRequest = event.request.clone();

			// Try network and cache the response
			return fetch(fetchRequest).then((response) => {
				// Check valid response
				if (!response || response.status !== 200 || response.type !== 'basic') {
					return response;
				}

				// Clone the response
				const responseToCache = response.clone();

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		})
	);
});
