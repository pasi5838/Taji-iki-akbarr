self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("math-cache").then(cache => {
      return cache.addAll([
        "/Taji-Iki-akbar/",
        "/Taji-Iki-akbar/index.html",
        "/Taji-Iki-akbar/style.css",
        "/Taji-Iki-akbar/script.js",
        "/Taji-Iki-akbar/manifest.json",
        "/Taji-Iki-akbar/icon-192.png",
        "/Taji-Iki-akbar/icon-512.png",
        "/Taji-Iki-akbar/bg.jpg"
      ]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
