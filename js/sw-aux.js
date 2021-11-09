//amacenar en cache dinamico
function actualizarCacheDinamico(DYNAMIC_CACHE, reqrequest, res) {
  if (res.ok) {
    return caches.open(DYNAMIC_CACHE).then((cache) => {
      cache.put(reqrequest, res.clone());
      return res.clone();
    });
  } else {
    return res;
  }
}
