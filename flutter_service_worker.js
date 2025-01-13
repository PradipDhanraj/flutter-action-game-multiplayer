'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8490e6bd97b9ad4d685205d2cee5da6d",
"index.html": "a26e186d9d58c5f47a230802759c9054",
"/": "a26e186d9d58c5f47a230802759c9054",
"main.dart.js": "32c4cf680c403266ab547853152afb83",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8bcd00ef6c392f950414abf9c069fd11",
"assets/AssetManifest.json": "c071bda388937177ae6b3ddd9984b3bd",
"assets/NOTICES": "58e339a7a15803d3290028a9e544e3cc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7d5f3ddb52d9d51cf3d76d27a5542ee5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "37e22ff59480853c79f07139e6920a70",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/Background/industry/4.png": "90f6cc9584d630726a2fa7153337b28a",
"assets/assets/images/Background/industry/2.png": "e09b17858b5d6b3a93dea82a3a90f95b",
"assets/assets/images/Background/industry/3.png": "72e7918be8d818fe4eec1cff129d2ab6",
"assets/assets/images/Background/industry/1.png": "5badf40aabe00ef306dc5ec96b23f423",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Desappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Guns/Bullets/5.png": "8a644912c558fe23b94e816b6b9b2828",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Enemies/Chicken/Idle%2520(32x34).png": "540724fcaccd692f5d3adb169fa8db2b",
"assets/assets/images/Enemies/Chicken/Run%2520(32x34).png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/images/Enemies/Chicken/Hit%2520(32x34).png": "1a0b324bc2c06c132f6e17d509928a34",
"assets/assets/images/HUD/Joystick.png": "0d48d554dbd23681dc2c3dc26d9ec0cc",
"assets/assets/images/HUD/JumpButton.png": "c365c9b1778af4f9775873544b7feab1",
"assets/assets/images/HUD/Knob.png": "07acc29d4e539b9c402f4f1a57d9f4e0",
"assets/assets/tiles/Pixel%2520Adventure.tsx": "dc8991fcf1e3a5d873305140410f2bb4",
"assets/assets/tiles/Pixel%2520Adventure.tiled-project": "f3345de7d9f33cbee85b1453acfc54e3",
"assets/assets/tiles/Pixel%2520Adventure.tiled-session": "d1355f37227537d4768945cacebba49b",
"assets/assets/tiles/Level-02.tmx": "4a5903921852b22ccc93e291b2d8274b",
"assets/assets/tiles/Level-01.tmx": "9369dff83309fd96d941266faaaea24f",
"assets/assets/audio/bounce.wav": "63621de02044af415adcb0cdbc7afe87",
"assets/assets/audio/jump.wav": "0955bb8692212a59ffbf265053d0f09a",
"assets/assets/audio/collect_fruit.wav": "81efa093638b482b3593b1022837169d",
"assets/assets/audio/hit.wav": "3c90d1d642f2409a1ccede4189b8618f",
"assets/assets/audio/disappear.wav": "1d328b82b7707e42002f42927346e923",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
