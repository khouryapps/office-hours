try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class c extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class i{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:c}=this.findMatchingRoute({url:s,request:e,event:t});let a,i=c&&c.handler;if(!i&&this.s&&(i=this.s),i){try{a=i.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const c of n){let n;const a=c.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:c,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new i,r.addFetchListener(),r.addCacheListener()),r);const f={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},u=e=>[f.prefix,e,f.suffix].filter(e=>e&&e.length>0).join("-"),h=e=>e||u(f.precache),d=e=>e||u(f.runtime);function l(e){e.then(()=>{})}const b=new Set;class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:c,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(i,r)=>{const o=i.objectStore(e),f=t?o.index(t):o,u=[],h=f.openCursor(s,n);h.onsuccess=()=>{const e=h.result;e?(u.push(a?e:e.value),c&&u.length>=c?r(u):e.continue()):r(u)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,c)=>{const a=this.o.transaction(e,t);a.onabort=()=>c(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,c)=>{const a=s.objectStore(t),i=a[e].apply(a,n);i.onsuccess=()=>c(i.result)})}close(){this.o&&(this.o.close(),this.o=null)}}w.prototype.OPEN_TIMEOUT=2e3;const p={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(p))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const g=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class y{constructor(e){this.v=e,this.o=new w("workbox-expiration",1,{onupgradeneeded:e=>this.m(e)})}m(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.v)}async setTimestamp(e,t){const s={url:e=g(e),timestamp:t,cacheName:this.v,id:this._(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this._(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const c=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let i=0;c.onsuccess=()=>{const s=c.result;if(s){const n=s.value;n.cacheName===this.v&&(e&&n.timestamp<e||t&&i>=t?a.push(s.value):i++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}_(e){return this.v+"|"+g(e)}}class v{constructor(e,t={}){this.q=!1,this.R=!1,this.k=t.maxEntries,this.M=t.maxAgeSeconds,this.v=e,this.j=new y(e)}async expireEntries(){if(this.q)return void(this.R=!0);this.q=!0;const e=this.M?Date.now()-1e3*this.M:0,t=await this.j.expireEntries(e,this.k),s=await self.caches.open(this.v);for(const e of t)await s.delete(e);this.q=!1,this.R&&(this.R=!1,l(this.expireEntries()))}async updateTimestamp(e){await this.j.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.M){return await this.j.getTimestamp(e)<Date.now()-1e3*this.M}return!1}async delete(){this.R=!1,await this.j.expireEntries(1/0)}}const m=(e,t)=>e.filter(e=>t in e),x=async({request:e,mode:t,plugins:s=[]})=>{const n=m(s,"cacheKeyWillBeUsed");let c=e;for(const e of n)c=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:c}),"string"==typeof c&&(c=new Request(c));return c},q=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:c=[]})=>{const a=await self.caches.open(e),i=await x({plugins:c,request:t,mode:"read"});let r=await a.match(i,n);for(const t of c)if("cachedResponseWillBeUsed"in t){const c=t.cachedResponseWillBeUsed;r=await c.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:i})}return r},R=async({cacheName:e,request:s,response:n,event:c,plugins:i=[],matchOptions:r})=>{const o=await x({plugins:i,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const f=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let c=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(c=await n.call(t,{request:e,response:c,event:s}),!c)break}return a||(c=c&&200===c.status?c:void 0),c||null})({event:c,plugins:i,response:n,request:o});if(!f)return;const u=await self.caches.open(e),h=m(i,"cacheDidUpdate"),d=h.length>0?await q({cacheName:e,matchOptions:r,request:o}):null;try{await u.put(o,f)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const t of h)await t.cacheDidUpdate.call(t,{cacheName:e,event:c,oldResponse:d,newResponse:f,request:o})},k=q,M=async({request:e,fetchOptions:s,event:n,plugins:c=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=m(c,"fetchDidFail"),i=a.length>0?e.clone():null;try{for(const t of c)if("requestWillFetch"in t){const s=t.requestWillFetch,c=e.clone();e=await s.call(t,{request:c,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of c)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}const j={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let U;async function L(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},c=t?t(n):n,a=function(){if(void 0===U){const e=new Response("");if("body"in e)try{new Response(e.body),U=!0}catch(e){U=!1}U=!1}return U}()?s.body:await s.blob();return new Response(a,c)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}function I(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const c=new URL(n,location.href),a=new URL(n,location.href);return c.searchParams.set("__WB_REVISION__",s),{cacheKey:c.href,url:a.href}}class N{constructor(e){this.v=h(e),this.U=new Map,this.L=new Map,this.I=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:c}=I(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.U.has(c)&&this.U.get(c)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.U.get(c),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.I.has(e)&&this.I.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:c});this.I.set(e,n.integrity)}if(this.U.set(c,e),this.L.set(c,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],c=await self.caches.open(this.v),a=await c.keys(),i=new Set(a.map(e=>e.url));for(const[e,t]of this.U)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const c=this.I.get(s),a=this.L.get(n);return this.N({cacheKey:s,cacheMode:a,event:e,integrity:c,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.v),t=await e.keys(),s=new Set(this.U.values()),n=[];for(const c of t)s.has(c.url)||(await e.delete(c),n.push(c.url));return{deletedURLs:n}}async N({cacheKey:e,url:s,cacheMode:n,event:c,plugins:a,integrity:i}){const r=new Request(s,{integrity:i,cache:n,credentials:"same-origin"});let o,f=await M({event:c,plugins:a,request:r});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:c,request:r,response:f}):f.status<400))throw new t("bad-precaching-response",{url:s,status:f.status});f.redirected&&(f=await L(f)),await R({event:c,plugins:a,response:f,request:e===s?r:new Request(e),cacheName:this.v,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.U}getCachedURLs(){return[...this.U.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.U.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.v)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.v,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),c=new Request(e);return()=>n({request:c})}}let W;const E=()=>(W||(W=new N),W);const T=(e,t)=>{const s=E().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:c}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(c){const e=c({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let K=!1;function P(e){K||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const c=h();self.addEventListener("fetch",a=>{const i=T(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let r=self.caches.open(c).then(e=>e.match(i)).then(e=>e||fetch(i));a.respondWith(r)})})(e),K=!0)}const O=[],D={get:()=>O,add(e){O.push(...e)}},V=e=>{const t=E(),s=D.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},C=e=>{const t=E();e.waitUntil(t.activate())};var Z;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),Z={},function(e){E().addToCacheList(e),e.length>0&&(self.addEventListener("install",V),self.addEventListener("activate",C))}([{url:"_next/static/chunks/1f08f4eba5303e41b33b863258f7fe37b6ffc588.475aa6618c25f93d0df1.js",revision:"fc2214bee709c53c690461953e921c85"},{url:"_next/static/chunks/29107295.8007f4499acc1bea4d2b.js",revision:"cbfd6cc2bfe1dd2859ce6257974dd068"},{url:"_next/static/chunks/3277a954cf2ce36fa25592c085eb8d1243d5400c.e045abf429bc88180126.js",revision:"6173178c8f9fa474e7c1ab8cd1c9376c"},{url:"_next/static/chunks/38906be35e92ae7f11337703d75fe6c9e14d7b5b.b305084e226b9b2f4c71.js",revision:"9d9f86d1c9e27dd92aadcfffcae71029"},{url:"_next/static/chunks/3eae8c4565213f858b87567a8b278d090818dde2.372e1928c575f3c94e68.js",revision:"4531ed1ece6b1f0a5037b17b344a9cff"},{url:"_next/static/chunks/4c8e930312687554e8f6e60361fd4e446c053f3a.0b6be8f9b77e8ffd13d2.js",revision:"fa6fb5ae0dd3443807545a03910fba5a"},{url:"_next/static/chunks/6b46433a88d622f0fc087d1f7c0219e3fe880d05.4223c0dcc6431c2d353e.js",revision:"4fad2d99950a1f88fabe5813ca40d063"},{url:"_next/static/chunks/76e7250abc117026b45072dba9b0f53cbe475a0b.bfde6a9089ecd6cfc481.js",revision:"3e2d9c08494d31643fe56ff07abd003c"},{url:"_next/static/chunks/987db760109b99aa2bd077f18519439424585258.af22aa0fdf89a700808c.js",revision:"866a891e8e6bde31715e77cdf57a4a76"},{url:"_next/static/chunks/a29ae703.42bd497555d899daf3d4.js",revision:"d9b24a664a7b32dc0e464367e545693e"},{url:"_next/static/chunks/a5face7f66fed5505dcfa972d2cabb2e5aa2c0ea.d5bf74eac1e7bc7f1bd7.js",revision:"327e3e76290773681379b0eb97f37e57"},{url:"_next/static/chunks/b4a10c9374422a13db224ba3fa6c22e317fbf57a.1a9d9513fcf8cdc8345f.js",revision:"5a08a4b9a9f21bfe8be3058031e7173d"},{url:"_next/static/chunks/b8498c1b00880fafeb19552d2e74193ce1fef13a.3b8c3604099a090dab3c.js",revision:"dd99ea2b77755f3c2ec81a4632f1c509"},{url:"_next/static/chunks/be3111bbd3c878e8ba18f52976acdc24c6b1f126.70f4699df0a06c09c867.js",revision:"8857563d6fac7abde295315effad5783"},{url:"_next/static/chunks/c27af0083f842887ef15a06ec00d22950ede26e8.96e54de04c15d71ed2ef.js",revision:"7c80bca35ad30a75300ab5bf68a434f6"},{url:"_next/static/chunks/c96b4d7e.154f32a9bd6e99a966a9.js",revision:"bd60ea294f9d7dfe5c49aa007a388607"},{url:"_next/static/chunks/commons.018aad35841a922993e1.js",revision:"044a5a31283ab96744472d1c89866389"},{url:"_next/static/chunks/def3db12cd03c8e25edd6325fd7c245d186c30f9.1081c1c8525597342cf2.js",revision:"71475086f39b72820d55bf126a74a804"},{url:"_next/static/chunks/f93e6b084f754f9a905286c8a262241c670156d5.f88773aed99909610f92.js",revision:"70da0b1131262e5124b1ebe1eaf8963b"},{url:"_next/static/chunks/fc8d00fd.158594bfc26fc793d03b.js",revision:"718970d88a7e977d8c1fe92cb6b7c698"},{url:"_next/static/chunks/ffb898c298e6f093176cffb2ca40272c7caf9d12.9708f84493aff45b242d.js",revision:"5df4ead85ba5e333abd37ba9e37d2297"},{url:"_next/static/chunks/framework.ecbd939e3f22c21530d6.js",revision:"f1f44d4b846ef72b49ca7ba18b1f46ed"},{url:"_next/static/css/0b10e9f32b7d87c5b5ed.css",revision:"9b6bf2b0849057358aaaeb0dd19e37db"},{url:"_next/static/css/20de8917c44a516a459d.css",revision:"9a8cd95b5f951cd1c4dfc2843aaa0909"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/_buildManifest.js",revision:"f37a98de422bae85bc89237b7751fe14"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/_app.js",revision:"ba93d86ea38dcd2b4d3c5384d301193a"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/_error.js",revision:"0827f6428561a9d28eb8c9497af9f2b9"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/course/[cid]/course_overrides.js",revision:"5699e26fa759a57e7c31a61e8a7acf8c"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/course/[cid]/queue/[qid].js",revision:"dc8a7122c74381fa60b1b506b1c1d21e"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/course/[cid]/schedule.js",revision:"be2321197cb7615fdadb5c8bc723f089"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/course/[cid]/today.js",revision:"585d9fbf2acd5ff4628114bf2fa26cd3"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/dev.js",revision:"0232d57870c45ad8152ccd1bd8162ec0"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/index.js",revision:"ef828b0b82824ecb98b4170c6d1db8f9"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/login.js",revision:"10e7282e52b6607af66279780916f62a"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/nocourses.js",revision:"b3759ec0fa5b4431d876bb312b07b9c1"},{url:"_next/static/d2W0fcIMVaopMoxZ7gvkh/pages/settings.js",revision:"f00c9d17533fe0210b35a09bec14f253"},{url:"_next/static/runtime/main-e3d3bfc2aa5306ba04a6.js",revision:"8acf0016fc4df14d7c70bdef2f30f7e9"},{url:"_next/static/runtime/polyfills-129b8641b84b21697221.js",revision:"5f0b0318c90f1e0cdedbb1097ad94f47"},{url:"_next/static/runtime/webpack-1c5199ff66550d26e499.js",revision:"029ee2e7063b1566925082c49e4afc45"}]),P(Z),function(e,s,a){let i;if("string"==typeof e){const t=new URL(e,location.href);i=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)i=new c(e,s,a);else if("function"==typeof e)i=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}o().registerRoute(i)}(/^https?.*/,new class{constructor(e={}){if(this.v=d(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.W=t?e.plugins:[j,...e.plugins]}else this.W=[j];this.T=e.networkTimeoutSeconds||0,this.K=e.fetchOptions,this.P=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const c=[];let a;if(this.T){const{id:t,promise:i}=this.O({request:s,event:e,logs:n});a=t,c.push(i)}const i=this.D({timeoutId:a,request:s,event:e,logs:n});c.push(i);let r=await Promise.race(c);if(r||(r=await i),!r)throw new t("no-response",{url:s.url});return r}O({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.V({request:e,event:s}))},1e3*this.T)}),id:n}}async D({timeoutId:e,request:t,logs:s,event:n}){let c,a;try{a=await M({request:t,event:n,fetchOptions:this.K,plugins:this.W})}catch(e){c=e}if(e&&clearTimeout(e),c||!a)a=await this.V({request:t,event:n});else{const e=a.clone(),s=R({cacheName:this.v,request:t,response:e,event:n,plugins:this.W});if(n)try{n.waitUntil(s)}catch(e){}}return a}V({event:e,request:t}){return k({cacheName:this.v,request:t,event:e,matchOptions:this.P,plugins:this.W})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const c=this.C(n),a=this.Z(s);l(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return c?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.Z(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.A=e,this.M=e.maxAgeSeconds,this.S=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}Z(e){if(e===d())throw new t("expire-custom-caches-only");let s=this.S.get(e);return s||(s=new v(e,this.A),this.S.set(e,s)),s}C(e){if(!this.M)return!0;const t=this.B(e);if(null===t)return!0;return t>=Date.now()-1e3*this.M}B(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.S)await self.caches.delete(e),await t.delete();this.S=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
