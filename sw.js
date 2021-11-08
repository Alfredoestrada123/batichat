importScripts("js/sw-aux.js");
const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";
const INMUTABLE_CACHE = "Inmutable-v1";

const APP_SHELL = [
  "/",
  "/index.html",
  "css/style.css",
  "img/favicon.ico",
  "img/avatars/Batman.jpg",
  "img/avatars/Nightwing.jpg",
  "img/avatars/RedHood.jpg",
  "img/avatars/RedRobin.jpg",
  "img/avatars/Robin.jpg",
  "img/fondo.jpg",
  "js/app.js",
];

const APP_SHELL_INMUTABLE = [
  "https://fonts.googleapis.com/css?family=Quicksand:300,400",
  "https://fonts.googleapis.com/css?family=Lato:400,300",
  "https://use.fontawesome.com/releases/v5.3.1/css/all.css",
  "css/animate.css",
  "js/libs/jquery.js",
];

self.addEventListener("install", (e) => {
  const cacheStatic = caches
    .open(STATIC_CACHE)
    .then((cache) => cache.addAll(APP_SHELL));

  const cacheInmutable = caches
    .open(INMUTABLE_CACHE)
    .then((cache) => cache.addAll(APP_SHELL_INMUTABLE));

  e.waitUntil(Promise.all([STATIC_CACHE, INMUTABLE_CACHE]));
});

self.addEventListener("activate", (e) => {
  const respuesta = caches.keys().then((keys) => {
    keys.forEach((keyt) => {
      if (key !== STATIC_CACHE && Key.includes("static")) {
        return caches.delete(key);
      }
    });
  });
  e.waitUntil(respuesta);
});

self.addEventListener("fetch", (e) => {
  const respuesta = caches.match(e.request).then((res) => {
    if (res) return res;
    else {
      console.log(e.request.url);
      return fetch(e.request).then((newRes) => {
        return actualizarCacheDinamico(DYNAMIC_CACHE, e.request, newRes);

        //almacenamos en cahce dinamico
      });

      //Busqueda en internet
      //alamcenamos en el cahce dinamico
    }
  });
  e.respondWith(respuesta); //mostramos recusos
});
