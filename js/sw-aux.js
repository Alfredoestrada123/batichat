//amacenar en cache dinamico
function actualizarCacheDinamico(DYNAMIC_CACHE, request, res) {
  if (res.ok) {
    return caches.open(DYNAMIC_CACHE).then((cache) => {
      cache.put(request, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
