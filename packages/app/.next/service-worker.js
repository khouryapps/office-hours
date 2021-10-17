try{self["workbox:core:5.1.3"]&&_()}catch(e){}const e=(e,...t)=>{let s=e;return t.length>0&&(s+=" :: "+JSON.stringify(t)),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(e){}const s=e=>e&&"object"==typeof e?e:{handle:e};class n{constructor(e,t,n="GET"){this.handler=s(t),this.match=e,this.method=n}}class c extends n{constructor(e,t,s){super(({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)},t,s)}}const a=e=>new URL(String(e),location.href).href.replace(new RegExp("^"+location.origin),"");class i{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map(e=>{"string"==typeof e&&(e=[e]);const t=new Request(...e);return this.handleRequest({request:t})}));e.waitUntil(s),e.ports&&e.ports[0]&&s.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:c}=this.findMatchingRoute({url:s,request:e,event:t});let a,i=c&&c.handler;if(!i&&this.s&&(i=this.s),i){try{a=i.handle({url:s,request:e,event:t,params:n})}catch(e){a=Promise.reject(e)}return a instanceof Promise&&this.i&&(a=a.catch(n=>this.i.handle({url:s,request:e,event:t}))),a}}findMatchingRoute({url:e,request:t,event:s}){const n=this.t.get(t.method)||[];for(const c of n){let n;const a=c.match({url:e,request:t,event:s});if(a)return n=a,(Array.isArray(a)&&0===a.length||a.constructor===Object&&0===Object.keys(a).length||"boolean"==typeof a)&&(n=void 0),{route:c,params:n}}return{}}setDefaultHandler(e){this.s=s(e)}setCatchHandler(e){this.i=s(e)}registerRoute(e){this.t.has(e.method)||this.t.set(e.method,[]),this.t.get(e.method).push(e)}unregisterRoute(e){if(!this.t.has(e.method))throw new t("unregister-route-but-not-found-with-method",{method:e.method});const s=this.t.get(e.method).indexOf(e);if(!(s>-1))throw new t("unregister-route-route-not-registered");this.t.get(e.method).splice(s,1)}}let r;const o=()=>(r||(r=new i,r.addFetchListener(),r.addCacheListener()),r);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},f=e=>[u.prefix,e,u.suffix].filter(e=>e&&e.length>0).join("-"),d=e=>e||f(u.precache),h=e=>e||f(u.runtime);function l(e){e.then(()=>{})}const b=new Set;class w{constructor(e,t,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.u=e,this.h=t,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((e,t)=>{let s=!1;setTimeout(()=>{s=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.u,this.h);n.onerror=()=>t(n.error),n.onupgradeneeded=e=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(e)},n.onsuccess=()=>{const t=n.result;s?t.close():(t.onversionchange=this.p.bind(this),e(t))}}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,s){return await this.getAllMatching(e,{query:t,count:s})}async getAllKeys(e,t,s){return(await this.getAllMatching(e,{query:t,count:s,includeKeys:!0})).map(e=>e.key)}async getAllMatching(e,{index:t,query:s=null,direction:n="next",count:c,includeKeys:a=!1}={}){return await this.transaction([e],"readonly",(i,r)=>{const o=i.objectStore(e),u=t?o.index(t):o,f=[],d=u.openCursor(s,n);d.onsuccess=()=>{const e=d.result;e?(f.push(a?e:e.value),c&&f.length>=c?r(f):e.continue()):r(f)}})}async transaction(e,t,s){return await this.open(),await new Promise((n,c)=>{const a=this.o.transaction(e,t);a.onabort=()=>c(a.error),a.oncomplete=()=>n(),s(a,e=>n(e))})}async g(e,t,s,...n){return await this.transaction([t],s,(s,c)=>{const a=s.objectStore(t),i=a[e].apply(a,n);i.onsuccess=()=>c(i.result)})}close(){this.o&&(this.o.close(),this.o=null)}}w.prototype.OPEN_TIMEOUT=2e3;const p={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(p))for(const s of t)s in IDBObjectStore.prototype&&(w.prototype[s]=async function(t,...n){return await this.g(s,t,e,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(e){}const y=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class g{constructor(e){this.v=e,this.o=new w("workbox-expiration",1,{onupgradeneeded:e=>this.m(e)})}m(e){const t=e.target.result.createObjectStore("cache-entries",{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),(async e=>{await new Promise((t,s)=>{const n=indexedDB.deleteDatabase(e);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{t()}})})(this.v)}async setTimestamp(e,t){const s={url:e=y(e),timestamp:t,cacheName:this.v,id:this.q(e)};await this.o.put("cache-entries",s)}async getTimestamp(e){return(await this.o.get("cache-entries",this.q(e))).timestamp}async expireEntries(e,t){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const c=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),a=[];let i=0;c.onsuccess=()=>{const s=c.result;if(s){const n=s.value;n.cacheName===this.v&&(e&&n.timestamp<e||t&&i>=t?a.push(s.value):i++),s.continue()}else n(a)}}),n=[];for(const e of s)await this.o.delete("cache-entries",e.id),n.push(e.url);return n}q(e){return this.v+"|"+y(e)}}class v{constructor(e,t={}){this._=!1,this.R=!1,this.j=t.maxEntries,this.L=t.maxAgeSeconds,this.v=e,this.C=new g(e)}async expireEntries(){if(this._)return void(this.R=!0);this._=!0;const e=this.L?Date.now()-1e3*this.L:0,t=await this.C.expireEntries(e,this.j),s=await self.caches.open(this.v);for(const e of t)await s.delete(e);this._=!1,this.R&&(this.R=!1,l(this.expireEntries()))}async updateTimestamp(e){await this.C.setTimestamp(e,Date.now())}async isURLExpired(e){if(this.L){return await this.C.getTimestamp(e)<Date.now()-1e3*this.L}return!1}async delete(){this.R=!1,await this.C.expireEntries(1/0)}}const m=(e,t)=>e.filter(e=>t in e),q=async({request:e,mode:t,plugins:s=[]})=>{const n=m(s,"cacheKeyWillBeUsed");let c=e;for(const e of n)c=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:c}),"string"==typeof c&&(c=new Request(c));return c},x=async({cacheName:e,request:t,event:s,matchOptions:n,plugins:c=[]})=>{const a=await self.caches.open(e),i=await q({plugins:c,request:t,mode:"read"});let r=await a.match(i,n);for(const t of c)if("cachedResponseWillBeUsed"in t){const c=t.cachedResponseWillBeUsed;r=await c.call(t,{cacheName:e,event:s,matchOptions:n,cachedResponse:r,request:i})}return r},R=async({cacheName:e,request:s,response:n,event:c,plugins:i=[],matchOptions:r})=>{const o=await q({plugins:i,request:s,mode:"write"});if(!n)throw new t("cache-put-with-no-response",{url:a(o.url)});const u=await(async({request:e,response:t,event:s,plugins:n=[]})=>{let c=t,a=!1;for(const t of n)if("cacheWillUpdate"in t){a=!0;const n=t.cacheWillUpdate;if(c=await n.call(t,{request:e,response:c,event:s}),!c)break}return a||(c=c&&200===c.status?c:void 0),c||null})({event:c,plugins:i,response:n,request:o});if(!u)return;const f=await self.caches.open(e),d=m(i,"cacheDidUpdate"),h=d.length>0?await x({cacheName:e,matchOptions:r,request:o}):null;try{await f.put(o,u)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of b)await e()}(),e}for(const t of d)await t.cacheDidUpdate.call(t,{cacheName:e,event:c,oldResponse:h,newResponse:u,request:o})},j=x,L=async({request:e,fetchOptions:s,event:n,plugins:c=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const a=m(c,"fetchDidFail"),i=a.length>0?e.clone():null;try{for(const t of c)if("requestWillFetch"in t){const s=t.requestWillFetch,c=e.clone();e=await s.call(t,{request:c,event:n})}}catch(e){throw new t("plugin-error-request-will-fetch",{thrownError:e})}const r=e.clone();try{let t;t="navigate"===e.mode?await fetch(e):await fetch(e,s);for(const e of c)"fetchDidSucceed"in e&&(t=await e.fetchDidSucceed.call(e,{event:n,request:r,response:t}));return t}catch(e){for(const t of a)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:i.clone(),request:r.clone()});throw e}};try{self["workbox:strategies:5.1.3"]&&_()}catch(e){}const C={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null};let k;async function U(e,t){const s=e.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},c=t?t(n):n,a=function(){if(void 0===k){const e=new Response("");if("body"in e)try{new Response(e.body),k=!0}catch(e){k=!1}k=!1}return k}()?s.body:await s.blob();return new Response(a,c)}try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}function Y(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:n}=e;if(!n)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const c=new URL(n,location.href),a=new URL(n,location.href);return c.searchParams.set("__WB_REVISION__",s),{cacheKey:c.href,url:a.href}}class I{constructor(e){this.v=d(e),this.k=new Map,this.U=new Map,this.Y=new Map}addToCacheList(e){const s=[];for(const n of e){"string"==typeof n?s.push(n):n&&void 0===n.revision&&s.push(n.url);const{cacheKey:e,url:c}=Y(n),a="string"!=typeof n&&n.revision?"reload":"default";if(this.k.has(c)&&this.k.get(c)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this.k.get(c),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this.Y.has(e)&&this.Y.get(e)!==n.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:c});this.Y.set(e,n.integrity)}if(this.k.set(c,e),this.U.set(c,a),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const s=[],n=[],c=await self.caches.open(this.v),a=await c.keys(),i=new Set(a.map(e=>e.url));for(const[e,t]of this.k)i.has(t)?n.push(e):s.push({cacheKey:t,url:e});const r=s.map(({cacheKey:s,url:n})=>{const c=this.Y.get(s),a=this.U.get(n);return this.I({cacheKey:s,cacheMode:a,event:e,integrity:c,plugins:t,url:n})});await Promise.all(r);return{updatedURLs:s.map(e=>e.url),notUpdatedURLs:n}}async activate(){const e=await self.caches.open(this.v),t=await e.keys(),s=new Set(this.k.values()),n=[];for(const c of t)s.has(c.url)||(await e.delete(c),n.push(c.url));return{deletedURLs:n}}async I({cacheKey:e,url:s,cacheMode:n,event:c,plugins:a,integrity:i}){const r=new Request(s,{integrity:i,cache:n,credentials:"same-origin"});let o,u=await L({event:c,plugins:a,request:r});for(const e of a||[])"cacheWillUpdate"in e&&(o=e);if(!(o?await o.cacheWillUpdate({event:c,request:r,response:u}):u.status<400))throw new t("bad-precaching-response",{url:s,status:u.status});u.redirected&&(u=await U(u)),await R({event:c,plugins:a,response:u,request:e===s?r:new Request(e),cacheName:this.v,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.k}getCachedURLs(){return[...this.k.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this.k.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.v)).match(s)}}createHandler(e=!0){return async({request:s})=>{try{const e=await this.matchPrecache(s);if(e)return e;throw new t("missing-precache-entry",{cacheName:this.v,url:s instanceof Request?s.url:s})}catch(t){if(e)return fetch(s);throw t}}}createHandlerBoundToURL(e,s=!0){if(!this.getCacheKeyForURL(e))throw new t("non-precached-url",{url:e});const n=this.createHandler(s),c=new Request(e);return()=>n({request:c})}}let N;const F=()=>(N||(N=new I),N);const H=(e,t)=>{const s=F().getURLsToCacheKeys();for(const n of function*(e,{ignoreURLParametersMatching:t,directoryIndex:s,cleanURLs:n,urlManipulation:c}={}){const a=new URL(e,location.href);a.hash="",yield a.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some(e=>e.test(s))&&e.searchParams.delete(s);return e}(a,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(n){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(c){const e=c({url:a});for(const t of e)yield t.href}}(e,t)){const e=s.get(n);if(e)return e}};let E=!1;function M(e){E||((({ignoreURLParametersMatching:e=[/^utm_/],directoryIndex:t="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const c=d();self.addEventListener("fetch",a=>{const i=H(a.request.url,{cleanURLs:s,directoryIndex:t,ignoreURLParametersMatching:e,urlManipulation:n});if(!i)return;let r=self.caches.open(c).then(e=>e.match(i)).then(e=>e||fetch(i));a.respondWith(r)})})(e),E=!0)}const T=[],K={get:()=>T,add(e){T.push(...e)}},P=e=>{const t=F(),s=K.get();e.waitUntil(t.install({event:e,plugins:s}).catch(e=>{throw e}))},V=e=>{const t=F();e.waitUntil(t.activate())};var O;self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),O={},function(e){F().addToCacheList(e),e.length>0&&(self.addEventListener("install",P),self.addEventListener("activate",V))}([{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/_buildManifest.js",revision:"b31cd1bed295d3838d14f367b0191687"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/_app.js",revision:"8d9a4fff9ce12e016ddf513287000865"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/_error.js",revision:"deaaf37cf1654301b5eb7c1daa4700bd"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/about.js",revision:"3f05052dcc74f13e16348f1f507d6ea1"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/apply.js",revision:"ea93489adc308d8eb32883bbfa6058e7"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/course/[cid]/course_admin_panel.js",revision:"ed963d392c32d79c8abc43cd146859af"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/course/[cid]/insights.js",revision:"56166a6b51c58657b6ed2f914f9ea76a"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/course/[cid]/queue/[qid].js",revision:"f8572d37b7b4f91b8be3974a19be7e39"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/course/[cid]/schedule.js",revision:"0858ec3eef07dd56dc159de9c11a6caf"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/course/[cid]/today.js",revision:"80b7d8ceecdcc05a2f1e9cd3c4758b88"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/dev.js",revision:"f1e4d00643119788ecf5aff1241f9030"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/index.js",revision:"97cc4d2894e728ddaca78d69c8d97b31"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/login.js",revision:"07d5a93aee5770a15900cc5c68f2e7a4"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/nocourses.js",revision:"a31ac0e1303ca3c2e316ea10968b141a"},{url:"_next/static/C9VH2qYYClwZqL7IsF2ye/pages/settings.js",revision:"acb7d4b1a172189daf6b27151f3879c9"},{url:"_next/static/chunks/08e085667b2951d7e0b2804040c0c660f5469320.b13c5aa46dfb1f1f70da.js",revision:"ec4d74640a9c2896b313482ea5159dad"},{url:"_next/static/chunks/0f9b8dd296734a3d73ee8200c1fcf89a121dacb4.fa2324bc3039ea58347f.js",revision:"c2d737c840934ec8e3e579097c28b04e"},{url:"_next/static/chunks/17b1c50a5cd5bd5a511605b054839bee3ff8c989.a1d813c68209a5d4093a.js",revision:"8a213b46aac20723ce4d5f119ad84c9c"},{url:"_next/static/chunks/22e0c84e636f1a4781732a3a8cb5ed4ba9f650dd.a1a95beefec169d7460d.js",revision:"5ff0c91c6ae7cbc61f6b02375f205682"},{url:"_next/static/chunks/2edb282b.447431f66183fc95b972.js",revision:"66cf81593898474d08f64d90707ed0d5"},{url:"_next/static/chunks/311eead2b31d180ce1258f173811ce37a466cfad.96e54de04c15d71ed2ef.js",revision:"28889c5aed45f32e69c21d75104ee5e0"},{url:"_next/static/chunks/348f62bc2f099248afc351b27f69986ee1278482.f9719ccd43d50852a44e.js",revision:"403a7574b7b2f71186892720530c9a1e"},{url:"_next/static/chunks/3f33a0e3c6d9ebf1ba53dcff9563c4b8399d942f.853a340f9b95915b7750.js",revision:"764ab6669fb395bbe1fbcf6c90cb8f37"},{url:"_next/static/chunks/43.27f3bc2aff30a03d3c59.js",revision:"ed5685a21267d687cbd307f362f429e4"},{url:"_next/static/chunks/472438dc2f4dfb78a0c012a20e63a332ff1d23d8.d3a9b3272d1ffcc99160.js",revision:"3852e45443dffb84510592c25b3528c1"},{url:"_next/static/chunks/49405c4aef675236bd1a63a00fa4547c68588369.906f7f4c95a95e0e27c5.js",revision:"16b3c6606679137525ac7b437e0a9385"},{url:"_next/static/chunks/7a701e708071e6c7d5d47edc0895ee880b1b1cb4.3c1a2036537077bb13dc.js",revision:"304dd9f23683f2f5e098351ae460b45b"},{url:"_next/static/chunks/9381a17950df01cefc426d25e03fe5c71735db51.f75fe8e7fdacf18aefc8.js",revision:"b7db1e2fc9ff8454380b3058d47e9143"},{url:"_next/static/chunks/93adf1890338cb987fea052836258b640b3b8377.bd9ec2720446f07d5129.js",revision:"504fa2113838be8786228bd66d358d26"},{url:"_next/static/chunks/9778df2d47bded23ec9ac3fe67127f68a21007a9.c43266ddd0bf3153790b.js",revision:"4905efd1dc2f7034b17b10450e6b94e7"},{url:"_next/static/chunks/a25a8a19e1f29a0cbdeae686a3e9bac312828955.836de05d80e990630ed3.js",revision:"ee61b56a1734ceb303bada00e0e0d104"},{url:"_next/static/chunks/a29ae703.0a12156631b79073b1ae.js",revision:"ecacaa763d428e9e519cb65fbedd43e2"},{url:"_next/static/chunks/b027d15d7b609ed9b9b7e1ce14cc7a48eb621bed.14d6add48235ffcdb7fa.js",revision:"fdc40378f4c1aed7766ba9cb8aa9c352"},{url:"_next/static/chunks/bf9d30c30a7a9a93a68a78aac6531a8cba327db3.61cb1a7245c973736e23.js",revision:"bac21198a284fb6918fe779ad06e7d85"},{url:"_next/static/chunks/bfb8b553a83343b31b5e7d6883bb47262489762c.13b213cc13db2021044b.js",revision:"a8ca918bc99e0add2bab9e049cf6b5df"},{url:"_next/static/chunks/c549c9287bae7d59356efea7a7c357142d37b82b.dc4666c6652e1a7d8d2e.js",revision:"953ea1fec1e733648c2a50922a405cb6"},{url:"_next/static/chunks/c96b4d7e.a2d0e8cc8edb0221c411.js",revision:"3fad2112bcce4ff66b9cbe386c201086"},{url:"_next/static/chunks/commons.f164d7c9e1dd5441a9a0.js",revision:"ca45a9135ff51e233843293fcaa42b24"},{url:"_next/static/chunks/d05258c5bddb8279e1e3160d95630cb3e74f850a.9708f84493aff45b242d.js",revision:"d9b895193e559d08e4418d07331ab08b"},{url:"_next/static/chunks/e45eb9160d66403d5bce4823fb7db78304c6bef3.295df13cd6a07c8b69fb.js",revision:"2f6c7d2c3a5d4e2a5ba5ad6308826a0b"},{url:"_next/static/chunks/fc8d00fd.fa9fcfd4da2f820ee427.js",revision:"dbb7edca6b05b0fadd49ddd9320b555d"},{url:"_next/static/chunks/framework.c06ceb3f90185a0b4876.js",revision:"768f6e3921275b08d5e9b59c13c72111"},{url:"_next/static/css/0b10e9f32b7d87c5b5ed.css",revision:"9b6bf2b0849057358aaaeb0dd19e37db"},{url:"_next/static/css/20de8917c44a516a459d.css",revision:"9a8cd95b5f951cd1c4dfc2843aaa0909"},{url:"_next/static/runtime/main-b1b4712e33b9ff7044eb.js",revision:"093d7fd2cf995224675c4fa4c23bf1e3"},{url:"_next/static/runtime/polyfills-bf92a078ca839563e521.js",revision:"7e419fe263cbbf4b98792e68b2116ae6"},{url:"_next/static/runtime/webpack-e55fc2d365506f448fa9.js",revision:"4745b21fbb5809efe46937e00a968b47"}]),M(O),function(e,s,a){let i;if("string"==typeof e){const t=new URL(e,location.href);i=new n(({url:e})=>e.href===t.href,s,a)}else if(e instanceof RegExp)i=new c(e,s,a);else if("function"==typeof e)i=new n(e,s,a);else{if(!(e instanceof n))throw new t("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});i=e}o().registerRoute(i)}(/^https?.*/,new class{constructor(e={}){if(this.v=h(e.cacheName),e.plugins){const t=e.plugins.some(e=>!!e.cacheWillUpdate);this.N=t?e.plugins:[C,...e.plugins]}else this.N=[C];this.F=e.networkTimeoutSeconds||0,this.H=e.fetchOptions,this.M=e.matchOptions}async handle({event:e,request:s}){const n=[];"string"==typeof s&&(s=new Request(s));const c=[];let a;if(this.F){const{id:t,promise:i}=this.T({request:s,event:e,logs:n});a=t,c.push(i)}const i=this.K({timeoutId:a,request:s,event:e,logs:n});c.push(i);let r=await Promise.race(c);if(r||(r=await i),!r)throw new t("no-response",{url:s.url});return r}T({request:e,logs:t,event:s}){let n;return{promise:new Promise(t=>{n=setTimeout(async()=>{t(await this.P({request:e,event:s}))},1e3*this.F)}),id:n}}async K({timeoutId:e,request:t,logs:s,event:n}){let c,a;try{a=await L({request:t,event:n,fetchOptions:this.H,plugins:this.N})}catch(e){c=e}if(e&&clearTimeout(e),c||!a)a=await this.P({request:t,event:n});else{const e=a.clone(),s=R({cacheName:this.v,request:t,response:e,event:n,plugins:this.N});if(n)try{n.waitUntil(s)}catch(e){}}return a}P({event:e,request:t}){return j({cacheName:this.v,request:t,event:e,matchOptions:this.M,plugins:this.N})}}({cacheName:"offlineCache",plugins:[new class{constructor(e={}){var t;this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:s,cachedResponse:n})=>{if(!n)return null;const c=this.V(n),a=this.O(s);l(a.expireEntries());const i=a.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(e){}return c?n:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const s=this.O(e);await s.updateTimestamp(t.url),await s.expireEntries()},this.Z=e,this.L=e.maxAgeSeconds,this.D=new Map,e.purgeOnQuotaError&&(t=()=>this.deleteCacheAndMetadata(),b.add(t))}O(e){if(e===h())throw new t("expire-custom-caches-only");let s=this.D.get(e);return s||(s=new v(e,this.Z),this.D.set(e,s)),s}V(e){if(!this.L)return!0;const t=this.A(e);if(null===t)return!0;return t>=Date.now()-1e3*this.L}A(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[e,t]of this.D)await self.caches.delete(e),await t.delete();this.D=new Map}}({maxEntries:200,purgeOnQuotaError:!0})]}),"GET");
//# sourceMappingURL=service-worker.js.map
