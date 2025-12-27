// Service Worker for Freedom Showcase PWA
// Make sure you update the VERSION if you make any updates!
const VERSION = 'v2.0.1::';
const NAME = 'freedom-showcase';
const CACHE_NAME = `${VERSION}${NAME}`;
const BASE_PATH = '/SoF_Showcase';
const urlsToCache = [
	`${BASE_PATH}/`,
	`${BASE_PATH}/schedule`,
	`${BASE_PATH}/bands`,
	`${BASE_PATH}/sponsors`,
	`${BASE_PATH}/map`,
	`${BASE_PATH}/concessions`,
	`${BASE_PATH}/manifest.json`,
	`${BASE_PATH}/icons/eagle192.png`,
	`${BASE_PATH}/icons/eagle512.png`
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
