self.addEventListener("install", e=>{
e.waitUntil(
caches.open("pref-game").then(cache=>{
return cache.addAll(["./","index.html"]);
})
);
});