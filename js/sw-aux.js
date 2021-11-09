//amacenar en cache dinamico
function actualizarCacheDinamico(DYNAMIC_CACHE, req, res) {
  if (res.ok) {
    return caches.open(DYNAMIC_CACHE).then((cache) => {
      cache.put(req, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
