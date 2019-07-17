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
    "revision": "e748d5d8455ed10dadfc9a4f75fe6ae8"
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
    "url": "assets/js/11.007a341d.js",
    "revision": "bd28e39919f69814be7533b5168482a5"
  },
  {
    "url": "assets/js/12.c87a5366.js",
    "revision": "d1b853abe0ce162e7907a75f17023ee4"
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
    "url": "assets/js/6.35b89fea.js",
    "revision": "4cb541ca138ab1637ae30f8de7f931dc"
  },
  {
    "url": "assets/js/7.9d0192c5.js",
    "revision": "d2005c4ae0153454e34dfedd06861880"
  },
  {
    "url": "assets/js/8.10cb4370.js",
    "revision": "5dfac62e01d4aca7fa2ee2012bfca5d6"
  },
  {
    "url": "assets/js/9.6accfc51.js",
    "revision": "fe846913e117d22fd9f878e508797f2a"
  },
  {
    "url": "assets/js/app.168ebb45.js",
    "revision": "8b447e285d6fab079f56572c4dd8656d"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "f7c656b434028497ff46e57fa31ea1b5"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "8a641ad54dff1e9f1582aa8c5f8814cf"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "ae23e9f9f96b0c9c3a5527a56fcdca3b"
  },
  {
    "url": "fr/index.html",
    "revision": "74d3654818f6e241c687b73a9577ef38"
  },
  {
    "url": "guide/index.html",
    "revision": "327039f0b8f094a6f77ca45be90b3c0e"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "46652d1f1618739430f42ea268ffd6ef"
  },
  {
    "url": "index.html",
    "revision": "750cb70f230bc67065cdf14dc8063b23"
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
