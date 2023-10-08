'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "fe8d415bb8d66ac2ac3d13f17098cbf5",
"assets/AssetManifest.smcbin": "eb9fab203b7eced7315bc1de2cbe165d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "bd048815da8f461a1e4178b4d57e8430",
"assets/images/%25D8%25A7%25D9%2584%25D8%25A7%25D8%25B3%25D8%25AA%25D8%25AE%25D8%25AF%25D8%25A7%25D9%2585.png": "ffe03b13f86ded98a69bdedfac9dffdd",
"assets/images/%25D8%25A8%25D8%25A7%25D8%25B5%25D8%25A7%25D8%25AA.png": "5832569f9c8d612c99b22df4a0ce6c40",
"assets/images/%25D9%2584%25D9%2584%25D9%2583%25D9%2584.jpg": "b023124ea9d112cfebced767e9503357",
"assets/images/0ab23.png": "c9bc87a2a83efae85c1f804893839a40",
"assets/images/0ad3.jpg": "ca5d778a81096d0129e912b28075358f",
"assets/images/0ad5.jpg": "d5df4972222c02116ef174bb8701feb6",
"assets/images/0ag3.jpg": "2ec57d43235ff9b1f7981cba03aa878f",
"assets/images/0aw.jpg": "fc838cc1e7f4189eb1fe0a369cdee9bb",
"assets/images/0aww.jpg": "fcab33366dc8487cfce20ef5b32008bc",
"assets/images/0B.jpg": "a75f5abcd4218712faac7c089932c3f5",
"assets/images/0H.jpg": "7a33e354976c470c4ec2c1177d82fc21",
"assets/images/11j.png": "6ab94174e0d9ec31ac7a0f9b1e622cc8",
"assets/images/14j.png": "1e7fcba1b022ed729121d4b7f1b64295",
"assets/images/16j.jpg": "6e4d12ab662e6c823c773c862d7ae1dc",
"assets/images/1ab23.png": "1aa4c5292202d54b43a476c9d20afc6b",
"assets/images/1ad3.jpg": "5260ae60b90474426385cdf7c278fffc",
"assets/images/1ad5.jpg": "0c33235a96752da23c15b149b650d48a",
"assets/images/1aw.jpg": "a8d8c001f835820fae7306c3a80b29fa",
"assets/images/1aww.jpg": "67cb7704b3d3cf915caf5565afdd9b49",
"assets/images/1B.jpg": "6db0ff3c67408fba29af064787834b75",
"assets/images/1H.jpg": "c1c93cf3dbcf39e68d0e14550b1fa4c1",
"assets/images/2.jpg": "e75074e07dbf925ba468660f9d3c8591",
"assets/images/2ab23.png": "d562ebd401b2cfe9704124cddc747946",
"assets/images/2ad5.jpg": "3db8d2cc312dfbb322f84c2ec69fe1be",
"assets/images/2aw.jpg": "b5c23d1eb0e722f8e1a94927a5ddd96a",
"assets/images/2B.jpg": "90280ef79498137fa7acfa2b0cd9d8e7",
"assets/images/2b12.png": "453c1030b5926e90582cf64b1131cbe1",
"assets/images/2D.jpg": "013a0d0b0b156671a3a4d379099396c9",
"assets/images/2H.jpg": "b5c23d1eb0e722f8e1a94927a5ddd96a",
"assets/images/3aw.jpg": "b3d7cb176f0a1a08487cee9735c2d3c1",
"assets/images/3H.jpg": "0ef2e0960a65ca9887a7d00327fe3502",
"assets/images/4H.jpg": "833a50e003725905105e68d1a15619f2",
"assets/images/5.png": "6c78070aa9f58557aae4a2a661d5b650",
"assets/images/50j.png": "38751d1dd2a81db6197558b0e56d12dd",
"assets/images/5H.jpg": "8b0fdbe652dc4eb93de1615fbc0db527",
"assets/images/5M1.jpg": "b4fdaae607a01fb9169ee9b148b27879",
"assets/images/6H.jpg": "af0ff05b8e550a99ea2ce859141a2ab9",
"assets/images/7H.jpg": "baf427f621551f0afdad90835ec80fa4",
"assets/images/AAA.png": "2a1200ae77ae7884f4c9ed2dd0ec3338",
"assets/images/ab1.png": "2ff681190222b660a7d4d307686e9f4d",
"assets/images/D&P.jpg": "61d6b723d9735f245bb58dc01be9e55d",
"assets/images/DDD1.png": "b1f1c178d8acd42b3c2357724afc5bd9",
"assets/images/DDD2.png": "c3a6e6ae5f9b4d166020d712f9736bfb",
"assets/images/DDD3.png": "0aad333a292b91ca303cfa91c7260373",
"assets/images/DDD4.png": "3cc2be1230b08f7bc1e0d96e44159ce9",
"assets/images/DDD5.png": "01f748d818b2d326bde4a1b8d50534bc",
"assets/images/detal.png": "62ec78a39e6f99237c317bd4c87d9d93",
"assets/images/edit.png": "85da6690cd2082314c581fc43791be53",
"assets/images/how.png": "6c12ff8c214d8a6158f69c42ecb241e4",
"assets/images/how1.png": "17ce42b3a6f3830bf36566c48f882bf4",
"assets/images/how2.png": "b2860e92a8e5632b32f1ecaa19ad4263",
"assets/images/how3.png": "5ae744b4d0e203c19bc63c4a8c2f422b",
"assets/images/logo.png": "c28ee66015fbe33aacae6a6b134f8f42",
"assets/images/M&N.jpg": "41664cde6bb5871c48a2cca4ac6b792c",
"assets/images/map.png": "c0af7c14e983e25b43818ad59ed1196c",
"assets/images/map2.png": "af84409ae172498aad28599c255b2fd6",
"assets/images/N&M.jpg": "8722e27f26f087abba50289e111ab17b",
"assets/images/NB.png": "b190dd881a9dd175c126f449e9bb91df",
"assets/images/NF.png": "5d421d0f97948587c406417b489b6abb",
"assets/images/NG.png": "76104c08d0be74bd5b32d1f0722bef03",
"assets/images/PH&P.jpg": "b71aaecc762e59017db0af560c474ac7",
"assets/images/prof1.png": "44b059bf21234bc47efc8e9d2d3d80bf",
"assets/images/prof2.png": "4fd511798ea938b80f1ce541cdb7b127",
"assets/images/prof3.png": "db711cd9486ae3231958722ac2348203",
"assets/images/prof4.png": "f97372f30909dfc82b0f44f8aca0abd2",
"assets/images/prof5.png": "23d4aaa7877cccd1046e79b5b71ec651",
"assets/images/SB.png": "55ae133c1db73166969e4fc87a25aef8",
"assets/images/SF.png": "b6ed9f84a90f52eaabe912beef326fe4",
"assets/images/SG.png": "fde425918341b189574cea9243c80914",
"assets/images/share.png": "2f9b8309e1a0fac8b53d630d351cdfd6",
"assets/images/url.png": "8a167be39ae4f72e5eb37c38b8699105",
"assets/images/url2.png": "8f342b8acb1b9a79d54cd98bb11b3e4c",
"assets/NOTICES": "496237315f519b5231c963ca80442c21",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.ico": "bfcb8cf0a8c96e738947ad55f03f8727",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "f2554732654296e961cd90403e91d407",
"icons/Icon-512.png": "93b032e6952637604479805d7e56a5fa",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2baf864ceba01f4b602cd785e156616b",
"/": "2baf864ceba01f4b602cd785e156616b",
"main.dart.js": "2d89266ca8216bbabd3f14a7bad98067",
"manifest.json": "34aef581e57689646a67ce243508b984",
"version.json": "17f68e3ef7782ae30752ada302709bb8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
