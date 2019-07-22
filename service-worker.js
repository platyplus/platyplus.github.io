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
    "revision": "319403835c7c20e731ba7975cdafd153"
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
    "url": "assets/js/10.75d51573.js",
    "revision": "bf6b2d8e7fe90227c7983740f3846610"
  },
  {
    "url": "assets/js/11.bd3a53ed.js",
    "revision": "b762a2e16343c2edd49108ddfef2664b"
  },
  {
    "url": "assets/js/12.dfbbe8c8.js",
    "revision": "2e71b9aaf394d598f81e055aba28361e"
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
    "url": "assets/js/9.8f291883.js",
    "revision": "d1382361ce5692f13e9b17beb665b851"
  },
  {
    "url": "assets/js/app.f5c22ef5.js",
    "revision": "5905a2b6dea8a2faffb964f72c14d906"
  },
  {
    "url": "assets/js/vendors~docsearch.cf35b7a4.js",
    "revision": "873e4ba38f60a3ba1ea4c6f88546d82b"
  },
  {
    "url": "developpers/index.html",
    "revision": "5bbdc72763ef70bd2bee0ba77ba06cc7"
  },
  {
    "url": "fr/developpers/index.html",
    "revision": "27f253dbac9474ec53d15115c4d058b1"
  },
  {
    "url": "fr/guide/index.html",
    "revision": "ecaa2d71a16bc93c2bbbf10997dc669e"
  },
  {
    "url": "fr/index.html",
    "revision": "33a124ed3ab3910d7e70db1f8e404a33"
  },
  {
    "url": "guide/index.html",
    "revision": "c1aa0637ad582f0e0ede49bf50e01e6c"
  },
  {
    "url": "hero.jpg",
    "revision": "1189aec70f98c07a6684dd0386e9d175"
  },
  {
    "url": "implementers/index.html",
    "revision": "7a4e127f9c61481a81f7b6e88a8b3d37"
  },
  {
    "url": "index.html",
    "revision": "9839435e94a221e7abe72dbd877fd6da"
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
