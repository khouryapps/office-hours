const cacheManager = require('cache-manager');


const myCacheManager = cacheManager.caching({
  store: 'memory',
  ttl: 600,        
});


class CacheInspectorService {
  constructor(cacheManager) {
    this.cacheManager = cacheManager;
  }

  async listCacheKeys() {
    const keys = await this.cacheManager.keys(); 
    for (const key of keys) {
      const value = await this.cacheManager.get(key);
      console.log(`Key: ${key}, Value:`, value);
    }
  }
}

(async () => {
  const inspector = new CacheInspectorService(myCacheManager);
  await inspector.listCacheKeys();
})();


