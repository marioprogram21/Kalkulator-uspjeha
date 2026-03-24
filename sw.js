self.addEventListener('install', event => {
    console.log('Service Worker installed');
    event.waitUntil(
        caches.open('kalkulator-cache-v1').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './Kalkulator-ocjena.html',
                './kalkulator-opceg.html',
                './icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(resp => {
            return resp || fetch(event.request);
        })
    );
});
