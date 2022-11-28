const staticDevTaskApp = 'dev-task-app-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/https://fonts.googleapis.com/css2?family=Inter:wght@100..600&display=swap',
    '/https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
]

self.addEventListener('install', installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevTaskApp).then(cache => {
            cache.addAll(assets);
        })
    )
})

self.addEventListener('fetch', fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    )
})