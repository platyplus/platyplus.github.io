/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a2785ce2353b0150a655d11d1a2ea577"
  },
  {
    "url": "assets/css/0.styles.471514ee.css",
    "revision": "ec4e07b368e0ee71def45ebaa2e5a059"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b7666f8.js",
    "revision": "f979ad8490e27472257d550ab661728a"
  },
  {
    "url": "assets/js/11.bd3a53ed.js",
    "revision": "b762a2e16343c2edd49108ddfef2664b"
  },
  {
    "url": "assets/js/12.1ba16e47.js",
    "revision": "c2b8d4cf6d25ee5b483a24917e95ee75"
  },
  {
    "url": "assets/js/13.52658384.js",
    "revision": "842943ce7d4a75f89cc8755250ab28c1"
  },
  {
    "url": "assets/js/3.33e4fcf2.js",
    "revision": "323c5a10416e7662a9b40c4c2f2739c6"
  },
  {
    "url": "assets/js/4.cb987ff6.js",
    "revision": "68c7992ec792e2fc047fb93e66df3869"
  },
  {
    "url": "assets/js/5.509d06a8.js",
    "revision": "6b8f18f42606e2afd8a369bcda353316"
  },
  {
    "url": "assets/js/6.613db955.js",
    "revision": "d91d94ade4b1ae755f40348051ed6fe8"
  },
  {
    "url": "assets/js/7.ed97ee65.js",
    "revision": "7af33fd53625b74a017fcf9dc88d91d9"
  },
  {
    "url": "assets/js/8.ab052882.js",
    "revision": "f6c84ba03781e4544aa020e849a1ffc0"
  },
  {
    "url": "assets/js/9.286d8316.js",
    "revision": "993f646dda995bc97a69f63c821cb193"
  },
  {
    "url": "assets/js/app.5dc1314b.js",
    "revision": "88216d1a367c388e988b784f12997e77"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "071342366f9b8dc51bebddc0e816f147"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "298863f36a04372d66cb41223073984c"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "46f97746bd18c8984b24d0b28feec1f5"
  },
  {
    "url": "fr/index.html",
    "revision": "ef6297f8cb7050c9a005b7a7f500f2e0"
  },
  {
    "url": "guide/index.html",
    "revision": "0f47a6bda2e3ed7964cc634e37e39cab"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "0a318b7995ee2dbbf0c1bf56dd95300b"
  },
  {
    "url": "index.html",
    "revision": "8c6835a0a5bb44dc5b399b6ebb4c6315"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
